# 流体运动学

## 拉格朗日描述

**质点系法**：把流体看作

### 位置矢量 - 流体质点的运动方程

设某一流体质点在 $t = t_0$ 时刻占据起始坐标 $(a,b,c)$，任意时刻 $t$ 该质点运动到空间坐标 $(x,y,z)$，则

- 流体质点的速度 $\mathbf{V} = u \mathbf{i} + v \mathbf{j} + w \mathbf{k}$

$$
\left \{
\begin{aligned}
    u &= \frac{\mathrm{d}x}{\mathrm{d}t} \\
    v &= \frac{\mathrm{d}y}{\mathrm{d}t} \\
    w &= \frac{\mathrm{d}z}{\mathrm{d}t}
\end{aligned}
\right.
$$

!!! danger "问题"
    1. 每个质点运动规律不同，难以跟踪
    2. 数学上存在难以克服的困难
    3. 实际上，不需要知道每个质点的运动情况

    :thumbsdown: 工程上不采用

## 欧拉描述

**流场法**：考察空间每一点上的物理量及其变化。研究流体质点在通过某一空间点时流动参数随时间的变化规律。也称为空间点法。

- 物理量在空间有一个分布，可随时间变化
- 场描述

流体质点在任意时刻 $t$ 通过**固定空间点** $(x,y,z)$ 时


:exclamation: 欧拉描述不能给出位移信息

## 拉格朗日描述与欧拉描述的关系

在某一时刻 $t$，流体质点 $(a,b,c)$ 到达某一空间点 $(x,y,z)$，

### Lagrange $\to$ Euler

Lagrange 位移关系：$\mathbf{r} = \mathbf{r}(a,b,c,t)$

$$
\left \{
\begin{aligned}
    x &= x(a,b,c;t) \\
    y &= y(a,b,c;t) \\
    z &= z(a,b,c;t)
\end{aligned}
\right. \xrightarrow{\text{反解坐标关系}} 
\left \{
\begin{aligned}
    a &= a(x,y,z;t) \\
    b &= b(x,y,z;t) \\
    c &= c(x,y,z;t)
\end{aligned}
\right.
$$

!!! example "例子"
    已知拉格朗日描述

    $$
    \left \{
    \begin{aligned}
        x &= a e^{t} \\
        y &= b e^{-t} \\
    \end{aligned}
    \right.
    $$

    求速度的欧拉描述。

    ---

    解：

    $$
    \left \{
    \begin{aligned}
        u &= \frac{\partial x}{\partial t} = a e^{t} \\
        v &= \frac{\partial y}{\partial t} = -b e^{-t}
    \end{aligned}
    \right.
    $$

    反解坐标关系：

    $$
    \left \{
    \begin{aligned}
        a &= x e^{-t} \\
        b &= y e^{t} \\
    \end{aligned}
    \right.
    $$

    代入上式得

    $$
    \left \{
    \begin{aligned}
        u &= x \\
        v &= -y
    \end{aligned}
    \right.
    $$


### Euler $\to$ Lagrange

Euler 描述无位移关系，需先由 Euler 速度表达式，通过积分求得质点的位移函数。

!!! example "例子"
    已知欧拉描述

    $$
    \left \{
    \begin{aligned}
        u &= x \\
        v &= -y
    \end{aligned}
    \right.
    $$

    和初始条件 $x = a, y = b$。求速度的拉格朗日描述。

    ---

    解：

    $$
    \left \{
    \begin{aligned}
        \frac{\mathrm{d}x}{\mathrm{d}t} &= u = x \\
        \frac{\mathrm{d}y}{\mathrm{d}t} &= v = -y
    \end{aligned}
    \right. \implies 
    \left \{
    \begin{aligned}
        x &= C_1 e^{t} \\
        y &= C_2 e^{-t}
    \end{aligned}
    \right.
    $$

    由初始条件 $x = a, y = b$ 可得 $C_1 = a, C_2 = b$. 故

    $$
    \left \{
    \begin{aligned}
        x &= a e^{t} \\
        y &= b e^{-t}
    \end{aligned}
    \right.
    $$

| Lagrangian 描述 | Eulerian 描述 |
| :---: | :---: |
| 描述物理量的**随体**变化 | 描述物理量的**随点**变化 |


Euler 描述中质点加速度的推导

定义流速场 $V = V(x,y,z;t)$


$$
\begin{aligned}
    \frac{\mathrm{D} \vec{V}}{\mathrm{D} t} &= \lim_{\Delta t \to 0} \frac{\vec{V}(M', t + \Delta t) - \vec{V}(M, t)}{\Delta t} \\
    &= \underset{\text{场的非定常性}}{\boxed{\lim_{\Delta t \to 0} \frac{\vec{V}(M', t + \Delta t) - \vec{V}(M', t)}{\Delta t}}} + \textcolor{tomato}{\underset{\text{场的不均匀性}}{\boxed{\lim_{\Delta t \to 0} \frac{\vec{V}(M', t) - \vec{V}(M, t)}{\Delta t}}}} \\
\end{aligned}
$$

时变加速度+位变加速度


## 全导数、物质导数

$$
\mathbf{a} = \frac{\mathrm{d}\mathbf{V}}{\mathrm{d}t} = \mathbf{i} \frac{\mathrm{d}u}{\mathrm{d}t} + \mathbf{j} \frac{\mathrm{d}v}{\mathrm{d}t} + \mathbf{k} \frac{\mathrm{d}w}{\mathrm{d}t}
$$

$$
\begin{aligned}
    \frac{\mathrm{d}u(x,y,z;t)}{\mathrm{d}t} &= \frac{\partial u}{\partial t} + \frac{\partial u}{\partial x} \frac{\mathrm{d}x}{\mathrm{d}t} + \frac{\partial u}{\partial y} \frac{\mathrm{d}y}{\mathrm{d}t} + \frac{\partial u}{\partial z} \frac{\mathrm{d}z}{\mathrm{d}t} \\
    &= \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} \\
    &= \frac{\partial u}{\partial t} + (\mathbf{V} \cdot \nabla) u
\end{aligned}
$$

## 迹线（Pathline）

迹线是指{++同一流体质点++}不同时刻流经的空间轨迹，即流体质点的运动轨迹。显然，这是由 Lagrange 描述引出的概念。

$$
\frac{\mathrm{d}x}{u(x,y,z;t)} = \frac{\mathrm{d}y}{v(x,y,z;t)} = \frac{\mathrm{d}z}{w(x,y,z;t)} = \mathrm{d}t
$$

求解出 $x(t), y(t), z(t)$ 即可

## 流线（Streamline）

流线是流场中任一时刻的一条几何曲线，{++其上各点的切线方向与该点的流速方向相同++}。流线是由 Euler 描述引出的概念。

$$
\frac{\mathrm{d}x}{u(x,y,z;t)} = \frac{\mathrm{d}y}{v(x,y,z;t)} = \frac{\mathrm{d}z}{w(x,y,z;t)}
$$

## 流管、流束



- 过流断面（cross-section）：管道中垂直于流动方向的横截面
- 流量（flow rate）：单位时间内通过某一流断面的流体数量，可用体积或质量表示

$$
\begin{aligned}
    Q_V &= \iint_A \mathbf{V} \cdot \mathbf{n} \, \mathrm{d}A \\
    Q_m &= \dot{m} = \iint_A \rho (\mathbf{V} \cdot \mathbf{n}) \, \mathrm{d}A
\end{aligned}
$$

- 断面平均流速：假设流速在断面上均匀分布，则有 $\bar{V} = Q_V / A$

!!! tip "迹线与流线的比较"
    - 在定常流动中，迹线与流线重合
    - 在非定常流动中，迹线与流线不重合

## 脉线（Streakline）

脉线是指相继通过某一空间点的流体质点连成的曲线。

> 空间某一点有染色标记物/燃料源/烟雾源等，流体质点通过该点时被染色/携带烟粒，形成的曲线即为脉线。

- 示踪粒子
    - 气体流动：烟雾、水汽（跟随性好）
    - 液体流动：染料

## 流体微元的运动

流体微元：由大量流体质点组成的具有线性尺度效应的微小流体团

- 刚体运动：平动 + 转动
- 流体微元运动：**平动 + 变形（线变形、角变形）+ 旋转**

### 变形

#### 线变形

以平面流场为例，设速度分量 $u$ 沿 $y$ 方向不变，$v$ 沿 $x$ 方向不变。对于小微元 $\delta x \delta y$，在 $\Delta t$ 时间内，$x$ 方向的（单位长度）边长变化为

$$
\frac{\left(u + \dfrac{\partial u}{\partial x} \delta x\right) \Delta t - u \Delta t}{\delta x \Delta t} = \frac{\partial u}{\partial x}
$$

故得线应变 $\varepsilon_{xx} = \frac{\partial u}{\partial x}$. 同理，$\varepsilon_{yy} = \frac{\partial v}{\partial y}$.

**体积应变速率**：

$$
\lim_{\Delta \tau \to 0} \frac{\Delta V / V}{\Delta \tau} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = \nabla \cdot \mathbf{V}
$$

#### 角变形

$$
\mathrm{d} \alpha = \lim_{\delta x \to 0} \frac{\frac{\partial v}{\partial x} \delta x \Delta t + \frac{\partial u}{\partial y} \delta y \Delta t}{\delta x} = \left(\frac{\partial v}{\partial x} + \frac{\partial u}{\partial y}\right) \Delta t
$$

!!! note "Helmholtz 速度分解"
    $Q$ 点是 $P$ 点邻近的一个点，

    $$ \mathbf{V}(Q, t) = \mathbf{V}(P, t) + \frac{\partial \mathbf{V}}{\partial x} \delta x + \frac{\partial \mathbf{V}}{\partial y} \delta y + \frac{\partial \mathbf{V}}{\partial z} \delta z $$

    矩阵形式：

    $$
    \delta \mathbf{V} = \begin{bmatrix}
        \delta u \\ \delta v \\ \delta w
    \end{bmatrix} = \begin{bmatrix}
        \dfrac{\partial u}{\partial x} & \dfrac{\partial u}{\partial y} & \dfrac{\partial u}{\partial z} \\
        \dfrac{\partial v}{\partial x} & \dfrac{\partial v}{\partial y} & \dfrac{\partial v}{\partial z} \\
        \dfrac{\partial w}{\partial x} & \dfrac{\partial w}{\partial y} & \dfrac{\partial w}{\partial z}
    \end{bmatrix} \begin{bmatrix}
        \delta x \\ \delta y \\ \delta z
    \end{bmatrix}
    $$

    $$
    \begin{bmatrix}
        \dfrac{\partial u}{\partial x} & \dfrac{\partial u}{\partial y} & \dfrac{\partial u}{\partial z} \\
        \dfrac{\partial v}{\partial x} & \dfrac{\partial v}{\partial y} & \dfrac{\partial v}{\partial z} \\
        \dfrac{\partial w}{\partial x} & \dfrac{\partial w}{\partial y} & \dfrac{\partial w}{\partial z}
    \end{bmatrix} = \begin{bmatrix}
        \dfrac{\partial u}{\partial x} & \dfrac{1}{2}\left(\dfrac{\partial u}{\partial y} + \dfrac{\partial v}{\partial x}\right) & \dfrac{1}{2}\left(\dfrac{\partial u}{\partial z} + \dfrac{\partial w}{\partial x}\right) \\
        \dfrac{1}{2}\left(\dfrac{\partial v}{\partial x} + \dfrac{\partial u}{\partial y}\right) & \dfrac{\partial v}{\partial y} & \dfrac{1}{2}\left(\dfrac{\partial v}{\partial z} + \dfrac{\partial w}{\partial y}\right) \\
        \dfrac{1}{2}\left(\dfrac{\partial w}{\partial x} + \dfrac{\partial u}{\partial z}\right) & \dfrac{1}{2}\left(\dfrac{\partial w}{\partial y} + \dfrac{\partial v}{\partial z}\right) & \dfrac{\partial w}{\partial z}
    \end{bmatrix} + \begin{bmatrix}
        0 & \dfrac{1}{2}\left(\dfrac{\partial u}{\partial y} - \dfrac{\partial v}{\partial x}\right) & \dfrac{1}{2}\left(\dfrac{\partial u}{\partial z} - \dfrac{\partial w}{\partial x}\right) \\
        \dfrac{1}{2}\left(\dfrac{\partial v}{\partial x} - \dfrac{\partial u}{\partial y}\right) & 0 & \dfrac{1}{2}\left(\dfrac{\partial v}{\partial z} - \dfrac{\partial w}{\partial y}\right) \\
        \dfrac{1}{2}\left(\dfrac{\partial w}{\partial x} - \dfrac{\partial u}{\partial z}\right) & \dfrac{1}{2}\left(\dfrac{\partial w}{\partial y} - \dfrac{\partial v}{\partial z}\right) & 0
    \end{bmatrix} = \mathbf{S} + \mathbf{\Omega}
    $$

涡量及涡量场描述

$$
\mathbf{\Omega} = \nabla \times \mathbf{V} = 2 \boldsymbol{\omega}
$$

表示流体微元的旋转

- 涡线：曲线上任意点的切线方向与该点涡量方向一致的假想曲线
    - 涡线方程
    $$\mathbf{\Omega} \times \mathrm{d}\mathbf{r} = 0$$
    - 等价形式
    $$\frac{\mathrm{d}x}{\Omega_x} = \frac{\mathrm{d}y}{\Omega_y} = \frac{\mathrm{d}z}{\Omega_z}$$