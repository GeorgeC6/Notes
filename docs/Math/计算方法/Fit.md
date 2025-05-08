# 函数逼近（曲线拟合）

| $i$ | 1 | 2 | 3 | 4 | $\ldots$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $x_i$ | $2$ | $4$ | $6$ | $8$ | $\ldots$ |
| $f(x_i)$ | $1.1$ | $2.8$ | $4.9$ | $7.2$ | $\ldots$ |

> 数据点也有误差，数据量一大让函数精确地过所有的点也是代价很大的，插值显得不合理。
>
> 希望找到一个“最近”的函数来逼近这些点。
>
> 什么是“最近”？

假设逼近函数 $y(x)$ 是一个线性函数 $y(x) = a_1 x + a_0$，$a_0, a_1$ 是未知参数。则误差为

$$
\delta_i = y(x_i) - y_i = a_1 x_i + a_2 - y_i, \quad i = 1, 2, \ldots, n
$$

实际上 $\delta$ 是一个向量。求 $\min \|\vec{\delta}\|$

1. 1-范数：$\min \|\vec{\delta}\|_1 = \min \sum\limits_{i=1}^n |\delta_i|$
2. 2-范数：$\min \|\vec{\delta}\|_2 = \min \sqrt{\sum\limits_{i=1}^n \delta_i^2}$
3. $\infty$-范数：$\min \|\vec{\delta}\|_\infty = \min \max_i |\delta_i|$

用微积分的方法处理，使用 2-范数。

## 6.1 最小二乘法

已知数据 $(x_i, y_i), \, i = 1, 2, \ldots, n$，根据经验，$y(x)$ 应当是函数空间 $\Phi$ 的一个函数（$\Phi$ 可以是线性函数、多项式函数、三角函数等），已知 $\phi_j(x), \, j = 1, 2, \ldots, m$ 是 $\Phi$ 的一组基函数，要使

$$
\varphi(x) = \sum_{j=1}^m a_j \phi_j(x)
$$

是 $y(x)$ 的最佳平方逼近，即

$$
\begin{aligned}
&\min \sum_{i=1}^n \left[y_i - \varphi(x_i)\right]^2 \\
= &\min \sum_{i=1}^n \left[y_i - \sum_{j=1}^m a_j \phi_j(x_i)\right]^2 \\
\implies &\frac{\partial}{\partial a_j} \sum_{i=1}^n \left[y_i - \sum_{j=1}^m a_j \phi_j(x_i)\right]^2 = 0, \quad j = 1, 2, \ldots, m
\end{aligned}
$$

- 数据个数：$n$
- 未知参数 $a_j$ 个数：$m$

> 如果 $n = m$，就变成插值了！

现在的情况：$n \gg m$

