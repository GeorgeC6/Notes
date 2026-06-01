# 采样定理

## 引入

!!! example "车轮效应"
    转得很快的车轮，辐条看起来是倒着转的。原因是车轮的转速超过了采样频率（例如车轮每 $1/24 \; \mathrm{s}$ 转过 $350^\circ$，人眼认为倒着转了 $10^\circ$）

!!! example "摩尔纹"
    

!!! note "Nyquist-Shannon 采样定理"
    若 $x(t)$ 是截止频率为 $\omega_m$ 的带限信号，当采样频率大于 $2 \omega_m$ 时，则可以从 $x[n] = x(nT)$ 中无失真地恢复 $x(t)$.

## 采样的定义

用冲激串采样来获取连续信号等间隔上的采样值。周期冲激串

$$
p(t) = \sum_{n = -\infty}^{+\infty} \delta(t - nT)
$$

称为**采样函数**，其傅里叶变换为

$$
P(j \omega) = \frac{2\pi}{T} \sum_{n = -\infty}^{+\infty} \delta(\omega - n \omega_s)
$$

其中 $\omega_s = 2\pi / T$ 是采样频率。

!!! info "Remarks"
    关于这个傅里叶变换，因为冲激串 $\delta_T(t)$ 不满足傅里叶变换的收敛条件，所以要先求傅里叶级数，再通过傅里叶级数计算傅里叶变换。（书本 3.3 节）

    $$
    \delta_T(t) = \sum_{n = -\infty}^{+\infty} \delta(t - nT) = \sum_{k = -\infty}^{+\infty} a_k e^{j k \omega_s t}
    $$

    $\omega_s = 2\pi / T$ 为 $p(t)$ 的基波频率。求解系数

    $$
    a_k = \frac{1}{T} \int_{-T/2}^{T/2} p(t) e^{-j k \omega_s t} dt = \frac{1}{T}
    $$

    故

    $$
    p(t) = \frac{1}{T} \sum_{k = -\infty}^{+\infty} e^{j k \omega_s t}
    $$

    利用 $\mathcal{F}[e^{j k \omega_s t}] = 2\pi \delta(\omega - k \omega_s)$，得到

    $$
    P(j \omega) = \frac{2\pi}{T} \sum_{n = -\infty}^{+\infty} \delta(\omega - n \omega_s)
    $$

时域上，连续信号 $x(t)$ 与采样信号相乘，

$$
x_p(t) = x(t) p(t) = \sum_{n = -\infty}^{+\infty} x(nT) \delta(t - nT)
$$

频域上卷积，

$$
\begin{aligned}
    X_p(j \omega) &= \frac{1}{2\pi} X(j \omega) * P(j \omega) \\
    &= \frac{1}{2\pi} X(j \omega) * \left( \frac{2\pi}{T} \sum_{n = -\infty}^{+\infty} \delta(\omega - n \omega_s) \right) \\
    &= \frac{1}{T} \sum_{n = -\infty}^{+\infty} X(j (\omega - n \omega_s))
\end{aligned}
$$

即采样后的频谱是原频谱的周期延拓。频谱不混叠，要求 $\omega_m \leq \omega_s - \omega_m$，即

$$
\begin{equation}
    \omega_s \geq 2 \omega_m
\end{equation}
$$

$2 \omega_m$ 称为 **Nyquist 频率**。

上面的讨论实质上还是基于连续时间信号 $x_p(t)$，而实际上我们获得的信息是离散时间信号 $x[n] = x(nT)$. 做 DTFT，

$$
\begin{aligned}
    X(e^{j \omega}) &= \sum_{n = -\infty}^{+\infty} x[n] e^{-j \omega n} = \sum_{n = -\infty}^{+\infty} x(nT) e^{-j \omega n} \\
    &= \frac{1}{T} \sum_{n = -\infty}^{+\infty} X(j (\frac{\omega}{T} - n \omega_s)) = X_p(j \frac{\omega}{T})
\end{aligned}
$$







1. 带限内插
2. 零阶保持
3. 一阶保持

!!! example "例2"
    求

    $$
    x[n] = \frac{\sin \Big( \frac{\pi}{2} (n - \frac{1}{4})\Big)}{n - \frac{1}{4}} \overset{\mathcal{F}}{\longrightarrow} X(e^{j \omega})
    $$

    ---

    注意到，时移的不是整数，而是 $1/4$！所以先在连续时间域上求傅里叶变换。记

    $$
    x(t) = \frac{\sin \Big( \frac{\pi}{2} (t - \frac{1}{4})\Big)}{t - \frac{1}{4}} \overset{\mathcal{F}}{\longrightarrow} X(j \omega)
    $$

    容易知道，$X(j \omega) = \pi \; \mathbb{1}_{[-\frac{\pi}{2}, \frac{\pi}{2}]}(\omega) \cdot e^{-j \frac{1}{4} \omega}$. 而由

    $$
    X(e^{j \omega}) = \frac{1}{T} \sum_{n = -\infty}^{+\infty} X(j (\frac{\omega}{T} - n \omega_s))
    $$

    即可得到 $X(e^{j \omega})$ 的表达式。

    {++这个方法可以将 CTFT 与 DTFT 联系起来。++}