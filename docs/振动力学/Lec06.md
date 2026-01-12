# 振动近似计算方法

## 邓克利法

$$
\boldsymbol{M} \ddot{\boldsymbol{x}} + \boldsymbol{K} \boldsymbol{x} = \boldsymbol{0} \implies \underset{动力矩阵 \, \boldsymbol{D}}{\underbrace{(\boldsymbol{K}^{-1} \boldsymbol{M})}} \ddot{\boldsymbol{x}} + \boldsymbol{x} = \boldsymbol{0}
$$

代入 $x = A \sin(\omega t + \theta)$，

$$
(-\omega^2 \boldsymbol{D} + \boldsymbol{I}) \boldsymbol{A} = \boldsymbol{0}
$$

令 $\bar{\lambda} = 1 / \omega^2$，得到特征方程

$$
\det (\boldsymbol{D} - \bar{\lambda} \boldsymbol{I}) = 0 \iff \det \begin{pmatrix}
    D_{11} - \bar{\lambda} & & & & \\
    & \ddots & & D_{ij} & \\
    & & \ddots & & \\
    & D_{ji} & & \ddots & \\
    & & & & D_{nn} - \bar{\lambda}
\end{pmatrix} = 0
$$

展开即

$$
\begin{aligned}
    \bar{\lambda}^n - (D_{11} + D_{22} + \ldots + D_{nn}) \bar{\lambda}^{n-1} + \cdots + (-1)^n \det(\boldsymbol{D}) &= 0 \\
    \iff (\bar{\lambda} - \bar{\lambda}_1)(\bar{\lambda} - \bar{\lambda}_2) \cdots (\bar{\lambda} - \bar{\lambda}_n) &= 0
\end{aligned}
$$

得到

$$
D_{11} + D_{22} + \ldots + D_{nn} = \bar{\lambda}_1 + \bar{\lambda}_2 + \ldots + \bar{\lambda}_n > \bar{\lambda}_1 = \frac{1}{\omega_1^2}
$$

这个式子可以用来估计最小固有频率 $\omega_1$：

$$
\omega_1^2 > \frac{1}{D_{11} + D_{22} + \ldots + D_{nn}}
$$

!!! tip "$\boldsymbol{D}_{ii}$ 的物理意义"
    由动力矩阵 $\boldsymbol{D}$ 的定义，$D_{ii} = F_{ii} m_i$. 柔度 $F_{ii}$ 表示单位力作用在 $m_i$ 上第 $i$ 个坐标的位移。下面的例子可以看出，$\boldsymbol{D}_{ii}$ 相当于系统“抹掉”除了第 $i$ 个自由度以外的所有自由度后，第 $i$ 个自由度的固有频率的倒数平方。

    参考例 4.2.3 的图，

    $$F_{11} = \frac{1}{k_1} \implies $$



## 瑞利法

第 I/II 类瑞利商：

$$
\begin{align}
    R_{\mathrm{I}} (\boldsymbol{X}) &= \frac{\boldsymbol{X}^{\mathrm{T}} \boldsymbol{K} \boldsymbol{X}}{\boldsymbol{X}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{X}} \tag{I} \\
    R_{\mathrm{II}} (\boldsymbol{X}) &= \frac{\boldsymbol{X}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{X}}{\boldsymbol{X}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{K}^{-1} \boldsymbol{M} \boldsymbol{X}} \tag{II}
\end{align}
$$

其中 $\boldsymbol{X}$ 是任意向量，可用互相正交的振型线性表示：

$$
\begin{equation} \tag{4.2.1} \label{eq:linear-combination}
    \boldsymbol{X} = \sum_{i=1}^n c_i \boldsymbol{\varphi}_i
\end{equation}
$$

重要结论：

$$
\begin{equation} \tag{4.2.2} \label{eq:rayleigh-quotient-inequality}
    R_{\mathrm{I}} (\boldsymbol{X}) \geq R_{\mathrm{II}} (\boldsymbol{X}) \geq \omega_1^2
\end{equation}
$$

证明：

$$
\begin{aligned}
    \boldsymbol{X}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{X} &= \left(\sum_{i=1}^n c_i \boldsymbol{\varphi}_i \right)^{\mathrm{T}} \boldsymbol{M} \left(\sum_{j=1}^n c_j \boldsymbol{\varphi}_j \right) = \sum_{i=1}^n \sum_{j=1}^n c_i c_j \cdot \boldsymbol{\varphi}_i^{\mathrm{T}} \boldsymbol{M} \boldsymbol{\varphi}_j \\
    &= \sum_{i=1}^n c_i^2 \\
    \boldsymbol{X}^{\mathrm{T}} \boldsymbol{K} \boldsymbol{X} &= \sum_{i=1}^n \sum_{j=1}^n c_i c_j \cdot \boldsymbol{\varphi}_i^{\mathrm{T}} \boldsymbol{K} \boldsymbol{\varphi}_j = \sum_{i=1}^n c_i^2 \omega_i^2
