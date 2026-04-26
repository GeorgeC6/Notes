

> 2026/03/12 8:00
>
> - 静电场的环量与通量
> - 微分形式（续）
> - 梯度场
> - 张量计算

$$
\text{电荷} \underset{\text{环量、通量}}{\overset{\text{库仑定律}}{\rightleftharpoons}} \vec{E}(\vec{x})
$$

环量

$$
\int_L \vec{E}(\vec{x}) \cdot d \vec{l} = \phi_{\text{start}}(\vec{x}) - \phi_{\text{end}}(\vec{x}) \implies \oint_L \vec{E}(\vec{x}) \cdot d \vec{l} = 0
$$

静电势

$$
\phi(\vec{x}) = \frac{1}{4 \pi \epsilon_0} \frac{Q}{|\vec{x} - \vec{x}'|}
$$

重要关系式（全微分）

$$
\mathrm{d} \frac{1}{|\vec{x} - \vec{x}'|} = - \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3} \cdot d \vec{x}
$$

通量

$$
\int_S \vec{E}(\vec{x}) \cdot d \vec{S} = \frac{Q}{\varepsilon_0}
$$

引出电场线

1.  电场线不能闭合
    
    沿着电场线积分有 $\int \vec{E} \cdot d\vec{l} = \int |\vec{E}| \cdot |d \vec{l}| > 0$，如果有闭合的电场线，则 $\oint \vec{E} \cdot d \vec{l} > 0$

    -  在有限区域内有端点
    -  延伸到 $\infty$
2.  电场线密度
    
    很小的区域内，电场线认为是平行的。垂直取一个截面 $d S$,
    
    $$
    \text{“密度”} = \lim_{d S \to 0} \frac{\Phi}{|d S|} = \lim_{d S \to 0} \frac{\vec{E} \cdot d \vec{S}}{|d S|} = |\vec{E}|
    $$

## 微分形式

$$
\begin{aligned}
    \vec{E} \cdot d\vec{l} &= E_1 d x_1 + E_2 d x_2 + E_3 d x_3 \\ \vec{E} \cdot d \vec{S} &= E_1 d x_2 \wedge d x_3 + E_2 d x_3 \wedge d x_1 + E_3 d x_1 \wedge d x_2
\end{aligned}
$$

将 $d x_i, \, d x_i \wedge d x_j$ 视作线性空间的一组基，$E_i$ 是坐标分量，这些分量承载了电场的信息。

$$
\begin{aligned}
    & \text{0-形式} && f(\vec{x}) \\
    & \text{1-形式} && \sum \# \, d x_i \\
    & \text{2-形式} && \sum \# \, d x_i \wedge d x_j \\
    & \text{3-形式} && \# \, d x_1 \wedge d x_2 \wedge d x_3
\end{aligned}
$$

三维空间中只有这些形式了，再加一个 $\wedge$ 必然会变为 0. 这些形式之间如何转换？

考虑一个全微分 $\mathrm{d} \boxed{\ldots dx} = \sum_i \frac{\partial \boxed{\ldots dx}}{\partial x_i} \boxed{?} dx_i$，问号处应该是楔积。于是引出外微分（exterior derivative，全微分的推广）：

$$
\mathrm{d} \left(\sum_{i, j, k, \ldots} C_{i j k \ldots}(\vec{x}) \, d x_i \wedge d x_j \wedge d x_k \wedge \ldots \right) = \sum_a \sum_{i, j, k, \ldots} \frac{\partial C_{i j k \ldots}}{\partial x_a} \textcolor{orange}{d x_a \wedge} (d x_i \wedge d x_j \wedge d x_k \wedge \ldots)
$$


-   $0 \to 1$:
    $\text{0-形式}: f(\vec{x})$
    
    $$
    \mathrm{d} \underset{\text{0-形式}}{\underbrace{f(\vec{x})}} \longrightarrow \underset{\text{1-形式}}{\underbrace{\sum_i \frac{\partial f}{\partial x_i} d x_i}}
    $$

-   $1 \to 2$:
    $\text{1-形式}: \omega^{(1)} = \sum_i^3 V_i(\vec{x}) d x_i$

    $$
    \begin{aligned}
        \mathrm{d} \omega^{(1)} &= (\partial_2 V_1 \, d x_2 \wedge d x_1 + \partial_3 V_1 \, d x_3 \wedge d x_1) &&= (\partial_2 V_3 - \partial_3 V_2)\; d x_2 \wedge d x_3 \\
        &+ (\partial_1 V_2 \, d x_1 \wedge d x_2 + \partial_3 V_2 \, d x_3 \wedge d x_2) &&+ (\partial_3 V_1 - \partial_1 V_3)\; d x_3 \wedge d x_1 \\
        &+ (\partial_1 V_3 \, d x_1 \wedge d x_3 + \partial_2 V_3 \, d x_2 \wedge d x_3) &&+ (\partial_1 V_2 - \partial_2 V_1)\; d x_1 \wedge d x_2
    \end{aligned}
    $$

    注意到 $d \vec{S} = (d x_2 \wedge d x_3, d x_3 \wedge d x_1, d x_1 \wedge d x_2)$，各分量正好是旋度的形式。

-   $2 \to 3$:
    $\text{2-形式}: \omega^{(2)} = u_1 \, d x_2 \wedge d x_3 + u_2 \, d x_3 \wedge d x_1 + u_3 \, d x_1 \wedge d x_2$

    $$
    d \omega^{(2)} = (\partial_1 u_1 + \partial_2 u_2 + \partial_3 u_3)\; d x_1 \wedge d x_2 \wedge d x_3
    $$