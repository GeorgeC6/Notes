# 应力应变关系

!!! abstract "变形体力学的基本关系"
    - 平衡关系：平衡方程、力的边界条件
    - 连续关系（几何关系）：位移-应变关系
    - 物理关系（本构关系）：应力-应变关系

    本构关系流程：

    ```mermaid
    flowchart LR
        A[热力学定律] --> B[基本框架]
        B --> C[模型选择]
        C --> D[参数测定]
        D --> E[实用本构关系]
    ```

## 4-1 应力应变一般关系

$$
\begin{aligned}
    \sigma_{x} &= f_1(\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{yz}, \gamma_{zx}, \gamma_{xy}) \\
    \sigma_{y} &= f_2(\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{yz}, \gamma_{zx}, \gamma_{xy}) \\
    \sigma_{z} &= f_3(\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{yz}, \gamma_{zx}, \gamma_{xy}) \\
    \tau_{yz} &= f_4(\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{yz}, \gamma_{zx}, \gamma_{xy}) \\
    \tau_{zx} &= f_5(\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{yz}, \gamma_{zx}, \gamma_{xy}) \\
    \tau_{xy} &= f_6(\varepsilon_x, \varepsilon_y, \varepsilon_z, \gamma_{yz}, \gamma_{zx}, \gamma_{xy})
\end{aligned}
$$

- **Cauchy 材料**
- $f_i$ 为具体的函数或泛函，取决于材料的物理特性

### 小变形情形

$$
\sigma_x = \left( f_1 \right)_0 + \left( \frac{\partial f_1}{\partial \varepsilon_x} \right)_0 \varepsilon_x + \left( \frac{\partial f_1}{\partial \varepsilon_y} \right)_0 \varepsilon_y + \left( \frac{\partial f_1}{\partial \varepsilon_z} \right)_0 \varepsilon_z + \left( \frac{\partial f_1}{\partial \gamma_{yz}} \right)_0 \gamma_{yz} + \left( \frac{\partial f_1}{\partial \gamma_{zx}} \right)_0 \gamma_{zx} + \left( \frac{\partial f_1}{\partial \gamma_{xy}} \right)_0 \gamma_{xy} + \omicron(\varepsilon, \gamma)
$$

- $(\cdot)_0$ 表示应力为 0 处
- 无初始应力假设：$(f_1)_0 = 0$

$$
\begin{aligned}
    \sigma_x &= C_{11} \varepsilon_x + C_{12} \varepsilon_y + C_{13} \varepsilon_z + C_{14} \gamma_{yz} + C_{15} \gamma_{zx} + C_{16} \gamma_{xy} \\
    \sigma_y &= C_{21} \varepsilon_x + C_{22} \varepsilon_y + C_{23} \varepsilon_z + C_{24} \gamma_{yz} + C_{25} \gamma_{zx} + C_{26} \gamma_{xy} \\
    \sigma_z &= C_{31} \varepsilon_x + C_{32} \varepsilon_y + C_{33} \varepsilon_z + C_{34} \gamma_{yz} + C_{35} \gamma_{zx} + C_{36} \gamma_{xy} \\
    \tau_{yz} &= C_{41} \varepsilon_x + C_{42} \varepsilon_y + C_{43} \varepsilon_z + C_{44} \gamma_{yz} + C_{45} \gamma_{zx} + C_{46} \gamma_{xy} \\
    \tau_{zx} &= C_{51} \varepsilon_x + C_{52} \varepsilon_y + C_{53} \varepsilon_z + C_{54} \gamma_{yz} + C_{55} \gamma_{zx} + C_{56} \gamma_{xy} \\
    \tau_{xy} &= C_{61} \varepsilon_x + C_{62} \varepsilon_y + C_{63} \varepsilon_z + C_{64} \gamma_{yz} + C_{65} \gamma_{zx} + C_{66} \gamma_{xy}
\end{aligned}
$$

- **广义胡克定律（Generalized Hooke's Law）**

## 4-2 热力学基本定律

### 基本概念

- 系统、周围环境、界面
- 状态变量：基本状态变量（应变或应力、温度）、状态函数（体积变化）
- 过程：可逆、不可逆

### 热力学第一定律

内能 + 动能 = 外力功 + 热量（输入）

$$
\begin{equation} \label{eq:first_law_thermodynamics}
    \Delta U + \Delta K = \Delta A + \Delta Q
\end{equation}
$$

写成率形式，

