

最简单的黑洞：Schwarzschild BH

$$
ds^2 = - f dt^2 + f^{-1} dr^2 + r^2 d\Omega^2, \quad f = 1 - \frac{2GM}{r}
$$

引入有效势

$$
\left(\frac{d r}{d t}\right)^2 + V_{\text{eff}}(r) = \frac{1}{2} E^2, \quad V_{\text{eff}}(r) = \frac{1}{2} f \left(\frac{L^2}{r^2} + \epsilon \right), \quad \epsilon = \left\{
    \begin{aligned}
        & 1, \quad \text{particles} \\
        & 0, \quad \text{photon}
    \end{aligned}
\right.
$$

## Charged BH (Reissner-Nordström BH)

$$
\begin{aligned}
    \mathcal{S} &= \frac{1}{16 \pi G} \int d^4 x \sqrt{-g} \left( R - \frac{1}{4} F_{\mu \nu} F^{\mu \nu} \right) \\
    \implies T_{\mu \nu} &= \frac{1}{4 \pi} \left( F_{\mu \rho} \left.F_\nu\right.^\rho - \frac{1}{4} g_{\mu \nu} F_{\rho \sigma} F^{\rho \sigma} \right)
\end{aligned}
$$

能动张量无迹：

$$
\left.T^\mu\right._\mu = g^{\mu \nu} T_{\mu \nu} = 0
$$

作用量取极值

$$
\frac{\delta \mathcal{S}}{\delta g^{\mu \nu}} = 0 \implies R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = 8 \pi G T_{\mu \nu}
$$

两边乘以 $g^{\mu \nu}$，得到

$$
R - \frac{1}{2} R \cdot 4 = 8 \pi G \left.T^\mu\right._\mu = 0 \implies R = 0
$$

于是有

$$
\begin{gather}    
    \boxed{
        \begin{gather}
            R_{\mu \nu} = 8 \pi G T_{\mu \nu} \\
            \nabla^\mu F_{\mu \nu} = 0
        \end{gather}
    } \\[1ex]
    F_{\mu \nu} = \nabla_\mu A_\nu - \nabla_\nu A_\mu = \partial_\mu A_\nu - \partial_\nu A_\mu
\end{gather}
$$


考虑规范自由度

$$
ds^2 = - e^{2\alpha(r)} dt^2 + e^{2\beta(r)} dr^2 + r^2 d\Omega^2
$$

微分形式

$$
\mathcal{A} = A_\mu dx^\mu = A_t(r) dt + A_r(r) dr
$$

规范变换

$$
A_\mu \to A_\mu + \partial_\mu \chi
$$

球对称，静态，电荷分布在 $r = 0$，所以 $A_r(r) = 0$，故

$$
\mathcal{A} = A_t(r) dt \implies \mathcal{F} = \mathrm{d} \mathcal{A} = \partial_r A_t(r) dr \wedge dt
$$

反对称性：$F_{rt} = -F_{tr}$


## Event Horizon

$$
g_{tt} = 0, \, r_s = 2GM \implies r_\pm = GM \pm \sqrt{G^2 M^2 - G Q^2}
$$

### $G^2 M^2 < G Q^2$：naked singularity

$$
M = M_0 + \frac{Q^2}{R} - \frac{G M^2}{R}
$$

得到

$$
M(R) = \frac{1}{2 G} \left( - R + \sqrt{4 Q^2 + 4 G M_0 R + R^2} \right)
$$

$R \downarrow \implies M \downarrow \implies$ kinetic energy 释放出来

$$
M'(R) = \frac{G M^2 - Q^2}{2 M G R + R^2} \geq 0
$$

!!! note "Cosmic Censorship Conjecture (Penrose)"
    奇点不可避免，非常普遍。但是物理上的解要求，奇点必须被事件视界包裹住，不能裸露在外。否则无穷远处的观测者就能看到奇点，广义相对论就失去了预言能力，因果律也会被破坏（无法定义良好的光锥结构）。

    广义相对论是基于光滑的黎曼流形的，不允许裸奇点的存在；而量子引力理论

    - String: fuzzball
    - lQG: $R^{\mu \nu \rho \sigma} R_{\mu \nu \rho \sigma} < \infty$

    场论的幺正性保证了量子引力理论中量子信息不会丢失，作为第一性原理看待。



## Unruh Effect

谐振子

$$
H = \sum_{n = 0}^\infty \left(\hat{a}^\dagger \hat{a} + \frac{1}{2}\right) \hbar \omega
$$

真空态由湮灭算符 $\hat{a}$ 作用在基态 $\ket{0}$ 上定义：

$$
\hat{a} \ket{0} = 0
$$

n-particle state：

$$
\hat{a}^\dagger \hat{a} \ket{n} = n \ket{n}
$$

做幺正变换

$$
\begin{aligned}
    & \hat{a} \to U \hat{a} U^\dagger = \hat{\bar{a}} \\
    & \hat{a}^\dagger \to (U \hat{a} U^\dagger)^\dagger = U \hat{a}^\dagger U^\dagger = \hat{\bar{a}}^\dagger \\
    & \hat{a}^\dagger \hat{a} \to U \hat{a}^\dagger U^\dagger U \hat{a} U^\dagger = U \hat{a}^\dagger \hat{a} U^\dagger
\end{aligned}
$$

演化后的物理系统

$$
H \to U H U^\dagger, \quad \ket{\bar{0}} = U \ket{0}
$$

可以验证 $\ket{\bar{0}}$ 是新的真空态：

$$
\hat{\bar{a}} \ket{\bar{0}} = U \hat{a} U^\dagger U \ket{0} = U \hat{a} \ket{0} = 0
$$


不同的观测者是可以有不同的真空态的。在平坦时空不提这个事，是因为在狭义相对论中，所有的惯性观测者可以校准时间（因为 Killing 矢量），以相同的方式定义真空态；



## Hawking Temperature

$$
T_H = \frac{\hbar c^3}{8 \pi G M k_B}
$$

量子效应、引力效应和热力学效应的融合