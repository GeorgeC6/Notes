> 2026/06/04 8:00
> 
> - 球面电磁波中的能量传输
> - 电磁波的推迟格林函数与推迟势

$$
\begin{aligned}
    \ell: \quad & (t): && \text{纯规范} \to \text{更低 }\ell \text{ 阶} \\
    & (s): && \text{TM} \quad \vec{B} \perp \hat{x} \\
    & (a): && \text{TE} \quad \vec{E} \perp \hat{x} \text{ ?}
\end{aligned}
$$

对于 $\ell = 2$，

$$
E_i \propto (\partial_i \partial_j - \delta_{ij} \nabla^2) A_j \propto (\partial_i \partial_j - \delta_{ij} \nabla^2) p_{j_1 j_2 j}^{(a)} H_{j_1 j_2}
$$

利用 $H_{j_1 j_2} \propto \partial_{j_1} \partial_{j_2} H$，

$$
E_i \propto p_{j_1 j_2 j}^{(a)} (\partial_i \partial_j \partial_{j_1} \partial_{j_2} - \delta_{ij} \nabla^2 \partial_{j_1} \partial_{j_2}) H
$$

$p_{j_1 j_2 j}^{(a)}$ 的三个性质：

-   无迹
-   前 $\ell = 2$ 个指标对称
-   $p_{j_1 j_2 j}^{(a)} + p_{j j_1 j_2}^{(a)} + p_{j j_2 j_1}^{(a)} = 0$

利用第三个性质，因为 $p_{j_1 j_2 j}^{(a)}$ 和括号第一项的 $\partial_j \partial_{j_1} \partial_{j_2}$ 缩并，所以可以把指标扩展（$\partial$ 的次序可互换）：

$$
p_{j_1 j_2 j}^{(a)} \partial_j \partial_{j_1} \partial_{j_2} = \frac{1}{3} \cancelto{0}{(p_{j_1 j_2 j}^{(a)} + p_{j j_1 j_2}^{(a)} + p_{j j_2 j_1}^{(a)})} \partial_j \partial_{j_1} \partial_{j_2} = 0
$$

所以四阶偏导是没有贡献的，

$$
E_i \propto p_{j_1 j_2 j}^{(a)} \delta_{ij} \nabla^2 \partial_{j_1} \partial_{j_2} H \propto k^2 p_{j_1 j_2 i}^{(a)} \partial_{j_1} \partial_{j_2} H
$$

这里利用了 $\nabla^2 H = -k^2 H$. 而 $\partial_{j_1} \partial_{j_2} H = \# H_{j_1 j_2} + \# \delta_{j_1 j_2} \nabla^2 H$，且 $H_{j_1 j_2} \propto  \# x_{j_1} x_{j_2} + \# \delta_{j_1 j_2} \nabla^2 H$ 的后一项可以合并，所以

$$
E_i \propto p_{j_1 j_2 i}^{(a)} (\# H_{j_1 j_2} + \# \delta_{j_1 j_2} k^2 H)
$$

与 $\hat{x}$ 做内积，也就是乘上 $x_i$. 前一项与之前处理四阶 $\partial$ 的方法一样，得到 $0$；后一项因为无迹性质，也为 $0$. 至此证明了 $\vec{E} \perp \hat{x}$，对应 TE 模式。

## 辐射

考虑能流密度，即坡印廷矢量 $\vec{\mathcal{S}}$ 在无穷远处的通量。如果这个通量在无穷远处为 0，说明整个体系的能量没有通过电磁波辐射出去，只是发生了能量的流动；如果无穷远处通量不为 0，说明体系一直在向外辐射能量。

> 电磁波看上去就意味着能量的输运，但是这两种情况有本质上的不同。

$$
H_{j_1 j_2 \cdots j_\ell} = P_{j_1 j_2 \cdots j_\ell}^{(\ell)}(\partial) \frac{1}{r} e^{i k r}
$$

例如

$$
\begin{aligned}
    H_i &= P_i^{(1)}(\hat{x}) \Big(-\frac{1}{r} + \textcolor{orange}{ik}\Big) \frac{1}{r} e^{-i \omega t + i k r} \\
    H_{ij} &= P_{ij}^{(2)}(\hat{x}) \Big(\frac{3}{r^2} - \frac{3 i k}{r} \textcolor{orange}{- k^2}\Big) \frac{1}{r} e^{-i \omega t + i k r}
\end{aligned}
$$

由于考虑的是无穷远处的通量，所以忽略 $\vec{\mathcal{S}}$ 中的 $\mathcal{O}(1/r^2)$ 项，这等价于只保留 $H_{j_1 j_2 \cdots j_\ell}$ 中的 $1/r$ 项。观察可知 $1/r$ 项的系数是通过对相位因子 $e^{i k r}$ 求 $\ell$ 次导数得到的。由于 $\nabla e^{i k r} = i k \hat{x} e^{i k r}$，所以做替换

$$
\nabla \mapsto i k \hat{x}
$$

代入 $H_{j_1 j_2 \cdots j_\ell}$ 表达式得

$$
H_{j_1 j_2 \cdots j_\ell} = P_{j_1 j_2 \cdots j_\ell}^{(\ell)}(\hat{x}) \frac{1}{r} e^{i k r} (i k)^\ell + \mathcal{O}(1/r^2)
$$

于是

$$
\begin{aligned}
    B_i &= \epsilon_{ijk} \partial_j A_k = \epsilon_{ijk} \hat{x}_j \, p_{j_1 j_2 \cdots j_\ell k} P_{j_1 j_2 \cdots j_\ell}^{(\ell)}(\hat{x}) \frac{1}{r} e^{i k r} (i k)^{\ell + 1} + \mathcal{O}(1/r^2) \\
    E_i &= \frac{1}{i \omega} \epsilon_{ijk} \partial_j B_k \Longleftarrow \left \{\begin{array}{l}
        \nabla \times \vec{B} + \frac{\partial \vec{E}}{\partial t} = 0 \\
        \partial_t \vec{E} = - i \omega \vec{E}
    \end{array} \right. \\
    \implies \mathcal{S}_i &= \frac{-i}{\omega \mu_0} \epsilon_{ijk} \epsilon_{jmn} (i k \hat{x}_m B_n) B_k \\
    &= \frac{1}{Z} (p_{j_1 j_2 \cdots j_\ell k} P_{j_1 j_2 \cdots j_\ell}^{(\ell)}(\hat{x}))^2 \frac{1}{r^2} (i k)^{2 \ell + 2} + \mathcal{O}(1/r^3)
\end{aligned}
$$


如果我们固定某一点看电磁场的构型，它是简谐的振动；然而电磁场又在向外辐射能量，说明不断地有别的能量转化为电磁场的能量。电磁场只能和带电物质发生能量动量交换，所以这种补充能量的过程必然涉及到电磁场与带电物质的耦合。