## 一般激励

$$
\ddot{x} + 2 \xi \omega_0 \dot{x} + \omega_0^2 x = f(t)
$$

最好的办法：Laplace 变换 $F(s) = \int_0^{\infty} f(t) e^{-st} \, \mathrm{d}t$

$$
\begin{aligned}
    \mathcal{L}[\ddot{x}] &= s^2 X(s) - s x(0) - \dot{x}(0) \\
    \mathcal{L}[\dot{x}] &= s X(s) - x(0) \\
    \mathcal{L}[x] &= X(s) \\
\end{aligned}
$$

初始条件取 $x(0) = 0, \, \dot{x}(0) = 0$，则

$$
X(s) = \frac{F(s)}{s^2 + 2 \xi \omega_0 s + \omega_0^2}
$$

逆变换得到

$$
\begin{aligned}
    x(t) = \mathcal{L}^{-1}[X(s)] &= f(t) * h(t) \\
    &= \int_0^t f(t - \tau) h(\tau) \, \mathrm{d}\tau \\
\end{aligned}
$$

此式称为 Duhamel 积分。其中 $h(t)$ 为脉冲响应函数，满足

$$
\mathcal{L}[h(t)] = \frac{1}{s^2 + 2 \xi \omega_0 s + \omega_0^2}
$$

这等价于

$$
\left \{
\begin{aligned}
    & \ddot{h} + 2 \xi \omega_0 \dot{h} + \omega_0^2 h = 0 \\
    & h(0) = 0, \quad \dot{h}(0) = 1/m
\end{aligned}
\right.
$$

解析解为

$$
h(t) = \frac{1}{m \sqrt{1 - \xi^2}} e^{-\xi \omega_0 t} \sin(\sqrt{1 - \xi^2} \omega_0 t) \quad (t \geq 0)
$$

物理上理解：

$$
\left \{
\begin{aligned}
    & \ddot{\tilde{x}} + 2 \xi \omega_0 \dot{\tilde{x}} + \omega_0^2 \tilde{x} = f(\tau) \mathrm{d}\tau \, \delta(t - \tau) \\
    & t > \tau
\end{aligned}
\right.
$$

响应谱 $\frac{|X|_{\max}}{\delta} \sim \frac{T}{T_0}, \delta = F_0/k$ 弹簧静伸缩量

---

## 广义单自由度系统

### 能量等效

- 动能：等效质量 $\bar{M}$
- 势能：等效刚度 $\bar{K}$

以连续梁为例，任意一点的位移为 $u(x,t) = \psi(x) y(t)$

$$
\begin{aligned}
    T &= \int_0^L \frac{1}{2} \rho(x) A(x) \, \mathrm{d}x \, \left( \psi(x) \dot{y}(t) \right)^2 \\
    &= \frac{1}{2} \left[\int_0^L \rho(x) A(x) \psi^2(x) \, \mathrm{d}x \right] \dot{y}^2(t) \\
    &= \frac{1}{2} \bar{M} \dot{y}^2(t) \\[2ex]
    U &= \int_0^L \frac{1}{2} E(x) I(x) \left( \frac{\partial^2}{\partial x^2} \left( \psi(x) y(t) \right) \right)^2 \, \mathrm{d}x \\
    &= \frac{1}{2} \left[ \int_0^L E(x) I(x) \left( \frac{\mathrm{d}^2 \psi}{\mathrm{d} x^2} \right)^2 \, \mathrm{d}x \right] y^2(t) \\
    &= \frac{1}{2} \bar{K} y^2(t)
\end{aligned}
$$

$\psi(x)$ 满足的边界条件（固定端）：$\begin{cases}
    \psi(0) = 0 \\
    \psi'(0) = 0 \\
    \psi(L) = 1
\end{cases}$

若加一集中质量 $m$，则动能多一项，势能不变

### 拉格朗日方程

如果

$$
\begin{aligned}
    & L = T - V \\
    & \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{y}} \right) - \frac{\partial L}{\partial y} = Q
\end{aligned}
$$

