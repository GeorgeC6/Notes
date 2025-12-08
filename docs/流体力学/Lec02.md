# 流体静力学

- 静止状态：流体相对于惯性系没有运动，平衡状态
- 相对静止：流体相对于非惯性系没有运动，相对平衡状态

- 速度场为零
- 无剪应力

## 静压强

考虑 $xOz$ 平面内一个三角形流体微元（Element of fluid），沿 $y$ 方向厚度为 $b$，受力分析：

$$
\begin{aligned}
    \sum F_x &= 0 = p_x b \Delta z - p_n b \Delta s 
    \sin \theta \\
    \sum F_z &= 0 = p_z b \Delta x - p_n b \Delta s \cos \theta - \rho g \frac{1}{2} b \Delta x \Delta z
\end{aligned}
$$

代入 $\Delta s \sin \theta = \Delta z, \, \Delta s \cos \theta = \Delta x$，得

$$
\begin{aligned}
    p_x &= p_n \\
    p_z &= p_n + \frac{1}{2} \rho g \Delta z
\end{aligned}
$$

流体微元收缩到一个点，$\Delta z \to 0$，得

$$
p_x = p_z = p_n
$$

### 受力分析

$$
\mathrm{d} F_x = p \,\mathrm{d} y \,\mathrm{d} z - \left( p + \frac{\partial p}{\partial x} \mathrm{d} x \right) \mathrm{d} y \,\mathrm{d} z = -\frac{\partial p}{\partial x} \mathrm{d} x \,\mathrm{d} y \,\mathrm{d} z
$$

力的矢量可以写成

$$
\mathrm{d} \mathbf{F}_{\text{press}} = \left( -\mathbf{i} \frac{\partial p}{\partial x} - \mathbf{j} \frac{\partial p}{\partial y} - \mathbf{k} \frac{\partial p}{\partial z} \right) \mathrm{d} x \,\mathrm{d} y \,\mathrm{d} z = -\nabla p \,\mathrm{d} V
$$

单位体积上的力

$$
\mathbf{f}_{\text{press}} = - \nabla p
$$

重力作用

$$
\mathrm{d} \mathbf{F}_{\text{grav}} = \rho \mathbf{g} \,\mathrm{d} x \,\mathrm{d} y \,\mathrm{d} z \implies \mathbf{f}_{\text{grav}} = \rho \mathbf{g}
$$

单位体积流体的合力

$$
\sum \mathbf{f} = \mathbf{f}_{\text{press}} + \mathbf{f}_{\text{grav}} + \mathbf{f}_{\text{visc}} = \rho \mathbf{a}
$$

若不考虑粘性力和加速度项，有

$$
-\nabla p + \rho \mathbf{g} = \mathbf{0}
$$

只剩 $z$ 分量：

$$
\frac{\partial p}{\partial z} = \rho g \implies p = \rho g h
$$

## 绝对压强、相对压强、真空压强

Gage pressure

## 静水压（Hydrostatic pressure）

静止状态下，


## 流体静力学控制方程

**欧拉平衡方程**

$$
f_i - \frac{1}{\rho} \frac{\partial p}{\partial x_i} = 0
$$

:point_right: 静止流体中压强的空间变化，由体积力的存在引起。

## 有加速度情况下的静压强

$$
\nabla p = \rho (\mathbf{g} - \mathbf{a})
$$

### 匀加速直线运动

$$
\frac{\partial p}{\partial x} = -\rho a, \quad \frac{\partial p}{\partial y} = 0, \quad \frac{\partial p}{\partial z} = \rho g
$$

### 匀速旋转

$$
\frac{\partial p}{\partial r} = -\rho \omega^2 r, \quad \frac{\partial p}{\partial \theta} = 0, \quad \frac{\partial p}{\partial z} = \rho g
$$