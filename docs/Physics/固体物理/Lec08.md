# 晶格振动的力学描述

## 一维单原子链

$$
\begin{equation} \tag{8.1} \label{eq:atom-motion}
    \ddot{u}_n = \beta (u_{n+1} + u_{n-1} - 2u_n)
\end{equation}
$$

Born-Karman 周期性边界条件，取平面波形式的特解

$$
\begin{equation} \tag{8.2} \label{eq:plane-wave}
    u_n = A \mathrm{e}^{\mathrm{i} (q n a - \omega t)}
\end{equation}
$$

原子的位移在空间上呈周期性分布，所以原子的集体振动可看作一个行进波（格波）。其中 $q$ 表征空间相位变化速率，为格波的波矢。

格波的波长 $\lambda = \frac{2 \pi}{q} = (n' - n) a$，即振动位相相同的最近两个原子之间的距离为一个波长。

### 色散关系

将平面波解代入动力学方程，得到 $\omega$ 与 $q$ 的关系，称为**色散关系（dispersion relation）**

$$
\begin{equation} \tag{8.3} \label{eq:dispersion}
    \omega = 2 \sqrt{\frac{\beta}{m}} \left| \sin \frac{q a}{2} \right|
\end{equation}
$$

当 $qa$ 增加 $2\pi$ 的整数倍（即 $q$ 增加倒格矢 $2\pi / a$ 的整数倍）时，$\omega$ 不变。这表明格波频率 $\omega(q)$ 在波矢空间中的周期为 $2 \pi / a$.

当 $q \to -q$，$\omega$ 不变，因此可以将波矢 $q$ 限制在 $- \frac{\pi}{a} \leq q \leq \frac{\pi}{a}$ 的区间范围内。这正是一维简单晶格的第一布里渊区！

!!! tip "高阶布里渊区的格矢的等价性"

    高阶布里渊区中的格波可以通过减去倒格矢 $2\pi / a$ 的整数倍“拉”回第一布里渊区内的格波。

!!! question "为何称为色散关系"
    设格波的传播群速度 $v_g = \frac{d \omega}{d q}$.

    考虑 $q > 0$，\eqref{eq:dispersion} 式对 $q$ 求导：

    $$
    v_g = a \sqrt{\frac{\beta}{m}} \cos \frac{q a}{2} = a \sqrt{\frac{\beta}{m}} \cos \frac{\pi a}{\lambda}
    $$

    不同波长的格波具有不同的传播速度

关于 $q$ 的取值，在 Born-Karman 周期性边界条件下，$u_{n+N} = u_n$，代入 \eqref{eq:plane-wave} 得到

$$
\begin{equation}
    q = \frac{2 \pi m}{N a}, \, m \in \mathbb{Z}
\end{equation}
$$

波矢间隔为

$$
\Delta q = \frac{2 \pi}{N a}
$$

波矢密度为间隔的倒数 $Na / 2 \pi$. 第一布里渊区区间长度为 $2 \pi / a$，包含 $N$ 个波矢，即 $-\frac{N}{2} \leq m < \frac{N}{2}$

-   当 $q \to 0$ 时（长波极限）

    $$
    \omega \approx qa \sqrt{\frac{\beta}{m}}
    $$

    色散关系近似线性，群速度为常数，对应**弹性波**（声波）的传播特性

    $$
    u_{n - 1} \approx u_n \approx u_{n + 1}
    $$

    所有原子近似同步振动

-   当 $q \to \pm \pi / a$ 时（布里渊区边界），对应格波的最大频率（截止频率）

    $$
    \omega_\max = 2 \sqrt{\frac{\beta}{m}}, \, u_{n + 1} = u_n \mathrm{e}^{\mathrm{i} q a} = - u_n
    $$

    相同振幅反向


## 一维双原子链

原胞中包含两个质量不同的原子

简谐近似下的运动方程

$$
\begin{aligned}
    m \ddot{u}_{2n} &= \beta (u_{2n + 1} + u_{2n - 1} - 2 u_{2n}) \\
    M \ddot{u}_{2n + 1} &= \beta (u_{2n + 2} + u_{2n} - 2 u_{2n + 1})
\end{aligned}
$$

取平面波形式的试探解

$$
\begin{aligned}
    u_{2n} &= A \mathrm{e}^{\mathrm{i} (2 n q a - \omega t)} \\
    u_{2n + 1} &= B \mathrm{e}^{\mathrm{i} ((2 n + 1) q a - \omega t)}
\end{aligned}
$$

代入运动方程，得

$$
\begin{aligned}
    - m \omega^2 A &= 2 \beta \cos (qa) B - 2 \beta A \\
    - M \omega^2 B &= 2 \beta \cos (qa) A - 2 \beta B
\end{aligned}
$$

方程与 $n$ 无关（因为是周期性 B.C.）。将上式写成关于 $A, B$ 的方程组：

$$
\begin{aligned}
    (m \omega^2 - 2 \beta) A + 2 \beta \cos (qa) B &= 0 \\
    2 \beta \cos (qa) A + (M \omega^2 - 2 \beta) B &= 0
\end{aligned}
$$

非平凡解的条件：

$$
\begin{vmatrix}
    m \omega^2 - 2 \beta & 2 \beta \cos (qa) \\
    2 \beta \cos (qa) & M \omega^2 - 2 \beta
\end{vmatrix} = 0
$$

展开解得

$$
\begin{equation}
    \omega_\pm^2 = \beta \frac{m + M}{m M} \left( 1 \pm \sqrt{1 - \frac{4 m M}{(m + M)^2} \sin^2 (qa)} \right)
\end{equation}
$$

$\omega_+$ 对应**光学支（optical branch）**，$\omega_-$ 对应**声学支（acoustic branch）**。

> :exclamation: 熟练掌握该推导过程！

由格波解可知，相邻原胞之间的相位差为 $2 q a$. 

再考虑周期性 B.C.，$u_{2n + 2N} = u_{2n}$，得到

$$
q = \frac{\pi s}{N a}, \, s \in \mathbb{Z}
$$

因此，双原子链的第一布里渊区为 $- \frac{\pi}{2 a} \leq q \leq \frac{\pi}{2 a}$. 因为原胞的长度为 $2a$.

第一布里渊区内共有 $N$ 个允许的 $q$ 值，每个 $q$ 对应两个频率 $\omega_+(q), \omega_-(q)$，因此总共有 $2N$ 个格波模式。{++格波模式数和自由度严格一一对应。++}

### 长波极限（$q \to 0$）

$\sin qa \approx qa$，并对根号项作泰勒展开

$$
\omega_\pm^2 \approx \beta \frac{m + M}{m M} \left[ 1 \pm \left( 1 - \frac{2 m M}{(m + M)^2} q^2 a^2 \right) \right]
$$

#### 声学支

$$
\omega_- \approx \sqrt{\frac{2 \beta}{m + M}} q a
$$

振幅比

$$
\left(\frac{B}{A}\right)_- \approx \frac{m \omega_-^2 - 2 \beta}{2 \beta \cos (qa)} \to 1
$$

体现出整体的质心运动

#### 光学支

$$
\omega_+ \approx \sqrt{\frac{2 \beta (m + M)}{m M}}
$$

振幅比

$$
\left(\frac{B}{A}\right)_+ \approx - \frac{m \omega_+^2 - 2 \beta}{2 \beta \cos (qa)} \to - \frac{m}{M}
$$

位移形式

反相振动

在离子晶体中产生宏观的电偶极子


!!! summary "本讲结语"
    单原子链和双原子链模型的意义不只是求解振动模式，更重要的是给出色散关系，从而可以进一步用于求解体系在任意温度下的总能量和热容。