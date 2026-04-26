> 2026/04/23 8:00
> 
> -   三维空间中（规范）场的统一描述
>     - 矢量
>     - 微分形式
>     - 张量



!!! tip "张量的物理"
    如果把张量当作一个纯粹的数学工具，是 OK 的，但是张量的背后也有物理意义。在直角坐标系下，$\vec{E} = E_i d x_i$，得到三个分量 $(E_1, E_2, E_3)$. 如果换了个坐标系，这三个数字肯定不能直接拿来用，变成 $(E_1', E_2', E_3')$. 但这新的三个分量不是任意的，因为我们讨论的物理对象是同一个东西，它不依赖于坐标系的选择。

    对于微分形式 $\omega$ 也是如此。如果我们要计算某种物理量，计算式子总是会长成这种形式：

    $$
    \int_{\Sigma} \omega
    $$

    积分本质上就是求和，不同的坐标系下，积分有不同的表达式，但是讨论的物理图像是没有变的。所以 $\omega$ 实际上是一个几何概念。

### 协变

从 $(u_1, u_2, u_3)$ 变换到 $(u_1', u_2', u_3')$，利用链式法则：

$$
\mathcal{E} = E_i d u_i = E_j' d u_j' = E_j' \frac{\partial u_j'}{\partial u_i} d u_i \implies E_i = E_j' \frac{\partial u_j'}{\partial u_i}
$$

从 $(u_1', u_2', u_3')$ 变换到 $(u_1, u_2, u_3)$，同理有

$$
E_j' = E_i \frac{\partial u_i}{\partial u_j'}
$$

这两个表达式很像，容易搞错。不妨引入一个聪明的办法：对于哑指标，一上一下才能配对求和。把坐标的指标写在上面，就有

$$
E_i d u^i = E_j' d u'^j = E_j' \frac{\partial u'^j}{\partial u^i} d u^i \implies E_i = E_j' \frac{\partial u'^j}{\partial u^i}
$$

因为 $\partial u^i$ 在分母，所以 $i$ 变成下标。同样地，有

$$
E_j' = E_i \frac{\partial u^i}{\partial u'^j}
$$

之后便不用从链式法则推导变换关系的指标在哪，直接根据哑指标“一上一下”的规则就能写出来。满足

$$
\begin{aligned}
    E_i &= E_j' \frac{\partial u'^j}{\partial u^i} \\
    E_j' &= E_i \frac{\partial u^i}{\partial u'^j}
\end{aligned}
$$

的张量称为**协变张量**（covariant tensor）。

### 逆变

从方向导数出发，考虑标量场 $f$ 在 $\vec{v}$ 方向上的变化率：

$$
\vec{v} \cdot \nabla f = v_i \frac{\partial f}{\partial x_i}
$$

将上面协变的方法引入，写成

$$
v^i \frac{\partial f}{\partial u^i} = v'^j \frac{\partial f}{\partial u'^j}
$$

使用链式法则 $\frac{\partial}{\partial u'^j} = \frac{\partial u^i}{\partial u'^j} \frac{\partial}{\partial u^i}$，得到

$$
v^i = v'^j \frac{\partial u^i}{\partial u'^j}
$$

这个式子也可以提笔就写，因为 $j$ 是哑指标就要求 $\partial u'^j$ 在分母。从而得到**逆变张量**（contravariant tensor）的变换关系：

$$
\begin{aligned}
    v^i &= v'^j \frac{\partial u^i}{\partial u'^j} \\
    v'^i &= v^j \frac{\partial u'^i}{\partial u^j}
\end{aligned}
$$

注意逆变的指标在上面，协变的指标在下面。对于有多个指标的张量 $T_{ijkl \ldots}$，对每个指标分别做对应的变换操作。例如，$\left. T_i \right.^j$ 称为混合型（mixed）张量，它的变换关系为

$$
\left. T_i \right.^j = \left. T'_k \right.^l \frac{\partial u'^k}{\partial u^i} \frac{\partial u^j}{\partial u'^l}
$$

!!! note "Remarks"
    1.  回头看“一上一下”的规则，凭啥就是这样的呢？考虑 $A_i B^i$ 的变换关系：

        $$
        \begin{aligned}
            A_i B^i &= A'_k \frac{\partial u'^k}{\partial u^i} B'^l \frac{\partial u^i}{\partial u'^l} \\
            &= A'_k B'^l \frac{\partial u'^k}{\partial u'^l} = A'_k B'^l \delta^k_l \\
            &= A'_k B'^k
        \end{aligned}
        $$

        所以 $A_i B^i$ 在不同的坐标下讨论的都是把各个分量加在一起，物理意义是一样的。
    
    2.  考虑空间中的一段线元 $|d \vec{l}|^2 = d s^2$，在不同坐标系下，线元的表达式不同，但物理意义是一样的，都是同一段小线段（所以 $d s^2$ 也是一个几何概念）。坐标本身是逆变的
    
        $$
        d s^2 = \boxed{?} \, d u^i d u^j = g_{ij} d u^i d u^j
        $$

        怎么样才能把两个上标求和掉？引入一个**度规张量**（metric tensor）$g_{ij}$，它是一个协变张量（只有下标），且显然是对称的 $g_{ij} = g_{ji}$. 度规有性质

        $$
        \left \{
            \begin{aligned}
                & \| g_{ij} \| \| g^{jk} \| = \| \delta_i^k \| \\
                &g_{ij} g^{jk} = \delta_i^k
            \end{aligned}
        \right.
        $$
    
    3.  体元

        $$
        d V = d x_1 \wedge d x_2 \wedge d x_3 = \# \, d u^1 \wedge d u^2 \wedge d u^3
        $$

        想知道 $\#$ 是什么。现在式子左边还没有张量，没法坐标变换，引入 Levi-Civita 符号，并考虑由此带来的重数 $3!$，得到

        $$
        \begin{aligned}
            d V &= \frac{1}{3!} \epsilon_{ijk} d x^i \wedge d x^j \wedge d x^k = \frac{1}{3!} \epsilon_{ijk} \boxed{?} \, d u^i \wedge d u^j \wedge d u^k \\
        \end{aligned}
        $$