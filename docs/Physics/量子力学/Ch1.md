# 第一章 波函数

## 1.1 Schrödinger 方程

*非相对论情形 $v \ll c$*

> 教材：Griffiths, Introduction to Quantum Mechanics
>
> :thinking::cloud: 量子力学发展历史？早期理论？
>
> :nerd_face::point_up: 直接从核心内容讲起

### 量子

- **不连续的**（量子化的）
    - 分立量子化的能级，能量是一份一份的（黑体辐射，Planck）
- **不确定的**
    1. Heisenberg 不确定性原理：不能同时测量位置和动量
    2. Schrödinger 的猫：不死不活
    3. 波粒二象性：又是波又是粒子
    4. 双缝干涉
    5. 意识：测量对态的作用、破坏
- **微观的**
    - 原子内部电子
    - 宏观就没有量子吗？
        - 超导
        - 超流
        - 量子霍尔效应

> 只通过这些名词，能否理解量子力学？

!!! danger "错误的学习方式"
    :disappointed: 只学习孤立的概念

    :point_right: **建立系统的逻辑框架**

### 经典力学 vs. 量子力学

#### 经典力学

$$
\text{力学} \begin{cases}
    \text{kinetics} & \text{运动学} \\
    \text{dynamics} & \text{动力学} \to \text{牛二} \quad F = ma \\
\end{cases}
$$

研究对象：宏观物体抽象为质点

- 质量为 $m$，运动状态 $x(t), v(t) \to $ 测量出来
- 受力分析 $F \to$ 反映了相互作用

$$
\left.
    \begin{aligned}
        \left.
            \begin{aligned}
                \text{牛顿第二定律} \quad F = ma \longrightarrow \text{求解出 } x(t) & \\
                \text{保守体系} \quad F = -\frac{\partial V}{\partial x} &
            \end{aligned}
        \right\} \,
        m \frac{\mathrm{d}^2 x}{\mathrm{d} t^2} = -\frac{\partial V}{\partial x} & \\
        \text{初始条件 } x_0, v_0 &
    \end{aligned}
\right\} \,
\text{求出 } x(t)
$$

$x(t) \to v(t) = \frac{\mathrm{d} x}{\mathrm{d} t}$，$p = mv, T = \frac{1}{2} mv^2$ 为动力学量

$$
\boxed{
\text{系统状态} \iff \text{可观测力学量} \iff \text{观测结果}
}
$$

{++而在量子力学中不是这样的。++}

$$
\text{牛顿力学} \longrightarrow \text{理论力学}(\underset{\text{矢量}}{\underbrace{\text{力}}} \to \underset{\text{标量}}{\underbrace{L, H}}) \longrightarrow \underset{\text{哈密顿方程求解}}{\mathcal{H}}
$$

位置 vs. 动量相空间中的粒子轨迹 $H(\vec{r}, \vec{p})$

#### 量子力学

量子力学：**寻找粒子的波函数** $\Psi(x, t), \Psi \in \mathbb{C}$

通过 Schrödinger 方程研究：

$$
\begin{equation} \label{eq:schrodinger}
\mathrm{i} \hbar \frac{\partial}{\partial t} \Psi(x, t) = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V \Psi \equiv H \Psi
\end{equation}
$$

1. 用态矢量描述系统状态
2. 算符描述力学量（$H$： Hamiltonian 算符）
3. 系统状态随薛定谔方程变化

### 波动方程

特点：形状不变，$f(x, t) = f(x - vt)$

$$
\frac{\partial^2 f}{\partial t^2} = v^2 \frac{\partial^2 f}{\partial x^2}
$$

解：$f(x, t) = \mathrm{e}^{\mathrm{i}(kx - \omega t)}$

$$
\begin{array}{c}
    \text{几何光学} \xleftarrow{\text{短波极限}} \text{波动光学} \\[1em]
    \text{分析力学} \xleftarrow[\text{短波极限}]{h \to 0} \text{量子力学} \\
\end{array}
$$


## 1.2 波函数的统计诠释

> 波函数到底是什么也困惑了它的发明者很久，直到玻恩（Max Born）得以解决。
>
> Born 的学生：程开甲、黄昆、彭恒武、杨立铭

$$
\int_a^b |\Psi(x, t)|^2 \, \mathrm{d} x = t\text{ 时刻发现粒子处于 } [a, b] \text{ 之间的概率}
$$

