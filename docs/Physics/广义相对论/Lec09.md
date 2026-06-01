

### Symmetry and conservation law

$\phi \in \mathrm{Diff}(M), \, \phi_* T = T$，由矢量场 $K = K^\mu \partial_\mu$ 诱导，则 $T$ 的李导数

$$
\mathscr{L}_K T = 0
$$

若 $T$ 为度规场 $T = g_{\mu \nu}$，则

$$
\mathscr{L}_K g_{\mu \nu} = 0 \implies \nabla_\mu K_\nu + \nabla_\nu K_\mu = 0
$$

此即 **Killing's equation**，满足上述方程的 $K$ 被称为 **Killing vector**，$\phi$ 为 $K$ 生成的 **isometry**.

$x^\mu(\lambda)$：geodesic，$u^\mu = \frac{d x^\mu}{d \lambda}$：四维速度，则

$$
\begin{aligned}
    u^\nu \nabla_\nu (K_\mu u^\mu) &= u^\nu (\nabla_\nu K_\mu) u^\mu + u^\nu K_\mu (\nabla_\nu u^\mu) \\
    &= u^{(\nu} u^{\mu)} \nabla_{(\nu} K_{\mu)} + u^\nu K_\mu (\partial_\nu u^\mu + \Gamma^\mu_{\nu \sigma} u^\sigma) = 0
    \implies K_\mu u^\mu = \text{const.}
\end{aligned}
$$

在 $\mathbb{R}^n$ 中

$$
\begin{aligned}
    K_\mu &= C_\mu \implies K = K^\mu \partial_\mu = C^\mu \partial_\mu = \mathrm{span} \{ \partial_\mu \} \to P \\
    K_\mu &= \omega_{\mu \nu} x^\nu, \, \omega_{\mu \nu} + \omega_{\nu \mu} = 0 \implies K \to L_{\mu \nu}
\end{aligned}
$$

!!! note "Theorem"
    $n$ 维的 $M$，最多有 $\frac{n(n+1)}{2}$ 个线性无关的 Killing vector，即 $\mathrm{dim} \, K \leq \frac{n(n+1)}{2}.$

### Spherically symmetric metric

$\mathbb{R}^3$ 中的球对称

$$
d s^2 = d r^2 + r^2 d \Omega^2_2
$$

