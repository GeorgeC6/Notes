# 生物力学/物理绪论

!!! tip "机械力作为生物信号，在生命活动中至关重要。"
    - 细胞核能感受皮牛级（pN）的力
    - 细胞迁移时，细胞沿着细胞层面内的最大主应力方向迁移
    - 基底刚度的增加可以促进细胞骨架的发展，也会影响迁移方向

- 细胞感受力的分子机制
    - 力感应、传导蛋白的力学调控的分子机制

!!! info "单分子力学实验测量方法"
    - AFM（Atomic Force Microscopy）
        - 叫做原子力显微镜，但实则测量分子力...![](../../images/tieba/han.png)
        - 分辨率：1 nN, 1 Å
    - 光镊（Optical Tweezers）
        - 用光阱捕获 bead，连接在bead上的DNA移动产生偏移，从而产生回复力
        - 1 - 50 pN, < 1 nm
        - 极其精密的仪器
    - 磁镊
        - 比光镊精度低

!!! tip "统计力学高光时刻"
    :point_right: DNA 不仅有扭转刚度，也具有弯曲刚度

    WLC model（Worm-Like Chain Model）完美拟合DNA的力学行为，统计力学在生物研究领域的地位 up up！![](../../images/tieba/cool.png)

!!! question "分子尺度下，“力”这个物理量还有意义吗？"
    - 一般而言，对微观世界而言，“力”这个物理量没有很大意义，“能量”（或“动量”）才有意义。
      > 赫兹：《无力的力学》
    - 大量的单分子力学实验表明，{++在分子尺度上理解生物大分子的生化过程，**力与能量是同等重要的**结构与功能参数。++}
    - **皮牛顿力学**：分子马达施加 pN 量级的力；基因调控与表达时，酶对 DNA 要施加 pN 量级的力

!!! info "细胞的物理生物学常用单位"
    - 生物大分子的尺度：$\mathrm{nm}$
    - 细胞的典型尺寸：$10 \, \mathrm{\mu m}$
    - 时间尺度
        - 飞秒（femto-second, $\mathrm{fs} = 10^{-15} \, \mathrm{s}$）
            - 化学键断裂
        - 皮秒（pico-second, $\mathrm{ps} = 10^{-12} \, \mathrm{s}$）
            - 水分子的取向（转动弛豫）
        - 纳秒
            - 蛋白质的构象变化
        - 微秒
            - 蛋白质的折叠（较小的蛋白质）
        - 毫秒
    - 力：皮牛（$\mathrm{pN} = 10^{-12} \, \mathrm{N}$）
    - 能量：$1 \, k_{\mathrm{B}} T = 0.6 \, \mathrm{kcal/mol} = 2.5 \, \mathrm{kJ/mol} = 4.1 \, \mathrm{pN \cdot nm}$

## 能量通货

一轮糖酵解：2 ATP + 2 NADH

水解：ATP -> ADP + $20 \, k_{\mathrm{B}} T$

$$
\text{NADPH} \longrightarrow \text{NADP}^+ + \underset{\text{可合成约 2~3 个ATP}}{\text{Energy}}
$$

!!! info "Deterministic and thermal forces"
    :warning: 在生物大分子尺度，热涨落变得不可忽略，物理图像需要转变到热力学统计力学！

!!! tip "自由能反映能量和熵之间的竞争"
    $$
    G = \underset{\text{Gibbs}}{{\underbrace{\overset{\text{Helmholtz}}{\overbrace{E - TS}} + pV}}}
    $$


分子马达打包压缩DNA为染色体

Kinesin：inchworm 模式行走（hand-over-hand 模式行走？）

ATP 合成酶：利用质子的浓度梯度产生的熵力驱动 ATP 的合成


!!! tip "细胞中主要能量形式"
    - 化学能、机械能、电磁能、热能
    - 能量形式可以相互转换，但是**是有品质优劣之分的**
    - 热能是个“死胡同”，很难高效利用（热力学第二定律）

