# 统计物理

> 热力学：宏观的唯象理论
> 
> 统计物理：
> 
> - 从微观层次上理解“熵”及热力学定律
> - 平衡态统计物理在生物、化学系统中的应用

!!! question "为什么要建立统计物理？"
    - 系统的宏观态：宏观参量取定值
    - 系统的**微观态**（基本图景）：组成系统的微观粒子可由基本动力学规律描述。同一时刻所有粒子的运动状态构成系统的一个微观态。系统可拥有大量的微观态，所有这些微观态构成系统的状态空间。系统自由度 $\uparrow \implies$ 状态空间维数 $\uparrow$

!!! tip "基本观念"
    - 热平衡系统具有**确定宏观量**（平均意义上）
    - 系统的**每一个宏观态都对应大量微观态，它们均以一定概率出现**

!!! info "平衡态统计力学的{==核心任务==}"
    对于给定的约束条件（这决定了各种系综），寻找热平衡系统微观态的概率分布，由此给出宏观热力学量的微观解释，并给出各宏观量之间的定量关系（热力学关系）。

## 基本假设

!!! note "Boltzmann 等几率假说"
    **孤立系统的所有微观状态以等几率的方式出现。**

    - 孤立系统：与外界无物质、能量交换的体系。一般认为这样的系统必然演化到{++热平衡++}状态，具有确定的能量（内能）、体积、温度等。
    - 由热力学第二定律，{++热平衡态就是熵最大的状态++} $\implies$ “等几率”与“熵最大”的等价关系（Boltzmann）。

## 从熵开始

> 课上采用比较现代的统计力学推导，偏信息、数学

-   Shannon's information entropy (1948)
    > 此时平衡态统计物理已经发展成熟，但香农发展了更深刻的洞见

    $$
    \begin{equation} \tag{1} \label{eq:shannon_entropy_variant}
        I = - K \sum_{j = 1}^M P_j \ln P_j, \quad K > 0
    \end{equation}
    $$

### 信息熵

假设事件 $x$ 有 $n$ 种可能结果（相当于微观状态空间），每个结果出现的几率为 $p(x)$，用于刻画对事件结果的不确定程度。Shannon 定义了函数 $H(x)$，并假设其满足三个条件：

1.  $H(x)$ 是 $p(x)$ 的连续函数
2.  :material-star:{.star} 若所有结果等几率出现，则 $H(x)$ 最大；反之若结果确定，则 $H(x) = 0$
3.  若有两个事件 $x, y$ 独立发生，分别有 $n, m$ 个结果，则 $H(x, y) = H(x) + H(y)$

:bulb: Shannon 证明，满足上述条件的函数 $H(x)$ 具有唯一形式：

$$
\begin{equation} \tag{2} \label{eq:shannon_entropy}
    H(x) = \sum_{i = 1}^n p(x_i) \log_2 \left(\frac{1}{p(x_i)}\right) = - \sum_{i = 1}^n p(x_i) \log_2 p(x_i)
\end{equation}
$$

归一化条件：

$$
\begin{equation} \tag{3} \label{eq:norm_prob}
    \sum_{i = 1}^n p(x_i) = 1
\end{equation}
$$

!!! tip "关于对数基底"
    如果计算中的对数 $\log$ 是以 $2$ 为底的，则 $H$ 的单位为 bit.


香农认识到：在系统中熵很大的性质，与系统具有高度的统计无序（不可预言性）是同时出现的。

#### 由信息熵反推 Boltzmann 熵

孤立系统的平衡态的 $E, N, V$ 为常数（微正则系综）

\eqref{eq:shannon_entropy_variant} 在约束条件下求最大熵，可得

$$
p(x_1) = p(x_2) = \cdots = p(x_n) = \frac{1}{n}
$$

此即 Boltzmann 等几率假说。此时

$$
H(x) = \ln n \iff \boxed{S = k_B \ln \Omega}
$$

此即 **Boltzmann 熵**。$\Omega$ 是微观状态的总数。

### 正则系综（Canonical ensemble）

