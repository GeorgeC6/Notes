# 第三章 形式理论

$$
\text{具体的例子} \to \text{抽象的总结规律} \to \text{逻辑体系和框架}
$$

量子力学建立在两个概念基础上：

- 体系的状态（state）用波函数表示 $\to$ 满足抽象矢量（vector）定义
- 可观察量（observable）用算符表示 $\to$ 作为线性变换（linear transformation）作用于矢量

因此量子力学的自然语言就是线性代数（linear algebra）。

## 3.1 数学基础

### 线性代数

- 线性映射：满足

$$
\begin{align}
    T(\vec{a} + \vec{b}) = T\vec{a} + T\vec{b} \tag{可加性}\\
    T(k \vec{a}) = k T\vec{a} \tag{比例性}
\end{align}
$$

- 线性变换：数域 $\mathbb{F}$ 上线性空间 $V$ 到线性空间 $W$ 的映射 $T: V \mapsto W$，如果对任意 $\vec{a}, \vec{b} \in V$ 和 $k \in \mathbb{F}$ 都满足上面两个条件，则称 $T$ 为线性变换。

### 希尔伯特空间

所有 $x$ 的函数的集合构成了一个矢量空间（vector space）。而我们将要考虑的是，在特定区间内平方可积（square-integrable）的函数的集合，数学家记为 $L^2(a,b)$ 空间，物理学家称之为**希尔伯特空间（Hilbert space）**。{++波函数存在于 Hilbert 空间中。++}

-   内积（inner product）
    $$
    \braket{f|g} \equiv \int_a^b f^*(x) g(x) \, \mathrm{d}x
    $$
    - 归一化
      $$
      \braket{\psi|\psi} = 1
      $$
    - 正交
      $$
      \braket{\psi_m|\psi_n} = \delta_{mn}
      $$
-   函数集
    正交归一化的函数集 $\{f_n(x)\}$ 满足
    $$
    f(x) = \sum_n c_n f_n(x),\quad c_n = \braket{f_n|f}
    $$
    - 完备性
      任何函数都能用函数集线性表示，则该函数集是完备的。

### 矢量空间（附录 A1）

矢量空间（vector space）是一组矢量（vectors）$(\ket{\alpha}, \ket{\beta}, \ket{\gamma}, \ldots)$，加上一组标量（scalars）$a, b, c, \ldots$ 组成。

-   矢量相加
    - 对加法封闭
      $$
      \ket{\alpha} + \ket{\beta} = \ket{\gamma}
      $$
    - 满足交换律（commutative）
      $$
      \ket{\alpha} + \ket{\beta} = \ket{\beta} + \ket{\alpha}
      $$
    - 满足结合律（associative）
      $$
      \ket{\alpha} + (\ket{\beta} + \ket{\gamma}) = (\ket{\alpha} + \ket{\beta}) + \ket{\gamma}
      $$
    - 存在零矢量（zero/null vector）$\ket{0}$，使得
      $$
      \ket{\alpha} + \ket{0} = \ket{\alpha}
      $$
    - 每个矢量都有一个逆矢量（inverse vector）$-\ket{\alpha}$，使得
      $$
      \ket{\alpha} + -\ket{\alpha} = \ket{0}
      $$
-   标量相乘
    - 对乘法封闭
      $$
      a \ket{\alpha} = \ket{\beta}
      $$
    - 标量相乘的分配率（distributive）
      $$
      a(\ket{\alpha} + \ket{\beta}) = a\ket{\alpha} + a\ket{\beta}
      $$
    - 标量相加的分配率
      $$
      (a + b)\ket{\alpha} = a\ket{\alpha} + b\ket{\alpha}
      $$
    - 标量积的结合律
      $$
      a(b\ket{\alpha}) = (ab)\ket{\alpha}
      $$
    - $0 \ket{\alpha} = \ket{0}, 1 \ket{\alpha} = \ket{\alpha}, \ket{-\alpha} = -\ket{\alpha}$

### 内积空间（附录 A.2）

设 $\ket{\alpha} = a_1 \ket{e_1} + a_2 \ket{e_2} + \ldots + a_n \ket{e_n}, \, a_n \in \mathbb{C}$，则 $\ket{\alpha}$ 的共轭转置（conjugate transpose）定义为

$$
\bra{\alpha} = a_1^* \bra{e_1} + a_2^* \bra{e_2} + \ldots + a_n^* \bra{e_n}
$$

两个矢量 $\ket{\alpha}, \ket{\beta}$ 的内积（inner product）定义为

$$
\braket{\alpha|\beta} = \bra{\alpha} \cdot \ket{\beta} = a_1^* b_1 + a_2^* b_2 + \ldots + a_n^* b_n \in \mathbb{C}.
$$

