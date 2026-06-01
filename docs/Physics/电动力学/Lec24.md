> 2026/05/26 10:00
> 
> - 平面电磁波
> - 球面电磁波

### 单色电磁波

在讨论电磁波问题时，为了方便起见，都在复数域中讨论，最后取实部即可。记傅里叶变换为

$$
A_\mu (t, \vec{x}) = \int_{-\infty}^{+\infty} 
$$

由于 $A_\mu (t, \vec{x}) \in \mathbb{R}^4$，即 $A_\mu (t, \vec{x}) = A_\mu^*(t, \vec{x})$，这就要求 $A_\mu (\omega; t, \vec{x})$ 满足共轭对称性：

$$
A_\mu (-\omega; t, \vec{x}) = A_\mu^*(\omega; t, \vec{x})
$$

则

$$
A_\mu (t, \vec{x}) = \int_{0}^{+\infty} \frac{d \omega}{2\pi} \left( e^{-i \omega t} A_\mu(\omega; t, \vec{x}) + e^{i \omega t} A_\mu^*(\omega; t, \vec{x}) \right)
$$

## 平面电磁波

设解为 $e^{-i \omega t + i \vec{k} \cdot \vec{x}}$. 取洛伦茨规范，将达朗贝尔算符作用在这个相位函数上

$$
\partial_\nu \partial^\nu e^{-i \omega t + i \vec{k} \cdot \vec{x}} = \left( \frac{\omega^2}{c^2} - |\vec{k}|^2 \right) e^{-i \omega t + i \vec{k} \cdot \vec{x}} = 0
$$

得到色散关系

$$
\omega = c |\vec{k}|
$$

这样就满足了达朗贝尔方程。定义

$$
k_\mu = \left(- \frac{\omega}{c}, \vec{k} \right), \quad k^\mu = g^{\mu \nu} k_\nu = \left( \frac{\omega}{c}, \vec{k} \right)
$$

则相位函数化简为 $e^{i k_\mu x^\mu}$



### 偏振构型

假定 $\vec{k} = (0, 0, k)$


### 场强


### 时空结构

