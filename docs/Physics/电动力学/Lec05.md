> 2026/03/17 10:00
>
> - 张量计算（续）

推导恒等式 $\epsilon_{ijk} \epsilon_{klm} = \delta_{il} \delta_{jm} - \delta_{im} \delta_{jl}$.

一步步从 $\delta_{ij}$ 构造。因为 $\epsilon_{ijk}$ 的取值只能是 $1, -1, 0$，所以可以尝试用 $\delta_{ij}$ 的组合来表示，反对称性就认为加上符号来解决。

对于更一般的情况 $\epsilon_{i_1 i_2 i_3} \epsilon_{j_1 j_2 j_3}$，先考虑 $123123$：

$$
\epsilon_{i_1 i_2 i_3} \epsilon_{j_1 j_2 j_3} \doteq \delta_{i_1 j_1} \delta_{i_2 j_2} \delta_{i_3 j_3}
$$

这是满足的，但不满足反对称性。可以先考虑 $j$ 的置换。因为 $j_1 j_2 j_3$ 有三个，所以共 6 种置换方式：

$$
\begin{aligned}
    \epsilon_{i_1 i_2 i_3} \epsilon_{j_1 j_2 j_3} &\doteq \delta_{i_1 j_1} \delta_{i_2 j_2} \delta_{i_3 j_3} - \delta_{i_1 j_2} \delta_{i_2 j_1} \delta_{i_3 j_3} - \delta_{i_1 j_3} \delta_{i_2 j_2} \delta_{i_3 j_1} \\
    &- \delta_{i_1 j_1} \delta_{i_2 j_3} \delta_{i_3 j_2} + \delta_{i_1 j_2} \delta_{i_2 j_3} \delta_{i_3 j_1} + \delta_{i_1 j_3} \delta_{i_2 j_1} \delta_{i_3 j_2}
\end{aligned}
$$

这样就满足了 $j$ 的反对称性。如果把每一项中 $\delta$ 的顺序按 $j_1 j_2 j_3$ 来排列（比如 $\delta_{i_1 j_2} \delta_{i_2 j_3} \delta_{i_3 j_1} \to \delta_{i_3 j_1} \delta_{i_1 j_2} \delta_{i_2 j_3}$），就会发现 $i$ 也完成了全部的置换！所以上式就是严格成立的：

$$
\begin{equation} \tag{1.10} \label{eq:epsilon-epsilon}
    \begin{aligned}
        \epsilon_{i_1 i_2 i_3} \epsilon_{j_1 j_2 j_3} &= \delta_{i_1 j_1} \delta_{i_2 j_2} \delta_{i_3 j_3} - \delta_{i_1 j_2} \delta_{i_2 j_1} \delta_{i_3 j_3} - \delta_{i_1 j_3} \delta_{i_2 j_2} \delta_{i_3 j_1} \\
        &- \delta_{i_1 j_1} \delta_{i_2 j_3} \delta_{i_3 j_2} + \delta_{i_1 j_2} \delta_{i_2 j_3} \delta_{i_3 j_1} + \delta_{i_1 j_3} \delta_{i_2 j_1} \delta_{i_3 j_2}
    \end{aligned}
\end{equation}
$$

回到 $\epsilon_{ijk} \epsilon_{klm}$，在上式中令两个指标强行相等（相当于 $\delta_{k_1 k_2} \epsilon_{ijk_1} \epsilon_{k_2 lm}$，这称为**缩并**），不妨考虑 $i = 1, j = 2, l = 1, m = 2$：

$$
\epsilon_{123} \epsilon_{321} = 1 = 
$$

:bulb: 所有分量都是由全反对称性联系在一起的，所以只要考虑一个分量就可以了！


!!! question "奇怪的问题"
    我们已经习惯了

    $$
    \int_V (\nabla \cdot \vec{v}) \, dV = \int_{\partial S} \vec{v} \cdot d\vec{S}
    $$

    那我就是要问旋度的体积分呢？

    $$
    \int_V (\nabla \times \vec{v}) \, dV = \int_{\partial V} ?
    $$

    观察

    $$
    \int_V \partial_i v_i \, dV = \int_{\partial V} v_i \, d S_i
    $$

    只要体积分的被积式有一个指标和 $\partial$ 相同，就满足这个式子。

    ---

    $$
    \int_{\partial V} d \vec{S} = ?
    $$

    预计是 0，因为总有一对方向相反的面元。



