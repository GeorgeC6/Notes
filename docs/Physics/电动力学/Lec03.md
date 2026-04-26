# 微分形式

> 2026/03/10 10:00
>
> - 静电场的环量与通量
> - 微分形式

线分布：$d \vec{l} = (d x_1, d x_2, d x_3), \, d x_i = \frac{d x_i}{d t} dt$

$$
dl = |d \vec{l}| = \sqrt{\sum_i^3 \Big(\frac{d x_i}{d t}\Big)^2} dt
$$

三维空间中确定一条曲线，需要两个方程：

$$
\left \{
    \begin{aligned}
        & f(\vec{x}) = 0 \\
        & g(\vec{x}) = 0
    \end{aligned}
\right.
$$

$\vec{x}(t)$ 在曲线上，$\vec{x} + d \vec{x}$ 也在曲线上：

$$
\left.
\begin{aligned}
    \underset{= 0}{\underbrace{f(\vec{x} + d \vec{x})}} = \underset{= 0}{\underbrace{f(\vec{x})}} + \underset{= 0}{\underbrace{\ldots}} \iff d f(\vec{x}) &= \sum_i^3 \frac{\partial f}{\partial x_i} d x_i = 0 \\
    d g(\vec{x}) &= \sum_i^3 \frac{\partial g}{\partial x_i} d x_i = 0
\end{aligned}
\right \} \implies \left \{
    \begin{aligned}
        d x_2 &= d x_2 (d x_1) \\
        d x_3 &= d x_3 (d x_1)
    \end{aligned}
\right.
$$

面分布：$d S = d x_1 d x_2$. 将 $x_1$-$x_2$ 系逆时针旋转角度 $\theta$，得到 $y_1$-$y_2$ 系，则理应有 $d x_1 d x_2 = d y_1 d y_2$. 但是如果我们这么做：先写出变换关系

$$
\begin{aligned}
    d x_1 &= \cos \theta d y_1 - \sin \theta d y_2 \\
    d x_2 &= \sin \theta d y_1 + \cos \theta d y_2
\end{aligned}
$$

若直接将上式代入计算 $d x_1 d x_2$，会得到

$$
d x_1 d x_2 = (\cos^2 \theta - \sin^2 \theta) d y_1 d y_2 + \sin \theta \cos \theta (d y_1^2 - d y_2^2)
$$

不合理之处：

1. 和角度有关！
2. $d y_1^2, d y_2^2$ 是什么鬼！不可能出现在二重积分中！

:point_right: 人为引入规则： $d x^2 = 0$

!!! note "楔积（wedge product）"
    $d x_1 d x_2 \to d x_1 \wedge d x_2$

    条件：$dx \wedge dx = 0$

    将 $dx$ 替换为 $dy + dz$，可推出反对称性：$dy \wedge dz = - dz \wedge dy$

引入楔积后，旋转变换的结果就变成了

$$
\begin{aligned}
    d x_1 \wedge d x_2 &= \cos^2 \theta d y_1 \wedge d y_2 - \sin^2 \theta d y_2 \wedge d y_1 + \sin \theta \cos \theta (d y_1 \wedge d y_1 - d y_2 \wedge d y_2) \\
    &= (\cos^2 \theta + \sin^2 \theta) d y_1 \wedge d y_2 \\
    &= d y_1 \wedge d y_2
\end{aligned}
$$

同理，对于极坐标 $x_1 = r \cos \theta, \, x_2 = r \sin \theta$，有

$$
\begin{aligned}
    d x_1 \wedge d x_2 &= \cos^2 \theta r d r \wedge d \theta - \sin^2 \theta r d r \wedge d \theta + \sin \theta \cos \theta (d r \wedge d r - r^2 d \theta \wedge d \theta) \\
    &= r d r \wedge d \theta
\end{aligned}
$$

曲面：逆着坐标轴方向做投影（为了保持右手系）

$$
d \vec{S} = (d x_2 \wedge d x_3, d x_3 \wedge d x_1, d x_1 \wedge d x_2)
$$

!!! example "球坐标"
    $$
    \left \{
        \begin{aligned}
            x_1 &= r \sin \theta \cos \varphi \\
            x_2 &= r \sin \theta \sin \varphi \\
            x_3 &= r \cos \theta
        \end{aligned}
    \right. \implies
    \left \{
        \begin{aligned}
            d x_1 &= \sin \theta \cos \varphi d r + r \cos \theta \cos \varphi d \theta - r \sin \theta \sin \varphi d \varphi \\
            d x_2 &= \sin \theta \sin \varphi d r + r \cos \theta \sin \varphi d \theta + r \sin \theta \cos \varphi d \varphi \\
            d x_3 &= \cos \theta d r - r \sin \theta d \theta
        \end{aligned}
    \right.
    $$

    取个特例，在 $r = 1$ 的球面上，$dr = 0$，

    $$
    d \vec{S} = (\sin^2 \theta \cos \varphi, \sin^2 \theta \sin \varphi, \sin \theta \cos \theta) \, d \theta \wedge d \varphi
    $$

    容易得到 $|d \vec{S}| = \sin \theta d \theta d \varphi$，显然正确。


体分布：$d V = d x_1 \wedge d x_2 \wedge d x_3$

!!! question "实际积分的时候怎么用楔积？"
    直接去掉 $\wedge$，交换积分顺序也不用加负号，只要关注上下限就可以了。

