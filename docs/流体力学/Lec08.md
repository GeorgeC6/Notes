# 湍流理论

> 湍流无处不在
>
> - 风卷云涌、火山喷发、木星大红斑
> - 几乎所有的宏观工程应用场景

!!! info "Osborne Reynolds（1842-1912）"
    德国力学家、物理学家、工程师。

    1. 引入表征流体惯性力和粘性力之比的一个量纲为 1 的数，后人称之为雷诺数。
    2. 发现流动的相似律
    3. 研究管道流动的稳定性，发现层流到湍流的转变规律
    4. 雷诺平均的引入

!!! quote "Quotes"
    问上帝两个问题

    *湍流是经典物理中最后一个未解决的且重要的问题*。<div align="right"> —— Richard P. Feynman</div>

## Flow States

Three regimes of viscous flow:

- Laminar Flow（层流）
- Transition（转捩）
- Turbulent Flow（湍流）

## 什么是湍流？

类似于涡，湍流没有准确的定义。

- 首先，肯定不是层流 ![](../images/tieba/hehe.png)
- Irregularity
- Diffusivity
- Large Reynolds Numbers
    - Turbulent flows {++always++} have high Reynolds numbers
    - 唯象学
- Three-dimensional vorticity fluctuations
- Continuum
- Dissipation and Cascade

!!! quote 
    <center>

    Big whirls have little whirls,

    that feed on their velocity.

    Little whirls have lesser whirls,

    and so on to viscosity.

    </center>

    <div align="right"> —— Lewis Fry Richardson </div>

- Turbulent flows are flows
    - 是流动状态而非物质属性
- unsteady

!!! info "Theodore von Kármán (1881-1963)"
    匈牙利裔美国空气动力学家、机械工程师、物理学家。

    - 1908, Universität Göttingen, PhD
    - 1912

!!! info "Geoffrey Ingram Taylor (1886-1975)"
    英国力学家。

    1. 阐明激波内部结构（1910）；对大气湍流和湍流扩散


!!! info "Lewis Fry Richardson (1881-1953)"
    

!!! info "Andrei Nikolaevich Kolmogorov (1903-1987)"
    苏联数学家、力学家。
    他对湍流统计理论的贡献至今无人能够推进。

!!! info "周培源（1902-1993）"
    中国著名力学家

    湍流模式理论

## 统计平均方法

### 时间平均法

在湍流场中某一点 $x$ 处，测量流动物理量 $u$ 随时间的变化，其时均值的定义为

$$
\bar{u}(\boldsymbol{x}; T, t_0) = \frac{1}{T} \int_{t_0}^{t_0 + T} u(\boldsymbol{x}, t) \, \mathrm{d} t
$$

其中，$T$ 为实行平均运算的时间区间（远大于物理量高频脉动周期），$t_0$ 为该区间的起点。

如果平均值于参考时刻 $t_0$ 无关，

$$
\bar{u}(\boldsymbol{x}) = \frac{1}{T} \int_{t_0}^{t_0 + T} u(\boldsymbol{x}, t) \, \mathrm{d} t
$$

### 空间平均法

在管道轴线上取长度为 $L$ 的一段，

$$
\tilde{u}(t; x_0, L) = \frac{1}{L} \int_{x_0}^{x_0 + L} u(x, t) \, \mathrm{d} x
$$

如果空间平均值 $\tilde{u}$ 与参考位置 $x_0$ 无关，

$$
\tilde{u}(t) = \frac{1}{L} \int_{x_0}^{x_0 + L} u(x, t) \, \mathrm{d} x
$$


### 系综平均法

对于某一种湍流流动，在实验室中采用相同的实验条件做大量的实验，在每一个实验中在同一位置和相应时刻测出相应物理量 $q$ 的值，将所有数值做算术平均，得到系综平均值 $\braket{q}$.

$$
\braket{q}(\boldsymbol{x}, t) = \frac{1}{N} \sum_{n=1}^N q^{(i)} (\boldsymbol{x}, t)
$$

但是实验又昂贵又耗时！经常用时间平均和空间平均来代替系综平均，而这么做的依据是**各态遍历性假设（ergodic hypothesis）**.

!!! info "各态遍历性假设"
    如果在多次实验中，一个随机变量出现的所有可能状态能够在一次实验的相当长的时间或相当大的空间范围内以相同的概率出现，则称之为各态遍历的。

    在各态遍历假设下，时间平均值、空间平均值和系综平均值三者是等价的：

    $$
    \bar{u}(\boldsymbol{x}) = \tilde{u}(t) = \braket{u}(\boldsymbol{x}, t)
    $$

    这一观点受到挑战。

    > Multiple states in turbulence（多湍流态）
    > 
    > 迟滞现象


