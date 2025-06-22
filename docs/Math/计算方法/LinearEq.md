# 线性方程组

$$
\left\{
\begin{aligned}
a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n &= b_1 \\
a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n &= b_2 \\
\vdots \\
a_{n1} x_1 + a_{n2} x_2 + \cdots + a_{nn} x_n &= b_n
\end{aligned}
\right.
$$

矩阵形式

$$\mathbf{A} \mathbf{x} = \mathbf{b}$$

> **Cramer's Rule**
>
> $$x_i = \frac{\det(\mathbf{A}_i)}{\det(\mathbf{A})}$$
>
> 时间复杂度极高，不可能实际应用。

## 消去法

### Gauss 消去法

三元一次方程组为例

$$
\left\{
\begin{align}
a_{11}^{(1)} x_1 + a_{12}^{(1)} x_2 + a_{13}^{(1)} x_3 &= b_1^{(1)} \\
a_{21}^{(1)} x_1 + a_{22}^{(1)} x_2 + a_{23}^{(1)} x_3 &= b_2^{(1)} \\
a_{31}^{(1)} x_1 + a_{32}^{(1)} x_2 + a_{33}^{(1)} x_3 &= b_3^{(1)}
\end{align}
\right.
$$

消去第二行：$(2) - (1) \times \frac{a_{21}}{a_{11}}$，记 $l_{21} = \frac{a_{21}}{a_{11}}$。第三行同理。

```matlab
l21 = A(2,1) / A(1,1);
A(2,:) = A(2,:) - l21 * A(1,:);
l31 = A(3,1) / A(1,1);
A(3,:) = A(3,:) - l31 * A(1,:);
```

这样 $a_{21}^{(1)} = 0$。

$l_{21}, l_{31}$ 长得就像矩阵元素，不如放进去？

现在有个小把戏：**把 $l_{21}$ 存到 $a_{21}^{(1)} = 0$ 的位置**。

```matlab
A(2,1) = A(2,1) / A(1,1);
```

类似地，对 $l_{31}$ 做同样的事情。

```matlab
A(3,1) = A(3,1) / A(1,1);
```

接下来消右下角 2 $\times$ 2 矩阵

```matlab
A(2:3,2:3) = A(2:3,2:3) - A(1,2:3) .* A(2:3,1);
```

消 $b$

```matlab
b(2:3) = b(2:3) - A(1,2:3) .* b(1);
```

--

第二步

```matlab
A(3:3,2) = A(3:3,2) / A(2,2);
```

```matlab
A(3:3,3:3) = A(3:3,3:3) - A(2,3:3) .* A(3:3,2);
```

观察

矩阵运算是并行的

!!! tip "MATLAB 矩阵`.*`运算"
    - `.*`：逐元素相乘（Element-wise）
    - 一般要求两个向量/矩阵的维度相同

    $$
    \begin{bmatrix}
    x_1 & x_2 & \cdots & x_n
    \end{bmatrix}
    \texttt{.*}
    \begin{bmatrix}
    y_1 & y_2 & \cdots & y_n
    \end{bmatrix} =
    \begin{bmatrix}
    x_1 y_1 & x_2 y_2 & \cdots & x_n y_n
    \end{bmatrix}
    $$

    $$
    \begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{bmatrix}
    \texttt{.*}
    \begin{bmatrix}
    b_{11} & b_{12} & \cdots & b_{1n} \\
    b_{21} & b_{22} & \cdots & b_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    b_{m1} & b_{m2} & \cdots & b_{mn}
    \end{bmatrix} =
    \begin{bmatrix}
    a_{11} b_{11} & a_{12} b_{12} & \cdots & a_{1n} b_{1n} \\
    a_{21} b_{21} & a_{22} b_{22} & \cdots & a_{2n} b_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} b_{m1} & a_{m2} b_{m2} & \cdots & a_{mn} b_{mn}
    \end{bmatrix}
    $$

    - 如果两个矩阵的维度不同，MATLAB 会首先处理行向量

    $$
    \begin{bmatrix}
    a_{12} & a_{13}
    \end{bmatrix}
    \texttt{.*}
    \begin{bmatrix}
    a_{21} \\
    a_{31}
    \end{bmatrix} =
    \begin{bmatrix}
    a_{12} \begin{bmatrix} a_{21} \\ a_{31} \end{bmatrix} & a_{13} \begin{bmatrix} a_{21} \\ a_{31} \end{bmatrix}
    \end{bmatrix} = 
    \begin{bmatrix}
    a_{12} a_{21} & a_{13} a_{21} \\
    a_{12} a_{31} & a_{13} a_{31}
    \end{bmatrix}
    $$

如果 $a_{kk}^{(k)}$ 很小，放在分母误差很大！

#### 选列主元（Partial Pivoting）

在消元的时候，选取列主元，即每次选取**当前列中绝对值最大的元素**作为主元。

- 交换行

```matlab
A([1,2],:) = A([2,1],:); % 交换第一行和第二行
```

!!! warning
    不选列主元，高斯消元可能是不稳定的。

## LU 分解

第一次消元：$A^{(1)} \to A^{(2)}$

初等变换：$(2) - l_{21} \times (1), (3) - l_{31} \times (1), \ldots, (n) - l_{n1} \times (1)$

初等变换矩阵

$$
P^{(1)} =
\begin{bmatrix}
    1 & 0 & 0 & \cdots & 0 \\
    -l_{21} & 1 & 0 & \cdots & 0 \\
    -l_{31} & 0 & 1 & \cdots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    -l_{n1} & 0 & 0 & \cdots & 1
\end{bmatrix}
$$

即 $P_n^{(1)} \dots P_2^{(1)} P_1^{(1)} A^{(1)} = P^{(1)} A^{(1)} = A^{(2)}$

第二次消元：$A^{(2)} \to A^{(3)}$

$$
P^{(2)} =
\begin{bmatrix}
    1 & 0 & 0 & \cdots & 0 \\
    0 & 1 & 0 & \cdots & 0 \\
    0 & -l_{32} & 1 & \cdots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & -l_{n2} & 0 & \cdots & 1
\end{bmatrix}
$$

以此类推，全部的初等矩阵相乘

$$
P^{(n-1)} \dots P^{(2)} P^{(1)} = 
\begin{bmatrix}
    1 & 0 & 0 & \cdots & 0 \\
    -l_{21} & 1 & 0 & \cdots & 0 \\
    -l_{31} & -l_{32} & 1 & \cdots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    -l_{n1} & -l_{n2} & -l_{n3} & \cdots & 1
\end{bmatrix}
\equiv P
$$

所以 $P$ 作用在 $A$ 上，可以得到上三角阵

$$
PA = 
\begin{bmatrix}
    * & * & * & \cdots & * \\
    0 & * & * & \cdots & * \\
    0 & 0 & * & \cdots & * \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \cdots & *
\end{bmatrix}
= U
$$

那么 $P^{-1}$ 是什么？$P^{-1} P = I$，即 $P^{-1}$ 将 $P$ 变换为单位阵。观察得到

$$
P^{-1} =
\begin{bmatrix}
    1 & 0 & 0 & \cdots & 0 \\
    l_{21} & 1 & 0 & \cdots & 0 \\
    l_{31} & l_{32} & 1 & \cdots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    l_{n1} & l_{n2} & l_{n3} & \cdots & 1
\end{bmatrix}
\equiv L
$$

所以

$$\boxed{\boldsymbol{A} = \boldsymbol{LU}}$$

此即 **{==Doolittle 分解==}**，或 **{==LU 分解==}**。求解方程组 $Ax = b$ 时，使用如下步骤：

1. 作LU分解 $A = LU$
2. $(LU)x = b \implies L(Ux) = b$，令 $y = Ux$，则 $Ly = b$. 求解出 $y$.
3. 求解 $Ux = y$, 得到解 $x$.

!!! tip "求 $A^{-1}$"
    实际应用中很少需要直接求出 $A^{-1}$ 是什么样的，而是关心 $A^{-1}$ 的“作用”，也就是求解 $A^{-1} v = w$，其中 $v$ 已知，$w$ 未知。

    这等价于 $A w = v$，也就是求解线性方程组！

### 选取主元的 LU 分解

选取列主元（Partial Pivoting）：

$$
PA = LU
$$

其中 $P$ 是置换矩阵。

全选主元（Global Pivoting）：

$$
PAQ = LU
$$

代价是搜索、交换更多次。

## 特殊矩阵的三角分解

### 三对角阵

$$
A = 
\begin{bmatrix}
    b_1 & c_1 & & & \\
    a_2 & b_2 & c_2 & & \\
    & \ddots & \ddots & \ddots & \\
    & & a_{n-1} & b_{n-1} & c_{n-1} \\
    & & & a_n & b_n
\end{bmatrix}
$$

即 $a_{i,i-1} x_{i-1} + a_{i,i} x_i + a_{i,i+1} x_{i+1} = b_i$，$x_i$ 只受相邻质点作用。

LU 分解：

$$
L = 
\begin{bmatrix}
    1 & & & & \\
    l_2 & 1 & & & \\
    & \ddots & \ddots & & \\
    & & l_{n-1} & 1 & \\
    & & & l_n & 1
\end{bmatrix}
$$

## Cholesky 分解

对称正定阵在实际问题中非常常见。

!!! note "定理2.4"
    存在唯一的下三角阵 $L$，使得 $A = LL^T$，且 $L$ 的对角线元素均为正数。

    ---

    $3\times 3$ 矩阵 check：

    $$
    A =
    \begin{bmatrix}
        a_{11} & a_{12} & a_{13} \\
        a_{12} & a_{22} & a_{23} \\
        a_{13} & a_{23} & a_{33}
    \end{bmatrix} =
    \begin{bmatrix}
        l_{11} & 0 & 0 \\
        l_{21} & l_{22} & 0 \\
        l_{31} & l_{32} & l_{33}
    \end{bmatrix}
    \begin{bmatrix}
        l_{11} & l_{21} & l_{31} \\
        0 & l_{22} & l_{32} \\
        0 & 0 & l_{33}
    \end{bmatrix} =
    \begin{bmatrix}
        l_{11}^2 & l_{11} l_{21} & l_{11} l_{31} \\
        l_{11} l_{21} & l_{21}^2 + l_{22}^2 & l_{21} l_{31} + l_{22} l_{32} \\
        l_{11} l_{31} & l_{21} l_{31} + l_{22} l_{32} & l_{31}^2 + l_{32}^2 + l_{33}^2
    \end{bmatrix}
    $$

一般地，

$$l_{kk} = \sqrt{a_{kk} - \sum_{i=1}^{k-1} l_{ki}^2}, \quad k = 1, 2, \cdots, n$$

$$l_{ik} = \frac{1}{l_{kk}} \left(a_{ik} - \sum_{j=1}^{k-1} l_{ij} l_{kj}\right), \quad i = k+1, k+2, \cdots, n$$

称为 **{==Cholesky 分解==}**。时间复杂度 $\mathcal{O}(n^3)$。

!!! warning ""
    要计算平方根，不实用！

### 改进的 Cholesky 分解

$$A = LDL^T$$

其中 $D$ 为对角阵，$L$ 为单位下三角阵。

$3\times 3$ 矩阵 check：

$$
A =
\begin{bmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{12} & a_{22} & a_{23} \\
    a_{13} & a_{23} & a_{33}
\end{bmatrix} =
\begin{bmatrix}
    1 & 0 & 0 \\
    l_{21} & 1 & 0 \\
    l_{31} & l_{32} & 1
\end{bmatrix}
\begin{bmatrix}
    d_1 & 0 & 0 \\
    0 & d_2 & 0 \\
    0 & 0 & d_3
\end{bmatrix}
\begin{bmatrix}
    1 & l_{21} & l_{31} \\
    0 & 1 & l_{32} \\
    0 & 0 & 1
\end{bmatrix} =
\begin{bmatrix}
    d_1 & d_1 l_{21} & d_1 l_{31} \\
    d_1 l_{21} & d_2 + d_1 l_{21}^2 & d_2 l_{32} + d_1 l_{21} l_{31} \\
    d_1 l_{31} & d_2 l_{32} + d_1 l_{21} l_{31} & d_3 + d_2 l_{32}^2 + d_1 l_{31}^2
\end{bmatrix}
$$

$$
\Longrightarrow
\left \{
\begin{array}{l}
d_1 = a_{11} \\
l_{21} = a_{12}/d_1 \\
l_{31} = a_{13}/d_1
\end{array},
\right.
\left \{
\begin{array}{l}
d_2 = a_{22} - l_{21}^2 d_1 \\
l_{32} = (a_{23} - d_1 l_{21} l_{31})/d_2 \\
\end{array},
\right.
d_3 = a_{33} - l_{31}^2 d_1 - l_{32}^2 d_2
$$

一般地，

$$
\begin{aligned}
d_k &= a_{kk} - l_{k1}^2 d_1 - l_{k2}^2 d_2 - \cdots - l_{k,k-1}^2 d_{k-1}, \\
&= a_{kk} - \sum_{j=1}^{k-1} l_{kj}^2 d_j, \quad k = 1, 2, \cdots, n \\
l_{ik} &= a_{ik} - l_{i1} d_1 l_{k1} - l_{i2} d_2 l_{k2} - \cdots - l_{i,k-1} d_{k-1} l_{k,k-1}, \\
&= a_{ik} - \sum_{j=1}^{k-1} l_{ij} d_j l_{kj}, \quad i = k+1, k+2, \cdots, n
\end{aligned}
$$

令 $l_{ij} d_j = u_{ij}$，则

$$
\left \{
\begin{aligned}
d_k &= a_{kk} - \sum_{j=1}^{k-1} u_{kj} l_{kj}, \quad k = 1, 2, \cdots, n \\
u_{ik} &= a_{ik} - \sum_{j=1}^{k-1} u_{ij} u_{kj}, \quad i = k+1, k+2, \cdots, n
\end{aligned}
\right.
$$

时间复杂度不变，但无需计算平方根。此为**改进的 Cholesky 分解**。
