# 第七章 数值微分和数值积分

## 数值微分

$$
\begin{aligned}
    f'(x_0) &= \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} \\
    &\approx \frac{f(x_0 + h) - f(x_0)}{h}, \, 0 < h \ll 1
\end{aligned}
$$

### 差商型求导公式

Taylor 展开（实则类似中值定理）：

$$
\begin{aligned}
    f(x_0 + h) &= f(x_0) + h \cdot f'(x_0) + \frac{h^2}{2} f''(x_0) + \frac{h^3}{6} f'''(\xi_1) \\
    f(x_0 - h) &= f(x_0) - h \cdot f'(x_0) + \frac{h^2}{2} f''(x_0) - \frac{h^3}{6} f'''(\xi_2) \\
    &\implies \frac{f(x_0 + h) - f(x_0 - h)}{2h} = f'(x_0) + O(h^2)
\end{aligned}
$$

截断误差的误差限

$$
\left| \frac{f(x_0 + h) - f(x_0 - h)}{2h} - f'(x_0) \right| \leq \frac{h^2}{6} \frac{f'''(\xi_1) + f''(\xi_2)}{2} = O(h^2)
$$

#### 截断误差 & 舍入误差

$$
\begin{aligned}
    f(x_0 + h) &= \tilde{f}(x_0 + h) + e(x_0 + h) \\
    f(x_0 - h) &= \tilde{f}(x_0 - h) + e(x_0 - h)
\end{aligned}
$$

总误差限

$$
\begin{aligned}
    \left| f'(x_0) - \frac{\tilde{f}(x_0 + h) - \tilde{f}(x_0 - h)}{2h} \right| &= \underset{\text{Truncation error (math)}}{\underbrace{f'(x_0) - \frac{\tilde{f}(x_0 + h) - \tilde{f}(x_0 - h)}{2h}}} + \underset{\text{Round-off error (computer)}}{\underbrace{\frac{e(x_0 + h) - e(x_0 - h)}{2h}}} \\
    &\leq \frac{h^2}{6} M + \frac{\varepsilon}{h}
\end{aligned}
$$