描述与热源接触并达到热平衡的封闭系统的统计系综，$N, V, T$ 为常数，能量可变。它由大量具有相同 $N, V, T$ 的“拷贝系统”（即系综）组成，每个系统都能与外界热源交换能量，因此各自能量不同，但在平衡时具有相同的温度。

这种设定模拟了现实中大多数非孤立系统的情况，因此是{++最常用的++}。

相空间：$\Gamma_j \equiv \{(\boldsymbol{r}_1, \boldsymbol{p}_1); (\boldsymbol{r}_1, \boldsymbol{p}_1); \cdots; (\boldsymbol{r}_N, \boldsymbol{p}_N)\}$. 不过后面用不到 $\boldsymbol{p}_i$. 记对应的能量为 $E_j$，微观态 $j$ 出现的概率为 $P_j$. $T$ 相同，即内能相同：

$$
\begin{equation} \tag{4} \label{eq:canonical_energy}
    \braket{E} = \sum_j P_j E_j = U.
\end{equation}
$$

最大熵原理：在满足约束条件的前提下，系统的平衡态概率分布 $P_j$ 是使信息熵 $I$ 最大的分布。因此要求 \eqref{eq:shannon_entropy_variant} 的最大值。

:warning: 注意到，这时候有两个约束条件 \eqref{eq:norm_prob} 和 \eqref{eq:canonical_energy}，因此在求解 \eqref{eq:shannon_entropy_variant} 的条件极值问题的时候需要引入两个拉格朗日乘子 $\alpha, \beta$，并且需要同时满足

$$
\begin{equation} \tag{5} \label{eq:lagrange_multipliers}
    \left \{
    \begin{aligned}
        &\frac{\partial}{\partial P_j} \left[ - K \sum_j P_j \ln P_j + \alpha \left(1 - \sum_j P_j\right) + \beta \left(U - \sum_j P_j E_j\right) \right] = 0, \\
        &1 - \sum_j P_j = 0, \\
        &U - \sum_j P_j E_j = 0
    \end{aligned}
    \right.
\end{equation}
$$

解出 $P_j$ 的表达式：

$$
\begin{equation} \tag{6} \label{eq:canonical_prob}
    P_j = \frac{e^{-\beta E_j}}{\sum_j e^{-\beta E_j}} \equiv \frac{e^{-\beta E_j}}{Z}
\end{equation}
$$

其中 $Z = \sum_j e^{-\beta E_j}$ 是**配分函数（partition function）**. $\beta$ 是一个常数，起初纯粹是数学的产物，下面说明 $\beta = \frac{1}{k_B T}$.

!!! tip "$\beta$ 的物理意义"
    结合 \eqref{eq:canonical_energy} 和 \eqref{eq:canonical_prob}，可以得到

    $$
    \braket{E} = \sum_j E_j \frac{e^{-\beta E_j}}{Z}
    $$

## 微观态

微观态：各组态微观排列的一个特定实现（构型）

### 微观状态数的计算

将 $L$ 个不可分辨的物体放入 $\Omega$ 个盒子中，每个盒子最多一个物体。则分配的所有方式为

$$
\binom{\Omega}{L} = \frac{\Omega!}{L!(\Omega - L)!} \equiv W
$$

> Gibbs 佯谬：为什么不可分辨？
>
> 经典统计物理中，粒子是可分辨的，因此 $W = \Omega! / (\Omega - L)!$ 为排列数，但这样会导致熵不具有广延性！至今没有一个完全令人满意的解决方案。

宏观态的微观简并度，用熵来刻画：

!!! example "Entropy for DNA-protein binding"
    假设为孤立系统，等效为 $N_p$ 个小球（蛋白质分子）投入 $N$ 个盒子（DNA 上的结合位点）。

    $$
    W(N_p; N) = \frac{N!}{N_p!(N - N_p)!}
    $$

    使用 **Stirling approximation**：$\ln n! \approx n \ln n - n$，可以得到

    $$
    S = k_B \ln W \approx - k_B N [c \ln c + (1 - c) \ln (1 - c)]
    $$

    其中 $c = \frac{N_p}{N}$. 容易发现 $c = 0.5$ 时取最大值。

