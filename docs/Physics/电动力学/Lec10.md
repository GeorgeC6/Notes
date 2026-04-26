> 2026/04/02 8:00
> 
> - 静电场中的边界问题
> - 镜像法

边界条件：

-   Dirichlet: $\phi(\vec{x} \in \partial V) = V(\vec{x} \in V)$
-   Neumann: $\vec{E}_\perp (\vec{x} \in \partial V) = W (\vec{x} \in V)$

1.  （理想）导体：存在电势差就会产生电流，而我们考虑稳恒的情形
    1.  内部 $\vec{E}(\vec{x}) = \vec{0}$
    2.  等势体 $\vec{E} \perp d \vec{S}$
    3.  在表面 $\vec{E}_{\text{外}} \cdot d \vec{S} = \frac{\sigma |d \vec{S}|}{\varepsilon_0}$，利用 $\hat{\vec{n}} = \frac{d \vec{S}}{|d \vec{S}|}$，可以得到 $\vec{E}_{\text{外}} \cdot \hat{\vec{n}} = \frac{\sigma}{\varepsilon_0}$，此即 Neumann 边界条件
    4.  导体（实心）：电荷只能在表面上（用高斯定理可以论证，内部有电荷违反了第一条）
    5.  空腔里没有电荷，则内表面也无电荷
2.  边界电荷
    -   一均匀带电薄膜将一个空腔区域分为 A, B 两部分
    -   A：$\nabla^2 \phi_A = 0, \; \phi_A \Big|_{\vec{x} \in \text{界面}} = \phi_B \Big|_{\vec{x} \in \text{界面}}$（Dirichlet 型）
    -   B：$\nabla^2 \phi_B = 0, \; \vec{E}_B \cdot d \vec{S} - \vec{E}_A \cdot d \vec{S} = \frac{\sigma |d \vec{S}|}{\varepsilon_0}$（Neumann 型）

$$\nabla^2 \phi = -\frac{\rho}{\varepsilon_0}$$

分解为 $\phi = \tilde{\phi} + \tilde{\tilde{\phi}}$.

通解 $\tilde{\phi}$ 前面已讨论过：将电势用球谐函数展开。径向分量 $r^\ell, r^{-(\ell+1)}$ 按问题的边界条件选取

-   延伸到无穷远：$b_{\ell, m} r^{-\ell-1}$
-   球形区域内：$a_{\ell, m} r^\ell$
-   球壳内：$a_{\ell, m} r^\ell + b_{\ell, m} r^{-\ell-1}$

特解 $\tilde{\tilde{\phi}}$ 的寻找*很有灵活性*：特解的边界条件是自己随意定的，只要最终的 $\phi$ 满足实际的边界条件就行了。

:bulb: 无限延伸的均匀带电平板周围框一个区域出来，和这个空腔区域内有一个均匀带电薄膜在中间挡着是等价的；甚至再在旁边加一个无限大均匀带负电的平板也是等价的

:question: 在无限空间 $\mathbb{R}^3$ 中，只要库仑定律就能得到电势分布。但是在一个有限区域内，外部的情况无从得知，如何得到推广的“库仑定律”？

$$
\begin{aligned}
    \phi(\vec{x}) = \int \frac{\rho(\vec{x}') \, d^3 \vec{x}'}{\varepsilon_0} \boxed{\frac{1}{4 \pi |\vec{x} - \vec{x}'|}}
\end{aligned}
$$