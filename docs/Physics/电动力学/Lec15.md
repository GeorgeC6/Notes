> 2026/04/21 10:00
> 
> - 三维空间中（规范）场的统一描述

## 静电场和静磁场的微分形式描述

对于电场 $\vec{E}$：

$$
\left \{
    \begin{align}
        &\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0} && (\nabla \cdot \vec{E}) dV = \mathrm{d} (\vec{E} \cdot d\vec{S}) = \frac{\rho}{\varepsilon_0} dV \tag{1} \\
        &\nabla \times \vec{E} = 0 && (\nabla \times \vec{E}) \cdot d\vec{S} = \mathrm{d} (\vec{E} \cdot d\vec{l}) = 0 \tag{2}
    \end{align}
\right.
$$

对于磁场 $\vec{B}$：

$$
\left \{
    \begin{align}
        &\nabla \cdot \vec{B} = 0 && (\nabla \cdot \vec{B}) dV = \mathrm{d} (\vec{B} \cdot d\vec{S}) = 0 \tag{3} \\
        &\nabla \times \vec{B} = \mu_0 \vec{J} && (\nabla \times \vec{B}) \cdot d\vec{S} = \mathrm{d} (\vec{B} \cdot d\vec{l}) = \mu_0 \vec{J} \cdot d\vec{S} \tag{4}
    \end{align}
\right.
$$

通过外微分，体元、面元、线元之间可以联系起来。假如我们想使用微分形式来描述一个场，该选用哪一项呢？

还是考虑宇称。我们希望：场的宇称为 $+1$. 电场 $\vec{E}$ 是矢量，宇称为 $-1$；磁场 $\vec{B}$ 是赝矢量，宇称为 $+1$. 而线元 $d \vec{l}$ 宇称为 $-1$，面元 $d S_i = d x_j \wedge d x_k$ 宇称为 $+1$，所以我们选用：

$$
\begin{equation}
    \begin{aligned}
        \mathcal{E} &= \vec{E} \cdot d \vec{l} \\
        \mathcal{B} &= \vec{B} \cdot d \vec{S}
    \end{aligned}
\end{equation}
$$

记 $\mathcal{E}, \mathcal{B}$ 为 $\mathcal{F}$ 的分量，则

$$
\mathrm{d} \mathcal{F} = 0
$$

对于 Maxwell 方程组的另外两个式子，我们想把 $\vec{E} \cdot d\vec{S}$ 和 $\vec{E} \cdot d\vec{l}$，$\vec{B} \cdot d\vec{l}$ 和 $\vec{B} \cdot d\vec{S}$ 用统一的运算建立联系。这需要引入**霍奇对偶**（Hodge dual/star），它把 $\omega^{(k)}$ 映射到 $\omega^{(d-k)}$，其中 $d$ 是空间维数。

$$
\begin{aligned}
    \omega^{(k)} &= \frac{1}{k!} \omega_{i_1 i_2 \cdots i_k} d x_{i_1} \wedge d x_{i_2} \wedge \cdots \wedge d x_{i_k} \\
    \star \omega^{(k)} &= \frac{1}{k! (d-k)!} \omega_{i_1 i_2 \cdots i_k} \epsilon_{i_1 i_2 \cdots i_d} d x_{i_{k+1}} \wedge d x_{i_{k+2}} \wedge \cdots \wedge d x_{i_d} 
\end{aligned}
$$

为什么有 Levi-Civita 符号？可以用简单的例子理解。对于电场通量 $\vec{E} \cdot d\vec{S} = E_1 d x_2 \wedge d x_3 + \ldots$，而 $E_1$ 可以视作 $E_{23}$