$$
\begin{equation} \label{eq:first_law_thermodynamics_rate}
    \dot{U} + \dot{K} = \dot{A} + \dot{Q}
\end{equation}
$$

应用于连续介质：

- 内能

$$
U = \int_V u \, \mathrm{d}V
$$

- 动能

$$
K = \frac{1}{2} \int_V \rho v_i v_i \, \mathrm{d}V
$$

- 外力功率（体力和面力）

$$
\dot{A} = \int_V F_i v_i \, \mathrm{d}V + \int_S T_i v_i \, \mathrm{d}S
$$

- 热量变化率

$$
\dot{Q} = \int_V r \, \mathrm{d}V - \int_S h_i n_i \, \mathrm{d}S
$$

其中，$r$ 为热源强度（单位时间内单位体积产生的热量），$h_i$ 为热流速率矢量（单位时间内沿温度梯度方向流经单位面积的热量）。

代入式 \eqref{eq:first_law_thermodynamics_rate} 得

$$
\int_V \dot{u} \, \mathrm{d}V + \int_V \rho v_i \dot{v}_i \, \mathrm{d}V = \int_V F_i v_i \, \mathrm{d}V + \int_S T_i v_i \, \mathrm{d}S + \int_V r \, \mathrm{d}V - \int_S h_i n_i \, \mathrm{d}S
$$




> 在解决弹性力学问题时，不会直接用到热力学第一定律，只在推导本构关系的时候会用到。
>
> 而流体力学的激波问题中会用到热力学第一定律。

基本状态变量：应变 $\varepsilon_{ij}$、温度 $T$

功共轭变量：应力 $\sigma_{ij}$ 与应变 $\varepsilon_{ij}$ 共轭，熵 $\eta$ 与温度 $T$ 共轭

对基本状态变量求导，得到其功共轭变量

勒让德变换：对物理系统减去一对功共轭变量的乘积






## 4-4 各向同性弹性体

- 本构方程

$$
\begin{equation} \label{eq:isotropic_constitutive}
\left \{
    \begin{aligned}
        \sigma_x &= C_{12} \theta + (C_{11} - C_{12}) \varepsilon_x, \, \tau_{yz} = \frac{1}{2} (C_{11} - C_{12}) \gamma_{yz} \\
        \sigma_y &= C_{12} \theta + (C_{11} - C_{12}) \varepsilon_y, \, \tau_{xz} = \frac{1}{2} (C_{11} - C_{12}) \gamma_{xz} \\
        \sigma_z &= C_{12} \theta + (C_{11} - C_{12}) \varepsilon_z, \, \tau_{xy} = \frac{1}{2} (C_{11} - C_{12}) \gamma_{xy}
    \end{aligned}
\right.
\end{equation}
$$


Lamé's constants: $C_{12} = \lambda, C_{11} - C_{12} = 2\mu$

式 \eqref{eq:isotropic_constitutive} 化为

$$
\begin{equation}
    \sigma_{ij} = \lambda \varepsilon_{kk} \delta_{ij} + 2 \mu \varepsilon_{ij}
\end{equation}
$$

由 $\sigma_{ij} = C_{ijkl} \varepsilon_{kl}$ 可得


$$
C_{ijkl} = \lambda \delta_{ij} \delta_{kl} + 2 \mu \delta_{ik} \delta_{jl}
$$

- 用应力表示应变

$$
\begin{equation} \label{eq:isotropic_constitutive_inverse}
\left \{
    \begin{aligned}
        \sigma_x &= \frac{\sigma_x}{2\mu} - \frac{\lambda}{2\mu(3\lambda + 2\mu)} \Theta, \, \gamma_{yz} = \frac{\tau_{yz}}{\mu} \\
        \sigma_y &= \frac{\sigma_y}{2\mu} - \frac{\lambda}{2\mu(3\lambda + 2\mu)} \Theta, \, \gamma_{xz} = \frac{\tau_{xz}}{\mu} \\
        \sigma_z &= \frac{\sigma_z}{2\mu} - \frac{\lambda}{2\mu(3\lambda + 2\mu)} \Theta, \, \gamma_{xy} = \frac{\tau_{xy}}{\mu}
    \end{aligned}
\right.
\end{equation}
$$

其中 $\Theta = \sigma_x + \sigma_y + \sigma_z$. 三式相加得 $\Theta = (3\lambda + 2\mu) \theta \equiv 3 K \theta$，定义体积模量（Bulk modulus）为

$$
K = \frac{3\lambda + 2\mu}{3}
$$

