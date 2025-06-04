# Chapter 9: Stability of Columns

The load-carrying capacity of structure members:

1. Strength 强度，抵抗破坏
2. Rigidity 刚度，抵抗变形
3. Stability 稳定性，抵抗失稳

!!! quote "History"
    - 1729, 穆申布洛克
    - Lagrange
    - Euler

## 9.1 Concept of Stability

### A pratical example

A wooden bar: $b \times h = 0.5 \times 3 \, \mathrm{cm}^2, \sigma_c = 40 \, \mathrm{MPa}$

- 屈服（yielding）：$P = \sigma_c A = 6 \,\mathrm{kN}$
- 横向挠度（lateral deflection）：$P = 30 \,\mathrm{N}$，就失稳了

横向挠度是由 **屈曲（Buckling）** 引起的

### Mechanical model of stability

- $P < P_{\text{cr}}$，杆做振动回到平衡位置，稳定平衡
- $P > P_{\text{cr}}$，杆偏离平衡位置，失稳
- $P = P_{\text{cr}}$，随遇平衡

**Critical force $P_{\text{cr}}$**：使杆从稳定平衡转变为不稳定平衡的临界载荷

## 9.2 Euler's Formula for Columns with Pinned Ends

Consider a slender column with pinned ends, which is subjected to a compressive axial load $P = P_{\text{cr}}$, i.e. the critical buckling load.

Equation of bending moment:

$$
M(x) = -P_{\text{cr}} \cdot y(x)
$$

When $\sigma < \sigma_p$,

$$
\frac{\mathrm{d}^2 y}{\mathrm{d} x^2} = \frac{M(x)}{EI} = -\frac{P_{\text{cr}}}{EI} y(x)
$$

Let $k^2 = \frac{P_{\text{cr}}}{EI}$, we get

$$
y = A \sin kx + B \cos kx
$$

Boundary conditions: $\left. y\right|_{x=0} = 0, \, \left. y\right|_{x=l} = 0$, we have $B = 0, \, \sin kl = 0$.

The solutions are $kl = n\pi, \, n = 1, 2, \ldots$, so

$$
k^2 = \frac{n^2 \pi^2}{l^2} = \frac{P_{\text{cr}}}{EI} \implies P_{\text{cr}} = \frac{n^2 \pi^2 EI}{l^2}
$$

杆要达到弯曲平衡，要求载荷 $P$ 取一系列离散值！

Select $n = 1$ (the minimum load), we have

$$
\begin{equation} \tag{9-1} \label{eq:9-1}
    P_{\text{cr}} = \frac{\pi^2 EI}{l^2}
\end{equation}
$$

\eqref{eq:9-1} is **Euler's formula**.

!!! tip "Discussion"
    - $P_{\text{cr}} \propto \frac{1}{l^2}$，$l$ 越大，失稳载荷越小
    - $P_{\text{cr}} \propto E$，$E$ 越大，失稳载荷越大
    - $I$ is the *least* moment of inertia（可以沿任意方向失稳）
    - For $n = 1$, the deflection curve is

    $$
    y(x) = A \sin \left(\frac{\pi x}{l}\right)
    $$

    where $A$ is NOT determined (can be any value).

!!! question "What if $P = 1.1 P_{\text{cr}}$ ?"
    见下面补充内容！

## 9.3 Columns with Other Supports

$\kappa = 0$ 处，$M = 0$，等效为铰支座！

$\mu l$ 等效长度

$$
\begin{equation} \tag{9-2} \label{eq:9-2}
    P_{\text{cr}} = \frac{\pi^2 EI}{(\mu l)^2}
\end{equation}
$$

\eqref{eq:9-2} is **Generalized Euler's formula**.

!!! tip "Discussion"
    - $\mu$: the effective length factor
    - cylindrical pins

