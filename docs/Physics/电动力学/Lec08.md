> 2026/03/26 8:00
> 
> - 理想电多极子（点源）
> - 点源在外场中的能量与受力
> - 通量

在空间中的一个有限区域内，存在有限的电荷量。如果这个区域的尺度比它到测量点的距离小得多（$\delta / |\vec{x}| \ll 1$），就可以把这个区域内的电荷做多极展开：

$$
\phi(\vec{x}) = \sum_{\ell = 0}^{\infty} \frac{a_\ell}{|\vec{x}|^{\ell + 1}} P_\ell(\cos \theta)
$$

这里假设是球对称的情况。$a_\ell$ 是包含 $\delta$ 的有量纲系数。

先考虑 $\ell = 0$，在一个固定球面上计算通量：

$$
\int_{|\vec{x}| = L} (- \nabla \phi) \cdot d \vec{S} = \int_{|\vec{x}| = L} \frac{a_0}{|\vec{x}|^2} P_0(\cos \theta)  d S = 4 \pi a_0 \propto Q
$$

所以 $a_0$ 应该是和电荷量 $Q$ 成正比的。那么对于 $\ell > 1$ 的 $a_\ell$，它们的意义是什么呢？如果仅仅把点源当作点电荷，就解释不了后面的项！

在有限区域内分布着 $\rho(\vec{x})$，尺度上有 $|\vec{x}'| \leqslant \delta \ll |\vec{x}|$.

$$
\phi(\vec{x}) = \frac{1}{4 \pi \varepsilon_0} \int_V \frac{\rho(\vec{x}') \, d^3 \vec{x}'}{|\vec{x} - \vec{x}'|}
$$

先研究泊松方程

$$
\begin{equation}
    \nabla^2 \frac{1}{|\vec{x} - \vec{x}'|} = 0
\end{equation}
$$

记 $|\vec{x}| = r |\vec{x}'|, t = \frac{\vec{x} \cdot \vec{x}'}{|\vec{x}||\vec{x}'|} = \cos \theta$，则

$$
|\vec{x} - \vec{x}'|^2 = |\vec{x}|^2 + |\vec{x}'|^2 - 2 \vec{x} \cdot \vec{x}' = |\vec{x}'|^2 (r^2 + 1 - 2 r t)
$$

将 $\frac{1}{|\vec{x} - \vec{x}'|}$ 展开：

$$
\frac{1}{|\vec{x} - \vec{x}'|} = \sum_{\ell = 0}^{\infty} \frac{|\vec{x}'|^\ell}{|\vec{x}|^{\ell + 1}} a_\ell(t)
$$

将上式代入泊松方程，

$$
\phi(\vec{x}) = \sum_{\ell = 0}^{\infty} \frac{1}{4 \pi \varepsilon_0} \int_V \rho(\vec{x}') \, d^3 \vec{x}' P_\ell(t) \frac{|\vec{x}'|^\ell}{|\vec{x}|^{\ell + 1}}
$$



- $\ell = 0$

$$
\frac{1}{4 \pi \varepsilon_0} \int_V \rho(\vec{x}') \, d^3 \vec{x}' \frac{1}{|\vec{x}|} 
$$

- $\ell = 1$

$$
\frac{1}{4 \pi \varepsilon_0} \int_V \rho(\vec{x}') \, d^3 \vec{x}' \frac{x'_i x_i}{|\vec{x}|^3} = \frac{1}{4 \pi \varepsilon_0} \frac{p_i x_i}{|\vec{x}|^3}
$$

$p_i$ 为电偶极矩

- $\ell = 2$

$$
\frac{1}{4 \pi \varepsilon_0} \int_V \rho(\vec{x}') \, d^3 \vec{x}' \frac{3 t^2 - 1}{2} \frac{|\vec{x}'|^2}{|\vec{x}|^3} = \frac{1}{4 \pi \varepsilon_0} \frac{p_{ij} x_i x_j}{|\vec{x}|^5}
$$

$p_{ij}$ 为原点上的理想电四极矩

利用

$$
\frac{3 (\vec{x}' \cdot \vec{x})^2 - |\vec{x}'|^2 |\vec{x}|^2}{2 |\vec{x}|^5} = \frac{1}{2} (3 x'_i x'_j - |\vec{x}'|^2 \delta_{ij}) \frac{x_i x_j}{|\vec{x}|^5}
$$

$$
P_{ij} = \int_V \rho(\vec{x}') \, d^3 \vec{x}' \frac{3 x'_i x'_j - |\vec{x}'|^2 \delta_{ij}}{2}
$$

满足

- 对称 $P_{ij} = P_{ji}$
- 无迹 $P_{ij} \delta_{ij} = 0$

自由度：$Y_{\ell, m}$ 对于 $\ell = 2$，$m = -2, -1, 0, 1, 2$ 有五个取值，恰好对应了 $P_{ij}$ 有五个独立分量。