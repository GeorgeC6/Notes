# 矩阵特征值和特征向量

!!! quote ""
    $$
    \begin{aligned}
        A\vec{v} &= \lambda \vec{v} \\
        |A - \lambda I| &= 0
    \end{aligned}
    $$

    求解行列式的代价很大！

## 幂法

**假设 $A$ 的特征值满足 $\lambda_1 > \lambda_2 > \cdots > \lambda_n$**，找 $x_0 \neq 0$，

用特征向量表示 $x_0$

$$
x_0 = \sum_{i=1}^{n} \alpha_i u_i
$$

$u_i$ 是 $\lambda_i$ 对应的特征向量。

那么

$$
A x_0 = \sum_{i=1}^{n} \alpha_i \underline{A u_i} = \sum_{i=1}^{n} \alpha_i \lambda_i u_i
$$

经过多次迭代，

$$
\begin{aligned}
    x_{k+1} = A x_k &= A^{k+1} x_0 \\
    &= A^{k+1} \sum_{i=1}^{n} \alpha_i u_i \\
    &= \sum_{i=1}^{n} \alpha_i \lambda_i^{k+1} u_i \\
    &= \lambda_1^{k+1} \left(\alpha_1 u_1 + \sum_{i=2}^{n} \alpha_i \left(\frac{\lambda_i}{\lambda_1}\right)^{k+1} u_i\right) \\
    &\overset{k \to \infty}{\approx} \lambda_1^{k+1} \alpha_1 u_1
\end{aligned}
$$

故得到

$$
\lambda_1 \approx \frac{x_i^{(k+1)}}{x_i^{(k)}}
$$