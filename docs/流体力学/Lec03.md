

## 控制体（control volume）

各种分析方法的特点：

-   控制体（large-scale）分析
    - 对任何流动状态都是“准确”的，在边界上的平均或者“一维”物理量，适合工程应用
    - Bernoulli, Prandtl
- 微分（small-scale）分析
    - 适用于任何流动，但多数情况没有精确的解析解，需要用 CFD
    - Euler, d'Alembert
- 实验/量纲分析
    - 适用于理论、数值、实验，能降低实验费用
    - Rayleigh, Buckingham

!!! note "雷诺输运定理"
    $$
    \begin{aligned}
        \frac{\mathrm{d} B_{\text{sys}}}{\mathrm{d} t} &= \frac{\mathrm{d}}{\mathrm{d} t} \left(\int_{\text{CV}} \beta \rho \, \mathrm{d} V\right) + \int_{\text{CS}} \beta \rho (\mathbf{u} \cdot \mathbf{n}) \, \mathrm{d} A \\
        &= \int_{\text{CV}} \frac{\partial}{\partial t} (\beta \rho) \, \mathrm{d} V + \int_{\text{CS}} \beta \rho (\mathbf{u} \cdot \mathbf{n}) \, \mathrm{d} A
    \end{aligned}
    $$

    - 广延量（extensive value）$B$：与系统大小有关的量，如质量、能量、动量
    - 强度量（intensive value）$\beta = \mathrm{d}B/\mathrm{d}m$：与系统大小无关的量，如温度、密度、压强


## 质量守恒/连续性方程

体系的质量守恒：

$$
\frac{\mathrm{d} m_{\text{sys}}}{\mathrm{d} t} = 0 = \frac{\mathrm{d}}{\mathrm{d} t} \left(\int_{\text{CV}} \rho \, \mathrm{d} V\right) + \int_{\text{CS}} \rho (\mathbf{u} \cdot \mathbf{n}) \, \mathrm{d} A
$$



## Bernoulli Equation

质量守恒

$$
\frac{\mathrm{d}}{\mathrm{d} t} \left(\int_{\text{CV}} \rho \, \mathrm{d} V\right) + \dot{m}_{\text{out}} - \dot{m}_{\text{in}} = 0
$$

### 静压、动压、驻点压力

$$
p_1 + \frac{1}{2} \rho v_1^2 = p_2 + \frac{1}{2} \rho v_2^2 = p_0 = \text{const.}
$$

- $p_1$: 静压（static pressure）
- $\frac{1}{2} \rho v_1^2$: 动压（dynamic pressure）
- $p_0$: 驻点压力（stagnation pressure）

皮托管（Pitot tube）测量流体速度

### 能量坡线、水力坡线