!!! example "例 1：线性拟合"
    线性函数，$4$ 个数据点。$y \in \text{span}\{1, x\}$，$m = 2$，$n = 4$。

    $$
    \begin{aligned}
        & \min \sum_{i=1}^4 \left[y_i - (a_1 x_i + a_0)\right]^2 \\
        \implies & \left \{
            \begin{aligned}
                \frac{\partial}{\partial a_0} \sum_{i=1}^4 \left[y_i - (a_1 x_i + a_0)\right]^2 &= 0 \\
                \frac{\partial}{\partial a_1} \sum_{i=1}^4 \left[y_i - (a_1 x_i + a_0)\right]^2 &= 0
            \end{aligned}
        \right. \\
        \implies & \left \{
            \begin{aligned}
                \sum_{i=1}^4 \left[y_i - (a_1 x_i + a_0)\right] &= 0 \\
                \sum_{i=1}^4 x_i \left[y_i - (a_1 x_i + a_0)\right] &= 0
            \end{aligned}
        \right. \\
    \end{aligned}
    $$

    代入数据点即可求得 $a_0, a_1$。

!!! example "例 2：多项式拟合"
    $\Phi = \mathbb{P}_m = \text{span}\{1, x, x^2, \ldots, x^m\}$

    $$
    \varphi(x) = a_m x^m + a_{m-1} x^{m-1} + \ldots + a_1 x + a_0 = \sum_{j=0}^m a_j \phi_j(x)
    $$

    求

    $$
    \begin{aligned}
        \frac{\partial}{\partial a_j} & \sum_{i=1}^n \left[y_i - \sum_{j=0}^m a_j \phi_j(x_i)\right]^2 = 0, \quad j = 0, 1, \ldots, m \\
        \implies &\sum_{i=1}^n 2\left[y_i - \sum_{k=0}^m a_k x_i^k\right] \cdot \left(-x_i^j \right) = 0 \\
        \implies &\sum_{k=0}^m \left(\sum_{i=1}^n x_i^{j + k} \right) a_k = \sum_{i=1}^n y_i x_i^j, \quad j = 0, 1, \ldots, m. 
    \end{aligned}
    $$

    矩阵形式：

    $$
    \begin{bmatrix}
        \displaystyle\sum_{i=1}^n 1 & \displaystyle\sum_{i=1}^n x_i & \ldots & \displaystyle\sum_{i=1}^n x_i^m \\[3ex]
        \displaystyle\sum_{i=1}^n x_i & \displaystyle\sum_{i=1}^n x_i^2 & \ldots & \displaystyle\sum_{i=1}^n x_i^{m + 1} \\[3ex]
        \vdots & \vdots & \ddots & \vdots \\[1ex]
        \displaystyle\sum_{i=1}^n x_i^m & \displaystyle\sum_{i=1}^n x_i^{m + 1} & \ldots & \displaystyle\sum_{i=1}^n x_i^{2m}
    \end{bmatrix}
    \begin{bmatrix}
        a_0 \\[6ex]
        a_1 \\[3ex]
        \vdots \\[4ex]
        a_k
    \end{bmatrix} = 
    $$





## 6.3 函数的最佳平方逼近

函数空间：$\Phi = \text{span}\{\phi_0(x), \phi_1(x), \ldots, \phi_m(x)\}$. 有一个目标函数 $f(x)$，且 $f(x) \notin \Phi$。现在要用 $\Phi$ 中的函数尽可能地逼近 $f(x)$。

$$
d(\vec{x}, \vec{y}) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2} = \|\vec{x} - \vec{y}\|_2 = \sqrt{\left\langle \vec{x} - \vec{y}, \vec{x} - \vec{y}\right\rangle}
$$

在指定区间 $[a, b]$ 上有两个函数 $f$ 和 $g$，定义它们的内积

$$
\langle f, g \rangle = \int_a^b f(x) g(x) \, \mathrm{d}x
$$

于是定义两个函数的“距离”

$$
\begin{aligned}
    d(f, g) &= \sqrt{\langle f - g, f - g \rangle} \\
    \iff d^2(f, g) &= \langle f - g, f - g \rangle  = \int_a^b \left[f(x) - g(x)\right]^2 \, \mathrm{d}x
\end{aligned}
$$

在 $\Phi = \text{span}\{\phi_0(x), \phi_1(x), \ldots, \phi_m(x)\}$ 中找一个函数

$$
\varphi(x) = \sum_{j=0}^m a_j \phi_j(x)
$$

和 $f$ 的距离最近。$f$ 不在 $\Phi$ 空间中，（假想平面外一点到平面的最短距离）要使 $\varphi$ 与 $f$ 的距离最小，应有 $f - \varphi \perp \Phi$。与一个空间正交，就要与该空间的所有基正交。

$$
\begin{aligned}
    f - \varphi \perp \Phi \implies & \langle f - \varphi, \phi_j \rangle = 0 \\
    \implies & \langle f, \phi_j \rangle - \langle \varphi, \phi_j \rangle = 0 \\
    \implies & \langle f, \phi_j \rangle - \sum_{i=0}^m
\end{aligned}
$$