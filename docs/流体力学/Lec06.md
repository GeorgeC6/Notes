# 粘性层流精确解

理想流体：忽略粘性力

## 为什么研究粘性流？

Coanda effect: 流体（水流或气流）偏离原本的直线路径，转而沿着一个曲面流动的现象。

## 粘性流的一般属性

### 有旋性

一般情况下，有粘必有旋（除了点涡的情况）。

### 耗散性

动量方程

$$
\frac{\partial u_i}{\partial t} + u_j \frac{\partial u_i}{\partial x_j} = - \frac{1}{\rho} \frac{\partial p}{\partial x_i} + \nu \frac{\partial^2 u_i}{\partial x_j^2}
$$

动能为 $E_k = \frac{1}{2} \rho u_i u_i$，上式乘以 $u_i$

$$
u_i \frac{\partial u_i}{\partial t} + u_i u_j \frac{\partial u_i}{\partial x_j} = - \frac{1}{\rho} u_i \frac{\partial p}{\partial x_i} + \nu u_i \frac{\partial^2 u_i}{\partial x_j^2}
$$

- $u_i \dfrac{\partial u_i}{\partial t} = \dfrac{\partial (\frac{1}{2} u_i^2)}{\partial t}$
- $u_i u_j \dfrac{\partial u_i}{\partial x_j} = u_j \dfrac{\partial (\frac{1}{2} u_i^2)}{\partial x_j}$
- $u_i \dfrac{\partial^2 u_i}{\partial x_j^2} 



### 涡旋的扩散性


## NS-方程（不可压）

$$
\begin{aligned}
    \frac{\partial u_i}{\partial t} + u_k \frac{\partial u_i}{\partial x_k} &= - \frac{1}{\rho} \frac{\partial p}{\partial x_i} + \nu \frac{\partial^2 u_i}{\partial x_k^2} \\
    \frac{\partial u_k}{\partial x_k} &= 0
\end{aligned}
$$

- 对流项（惯性项）是非线性的：$u_k \dfrac{\partial u_i}{\partial x_k}$
- 理想不可压问题中，流动很多时候是无旋的，方程可以转化为线性的拉普拉斯方程！
- 粘性流动中，流动一般是有旋的，不存在速度势

求解：

- 精确解：在某些问题中，非线性的惯性项等于0或者形式非常简单，此时方程可以简化，得到简化条件下的精确解
- 近似解
    - 小 $\mathrm{Re}$：粘性力主导，可以全部或部分忽略非线性项
    - 大 $\mathrm{Re}$：边界层问题（不能全部忽略粘性项！）

### 平行层流

在笛卡尔坐标系下，假设 $v = w = 0$.

连续性方程

$$
\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 \implies \frac{\partial u}{\partial x} = 0
$$

动量方程

$$
\left \{
\begin{aligned}
    \frac{\partial u}{\partial t} + u \cancel{\frac{\partial u}{\partial x}} + \cancel{v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}} &= - \frac{1}{\rho} \frac{\partial p}{\partial x} + \nu \left( \cancel{\frac{\partial^2 u}{\partial x^2}} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} \right) \\
    \cancel{\frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z}} &= - \frac{1}{\rho} \frac{\partial p}{\partial y} + \cancel{\nu \left( \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} + \frac{\partial^2 v}{\partial z^2} \right)} \\
    \cancel{\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}} &= - \frac{1}{\rho} \frac{\partial p}{\partial z} + \cancel{\nu \left( \frac{\partial^2 w}{\partial x^2} + \frac{\partial^2 w}{\partial y^2} + \frac{\partial^2 w}{\partial z^2} \right)}
\end{aligned}
\right.
$$

得到

$$
\begin{equation} \tag{1} \label{eq:laminar-parallel}
    \frac{\partial u}{\partial t} = - \frac{1}{\rho} \frac{\mathrm{d} p}{\mathrm{d} x} + \nu \left( \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} \right)
\end{equation}
$$

考虑二维定常流动，$\frac{\partial u}{\partial t} = 0$，且 $u = u(y)$，则

