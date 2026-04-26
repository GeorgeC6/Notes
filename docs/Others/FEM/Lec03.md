# The Stiffness Method

!!! example "One Spring Element"

    - Two nodes: $i, j$
    - Nodal displacement: $u_i, u_j$
    - Nodal forces: $f_i, f_j$
    - stiffness constant: $k$

    Element Equilibrium

    Force from the spring: $F = k (u_j - u_i)$

    $$
    \left \{
    \begin{aligned}
        f_i &= -F = k u_i - k u_j \\
        f_j &= F = -k u_i + k u_j
    \end{aligned}
    \right. \implies \begin{bmatrix}
        k & -k \\
        -k & k
    \end{bmatrix} \begin{bmatrix}
        u_i \\
        u_j
    \end{bmatrix} = \begin{bmatrix}
        f_i \\
        f_j
    \end{bmatrix}
    $$

    - $\mathbf{k}$: Element stiffness matrix
    - $\mathbf{u}$: Nodal displacement vector / DOF vector
    - $\mathbf{f}$: Element nodal force vector

    can also be derived from the Principle of Minimum Potential Energy

## Spring System

Now consider a two-spring system:


$f_i^m$: the internal force acting on node $i$ from the spring element $m$.

$$
\textcolor{skyblue}{
\begin{bmatrix}
    k_1 & -k_1 \\
    -k_1 & k_1
\end{bmatrix}} \begin{bmatrix}
    u_1 \\
    u_2
\end{bmatrix} = \begin{bmatrix}
    f_1^1 \\
    f_2^1
\end{bmatrix}, \,
\textcolor{orange}{
\begin{bmatrix}
    k_2 & -k_2 \\
    -k_2 & k_2
\end{bmatrix}} \begin{bmatrix}
    u_2 \\
    u_3
\end{bmatrix} = \begin{bmatrix}
    f_2^2 \\
    f_3^2
\end{bmatrix}
$$

Consider the {++equilibrium at each node++},

$$
\left \{
    \begin{aligned}
        & F_1 = f_1^1 = k_1 u_1 - k_1 u_2 \\
        & F_2 = f_2^1 + f_2^2 = -k_1 u_1 + (k_1 + k_2) u_2 - k_2 u_3 \\
        & F_3 = f_3^2 = k_2 u_3 - k_2 u_2
    \end{aligned}
\right.
$$

which is

$$
\begin{bmatrix}
    k_1 & -k_1 & 0 \\
    -k_1 & k_1 + k_2 & -k_2 \\
    0 & -k_2 & k_2
\end{bmatrix} \begin{bmatrix}
    u_1 \\
    u_2 \\
    u_3
\end{bmatrix} = \begin{bmatrix}
    F_1 \\
    F_2 \\
    F_3
\end{bmatrix}
$$

looks like the stiffness matrix of the system is the sum of the stiffness matrices of the elements!

### Assemble the global stiffness matrix

Augment the element stiffness matrices to the size (DOF) of the system:

$$
\begin{aligned}
    & \begin{bmatrix}
        k_1 & -k_1 \\
        -k_1 & k_1
    \end{bmatrix} \implies \begin{bmatrix}
        k_1 & -k_1 & 0 \\
        -k_1 & k_1 & 0 \\
        0 & 0 & 0
    \end{bmatrix} \\[2ex]
    & \begin{bmatrix}
        k_2 & -k_2 \\
        -k_2 & k_2
    \end{bmatrix} \implies \begin{bmatrix}
        0 & 0 & 0 \\
        0 & k_2 & -k_2 \\
        0 & -k_2 & k_2
    \end{bmatrix}
\end{aligned}
$$

一般地，对于连接节点 $i, j$ 的元素 


## Methods to Apply Fixed Displacements

当刚度矩阵奇异时，说明系统中存在刚体运动，需要施加边界条件。

### Matrix partitioning

$$
\begin{bmatrix}
    K_{11} & K_{12} \\
    K_{21} & K_{22}
\end{bmatrix} \begin{bmatrix}
    d_{\text{fix}} \\
    d_{?}
\end{bmatrix} = \begin{bmatrix}
    F_{?} \\
    F_{\text{fix}}
\end{bmatrix}
$$

1)  Solve for $d_{?}$: $K_{22} d_{?} = F_{\text{fix}} - K_{21} d_{\text{fix}}$
2)  Solve for $F_{?}$: $F_{?} = K_{11} d_{\text{fix}} + K_{12} d_{?}$

