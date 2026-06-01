# 第五章 晶体中电子在电磁场中的运动

## 5.1 准经典运动

> 封闭系统中 Schrödinger 方程的解肯定是波，没有粒子。但如果考虑开放系统环境的影响，就会有波包的形成，粒子性就体现出来了。

### 波包和电子速度

-   由于晶体中的各种噪音（声子的热激发等），能带 $E(\vec{k})$ 中每个能级有一个**展宽**，相应的波矢 $\vec{k}$ 有一定的分布范围 $\Delta \vec{k}$.
-   理想情形下电子的布洛赫波变成{++一系列布洛赫波的叠加++}[^1]，因此形成波包
    [^1]: 所有系数都一样的解，就是能量最低的解。这是老师自己的见解，“别人都不讲，他们还没那个体会” ![](../../images/tieba/cool.png)
-   根据测不准原理，$\Delta \vec{r} \Delta \vec{k} \sim 1$. 故{==展宽越大，波包越小（粒子性）==}，反之亦然。

考虑含时 Schrödinger 方程

$$
\left[ -\frac{\hbar^2}{2m} \nabla^2 + V(\vec{r}) \right] \psi = \mathrm{i} \hbar \frac{\partial \psi}{\partial t}
$$

在 $\vec{k}_0$ 附近展开：$E(\vec{k}') = E(\vec{k}_0) + \left. \frac{\partial E}{\partial \vec{k}} \right|_{\vec{k} = \vec{k}_0} \cdot (\vec{k}' - \vec{k}_0)$

叠加

$$
\Psi(\vec{r}, t) = \int d 
$$

积分得

$$
\big|\psi(\vec{r}, t)\big|^2 = |u_{k_0}(\vec{r})|^2 \left| \frac{\sin \pi \Delta u}{\pi \Delta u} \right|^2 \left| \frac{\sin \pi \Delta v}{\pi \Delta v} \right|^2 \left| \frac{\sin \pi \Delta w}{\pi \Delta w} \right|^2 \Delta^6
$$

-   波包中心在 $u = v = w = 0$ 处，即波包中心的位置

    $$
    \vec{r} = \frac{1}{\hbar} \left( \nabla_{\vec{k}} E \right)_{\vec{k} = \vec{k}_0} t \equiv \vec{v}_{k_0} t
    $$

-   波包尺寸不能太小


### 准动量

我们已经从波函数过渡到了准粒子，所以使用牛顿力学。外力 $\vec{F}$ 作用在电子上，在 $dt$ 时间内所做的功：

$$
\begin{aligned}
    \vec{F} \cdot \vec{v}_k dt &= dE \quad \text{(功能原理：做功导致能量变化)} \\
    &= (\nabla_{\vec{k}} E) \cdot d\vec{k} = \hbar \vec{v}_k \cdot d\vec{k} \\
    &\implies \left( \vec{F} - \hbar \frac{d\vec{k}}{dt} \right) \cdot \vec{v}_k dt = 0
\end{aligned}
$$

因为 $\vec{v}_k$ 方向任取，所以有

$$
\vec{F} = \frac{d}{dt} (\hbar \vec{k})
$$

因此 $\hbar \vec{k}$ 可视作电子的**准动量**（quasi-momentum）。

-   $\vec{v}_k$ 为电子（波包）在实空间的速度
-   $\frac{d \vec{k}}{d t}$ 为电子在 $\vec{k}$ 空间的速度

在恒定电场 $\vec{E}$ 下，$\vec{F} = e \vec{E}$，因此 $\frac{d \vec{k}}{d t} = - \frac{e \vec{E}}{\hbar}$ 恒定，电子在 $\vec{k}$ 空间以恒定速度运动。

### 有效质量

晶体中电子准经典运动的基本关系式：

