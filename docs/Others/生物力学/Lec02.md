# 经典热力学回顾

宏观热力学量（仅对于热平衡系统定义）：

- 广延量：体积、能量、粒子数、...
    - 可以延展、叠加的
- 强度量：压强、温度、化学势、...
    - 反映系统内部状态的性质

热力学第零定律：温度（作为系统状态量）的热力学意义

- **定态**：系统的宏观特性不随时间变化的状态
    - :warning: 定态不一定是平衡态！
- **热平衡态**：特殊的定态，内部不存在任何宏观的流过程（如热流、物质流、动量流等）
    - 认定与观测时间尺度有关

热力学第一定律：能量守恒定律

$$
\begin{equation} \tag{1} \label{eq:first_law}
    d U = \delta W + \delta Q
\end{equation}
$$

- $\delta W$：外界对系统做的功
- $\delta Q$：外界对系统传递的热量

> $\delta$ 用来表示和过程相关

**准静态过程**：理想的可逆过程。系统的强度量总是紧跟外界控制参量的缓慢改变，此时{++外界对系统做的功可由系统的状态量来表示++}。

$$
\begin{equation} \tag{2} \label{eq:quasi_static}
    \delta W = - p d V
\end{equation}
$$

**绝热过程**：系统在演化过程中与外界无热量（但不意味着无能量）交换。

$$
\begin{equation} \tag{3} \label{eq:adiabatic}
    d U = \delta W = - p d V
\end{equation}
$$

热力学第二定律：热功转化的不等价性，一切热现象不可逆

- 开尔文表述（1851，热机）：不能从单一热源吸热使之完全变为有用功而不产生其他影响。
- 克劳修斯表述（1850，制冷机）：不可能把热从低温物体传到高温物体而不产生其他影响。

在不产生其他影响的情况下，功可以完全转化为热，而热却不能完全转化为功。

熵作为系统状态的函数（广延量）

对于可逆循环过程，

$$
\begin{equation} \tag{4} \label{eq:irreversible}
    \oint \frac{\delta Q_{\text{rev}}}{T} = 0
\end{equation}
$$

因此可以定义态函数（与路径无关），即熵

$$
\begin{equation} \tag{5} \label{entropy}
    S_1 - S_0 = \int_{0}^{1} \frac{\delta Q_{\text{rev}}}{T} \implies \boxed{d S = \frac{\delta Q_{\text{rev}}}{T}}
\end{equation}
$$

!!! tip "积分因子"
    $Q$ 是一个和过程相关的量，和温度一相除却变成一个状态量了！$1/T$ 称为 $Q$ 的积分因子。

对于准静态过程，热力学第一第二定律可以合并为：

$$
\begin{equation}
    d U = T d S - p d V
\end{equation}
$$

如果除了体积功以及热交换之外，体系还存在粒子数变化等其他变化过程，则热力学第一定律可以写成更广泛的形式：

$$
\begin{equation} \tag{6} \label{eq:general_first_law}
    \boxed{
        d U = T d S - p d V + \mu d N + \phi d q + \ldots
    }
\end{equation}
$$

其中 $\mu$ 是化学势，

注意到这是一个全微分表达式，$d$ 后面的都是广延量（也就是 $U$ 的自然变量），前面的都是强度量。通过对 $U(S, V, N, q, \ldots)$ 偏导，可以得到温度、压强、化学势等物理量的热力学定义：

$$
\begin{equation} \tag{7} \label{eq:thermodynamic_def}
    T = \frac{\partial U}{\partial S} \Big|_{V, N, q, \ldots}, \quad - p = \frac{\partial U}{\partial V} \Big|_{S, N, q, \ldots}, \quad \mu = \frac{\partial U}{\partial N} \Big|_{S, V, q, \ldots}
\end{equation}
$$

经典热力学中，熵及化学势的绝对值无法确定，因此化学势的正负也没有意义。但{++化学势的相对大小可用于判断一定条件下物质扩散、转移、转化的趋势++}。

> 分子从高化学势区域向低化学势区域扩散，化学反应从高化学势物质向低化学势物质进行...

孤立系统的宏观平衡态出现在微观状态数最大（熵最大）的情况

!!! example "两子室构成一孤立系统"
    -   有能量流（热学平衡）
        $$
        \left( \frac{\partial S}{\partial U_1} - \frac{\partial S}{\partial U_2} \right)_{V_1, V_2, N_1, N_2} d U_1 \implies T_1 = T_2
        $$

    -   有 sliding partition（机械平衡）
    -   有物质流（化学平衡）


## 热力学势与特性函数

特性函数：在独立变量适当选择之下，只要一个热力学函数就可以确定均匀系的全部平衡性质。

### Helmholtz 自由能 $F = U - T S$

$$
d F = d U - T d S - S d T \overset{\eqref{eq:general_first_law}}{=} - S d T - p d V + \mu d N + \ldots
$$

等价于热力学第一定律，但自然变量变为了 $T, V$

化学势 $\mu = \frac{\partial F}{\partial N} \Big|_{T, V}$

> “自由”能：可以向功转化的能量。自由能的减小，是等温过程中从系统可以获得的最大功。

### Gibbs 自由能 $G = U - T S + p V$

自然变量变成了 $T, p$ 

等温等压系统演化的判据：热平衡态是

可证明，对于广延体系

$$
\begin{equation} \tag{8} \label{eq:gibbs_free_energy}
    \boxed{
        G(T, p, N) = N \mu(T, p)
    }
\end{equation}
$$

### 焓 $H = U + pV$

把 $V$ 替换掉

$$
d H = d U + p d V + V d p \overset{\eqref{eq:general_first_law}}{=} T d S + V d p + \mu d N + \ldots
$$

准静态等压过程中，焓变可认为是系统的放/吸热量，直接可测

Gibbs-Helmholtz 方程：

$$
\begin{equation} \tag{9} \label{eq:gibbs_helmholtz}
    \left( \frac{\partial (G/T)}{\partial T} \right)_{p, N} = - \frac{H}{T^2}
\end{equation}
$$

isolated system = closed system (s) + reservoir (r)

$$
\left.
    \begin{aligned}
        & d S_{\text{tot}} = d S_s + d S_r \geq 0 \\[1ex]
        & d U_r = T d S_r - p d V_r
    \end{aligned}
\right \} \implies
\left.
    \begin{aligned}
        & d S_{\text{tot}} = d S_s + \frac{d U_r + p d V_r}{T} \geq 0 \\[1ex]
        & d U_s = - d U_r
    \end{aligned}
\right \}
$$

在一个自发过程中，熵取最大值等价于自由能取最小值

> 熵不好测量，因此实验中测量**自由能的变化**来判断自发过程的方向：
>
> $$
> \boxed{\Delta G = \Delta H - T \Delta S}
> $$

