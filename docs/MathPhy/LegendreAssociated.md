# 连带 Legendre 函数

> 回顾
>
> - 波动方程
>
> $$u_{tt} - a^2u_{xx} = f(x, t)$$
>
> - 输运问题
>
> $$u_t - a^2 u_{xx} = f(x, t)$$
>
> - 稳定场分布
>
> $$\nabla^2 u = f(\vec{r})$$
>
> 解的适定性：
>
> - 存在性
> - 唯一性
>   - 同一时刻同一位置的物理量应该是唯一的
> - 稳定性
>   - 允许个别点的矛盾/挖掉个别点不影响整体结果
>
> ---
>
> - 一维波动方程
>
> $$u_{tt} - a^2 u_{xx} = f(x, t), \quad u|_{x=a} = u|_{x=b} = 0$$
>
> 1. 齐次化，分离变量法：$u(x, t) = X(x)T(t)$，得到
>
> $$\frac{T''(t)}{a^2 T(t)} = \frac{X''(x)}{X(x)} = -\lambda$$
>
> 求得本征函数 $X(x) = A\sin \frac{(x-a)n\pi}{b-a}$.
>
> 2. 广义傅里叶级数展开
>
> $$\left(T_n''(t) - a^2 \left(\frac{n\pi}{b-a}\right)^2\right)\sin \frac{(x-a)n\pi}{b-a} = f(x, t)$$
>

母函数

$$
\frac{1}{\sqrt{R^2 + r^2 - 2Rr\cos\theta}} = 
\begin{cases}
\displaystyle \sum_{l=0}^{\infty} \frac{r^l}{R^{l+1}} P_l(\cos\theta), & r < R \\[2em]
\displaystyle \sum_{l=0}^{\infty} \frac{R^l}{r^{l+1}} P_l(\cos\theta), & r > R
\end{cases}
$$

球坐标 Laplace 方程

$$\nabla^2 u = 0, \quad u = u(r, \theta, \varphi) = R(r)\Theta(\theta)\Phi(\varphi)$$

$$\frac{1}{r^2} \frac{\partial}{\partial r} \left(r^2 \frac{\partial R}{\partial r}\right) + \frac{1}{r^2\sin\theta} \frac{\partial}{\partial \theta} \left(\sin\theta \frac{\partial \Theta}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta} \frac{\partial^2 \Phi}{\partial \varphi^2} = 0$$

$$\Phi''(\varphi) + m^2 \Phi(\varphi) = 0 \Rightarrow \Phi(\varphi) = A\cos m\varphi + B\sin m\varphi,\, m \in \mathbb{Z}$$

$$\sin \theta \frac{d}{d\theta} \left(\sin\theta \frac{d\Theta}{d\theta}\right) + \left[l(l+1) - \frac{m^2}{\sin^2\theta}\right]\Theta = 0$$

作变换 $x = \cos\theta$，得到

$$(1-x^2) \Theta''(x) - 2x\Theta'(x) + \left[l(l+1) - \frac{m^2}{1-x^2}\right]\Theta(x) = 0$$

如果直接代入 $\Theta(x) = \sum_{k=0}^{\infty} a_k x^k$，会得到 $a_{k+2}, a_k, a_{k-2}$ 三项之间的关系，极为复杂！

由于 $1-x^2$ 反复出现，尝试令 $\Theta(x) = (1-x^2)^A y(x)$，为了消去 $y(x)$ 前面含 $x$ 的讨厌的项（这会使递推关系复杂），有 $4A^2 x^2 - m^2 = m^2(1-x^2)$，即 **$A = \pm \frac{m}{2}$**. 于是

$$(1-x^2)y''(x) - 2(m+1)xy'(x) + \left[l(l+1) - m(m+1)\right]y(x) = 0$$

将 $m=0$ 的 Legendre 方程求 $m$ 次导：