$$
\frac{\mathrm{d}^2 u}{\mathrm{d} y^2} = \frac{1}{\mu} \frac{\mathrm{d} p}{\mathrm{d} x} = \text{const.}
$$

解得

$$
\begin{equation} \label{eq:laminar-parallel-sol} \tag{2}
    u = \frac{U_0}{h} y - \frac{1}{2 \mu} \frac{\mathrm{d} p}{\mathrm{d} x} y (h - y)
\end{equation}
$$

#### 经典库页特流（Plane Couette Flow）

两板间无压强梯度，上板以速度 $U_0$ 平行运动，下板静止：

$$
\frac{\mathrm{d} p}{\mathrm{d} x} = 0 \implies u = \frac{U_0}{h} y
$$

#### 平面泊肃叶流动（Plane Poiseuille Flow）

$$
U_0 = 0 \implies u = - \frac{1}{2 \mu} \frac{\mathrm{d} p}{\mathrm{d} x} y (h - y)
$$

#### Stratified Couette Flow

边界条件：

$$
\begin{aligned}
    \text{At walls: } & \left \{
        \begin{aligned}
            u(0) &= 0 \\
            u(h) &= U_0
        \end{aligned}
    \right. \\
    \text{At interface: } & \left \{
        \begin{aligned}
            u(h_1^-) &= u(h_1^+) \\
            \mu_1 \left. \frac{\mathrm{d} u}{\mathrm{d} y} \right|_{h_1^-} &= \mu_2 \left. \frac{\mathrm{d} u}{\mathrm{d} y} \right|_{h_1^+}
        \end{aligned}
    \right. \\
\end{aligned}
$$

#### Square Duct Poiseuille Flow

边界条件：$u = 0$ 在 $y = \pm a$ 和 $z = \pm a$ 处

假设 $u = \frac{1}{2 \mu} \frac{\mathrm{d} p}{\mathrm{d} x} (y^2 - a^2) + f(y,z)$，对 $f(y,z)$ 使用分离变量法

#### Hagen-Poiseuille 流动（圆管哈根-泊肃叶流）

柱坐标系，假设流动轴对称

#### 椭圆截面管中的 Poiseuille 流动

边界条件：$u = 0$ 在 $\dfrac{y^2}{a^2} + \dfrac{z^2}{b^2} = 1$ 处

假设

$$
u = C \left(\frac{y^2}{a^2} + \frac{z^2}{b^2} - 1\right)^n
$$

代入 \eqref{eq:laminar-parallel} 得到 $n = 1$

解是否唯一？

#### 环形 Couette 流动

$$
v_{\theta}(r) = \frac{1}{r_2^2 - r_1^2} \left[(\omega_2 r_2^2 - \omega_1 r_1^2) r + (\omega_1 - \omega_2) \frac{r_1^2 r_2^2}{r} \right]
$$

- $\omega_2 = 0, \omega_1 \neq 0$：

$$
v_{\theta}(r) = \omega_1 r_1^2 \frac{r_2/r - r/r_2}{r_2/r_1 - r_1/r_2}
$$

- 涡量：

$$
\omega_z = \frac{1}{r} \frac{\partial (r v_{\theta})}{\partial r} = \frac{2 (\omega_2 r_2^2 - \omega_1 r_1^2)}{r_2^2 - r_1^2}
$$

- 若无旋
    - 速度环量相等：$\omega_1 r_1^2 = \omega_2 r_2^2 = K$
    - 则 $v_{\theta} = \dfrac{K}{r}$
    - 类似于点涡！




### 平板突然起动（Stokes' First Problem）

一块无限大平板置于静止的粘性流体之中，在 $t = 0$ 突然起动，以恒定速度 $U$ 平行运动。

式 \eqref{eq:laminar-parallel} 中，压力梯度项为 0，忽略 $z$ 方向变化，

$$
\frac{\partial u}{\partial t} = \nu \frac{\partial^2 u}{\partial y^2}
$$


### 平板振荡流（Stokes' Second Problem）



$$
\begin{equation}
    u = U e^{-k y} \cos(\omega t - k y)
\end{equation}
$$

### 缝隙中的流动


### 小雷诺数近似解

当 $\mathrm{Re}$ 很小时，惯性力与粘性力相比可忽略，动量方程简化为

$$
\begin{equation} \label{eq:stokes-flow} \tag{3}
    \nabla p = \mu \nabla^2 \mathbf{u}
\end{equation}
$$

NS 方程化为线性方程，结合连续性方程 $\nabla \cdot \mathbf{u} = 0$，可得到封闭解。

!!! question "空中的云朵为什么不会掉下来？"
    液滴尺寸 $\sim 10^{-5} \,\mathrm{m}$

    考虑球状小液滴，它受到重力、浮力和空气阻力。假设液滴受力平衡后，以恒定速度 $U$ 下落，以液滴为参考系，相当于小球绕流问题。

#### 小 $\mathrm{Re}$ 绕流问题 Stokes 解

球坐标下的小球绕流

轴对称：

$$
\frac{\partial}{\partial \varphi} = 0, \quad u_{\varphi} = 0
$$

连续性方程：

$$
\frac{1}{r^2} \frac{\partial}{\partial r} (r^2 u_r) + \frac{1}{r \sin \theta} \frac{\partial}{\partial \theta} (u_{\theta} \sin \theta) = 0
$$

动量方程：

$$
\begin{aligned}
    \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial u_r}{\partial r} \right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial u_r}{\partial \theta} \right) - \frac{2 u_r}{r^2} - \frac{2}{r^2} \frac{\partial u_{\theta}}{\partial \theta} - \frac{2 u_{\theta} \cot \theta}{r^2} &= \frac{1}{\mu} \frac{\partial p}{\partial r} \\
    \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial u_{\theta}}{\partial r} \right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial u_{\theta}}{\partial \theta} \right) - \frac{u_{\theta}}{r^2 \sin^2 \theta} + \frac{2}{r^2} \frac{\partial u_r}{\partial \theta} - \frac{2 u_r \cot \theta}{r^2} &= \frac{1}{\mu r} \frac{\partial p}{\partial \theta}
