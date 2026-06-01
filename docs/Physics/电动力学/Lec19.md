> 2026/05/07 8:00
>
> - 四维图像与三维图像的等价性
> - 等效原理

!!! summary "一般规律"
    $$
    \begin{aligned}
        \mathrm{d} \mathcal{I} &= 0 \implies \frac{\mathrm{d} \rho}{\mathrm{d} t} + \nabla \cdot \vec{J} = 0 \\
        \mathrm{d} \mathcal{F} &= 0 \implies \left \{
            \begin{aligned}
                & \nabla \cdot \vec{B} = 0 \\
                & \nabla \times \vec{E} - \frac{1}{\eta} \frac{\partial \vec{B}}{\partial t} = \vec{0}
            \end{aligned}
        \right. \\
        \mathrm{d} (\star \mathcal{F}) &= \mathcal{I} \implies \left \{
            \begin{aligned}
                & \nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0} \\
                & \nabla \times \vec{B} + \varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t} = \mu_0 \vec{J}
            \end{aligned}
        \right.
    \end{aligned}
    $$

    其中

    $$
    \begin{aligned}
        \mathcal{I} &= Z \rho \, dx^{123} - \mu_0 J^1 \, d x^{023} + \mu_0 J^2 \, d x^{013} - \mu_0 J^3 \, d x^{012} \\
        \mathcal{F} &= \sqrt{|\eta|} \left( - \frac{E_1}{c} \, d x^{01} - \frac{E_2}{c} \, d x^{02} - \frac{E_3}{c} \, d x^{03} - \eta B^1 \, d x^{23} + \eta B^2 \, d x^{13} - \eta B^3 \, d x^{12} \right)
    \end{aligned}
    $$

### 感生电流

