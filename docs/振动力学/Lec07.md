# 连续系统

## 一维问题

- 杆、轴、弦
- 梁

### 杆纵向振动微分方程

- 平截面假设
- 纵向伸缩引起的横向变形是高阶小量

对杆的微元体列牛顿第二定律：

$$
f(x,t) \, \mathrm{d} x + N(x + \mathrm{d} x, t) - N(x,t) = \rho(x) A(x) \, \mathrm{d} x \frac{\partial^2 u}{\partial t^2}
$$

略去高阶小量 $\omicron(\mathrm{d} x)$，得 $N(x + \mathrm{d} x, t) \approx N(x,t) + \frac{\partial N}{\partial x} \mathrm{d} x$. 代入上式可得

$$
\frac{\partial N(x, t)}{\partial x} + f(x,t) = \rho(x) A(x) \frac{\partial^2 u}{\partial t^2} \qquad (\text{in } \Omega)
$$

而

$$
N(x, t) = A(x) \sigma(x, t) = A(x) E(x) \varepsilon(x, t) = A(x) E(x) \frac{\partial u}{\partial x}
$$

代入上式，得杆的纵向振动微分方程：

$$
\begin{equation} \label{eq:longitudinal-vibration} \tag{3.1}
    \underset{惯性力}{\underbrace{\rho(x) A(x) \frac{\partial^2 u}{\partial t^2}}} - \underset{恢复力}{\underbrace{\frac{\partial}{\partial x} \left[ E(x) A(x) \frac{\partial u}{\partial x} \right]}} = \underset{外力}{\underbrace{f(x,t)}}
\end{equation}
$$

注意到上式没有阻尼力，所以是无阻尼振动微分方程。实际的阻尼分为外阻尼和内阻尼，较为复杂。观察 \eqref{eq:longitudinal-vibration} 的系数，可知这是一个双曲型方程。

- 初始条件

$$
u(x, t)\bigg|_{t=t_0} = \varphi(x) , \quad \left.\frac{\partial u(x, t)}{\partial t} \right|_{t=t_0} = \psi(x).
$$

- 边界条件（$x = 0$）
    - 固定端 $u(0, t) = 0$
    - 自由端 $N(0, t) = 0 \iff \left.\frac{\partial u}{\partial x}\right|_{x=0} = 0$
    - 弹性支撑 $\left.\left(E A \frac{\partial u}{\partial x}\right)\right|_{x=0} - k_1 \left.u(x, t)\right|_{x=0} = 0$
      > 实际上，令 $k_1 \to \infty$ 可得固定端，$k_1 = 0$ 可得自由端.
    - 集中质量 $\left.\left(E A \frac{\partial u}{\partial x}\right)\right|_{x=0} - M \left.\frac{\partial^2 u}{\partial t^2}\right|_{x=0} = 0$

!!! info "回顾：定解问题的一般解法"
    1.  边界条件齐次化
        找到只需满足边界条件的特解 $\psi(x, t)$，令 $u(x, t) = \tilde{u}(x, t) + \psi(x, t)$，则 $\tilde{u}(x, t)$ 满足齐次边界条件.
    2.  原方程 $\mathcal{L} [\tilde{u}(x, t) + \psi(x, t)] = f(x, t)$ 转化为

    $$
    \mathcal{L} [\tilde{u}(x, t)] = f(x, t) - \mathcal{L} [\psi(x, t)]
    $$

    - $f(x, t)$ 为已知外力
    - $\mathcal{L} [\psi(x, t)]$ 为已知的，由边界条件齐次化引入的附加项

!!! tip "方程非线性 vs. 边界条件非线性"
    - 若考虑更高阶的应变：

    $$
    \varepsilon(x, t) = \frac{\partial u}{\partial x} + \frac{1}{2} \left(\frac{\partial u}{\partial x}\right)^2 + \cdots
    $$

    则方程变为非线性微分方程.

    - 若弹簧式非线性的：

    $$
    F = k_1 u + k_3 u^3 + \cdots
    $$

    则边界条件变为非线性边界条件. 以上两种情况都属于非线性问题，不能使用分离变量法.

### 圆轴的扭转振动

对式 \eqref{eq:longitudinal-vibration} 中的变量进行替换：$u(x, t) \mapsto \theta(x, t), \, A(x) \mapsto I(x), \, E(x) \mapsto G(x), \, f(x, t) \mapsto m(x, t)$，即可得到圆轴的扭转振动微分方程：

