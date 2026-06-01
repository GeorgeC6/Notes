# 离散时间信号的频域分析

## DTFT 的性质

### 时域卷积

$$
\begin{aligned}
    x[n] * y[n] \overset{\mathcal{F}}{\longrightarrow} &\sum_{k = -\infty}^{+\infty} x[k] y[n - k] \overset{\mathcal{F}}{\longrightarrow} \\
    &\sum_{k = -\infty}^{+\infty} x[k] \left( \frac{1}{2\pi} \int_{2 \pi} Y(e^{j\omega}) e^{j \omega (n - k)} \, \mathrm{d} \omega \right) \\
    =& \frac{1}{2\pi} Y(e^{j\omega}) e^{j \omega n} \left( \sum_{k = -\infty}^{+\infty} x[k] e^{-j \omega k} \right) \\
    =& X(e^{j\omega}) Y(e^{j\omega})
\end{aligned}
$$

### 调制

若 $x[n] \overset{\mathcal{F}}{\longrightarrow} X(e^{j\omega}), \, y[n] \overset{\mathcal{F}}{\longrightarrow} Y(e^{j\omega})$，则

$$
\begin{aligned}
    x[n] y[n] \overset{\mathcal{F}}{\longrightarrow} &\frac{1}{2\pi} \int_{2 \pi} X(e^{j\theta}) Y(e^{j(\omega - \theta)}) \, \mathrm{d} \theta \\
    =& \frac{1}{2\pi} X(e^{j\omega}) \circledast Y(e^{j\omega})
\end{aligned}
$$


!!! info "圆卷积的性质"
    以 $T$ 为周期的信号 $x(t), y(t)$，圆卷积定义为

    $$
    x(t) \circledast y(t) = \int_T x(\tau) y(t - \tau) \, \mathrm{d} \tau
    $$

    1.  圆卷积也是以 $T$ 为周期的函数
    2.  简易计算
        1.  先算 $x(t) * y(t)$（正常的卷积）
        2.  再将结果以 $T$ 为周期进行延拓并叠加

### Parseval 定理

$$
\sum_{n = -\infty}^{+\infty} \Big| x[n] \Big|^2 = \frac{1}{2\pi} \int_{2 \pi} \Big| X(e^{j\omega}) \Big|^2 \, \mathrm{d} \omega
$$

证明：

$$
\begin{aligned}
    \sum_{n = -\infty}^{+\infty} \Big| x[n] \Big|^2 &= \sum_{n = -\infty}^{+\infty} x[n] x^*[n] \\
    &= \sum_{n = -\infty}^{+\infty} x[n] \left( \frac{1}{2\pi} \int_{2 \pi} X(e^{j\omega}) e^{j \omega n} \, \mathrm{d} \omega \right)^* \\
    &= \sum_{n = -\infty}^{+\infty} x[n] \left( \frac{1}{2\pi} \int_{2 \pi} X^*(e^{j\omega}) e^{-j \omega n} \, \mathrm{d} \omega \right) \\
    &= \frac{1}{2\pi} \int_{2 \pi} X^*(e^{j\omega}) \left( \sum_{n = -\infty}^{+\infty} x[n] e^{-j \omega n} \right) \,\mathrm{d} \omega \\
    &= \frac{1}{2\pi} \int_{2 \pi} X^*(e^{j\omega}) X(e^{j\omega}) \, \mathrm{d} \omega = \frac{1}{2\pi} \int_{2 \pi} \Big| X(e^{j\omega}) \Big|^2 \, \mathrm{d} \omega
\end{aligned}
$$