### 平均运算（Reynolds decomposition）

将流动物理量 $q$ 进行分解

$$
q = \braket{q} + q'
$$

其中 $q'$ 为流动物理量的脉动值。有如下性质

- $\braket{q'} = 0$
- $\braket{\braket{q}} = \braket{q}$
- $\braket{q \, \braket{p}} = \braket{q} \, \braket{p}$
- 求导算符和平均算符可以互换位置：$\braket{\frac{\partial q}{\partial t}} = \frac{\partial \braket{q}}{\partial t}$

## 雷诺方程

不可压缩牛顿流体的流动满足 N-S 方程和连续性方程：

$$
\begin{align}
    & \frac{\partial u_i}{\partial t} + u_j \frac{\partial u_i}{\partial x_j} = -\frac{1}{\rho} \frac{\partial p}{\partial x_i} + \nu \frac{\partial^2 u_i}{\partial x_j \partial x_j} + f_i \tag{1}\\
    & \frac{\partial u_j}{\partial x_j} = 0 \tag{2}
\end{align}
$$

对上述方程做平均，得到

$$
\begin{align}
    & \frac{\partial \braket{u_i}}{\partial t} + \braket{u_j \frac{\partial u_i}{\partial x_j}} = -\frac{1}{\rho} \frac{\partial \braket{p}}{\partial x_i} + \nu \frac{\partial^2 \braket{u_i}}{\partial x_j \partial x_j} - \frac{\partial \braket{u_i' u_j'}}{\partial x_j} + \braket{f_i} \\
    & \frac{\partial \braket{u_j}}{\partial x_j} = 0
\end{align}
$$

对于非线性项，

$$
\begin{aligned}
    \braket{u_j \frac{\partial u_i}{\partial x_j}} &= \braket{\frac{\partial u_i u_j}{\partial x_j} - \cancel{u_i \frac{\partial u_j}{\partial x_j}}} = \frac{\partial \braket{u_i u_j}}{\partial x_j} \\
    &= \frac{\partial \braket{(\braket{u_i} + u_i')(\braket{u_j} + u_j')}}{\partial x_j} \\
    &= \frac{\partial}{\partial x_j} \Big( \braket{u_i} \braket{u_j} + \cancel{\braket{u_i'} u_j' + \braket{u_j'} u_i'} + \underset{一般不为 \, 0 \; (!)}{\underbrace{\textcolor{tomato}{\braket{u_i' u_j'}}}} \Big) \\
    &= 
\end{aligned}
$$



得到雷诺平均动量方程：

$$
\begin{equation} \label{eq:reynolds-avg-momentum} \tag{3}
    \frac{\partial \braket{u_i}}{\partial t} + \braket{u_j} \frac{\partial \braket{u_i}}{\partial x_j} = -\frac{1}{\rho} \frac{\partial \braket{p}}{\partial x_i} + \nu \frac{\partial^2 \braket{u_i}}{\partial x_j \partial x_j} - \frac{\partial \braket{u_i' u_j'}}{\partial x_j} + \braket{f_i}
\end{equation}
$$












### Kolmogorov's Turbulent Theory

- {++Kolmogorov's hypothesis of local isotropy++}: At sufficiently high Reynolds numbers, the small-scale turbulent motions ($l \ll l_0$) are **statistically isotropic**.
- {++Kolmogorov's first similarity hypothesis++}: In every turbulent flow at sufficiently high Reynolds number, the statistics of the small-scale motions ($l \ll l_{\mathrm{EI}}$) have a universal form that is **uniquely determined by the kinematic viscosity $\nu$ and the rate of dissipation of turbulent kinetic energy per unit mass $\varepsilon$（湍流耗散率）**.
- {++Kolmogorov's second similarity hypothesis++}: In every turbulent flow at sufficiently high Reynolds number, the statistics of the motions of scale $l$ in the range $\eta \ll l \ll l_0$ have a universal form that is **uniquely determined by $\varepsilon$, independent of $\nu$**.

在惯性子区，湍流统计量只依赖于湍流耗散率 $\varepsilon$，与流体粘性无关。

根据量纲分析，能谱的唯一可能形式是 $\boxed{E(k) \propto \varepsilon^{2/3} k^{-5/3}}$