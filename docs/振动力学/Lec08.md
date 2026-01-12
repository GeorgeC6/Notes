# 线性振动系统的最优控制


## 可控性

对于线性定常连续系统

$$
\dot{\boldsymbol{y}} = \boldsymbol{A} \boldsymbol{y} + \boldsymbol{B} \boldsymbol{u}(t)
$$

可控性的充要条件是

$$
\mathrm{rank} \begin{bmatrix} \boldsymbol{B} & \boldsymbol{A} \boldsymbol{B} & \boldsymbol{A}^2 \boldsymbol{B} & \cdots & \boldsymbol{A}^{2n-1} \boldsymbol{B} \end{bmatrix} = 2n
$$

!!! note "Cayley-Hamilton 定理"
    $$
    \mathrm{e}^{\boldsymbol{A}t} = \sum_{i=0}^{2n-1} a_i(t) \boldsymbol{A}^i
    $$

## 可观性

状态变量无法直接得到，能否通过系统输出推断出系统状态变量？

$$
\begin{aligned}
    \dot{\boldsymbol{y}} &= \boldsymbol{A} \boldsymbol{y} + \boldsymbol{B} \boldsymbol{u}(t) \\
    \boldsymbol{z} &= \boldsymbol{E} \boldsymbol{y}
\end{aligned}
$$

给定以上线性定常系统，若对任意规定的输入 $\boldsymbol{u}(t)$，总存在有限时间 $t_1 > t_0$，是的系统根据区间 $t_0 \leq t \leq t_1$ 上的输入 $\boldsymbol{u}(t)$ 和观测 $\boldsymbol{z}(t)$，就能唯一地确定出系统在时刻 $t_0$ 的每一状态 $\boldsymbol{y}(t_0)$，那么就称该系统在 $t_0$ 是**可观的**。若系统在讨论了时间区间上的每一时刻都是可观的，则称该系统是完全可观的。

完全可观的充要条件

$$
\boldsymbol{P} = \begin{bmatrix}
    \boldsymbol{E} \\
    \boldsymbol{E} \boldsymbol{A} \\
    \vdots \\
    \boldsymbol{E} \boldsymbol{A}^{2n-1}
\end{bmatrix}, \quad
\mathrm{rank} (\boldsymbol{P}) = 2n
$$

> 反馈控制不是最优控制，最常用的是 PID 控制
>
> $$\boldsymbol{u} = \boldsymbol{A} y + \boldsymbol{B} \dot{\boldsymbol{y}} + \boldsymbol{C} \int_0^{t_0} \boldsymbol{y} \, \mathrm{d}t$$