$$
\begin{equation} \label{eq:torsional-vibration} \tag{3.2}
    \rho(x) I(x) \frac{\partial^2 \theta}{\partial t^2} - \frac{\partial}{\partial x} \left[ G(x) I(x) \frac{\partial \theta}{\partial x} \right] = m(x, t) \qquad (\text{in } \Omega)
\end{equation}
$$

1. 初始条件

$$
\theta(x, 0) = \varphi(x) , \quad \left.\frac{\partial \theta}{\partial t} \right|_{t=0} = \psi(x).
$$

2. 边界条件（$x = 0$）
    - 固定端 $\theta(0, t) = 0$
    - 自由端 $\left.\frac{\partial \theta}{\partial x}\right|_{x=0} = 0$
    - 弹性支撑 $\left.\left(G I \frac{\partial \theta}{\partial x}\right)\right|_{x=0} - k_1 \left.\theta(x, t)\right|_{x=0} = 0$
    - 集中转动惯量 $\left.\left(G I \frac{\partial \theta}{\partial x}\right)\right|_{x=0} - J \left.\frac{\partial^2 \theta}{\partial t^2}\right|_{x=0} = 0$

### 弦振动方程

$$
\begin{aligned}
    \rho(x) A(x) \, \mathrm{d} x \frac{\partial^2 u}{\partial t^2} = \sum F &= f(x,t) \, \mathrm{d} x + T_0(x + \mathrm{d} x, t) \sin \theta(x + \mathrm{d} x, t) - T_0(x, t) \sin \theta(x, t) \\
    &\approx f(x,t) \, \mathrm{d} x + T_0(x, t) \theta(x + \mathrm{d} x, t) - T_0(x, t) \theta(x, t) \\
    &\xlongequal{\theta(x, t) \approx \frac{\partial u}{\partial x}} f(x,t) \, \mathrm{d} x + \frac{\partial}{\partial x} \left[ T_0(x, t) \frac{\partial u}{\partial x} \right] \mathrm{d} x
\end{aligned}
$$

得弦振动方程：

$$
\begin{equation} \label{eq:string-vibration} \tag{3.3}
    \rho(x) A(x) \frac{\partial^2 u}{\partial t^2} - \frac{\partial}{\partial x} \left[ T_0(x, t) \frac{\partial u}{\partial x} \right] = f(x,t) \qquad (\text{in } \Omega)
\end{equation}
$$

对于弦振动的边界条件，一般只考虑两端固定（有自由端就没有张力了）。


### 杆自由振动方程求解

式 \eqref{eq:longitudinal-vibration} 的齐次方程为

$$
\rho(x) A(x) \frac{\partial^2 u}{\partial t^2} - \frac{\partial}{\partial x} \left[ E(x) A(x) \frac{\partial u}{\partial x} \right] = 0
$$

设 $\rho, E, A$ 均为常数，得到

$$
\begin{equation} \label{eq:wave-equation} \tag{3.4}
    \frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}
\end{equation}
$$

其中 $c = \sqrt{\frac{E}{\rho}}$ 为波速。下面采用分离变量法。设 $u(x, t) = U(x) T(t)$，代入 \eqref{eq:wave-equation} 得

$$
\frac{T''}{T} = c^2 \frac{U''}{U} \equiv -\omega^2
$$

得到两个 ODE：

