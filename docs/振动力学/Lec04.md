# 线性随机振动

$$
\begin{aligned}
    R_{XX}(t_1, t_2) &= \mathbb{E}[X(t_1) X(t_2)] \\
    &= \mathbb{E} \left[\int_{-\infty}^{\infty} F(\tau_1) h(t_1 - \tau_1) \, \mathrm{d}\tau_1 \cdot \int_{-\infty}^{\infty} F(\tau_2) h(t_2 - \tau_2) \, \mathrm{d}\tau_2 \right] \\
    &= \mathbb{E} \left[\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} F(\tau_1) F(\tau_2) h(t_1 - \tau_1) h(t_2 - \tau_2) \, \mathrm{d}\tau_1 \, \mathrm{d}\tau_2 \right] \\
    &= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \mathbb{E}[F(\tau_1) F(\tau_2)] h(t_1 - \tau_1) h(t_2 - \tau_2) \, \mathrm{d}\tau_1 \, \mathrm{d}\tau_2 \\
    &= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} R_{FF}(\tau_1, \tau_2) h(t_1 - \tau_1) h(t_2 - \tau_2) \, \mathrm{d}\tau_1 \, \mathrm{d}\tau_2 \\
    &= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} R_{FF}(t_1 - \tau_1', t_2 - \tau_2') h(\tau_1') h(\tau_2') \, \mathrm{d}\tau_1' \, \mathrm{d}\tau_2'
\end{aligned}
$$

这里令 $\tau_1' = t_1 - \tau_1, \, \tau_2' = t_2 - \tau_2$. 激励为零均值平稳随机过程时，