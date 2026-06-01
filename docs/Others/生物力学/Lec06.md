# 随机行走

将分子链的构型看成是随机行走（Random walk，也称醉汉行走，Drunkard's walk）产生的结果：Macromolecules are regarded as rigid segments connected by hinges. 要求：分子链长度大于弛豫长度（$l \gg \xi_p$）

考虑一维随机行走，每(steps)长为 $a$，向左向右的概率都是 50%（not biased），即 $P(k_n = 1) = P(k_n = -1) = 1/2$. 由此得到递推公式

$$
x_n = x_{n - 1} + k_n a
$$

可以证明，$\braket{x_n} = 0$，

$$
\begin{aligned}
    \braket{k_n} &= 1 \times \frac{1}{2} + (-1) \times \frac{1}{2} = 0 \\
    \implies \braket{x_n} &= \braket{x_{n - 1} + k_n a} = \braket{x_{n - 1}} + a \braket{k_n} = \braket{x_{n - 1}} = \cdots = \braket{x_0} = 0.
\end{aligned}
$$

平方统计平均 $\braket{x_n^2} = N a^2$，

$$
\begin{aligned}
    \braket{x_n^2} &= \braket{(x_{n - 1} + k_n a)^2} = \braket{x_{n - 1}^2} + 2 a \braket{x_{n - 1} k_n} + a^2 \braket{k_n^2} \\
    \text{given that } k_n^2 &= 1, \quad \braket{x_{n - 1} k_n} = (+1) \times \frac{1}{2} \braket{x_{n - 1}} + (-1) \times \frac{1}{2} \braket{x_{n - 1}} = 0, \\
    \implies \braket{x_n^2} &= \braket{x_{n - 1}^2} + a^2 = \cdots = N a^2.
\end{aligned}
$$


## Persistence Length

The length scale over which the tangent-tangent correlation function decays along the chain

$$
\braket{\mathbf{t}(s) \cdot \mathbf{t}(u)} = \mathrm{e}^{-|s - u| / \xi_p}
$$

相关函数

$$
\begin{aligned}
    \mathbf{R} = \int_0^L \mathbf{t}(s) \, \mathrm{d} s \implies \braket{\mathbf{R}^2} &= \left\langle \int_0^L \mathrm{d} s \, \mathbf{t}(s) \cdot \int_0^L \mathrm{d} u \, \mathbf{t}(u) \right\rangle = \int_0^L \mathrm{d} s \int_0^L \mathrm{d} u \, \mathrm{e}^{-|s - u| / \xi_p} \\
    &= 2 \int_0^L \mathrm{d} s \int_0^s \mathrm{d} u \, \mathrm{e}^{-(s - u) / \xi_p} = 2 \int_0^L \mathrm{d} s \, \xi_p (1 - \mathrm{e}^{-s / \xi_p}) \\
    &= 2 \xi_p L - 2 \xi_p^2 (1 - \mathrm{e}^{-L / \xi_p}) \\
\end{aligned}
$$

由于 $L \gg \xi_p$，所以

$$
\braket{R^2} = 2 \xi_p L
$$