\end{aligned}
$$

故

$$
R_{\mathrm{I}} (\boldsymbol{X}) = \frac{\boldsymbol{X}^{\mathrm{T}} \boldsymbol{K} \boldsymbol{X}}{\boldsymbol{X}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{X}} = \frac{\sum_{i=1}^n c_i^2 \omega_i^2}{\sum_{i=1}^n c_i^2} \geq \omega_1^2
$$

现在考虑 $R_{\mathrm{II}} (\boldsymbol{X})$ 的分母. 首先重写式 \eqref{eq:linear-combination} 为

$$
\boldsymbol{X} = \sum_{i=1}^n c_i \boldsymbol{\varphi}_i = [\boldsymbol{\varphi}_1, \boldsymbol{\varphi}_2, \ldots, \boldsymbol{\varphi}_n] \begin{bmatrix}
    c_1 \\
    c_2 \\
    \vdots \\
    c_n
\end{bmatrix} = \boldsymbol{\Phi}_{n \times n} \boldsymbol{c}_{n \times 1}
$$

由 $\boldsymbol{\varphi}_i^{\mathrm{T}} \boldsymbol{M} \boldsymbol{\varphi}_j = \delta_{ij}$ 的正交性，有 $\boldsymbol{\Phi}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{\Phi} = \boldsymbol{I}$.

$$
\boldsymbol{X}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{K}^{-1} \boldsymbol{M} \boldsymbol{X} = \boldsymbol{c}^{\mathrm{T}} \boldsymbol{\Phi}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{K}^{-1} \boldsymbol{M} \boldsymbol{\Phi} \boldsymbol{c}
$$


## Rayleigh-Ritz 法

只选取 $m$ 个振型近似表示系统的位移：

$$
\begin{equation} \tag{4.3.1} \label{eq:rayleigh-ritz-approximation}
    \boldsymbol{X} \approx \sum_{i=1}^m c_i \boldsymbol{\varphi}_i = \boldsymbol{\Phi}_{n \times m} \boldsymbol{c}_{m \times 1}
\end{equation}
$$

第一类瑞利商变为

$$
R_{\mathrm{I}} (\boldsymbol{X}) = \frac{\boldsymbol{c}^{\mathrm{T}} \boldsymbol{\Phi}^{\mathrm{T}} \boldsymbol{K} \boldsymbol{\Phi} \boldsymbol{c}}{\boldsymbol{c}^{\mathrm{T}} \boldsymbol{\Phi}^{\mathrm{T}} \boldsymbol{M} \boldsymbol{\Phi} \boldsymbol{c}} = \frac{\boldsymbol{c}^{\mathrm{T}} \bar{\boldsymbol{K}} \boldsymbol{c}}{\boldsymbol{c}^{\mathrm{T}} \bar{\boldsymbol{M}} \boldsymbol{c}}
$$

## 子空间迭代法

广义本征方程

$$
\boldsymbol{K} \boldsymbol{x} = \lambda \boldsymbol{M} \boldsymbol{x}
$$

1.  给定刚度矩阵 $\boldsymbol{K}$，质量矩阵 $\boldsymbol{M}$ 和各阶固有频率误差向量 $\boldsymbol{\varepsilon} = [\varepsilon_1 \, \cdots \, \varepsilon_i \, \cdots \, \varepsilon_p]^{\mathrm{T}}$，$p$ 为要求解的本征频率个数.
2.  选取
3.  


对角元占优，$\frac{k_{ii}}{m_{ii}}$ 作为初始近似频率 $\tilde{\omega}_i^2$. 再对频率排序，取前 $p$ 个，初始振型向量除了第 $i$ 个分量为 1 外，其余均为 0.

!!! tip "移位算法"
    $\boldsymbol{K}$ 为半正定矩阵时，$\boldsymbol{K}^{-1}$ 不存在，采用修正刚度矩阵 $\boldsymbol{K} + \beta \boldsymbol{M}$，其中 $\beta > 0$.

    $$
    \bar{\boldsymbol{K}} \boldsymbol{X} = \tilde{\lambda} \boldsymbol{M} \boldsymbol{X}
    $$

    则 $\tilde{\lambda} = \lambda + \beta$

## 假设模态法

很多时候精确的振型求不出来，采用满足边界条件的假设振型函数 $Y_i(x)$ 近似表示实际振型 $\varphi_i(x)$. 一般情况下模态叠加收敛较快，取前 $n$ 个假设振型即可：

$$
\begin{equation}
    y(x, t) = \sum_{i=1}^n Y_i(x) q_i(t) = \boldsymbol{Y}^{\mathrm{T}}(x) \boldsymbol{q}(t)
\end{equation}
$$

