> 2026/05/14 8:00
>
> - 洛伦兹变换
> - 电磁场的能量、动量，及其守恒定律

对 $\Lambda$ 的张量约束条件

$$
g_{\mu \nu} = g'_{\rho \sigma} \left.\Lambda^\rho\right._\mu \left.\Lambda^\sigma\right._\nu
$$

如果假定这个二阶张量

$$
\left.\Lambda^\mu\right._\nu = \frac{\partial x'^\mu}{\partial x^\nu}
$$

的各个分量与事件点无关，可以直接积分得到

$$
x'^\mu = \left.\Lambda^\mu\right._\nu x^\nu - a^\mu
$$

积分常数 $a^\mu$ 代表两个观测者之间的平移关系。

旋转变换满足

$$
\mathbf{1} = \mathbf{R}^T \mathbf{R}
$$

只考虑时间分量和第三个空间分量，$\mathbf{B} = \|\left.\Lambda^{\cdot}\right._\cdot\|, \; (\cdot) = 0, 3$ 满足

$$
\begin{pmatrix}
    -1 & \\
       & 1 \\
\end{pmatrix} = \mathbf{B}^T \begin{pmatrix}
    -1 & \\
       & 1 \\
\end{pmatrix} \mathbf{B}  
$$

尝试将这个式子往旋转变换的形式转化。左边的矩阵类似于单位阵，只是左上角元素差了个负号。数学上的技巧是将其分解为

$$
\begin{pmatrix}
    -1 & \\
       & 1 \\
\end{pmatrix} =
\begin{pmatrix}
    \mathrm{i} & \\
       & 1 \\
\end{pmatrix} \begin{pmatrix}
    \mathrm{i} & \\
       & 1 \\
\end{pmatrix}
$$

其实还有很多分解方法（比如 $\mathrm{i} \to -\mathrm{i}, \, 1 \to -1$），因为上面的式子是二次依赖的（形如 $a^2 = 1$ 的方程有两个解），但这个分解最为简单。代入上式得

$$
\begin{aligned}
    \begin{pmatrix}
        \mathrm{i} & \\
        & 1 \\
    \end{pmatrix} \begin{pmatrix}
        \mathrm{i} & \\
        & 1 \\
    \end{pmatrix} &= \mathbf{B}^T \begin{pmatrix}
        \mathrm{i} & \\
        & 1 \\
    \end{pmatrix} \begin{pmatrix}
        \mathrm{i} & \\
        & 1 \\
    \end{pmatrix} \mathbf{B} \\[2ex]
    \implies \mathbf{1} &= \underset{\text{“}\mathbf{R}\text{”}^T}{\underbrace{\begin{pmatrix}
        -\mathrm{i} & \\
        & 1 \\
    \end{pmatrix} \mathbf{B}^T \begin{pmatrix}
        \mathrm{i} & \\
        & 1 \\
    \end{pmatrix}}} \, \underset{\text{“}\mathbf{R}\text{”}}{\underbrace{\begin{pmatrix}
        \mathrm{i} & \\
        & 1 \\
    \end{pmatrix} \mathbf{B} \begin{pmatrix}
        -\mathrm{i} & \\
        & 1 \\
    \end{pmatrix}}}
\end{aligned}
$$

所以

$$
\mathbf{B} = \begin{pmatrix}
    -\mathrm{i} & \\
    & 1 \\
\end{pmatrix} \text{“}\mathbf{R}\text{”} \begin{pmatrix}
    \mathrm{i} & \\
    & 1 \\
\end{pmatrix} = \begin{pmatrix}
    -\mathrm{i} & \\
    & 1 \\
\end{pmatrix} \begin{pmatrix}
    \cos \tilde{\theta}_{03} & \sin \tilde{\theta}_{03} \\
    -\sin \tilde{\theta}_{03} & \cos \tilde{\theta}_{03}
\end{pmatrix} \begin{pmatrix}
    \mathrm{i} & \\
    & 1 \\
\end{pmatrix} = \begin{pmatrix}
    \cos \tilde{\theta}_{03} & -\mathrm{i} \sin \tilde{\theta}_{03} \\
    -\mathrm{i} \sin \tilde{\theta}_{03} & \cos \tilde{\theta}_{03}
\end{pmatrix}
$$

但我们期待 $\mathbf{B}$ 是一个实矩阵！所以 $\tilde{\theta}_{03}$ 得是纯虚数（一般的复数有两个自由度，就没必要考虑了）。令 $\tilde{\theta}_{03} = -\mathrm{i} \theta_{03}$（加负号只是为了后面导出的速度关系好看些），得到

$$
\mathbf{B} = \begin{pmatrix}
    \cosh \theta_{03} & -\sinh \theta_{03} \\
    -\sinh \theta_{03} & \cosh \theta_{03}
\end{pmatrix}
$$

现在来考虑速度的变换关系。测量同一个质点，A 测得的坐标为 $(x^0, \vec{x})$，B 测得 $(x'^0, \vec{x}')$。对于速度的第三个分量，A 给出 $d x^3/d x^0$，B 给出 $d x'^3/d x'^0$. 由 0,3 分量的变换关系

$$
\begin{equation} \tag{10.2} \label{eq:coord_transform_03}
    \begin{pmatrix}
        x'^0 \\
        x'^3 \\
    \end{pmatrix} = \begin{pmatrix}
        \cosh \theta_{03} & -\sinh \theta_{03} \\
        -\sinh \theta_{03} & \cosh \theta_{03} \\
    \end{pmatrix} \begin{pmatrix}
        x^0 \\
        x^3 \\
    \end{pmatrix}
\end{equation}
$$

得

$$
\begin{aligned}
    \frac{d x'^3}{d x'^0} &= \frac{-\sinh \theta_{03} d x^0 + \cosh \theta_{03} d x^3}{\cosh \theta_{03} d x^0 - \sinh \theta_{03} d x^3} \\
    \implies \frac{v'^3}{c} &= \frac{-\sinh \theta_{03} + \cosh \theta_{03} v^3/c}{\cosh \theta_{03} - \sinh \theta_{03} v^3/c}
\end{aligned}
$$

若 B 就是那个质点，在 B 自己看来 $v'^3 = 0$，记 A 眼中 B 的速度为 $u^3$，则上式分子为零 $-\sinh \theta_{03} + \cosh \theta_{03} u^3/c = 0$，解得

$$
\begin{equation} \tag{10.3} \label{eq:velocity_rapidity_relation} 
    \boxed{
        u = c \tanh \theta_{03}
    }
\end{equation}
$$

速度 $u$ 和 $\theta_{03}$ 通过双曲正切联系，可以发现两者为单调递增的关系，且 $u$ 的上界为 $c$. 因此 $\theta_{03}$ 可视为表征速度的参数，称为**快度**（rapidity）。

下面用速度表示坐标变换关系 \eqref{eq:coord_transform_03}. 由 \eqref{eq:velocity_rapidity_relation} 式和 $\cosh^2 - \sinh^2 = 1$ 可得 $\cosh \theta_{03} = 1/\sqrt{1 - u^2/c^2}$，$\sinh \theta_{03} = u/c \cdot 1/\sqrt{1 - u^2/c^2}$，代入 \eqref{eq:coord_transform_03} 得

$$
\begin{pmatrix}
    x'^0 \\
    x'^3
\end{pmatrix} = \begin{pmatrix}
    \frac{1}{\sqrt{1 - u^2/c^2}} & -\frac{u/c}{\sqrt{1 - u^2/c^2}} \\
    -\frac{u/c}{\sqrt{1 - u^2/c^2}} & \frac{1}{\sqrt{1 - u^2/c^2}} \\
\end{pmatrix} \begin{pmatrix}
    x^0 \\
    x^3
\end{pmatrix}
$$

记 $x^0 = ct, \, x'^0 = c t'$，上式就变成了熟悉的形式：

$$
\begin{equation}
    \left \{
    \begin{aligned}
        t' &= \frac{t - u x^3/c^2}{\sqrt{1 - u^2/c^2}} \\
        x'^3 &= \frac{x^3 - u t}{\sqrt{1 - u^2/c^2}}
    \end{aligned}
    \right.
\end{equation}
$$

此即**洛伦兹变换**（Lorentz transformation）。


> 导出了洛伦兹变换，并不意味着我们已经进入了狭义相对论的讨论。洛伦兹变换只是为了让**麦克斯韦方程组与等效原理相协调**，所导出的时空变换关系。
>
> 狭义相对论更关心的是，物质的运动规律在洛伦兹变换下如何协调。

## 电磁场的能量和动量

之前我们讨论能量的时候，都是在静电场。因为电场可以对带电物体做功。不在静磁场中讨论，是因为带电物体在磁场中受到的洛伦兹力和速度相关，并且处处垂直，我们无法通过对带电物体的观测来推知静磁场的能量。但是我们相信，静磁场肯定是有能量的！不可能有一个没有能量的东西平白无故产生出一个磁场。

但我们连静磁场的能量都不知道，怎么能讨论电磁场的能量呢？

已知：

-   静电
-   能量守恒
    -   电荷守恒
        
        > 能量、电荷都是可加量，对于一个可延展的系统，我们的问题是，他们在系统中是怎么分布的。当我们讨论分布的密度、时间上的变化率时（选取时间切片考察通过截面的物理量的多少），自然避不开讨论通量、流量这些概念。

        $$
        \nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0 \implies \mathrm{d} \mathcal{I} = 0
        $$

        其中

        $$
        \begin{aligned}
            \mathcal{I} &= Z \rho \, dx^{123} - \mu_0 J^1 \, d x^{023} + \cdots \\
            &= \frac{1}{3!} I_{\mu \nu \rho} \, d x^{\mu \nu \rho} = \frac{1}{3!} I^{\sigma} \epsilon_{\sigma \mu \nu \rho} \, d x^{\mu \nu \rho}
        \end{aligned}
        $$

        这里 $I^{\sigma} = (Z \rho, \mu \vec{J})$ 称为**四电流**。外微分 $\mathrm{d} \mathcal{I} = 0$ 可以化为

        $$
        \partial_\mu I^\mu = 0
        $$

        > :bulb: 对于形如
        >
        > $$
        > \partial_\mu T^{\mu \cdots} = 0^{\cdots}
        > $$
        >
        > 的方程，这往往意味着对于 $\mu$ 指标存在守恒性（连续流）
    
