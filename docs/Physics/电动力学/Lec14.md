> 2026/04/16 8:00
> 
> - 静磁场多极展开与磁多极子
> - 静电/磁场的统一描述

库伦规范（$\nabla \cdot \vec{A} = 0$）下：

$$
\begin{equation}
    \vec{A}(\vec{x}) = \frac{\mu_0}{4\pi} \int_V \frac{\vec{J}(\vec{x}') \, \mathrm{d} V'}{|\vec{x} - \vec{x}'|} = \frac{\mu_0}{4\pi} \sum_{\ell = 0}^{\infty} \int_V \vec{J}(\vec{x}') \, \mathrm{d} V' \frac{|\vec{x}'|^\ell}{|\vec{x}|^{\ell + 1}} P_\ell(\cos \theta)
\end{equation}
$$

-   $\ell = 0$：

    $$
    \vec{A}(\vec{x}) = \frac{\mu_0}{4\pi} \frac{1}{|\vec{x}|} \boxed{\int_V \vec{J}(\vec{x}') \, \mathrm{d} V'} = 0
    $$

    下面说明 $\int_V \vec{J}(\vec{x}') \, \mathrm{d} V' = 0.$
    
    - 第一种角度，假想我们在 $V$ 内是沿着一圈圈的闭合路径积分的，也就是 $\sum_L \oint_L I \, \mathrm{d}\vec{l}$，其中 $I = \vec{J}(\vec{x}') \, \mathrm{d} S$ 为截面微元上的电流通量。对于每一圈闭合路径，电流通量 $I$ 都是相同的，因为 $\nabla \cdot \vec{J} = 0$ 无源。将 $I$ 提到积分号外面，自然得到结果为零（可以是从矢量首尾相连积一圈回到原点理解，也可以严格地使用 Stokes 定理：$\int_{\partial S} \mathrm{d}\vec{l} = \int_{\partial S} \delta_{i \textcolor{orange}{j}} \, \mathrm{d} x_{\textcolor{orange}{j}} = \int_S \epsilon_{\textcolor{orange}{j}lm} \partial_l \delta_{im} \, \mathrm{d} S_{\textcolor{orange}{j}}$，对常数 $\delta_{im}$ 求导肯定为0）。
    
    - 第二种角度，使用 Stokes 定理：
    
    $$
    \begin{aligned}
        \int_V J_i \, \mathrm{d} V' = \int_V J_j \delta_{ji} \, \mathrm{d} V' = \int_V J_j (\partial_j' x_i') \, \mathrm{d}V' &= \int_V \partial_j' (J_j x_i') \, \mathrm{d}V' - \int_V \cancelto{0}{(\partial_j' J_j)} x_i' \, \mathrm{d}V' \\
        &\xlongequal{\text{Stokes}} \int_{\partial V} J_j x_i' \, \mathrm{d} S_j' \xlongequal{\vec{J} \cdot \mathrm{d}\vec{S}'\Big|_{\partial V} = 0} 0
    \end{aligned}
    $$

    最后一个等号是因为在边界 $\partial V$ 上，电流密度 $\vec{J} = 0$（对于完全包围已知电流的闭合曲面，没有电流穿出边界）

-   $\ell = 1$：

    $$
    A_i^{(1)} = \frac{\mu_0}{4\pi} \frac{x_j}{|\vec{x}|^3} \underset{m_{ji}}{\underbrace{\int_V J_i(\vec{x}') x_j' \, \mathrm{d} V'}}
    $$


!!! note "关于二阶张量的分解"
    [第九讲](./Lec09.md)开头提到过，二阶张量 $T_{ij}$ 总可以分解为对称部分和反对称部分：

    $$
    T_{ij} = \frac{T_{ij} + T_{ji}}{2} + \frac{T_{ij} - T_{ji}}{2}
    $$

    现在将对称部分进一步分解为无迹部分和迹。$T$ 的迹为 $T_{ij} \delta_{ij}$，要使对称部分无迹，相当于问

    $$
    \left( \frac{T_{ij} + T_{ji}}{2} - \# \, T_{kk} \delta_{ij} \right) \delta_{ij} = 0
    $$

    括号内第一项与 $\delta_{ij}$ 缩并后为 $T_{kk}$，第二项为 $3 \#$，因此 $\# = 1/3$.

    $$
    T_{ij} = \underbrace{\frac{T_{ij} + T_{ji}}{2} - \frac{1}{3} T_{kk} \delta_{ij}}_{\text{对称无迹部分 } T_{ij}^{(s)}} + \underbrace{\frac{1}{3} T_{kk} \delta_{ij}}_{\text{迹 } T_{ij}^{(t)}} + \underbrace{\frac{T_{ij} - T_{ji}}{2}}_{\text{反对称部分 } T_{ij}^{(a)}}
    $$

    $\frac{1}{3} T_{kk} \delta_{ij}$ 的张量性质完全由 $\delta_{ij}$ 提供，所以相当于一个标量。前面提到过，电四极矩 $p_{ij}$ 也是个无迹对称张量：

    $$
    p_{ij} = \int_V \rho(\vec{x}') \, d^3 \vec{x}' \frac{3 x_i' x_j' - |\vec{x}'|^2 \delta_{ij}}{2}
    $$

    而磁偶极矩 $m_{ij}$ 是反对称张量，电荷量是标量...这不禁让人好奇，是否存在一个张量能把这些物理对象都囊括进去。

-   $\ell = 2$

    $$
    A_i^{(2)} = \frac{\mu_0}{4\pi} \frac{x_j x_k}{|\vec{x}|^5} \underset{\tilde{m}_{jki}}{\underbrace{\int_V J_i(\vec{x}') \, \mathrm{d} V' \underset{P_{jk}^{(2)}(\vec{x}')}{\underbrace{\frac{3 x_j' x_k' - |\vec{x}'|^2 \delta_{jk}}{2}}}}}
    $$

    关注自由度。注意到 $\tilde{m}_{jki}$ 的 $j,k$ 指标由 $P_{jk}^{(2)}$ 提供，所以这两个指标是对称无迹的，有 5 个自由度；再算上 $i$ 指标，总共有 $5 \times 3 = 15$ 个自由度。而多极展开的对称性与勒让德多项式相同，预期磁四极矩也得是 5 个自由度才对。



!!! note "恒等式"
    $$
    \begin{aligned}
        \int \Big(J_i x_j' x_k' + J_j x_i' x_k' + J_k x_i' x_j' \Big) \, \mathrm{d} V' &= 0 \\
        \int \Big(2 (\vec{J} \cdot \vec{x}') x_i' + J_i |\vec{x}'|^2 \Big) \, \mathrm{d} V' &= 0
    \end{aligned}
    $$

!!! note "$m_{jki}^{(t)}$ 对磁场没有贡献"
    $$
    A_i^{(2, t)} = \frac{\mu_0}{4\pi} \frac{x_j x_k}{|\vec{x}|^5} \frac{1}{2} \int \mathrm{d} V' (\vec{J} \cdot \vec{x}') \partial_i' P_{jk}^{(2)}(\vec{x}')
    $$

    对应的磁感应强度

    $$
    \begin{aligned}
        B_i^{(2, t)} &= \epsilon_{ijk} \partial_j A_k^{(2, t)} = \frac{\mu_0}{4\pi} \epsilon_{ijk} \partial_j \left( \frac{x_l x_m}{|\vec{x}|^5} \right) \int \mathrm{d} V' (\vec{J} \cdot \vec{x}') \partial_k' P_{lm}^{(2)}(\vec{x}') \\
    \end{aligned}
    $$

    最终得到

    $$
    m_{jki} = \frac{3}{2} \int \mathrm{d} V' \bigg( J_i x_j' x_k' + )
    $$