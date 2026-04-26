# Chapter 4: Basic Aspects of Discretization

## Finite Difference Method

用 $u_{i,j}$ 表示 $(i, j)$ 点的速度分量

$$
\begin{equation}
    u_{i+1, j} = u_{i, j} + \left. \frac{\partial u}{\partial x} \right|_{i, j} \Delta x + \left. \frac{\partial^2 u}{\partial x^2} \right|_{i, j} \frac{\Delta x^2}{2} + \left. \frac{\partial^3 u}{\partial x^3} \right|_{i, j} \frac{\Delta x^3}{6} + \cdots
\end{equation}
$$

一阶精度向前差分：

$$
\begin{equation}
    \left. \frac{\partial u}{\partial x} \right|_{i, j} = \frac{u_{i+1, j} - u_{i, j}}{\Delta x} + \mathcal{O}(\Delta x)
\end{equation}
$$

二阶精度中心差分：

$$
\begin{equation}
    \left. \frac{\partial u}{\partial x} \right|_{i, j} = \frac{u_{i+1, j} - u_{i-1, j}}{2 \Delta x} + \mathcal{O}(\Delta x^2)
\end{equation}
$$

> 精度更高，但需要更多信息

