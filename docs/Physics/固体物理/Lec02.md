# Sommerfeld 模型

Drude 模型使用经典统计（Maxwell-Boltzmann 分布）：

$$
\begin{equation} \tag{1} \label{eq:Maxwell-Boltzmann}
    f(v) = 4 \pi \left( \frac{m}{2 \pi k_B T} \right)^{3/2} v^2 \mathrm{e}^{-\frac{m v^2}{2 k_B T}}
\end{equation}
$$

而实际上，电子不服从 M-B 分布！此时是 1900 年，Wolfgang Pauli 刚出生，Fermi 和 Dirac 分别于 1901年和 1902 年出生，量子力学还没有诞生。

由于电子是费米子，因此服从 Fermi-Dirac 分布：

$$
\begin{equation} \tag{2} \label{eq:Fermi-Dirac}
    f(\varepsilon) = \frac{1}{\mathrm{e}^{(\varepsilon - \mu)/{k_B T}} + 1}
\end{equation}
$$

$\mu(T)$ 为化学势，对应非零温时占据几率为 1/2 的能量。

0 K 时，FD 分布 \eqref{eq:Fermi-Dirac} 退化为

$$
f(\varepsilon) = \begin{cases}
    1, & \varepsilon < \varepsilon_F \\
    0, & \varepsilon > \varepsilon_F
\end{cases}
$$

Drude 模型高估比热的原因是，M-B 分布认为所有电子都能吸收 $k_B T$ 的热能，而 F-D 分布认为只有接近费米能级 $\varepsilon_F$ 的电子才能吸收热能（因为 Pauli 不相容原理，低于 $\varepsilon_F$ 的电子态已经被占满了，跃迁需要克服简并压），也就是高估了能吸收热量的电子数。

## 基态性质

在 $V = L^3$ 内的金属块有 $N$ 个自由电子，

$$
\varepsilon_i = \frac{\hbar^2}{2 m} k_i^2 = \frac{\hbar^2}{2 m} (k_x^2 + k_y^2 + k_z^2)
$$

- 自由电子的量子态由波矢 $\vec{k} = (k_x, k_y, k_z)$ 描述
- 处于这个状态的电子具有与 $k$ 成正比的动量 $p = \hbar k$ 和与 $k^2$ 成正比的能量 $\varepsilon = \frac{\hbar^2 k^2}{2 m}$

!!! question "状态量子数 $k$ 如何取值？"
    - 对于足够大的固体来说，讨论体性质时边界效应可忽略（表面小一个尺度量级，足够小）。
    - 通常用循环边界条件，从边界离开时等效于从对面进入。

    平面波解 $\psi_i(\mathbf{r}) = \frac{1}{\sqrt{V}} \mathrm{e}^{i \mathbf{k}_i \cdot \mathbf{r}}$ 满足 Born-von Karman 周期边界条件

    $$
    \begin{aligned}
        \psi(x + L, y, z) &= \psi(x, y, z) \\
        \psi(x, y + L, z) &= \psi(x, y, z) \\
        \psi(x, y, z + L) &= \psi(x, y, z)
    \end{aligned}
    $$

    得到

    $$
    \mathrm{e}^{i k_x L} = \mathrm{e}^{i k_y L} = \mathrm{e}^{i k_z L} = 1 \implies (k_x, k_y, k_z) = \frac{2 \pi}{L} (n_x, n_y, n_z)
    $$

### 状态密度-波矢空间

目前还不知道各个 $k$ 有多少电子占据