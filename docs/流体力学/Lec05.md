# 涡动力学

- 旋转角速度

$$
\omega_z = \frac{1}{2} \left(\frac{\mathrm{d} \alpha}{\mathrm{d} t} - \frac{\mathrm{d} \beta}{\mathrm{d} t} \right) = \frac{1}{2} \left( \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right)
$$

$$
\boldsymbol{\omega} = \frac{1}{2} \nabla \times \mathbf{V} = \frac{1}{2} \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
u & v & w
\end{vmatrix}
$$

- 涡量（vorticity）

$$
\mathbf{\Omega} = \nabla \times \mathbf{V} = 2 \boldsymbol{\omega}
$$

!!! example "剪切流动与点涡流动"
    -   剪切流动：$u = ky, v = w = 0$

        $$\nabla \times \mathbf{V} = (0, 0, -k)$$

    -   点涡流动（irrotational vortex）：$v_r = 0, v_{\theta} = \dfrac{b}{r}$
      
        $$\nabla \times \mathbf{V} = 0 \quad (r \neq 0)$$

!!! example "点涡流动与刚体旋转流动"
    -   刚体旋转流动：$u_r = 0, u_{\theta} = \omega r/2$
        - 无粘，但不满足 Bernoulli 方程
    -   点涡流动：$v_r = 0, v_{\theta} = \dfrac{b}{r}$
        - 满足 Bernoulli 方程

## 涡线，涡面，涡管

- 涡线（vortex line）：某一时刻沿曲线各流体微团的瞬时转动轴线
    - 涡线方程
    $$\mathbf{\Omega} \times \mathrm{d}\mathbf{r} = 0$$
    - 等价形式
    $$
    \frac{\mathrm{d} x}{\Omega_x} = \frac{\mathrm{d} y}{\Omega_y} = \frac{\mathrm{d} z}{\Omega_z}
    $$
- 涡面（vortex sheet）：


## 涡通量与速度环量

- 涡通量（Vortex Flux）：涡量 $\Omega$ 在一个曲面 $S$ 上的曲面积分

$$J = \iint_S \mathbf{\Omega} \cdot \mathrm{d} \mathbf{S} = \iint_S \mathbf{\Omega} \cdot \mathbf{n} \, \mathrm{d} S$$

- 速度环量（Circulation）：速度矢量 $\boldsymbol{v}$ 在闭合曲线 $L$ 上的线积分

$$\Gamma = \oint_L \boldsymbol{v} \cdot \mathrm{d} \boldsymbol{l}$$

若 $L$ 为曲面 $S$ 的边界，则根据 Stokes 定理，有

$$J = \Gamma$$

## 涡旋的运动学性质

旋度场无散，故涡旋场是无源场：

$$\nabla \cdot \boldsymbol{\omega} = \nabla \cdot (\nabla \times \mathbf{V}) = 0$$

结合高斯公式，

$$
\begin{aligned}
    0 &= \iiint_V \nabla \cdot \boldsymbol{\omega} \, \mathrm{d} V = \iint_S \boldsymbol{\omega} \cdot \mathbf{n} \, \mathrm{d} S = \left[ \int_{\text{lower end}} + \int_{\text{upper end}} + \int_{\text{lateral surface}} \right] \boldsymbol{\omega} \cdot \mathbf{n} \, \mathrm{d} S \\
    &= -\Gamma_{\text{lower end}} + \Gamma_{\text{upper end}} + 0
\end{aligned}
$$

即涡管内的涡通量在流动中保持不变；涡量不会凭空产生或消失。

## 不可压缩均质流体的动量方程的几种形式

常用形式：

$$
\begin{aligned}
    \rho \frac{\mathrm{d} \mathbf{V}}{\mathrm{d} t} &= -\nabla p + \mu \nabla^2 \mathbf{V} + \rho \mathbf{g} \\
    \text{or} \quad \frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla) \mathbf{V} &= -\frac{1}{\rho} \nabla p + \nu \nabla^2 \mathbf{V} + \mathbf{F}
\end{aligned}
$$

使用恒等式

$$
\nabla \times (\nabla \times \mathbf{V}) = \nabla (\nabla \cdot \mathbf{V}) - \nabla^2 \mathbf{V}
$$

## 涡量方程（Vorticity Equation）

考虑粘性为常数的情况，

$$
\frac{\partial \mathbf{V}}{\partial t} 
$$



$\boldsymbol{\omega}/2$ 不仅是涡量的一半，还是单位转动惯量上的动量矩

$$
\frac{\mathrm{d} \boldsymbol{\omega}}{\mathrm{d} t} = (\boldsymbol{\omega} \cdot \nabla) \mathbf{V} - \boldsymbol{\omega}(\nabla \cdot \mathbf{V}) + \nabla \times \mathbf{F} - \nabla \times (\frac{1}{\rho} \nabla p) + \nabla \times (\nu \nabla^2 \mathbf{V}) + \frac{1}{3} \nabla \times (\nu \nabla (\nabla \cdot \mathbf{V}))
$$

