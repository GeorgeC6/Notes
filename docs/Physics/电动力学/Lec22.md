> 2026/05/19 10:00
> 
> -   电磁场的能/动量及其守恒定律
>     - 静电场能量 $\mathcal{E} = \frac{\epsilon_0}{2} |\vec{E}|^2$
>     - 守恒定律方程的结构 $\partial_\mu T^{\mu \cdots} = 0^{\cdots}$
> -   电磁势及其运动方程

考察物理问题时，我们通常会划定一个区域

```mermaid
graph LR
    A[区域外对象] <-->|“能流”，通量| B[区域内对象]
    B <-->|功、冲量| C[其它物质<br>（认为是区域内）]
```

我们之前讨论的电荷守恒，只关心前两者之间的交互。在讨论电磁场的能量和动量时，我们需要同时考虑三者之间的（两种）交互。

## 能量

已知静电系统中，电磁张量退化为

$$
\|F_{\mu \nu}\| = \frac{1}{c} \begin{pmatrix}
    0 & -E^1 & -E^2 & -E^3 \\
    E^1 & 0 & 0 & 0 \\
    E^2 & 0 & 0 & 0 \\
    E^3 & 0 & 0 & 0 \\
\end{pmatrix}
$$

则

$$
\|F^{\mu \rho} F_{\rho \nu}\| = \frac{1}{c^2} \begin{pmatrix}
    \textcolor{orange}{|\vec{E}|^2} & 0_j \\
    0_i & E^i E^j \\
\end{pmatrix}
$$

进而

$$
F^{\mu \nu} F_{\nu \mu} = \frac{2}{c^2} \textcolor{orange}{|\vec{E}|^2}
$$

可以发现 $F^{0 \rho} F_{\rho 0}$ 和 $F^{\mu \nu} F_{\mu \nu}$ 都正比于 $|\vec{E}|^2$，因此我们预期一般情况下的能量密度 $\mathcal{E}$ 是两者的线性组合。在真空中，$I^{\mu} = 0$，考虑

$$
\begin{aligned}
    \partial_\mu (F^{\mu \nu} F_{\nu \rho}) &= \cancelto{0}{\underset{-I^\nu}{\textcolor{orange}{\underbrace{(\partial_\mu F^{\mu \nu})}}} F_{\nu \rho}} + F^{\mu \nu} (\partial_\mu F_{\nu \rho}) \\
    &\xlongequal{反对称} \frac{1}{2} F^{\mu \nu} (\partial_\mu F_{\nu \rho} + \partial_\nu F_{\rho \mu}) \xlongequal{\text{Bianchi}} - \frac{1}{2} F^{\mu \nu} \partial_\rho F_{\mu \nu} \\
    &= -\frac{1}{2} g^{\mu \alpha} g^{\nu \beta} F_{\alpha \beta} \partial_\rho F_{\mu \nu} = -\frac{1}{2} F_{\alpha \beta} \partial_\rho F^{\alpha \beta} \implies F^{\alpha \beta} \partial_\rho F_{\alpha \beta} = (\partial_\rho F^{\alpha \beta}) F_{\alpha \beta} \\
    &= - \frac{1}{4} \partial_\rho (F^{\alpha \beta} F_{\alpha \beta})
\end{aligned}
$$

期望得到 $\partial_\mu T^{\mu \cdots} = 0^{\cdots}$ 的守恒定律形式，所以引入 $\delta^{\mu}_\rho$，移项得到

$$
\partial_\mu \Big(F^{\mu \nu} F_{\nu \rho} + \frac{1}{4} \delta^{\mu}_\rho F^{\alpha \beta} F_{\alpha \beta}\Big) = 0_\rho
$$

上式括号里的量纲是 $[\mathrm{B}]^2$，为了改造成能量密度，除以常数 $\mu_0$，得到

$$
\left.T^\mu\right._\nu = \frac{1}{\mu_0} \Big(F^{\mu \rho} F_{\rho \nu} + \frac{1}{4} \delta^{\mu}_\nu F^{\alpha \beta} F_{\alpha \beta}\Big)
$$

此即为电磁场的**能量动量应力张量**，或简称**应力张量**（stress tensor）。