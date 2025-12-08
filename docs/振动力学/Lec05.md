# 多自由度线性系统

一般方程

$$
\left \{
\begin{aligned}
    & \mathbf{M} \ddot{\boldsymbol{x}} + \mathbf{C} \dot{\boldsymbol{x}} + \mathbf{K} \boldsymbol{x} = \mathbf{F}(t) \\
    & \boldsymbol{x}(0) = \boldsymbol{\varphi}_0, \quad \dot{\boldsymbol{x}}(0) = \boldsymbol{\psi}_0
\end{aligned}
\right.
$$

考虑保守系统：$\mathbf{M} \ddot{\boldsymbol{x}} + \mathbf{K} \boldsymbol{x} = \boldsymbol{0}$，质量矩阵和刚度矩阵均为 $n$ 阶对称矩阵。

设 $\boldsymbol{x} = \boldsymbol{\varphi} \sin (\omega t + \theta)$，代入得

$$
\begin{equation} \tag{1} \label{eq:osc-eigen-general}
    (-\omega^2 \mathbf{M} + \mathbf{K}) \boldsymbol{\varphi} = \boldsymbol{0}
\end{equation}
$$

这是广义本征方程。记 $\lambda = \omega^2$. 要求非平凡解，需满足

$$
\det(-\lambda \mathbf{M} + \mathbf{K}) = 0
$$

由于一般情况下，$\mathbf{M}$ 为对称正定矩阵，$\mathbf{K}$ 为对称半正定矩阵，上式有 $n$ 个实非负根 $\lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_n$，对应 $n$ 个特征频率 $\omega_i = \sqrt{\lambda_i}$ 和 $n$ 个线性无关的特征向量 $\boldsymbol{\varphi}_i$. 固有频率 $\omega_i$ 对应的本征向量 $\boldsymbol{\varphi}_i$ 称作第 $i$ 阶**固有振型**，也称**模态向量**. 两者合在一起称为**固有模态**. 把 $\omega_i, \boldsymbol{\varphi}_i$ 代入所设的解：

$$
\boldsymbol{x}_i(t) = \boldsymbol{\varphi}_i \sin (\omega_i t + \theta_i)
$$

此为系统的第 $i$ 阶**模态振动**. 系统的任意振动均可表示为各阶模态振动的线性叠加：

$$
\boldsymbol{x}(t) = \sum_{i=1}^n a_i \boldsymbol{\varphi}_i \sin (\omega_i t + \theta_i) = \sum_{i=1}^n \boldsymbol{\varphi}_i (A_i \sin \omega_i t + B_i \cos \omega_i t)
$$

$a_i, \theta_i, A_i, B_i$ 由初始条件确定。

## 固有振型正交性

将固有模态 $(\omega_i, \boldsymbol{\varphi}_i)$ 代入广义本征式 \eqref{eq:osc-eigen-general}，得

$$
\mathbf{K} \boldsymbol{\varphi}_i = \omega_i^2 \mathbf{M} \boldsymbol{\varphi}_i
$$

等号两边同乘 $\boldsymbol{\varphi}_j^{\mathrm{T}}$，得

$$
\begin{equation} \tag{2} \label{eq:mode-orthogonal-proof-1}
    \boldsymbol{\varphi}_j^{\mathrm{T}} \mathbf{K} \boldsymbol{\varphi}_i = \omega_i^2 \boldsymbol{\varphi}_j^{\mathrm{T}} \mathbf{M} \boldsymbol{\varphi}_i
\end{equation}
$$

同样地，将 $(\omega_j, \boldsymbol{\varphi}_j)$ 代入式 \eqref{eq:osc-eigen-general}，并同乘 $\boldsymbol{\varphi}_i^{\mathrm{T}}$，得

$$
\begin{equation} \tag{3} \label{eq:mode-orthogonal-proof-2}
    \boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{K} \boldsymbol{\varphi}_j = \omega_j^2 \boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{M} \boldsymbol{\varphi}_j
\end{equation}
$$

对式 \eqref{eq:mode-orthogonal-proof-1} 取转置，利用 $\mathbf{K}, \mathbf{M}$ 的对称性，有

$$
\begin{equation} \tag{4} \label{eq:mode-orthogonal-proof-3}
    \boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{K} \boldsymbol{\varphi}_j = \omega_i^2 \boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{M} \boldsymbol{\varphi}_j
\end{equation}
$$

\eqref{eq:mode-orthogonal-proof-3} $-$ \eqref{eq:mode-orthogonal-proof-2} 得

$$
\begin{equation} \tag{5} \label{eq:mode-orthogonal-proof-4}
    (\omega_i^2 - \omega_j^2) \boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{M} \boldsymbol{\varphi}_j = 0
\end{equation}
$$

当 $i \neq j$ 时（系统没有重频），得到

$$
\begin{equation} \tag{6} \label{eq:mode-orthogonality}
    \boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{M} \boldsymbol{\varphi}_j = 0
\end{equation}
$$





!!! note "归一化方式"
    $\boldsymbol{\varphi}_i^{\mathrm{T}} = [\alpha_{i1}, \alpha_{i2}, \ldots, \alpha_{in}]$
    1. $\displaystyle \sum_{k=1}^n \alpha_{ik}^2 = 1$
    2. $\max{|\alpha_{ik}|^2} = 1$
    3. $\boldsymbol{\varphi}_i^{\mathrm{T}} \mathbf{M} \boldsymbol{\varphi}_i = \bar{M}_i = 1 \implies \bar{K}_i = \omega_i^2$




### 零频

若系统有特征值为 0，则重根数量对应独立刚性体运动方式数目。此时，$\mathbf{K}$ 为半正定矩阵。


!!! info "实际工程中的模态分析"
    实际计算中，通常只需计算前 $m$ 阶模态（$m < n$），因为高阶模态对系统响应影响较小。
    
    - 精密仪器（如卫星、望远镜等）：$m < 10$
    - 框架结构（楼、桥梁等）：$m < 100$
    - 机器人，火箭： $m < 10^3$
    
    不会超过 $1000$.

    分析方法：

    - 低频：有限元法（Finite Element Method, FEM）
    - 高频：统计能量分析法（Statistical Energy Analysis, SEA）
    - 中频：还没有特别好的方法


## 无阻尼系统的受迫振动

### 振型叠加方法

无阻尼 $n$ 自由度系统在外力 $\boldsymbol{f}(t)$ 作用下的振动微分方程为

$$
\begin{equation} \tag{7} \label{eq:mdof-forced}
    \boldsymbol{M} \ddot{\boldsymbol{x}} + \boldsymbol{K} \boldsymbol{x} = \boldsymbol{f}(t)
\end{equation}
$$


### 机械阻抗方法

设简谐激振力为

$$\boldsymbol{f} = \boldsymbol{F} e^{\mathrm{i} \omega t}$$

其中 $\boldsymbol{F} = [F_1, F_2, \ldots, F_n]^{\mathrm{T}}$ 为简谐激振力的复幅值矢量。系统的稳态振动为与外加激励同频率的简谐振动，设振动解为

$$
\boldsymbol{x} = \boldsymbol{X} e^{\mathrm{i} \omega t}
$$

其中 $\boldsymbol{X} = [X_1, X_2, \ldots, X_n]^{\mathrm{T}}$ 为简谐位移响应的复振幅矢量。