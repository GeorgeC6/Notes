# Chapter 6: Deformations of Beams

## 6.1 Introduction

绝大部分情况下，不希望变形太大

## 6.2 Deflection and Angle of Rotation

![alt text](image.png)

- The deflection curve（挠曲线）
- The deflection of beam（梁的挠度）：竖直方向上的位移
- The angle of rotation（转角）：梁绕中性轴转过的角度

The equation of the deflection curve

$$
\left \{
    \begin{aligned}
        &y = f(x) \\
        &\theta \approx \tan\theta = \frac{dy}{dx}
    \end{aligned}
\right.
$$

!!! tip "Discussion"
    1. 小变形：$y_{\max} < \frac{l}{1000} \sim \frac{l}{250}$
    2. Convention of sign:
    
    - $x$ 轴正方向：右
    - $y$ 轴正方向：上
    - $\theta$：逆时针

## 6.3 Approximate Differential Equations of the Deflection Curve

$$
\underset{\text{Pure bending}}{\frac{1}{\rho} = \frac{M}{E I}} \overset{l \gg h}{\longrightarrow} \text{Shearing bending}
$$

小变形，曲率很小

$$
\kappa = \frac{1}{\rho} = \pm \frac{\frac{d^2y}{dx^2}}{\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{\frac{3}{2}}} \overset{\frac{dy}{dx} \ll 1}{=} \pm \frac{d^2y}{dx^2}
$$

得到

$$
\frac{d^2y}{dx^2} = \frac{M(x)}{E I}
$$

