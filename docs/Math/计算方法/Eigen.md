# 矩阵特征值和特征向量

!!! quote "特征值问题"
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
x_0 = \sum_{i=1}^{n} \alpha_i \boldsymbol{u}_i
$$

$\boldsymbol{u}_i$ 是 $\lambda_i$ 对应的特征向量。

那么

$$
A x_0 = \sum_{i=1}^{n} \alpha_i \underline{A \boldsymbol{u}_i} = \sum_{i=1}^{n} \alpha_i \lambda_i \boldsymbol{u}_i
$$

经过多次迭代，

$$
\begin{aligned}
    x_{k+1} = A x_k &= A^{k+1} x_0 \\
    &= A^{k+1} \sum_{i=1}^{n} \alpha_i \boldsymbol{u}_i \\
    &= \sum_{i=1}^{n} \alpha_i \lambda_i^{k+1} \boldsymbol{u}_i \\
    &= \lambda_1^{k+1} \left(\alpha_1 \boldsymbol{u}_1 + \sum_{i=2}^{n} \alpha_i \left(\frac{\lambda_i}{\lambda_1}\right)^{k+1} \boldsymbol{u}_i\right) \\
    &\overset{k \to \infty}{\approx} \lambda_1^{k+1} \alpha_1 \boldsymbol{u}_1
\end{aligned}
$$

!!! question "是否收敛？"
    $$
    \|x_{k+1}\| \to |\lambda_1|^{k+1} \cdot |\alpha_1| \cdot \|\boldsymbol{u}_1\|
    $$

    每次都手动将 $x_k$ 单位化

    $$
    \vec{y}_k = \frac{x_k}{\|x_k\|_{\infty}} = \frac{x_k}{\max\limits_{1 \leq i \leq n} |x_i^{(k)}|}
    $$

    范数丢掉了符号信息！

```matlab
N = 9;
A = rand(N);
x = rand(N, 1) + rand(N, 1) * j; % 复向量

max_iter = 1000;
tol = 1e-12;
err = 1.0;

[lambda, i] = max(norm(x));
lambda = x(i);

iter = 0;
while (err > tol && iter < max_iter)
    
end
```

!!! note "Remarks"
    注 1：$x_0 = \boldsymbol{u}_i$，$i = \{2,3,\ldots,n\}$，就得不到 $\lambda_1$ 了！

    注 2：$x_0$ 恰好与 $\boldsymbol{u}_1$ 正交。$\alpha_1 = 0$，也得不到 $\lambda_1$。

    但实际上都是小概率事件，不用考虑![](../../images/tieba/hehe.png)

## 反幂法

$$
|\lambda_1| > |\lambda_2| > \cdots > |\lambda_n|
$$

如何求最小的特征值 $\lambda_n$？

原点位移的反幂法

## Jacobi 方法

若 $A$ spd.，则存在正交阵 $Q$，使得

$$
Q^T A Q = \text{diag}(\lambda_1, \lambda_2, \cdots, \lambda_n)
$$

如何找到 $Q$？

待定 $Q = G(1,2,\varphi) = \begin{bmatrix}
    \cos \varphi & \sin \varphi \\
    -\sin \varphi & \cos \varphi
\end{bmatrix}$，

$$
\begin{aligned}
Q^T A Q &=
\begin{bmatrix}
    \cos \varphi & -\sin \varphi \\
    \sin \varphi & \cos \varphi
