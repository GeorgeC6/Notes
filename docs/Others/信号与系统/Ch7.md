# Z 变换

类似于 Laplace 变换是对 CTFT 的推广，Z 变换是对 DTFT 的推广。对于离散时间信号 $x[n]$，其 Z 变换定义为

$$
X(z) = \sum_{n=-\infty}^{+\infty} x[n] z^{-n}
$$






## 单边 Z 变换

$$
X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}
$$

移位性质：

> 可以画图辅助理解

$$
\begin{aligned}
    x[n] &\xrightarrow{u\mathcal{Z}} \tilde{X}(z) \\
    x[n - 1] &\xrightarrow{u\mathcal{Z}} z^{-1} \tilde{X}(z) + x[-1] \\
    x[n - 2] &\xrightarrow{u\mathcal{Z}} z^{-2} \tilde{X}(z) + x[-2] + z^{-1} x[-1] \\
    x[n + 1] &\xrightarrow{u\mathcal{Z}} z \tilde{X}(z) - z x[0] \\
    x[n + 2] &\xrightarrow{u\mathcal{Z}} z^2 \tilde{X}(z) - z^2 x[0] - z x[1]
\end{aligned}
$$

