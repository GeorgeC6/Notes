> 2026/04/07 10:00
> 
> - 镜像法/有限区域里的格林函数
> - 电流
> - 静磁场的基本规律

格林第二恒等式

$$
\begin{equation} \label{eq:green-identity-II}
    \int_V (u \nabla'^2 v - v \nabla'^2 u) \, \mathrm{d} V' = \int_{\partial V} (u \nabla' v - v \nabla' u) \cdot \mathrm{d} \vec{S}'
\end{equation}
$$

代入 $u(\vec{x}') = \phi(\vec{x}'), \, v(\vec{x}') = G(\vec{x}, \vec{x}'), \, \nabla'^2 G(\vec{x}, \vec{x}') + \delta^{(3)}(\vec{x} - \vec{x}') = 0$，得到

$$
\begin{equation} \label{eq:potential-green}
    \phi(\vec{x}') = \int_V \frac{\rho(\vec{x}') \, \mathrm{d} V'}{\varepsilon_0} G(\vec{x}, \vec{x}') - \int_{\partial V} \phi(\vec{x}') \nabla' G(\vec{x}, \vec{x}') \cdot \mathrm{d} \vec{S}' - \int_{\partial V} G(\vec{x}, \vec{x}') \vec{E}(\vec{x}') \cdot \mathrm{d} \vec{S}'
\end{equation}
$$

这在形式上得到了一个关于电势的恒等式，但是如果用它计算电势的，会有一些困难：

1.  $G(\vec{x}, \vec{x}')$ 的具体形式还未知，只知道满足泊松方程
2.  第二项的 $\phi(\vec{x}')$ 需要给出 Dirichlet 边界条件
3.  第三项的 $\vec{E}(\vec{x}')$ 需要给出 Neumann 边界条件
4.  这两种边界条件不能随便给出，需要满足某些兼容条件

为了解决这些问题，我们指定 $G(\vec{x}, \vec{x}')$ 满足一些边界条件以消去第二项或第三项：

1.  $G(\vec{x}, \vec{x}') \Big|_{\vec{x}' \in \partial V} = 0$，这样第三项为 0，

    $$
    \begin{equation} \label{eq:potential-green-dirichlet}
        \phi(\vec{x}') = \int_V \frac{\rho(\vec{x}') \, \mathrm{d} V'}{\varepsilon_0} G(\vec{x}, \vec{x}') - \int_{\partial V} \phi(\vec{x}') \nabla' G(\vec{x}, \vec{x}') \cdot \mathrm{d} \vec{S}'
    \end{equation}
    $$

2.  $(\nabla' G(\vec{x}, \vec{x}'))_\perp \Big|_{\vec{x}' \in \partial V} = 0$，这样第二项为 0，

    $$
    \begin{equation} \label{eq:potential-green-neumann}
        \phi(\vec{x}') = \int_V \frac{\rho(\vec{x}') \, \mathrm{d} V'}{\varepsilon_0} G(\vec{x}, \vec{x}') - \int_{\partial V} G(\vec{x}, \vec{x}') \vec{E}(\vec{x}') \cdot \mathrm{d} \vec{S}'
    \end{equation}
    $$

现在需要把 $G(\vec{x}, \vec{x}')$ 的具体形式定下来。对于一个边值问题，有三种信息：

-   几何信息
    - 形状
    - Dirichlet 型/Neumann 型边界条件
-   物理信息
    - 电荷分布 $\rho(\vec{x})$
    - $\partial V$ 上的电场信息（$\phi / E_\perp$）

而等势面作为边界条件是非常重要的。先看几个简单的镜像法例子。

!!! example "零势能面为 $z = 0$ 平面"
    $\vec{a} = (0, 0, -a)$ 处有一点电荷 $Q$，则镜像电荷 $Q_M = -Q, \, \vec{a}_M = (0, 0, a)$

    $$
    \phi(\vec{x}) = \frac{Q}{\varepsilon_0} \left( \frac{1}{4 \pi} \frac{1}{|\vec{x} - \vec{a}|} - \frac{1}{4 \pi} \frac{1}{|\vec{x} - \vec{a}_M|} \right)
    $$

    把 $Q/\varepsilon_0$ 提出来是为了与 \eqref{eq:potential-green-dirichlet} 中对比。由于边界为零势能面，第二项为零；第一项的 $\rho(\vec{x}') = Q \delta^{(3)}(\vec{x}' - \vec{a}')$，所以可以得到此问题的格林函数

    $$
    \begin{equation} \label{eq:green-func-dirichlet}
        G(\vec{x}, \vec{x}') = \frac{1}{4 \pi} \left( \frac{1}{|\vec{x} - \vec{x}'|} - \frac{1}{|\vec{x} - \vec{x}'_M|} \right)
    \end{equation}
    $$

    其中 $\vec{x}'_M = (x', y', -z')$ 是 $\vec{x}'$ 关于 $z = 0$ 平面的镜像点。

!!! example "零电场面为球面"
    零势能球面 $r = R$ 之外在 $\vec{r} = (0, 0, r)$ 处有一个点电荷 $Q$，则镜像电荷 $Q_M = -\frac{R}{r} Q, \, \vec{r}_M = (0, 0, R^2 / r)$ 

    $$
    \begin{equation} \label{eq:green-func-neumann}
        G(\vec{x}, \vec{x}') = \frac{1}{4 \pi} \left( \frac{1}{|\vec{x} - \vec{x}'|} - \frac{R}{r'} \frac{1}{|\vec{x} - \vec{x}'_M|} \right)
    \end{equation}
    $$

    其中 $\vec{x}'_M = (x', y', R^2 / z')$ 是 $\vec{x}'$ 关于球面 $r = R$ 的镜像点。