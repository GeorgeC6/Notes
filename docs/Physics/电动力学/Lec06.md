
> 2026/03/19 8:00
> 
> - 静电场的能量
> - 静电场的模式分解

将电荷 $q$ 从无穷远处移到离 $Q$ 距离为 $\vec{x}$ 的地方，我们都知道增加的电势能为 $\frac{1}{4\pi \varepsilon_0} \frac{Q q}{|\vec{x}|}$.

能量总是要存储在什么物质中的，这种物质越多能量也越多。能量仅仅存在于电荷 $q$ 中吗？固定 $q$，松开 $Q$，$Q$ 又跑开了，原来的电势能减少。但是 $q$ 不动，理应没有能量的转移！说明能量存在于别处。

$n$ 个点电荷 $Q_a$（$a$ 代表位置）之间的电势能为

$$
E = \frac{1}{2} \sum_{a \neq b}^n \frac{1}{4 \pi \varepsilon_0} \frac{Q_a Q_b}{|\vec{x}_a - \vec{x}_b|}
$$

空间中的连续分布：

$$
\begin{aligned}
    E &= \frac{1}{2} \int \frac{1}{4 \pi \varepsilon_0} \frac{\rho(\vec{x}_a) \, \mathrm{d}^3 \vec{x}_a \, \rho(\vec{x}_b) \, \mathrm{d}^3 \vec{x}_b}{|\vec{x}_a - \vec{x}_b|} \\
    &= \frac{1}{2} \int \rho(\vec{x}) \, \mathrm{d}^3 \vec{x} \;\phi(\vec{x}) \\
    &= \frac{\varepsilon_0}{2} \int (\nabla \cdot \vec{E}) \phi(\vec{x}) \, \mathrm{d}^3 \vec{x} \\
    &= \frac{\varepsilon_0}{2} \int \Big(\nabla \cdot (\phi \vec{E}) - \vec{E} \cdot \nabla \phi\Big) \, \mathrm{d}V \\
    &= \frac{\varepsilon_0}{2} \cancelto{0}{\int_{\partial V} \phi \vec{E} \cdot d \vec{S}} + \boxed{\frac{\varepsilon_0}{2} \int_V |\vec{E}|^2 \, dV}
\end{aligned}
$$

现在的问题是，这个能量发散吗？离散的点电荷只要 $a \neq b$，就不会发散；对于连续分布的电荷，观察被积式的分子 $(\mathrm{d}^3 \vec{x}_a \mathrm{d}^3 \vec{x}_b)$ 和分母 $(|\vec{x}_a - \vec{x}_b|)$，发现分子阶次更高

以两个电荷为例，

$$
E = \frac{\varepsilon_0}{2} \int \mathrm{d} V \frac{1}{4 \pi \varepsilon_0} \left| \frac{Q_1 (\vec{x} - \vec{x}_1)}{|\vec{x} - \vec{x}_1|^3}  + \frac{Q_2 (\vec{x} - \vec{x}_2)}{|\vec{x} - \vec{x}_2|^3} \right|^2
$$




静电问题：给定区域内部的电荷分布 $\rho(\vec{x})$ 和边界条件，结合电场规律（$\nabla \times \vec{E} = 0, \,\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$）求解 $\vec{E}(\vec{x})$. 引入电势 $\phi(\vec{x})$，满足 $\vec{E} = - \nabla \phi(\vec{x})$，则 $\nabla \cdot (\nabla \phi) = - \frac{\rho}{\varepsilon_0}$，即**泊松方程**。拉普拉斯算子 $\nabla^2 \equiv \nabla \cdot \nabla$.

考虑一维问题

$$
\mathrm{d}_t^2 \phi(t) = - \frac{\rho(t)}{\varepsilon_0}
$$

边界条件为 $\phi(t_0) = \phi_0, \, \phi'(t_0) = V_0$，则可能的一个解为

$$
\phi(t) = \underset{\tilde{\phi}}{\underbrace{\int_{t_0}^t dt' \int_{t_0}^{t'} \left(- \frac{\rho(t'')}{\varepsilon_0} \, dt'' \right)}} + \underset{\tilde{\tilde{\phi}}}{\underbrace{\phi_0 + V_0 (t - t_0)}}
$$

这里将 $\phi$ 分解为两部分：$\tilde{\phi}$ 是**特解**，$\tilde{\tilde{\phi}}$ 是**通解**。特解 $\tilde{\phi}$ 不需要满足边界条件，只关心源项对电势分布造成的影响，之后将会使用**格林函数**讨论；通解 $\tilde{\tilde{\phi}}$ 只关心真空中允许的独立解，往往和算子的**本征函数**有关，这称为**模式分解**。有趣的是，模式的研究和电磁波有所关联，而特解的研究和电磁辐射有关。

直角坐标系下，$\nabla^2 \phi = \sum_{i=1}^3 \partial_i^2 \phi = 0$. 分离变量：

$$
\phi(\vec{x}) = U(x_1) V(x_2) W(x_3)
$$

代入方程，得到

$$
\frac{1}{U} \frac{d^2 U}{d x_1^2} + \frac{1}{V} \frac{d^2 V}{d x_2^2} + \frac{1}{W} \frac{d^2 W}{d x_3^2} = 0
$$

分别等于常数 $c_1, c_2, c_3$，则

$$
\left \{
    \begin{aligned}
        & \mathrm{d}_1^2 U - c_1 U = 0 \\
        & \mathrm{d}_2^2 V - c_2 V = 0 \\
        & \mathrm{d}_3^2 W - c_3 W = 0 \\
        & c_1 + c_2 + c_3 = 0
    \end{aligned}
\right.
$$

按 $c_1$ 的符号分情况讨论：

1.  $c_1 = 0$, 本征函数为 $1, x_1$
2.  $c_1 > 0$, 本征函数为 $\mathrm{e}^{\kappa_1 x_1}, \mathrm{e}^{-\kappa_1 x_1}$, 其中 $\kappa_1^2 = c_1$
3.  $c_1 < 0$, 本征函数为 $\mathrm{e}^{\mathrm{i} \kappa_1 x_1}, \mathrm{e}^{-\mathrm{i} \kappa_1 x_1}$, 其中 $\kappa_1^2 = -c_1$
    注意到 $\partial_{x_1} f = \# f$