- $\displaystyle (\boldsymbol{\omega} \cdot \nabla)\mathbf{V} = |\boldsymbol{\omega}| \lim_{\mathrm{PQ}\to 0}\frac{\delta \mathbf{V}}{\delta s}$
    - $\mathbf{V}_{\parallel}$：涡线的拉伸
    - $\mathbf{V}_{\perp}$：涡线的弯曲


!!! note "Kelvin Theorem"
    理想正压流体，外力有势，则{++沿任一封闭物质线的速度环量++}和{++通过任一物质面的涡通量++}在运动过程中保持不变。（William Thomson, Lord Kelvin, 1869）

    $$
    \frac{\mathrm{d} \Gamma}{\mathrm{d} t} = \frac{\mathrm{d}}{\mathrm{d} t} \oint_{L} \boldsymbol{v} \cdot \delta \boldsymbol{r} = \oint_L \frac{\mathrm{d} \boldsymbol{v}}{\mathrm{d} t} \cdot \delta \boldsymbol{r}
    $$

!!! note "Lagrangian Theorem"
    设流体理想、正压，且外力有势。如果初始时刻在某部分流体内无旋，则在以前或者以后任一时刻这部分流体皆无旋；如果初始时刻在某部分流体内有旋，则在以前或者以后任一时刻这部分流体皆有旋。
    
    “涡旋不生不灭”

!!! note "Helmholtz 第一定理"
    - 涡面保持定理：如果理想流体是正压的，且外力有势，则在某一时刻组成涡面的流体质点在以前或以后任一时刻也永远组成涡面。
    - 涡管保持定理：如果理想流体是正压的，且外力有势，则在某一时刻组成涡管的流体质点在以前或以后任一时刻也永远组成涡管。
    - 涡线保持定理（Helmholtz 第一定理）：如果理想流体是正压的，且外力有势，则在某一时刻组成涡线的流体质点在以前或以后任一时刻也永远组成涡线。

!!! note "Helmholtz 第二定理"
    涡管强度保持定理（Helmholtz 第二定理）：如果理想流体是正压的，且外力有势，则涡管的强度在流动过程中保持不变。

    在涡管面上任取一条封闭的质点线

    $$
    \frac{\mathrm{d} \Gamma}{\mathrm{d} t} = \frac{\mathrm{d}}{\mathrm{d} t} \oint_{L} \boldsymbol{V} \cdot \mathrm{d}\boldsymbol{s} = 0
    $$

    截面涡通量相同


## 涡元诱导的速度（Velocity induced by a vortex filament）

不可压缩条件下，

$$
\nabla \times \boldsymbol{\omega} = - \nabla^2 \mathbf{u}
$$

格林函数

- Biot-Savart Vortex Law

## Interaction of vortices

双涡系统

镜像法


## 涡旋的定义及显示（Vortex identification）

涡旋（vortex）至今没有明确的定义，只有涡量（vorticity）有明确的定义。

-   $\Delta$ 判据：Dallman (1983) 提出，把速度梯度张量 $\nabla \mathbf{V}$ 的特征多项式

    $$\lambda^3 + P \lambda^2 + Q \lambda + R = 0$$

    中的判别式

    $$\Delta = 27 R^2 + (4 P^3 - 18 P Q) R + (4 Q^3 - P^2 Q^2)$$

    大于零的区域称为涡，即认为局部区域存在复共轭特征值，流体微团有旋转效应。其中

    $$
    \begin{aligned}
        P &= -\mathrm{tr}(\nabla \mathbf{V}) \\
        Q &= \frac{1}{2} [(\mathrm{tr}(\nabla \mathbf{V}))^2 - \mathrm{tr}((\nabla \mathbf{V})^2)] \\
        R &= -\det(\nabla \mathbf{V})
    \end{aligned}
    $$

    - 普适性较差

-   $Q$ 判据：Hunt 等人（1988）提出，把

    $$Q = \frac{1}{2} (||\mathbf{\Omega}||^2 - ||\mathbf{E}||^2) = \frac{1}{2} \nabla^2 p > 0$$

    的区域称为涡，即认为局部区域的流体旋转效应大于剪切效应。其中 $\mathbf{E}$ 为速度梯度张量 $\nabla \mathbf{V}$ 的对称部分，$\mathbf{\Omega}$ 为反对称部分。
    
    - 只给出了 $Q > 0$，阈值的选取就比较讲究了

-   $\lambda 2$ 判据：Jeong 和 Hussain（1995）提出，把对称张量 $\mathbf{G} = \mathbf{E} \cdot \mathbf{E}^{\mathrm{T}} + \mathbf{\Omega} \cdot \mathbf{\Omega}^{\mathrm{T}}$ 的第二个特征值 $\lambda_2 < 0$ 的区域称为涡。
-   $\lambda_{\mathrm{ci}}$ 判据：Chong 等人（1990）提出，把速度梯度张量 $\nabla \mathbf{V}$ 的复共轭特征值的虚部 $\lambda_{\mathrm{ci}}$ 大于某一阈值的区域称为涡。

| 判据名称 | 类型 | 核心思想 | 优点 | 缺点 |
| :----: | :----: | :----: | :----: | :----: |
| 涡量 $\boldsymbol{\omega}$ | 