\end{aligned}
$$


边界条件：

$$
\left \{
\begin{aligned}
    r = a: & \quad u_r = u_{\theta} = 0 \\
    r \to \infty: & \quad u_r = U \cos \theta, \, u_{\theta} = - U \sin \theta
\end{aligned}
\right.
$$

使用分离变量法。设

$$
u_r = f_1(r) \cos \theta, \quad u_{\theta} = - f_2(r) \sin \theta
$$

解为

$$
\left \{
    \begin{aligned}
        u_r &= U \left( 1 - \frac{3 a}{2 r} + \frac{a^3}{2 r^3} \right) \cos \theta \\
        u_{\theta} &= - U \left( 1 - \frac{3 a}{4 r} - \frac{a^3}{4 r^3} \right) \sin \theta \\
        p &= p_{\infty} - \frac{3 a \mu U}{2 r^2} \cos \theta
    \end{aligned}
\right.
$$

下面求小球受到的阻力。表面应力分量：

$$
\begin{aligned}
    (\sigma_{rr})_{r=a} &= \left(- p + 2 \mu \frac{\partial u_r}{\partial r} \right)_{r=a} = - p_{\infty} + \frac{3}{2} \mu U \cos \theta \\
    (\sigma_{r \theta})_{r=a} &= \mu \left( \frac{1}{r} \frac{\partial u_r}{\partial \theta} + \frac{\partial u_{\theta}}{\partial r} - \frac{u_{\theta}}{r} \right)_{r=a} = - \frac{3}{2} \mu U \sin \theta
\end{aligned}
$$

投影到 $z$ 轴方向，

$$
\mathrm{d} F_z = \left[ (\sigma_{rr})_{r=a} \cos \theta - (\sigma_{r \theta})_{r=a} \sin \theta \right] \mathrm{d} S
$$

积分得阻力

$$
F = 6 \pi \mu a U
$$

终极速度

$$
U = \frac{2}{9} \frac{\rho' - \rho}{\mu}g a^2
$$

> 回到云层的问题，假设空气静止，液滴以终极速度下落，液滴半径 $a \sim 10^{-5} \,\mathrm{m}$，代入上式计算得到 $U \sim 10^{-2} \,\mathrm{m/s}$

#### 小 $\mathrm{Re}$ 绕流问题 Oseen 解

> 问题：在远离圆球的地方，Stokes 解是否合理？
>
> 惯性力项和粘性力项的比值
> 
> $$\frac{|\vec{u} \cdot \nabla \vec{u}|}{|\nu \nabla^2 \vec{u}|} \propto \frac{u_r \frac{\partial u_r}{\partial r}}{\nu \frac{\partial^2 u_r}{\partial r^2}} \sim \frac{\frac{a U^2}{r^2}}{\nu \frac{U a}{r^3}} = \frac{U r}{\nu} = \mathrm{Re} \frac{r}{a}$$


Oseen 解的阻力和阻力系数

$$
F = 6 \pi \mu a U \left( 1 + \frac{3}{8} \mathrm{Re} \right), \quad C_D = \frac{24}{\mathrm{Re}} \left( 1 + \frac{3}{16} \mathrm{Re} \right)
$$

!!! tip "小球在不同 $\mathrm{Re}$ 下的受力情况"
    - $\mathrm{Re} \ll 1$：蠕流
    - 驻涡
    - 卡门涡街

    阻力危机：$\mathrm{Re} > 10^5$，阻力突然下降！


!!! info "小球受力的一点延伸"
    - 1851，Stokes 忽略流体惯性，得到了牛顿不可压流体在**定常均匀流动**中小球受到的阻力
    - 1888，Basset 考虑了**非定常项** $\partial \mathbf{u} / \partial t$
    - Boussinesq (1903) 和 Oseen (1927)，求解含有非定常项的 N-S 方程，得到小球受力方程（BBO 方程）
    - 蔡树棠 (1957), Maxey & Riley (1983)，非均匀、非定常小雷诺数不可压牛顿流动中，小球的受力方程为 Tsai-Maxey-Riley 方程

    $$
    m_p \frac{\mathrm{d} \mathbf{V}}{\mathrm{d} t} = (m_p - m_f) \mathbf{g} + m_f \frac{\mathrm{D} \mathbf{u}}{\mathrm{D} t} - \frac{1}{2} m_f \left( \frac{\mathrm{d} \mathbf{V}}{\mathrm{d} t} - \frac{\mathrm{D} \mathbf{u}}{\mathrm{D} t} \right) - 6 \pi \mu a (\mathbf{V} - \mathbf{u}) - 6 a^2 \sqrt{\pi \rho_f \mu} \int_0^t \frac{1}{\sqrt{t - \tau}} \frac{\mathrm{d}}{\mathrm{d} \tau} (\mathbf{V} - \mathbf{u}) \, \mathrm{d} \tau
    $$

#### 圆柱绕流

满足柱面无滑移条件的解

$$
u = \frac{A}{2 \mu} \left[\ln \frac{r}{a} + \frac{y^2}{2 r^2} \left(
$$



#### 倾斜平板缝隙流动

间隙很小：$h(x) \ll l$，故 $w \ll u$，近似平行流动

> 更严谨的做法：**量级分析**
>
> $$\frac{\partial u}{\partial x} + \frac{\partial w}{\partial z} = 0$$
>
> 量级估计：$\dfrac{U}{l} \sim \dfrac{W}{h(x)} \implies W \sim \dfrac{h(x)}{l} U \ll U$

$$
\underset{\frac{u^2}{l}}{u \frac{\partial u}{\partial x}} + \underset{\frac{w u}{h}}{w \frac{\partial u}{\partial z}} = - \frac{1}{\rho} \frac{\mathrm{d} p}{\mathrm{d} x} + \nu \left(\underset{\frac{u}{l^2}}{\frac{\partial^2 u}{\partial x^2}} + \underset{\frac{u}{h^2}}{\frac{\partial^2 u}{\partial z^2}} \right)
$$