> Note: for $d_{\text{fix}} = 0$, we can delete the corresponding rows and columns

!!! tip "挪动固定位移到向量的上面"
    以 $3 \times 3$ 的系统为例，假设 $d_2 = \delta$ 是固定的

    $$
    \begin{bmatrix}
        K_{11} & K_{12} & K_{13} \\
        K_{21} & K_{22} & K_{23} \\
        K_{31} & K_{32} & K_{33}
    \end{bmatrix} \begin{bmatrix}
        d_1 \\
        \delta \\
        d_3
    \end{bmatrix} = \begin{bmatrix}
        F_1 \\
        F_2 \\
        F_3
    \end{bmatrix}
    $$

    交换 $d_1$ 和 $d_2$，需要交换刚度矩阵的 1,2 列：

    $$
    \begin{bmatrix}
        K_{12} & K_{11} & K_{13} \\
        K_{22} & K_{21} & K_{23} \\
        K_{32} & K_{31} & K_{33}
    \end{bmatrix} \begin{bmatrix}
        \delta \\
        d_1 \\
        d_3
    \end{bmatrix} = \begin{bmatrix}
        F_1 \\
        F_2 \\
        F_3
    \end{bmatrix}
    $$

    再交换 $F_1$ 和 $F_2$，需要交换刚度矩阵的 1,2 行：

    $$
    \begin{bmatrix}
        K_{22} & K_{21} & K_{23} \\
        K_{12} & K_{11} & K_{13} \\
        K_{32} & K_{31} & K_{33}
    \end{bmatrix} \begin{bmatrix}
        \delta \\
        d_1 \\
        d_3
    \end{bmatrix} = \begin{bmatrix}
        F_2 \\
        F_1 \\
        F_3
    \end{bmatrix}
    $$



Pros:

- Fewer equations to solve
- exactly satisfies constraints

Cons:

- Complex implementation (interchanging rows and columns)


### Row Substitution

Suppose we want to apply $d_i = \delta$

$$
\begin{bmatrix}
    & & & \cdots \\
    K_{i1} & K_{i2} & \cdots & K_{ii} & \cdots\\
    & & & \cdots
\end{bmatrix} \begin{bmatrix}
    \\
    \delta \\
    \\
\end{bmatrix} = \begin{bmatrix}
    \\
    F_i \\
    \\
\end{bmatrix}
$$

Save row $i$, $K_{ii} = 1, K_{ij} = 0$:

$$
\begin{bmatrix}
    & & & \cdots \\
    0 & 0 & \cdots & 1 & \cdots\\
    & & & \cdots
\end{bmatrix} \begin{bmatrix}
    \\
    d_i \\
    \\
\end{bmatrix} = \begin{bmatrix}
    \\
    F_i \\
    \\
\end{bmatrix}
$$

### Penalty Method

$$
\begin{bmatrix}
    & & & \cdots \\
    K_{i1} & K_{i2} & \cdots & K_{ii} \textcolor{crimson}{+\text{BIG}} & \cdots\\
    & & & \cdots
\end{bmatrix} \begin{bmatrix}
    \\
    \delta \\
    \\
\end{bmatrix} = \begin{bmatrix}
    \\
    F_i \textcolor{crimson}{+\text{BIG} \cdot \delta} \\
    \\
\end{bmatrix}
$$

then the matrix is approximately equivalent to

$$
K_{i1} d_1 + K_{i2} d_2 + \cdots + (K_{ii} + \text{BIG}) \delta + \cdots = F_i + \text{BIG} \cdot \delta
$$

this is easy to program!

## Properties of global stiffness matrix

