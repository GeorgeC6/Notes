# 经典数值计算

## 数据插值

计算机处理离散化的数据，连续化之后便于人理解。

### 数学表述

$f(x)$ 定义在 $[a, b]$ 上，$(x_0,y_0), (x_1,y_1), \cdots, (x_n,y_n)$ 是该区间上 $n+1$ 个不同的点。找到一个性质稳定、便于计算的函数类 $\Phi$ 中的简单函数 $P(x)$，使得

$$P(x_i) = y_i, \quad i = 0, 1, \cdots, n$$

则称 $P(x)$ 是 $f(x)$ 在 $[a, b]$ 上的插值函数。

先考虑多项式插值。

### 多项式插值

$$P_n(x) = a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n$$

插值条件：

$$
\left\{
\begin{aligned}
a_0 + a_1 x_0 + a_2 x_0^2 + \cdots + a_n x_0^n &= y_0 \\
a_0 + a_1 x_1 + a_2 x_1^2 + \cdots + a_n x_1^n &= y_1 \\
&\cdots \\
a_0 + a_1 x_n + a_2 x_n^2 + \cdots + a_n x_n^n &= y_n
\end{aligned}
\right.
$$

写成矩阵形式：

$$
\begin{bmatrix}
y_0 \\
y_1 \\
\vdots \\
y_n
\end{bmatrix} = 
\begin{bmatrix}
1 & x_0 & x_0^2 & \cdots & x_0^n \\
1 & x_1 & x_1^2 & \cdots & x_1^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_n & x_n^2 & \cdots & x_n^n
\end{bmatrix}
\begin{bmatrix}
a_0 \\
a_1 \\
\vdots \\
a_n
\end{bmatrix}
$$

可以发现系数矩阵就是 Vandermonde 矩阵。

$$|V| = 
\begin{vmatrix}
1 & x_0 & x_0^2 & \cdots & x_0^n \\
1 & x_1 & x_1^2 & \cdots & x_1^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_n & x_n^2 & \cdots & x_n^n
\end{vmatrix} = 
\prod_{0 \leq i < j \leq n} (x_j - x_i) \neq 0
$$

!!! note "定理"
    对于 $n+1$ 个互不相同的插值节点，满足插值条件的 $n$ 次多项式**存在且唯一**。

理论上可以通过求解 Vandermonde 矩阵的逆来得到插值多项式的系数，但是 $n$ 很大时计算量极大。由于唯一性，可以构造相对简单的形式。

#### 线性插值

先考虑两个点 $(x_0, y_0), (x_1, y_1)$，插值条件为

$$
\left\{
\begin{aligned}
a_0 + a_1 x_0 &= y_0 \\
a_0 + a_1 x_1 &= y_1
\end{aligned}
\right.
$$

可以得到

$$
\begin{aligned}
P_1(x) &= a_0 + a_1 x \\
&= \frac{x - x_1}{x_0 - x_1} y_0 + \frac{x - x_0}{x_1 - x_0} y_1
\end{aligned}
$$

记 $l_0(x) = \frac{x - x_1}{x_0 - x_1}, l_1(x) = \frac{x - x_0}{x_1 - x_0}$，则 $P_1(x) = l_0(x) y_0 + l_1(x) y_1$。我们称 $l_0(x), l_1(x)$ 为线性插值的{++基函数++}。

可以发现 $l_0(x), l_1(x)$ 是一阶多项式，且满足

$$
l_0(x) = 
\begin{cases}
1, & x = x_0 \\
0, & x = x_1
\end{cases}, \quad
l_1(x) =
\begin{cases}
0, & x = x_0 \\
1, & x = x_1
\end{cases}.
$$

#### 拉格朗日插值

设法给出 $n+1$ 个点情形下的插值基函数以及相应的误差限。

##### 插值基函数

构造一系列基函数 $l_k(x)$，满足

$$
l_k(x_i) =
\begin{cases}
1, & i = k \\
0, & i \neq k
\end{cases}
$$

这样通过线性组合 $P_n(x) = \sum_{k=0}^{n} l_k(x) \cdot y_k$ 就可以得到插值多项式。

$l_k(x)$ 为 $n$ 次多项式，同时在 $n+1$ 个节点 $x_0, x_1, \cdots, x_n$ 中有除 $x_k$ 之外的 $n$ 个根。为了满足这点，可以构造 $\prod_{i \neq k}^{n} (x - x_i)$。又考虑到归一化，再除以一个分母，这个分母就是分子代入 $x = x_k$ 后的值 $\prod_{i \neq k}^{n} (x_k - x_i)$。展开来就是

$$
l_k(x) = \frac{(x - x_0)(x - x_1) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0)(x_k - x_1) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)}, \quad k = 0, 1, \cdots, n
$$