$$\left[(1-x^2)P_l''(x) - 2xP_l'(x) + l(l+1)P_l(x)\right]^{[m]} = 0$$

得到

$$(1-x^2)P_l^{[m+2]}(x) - 2(m+1)xP_l^{[m+1]}(x) + \left[l(l+1) - m(m+1)\right]P_l^{[m]}(x) = 0$$

对比得到 $y(x) = P_l^{[m]}(x)$，收敛半径为 $|x| < 1$. 故

$$\Theta(x) = (1-x^2)^{\frac{m}{2}} P_l^{[m]}(x) \equiv P_l^{m}(x)$$

称为{==连带 Legendre 函数==}。因为 $P_l(x)$ 最高次幂为 $x^l$，所以求导次数 $|m| \leq l$（不然就变成 $0$ 了）。

- 微分表示

$$\Theta(x) = P_l^m(x) = \frac{1}{2^l l!} (1-x^2)^{\frac{m}{2}} \frac{d^{l+m}}{dx^{l+m}}(x^2-1)^l$$

$m$ 为负时，

$$\tilde{\Theta}(x) = P_l^{-m}(x) = (1-x^2)^{-\frac{m}{2}} \frac{1}{2^l l!} \frac{d^{l-m}}{dx^{l-m}}(x^2-1)^l$$

因为不满足自然边界条件的解扔掉了一个，所以 $P_l^m(x)$ 和 $P_l^{-m}(x)$ 应是线性相关的，两者只差一个常数因子。

$$\frac{P_l^m(x)}{P_l^{-m}(x)} = \frac{(1-x^2)^m \frac{d^{l+m}}{dx^{l+m}}(x^2-1)^l}{(1-x^2)^{-m} \frac{d^{l-m}}{dx^{l-m}}(x^2-1)^l} = (-1)^m \frac{(l+m)!}{(l-m)!}$$

这个结果在两个勒让德函数相乘后计算积分时（例如下面的证明正交性）比较好用，因为 $P_l^m(x)P_k^m(x)$ 相乘会出来一个 $(1-x^2)^m$，会很麻烦，可以把其中一个换成 $P_l^{-m}(x)$，这样就可以消去。

- 积分公式

$$f(x) = \frac{1}{2\pi \mathrm{i}} \oint \frac{f(z)}{z-x} dz$$

- 正交性

$$
\begin{aligned}
\int_{-1}^{1} P_l^m(x) P_k^m(x) dx &= (-1)^m \frac{(k+m)!}{(k-m)!} \int_{-1}^{1} P_l^m(x) P_k^{-m}(x) dx \\
&= (-1)^m \frac{(k+m)!}{(k-m)!} \int_{-1}^{1} P_l^{[m]}(x) P_k^{[m]}(x) dx \\
&= (-1)^m \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \int_{-1}^{1} \frac{d^{l+m}}{dx^{l+m}}(x^2-1)^l \frac{d^{k-m}}{dx^{k-m}}(x^2-1)^k dx \\
&= (-1)^m \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \int_{-1}^{1} d\frac{d^{l+m-1}}{dx^{l+m-1}}(x^2-1)^l \frac{d^{k-m}}{dx^{k-m}}(x^2-1)^k \\
&= (-1)^m \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \left(\left. \frac{d^{l+m-1}}{dx^{l+m-1}}(x^2-1)^l \frac{d^{k-m}}{dx^{k-m}}(x^2-1)^k \right|_{-1}^{1} - \int_{-1}^{1} \frac{d^{l+m-1}}{dx^{l+m-1}}(x^2-1)^l \frac{d^{k-m+1}}{dx^{k-m+1}}(x^2-1)^k dx \right) \\
&= (-1)^{m+1} \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \int_{-1}^{1} \frac{d^{l+k}}{dx^{l+k}}(x^2-1)^{l+k} dx \\
&= (-1)^{m+1} \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \int_{-1}^{1} \frac{d^l}{dx^l} (x^2-1)^l \frac{d^k}{dx^k} (x^2-1)^k dx \\
&= (-1)^{m+1} \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \int_{-1}^{1} P_l(x) P_k(x) dx \\
&= (-1)^{m+1} \frac{(k+m)!}{(k-m)!} \frac{1}{2^l l!} \frac{1}{2^k k!} \delta_{lk}
\end{aligned}
$$