内积的性质：

$$
\begin{array}{c}
    \braket{\beta|\alpha} = \braket{\alpha|\beta}^*, \\[1ex]
    \braket{\alpha|\alpha} \geq 0, \text{ 且 } \braket{\alpha|\alpha} = 0 \iff \ket{\alpha} = \ket{0}, \\[1ex]
    \braket{\alpha|(b\ket{\beta} + c\ket{\gamma})} = b \braket{\alpha|\beta} + c \braket{\alpha|\gamma}.
\end{array}
$$

由矢量和其自身内积的非负性，可定义矢量的模（norm）：

$$
\|\alpha\| \equiv \sqrt{\braket{\alpha|\alpha}}
$$

正交归一集（orthonormal set）：$\{\ket{\alpha_n}\}$ 满足

$$
\braket{\alpha_i|\alpha_j} = \delta_{ij}
$$

Schwarz inequality：

$$
|\braket{\alpha|\beta}|^2 \leq \braket{\alpha|\alpha} \braket{\beta|\beta}
$$

### 线性变换（附录 A.3）

$$
\ket{\alpha} \xrightarrow{\hat{T}} \ket{\alpha'} = T \ket{\alpha}
$$

这里 $\hat{T}$ 是线性变换（linear transformation）[^1]，满足

$$
\hat{T} (a \ket{\alpha} + b \ket{\beta}) = a \hat{T} \ket{\alpha} + b \hat{T} \ket{\beta}
$$

[^1]: 这里在 $T$ 上面加了个 hat ($\hat{\,\cdot \,}$)，因为量子算符是线性变换。

如果知道了线性变换对一组基矢的作用：

$$
\hat{T} \ket{e_j} = T_{ij} \ket{e_j}
$$

设 $\ket{\alpha} = a_i \ket{e_i}$ 为任意矢量，

$$
\hat{T} \ket{\alpha} = a_i (\hat{T} \ket{e_i}) = a_i T_{ij} \ket{e_j}
$$

第 $j$ 个分量为 $a_j' = T_{ij} a_i$.

如果基矢是正交归一的，则

$$
\begin{equation}
    T_{ij} = \bra{e_i} \,\hat{T}\, \ket{e_j}.
\end{equation}
$$

采用矩阵表示

$$
[\hat{T}] = \begin{pmatrix}
    T_{11} & T_{12} & \cdots & T_{1n} \\
    T_{21} & T_{22} & \cdots & T_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    T_{n1} & T_{n2} & \cdots & T_{nn}
\end{pmatrix}
$$

-   转置（transpose）
-   共轭（conjugate）
-   **厄米共轭（Hermitian conjugate）**（或称**伴随（adjoint）**）：共轭转置，记作 $\hat{T}^\dagger$
    - **{==厄米矩阵（Hermitian matrix）==}**（或**自伴矩阵（self-adjoint matrix）**）：
    $$
    T^\dagger = T
    $$
    - 斜厄米矩阵（skew-Hermitian matrix）（或反厄米矩阵（anti-Hermitian matrix））：
    $$
    T^\dagger = -T
    $$
-   对易子（commutator）：
    $$
    [S, T] = ST - TS
    $$
-   **幺正矩阵（unitary matrix）**：
    $$
    U^\dagger = U^{-1}
    $$
    - 行，列构成正交归一集（基矢）
    - 保持矢量内积不变：
      设 $\ket{\alpha'} = U \ket{\alpha}, \, \ket{\beta'} = U \ket{\beta}$，则
      $$
      \braket{\alpha'|\beta'} = (U \ket{\alpha})^\dagger (U \ket{\beta}) = \bra{\alpha} U^\dagger U \ket{\beta} = \braket{\alpha|\beta}
      $$

### 基矢变换（附录 A.4）

设原基矢 $\ket{e_i}$ 是新基矢 $\ket{e_i'}$ 的线性组合：

$$
\begin{aligned}
    \ket{e_1} &= S_{11} \ket{e_1'} + S_{21} \ket{e_2'} + \ldots + S_{n1} \ket{e_n'} \\
    \ket{e_2} &= S_{12} \ket{e_1'} + S_{22} \ket{e_2'} + \ldots + S_{n2} \ket{e_n'} \\
    &\vdots \\
    \ket{e_n} &= S_{1n} \ket{e_1'} + S_{2n} \ket{e_2'} + \ldots + S_{nn} \ket{e_n'}
\end{aligned}
$$

其中 $S_{ij} \in \mathbb{C}.$ 写成张量形式：

$$
\ket{e_i} = S_{ij} \ket{e_j'}
$$



### 本征矢和本征值（附录 A.5）

在复矢量空间中[^2]，对任意线性变换 $\hat{T}$，都存在一些“特殊”的矢量 $\ket{\alpha}$，使得它们在变换下仅被拉伸或压缩，而不改变方向：

[^2]: 实矢量空间中并不总是存在本征矢和本征值（标量被限制为实数）。

$$
\hat{T} \ket{\alpha} = \lambda \ket{\alpha}
$$

这里 $\lambda \in \mathbb{C}$ 称为**本征值（eigenvalue）**，$\ket{\alpha}$ 称为变换的**本征矢（eigenvector）**。

矩阵形式：

$$
(T - \lambda I) \vec{a} = 0
$$

非平凡解要求矩阵 $(T - \lambda I)$ 的行列式为零：

$$
\det (T - \lambda I) = 0
$$

得到关于 $\lambda$ 的**特征方程（characteristic equation）**：

$$
C_n \lambda^n + C_{n-1} \lambda^{n-1} + \ldots + C_1 \lambda + C_0 = 0
$$

#### 对角化

若本征矢量可以张成整个空间，本征矢作为 $S^{-1}$ 的列矢量，可以将矩阵 $T$ 对角化：

$$
S^{-1} T S = D
$$

矩阵能对角化的充分条件：矩阵 $N$ 与其厄米共轭 $N^\dagger$ 对易，称为**正规（normal）** 矩阵：

$$
[N^\dagger, N] = 0
$$

特别地，每个厄米矩阵和幺正矩阵都是正规矩阵。

!!! question "两个可对角化矩阵，什么时候能同时对角化？"
    是否存在一组基矢，其所有分量都是这两个矩阵的本征矢量？

    :point_right: 当且仅当这两个矩阵对易。此时它们有一组共同的本征矢量。而且更进一步地，相对于任何一组基矢都对易。

    ---

    设 $T$ 的本征矢为 $\{a^{(i)}\}$，对应本征值为 $\{\lambda_i\}$，

    $$
    T a^{(i)} = \lambda_i a^{(i)}.
    $$

    设 $[T, V] = 0$，下面说明 $a^{(i)}$ 也是 $V$ 的本征矢。


### 厄米变换（附录 A.6）

厄米变换的定义：变换 $\hat{T}$ 不管是作用于内积的第一项还是第二项，内积的结果不变

$$
\begin{equation} \label{eq:hermitian-transform}
  \braket{\hat{T}^\dagger \alpha|\beta} = \braket{\alpha|\hat{T} \beta}
\end{equation}
$$

这里省略了一些 $\ket{\cdot}$.

用矩阵语言：

$$
\braket{\alpha | \hat{T} \beta} = \alpha^\dagger (T \beta) = (T^\dagger \alpha)^\dagger \beta = \braket{\hat{T}^\dagger \alpha | \beta}
$$

厄米变换（Hermitian transformation，$\hat{T}^\dagger = \hat{T}$）的三个性质：

1.  本征值是实数
    证明：

2.  不同本征值对应的本征矢正交
    证明：

3.  本征矢构成完备集


## 3.2 可观测量

### 3.2.1 厄米算符

可观测量 $Q(x, p)$ 的期望值

$$
\braket{Q} = \int \Psi^* \hat{Q} \Psi \, \mathrm{d}x = \braket{\Psi|\hat{Q}\Psi}
$$

测量的结果 $\braket{Q}$ 应为实数，即

$$
\braket{Q} = \braket{Q}^* \implies \braket{\Psi|\hat{Q}\Psi} = \braket{\Psi|\hat{Q}\Psi}^* = \braket{\hat{Q}\Psi|\Psi}
$$

这恰好是厄米变换的定义（式 \ref{eq:hermitian-transform}）。






## 3.6.2 Dirac 记号

1.  矢量
    - Ket 表示矢量：$\ket{\alpha}$
    - Bra 表示一种线性函数：$\bra{\alpha}$
2.  投影算符
    $$
    \hat{P} = \ket{\alpha} \bra{\alpha}
    $$
3.  恒等算符
    - 离散正交归一基 $\{\ket{e_n}\}$
    $$
    \sum_n \ket{e_n} \bra{e_n} = \hat{I}
    $$
    - 连续正交归一基 $\{\ket{e_z}\}$
    $$
    \int \ket{e_z} \bra{e_z} \, \mathrm{d}z = \hat{I}
    $$

### 3.6.3 基矢变换

证明：$\hat{P} \ket{r'} = \mathrm{i} \hbar \frac{\partial}{\partial r'} \ket{r'}$