其中 $|f'''(\xi)| \leq M$，$\varepsilon$ 是 $x_0$ 附近的机器精度。`eps` $\sim 10^{-16}$.

!!! example "例"
    `eps = 1e-16`，$M \approx 1.0$

    $$
    \text{err} = \frac{h^2}{6} M + \frac{\varepsilon}{h}
    $$

> **数值微分并不是步长越小越好。** 换句话说，数值微分是数值不稳定的 ![](../../images/tieba/nike.png)

### 插值型求导公式

!!! tip "Key idea"
    用插值多项式 $P_n(x)$ 近似 $f(x)$，对 $P_n(x)$ 做微积分。

    $$
    f^{(k)}(x) \approx \varphi^{(k)}_n(x)
    $$

设已知函数 $f(x)$ 在 $[a,b]$

Lagrange 插值

$$
R_n(x) = f(x) - \varphi_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \omega_{n+1}(x)
$$

求一阶导（注意 $\xi$ 是 $x$ 的函数）：

$$
R_n'(x) = \frac{\omega_{n+1}(x)}{(n+1)!} \cdot \frac{\mathrm{d}}{\mathrm{d}x} f^{(n+1)}(\xi) + \frac{f^{(n+1)}(\xi)}{(n+1)!} \omega_{n+1}'(x)
$$

这没法往下做了！由于 $\omega_{n+1}(x) = \prod_{i=0}^n (x - x_i)$，所以考虑节点处的余项导数 $R_n'(x_i)$：

$$
\begin{aligned}
    R_n'(x_i) &= \cancel{\frac{\omega_{n+1}(x_i)}{(n+1)!} \cdot \frac{\mathrm{d}}{\mathrm{d}x} f^{(n+1)}(\xi)} + \frac{f^{(n+1)}(\xi)}{(n+1)!} \omega_{n+1}'(x_i) \\
    &= \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{j=0, \, j \neq i}^n (x_i - x_j) \\
\end{aligned}
$$

> 最多 $5$ 个点插值，阶数 $n = 4$，否则 Runge 现象严重。

## 数值积分

### Newton-Cotes 求积公式

$f(x)$ 在 $[a,b]$ 上的定积分

$$
\int_a^b f(x) \,\mathrm{d}x = \lim_{\max \Delta x_i \to 0} \sum_{i=1}^n f(\xi_i) \Delta x_i \approx \sum_{k=0}^n A_k f(x_k) := I(f)
$$

- $x_k$ 是求积节点
- $A_k$ 是积分系数（权重）

过 $f(x_k), \, k = 0, 1, \ldots, n$ 做 Lagrange 插值多项式 $\varphi_n(x)$

$$
\begin{aligned}
    I(f) &= \int_a^b f(x) \,\mathrm{d}x \approx \int_a^b \varphi_n(x) \,\mathrm{d}x \\
    &= \int_a^b \sum_{k=0}^n l_k(x) f(x_k) \,\mathrm{d}x \\
    &= \sum_{k=0}^n \left(\int_a^b l_k(x) \,\mathrm{d}x\right) f(x_k)
\end{aligned}
$$

误差是多少？

$$
\int_a^b f(x) \,\mathrm{d}x - \int_a^b \varphi_n(x) \,\mathrm{d}x = \int_a^b \frac{f^{(n+1)}(\xi)}{(n+1)!} \omega_{n+1}(x) \,\mathrm{d}x \quad \text{???}
$$

这也没法做了！

!!! info "代数精度（Algebra accuracy）"
    一个求积公式

    $$
    I(f) := \sum_{k=0}^n A_k f(x_k)
    $$

    若对 $m$ 次多项式精确成立，但对 $m+1$ 次多项式不精确，则称其代数精度为 $m$。

若令 $x_k = a + kh, \, h = \frac{b-a}{n}$，即 $x_k$ 是 $[a,b]$ 上的等距节点。

- $n = 1$，梯形公式
- $n = 2$，Simpson 公式

!!! note "Theorem"
    当 $n$ 为奇数时，N-C 公式的代数精度为 $n$；当 $n$ 为偶数时，N-C 公式的代数精度为 $n+1$。

> Cotes 系数表从第 $7$ 行开始出现了负数，是数值不稳定的，默认不用！

### 复化求积

> 把大区间切成小区间，分别求积，再加起来。

先将区间 $[a,b]$ 分成 $n$ 等份，$x_k = a + kh, \, h = \frac{b-a}{n}$，$k = 0, 1, \ldots, n$。在每个小区间 $[x_k, x_{k+1}]$ 上用 N-C 公式计算。

逐次对半积分法：每次将区间分成两半，直到满足精度要求。是一种自适应算法（Adaptive method）。

> 计算类的公式看不懂？取 3~4 个区间手算一遍！

### Romberg 求积公式

#### Richardson 外推法

设 $I_1$ 是某种 $I$ 的数值近似，近似值是步长 $h$ 的函数，对误差做 Taylor 展开：

$$
\begin{equation}
    I - I_1(h) = a_1 h^p + a_2 h^{p+1} + a_3 h^{p+2} + \ldots
\end{equation}
$$

Richardson 想了个很骚的办法：

$$
\begin{equation}
    I - I_1\left(\small\frac{h}{2}\right) = \frac{a_1}{2^p} h^p + \frac{a_2}{2^{p+1}} h^{p+1} + \frac{a_3}{2^{p+2}} h^{p+2} + \ldots
\end{equation}
$$

\eqref{eq:1} $- 2^p \times$ \eqref{eq:2}：

$$

$$

!!! tip ""
    以上的积分方法工程实际中都不用 ![](../../images/tieba/hehe.png)

### Gauss 型积分公式

不等距选取节点！用代数精度来选取节点 $x_k$ 和权重 $A_k$。

$$
\int_a^b \rho(x) f(x) \,\mathrm{d}x \approx \sum_{i=1}^n A_i f(x_i)
$$

其中 $\rho(x) \geq 0$ 是固定的权函数。上面的求积公式要有 $m$ 次代数精度，充要条件是上式对 $x^l, \, l = 0, 1, \ldots, m$ 精确成立。记 $\mu_l = \int_a^b \rho(x) x^l \,\mathrm{d}x$，则有

$$
\left \{
    \begin{aligned}
        l = 0: & \quad \sum_{k=1}^n A_k = \mu_0 \implies A_1 + A_2 + \ldots + A_n = \mu_0 \\
        l = 1: & \quad \sum_{k=1}^n A_k x_k = \mu_1 \implies A_1 x_1 + A_2 x_2 + \ldots + A_n x_n = \mu_1 \\
        \ldots \\
        l = m: & \quad \sum_{k=1}^n A_k x_k^m = \mu_m \implies A_1 x_1^m + A_2 x_2^m + \ldots + A_n x_n^m = \mu_m
    \end{aligned}
\right.
$$

此方程组也称 **Gauss 方程组**。$A_1, A_2, \ldots, A_n, x_1, x_2, \ldots, x_n$ 共 $2n$ 个未知数，$m + 1$ 个方程。最多能确定 $m = 2n - 1$ 的代数精度。

这个方程组是非线性的，我们不直接求解。

现令 $\omega(x) = (x - x_1)(x - x_2) \cdots (x - x_n)$，则由多项式除法，

$$
p_{2n-1}(x) = \omega_n(x) \cdot q_{n-1}(x) + r_{n-1}(x)
$$

则

$$
\begin{aligned}
    \int_a^b \rho(x) p_{2n-1}(x) \,\mathrm{d}x &= \int_a^b \rho(x) \left( \omega_n(x) \cdot q_{n-1}(x) + r_{n-1}(x) \right) \,\mathrm{d}x \\
    &= \int_a^b \rho(x) \omega_n(x) q_{n-1}(x) \,\mathrm{d}x + \int_a^b \rho(x) r_{n-1}(x) \,\mathrm{d}x
\end{aligned}
$$

若 $x_1, x_2, \ldots, x_n$ 是 Legendre 多项式的根，则 $\omega_n(x)$ 就是 $L_n(x)$，上式第一项积分为 $0$（因为 $q_{n-1}(x)$ 总能被 $L_0(x), \ldots, L_{n-1}(x)$ 线性表出），于是

$$
\int_a^b \rho(x) p_{2n-1}(x) \,\mathrm{d}x = \int_a^b \rho(x) r_{n-1}(x) \,\mathrm{d}x
$$

$x_1, x_2, \ldots, x_n$ 已经有了，调整 $A_k$ 使得

满足这些条件的积分公式

$$
A_k = \int_a^b \frac{\omega_n(x)}{(x - x_k) \cdot \omega_n'(x_k)} \,\mathrm{d}x, \quad k = 1, 2, \ldots, n
$$

称为 **Gauss 型积分公式**。

!!! example "部分 Gauss-Legendre 求积公式"
    $$
    \begin{aligned}
        n = 1: & \quad \int_{-1}^1 f(x) \,\mathrm{d}x \approx 2 f(0) \\
        n = 2: & \quad \int_{-1}^1 f(x) \,\mathrm{d}x \approx f\left(-\frac{1}{\sqrt{3}}\right) + f\left(\frac{1}{\sqrt{3}}\right) \\
    \end{aligned}
    $$