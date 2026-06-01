# 断裂力学中的能量概念

线弹性体内储存的应变能

$$
U = \int_\Omega w \, \mathrm{d} v = \int_\Omega \frac{1}{2} \sigma_{ij} \varepsilon_{ij} \, \mathrm{d} v
$$

其中 $w$ 是单位体积内的应变能密度。对应变能求变分

$$
\begin{aligned}
    \delta U &= \int_\Omega \delta w \, \mathrm{d} v = \int_\Omega \sigma_{ij} \delta \varepsilon_{ij} \, \mathrm{d} v \\
    &= \int_{\partial \Omega} \underset{\text{面力 } t_i}{\underbrace{\sigma_{ij} n_j}} \delta u_i \, \mathrm{d} s + \int_\Omega \underset{\text{体力 } f_i}{\underbrace{\sigma_{ij,j}}} \delta u_i \, \mathrm{d} v \\
    &= Q \delta q
\end{aligned}
$$

如果弹性体有裂纹，则广义力做功除了用于应变能的增加之外，还要用于裂纹的能量释放

$$
\begin{equation}
    \delta U = Q \delta q - G \delta a
\end{equation}
$$

$G$ 可类比为“能量力”

**加载条件**：

-   控制位移（displacement controlled test）
    $$
    \delta q = 0 \implies G = - \left.\frac{\delta U}{\delta a} \right|_{q}
    $$
-   控制载荷（load controlled test）
    $$
    \delta Q = 0 \implies \delta(U - Qq) = - G \delta a \implies G = - \left.\frac{\delta (U - Qq)}{\delta a} \right|_{Q}
    $$

