# 常用傅里叶变换/拉普拉斯变换

## 傅里叶变换

### 变换对的三种形式

\begin{equation} \tag{FT.1} \label{FT}
\left\{
\begin{aligned}
    F(\omega) &= \frac{1}{2\pi} \int_{-\infty}^{+\infty} f(t) e^{-\mathrm{i}\omega t} \mathrm{d}t \\
    f(t) &= \int_{-\infty}^{+\infty} F(\omega) e^{\mathrm{i}\omega t} \mathrm{d}\omega \\
\end{aligned}
\right.
\end{equation}

\begin{equation} \tag{FT.2}
\left\{
\begin{aligned}
    F(\omega) &= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} f(t) e^{-\mathrm{i}\omega t} \mathrm{d}t \\
    f(t) &= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} F(\omega) e^{\mathrm{i}\omega t} \mathrm{d}\omega \\
\end{aligned}
\right.
\end{equation}

\begin{equation} \tag{FT.3}
\left\{
\begin{aligned}
    F(\omega) &= \int_{-\infty}^{+\infty} f(t) e^{\mathrm{i}\omega t} \mathrm{d}t \\
    f(t) &= \frac{1}{2\pi} \int_{-\infty}^{+\infty} F(\omega) e^{-\mathrm{i}\omega t} \mathrm{d}\omega \\
\end{aligned}
\right.
\end{equation}

注意指数项负号的位置。

### 常用变换表

以下变换均采用 \eqref{FT} 形式。

| 原函数 $f(t)$ | 傅里叶变换 $F(\omega)$ |
|:------:|:------:|
| $1$ | $\delta(\omega)$ |
| $\text{rect}(x) = \begin{cases} 1, & \|x\| < \frac{1}{2} \\ 0, & \|x\| > \frac{1}{2} \end{cases}$ | $\text{sinc}(\omega)$ |
| $\delta(x)$ | $\frac{1}{2\pi}$ |
| $H(x) = \begin{cases} 1, & x > 0 \\ 0, & x < 0 \end{cases}$ | $\frac{1}{2\pi} \left[\frac{1}{\mathrm{i} \omega} + \pi \delta(\omega) \right]$ |