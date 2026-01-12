document.addEventListener("DOMContentLoaded", function () {
    // ================= 配置区域 =================
    const CONFIG = {
        snowColorDark: "255, 255, 255", // 深色模式颜色
        snowColorLight: "202, 230, 251", // 浅色模式颜色
        amount: 100,                     // 雪花数量
        speed: 0.5,                      // 基础速度
        fadeSpeed: 0.05                  // 渐变速度 (0.01 - 0.1)
    };

    // Material Design Icons 的 SVG Path 数据
    // 开启状态：Snowflake
    const ICON_ON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" /></svg>';
    // 关闭状态：Snowflake Off
    const ICON_OFF = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5.12L9.29 3.41L10.71 2L12 3.29L13.29 2L14.71 3.41L13 5.12V7.38L15.45 8.82L17.45 7.69L18.07 5.36L20 5.88L19.54 7.65L21.31 8.12L20.79 10.05L18.46 9.43L16.46 10.56V13.26L14.5 11.3V10.56L12.74 9.54L10.73 7.53L11 7.38V5.12M18.46 14.57L16.87 13.67L19.55 16.35L21.3 15.88L20.79 13.95L18.46 14.57M13 16.62V18.88L14.7 20.59L13.29 22L12 20.71L10.71 22L9.29 20.59L11 18.88V16.62L8.55 15.18L6.55 16.31L5.93 18.64L4 18.12L4.47 16.36L2.7 15.89L3.22 13.96L5.55 14.58L7.55 13.45V10.56L5.55 9.43L3.22 10.05L2.7 8.12L4.47 7.65L4 5.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L14.1 16L13 16.62M12 14.89L12.63 14.5L9.5 11.39V13.44L12 14.89Z" /></svg>';

    // ================= 状态变量 =================
    let canvas, ctx;
    let width, height;
    let particles = [];
    let animationFrame;

    // 从 localStorage 读取状态 (默认为 'false')
    // 如果没有存过，就是 null，视为 false
    let isSnowing = localStorage.getItem("snow-effect") === "true";
    let currentOpacity = 0; // 当前透明度 (0 ~ 1) 用于渐变
    let isActiveLoop = false; // 循环是否正在运行

    // 从 MkDocs 获取当前的配色方案 ('slate' or 'default')
    const getCurrentScheme = () => {
        const palette = __md_get("__palette");
        if (palette && typeof palette.color === "object") {
            return palette.color.scheme;
        }
        return "default";
    };

    // ================= 关键修复：手动注入 CSS 伪造 Tooltip =================
    // MkDocs Material 的 JS 不会扫描动态插入的元素，所以我们用 CSS 自己画一个
    const style = document.createElement('style');
    style.innerHTML = `
        /* 定义 tooltip 样式，模仿 MkDocs Material 原生效果 */
        #snow-toggle-btn {
            position: relative; /* 让 tooltip 相对按钮定位 */
        }
        #snow-toggle-btn::after {
            content: attr(data-md-tooltip); /* 读取属性内容 */
            position: absolute;
            top: 120%; /* 在按钮下方 */
            left: 50%;
            transform: translateX(-50%); /* 居中 */
            
            /* 使用 MkDocs 变量实现自动反色：背景用前景色，文字用背景色 */
            background-color: var(--md-default-fg-color); 
            color: var(--md-default-bg-color);
            
            padding: 0.4rem 0.6rem;
            border-radius: 0.1rem;
            font-size: 0.7rem;
            line-height: 1;
            white-space: nowrap;
            z-index: 100; /* 确保在最上层 */
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        /* 鼠标悬停时显示 */
        #snow-toggle-btn:hover::after {
            opacity: 1;
        }
        
        /* 确保雪花层级不会盖住 header */
        #snow-canvas {
            z-index: 10 !important;
        }
    `;
    document.head.appendChild(style);

    // ================= 核心逻辑 =================

    // 1. 初始化 Canvas
    function initCanvas() {
        canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "10";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        resize();
        window.addEventListener("resize", resize);
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    // 2. 粒子类
    class Snowflake {
        constructor() {
            this.init(true);
        }
        init(firstTime = false) {
            this.x = Math.random() * width;
            this.y = firstTime ? Math.random() * height : -10;
            this.r = Math.random() * 2 + 1;
            this.d = Math.random() * CONFIG.amount;
            this.speed = Math.random() * 1 + CONFIG.speed;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.y += this.speed;
            this.x += Math.sin(this.y * 0.01 + this.d) * 0.5 + (Math.random() - Math.random()) * 0.1;
            if (this.y > height || this.x > width + 10 || this.x < -10) this.init();
        }
        draw() {
            ctx.beginPath();
            // 实时判断颜色
            const scheme = getCurrentScheme();
            const color = scheme === "slate" ? CONFIG.snowColorDark : CONFIG.snowColorLight;
            
            const finalOpacity = currentOpacity * this.opacity;
            ctx.fillStyle = `rgba(${color}, ${finalOpacity})`; // 使用全局透明度
            ctx.moveTo(this.x, this.y);
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }

    // 3. 动画循环 (支持淡入淡出)
    function loop() {
        // 状态管理：淡入
        if (isSnowing && currentOpacity < 1) {
            currentOpacity += CONFIG.fadeSpeed;
            if (currentOpacity > 1) currentOpacity = 1;
        }
        // 状态管理：淡出
        else if (!isSnowing && currentOpacity > 0) {
            currentOpacity -= CONFIG.fadeSpeed;
            if (currentOpacity < 0) currentOpacity = 0;
        }

        // 如果完全透明且处于关闭状态，停止渲染以节省资源
        if (currentOpacity <= 0 && !isSnowing) {
            ctx.clearRect(0, 0, width, height);
            isActiveLoop = false;
            return; // 退出循环
        }

        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        animationFrame = requestAnimationFrame(loop);
    }

    function startAnimation() {
        if (!canvas) initCanvas();
        if (particles.length === 0) {
            for (let i = 0; i < CONFIG.amount; i++) particles.push(new Snowflake());
        }
        if (!isActiveLoop) {
            isActiveLoop = true;
            loop();
        }
    }

    // ================= UI 注入 =================
    
    function injectToggle() {
        // 找到 "深色/浅色模式切换" 的位置
        // MkDocs Material 通常把切换器放在 .md-header__option[data-md-component="palette"]
        const paletteSwitch = document.querySelector('.md-header__option[data-md-component="palette"]');
        
        if (!paletteSwitch) return; // 找不到位置则退出
        if (document.getElementById("snow-toggle-btn")) return; // 避免重复注入

        // 创建按钮容器，模仿 MkDocs 的 header 结构
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "md-header__option"; 
        
        const btn = document.createElement("button");
        btn.id = "snow-toggle-btn";
        btn.className = "md-header__button md-icon"; // 使用原生样式类名
        btn.style.cursor = "pointer";

        // 设置初始 tooltip
        const initialTooltip = isSnowing ? "No more snow!" : "Let it snow!";
        btn.setAttribute("data-md-tooltip", initialTooltip);
        btn.setAttribute("aria-label", initialTooltip);
        
        // 动态判断初始图标
        btn.innerHTML = isSnowing ? ICON_ON : ICON_OFF;

        // 点击事件
        btn.addEventListener("click", () => {
            isSnowing = !isSnowing;

            // 保存状态到本地
            localStorage.setItem("snow-effect", isSnowing);
            
            // 切换图标
            btn.innerHTML = isSnowing ? ICON_ON : ICON_OFF;

            const tooltip = isSnowing ? "No more snow!" : "Let it snow!";
            
            // 更新 data-md-tooltip
            btn.setAttribute("data-md-tooltip", tooltip);
            btn.setAttribute("aria-label", tooltip);
            
            // 启动动画循环（如果是开启操作）
            if (isSnowing) startAnimation();
        });

        buttonContainer.appendChild(btn);
        
        // 插入到配色切换器之后
        paletteSwitch.parentNode.insertBefore(buttonContainer, paletteSwitch.nextSibling);

        if (isSnowing) {
            startAnimation();
        }
    }

    // 启动注入
    injectToggle();
});
