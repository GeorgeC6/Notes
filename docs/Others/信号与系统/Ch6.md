# Laplace 变换

从傅里叶变换出发，乘上 $e^{-\sigma t}$ 因子，使得任意信号的变换都存在。由此得到双边 Laplace 变换：

$$
X(s) = \int_{-\infty}^{\infty} x(t) e^{-s t} dt, \quad s = \sigma + j \omega
$$



!!! note "Laplace 变换收敛域性质"
    1.  $X(s)$ 的收敛域是平行于 $j \omega$ 轴的带状区域
        
        > 前提：$x(t)$ 连续，不包含 $\delta(t)$ 等奇异部分
    
    2.  收敛域内无极点
    3.  **时限信号**的收敛域为整个 $s$ 平面
    4.  单边信号的收敛域为半平面
        1. 右边信号：收敛域在最右极点的右侧（**因果信号**）
        2. 左边信号：收敛域在最左极点的左侧
    5.  双边信号的收敛域为带状区域
    6.  **稳定信号**的收敛域包含 $j \omega$ 轴
        
        > 稳定信号 $\iff$ 绝对可积 $\int_{-\infty}^{\infty} |x(t)| dt < +\infty$，故傅里叶变换存在，$\sigma = 0$ 包含在收敛域内

## 常用 Laplace 变换对

| $x(t)$ | $X(s)$ | 收敛域 |
| :---: | :---: | :---: |
| $e^{-at}u(t)$ | $\frac{1}{s + a}$ | $\mathrm{Re}(s) > -a$ |
| $-e^{-at}u(-t)$ | $\frac{1}{s + a}$ | $\mathrm{Re}(s) < -a$ |
| $e^{-j \omega t}u(t)$ | $\frac{1}{s + j \omega}$ | $\mathrm{Re}(s) > 0$ |
| $u(t)$ | $\frac{1}{s}$ | $\mathrm{Re}(s) > 0$ |
| $u(-t)$ | $-\frac{1}{s}$ | $\mathrm{Re}(s) < 0$ |
| $\delta(t)$ | $1$ | 全平面 |
| $\cos (\omega_0 t) u(t)$ | $\frac{s}{s^2 + \omega_0^2}$ | $\mathrm{Re}(s) > 0$ |
| $\sin (\omega_0 t) u(t)$ | $\frac{\omega_0}{s^2 + \omega_0^2}$ | $\mathrm{Re}(s) > 0$ |


## Laplace 变换性质

1.  线性
    记 $x_1(t) \overset{\mathcal{L}}{\longrightarrow} X_1(s), \, x_2(t) \overset{\mathcal{L}}{\longrightarrow} X_2(s)$，收敛域各自为 $R_1$ 和 $R_2$，则
    
    $$
    \mathcal{L} \{ a x_1(t) + b x_2(t) \} = a X_1(s) + b X_2(s)
    $$

    收敛域{++至少++}为 $R_1 \cap R_2$（可能极点会被消除，收敛域会扩大）
2.  时移
    记 $x(t) \overset{\mathcal{L}}{\longrightarrow} X(s)$，收敛域为 $R$，则



!!! tip "ODE 的三种表示"
    输入信号 $x(t)$，输出信号 $y(t)$，满足二阶线性常微分方程，可以有三种表示方式。

    1.  公式

        $$
        a_2 y'' + a_1 y' + a_0 y = b_2 x'' + b_1 x' + b_0 x
        $$

        可以引入一个中间变量 $w(t)$ 来表示 $x(t)$ 和 $y(t)$，使得上式自动成立：

        $$
        x(t) = a_2 w'' + a_1 w' + a_0 w, \quad y(t) = b_2 w'' + b_1 w' + b_0 w
        $$

    2.  拉氏变换

        $$
        H(s) = \frac{Y(s)}{X(s)} = \frac{b_2 s^2 + b_1 s + b_0}{a_2 s^2 + a_1 s + a_0}
        $$

    3.  系统框图

## 系统框图表示

### 串联、并联

- 串联对应 $H(s) = \frac{1}{(s - s_1)(s - s_2)} = \frac{1}{s - s_1} \cdot \frac{1}{s - s_2}$
- 并联对应 $H(s) = \frac{1}{s - s_1} + \frac{1}{s - s_2}$


!!! note "系统的特征函数"
    记 $x(t) \xrightarrow{H(s)} y(t)$，若 $x(t) = e^{s_0 t}$，则 $y(t) = H(s_0) e^{s_0 t}$.
    
    ---

    证明：

    $$
    \begin{aligned}
        y(t) &= x(t) \ast h(t) = \int_{-\infty}^{\infty} h(\tau) x(t - \tau) d\tau = \int_{-\infty}^{\infty} h(\tau) e^{s_0 (t - \tau)} d\tau \\
        &= e^{s_0 t} \int_{-\infty}^{\infty} h(\tau) e^{-s_0 \tau} d\tau = e^{s_0 t} H(s_0)
    \end{aligned}
    $$

    特例：$s_0 = 0$，若 $0$ 在 $H(s)$ 的收敛域内，则得到直流信号的响应：

    $$
    1 \xrightarrow{H(s)} H(0)
    $$

