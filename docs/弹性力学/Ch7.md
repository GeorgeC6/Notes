# 平面问题的极坐标解答

## 7-1 平面问题的极坐标方程

坐标转换关系：

$$
\left \{
    \begin{aligned}
        x &= \rho \cos \varphi \\
        y &= \rho \sin \varphi
    \end{aligned}
\right. \quad \iff \quad
\left \{
    \begin{aligned}
        \rho &= \sqrt{x^2 + y^2} \\
        \varphi &= \arctan \frac{y}{x}
    \end{aligned}
\right.
$$

### 单元体平衡

径向平衡：

$$
\left[\left( \sigma_{\rho} + \frac{\partial \sigma_{\rho}}{\partial \rho} \mathrm{d} \rho \right) \underset{微元长度有变化}{\underbrace{(\rho + \mathrm{d} \rho)}} \mathrm{d} \varphi - \sigma_{\rho} \rho \mathrm{d} \varphi \right] + \left[ \left(\tau_{\varphi \rho} + \frac{\partial \tau_{\varphi \rho}}{\partial \rho} \mathrm{d} \varphi \right) \mathrm{d} \rho - \tau_{\varphi \rho} \mathrm{d} \rho \right] - \left[\sigma_{\varphi} \mathrm{d} \rho \frac{\mathrm{d} \varphi}{2} + \left( \sigma_{\varphi} +  \right) \right]
$$




## 7-2 轴对称问题

- Torsionless axisymmetric problems（本章内容）
- Torsional axisymmetric problems














切一刀再拼起来

Eshelby 夹杂问题 (1956)


- Inglis 解
  $$\sigma_{\max} = \left(1 + \frac{2a}{b}\right)q$$
- Griffith 裂纹
- 应力强度因子（颠覆了传统的设计方式）



## 补充：旋转圆盘

等速旋转圆盘

平衡方程：

$$
\frac{\mathrm{d} \sigma_{\rho}}{\mathrm{d} \rho} + \frac{\sigma_{\rho} - \sigma_{\varphi}}{\rho} + m \omega^2 \rho = 0
$$

代入本构关系，得到位移控制方程。该问题较简单，可以直接采用位移解法。