于是我们得到了拉格朗日形式的多项式插值函数

$$P_n(x) = \sum_{k=0}^{n} l_k(x) \cdot y_k$$

##### 误差限

!!! note "定理"
    设 $f(x)$ 一阶连续可导，且二阶导在开区间上存在，那么对 $\forall x \in [a, b], \, \exists \xi \in [a, b]$，使得

    $$R(x) = f(x) - P_1(x) = \frac{f''(\xi)}{2} (x - x_0)(x - x_1).$$

    ---

    ***Proof.***

    将 $R(x)$ 表示为零点式： $R(x) = f(x) - P_1(x) = k(x)(x - x_0)(x - x_1)$
    
    构造辅助函数 $\phi(t) = f(t) - P_1(t) - k(x)(t - x_0)(t - x_1)$，则 $\phi(t)$ 有三个零点 $x_0, x_1, x$。由 Rolle 定理，$\exists \xi_1 \in (x_0, x), \xi_2 \in (x, x_1)$，使得 $\phi'(\xi_1) = \phi'(\xi_2) = 0$。再次应用 Rolle 定理，$\exists \xi \in (\xi_1, \xi_2)$，使得 $\phi''(\xi) = 0$。


推广到 $n$ 次插值多项式 $P_n(x)$，记截断误差为

$$R_n(x) = f(x) - P_n(x)$$

假设 $f(x)$ 在区间 $[a, b]$ 上 $n+1$ 次连续可导，那么对 $\forall x \in [a, b], \, \exists \xi \in [a, b]$，使得

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{k=0}^{n} (x - x_k)$$

数据点的个数 $n$ 越大，$(x - x_k)$ 越小，插值的精度越高。

然而，真实的 $f(x)$ 未知，所以 $f^{(n+1)}(\xi)$ 也难以估计。


#### 牛顿插值

拉格朗日插值的问题在于每增加一个数据点，都需要重新计算所有的基函数。牛顿插值则没有这个问题。

一个 $n$ 次多项式可以写成

$$N_n(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \cdots + a_n(x - x_0)(x - x_1) \cdots (x - x_{n-1})$$

可以认为此时 $a_k$ 对应的基函数是 $k$ 阶多项式 $\prod_{i=0}^{k-1} (x - x_i)$。增加数据点后，原先的基函数不变。

### 三次样条插值

!!! tip "三次样条插值函数"
    三次样条函数 $S(x)$ 具有连续二阶导数，且满足
    - $S(x_k) = y_k, \quad k = 0, 1, \cdots, n$
    - $S(x)$ 在每个区间 $[x_k, x_{k+1}]$ 上次数不超过三次
    - $S(x), S'(x), S''(x)$ 在 $[a, b]$ 上连续

## 数据拟合

!!! quote "插值方法的局限性"
    - 当数据点数目较多时，插值函数的计算复杂度快速上升，同时插值效果也变差
    - 实际的数据点集都是有误差/噪声的，真实函数 $f(x)$ 不一定刚好通过这些点
    - 有时单一函数不足以描述数据的特征

找到一个逼近函数 $\phi(x)$，使得 $\phi(x_i)$ 尽量靠近 $y_i$。“靠近”有多种定义方式

$$||\phi(x_i) - y_i|| \leq \varepsilon$$

## 数值微分

## 数值积分

- 可以解析求解的问题：

  $$\int_{a}^{b} f(x) dx = F(b) - F(a)$$

- 若：
    - $F$ 难以求解/无法用初等函数表示
    - $f$ 本身是离散的
    则需要数值积分的方法

### 拉格朗日插值的数值积分

