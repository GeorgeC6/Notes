> 2026/06/09 10:00
> 
> - 电磁波的推迟格林函数
> - 空间局域简谐带电系统的电磁辐射

!!! info "关于在复数域讨论电磁场"
    讨论真空中电磁场时，在复数域中讨论。一般来说这样是没问题的，什么时候取实部也关系不大；但如果所研究的量不是线性依赖于电场/磁场时，需要注意取实部的时机。

    例如，验证 $\vec{E} \perp \vec{B}$ 时，需要先各自取实部再做内积；在算 $|\vec{E}|^2, \; \vec{S} \propto \vec{E} \times \vec{B}$ 时，同样要先取实部。

## 电磁波的推迟格林函数

电磁波是怎么来的？这涉及电磁场与带电物质的耦合。带电物质，也就是四电流 $I^\mu$，对电磁场的影响可以用格林函数来描述。

$$
\begin{aligned}
    I^\mu(x) &= \int d^4 x' I^\mu(t', x') \delta^{(4)}(x - x') \\
    \implies A^\mu(x) &= \int d^4 x' I^\mu(t', x') K(x - x')
\end{aligned}
$$

其中 $K(x - x')$ 满足

$$
- \partial_\nu \partial^\nu K(x - x') = \delta^{(4)}(x - x')
$$

这很适合在傅里叶空间中讨论，因为达朗贝尔算符仅仅作用于相位因子。

$$
K(x - x') = \int \frac{d^4 p}{(2\pi)^4} \bbox[5px, border:1.5px dashed orange]{\frac{1}{p_\mu \, p^\mu}} \, e^{\mathrm{i} p_\nu (x - x')^\nu}
$$

虚线框内可以记作 $\tilde{K}(p)$. 由于是在闵氏时空的积分，分母 $p_\mu \, p^\mu = -(p^0)^2 + |\vec{p}|^2$，有两个奇点 $p^0 = \pm |\vec{p}|$，对应着 这乍看上去有点麻烦，我们先把时间分量和空间分量拆开：

$$
K(x - x') = \int \frac{d^3 p}{(2\pi)^3} \boxed{\int \frac{d p^0}{2\pi} \frac{-1}{(p^0)^2 - |\vec{p}|^2} e^{- \mathrm{i} p^0 (x^0 - x'^0)}} \; e^{\mathrm{i} \vec{p} \cdot (\vec{x} - \vec{x}')}
$$




## 空间局域简谐带电系统

电流 $I^{\mu} = (Z \rho, \mu_0 \vec{J})$ 在空间中局限在 $|\vec{x}'| < R$ 的区域内，所以边界条件有

$$
\vec{J}(t, \vec{x} | \vec{x} \in \partial V) \cdot d\vec{S} = 0 
$$

