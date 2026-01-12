# 边界层

!!! tip "不可压缩 N-S 方程中重力项的处理"


- 层内的粘性流动与层外的理想流动耦合，是相互影响、紧密关联的
- 由于内层粘流的滞止作用，流线外移，所以理想流体的绕流应当是考虑了流线外移效应后“加厚”了的等效物体。其形状只有知道边界层的解才能获得。
- 而求解边界层必须得知道边界层外的理想流动情况

- $\implies$ 逐次修正法（可能不收敛）

## 边界层基本特征

定义边界层厚度 $\delta$ 为该处速度达到自由流速度的 $99\%$ 的位置，即 $U(\delta) = 0.99 U_{\infty}$.（名义厚度 nominal thickness）

1. 很薄，远小于流向特征尺度：$\delta \ll L$

Stokes 第一问题：涡旋的扩散厚度 $\delta \sim \sqrt{\nu t}$，而相同时间内流体质点的迁移距离为 $L = Ut$

$$
\begin{equation} \label{eq:BL-thickness-dim} \tag{7.1.1}
    \delta \sim \sqrt{\nu t} = \sqrt{\frac{\mu L}{\rho U}} = \frac{L}{\sqrt{\mathrm{Re}}} \iff \frac{\delta}{L} \sim \mathrm{Re}^{-1/2}
\end{equation}
$$

2. 边界层内切向速度的法向梯度很大

若 $x \sim L, \, y \sim \delta, \, u \sim U$，可知 $\dfrac{\partial^2 u}{\partial x^2} \ll \dfrac{\partial^2 u}{\partial y^2}$. 此外，如果考虑惯性力和粘性力的量级关系：

$$
\frac{u \dfrac{\partial u}{\partial x}}{\nu \dfrac{\partial^2 u}{\partial y^2}} \sim \frac{U^2 / L}{\nu U / \delta^2} = 1 \, (!)
$$

说明不论雷诺数多大，在边界层内始终要考虑粘性项！


### 位移厚度

由于边界层的存在，外层流线会向外偏移 $\delta^*(x)$：

$$
\begin{aligned}
    \int_0^h \rho U b \, \mathrm{d} y &= \int_0^{\delta} \rho u b \, \mathrm{d} y, \quad \delta = h + \delta^* \\
    U h &= \int_0^{\delta} (u + U - U) \, \mathrm{d} y \\
    \implies \delta^* &= \int_0^{\delta} \left(1 - \frac{u}{U} \right) \mathrm{d} y
\end{aligned}
$$

> 可以理解为
> 
> 1. 等效流道的减窄量
> 2. 理想流体的流线在边界层外部边界上由于粘性作用向外偏移的距离。

再次利用速度近似分布（von Karman）（近似为抛物型）：

$$
u(x, y) \approx U \left( \frac{2y}{\delta} - \frac{y^2}{\delta^2} \right), \quad 0 \leq y \leq \delta(x)
$$

最后求得

$$
\delta^* = \frac{\delta}{3}
$$

### 动量厚度

相同质量流量下无粘流的动量通量

$$
\rho \int_0^h
$$

#### 动量积分

控制体动量方程

$$
\begin{aligned}
    \sum F_x &= \rho \int_1 u(0, y) (\mathbf{V} \cdot \mathbf{n}) \, \mathrm{d} A + \rho \int_3 u(L, y) (\mathbf{V} \cdot \mathbf{n}) \, \mathrm{d} A \\
    &= \rho \int_0^h U_0 (-U_0) b \, \mathrm{d} y + \rho \int_0^{\delta} u(L, y) [u(L, y)] b \, \mathrm{d} y \\
    &= -\rho b U_0^2 h + \rho b \int_0^{\delta} u^2(L, y) \, \mathrm{d} y
\end{aligned}
$$

控制体质量守恒，定常

$$
\rho \int_{\text{CS}} (\mathbf{V} \cdot \mathbf{n}) \, \mathrm{d} A = 0 \implies \rho \int_0^h (-U_0) b \, \mathrm{d} y + \rho \int_0^{\delta} u(L, y) b \, \mathrm{d} y = 0
$$

## 二维层流边界层方程

不可压：$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$$

量级分析：$x \sim L, \, y \sim \delta, \, t \sim L/U$，代入上式可得

$$
\frac{U}{L} + \frac{V}{\delta} \sim 0 \implies V \sim \frac{\delta}{L} U
$$

故 $V/U \sim \delta / L \ll 1$.

动量方程

$$
\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} = -\frac{1}{\rho} \frac{\partial p}{\partial x} + \nu \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right)
$$

### 二维不可压缩层流边界层方程（Prandtl 边界层方程）

$$
\begin{equation}
    \begin{array}{c}
        \displaystyle \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0 \\
        \displaystyle \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} = \frac{\partial U_{\infty}}{\partial t} + U_{\infty} \frac{\partial U_{\infty}}{\partial x} + \nu \frac{\partial^2 u}{\partial y^2}
    \end{array}
\end{equation}
$$

!!! note "边界层方程的性质"
    - 与二维 N-S 方程相比，方程数和未知量从 3 个减少到 2 个（$u, \, v$）
    - 依旧是非线性方程
    - 不可压缩 N-S 方程是椭圆型 PDE，需全局求解；而边界层方程是抛物型 PDE，可从边界层的前缘（leading edge）开始，向下游逐步求解。
    - 无量纲化的二维定常无量纲方程组和边界条件
        - 不包含 $\mathrm{Re}$
        - $\mathrm{Re}$ 变化时，边界层内的流动图案只发生相似性变化：$x, u$ 不变，$y, v$ 和 $\sqrt{\mathrm{Re}}$ 成反比。
        - 如果有分离点存在，分离点的位置在层流范围内与 $\mathrm{Re}$ 无关。


### 边界层的相似性解

相似性假设：对 $y$ 进行缩放，

$$
\frac{u\left(x_1, \frac{y}{g(x_1)}\right)}{U(x_1)} = \frac{u\left(x_2, \frac{y}{g(x_2)}\right)}{U(x_2)} \implies \frac{u(x, y)}{U(x)} = f'(\eta)
$$

定常边界层方程：

$$
\left \{
    \begin{equation}
        \begin{aligned}
            & \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0 \\
            & u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} = U \frac{\partial U}{\partial x} + \nu \frac{\partial^2 u}{\partial y^2}
        \end{aligned}
    \end{equation}
\right.
$$

二维流动存在流函数 $u = \psi_y, \, v = -\psi_x$. 设

















## 边界层的转捩（transition）

### 边界层分离

- 流动分离是非常重要且复杂的问题，边界层方程仅仅适用于分离之前

#### 分离发生的必要条件

1.  零压力梯度平板，有壁面粘滞作用，但没有逆压梯度
2.  驻点流（流体垂直冲击壁面），有逆压梯度，没有壁面粘滞作用
3.  