\end{bmatrix}
\begin{bmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
    \cos \varphi & \sin \varphi \\
    -\sin \varphi & \cos \varphi
\end{bmatrix} \\
&=
\end{aligned}
$$

得到

$$
\frac{\sin 2\varphi}{2} (a_{11} - a_{22}) + \frac{\cos 2\varphi}{2} a_{12} = 0
$$

即

$$
\tan 2\varphi = \frac{2 a_{12}}{a_{22} - a_{11}}
$$

记 $\cot 2\varphi = a, \tan \varphi = b$，

$$
\cot 2\varphi = \frac{1 - \tan^2 \varphi}{2 \tan \varphi} = \frac{1 - b^2}{2b} \implies b = -a \pm \sqrt{a^2 + 1}
$$

$Q^T \begin{bmatrix}
    a_{pp}^{(k)} & a_{pq}^{(k)} \\
    a_{pq}^{(k)} & a_{qq}^{(k)}
\end{bmatrix} Q = \begin{bmatrix}
    * & 0 \\
    0 & *
\end{bmatrix}$


## QR 方法

若存在一个矩阵 $P$，使得

$$
B = P A P^{-1}
$$

则称矩阵 $A$ 和 $B$ 相似。$A$ 和 $B$ 有相同的特征值。

如果是正交阵 $Q$，

1. $Q^T = Q^{-1}$
2. $\|Q\|_2 = 1$
3. $\langle Q\vec{x}, Q\vec{y}\rangle = \langle \vec{x}, \vec{y}\rangle$
4. 由 3，$\|Q\vec{x}\|_2 = \|\vec{x}\|_2$

### 正交变换

#### 旋转

Givens 旋转矩阵

$$
G(i,j,\theta) =
\begin{bmatrix}
    1 & 0 & 0 & \cdots & 0 & 0 \\
    0 & 1 & 0 & \cdots & 0 & 0 \\

\end{bmatrix}
$$

#### 反射

“照镜子”：

$$
\vec{y} = H \vec{x}, \quad \vec{x} = H \vec{y}\\
\implies H^2 \vec{x} = \vec{x}, \, \text{i.e.} \, H^2 = I
$$

Householder 变换

法线方向 $\vec{w}$

$$
H = I - 2 \vec{w} \vec{w}^T
$$

## QR 方法（终极）

$A \in \mathbb{C}^{n \times n}$ 是任意非奇异矩阵，

- QR 算法：

$$
\begin{aligned}
A^{(1)} &= A, \\
A^{(k)} &= Q_k R_k, \\
A^{(k+1)} &= R_k Q_k
\end{aligned}
$$

- QR 分解：$Q$ 是正交阵，$R$ 是上三角阵。

如此反复，$A^{(k)}$ 收敛到上三角阵 $R$（一个研究生阶段的定理）。

$Q_k$ 是正交阵，故 $A^{(k)}$ 和 $A^{(k+1)}$ 相似。

怎么得到 $Q_k$？

> Schmidt 正交化？太慢！

使用正交初等变换 Householder 变换！

$$
A = \begin{bmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
\end{bmatrix}
\overset{\mathcal{H}}{\longrightarrow}
\begin{bmatrix}
    * & * & * \\
    0 & * & * \\
    0 & 0 & *
\end{bmatrix}
$$

第一次变换：

$$
A = \begin{bmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
\end{bmatrix}
\overset{\mathcal{H}_1}{\longrightarrow}
\begin{bmatrix}
    * &  &  \\
    0 &  &  \\
    0 &  & 
\end{bmatrix}
$$

$\vec{x}$ 是 $A$ 的第一列，欲将其改造成只有一个非零元素的向量 $\vec{y}$。

“镜子”的法向：

$$
\vec{w} = \frac{\vec{y} - \vec{x}}{\|\vec{y} - \vec{x}\|}
$$

Householder 变换：

$$
H_1 = I - 2 \vec{w} \vec{w}^T
$$

$$
H_1 A = \begin{bmatrix}
    * &  &  \\
    0 &  &  \\
    0 &  &
\end{bmatrix}
$$

第二次变换：

$\vec{x} = (a_{22},a_{32})^T$，欲将其改造成 $\vec{y} = (a_{22},0)^T$。

$$
H_2 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & \tilde{H}_2 &  \\
    0 & & \\
\end{bmatrix},
\tilde{H}_2 = I - 2 \vec{w} \vec{w}^T
$$

- QR 分解：$\mathcal{O}(n^3)$
    - 每次构造 $H$：$\mathcal{O}(n^2)$
- QR 算法：$\mathcal{O}(n^4)$

改进：

求 $Q$，使得

$$
Q^T A Q = H
$$

其中 $H$ 是**上 Hessenberg[^1] 矩阵**（下副对角线以下都为0）。由于 $A$ 与 $H$ 相似，只须求 $H$ 的特征值。

[^1]: 不是量子力学的那个 Heisenberg！

之后再用 $n-1$ 次 Givens 变换，将上 Hessenberg 矩阵变成上三角矩阵 $R$。

$$

$$