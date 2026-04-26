# 静电场的宏观性质

> 2026/03/05 8:00
>
> - 绪论（续）
> - 静电场的宏观性质

!!! question "惯性系的观测"
    均匀带电无限长导线。实验系（A系）观察到只有静电场；若 B 系以某个速度相对于 A 系运动，则 B 系观察到电流，既有电场又有磁场。那么磁场到底存不存在？

    $\implies$ 磁场本身不能单独作为一种物质看待。电磁场要联系起来看，是统一的。

静电场：

$$
\left \{
\begin{align}
    & \nabla \cdot \boldsymbol{E} = \frac{\rho}{\varepsilon_0} \tag{1.5} \label{maxwell-divE-static} \\[1ex]
    & \nabla \times \boldsymbol{E} + \cancel{\frac{\partial}{\partial t} \boldsymbol{B}} = \mathbf{0} \tag{1.6} \label{maxwell-curlE-static} \\[1ex]
    & \nabla \times \boldsymbol{B} - \cancel{\varepsilon_0 \mu_0 \frac{\partial}{\partial t} \boldsymbol{E}} = \mu_0 \boldsymbol{J} \tag{1.7} \label{maxwell-curlB-static} \\[1ex]
    & \nabla \cdot \boldsymbol{B} = 0 \tag{1.8} \label{maxwell-divB-static}
\end{align}
\right.
$$

- \eqref{maxwell-divE-static} 和 \eqref{maxwell-curlE-static} 是静电规律，\eqref{maxwell-curlB-static} 和 \eqref{maxwell-divB-static} 是静磁规律
- 如何在方程中体现上面例子中的问题呢？需要不同的观测者。

坐标变换（伽利略变换）：

$$
\left \{
    \begin{aligned}
        & t_B = t_A \\
        & y_B = y_A, \, z_B = z_A \\
        & x_B = x_A - vt_A
    \end{aligned}
\right.
$$

于是有了微分关系：

$$
\left \{
    \begin{aligned}
        & \partial_{t_A} = \partial_{t_B} - v \partial_{x_B} \\
        & \partial_{x_A} = \partial_{x_B}, \, \partial_{y_A} = \partial_{y_B}, \, \partial_{z_A} = \partial_{z_B}
    \end{aligned}
\right.
$$

可以发现，对时间的偏导出现了空间的偏导！这意味着，方程 \eqref{maxwell-curlE-static} 在 B 系中就要加上对坐标的偏导了！物理规律在不同的惯性系下不能保持一致！

> 历史上，因为这个问题，催生出了洛伦兹变换和狭义相对论。

- 静电场/静磁场（3D）
    - 规律：宏观/微观
    - 运动模式 $\rightarrow$ 线性
        - :material-star:{.star} 等效点源
    - 解法
- 电磁场（4D）
    - 规律：麦克斯韦方程组（电磁感应）
    - 性质
        - 等效原理
        - :material-star:{.star} 能量/动量（在电磁场中的转移，对称性，和物质的运动息息相关）
    - 电磁波 $\implies$ 辐射
- 物质相互作用
    - 宏观物质
    - 相对论

---

对物理规律的认知始于测量。如何测量静电场？:point_right:试探电荷（“点电荷，很少的电荷，忽略尺寸）

$$
\begin{equation} \tag{1.9} \label{coulomb-force}
    \vec{F} = \frac{1}{4 \pi \varepsilon_0} \frac{Q q}{|\vec{x} - \vec{x}'|^2} \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|}
\end{equation}
$$

!!! warning "式 \eqref{coulomb-force} 的适用范围"
    试探电荷不一定是静止的，可以是运动的，与测量本身无关。

    如果 $q$ 移动，$Q$ 不动，上式是成立的；但如果 $q$ 不动，$Q$ 在移动，上式是不成立的！

    静电场，要求观察对象 $Q$ 静止。

$\vec{F} = q \vec{E}(\vec{x}) \implies \vec{E}(\vec{x}) = \frac{1}{4 \pi \varepsilon_0} \frac{Q}{|\vec{x} - \vec{x}'|^3} (\vec{x} - \vec{x}')$

高斯点源

$$
\vec{E}(\vec{x}) = \sum_i^n \frac{1}{4 \pi \varepsilon_0} \frac{Q_i}{|\vec{x} - \vec{x}_i'|^3} (\vec{x} - \vec{x}_i')
$$

连续电荷源

1. 线电荷 $d Q = \lambda(\vec{x}') d \ell$

> $d \ell$ 是纯粹几何的

$$
\vec{E}(\vec{x}) = \int_C \frac{1}{4 \pi \varepsilon_0} \frac{\lambda(\vec{x}') d \ell'}{|\vec{x} - \vec{x}'|^3} (\vec{x} - \vec{x}')
$$

2. 面电荷 $d Q = \sigma(\vec{x}') d S$

$$
\vec{E}(\vec{x}) = \int_S \frac{1}{4 \pi \varepsilon_0} \frac{\sigma(\vec{x}') d S'}{|\vec{x} - \vec{x}'|^3} (\vec{x} - \vec{x}')
$$

3. 体电荷 $d Q = \rho(\vec{x}') d V$

$$
\vec{E}(\vec{x}) = \int_V \frac{1}{4 \pi \varepsilon_0} \frac{\rho(\vec{x}') d V'}{|\vec{x} - \vec{x}'|^3} (\vec{x} - \vec{x}')
$$

1D:

- 直线 $d \ell = dx$
- 某个面内的曲线 $x_2 = f(x_1), d \ell = \sqrt{1 + (f'(x_1))^2} dx_1$
    - 推广（参数化）：$\sqrt{\sum_\alpha \big(\frac{d x_\alpha}{d t}\big)^2} dt$

2D:

 