其中 $|\Psi|^2 = \Psi^* \Psi$，$\Psi^*$ 为 $\Psi$ 的复共轭。

- $\Psi$：概率幅
- $|\Psi|^2$：概率密度

!!! tip
    在这里，$\Psi^* \Psi$ 和 $\Psi \Psi^*$ 是同一个东西，因为它们都是一个复数值。到后面我们将概念迁移到*复矢量*，顺序就变得重要了。

!!! tip "引入不确定性"
    某一时刻测量粒子的位置，发现其在 $C$ 点。那么测量前一时刻粒子的位置在哪里？

    - 现实主义学派：仍在 $C$ 点
    - （正统）哥本哈根学派：粒子不在任何地方，测量对粒子的作用使其在 $C$ 点
    - ~~不可知论~~

    :exploding_head: **测量使波函数坍缩！** 测量是一种相互作用，会改变态。

$$
\boxed{
\text{演化} + \text{测量}
}
$$

!!! question ":thinking:"
    波函数和薛定谔方程都是连续的，那么分立的能级从何而来？

## 1.3 概率

### 离散

有分布：$N(j), j = 1, 2, \ldots, n.$ 全体 $N = \sum_{j=1}^n N(j)$

- $j$ 的概率：
    $$
    P(j) = \frac{N(j)}{N}, \quad \sum_{j=1}^n P(j) = 1
    $$
- 最可几（最概然）：使 $P(j)$ 最大的 $j$
- 中值（median）
- 平均
    $$
    \braket{j} = \frac{\sum_{j=1}^n j N(j)}{\sum N(j)} = \sum_{j=1}^n j P(j)
    $$

    - 多次测量取平均
- 平方平均
    $$
    \braket{j^2} = \sum_{j=1}^n j^2 P(j)
    $$

    > :exclamation: 一般而言，$\braket{j^2} \neq \braket{j}^2$

!!! note "“弥散”的量度：方差"
    - 使用 $\Delta j = j - \braket{j}$

    $$
    \begin{aligned}
        \braket{\Delta j} &= \sum_{j=1}^n (j - \braket{j}) P(j) \\
        &= \sum_{j=1}^n j P(j) - \braket{j} \sum_{j=1}^n P(j) \\
        &= \braket{j} - \braket{j} = 0
    \end{aligned}
    $$

    这不太好。

    - 使用 $\sigma^2 = \braket{(\Delta j)^2}$，定义为方差（variance）
        - $\sigma$ 标准差（standard deviation）

    $$
    \begin{aligned}
        \sigma^2 &= \braket{\Delta j^2} = \sum_{j=1}^n (j - \braket{j})^2 P(j) \\
        &= \braket{j^2} - \braket{j}^2
    \end{aligned}
    $$

    由 $\sigma^2 \geq 0$ 有 $\braket{j^2} \geq \braket{j}^2$. 当 $\sigma^2 = 0$ 时，即 $\braket{j^2} = \braket{j}^2$，每一元素有相同的值，即处于本征态。

### 连续

有分布：$\rho(x), \, x \in (-\infty, +\infty)$

- $\int_{-\infty}^{+\infty} \rho(x) \, \mathrm{d} x = 1$
- $\braket{x} = \int_{-\infty}^{+\infty} x \rho(x) \, \mathrm{d} x$
- $\braket{f(x)} = \int_{-\infty}^{+\infty} f(x) \rho(x) \, \mathrm{d} x$

!!! example "高斯（Gaussian）分布"
    $$
    \rho(x) = A \mathrm{e}^{-\lambda (x - a)^2}
    $$

    1. 利用归一化条件确定 $A$
    2. 求出 $\braket{x}, \braket{x^2}, \sigma$
    3. 画出 $\rho(x)$ 的草图

    ---

    > 需要用到 $$\int_{-\infty}^{+\infty} \mathrm{e}^{-x^2} \, \mathrm{d} x = \sqrt{\pi}$$

    1.  $\int_{-\infty}^{+\infty} \rho(x) \, \mathrm{d} x = 1 \implies A = \sqrt{\frac{\lambda}{\pi}}$
    2.  由对称性，
        $$
        \int_{-\infty}^{+\infty} x \mathrm{e}^{-\lambda x^2} \, \mathrm{d} x = 0.
        $$

        故

        $$
        \braket{x} = a.
        $$

        平方平均

        $$
        \braket{x^2} = \int_{-\infty}^{+\infty} x^2 \sqrt{\frac{\lambda}{\pi}} \mathrm{e}^{-\lambda (x - a)^2} \, \mathrm{d} x = a^2 + \frac{1}{2\lambda}
        $$

        标准差

        $$
        \sigma = \sqrt{\braket{x^2} - \braket{x}^2} = \frac{1}{\sqrt{2\lambda}}
        $$


