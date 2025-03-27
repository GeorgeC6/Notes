# 线性方程组的迭代解法

!!! example ""
    - 桥梁的计算
    - 流体

$$Ax = b$$

$A$ 为大型稀疏矩阵，$A$ 中非零元个数是 $\mathcal{O}(n)$，$n \gg 10^5$。

!!! warning "无法对 $A$ 做："
    - 不能把 $A$ 当满阵存储
    - 不能对 $A$ 做遍历

    时间和空间的复杂度都是 $\mathcal{O}(n^2)$。

## Jacobi 迭代法

$$
\left \{
\begin{aligned}
    a_{11} x_1 + a_{12} x_2 + a_{13} x_3 &= b_1 \\
    a_{21} x_1 + a_{22} x_2 + a_{23} x_3 &= b_2 \\
    a_{31} x_1 + a_{32} x_2 + a_{33} x_3 &= b_3
\end{aligned}
\right.
$$

$$
\implies
\left \{
\begin{aligned} \tag{1}
    x_1^{(k+1)} &= \frac{b_1 - a_{12} x_2^{(k)} - a_{13} x_3^{(k)}}{a_{11}} \\
    x_2^{(k+1)} &= \frac{b_2 - a_{21} x_1^{(k)} - a_{23} x_3^{(k)}}{a_{22}} \\
    x_3^{(k+1)} &= \frac{b_3 - a_{31} x_1^{(k)} - a_{32} x_2^{(k)}}{a_{33}}
\end{aligned},
\right.
x^{(0)} = \left(x_1^{(0)}, x_2^{(0)}, x_3^{(0)}\right), k = 0, 1, 2, \ldots
$$

一旦提供了 $x^{(0)}$，就可以通过迭代得到 $x^{(1)}, x^{(2)}, \ldots$ 的向量序列。若 $k \to \infty$ 时，$x^{(k)}$ 收敛到 $x^{*}$。$x^{*}$ 是 $Ax = b$ 的解吗？

$$ 
\begin{bmatrix}
0 & a_{12} & a_{13} \\
a_{21} & 0 & a_{23} \\
a_{31} & a_{32} & 0
\end{bmatrix} = A - D, \quad D = \text{diag}(a_{11}, a_{22}, a_{33})
$$

迭代法的矩阵形式即为：

$$\left[b - (A - D)x^{(k)}\right] \cdot D^{-1} = x^{(k+1)}$$

$$
\begin{equation} \tag{2}
x^{(k+1)} = \left(I - D^{-1}A\right) x^{(k)} + D^{-1}b
\end{equation}
$$

记 $B = I - D^{-1}A$，$g = D^{-1}b$，则上述迭代化为

$$
\begin{equation} \tag{3}
x^{(k+1)} = Bx^{(k)} + g
\end{equation}
$$

此即为 **{==Jacobi 迭代法==}**。

!!! question 何时有：

    $$\lim_{k \to \infty} x^{(k)} = x^{*}, \quad Ax^{*} = b$$

    等价于

    $$
    \begin{equation} \tag{4}
    \lim_{k \to \infty} \|x^{(k)} - x^{*}\| = 0
    \end{equation}
    $$

对于 $Ax^{*} = b$，有不动点方程

$$
\begin{aligned}
x^{*} &= Bx^{*} + g \\
&= (I - D^{-1}A)x^{*} + D^{-1}b \\
&= x^{*} - D^{-1}Ax^{*} + D^{-1}b \\
&= x^{*} - D^{-1}(Ax^{*} - b) \\
&= x^{*}
\end{aligned}
$$

$$
\left \{
\begin{aligned}
x^{(k+1)} &= Bx^{(k)} + g \\
x^{*} &= Bx^{*} + g
\end{aligned}
\right.
$$

两式相减

$$
\begin{aligned}
\left(x^{(k+1)} - x^{*}\right) &= B\left(x^{(k)} - x^{*}\right) \\
&= B^{k+1} \left(x^{(0)} - x^{*}\right)
\end{aligned}
$$


!!! tip ""
    一般地，

## Gauss-Seidel 迭代法

有新的值，就用新的值！

$$
\left \{
\begin{aligned} \tag{5}
x_1^{(k+1)} &= \frac{b_1 - a_{12} x_2^{(k)} - a_{13} x_3^{(k)}}{a_{11}} \\
x_2^{(k+1)} &= \frac{b_2 - a_{21} x_1^{\textcolor{red}{(k+1)}} - a_{23} x_3^{(k)}}{a_{22}} \\
x_3^{(k+1)} &= \frac{b_3 - a_{31} x_1^{\textcolor{red}{(k+1)}} - a_{32} x_2^{\textcolor{red}{(k+1)}}}{a_{33}}
\end{aligned}
\right.
$$

可以发现，新的值（红色）都在下三角 $L$，旧的值都在上三角 $U$。

将 $A$ 表示为

$$A = D - L - U, \quad D = \text{diag}(a_{11}, a_{22}, a_{33})$$

$$
L = 
\begin{bmatrix}
0 & & & & \\
-a_{21} & 0 & & & \\
-a_{31} & -a_{32} & 0 & & \\
\vdots & \vdots & & \ddots & \\
-a_{n1} & -a_{n2} & \ldots & -a_{n,n-1} & 0
\end{bmatrix},\,
U =
\begin{bmatrix}
0 & -a_{12} & -a_{13} & \ldots & -a_{1n} \\
& 0 & -a_{23} & \ldots & -a_{2n} \\
& & \ddots & & \vdots \\
& & & 0 & -a_{n-1,n} \\
& & & & 0
\end{bmatrix}
$$

迭代公式 \eqref{5} 可以写成

$$x^{(k+1)} = D^{-1}Lx^{(k+1)} + D^{-1}Ux^{(k)} + D^{-1}b$$

## SOR 迭代法

Successive Over Relaxation，松弛






---

!!! tip "Last words"
    实际工程应用中，以上三种方法都不会（直接）使用 ![](../../images/tieba/hehe.png)。