题目中的 ODE 可以化为

$$r^2 \frac{\mathrm{d}^2 R}{\mathrm{d} r^2} + r \frac{\mathrm{d} R}{\mathrm{d} r} + \lambda R = 0.$$

这是一个 Euler 型方程, 使用变换 $r = e^t$, 化为

$$\frac{\mathrm{d}^2 R}{\mathrm{d} t^2} + \lambda R = 0.$$

1. 当 $\lambda = 0$ 时, 通解为 $R = C + D t = C + D \ln r$.
2. 当 $\lambda \neq 0$ 时, 通解为 $R = A e^{\sqrt{-\lambda} t} + B e^{-\sqrt{-\lambda} t} = A r^{\sqrt{-\lambda}} + B r^{-\sqrt{-\lambda}}$.

故一般解为

$$R = C + D \ln r + \sum_{n=1}^{\infty} \left( A_n r^{\sqrt{-\lambda_n}} + B_n r^{-\sqrt{-\lambda_n}} \right).$$

---

极坐标系下拉普拉斯方程为

$$\nabla^2 u = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial u}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 u}{\partial \varphi^2} = 0.$$

设 $u = R(r) \Phi(\varphi)$, 则有

$$
\left\{
\begin{array}{c}
    \Phi'' + \lambda \Phi = 0, \\
    r^2 R'' + r R' - \lambda R = 0.
\end{array}
\right.
$$

对于 $\Phi$ 方程, 为满足自然边界条件 $\Phi(\varphi+2\pi) = \Phi(\varphi)$, 有 $\lambda = m^2$ ($m \in \mathbb{Z}$), 通解为

$$\Phi = 
\begin{cases}
    A \cos m\varphi + B \sin m\varphi, & m \neq 0, \\
    A + B \varphi, & m = 0.
\end{cases}$$