$$
\Psi(x,t) \to |\Psi(x,t)|^2 = \rho(x,t)
$$

波函数代表了{++对位置测量++}[^1]的概率幅。

[^1]: 此为**位置表象**，也可以是动量等其他力学量的表象。

!!! question ":thinking:"
    为何同一系统 ensemble 多次测量，每次测量结果不一样？

    系统的状态不是所测量的一个确定态（$\sigma = 0$），而是多个确定态（本征态）的叠加。

    $$
    |\Psi(x_1,t)|^2 \ket{x_1} + |\Psi(x_2,t)|^2 \ket{x_2} + \cdots
    $$

## 1.4 归一化

统计诠释指出 $|\Psi(x, t)|^2$ 是在 $t$ 时刻发现粒子在 $x$ 位置处的几率密度，那么有

$$
\begin{equation} \label{eq:normalization}
    \int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, \mathrm{d}x = 1.
\end{equation}
$$

但是 $\Psi$ 由薛定谔方程确定，薛定谔方程并不依赖于这个条件。注意到式 \eqref{eq:schrodinger} 是二元*一次*二阶偏微分方程，只含 $\Psi$ 的线性项，故任意乘以一个因子 $A$ 都是解。选取特定的 $A$ 使得式 \eqref{eq:normalization} 成立，称为**归一化（normalization）**。

!!! warning "不可归一化的情形"
    - $\Psi = 0$（平凡解）
    - $\mathrm{e}^{\mathrm{i}(kx - \omega t)}$（平面波）：积分无限大

    **不能归一化的解不能描述粒子运动**，必须舍弃！物理上可实现的态对应的薛定谔方程的解都是**平方可积（square-integrable）**的。


!!! question "如何保证 $\Psi$ 随时间演化时能保持归一化？"
    :scream: 注意到 $A$ 不能是时间的函数，不然 $A\Psi$ 就不是薛定谔方程的解了！如果不能保证归一化，整个统计诠释理论就会崩溃！

    :bulb: 薛定谔方程有很好的“特性”，它能自动保持波函数的归一化！

    ---

    ***Proof.***

    $$
    \frac{\mathrm{d}}{\mathrm{d} t} \int_{-\infty}^{+\infty} |\Psi(x,t)|^2 \, \mathrm{d} x = \int_{-\infty}^{+\infty} \frac{\partial}{\partial t} |\Psi(x,t)|^2 \, \mathrm{d} x
    $$

    代入 $|\Psi|^2 = \Psi^* \Psi$，

    $$
    \frac{\partial |\Psi|^2}{\partial t} = \frac{\partial \Psi^*}{\partial t} \Psi + \Psi^* \frac{\partial \Psi}{\partial t}.
    $$

    由薛定谔方程 \eqref{eq:schrodinger} 有

    $$
    \frac{\partial \Psi}{\partial t} = \frac{1}{\mathrm{i} \hbar} \left( -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V \Psi \right) = \frac{\mathrm{i} \hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{\mathrm{i}}{\hbar} V \Psi
    $$

    对上式取复共轭，得

    $$
    \left( \frac{\partial \Psi}{\partial t} \right)^* = \frac{\partial \Psi^*}{\partial t} = -\frac{\mathrm{i} \hbar}{2m} \frac{\partial^2 \Psi^*}{\partial x^2} + \frac{\mathrm{i}}{\hbar} V \Psi^*
    $$

    这里利用了 $(ab)^* = a^* b^*$ 和 $V^* = V$（势能是实数）的事实。

    代入 $\frac{\partial |\Psi|^2}{\partial t}$，得

    $$

    $$


## 1.5 动量

## 1.6 不确定性原理

$$
\sigma_x \sigma_p \geq \frac{\hbar}{2}
$$