!!! example "Example 9.1"
    Determine Euler's formula for a column with two built-in ends.

    **Sol.** According to symmetry, we have

    $$
    \frac{\mathrm{d}^2 y}{\mathrm{d} x^2} = \frac{M(x)}{EI} = \frac{m - Py}{EI}
    $$

    Let $k^2 = \frac{P}{EI}$,

    $$
    \frac{\mathrm{d}^2 y}{\mathrm{d} x^2} + k^2 y = \frac{m}{EI}
    $$

    The general solution is

    $$
    y = A \sin kx + B \cos kx + \frac{m}{P}
    $$

    The boundary conditions are

    $$
    \left \{
    \begin{aligned}
        \left. y\right|_{x=0} &= 0 \\
        \left. y\right|_{x=l} &= 0
    \end{aligned} \right.
    \quad
    \left \{
    \begin{aligned}
        \left. y'\right|_{x=0} &= 0 \\
        \left. y'\right|_{x=l} &= 0
    \end{aligned}
    \right.
    $$

    then we get

    $$
    \left \{
        \begin{aligned}
            A &= 0 \\
            B &= -\frac{m}{P} \\
            \cos kl &= 1 \\
            \sin kl &= 0
        \end{aligned}
    \right.
    \implies
    kl = n\pi, \, n = 0, 2, 4, \ldots
    $$

## 9.4 The Limit of Applicability of Euler's Formula, Empirical Formula

长细比（slenderness ratio）$\lambda = \frac{\mu l}{i}$ dimensionless

### The limit of applicability of Euler's formula

应力不能超过比例极限

$$
\sigma_{\text{cr}} = \frac{\pi^2 E}{\lambda^2} \leq \sigma_{\text{p}} \implies \lambda \geq \pi \sqrt{\frac{E}{\sigma_{\text{p}}}} = \lambda_{\text{p}}
$$

- Euler's hyperbola

### Empirical formula

Euler's formula 不适用时（$\lambda < \lambda_{\text{p}}$），用经验公式

$$
\sigma_{\text{cr}} = a - b \lambda \leq \sigma_{\text{s}} \implies \lambda \geq \frac{a - \sigma_{\text{s}}}{b} = \lambda_{\text{s}}
$$

- 若 $\lambda < \lambda_{\text{s}}$，则材料屈服，属于强度问题

| Type | Definition | $P_{\text{cr}}$ | $\sigma_{\text{cr}}$ | Property |
|:------:|:----------:|:-----------------:|:-------------------:|:--------:|
| Long | $\lambda > \lambda_{\text{p}}$ | $P_{\text{cr}} = \frac{\pi^2 EI}{(\mu l)^2}$ | $\sigma_{\text{cr}} = \frac{\pi^2 E}{\lambda^2}$ | Stability|
| Intermediate length | $\lambda_{\text{p}} < \lambda < \lambda_{\text{s}}$ | $$ | $\sigma_{\text{cr}} = a - b \lambda$ | Stability |
| Short | $\lambda < \lambda_{\text{s}}$ | $P_{\text{cr}} = \sigma_{\text{s}} A$ | $\sigma_{\text{cr}} = \sigma_{\text{s}}$ | Strength |

长细比由几何尺寸和边界条件决定

## 9.6 Improving the Stability of Columns

$$
\left \{
\begin{aligned}
    &\text{large flexibility:} \, \sigma_{\text{cr}} = \frac{\pi^2 E}{\lambda^2} \\
    &\text{medium flexibility:} \,\sigma_{\text{cr}} = a - b \lambda \\
    &\lambda = \frac{\mu l}{i}
\end{aligned}
\right.
$$

1. Reduce the length
   - $l \downarrow \implies \lambda \downarrow \implies \sigma_{\text{cr}} \uparrow$
2. Reasonable cross-section
    - $i \uparrow \implies \lambda \downarrow \implies \sigma_{\text{cr}} \uparrow$
    - local buckling
    - Let $I$ be the same in all directions
3. Improve end supports
    - $\mu \downarrow \implies \lambda \downarrow \implies \sigma_{\text{cr}} \uparrow$
    - Rigidly fixed $>$ Pinned end $>$ Free end
4. Reasonable materials
    - $E \uparrow \implies \sigma_{\text{cr}} \uparrow$

---

## 补充：平衡与稳定

能量（势能面）：$E(x)$

- 平衡位置：$E'(x) = 0$
- 稳定性
    - 稳定平衡：$E''(x) > 0$
    - 不稳定平衡：$E''(x) < 0$
    - 临界：$E''(x) = 0$

假想一个小球分别在山谷、平地、山顶上

!!! question "材料力学中的“能量”是什么？"
    总势能

    $$
    \Pi = \Pi_1 + \Pi_2
    $$

    - $\Pi_1$：应变能
    - $\Pi_2$：外力势能 $\left(-\int \mathbf{F} \cdot \mathrm{d} \mathbf{u}\right)$

    一根杆沿轴向施加力，为什么出现了拉伸，而不是弯曲/扭转？$\implies$ 实际的变形已经是能量最低的结果。

1. 对于同一杆件：不同外载对应着不同的势能面 $\Pi[\small{\text{变形}}]$
2. 对于给定外载，**最小势能原理**给出，在所有{++几何可能变形++}[^1]中，精确解（真实变形情况）是**使得 $\Pi$ 取最小值的变形**
3. 凹凸性

[^1]: 满足边界条件，连续可微

!!! example "单轴拉伸"
    悬臂梁，施加轴向拉力 $F$.

    - 取几何可能位移 $U(x) = kx$

    位移 $U|_{x=0} = 0, \, U|_{x=l} = kl$

    应变 $\varepsilon = \dfrac{\partial U}{\partial x} = k$

    $$
    \left \{
    \begin{aligned}
        \Pi_1 &= \int_V \frac{1}{2} E \varepsilon^2 \,\mathrm{d} V = \frac{1}{2} E k^2 Al \\
        \Pi_2 &= -F \cdot U|_{x=l} = -F \cdot kl
    \end{aligned}
    \right.
    $$

    最小势能原理

    $$
    \frac{\partial \Pi}{\partial k} = 0 \implies k = \frac{F}{EA}
    $$

- 若取几何可能位移 $U(x) = kx^2$

也是对的选取，只不过精确解不在此类解中，只能求得近似解。

> 不限定 $U(x)$ 的形式，严格求解，实际上就是**变分法**

- 工程应用中，数值求解：**基函数展开法（Ritz 法）**

以多项式展开为例，$U(x) = a_0 + a_1 x + a_2 x^2 + \ldots$

泛函极值问题转化为函数极值问题：$\Pi[U(x)] = \Pi(a_0, a_1, a_2, \ldots)$

- 物理图像

$\Pi_1(k)$ 形状固定，$\Pi_2(k)$ 的直线斜率随着 $F$ 的变化而变化，从而调节势能面

外力看成 $k \to 0, l \to \infty$ 的弹簧，$\Pi_2(k)$ 即为其弹性势能，$\Pi$ 为体系的焓

!!! example "弯曲"
    悬臂梁，端部施加外力 $F$.

    猜测挠度形式为 $w(x) = ax + bx^2 + cx^3 + dx^4$

    边界条件：$w|_{x=0} = 0, \, w'|_{x=0} = 0 \implies a = 0$

    $$
    M = EI w'' = EI (2b + 6cx + 12dx^2)
    $$

    应变能

    $$
    \begin{aligned}
        \Pi_1 &= \int_0^l \frac{M^2(x)}{2EI} \,\mathrm{d} x \\
        &= \frac{EI}{2} \int_0^l (2b + 6cx + 12dx^2)^2 \,\mathrm{d} x \\
        &= \frac{EI}{2} \left[ 4b^2 l + 36c^2 \frac{l^3}{3} + 144d^2 \frac{l^5}{5} + 24bc \frac{l^2}{2} + 48bd \frac{l^3}{3} + 144cd \frac{l^4}{4} \right] \\
        &= EIl \left[ 2b^2 + 6c^2 l^2 + \frac{72}{5} d^2 l^4 + 6bcl + 18 cd l^3 + 8bd l^2 \right]
    \end{aligned}
    $$

    外力势能

    $$
    \Pi_2 = -(-F) \cdot w|_{x=l} = F \cdot (bl^2 + cl^3 + dl^4)
    $$

    能量极值条件：

    $$
    \begin{aligned}
        \frac{\partial \Pi}{\partial b} &= EIl [4b + 6cl + 8d l^2] + F l^2 = 0 \\
        \frac{\partial \Pi}{\partial c} &= EIl [12c l^2 + 6bl + 18 d l^3] + F l^3 = 0 \\
        \frac{\partial \Pi}{\partial d} &= EIl \left[\frac{144}{5} d l^4 + 18 c l^3 + 8 b l^2 \right] + F l^4 = 0
    \end{aligned}
    $$

    写成矩阵形式

    $$
    \begin{bmatrix}
        4 & 6 & 8 \\
        6 & 12 & 18 \\
        8 & 18 & \frac{144}{5}
    \end{bmatrix}
    \begin{bmatrix}
        b \\
        cl \\
        dl^2
    \end{bmatrix} + 
    \frac{Fl}{EI}
    \begin{bmatrix}
        1 \\
        1 \\
        1
    \end{bmatrix}
    = 0
    $$

    解得

    $$
    \begin{bmatrix}
        b \\
        cl \\
        dl^2
    \end{bmatrix} = \frac{Fl}{EI}
    \begin{bmatrix}
        -\frac{1}{2} \\
        \frac{1}{6} \\
        0
    \end{bmatrix}
    $$

    ---

    若改成均匀载荷 $q$，则应变能 $\Pi_1$ 不变，外力势能改为

    $$
    \begin{aligned}
        \Pi_2 &= -\int_0^l (-q) \cdot w(x) \,\mathrm{d} x = q \int_0^l w(x) \,\mathrm{d} x \\
        &= q \left[ b \frac{l^3}{3} + c \frac{l^4}{4} + d \frac{l^5}{5} \right]
    \end{aligned}
    $$

    ---

    若改成外力偶 $M_{\text{e}}$，外力势能改为 $\Pi_2 = - (-M_{\text{e}}) \cdot w'|_{x=l}$

### 单轴压缩 Reprise

假设梁的总长度 $L$ 恒定

$$
\int_0^{L - \Delta} \sqrt{1 + w'^2} \,\mathrm{d} x = L
$$

若 $w' \ll 1$，有以下近似

$$
\int_0^{L - \Delta} \left(1 + \frac{1}{2} w'^2\right) \,\mathrm{d} x = L
$$

移项消去 $L$，并把积分上限近似为 $L$，

$$
\Delta = \frac{1}{2} \int_0^L w'^2 \,\mathrm{d} x.
$$

从直杆压到弯杆，

$$
\begin{equation} \tag{*9-1}
    \begin{aligned}
        \Delta \Pi_1 &= \int_0^L \frac{M^2}{2EI} \,\mathrm{d} x = \int_0^L \frac{1}{2} EI w''^2 \,\mathrm{d} x \\
        \Delta \Pi_2 &= -F \cdot \Delta = -F \cdot \frac{1}{2} \int_0^L w'^2 \,\mathrm{d} x
    \end{aligned}
\end{equation}
$$

#### Ritz 法

取一组完备函数系 $\psi_i(x), \, i = 1, 2, \ldots, n$，并且满足边界条件。将 $w(x)$ 展开为

$$
w(x) = \sum_{i=1}^n a_i \psi_i(x)
$$

总势能为

$$
\begin{equation} \tag{*9-2}
    \begin{aligned}
    \Delta \Pi &= \int_0^L \frac{1}{2} EI \left(\sum_{i=1}^n a_i \psi_i''(x)\right)^2 \,\mathrm{d} x - F \cdot \frac{1}{2} \int_0^L \left(\sum_{i=1}^n a_i \psi_i'(x)\right)^2 \,\mathrm{d} x \\[1em]
    &= \frac{1}{2} A(a_i) - \frac{F}{2} B(a_i)
    \end{aligned}
\end{equation}
$$

**平衡状态时，$\Delta \Pi \to \min$**，即

$$
\begin{equation} \tag{*9-3}
    \begin{aligned}
        \frac{\partial \Delta \Pi}{\partial a_i} &= 0, \, i = 1, 2, \ldots, n \\
        \implies \frac{\partial A(a_i)}{\partial a_i} &- F \frac{\partial B(a_i)}{\partial a_i} = 0
    \end{aligned}
\end{equation}
$$

下面计算 $\frac{\partial A(a_i)}{\partial a_i}$ 和 $\frac{\partial B(a_i)}{\partial a_i}$.

$$
\begin{aligned}
    \frac{\partial A(a_i)}{\partial a_i} &= EI \int_0^L \left(\sum_j a_j \psi_j''\right) \cdot \psi_i'' \,\mathrm{d} x = EI \sum_j 2 a_j \underset{K_{ij}}{\underbrace{\int_0^L \psi_j'' \psi_i'' \,\mathrm{d} x}} \\
    \frac{\partial B(a_i)}{\partial a_i} &= \int_0^L 2 \left(\sum_j a_j \psi_j'\right) \cdot \psi_i' \,\mathrm{d} x = 2 \sum_j a_j \underset{S_{ij}}{\underbrace{\int_0^L \psi_j' \psi_i' \,\mathrm{d} x}}
\end{aligned}
$$

代回上式，得

$$
\begin{equation} \tag{*9-4}
    \sum_j a_j \left[ EI K_{ij} - F S_{ij} \right] = 0
\end{equation}
$$

展开来写就是

$$
\left[EI
\begin{bmatrix}
    K_{11} & K_{12} & \cdots & K_{1n} \\
    K_{21} & K_{22} & \cdots & K_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    K_{n1} & K_{n2} & \cdots & K_{nn}
\end{bmatrix} - F
\begin{bmatrix}
    S_{11} & S_{12} & \cdots & S_{1n} \\
    S_{21} & S_{22} & \cdots & S_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    S_{n1} & S_{n2} & \cdots & S_{nn}
\end{bmatrix}
\right]
\begin{bmatrix}
    a_1 \\
    a_2 \\
    \vdots \\
    a_n
\end{bmatrix}
= 0
$$

i.e.

$$
\left[ EI [K] - F [S] \right] [a] = 0
$$

要使该一元 $n$ 次方程有非平凡解，必须有

$$
\begin{equation} \tag{*9-5}
    \det \left( EI [K] - F [S] \right) = 0
\end{equation}
$$

得到一组解 $\left \{ \begin{array}{l}
    F_1^* & F_2^* & \ldots & F_n^* \\
    [a]_1^* & [a]_2^* & \ldots & [a]_n^*
\end{array} \right.$. $F$ 只有取离散值，$[a]$ 才有非零解。得到的特征向量 $[a]^*$ 等比例缩放后仍为解，在参数空间 $\{a_i\}$ 中每一个特征向量对应着一条过原点的直线。总势能 $\Delta \Pi$ 在这些特征方向上取极值。

#### 确定临界压力

!!! question "稳定性"
    上面得到了压杆平衡的条件。那么，平衡态是否稳定？

**临界条件：$\Delta \Pi = 0$.** 结合式 \eqref{*9-2} 得到

$$
\begin{equation} \tag{*9-6}
    F_w = \frac{\displaystyle\int_0^L EI w''^2 \,\mathrm{d} x}{\displaystyle\int_0^L w'^2 \,\mathrm{d} x} = \frac{A(a_i)}{B(a_i)}
\end{equation}
$$

1. $F_w$ 是与 $w(x)$ 对应的临界力。每个可能的 $w(x)$ 都有一个对应的 $F_w$，当外力 $F > F_w$ 时，杆件就会失稳。
2. 找到 $w(x)$ 使得 $F_w$ 最小，$F_w$ 就是临界载荷 $F_{\text{cr}}$。

!!! example "Example"
    假设几何变形为

    $$
    w(x) = a_1 \sin \frac{\pi x}{L}
    $$

    此时基函数个数 $n = 1$，$[K], [S]$ 都是 $1 \times 1$ 矩阵（标量）

    $$
    \left \{
        \begin{aligned}
            \psi'_1 &= \frac{\pi}{L} \cos \frac{\pi x}{L} \\
            \psi''_1 &= -\frac{\pi^2}{L^2} \sin \frac{\pi x}{L}
        \end{aligned}
    \right.
    \implies
    \left \{
        \begin{aligned}
            K_{11} &= \int_0^L \psi''_1 \psi''_1 \,\mathrm{d} x = \left(\frac{\pi}{L}\right)^4 \frac{L}{2} \\
            S_{11} &= \int_0^L \psi'_1 \psi'_1 \,\mathrm{d} x = \left(\frac{\pi}{L}\right)^2 \frac{L}{2}
        \end{aligned}
    \right.
    $$

    代回式 \eqref{*9-5}，得到

    $$
    EI \left(\frac{\pi}{L}\right)^4 \frac{L}{2} - F_w \left(\frac{\pi}{L}\right)^2 \frac{L}{2} = 0 \implies F_w = EI \frac{\pi^2}{L^2} \approx 9.87 \frac{EI}{L^2}
    $$

    ---

    取

    $$
    w(x) = a_1 x(x-L)
    $$

    可求得 $F_w = 12\frac{EI}{L^2}$。可见在这个 $w(x)$ 的选取下，得到的解没有上面*好*，但也是正确的。

    ---

    再加一项，参数空间维数为 $2$

    $$
    w(x) = a_1 \sin \frac{\pi x}{L} + a_2 \sin \frac{2\pi x}{L}
    $$

    