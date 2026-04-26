> 2026/03/31 10:00
> 
> - 理想点源在外电场中的能量与受力
> - 格林函数
> - 静电场中的边界问题
> - 镜像法

小补充：对于二阶张量 $m_{ij}$，总可以分解为对称部分和反对称部分

$$
m_{ij} = \frac{m_{ij} + m_{ji}}{2} + \frac{m_{ij} - m_{ji}}{2}
$$

后面要讲的旋转操作，是分别单独作用在这两部分。而（正如在电多极子中讨论的）对称部分又可分解为无迹部分和迹（$m_{ij} \delta_{ij}$）。

## 理想点源在外电场中的能量与受力

### 能量

小区域内有电荷 $Q$，要让这个小区域趋近于一个点 $O$（体积 $|V| \to 0$），能量为

$$
E = \int_V \rho(\vec{x}) \, d^3 \vec{x} \, \boxed{\phi_{\text{外}}(\vec{x})}
$$

> 猜公式：
>
> - $Q$ 对应 $\phi(\vec{O})$
> - $p_i$ 与谁对应呢？因为 $E$ 是一个标量，$p_i$ 有一个指标，所以必须构造一个矢量与之缩并 $\implies \partial_i \phi(\vec{O})$. 量纲也是对的！
> - $p_{ij}$ 自然对应 $\partial_i \partial_j \phi(\vec{O})$

对 $\phi(\vec{x})$ 在点 $O$ 处进行泰勒展开：

$$
\phi(\vec{x}) = \phi(\vec{O}) + x_i \partial_i \phi(\vec{O}) + \frac{1}{2} x_i x_j \partial_i \partial_j \phi(\vec{O}) + \cdots
$$

代入能量表达式：

$$
\begin{aligned}
    \ell = 0: \qquad & E = \underset{Q}{\underbrace{\int_V \rho(\vec{x}) \, d^3 \vec{x}}} \, \phi_{\text{外}}(\vec{O}) \\
    \ell = 1: \qquad & E = \underset{p_i}{\boxed{\int_V \rho(\vec{x}) \, d^3 \vec{x} \, x_i}} \, \partial_i \phi_{\text{外}}(\vec{O}) \\
    \ell = 2: \qquad & E = \boxed{\int_V \rho(\vec{x}) \, d^3 \vec{x} \, \frac{1}{2} x_i x_j} \, \partial_i \partial_j \phi_{\text{外}}(\vec{O})
\end{aligned}
$$

注意到，方框里框出来的东西并不是电四极矩的确切表达式：

$$
p_{ij}^{(2)}(\vec{x}) = \frac{3 x_i x_j - |\vec{x}|^2 \delta_{ij}}{2}
$$

但是好消息是，多出来的项中的 $\delta_{ij}$ 与方框后面的 $\partial_i \partial_j$ 会缩并为 $\nabla^2$ 算子，而外场没有电荷，即 $\nabla^2 \phi_{\text{外}}(\vec{O}) = 0$，所以多出来的项对能量没有贡献！将 $p_{ij}^{(2)}(\vec{O})$ 配凑到能量表达式中，可以得到

$$
E = \frac{1}{3} \boxed{\int_V \rho(\vec{x}) \, d^3 \vec{x} \, \frac{3 x_i x_j - |\vec{x}|^2 \delta_{ij}}{2}} \, \partial_i \partial_j \phi_{\text{外}}(\vec{O}) = \frac{1}{3} p_{ij} \, \partial_i \partial_j \phi_{\text{外}}(\vec{O})
$$

对于一般情形，$p_{i_1 i_2 \ldots i_\ell}$ 中的 $\delta$ 总会使 $\partial_{i_1} \partial_{i_2} \ldots \partial_{i_\ell}$ 中出现缩并

### 受力

从原点 $O$ 出发，假想点源在外电场作用下移动到 $\vec{x}$ 处。将 $\phi(\vec{x})$ 在点 $O$ 处进行泰勒展开 $\phi(\vec{x}) = \phi(\vec{O}) + x_j \partial_j \phi(\vec{O}) + \ldots$ 代入受力表达式：

$$
\begin{aligned}
    \vec{F} \cdot \vec{x} &= E(\vec{O}) - E(\vec{x}) \\
    &= \# \; \cancel{p_{i_1 i_2 \ldots i_\ell} \partial_{i_1} \partial_{i_2} \ldots \partial_{i_\ell} \phi(\vec{O})} - \# \; (\cancel{p_{i_1 i_2 \ldots i_\ell} \partial_{i_1} \partial_{i_2} \ldots \partial_{i_\ell} \phi(\vec{O})} + p_{i_1 i_2 \ldots i_\ell} \partial_{i_1} \partial_{i_2} \ldots \partial_{i_\ell} x_j \partial_j \phi(\vec{O}))
\end{aligned}
$$