$$
\left \{
    \begin{aligned}
        &T'' + \omega^2 T = 0 \\
        &U'' + \frac{\omega^2}{c^2} U = 0
    \end{aligned}
\right.
$$


!!! note "变截面梁纵向自由振动"
    分离变量法 $u(x, t) = U(x) T(t)$ 


## 梁横向振动

$$
\begin{equation}
    \rho(x) A(x) \frac{\partial^2 y}{\partial t^2} + \frac{\partial^2}{\partial x^2} \left[ E(x) I(x) \frac{\partial^2 y}{\partial x^2} \right] = f(x,t) \qquad (\text{in } \Omega)
\end{equation}
$$

1.  初始条件

    $$
    y(x, t_0) = \varphi(x) , \quad \left.\frac{\partial y}{\partial t} \right|_{t=t_0} = \psi(x).
    $$

2.  边界条件（$x = 0$）

    $$
    \left \{
        \begin{aligned}
            &\text{固支：} &&y(0, t) = 0 , \quad \theta(0, t) = 0 \\[1ex]
            &\text{简支：} &&y(0, t) = 0 , \quad M(0, t) = 0 \\[1ex]
            &\text{自由：} &&Q(0, t) = 0 , \quad M(0, t) = 0 \\[1ex]
            &\text{夹支：} &&\theta(0, t) = 0 , \quad Q(0, t) = 0 \\[1ex]
            &\text{弹性支撑：} &&Q(0, t) = (\pm ?)\, k_1 y(0, t) , \quad M(0, t) = (\pm ?)\, k_2 \theta(0, t) \\[1ex]
            &\text{集中质量：} &&Q(0, t) = (\pm ?)\, M \frac{\partial^2 y}{\partial t^2}\bigg|_{x=0} , \quad M(0, t) = \underset{\text{一般可忽略}}{\cancel{(\pm ?)\, J \frac{\partial^2 \theta}{\partial t^2}\bigg|_{x=0}}}
        \end{aligned}
    \right.
    $$

    算上 $x = l$，共 $6 \times 6 = 36$ 种边界条件.

### 求解步骤

1.  边界条件齐次化！
    - 找到只需满足边界条件的特解 $\psi(x, t)$，令 $y(x, t) = \tilde{y}(x, t) + \psi(x, t)$，则 $\tilde{y}(x, t)$ 满足齐次边界条件.
2.  齐次方程 + 齐次边界条件 $\implies$ 特征值问题 $\left\{\begin{array}{c} \omega_1, & \omega_2, &\ldots \\ \varphi_1(x), & \varphi_2(x), &\ldots \end{array}\right\}$
    
    :material-star:{.star} **正交性**

    $$
    \left \{
    \begin{align}
        &\int_0^l \rho(x) A(x) \varphi_i(x) \varphi_j(x) \, \mathrm{d} x = \begin{cases}
            0 , & i \neq j \\[1ex]
            M_i , & i = j
        \end{cases} \\
        &\int_0^l E(x) I(x) \varphi_i''(x) \varphi_j''(x) \, \mathrm{d} x = \begin{cases}
            0 , & i \neq j \\[1ex]
            K_i , & i = j
        \end{cases} \\
        & K_i = \omega_i^2 M_i
    \end{align}
    \right.
    $$

3.  振型叠加法求解：$\displaystyle y(x, t) = \sum_{i=1}^\infty q_i(t) \varphi_i(x)$，$q_i(t)$ 为完备基 $\{\varphi_i\}$ 的广义坐标


!!! tip "几个定性结论"
    1.  第 $n$ 阶振型有 $n-1$ 个节点
        - 对所有 $6 \times 6 = 36$ 种边界条件均成立！
        - 对任意梁（$E(x), I(x), \rho(x), A(x)$ 可变）均成立！
        - 对任意杆、轴、弦振动均成立！
        - 甚至对于串联（离散）系统都成立！
    2.  关于频率
        - 连续系统无重频！
        - 频率 $0 \leq \omega_1 < \omega_2 < \cdots < \omega_n \quad (n \to \infty)$
            - 无约束系统可能取等号
    3.  振型节点的交错性
        1.  任意相邻两个振型（第 $n$ 阶和第 $n+1$ 阶）的节点相互交错
            - 第 $n$ 阶的两个相邻节点之间，肯定有一个 $n+1$ 阶的节点
            - 第 $n+1$ 阶的两个相邻节点之间，肯定有一个 $n$ 阶的节点
        2. 任意同阶的**位移**与**转角**振型的节点相互交错
        3. 任意同阶的**转角**与**弯矩**振型的节点相互交错（仅对于梁）
        4. 任意同阶的**弯矩**与**剪力**振型的节点相互交错（仅对于梁）
    4.  杆、轴、弦存在无穷多个频率、振型，但只有 $\textcolor{tomato}{2}$ 个振型是独立的！
        
        - 在设计的时候，需要对振型的节点做调控。这是一种反问题。
    
        $$
        \begin{aligned}
            \lambda_j \varphi_j \cdot \frac{\mathrm{d}}{\mathrm{d} x} \left[E(x) A(x) \frac{\mathrm{d} \varphi_i}{\mathrm{d} x}\right] &= \lambda_j \varphi_j \cdot \lambda_i \rho(x) A(x) \varphi_i \\
            \lambda_i \varphi_i \cdot \frac{\mathrm{d}}{\mathrm{d} x} \left[E(x) A(x) \frac{\mathrm{d} \varphi_j}{\mathrm{d} x}\right] &= \lambda_i \varphi_i \cdot \lambda_j \rho(x) A(x) \varphi_j
        \end{aligned}
        $$

        已知振型 $\varphi_i, \varphi_j$ 和频率 $\lambda_i, \lambda_j$，通过上式可以确定 $E(x) A(x)$.

    > 更详细的内容，见 王大钧等编著《结构力学中的定性理论》，北京大学出版社，2014 年.