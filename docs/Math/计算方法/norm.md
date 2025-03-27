# 范数

$\forall \vec{x} \in \mathbb{R}^n$，定义映射 $\mathbb{R}^n \to \mathbb{R}$，称为范数（norm）：
$$
\begin{aligned}
\|\vec{x}\|_p &= \left(\sum_{i=1}^{n} |x_i|^p\right)^{\frac{1}{p}}, \quad p \geq 1 \\
\|\vec{x}\|_\infty &= \max_{1 \leq i \leq n} |x_i| \\
\|\vec{x}\|_1 &= \sum_{i=1}^{n} |x_i| \\
\|\vec{x}\|_2 &= \sqrt{\sum_{i=1}^{n} |x_i|^2} \\
\end{aligned}
$$

- $\|\vec{x}\| \geq 0$，等号 iff $\vec{x} = \vec{0}$.
- $\|\alpha \cdot \vec{x}\| = |\alpha| \|\vec{x}\|$
- $\|\vec{x} + \vec{y}\| \leq \|\vec{x}\| + \|\vec{y}\|$（三角不等式）

!!! note "定义2.3"
    $\forall A \in \mathbb{R}^{n \times n}$，定义映射 $\mathbb{R}^n \to \mathbb{R}$，满足

    1. $\|A\| \geq 0$，等号 iff $A = 0$.
    2. $\forall \alpha \in \mathbb{R}$，有 $\|\alpha A\| = |\alpha| \cdot \|A\|$.
    3. $\forall A,B \in \mathbb{R}^{n \times n}$，有 $\|A + B\| \leq \|A\| + \|B\|$.
    4. $\|AB\| \leq \|A\| \cdot \|B\|$.
        - $\|A^n\| \leq \|A\|^n$.
        - $\|Ax\| \leq \|A\| \cdot \|x\|$.

    所以有 $\|A\| \geq \frac{\|Ax\|}{\|x\|}$.

    ***Define:***

    $$\|A\| := \max_{\vec{x} \neq \vec{0}} \frac{\|Ax\|}{\|\vec{x}\|}$$

!!! note "定理2.5"
    一定可以由一个向量范数诱导出一个唯一的矩阵范数。

    $$\frac{\|A\vec{x}\|}{\|\vec{x}\|} = \underset{=\alpha}{\boxed{\frac{1}{\|\vec{x}\|}}} \cdot \|Ax\| = \|A \frac{\vec{x}}{\|\vec{x}\|}\|$$

    注意到 $\vec{x}/\|\vec{x}\|$ 是单位向量，所以

    $$\|A\| := \max_{\|\vec{x}\| = 1} \|A \vec{x}\|$$

- 1-范数：$\displaystyle \|A\|_1 = \max_{\|x\|_1 = 1} \|Ax\|_1 = \max_{1 \leq j \leq n} \sum_{i=1}^{m} |a_{ij}|$
- $\infty$-范数：$\displaystyle \|A\|_\infty = \max_{\|x\|_\infty = 1} \|Ax\|_\infty = \max_{1 \leq i \leq m} \sum_{j=1}^{n} |a_{ij}|$
- 2-范数：$\displaystyle \|A\|_2 = \max_{\|\vec{x}\|_2 = 1} \|Ax\|_2 = \sqrt{\lambda_{\max}(A^T A)}$
- Frobenius 范数：$\displaystyle \|A\|_F = \sqrt{\sum_{i=1}^{m} \sum_{j=1}^{n} |a_{ij}|^2} = \sqrt{\mathrm{tr}(A^T A)}$（没有与之对应的向量范数！）

$Ax = b$，若 $b$ 有一扰动 $\delta b$，对应的有

$$
A\tilde{x} = b + \delta b
$$

其中 $\tilde{x} = x + \delta x$.

可以得到 $A\delta x = \delta b$，所以 $\delta x = A^{-1} \delta b$. 两侧加范数，

$$
\|\delta x\| = \|A^{-1} \delta b\| \leq \|A^{-1}\| \cdot \|\delta b\|
$$

另一方面，

$$
\|Ax\| \leq \|A\| \cdot \|x\| \implies \|x\| \geq \frac{\|Ax\|}{\|A\|} = \frac{\|b\|}{\|A\|}
$$

所以

$$
\underset{输出的相对误差}{\boxed{\frac{\|\delta x\|}{\|x\|}}} \leq \frac{\|A^{-1}\| \cdot \|\delta b\|}{\frac{\|b\|}{\|A\|}} = \|A\| \cdot \|A^{-1}\| \underset{输入的相对误差}{\boxed{\frac{\|\delta b\|}{\|b\|}}}$$

定义：

$$\text{cond}(A) = \|A\| \cdot \|A^{-1}\|$$

称为条件数（condition number），反映了 $A$ 的病态程度。

- $\text{cond}(A) = 1$，$A$ 是良态矩阵（well-conditioned matrix）
- $\text{cond}(A) \to \infty$，$A$ 是病态矩阵（ill-conditioned matrix）

!!! example "Hilbert 矩阵"
    $$H_{ij} = \frac{1}{i + j - 1}$$
    
    > MATLAB:
    > ```matlab
    > hilb(n)
    > ```

    经典的病态矩阵！

## 2.4.3 超定

超定方程组：$Ax = b, A \in \mathbb{R}^{m \times n}, m \gg n$

!!! tip "线性最小二乘拟合"

$Ax = b$，同乘 $A^T$，得到

$$A^T Ax = A^T b$$

**广义逆**：$(A^T A)^{-1} A^T$