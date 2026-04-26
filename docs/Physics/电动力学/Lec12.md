> 2026/04/09 8:00
> 
> - 静磁场的基本规律

Biot-Savart 定律：

$$
\vec{B}(\vec{x}) = \frac{\mu_0}{4\pi} \int_V \frac{\vec{J}(\vec{x}') \, \mathrm{d} V' \times (\vec{x} - \vec{x}')}{|\vec{x} - \vec{x}'|^3}
$$

关于散度和旋度的性质

$$
\nabla \cdot \vec{B}(\vec{x}) = 0, \quad \nabla \times \vec{B}(\vec{x}) = \mu_0 \vec{J}(\vec{x})
$$

证明：

关于散度

$$
\begin{aligned}
    \nabla \cdot \vec{B}(\vec{x}) &= \frac{\mu_0}{4\pi} \int_V \nabla \cdot \left( \vec{J}(\vec{x}') \mathrm{d} V' \times \frac{(\vec{x} - \vec{x}')}{|\vec{x} - \vec{x}'|^3} \right) \\
    &\xlongequal{混合积} \frac{\mu_0}{4\pi} \int_V \vec{J}(\vec{x}') \, \mathrm{d} V' \cdot \left( \nabla \times \frac{(\vec{x} - \vec{x}')}{|\vec{x} - \vec{x}'|^3} \right) \\
    &\xlongequal{\frac{(\vec{x} - \vec{x}')}{|\vec{x} - \vec{x}'|^3} = - \nabla \frac{1}{|\vec{x} - \vec{x}'|}} 0
\end{aligned}
$$

关于旋度

令 $A = \nabla, B = \vec{J}(\vec{x}') \, \mathrm{d} V', C = \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3}$，

$$
\begin{aligned}
    \nabla \times \vec{B}(\vec{x}) &= \frac{\mu_0}{4\pi} \int_V A \times (B \times C) = \frac{\mu_0}{4\pi} \int_V \epsilon_{ijk} A_j \epsilon_{klm} B_l C_m \\
    &= \frac{\mu_0}{4\pi} \int_V (\delta_{il} \delta_{jm} - \delta_{im} \delta_{jl}) A_j B_l C_m = \frac{\mu_0}{4\pi} \int_V (B_i A_j C_j - B_j A_j C_i) \\
    &= \frac{\mu_0}{4\pi} \int_V \vec{J}(\vec{x}') \, \mathrm{d} V' \left( \nabla \cdot \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3} \right) - \int_V \Big(\vec{J}(\vec{x}') \, \mathrm{d} V' \cdot \nabla \Big) \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3} \\
\end{aligned}
$$

注意到

$$
\nabla \cdot \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3} = 4\pi \delta(\vec{x} - \vec{x}'), \quad \nabla \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3} = - \nabla' \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3}
$$

上式化为

$$
\mu_0 \vec{J}(\vec{x}) + \frac{\mu_0}{4\pi} \int_V \Big(\vec{J}(\vec{x}') \, \mathrm{d} V' \cdot \nabla' \Big) \frac{\vec{x} - \vec{x}'}{|\vec{x} - \vec{x}'|^3}
$$

### 矢势的引入

$$
\vec{E} \cdot d\vec{l} = \mathrm{d} \phi
$$


$$
\begin{aligned}
    & \vec{E} = - \nabla \phi && \phi \mapsto \phi + C \\
    & \vec{B} = \nabla \times \vec{A}  && \vec{A} \mapsto \vec{A} + \nabla f
\end{aligned}
$$

给电势加上一个常数，或者给磁矢势加上一个梯度项，电磁场都是不变的，这称为**规范变换（gauge transformation）**。规范变换本质是一种冗余，比如说任意标量函数 $f$ 都可以用来生成一个新的磁矢势 $\vec{A}' = \vec{A} + \nabla f$；但这也带来了好处。

可以在构型空间中切一个截面，每个等价类在上面有一个代表点，只要研究这个截面即可

通常取库伦规范

$$
\nabla \cdot \vec{A} = 0
$$

!!! tip "静电和静磁的对比"
    我们已经知道

    $$
    \begin{array}{c}
        \nabla \cdot \vec{E} \neq 0, \quad \nabla \cdot \vec{B} = 0 \\
        \nabla \times \vec{E} = 0, \quad \nabla \times \vec{B} \neq 0
    \end{array}
    $$

    设想，能否把这两个场合在一起？也就是说，构造

    $$
    \vec{v}(\vec{x}) = \vec{u}(\vec{x}) + \vec{w}(\vec{x})
    $$

    $\vec{u}, \vec{w}$ 满足

    $$
    \begin{array}{c}
        \nabla \cdot \vec{u} = a(\vec{x}), \quad \nabla \cdot \vec{w} = 0 \\
        \nabla \times \vec{u} = 0, \quad \nabla \times \vec{w} = \vec{b}(\vec{x})
    \end{array}
    $$

    这样就有 $\nabla \cdot \vec{v} = a(\vec{x})$ 和 $\nabla \times \vec{v} = \vec{b}(\vec{x})$. 能否直接将 $\vec{E}, \vec{B}$ 与 $\vec{u}, \vec{w}$ 对应？

    :point_right: 不能。原因在于宇称（见下一讲）。