$$
\left \{
    \begin{aligned}
        & \vec{v} = \frac{1}{\hbar} \nabla_{\vec{k}} E(\vec{k}) \\
        & \frac{d (\hbar \vec{k})}{dt} = \vec{F}
    \end{aligned}
\right.
$$

加速度

$$
\begin{aligned}
    \frac{d v_\alpha}{d t} &= \frac{d}{d t} \left( \frac{1}{\hbar} \frac{\partial E}{\partial k_\alpha} \right) = \frac{1}{\hbar} \sum_{\beta} \frac{d k_\beta}{d t} \frac{\partial^2 E}{\partial k_\alpha \partial k_\beta} \\
    &= \frac{1}{\hbar^2} \sum_{\beta} F_\beta \left( \frac{\partial^2 E}{\partial k_\alpha \partial k_\beta} \right)
\end{aligned}
$$

因此

$$
\begin{equation}
    \begin{pmatrix}
        \dot{v}_x \\
        \dot{v}_y \\
        \dot{v}_z
    \end{pmatrix} = \frac{1}{\hbar^2} \begin{pmatrix}
        \frac{\partial^2 E}{\partial k_x^2} & \frac{\partial^2 E}{\partial k_x \partial k_y} & \frac{\partial^2 E}{\partial k_x \partial k_z} \\
        \frac{\partial^2 E}{\partial k_y \partial k_x} & \frac{\partial^2 E}{\partial k_y^2} & \frac{\partial^2 E}{\partial k_y \partial k_z} \\
        \frac{\partial^2 E}{\partial k_z \partial k_x} & \frac{\partial^2 E}{\partial k_z \partial k_y} & \frac{\partial^2 E}{\partial k_z^2}
    \end{pmatrix} \begin{pmatrix}
        F_x \\
        F_y \\
        F_z
    \end{pmatrix}
\end{equation}
$$

中间的矩阵为**倒有效质量张量**（effective mass tensor）。若 $k_x, k_y, k_z$ 为主轴，则倒有效质量张量为对角矩阵

!!! example "例：SC 晶体金属附近四下的 $S$ 能带"
    $$
    E^s(\vec{k}) = 
    $$


    1.  能带底 $\vec{k} = (0,0,0)$，各向同性
        
        $$
        m_x^* = m_y^* = m_z^* = \frac{\hbar^2}{2 a^2 J_1} > 0
        $$
    
    2.  能带顶 $\vec{k} = (\pm \pi/a, \pm \pi/a, \pm \pi/a)$，各向同性

        $$
        m_x^* = m_y^* = m_z^* = - \frac{\hbar^2}{2 a^2 J_1} < 0
        $$

    3.  $X$ 点（或 $M$ 点）$\vec{k} = (\pi/a, 0, 0)$，为 van Hove 奇点，各向异性
    
        $$
        m_x^* = - \frac{\hbar^2}{2 a^2 J_1} < 0, \quad m_y^* = m_z^* = \frac{\hbar^2}{2 a^2 J_1} > 0
        $$
    
    周期场中的电子（波矢展宽后）为准粒子，有效质量 $m^*$ 会比自由电子的质量 $m$ 小，甚至可以为负数。

> :thinking: 物理学家通常避开 van Hove 奇点做实验，因为数据会非常不稳定。

## 5.2 恒定电场作用下电子的运动

> 准确地说，是电子作为准粒子的行为

以一维紧束缚近似下的能带为例：

$$
E(k) = \varepsilon_i - J_0 - 2 J_1 \cos(k a), \quad J_1 > 0
$$

电子速度

$$
v(k) = \frac{1}{\hbar} \frac{d E(k)}{d k} = \frac{2 J_1 a}{\hbar} \sin(k a)
$$

有效质量

$$
m^*(k) = \hbar^2 \left( \frac{d^2 E(k)}{d k^2} \right)^{-1} = \frac{\hbar^2}{2 J_1 a^2 \cos(k a)}
$$

> van Hove 奇点：有效质量 $m^* \to \infty$

在 $k$ 空间匀速的循环运动

> 默认前提：电场很弱，不改变原有的能带结构

恒定电场 $\vec{E} = - E \hat{x}$，电场力 $\vec{F} = - e \vec{E}$，电子在 $k$ 空间的速度 $\frac{d \vec{k}}{d t} = - \frac{e \vec{E}}{\hbar}$ 恒定。因为存在带隙，对于电子来说相当于势垒，所以电子运动到布里渊区边界时会被反射回来，形成**布洛赫振荡**（Bloch oscillation）。

振荡圆频率

$$
\omega = \frac{2 \pi}{T} = \frac{2 \pi}{\frac{2 \pi/a}{eE / \hbar}} = \frac{e E a}{\hbar}
$$

为了至少能看到好几个振荡周期，要求：$\omega \tau \gg 1$，其中 $\tau$ 是电子的平均自由时间。

取 $a \sim 3$ Å，$\tau \sim 10^{-13}$ s，得到 $E \gg 10^5$ V/m。这已经改变了能带结构！所以在真实的电场中是看不到布洛赫振荡的。


## 5.3 导体、绝缘体和半导体

### 满带电子不导电

#### 无电磁场

能带反演对称 $E_n(\vec{k}) = E_n(-\vec{k})$. 因为 $v(\vec{k}) = \frac{1}{\hbar} \nabla_{\vec{k}} E(\vec{k})$，所以 $v(\vec{k}) = - v(-\vec{k})$. 即同一能带中，$\pm \vec{k}$ 态具有相反的实空间速度。


#### 加电磁场


### 导体和非导体的模型

1.  导体：导带被电子部分填充
    -   无电场时，$E_F$ 以下的 $\vec{k}$ 和 $-\vec{k}$ 态被电子填充，无净电流。
    -   外加电场改变对称分布[^2]，有 $-\vec{k}$ 态未被填充，对应的被电子填充的 $\vec{k}$ 态产生净电流。

    [^2]: 因为 $$d(\hbar k) / dt = F = e E$$ 可以解得 $$k(t) = k_0 + \frac{e E}{\hbar} t$$外加电场导致 $\pm \vec{k}$ 的大小不一样了，破坏了对称分布。

    -   近满带和空穴

        $$
        \frac{d \vec{I}(\vec{k})}{d t} = \frac{e^2}{m^*}
        $$

## 5.4 在恒定磁场中电子的运动

基本方程

$$
\left \{
    \begin{aligned}
        & \vec{v} = \frac{1}{\hbar} \nabla_{\vec{k}} E(\vec{k}) \\
        & \frac{d (\hbar \vec{k})}{dt} = \vec{F} = - e \vec{v}(\vec{k}) \times \vec{B}
    \end{aligned}
\right.
$$

第二式说明 $\frac{d \vec{k}}{dt} \perp \vec{B}$，即平行于磁场的波矢分量 $\frac{d k_\parallel}{d t} = 0 \implies k_\parallel = \text{const.}$

:point_right: 电子在 $\vec{k}$ 空间的运动轨迹为{++垂直磁场的平面与等能面的交线++}。

-   磁场作用下自由电子在 $\vec{k}$ 空间运动的轨迹
    -   在 $k_x$-$k_y$ 面内做匀速圆周运动，回转圆频率 $\omega_0 = \frac{e B}{m}$.
-   实空间运动轨迹
    -   沿着磁场的方向做匀速的螺旋运动，回转圆频率 $\omega_0 = \frac{e B}{m}$.


磁场足够大，能够改变能带结构的时候，电子在 $\vec{k}$ 空间的运动轨迹不再是圆，而是**等能线**


### 磁场下自由电子的量子理论

无磁场时，自由电子的哈密顿量为

$$
H = \frac{\vec{p}^2}{2 m} = \frac{\hbar^2}{2 m} \nabla^2
$$

磁场下，自由电子的哈密顿量为

$$
H = \frac{1}{2 m} (\vec{p} + e \vec{A})^2
$$

设磁场沿 $z$ 方向，即 $\vec{B} = (0, 0, B)$，则矢势可取 $\vec{A} = (-\frac{1}{2} B y, \frac{1}{2} B x, 0)$

朗道能级

> 量子霍尔效应
>
> 拓扑态

### 晶体中电子的有效质量近似

:thinking: 严格求解波动方程是及其困难的。无磁场时，晶体的波函数为布洛赫波；有磁场时，波函数是什么样的形式？

**有效质量近似**：在有些情况下（迁移率高的电子气）

## 5.5 回旋共振

经典和量子理论都对应相同的回旋频率 $\omega_0 = \frac{e B}{m}$. 外加电场 $E(t)$ 时，电子感受到电势 $U(\vec{r},t) = -e \vec{E}(t) \cdot \vec{r}$. 这使得电子在朗道能级之间实现跃迁（电偶极跃迁），


每个朗道能级的简并度都一样

$$
\begin{equation} \tag{5.6} \label{eq:landau_level_degeneracy}
    D = \frac{e B L^2}{\pi \hbar}
\end{equation}
$$




## 5.6 de Haas-van Alphen 效应

电子系统随磁场的变化

磁场逐步变小可使第 $n, n+1, n+2, \ldots$ 个朗道能级恰好被电子占满，系统能量为极小

设每个朗道能级的简并度是一样的，为 $D$，则 $n D = N$，$(n+1) D = N$，$(n+2) D = N, \ldots$

结合 \eqref{eq:landau_level_degeneracy} 式，得到

$$
\frac{1}{B} = \frac{n \pi \hbar}{e L^2 N}
$$