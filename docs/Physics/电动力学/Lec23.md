> 2026/05/21 8:00
> 
> - 电磁势及其运动方程
> - 平面电磁波

讨论电磁场在真空中的解，即电磁波。研究电磁波的传播，以及和物质的相互作用。

:question: 首要的问题：电磁场的动力学变量是什么？也就是说，为了区分电磁场的物理状态（这样我们才能考察电磁场随时间的演化），我们需要观测什么物理量？

对比牛顿方程 $\vec{F} = m \ddot{\vec{x}}$，对坐标是二次微分的，麦克斯韦方程组中类似的方程是

$$
\left \{
\begin{aligned}
    & \nabla \times \vec{B} - \varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t} = \mu_0 \vec{J} \\
    & \nabla \times \vec{E} + \frac{\partial \vec{B}}{\partial t} = \vec{0}
\end{aligned}
\right.
$$

但这里有个麻烦，磁场不是独立的，它处处满足

$$
\nabla \cdot \vec{B}(t, \vec{x}) = 0
$$

对比经典力学的能量 $E = \frac{1}{2} m (\dot{\vec{x}})^2$，而电磁场的能量密度

$$
\mathcal{E} = \frac{\varepsilon_0}{2} |\vec{E}|^2 + \frac{1}{2 \mu_0} |\vec{B}|^2
$$

可以发现，$\vec{E}$ 和 $\vec{B}$ 类似于某种广义速度 $\text{“ } \dot{\vec{x}} \text{ ”}$. 而在静电静磁场中，我们用标势和矢势来描述电磁场的状态：

$$
\begin{aligned}
    \vec{E} &= - \nabla \phi \quad \Longleftarrow \quad \nabla \times \vec{E} = \vec{0} && \mathrm{d} \mathcal{E} = 0 \\
    \vec{B} &= \nabla \times \vec{A} \quad \Longleftarrow \quad \nabla \cdot \vec{B} = 0 && \mathrm{d} \mathcal{B} = 0
\end{aligned}
$$

这里不管空间导数和时间导数的区别（时间和空间本质上是一样的），可以发现 $\phi, \vec{A}$ 类似于某种广义坐标。

从微分形式的角度看，

$$
\mathrm{d} \mathcal{F} = 0
$$

说明 $\mathcal{F}$ 是 2-形式，可以写成 $\mathcal{F} = \mathrm{d} \mathcal{A}$，那么 $\mathcal{A}$ 就是 1-形式。设

$$
\mathcal{A} = A_\nu \mathrm{d} x^\nu
$$

则

$$
\begin{aligned}
    \mathcal{F} = \mathrm{d} \mathcal{A} &= (\partial_\mu A_\nu) \, \mathrm{d} x^\mu \wedge \mathrm{d} x^\nu \\
    &= \frac{1}{2} (\partial_\mu A_\nu - \partial_\nu A_\mu) \, \mathrm{d} x^\mu \wedge \mathrm{d} x^\nu
\end{aligned}
$$

上面利用了楔积的反对称性。因此

$$
F_{\mu \nu} = \partial_\mu A_\nu - \partial_\nu A_\mu
$$

这就把 $\mathcal{A}$ 的分量与电磁张量联系在了一起。

$$
\begin{aligned}
    & \text{静电：} \quad E_i = - c F_{0i} 
    & \text{静磁：} \quad B_i = - \frac{1}{2} \epsilon_{ijk} F_{jk}
\end{aligned}
$$




达朗贝尔算符 $\Box = \partial_\nu \partial^\nu = \frac{1}{c^2} \frac{\partial^2}{\partial t^2} - \nabla^2$，相当于四维空间中的拉普拉斯算符。