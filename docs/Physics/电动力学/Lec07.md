> 2026/03/24 10:00
> 
> - 正交曲线坐标系
> - 静电场在球坐标系中的本征模式
> - 理想电多极子

## 正交曲线坐标系

$\{t_1, t_2, t_3\}$ vs. $\{x_1, x_2, x_3\}$

两个坐标系中的单位矢量分别记作 $\{\hat{e}_1, \hat{e}_2, \hat{e}_3\}$ 和 $\{\hat{x}_1, \hat{x}_2, \hat{x}_3\}$. 对于任何一个矢量 $\vec{x}$，我们写下的坐标 $(x_1, x_2, x_3)$ 实际上意味着这个矢量可以写成 $\hat{x}_1, \hat{x}_2, \hat{x}_3$ 的线性组合：$\vec{x} = x_1 \hat{x}_1 + x_2 \hat{x}_2 + x_3 \hat{x}_3$.

正交曲线坐标系，基矢之间满足正交性

$$
\hat{e}_i \cdot \hat{e}_j = \delta_{ij}
$$

### 积分微元的转换

一般的正交曲线坐标系 $\{t_1, t_2, t_3\}$ 和直角坐标系的不同点：

1.  基矢 $\hat{e}_i(\vec{x})$ 会随位置 $\vec{x}$ 变化
2.  $t_1, t_2, t_3$ 量纲不定，不一定是长度
3.  关于积分元
    -   线元 $d \vec{\ell}$
    
        $$
        \begin{align}
            d \vec{\ell} &= d x_1 \, \hat{x}_1 + d x_2 \, \hat{x}_2 + d x_3 \, \hat{x}_3 \\
            &= f_1 d t_1 \, \hat{e}_1 + f_2 d t_2 \, \hat{e}_2 + f_3 d t_3 \, \hat{e}_3 \tag{1.9} \label{eq:line-element}
        \end{align}
        $$

        在 $\hat{e}_1$ 前面是 $d t_1$，是因为 $\hat{e}_1$ 是通过固定 $t_2, t_3$，在 $t_1$ 方向上移动微小距离得到的。而 $f_1, f_2, f_3$ 可以视作标度，也称**拉梅系数**（Lamé coefficients）
    
    -   面元 $d \vec{S}$

        $$
        \begin{align}
            d \vec{S} &= d x_2 \wedge d x_3 \, \hat{x}_1 + d x_3 \wedge d x_1 \, \hat{x}_2 + d x_1 \wedge d x_2 \, \hat{x}_3 \\
            &= f_2 f_3 d t_2 \wedge d t_3 \, \hat{e}_1 + f_3 f_1 d t_3 \wedge d t_1 \, \hat{e}_2 + f_1 f_2 d t_1 \wedge d t_2 \, \hat{e}_3 \tag{1.10} \label{eq:surface-element}
        \end{align}
        $$

    -   体元 $d V$
    
        $$
        \begin{align}
            d V &= d x_1 \wedge d x_2 \wedge d x_3 \\
            &= f_1 f_2 f_3 d t_1 \wedge d t_2 \wedge d t_3 \tag{1.11} \label{eq:volume-element}
        \end{align}
        $$

现在讨论微分的关系。而微分关系最重要的是 $\nabla$ 算子及相关运算。

如何研究微分？我们通过研究积分的被积式出发 $\xcancel{\int} \boxed{I}$

### 梯度

对于任意标量函数 $\Phi(\vec{x})$，回想 $\omega^{(0)} \to \omega^{(1)}$ 的外微分关系：

$$
\begin{equation}
    \mathrm{d} \Phi(\vec{x}) = \Big(\nabla \Phi(\vec{x}) \Big) \cdot d \vec{\ell}
\end{equation}
$$

这个式子甚至可以当做梯度的定义。在正交曲线坐标系中展开左边：

$$
\mathrm{d} \Phi(\vec{x}) = \sum_{i=1}^3 \frac{\partial \Phi}{\partial t_i} d t_i
$$

右边是

$$
\Big(\nabla \Phi(\vec{x}) \Big) \cdot \sum_{i=1}^3 f_i d t_i \, \hat{e}_i
$$

对应系数可得

$$
\begin{equation} \label{eq:gradient}
    \nabla \Phi(\vec{x}) = \sum_{i=1}^3 \frac{1}{f_i} \frac{\partial \Phi}{\partial t_i} \hat{e}_i
\end{equation}
$$

### 旋度

对于 $\omega^{(1)}$ 的外微分：

$$
\begin{equation}
    \mathrm{d} \omega^{(1)} = \mathrm{d} (\vec{v} \cdot d \vec{\ell}) = \Big(\nabla \times \vec{v} \Big) \cdot d \vec{S}
\end{equation}
$$

这也是旋度的定义。利用 \eqref{eq:line-element} 展开 LHS：

$$
\begin{aligned}
    \mathrm{d} (\vec{v} \cdot d \vec{\ell}) = \mathrm{d} (f_1 v_1 d t_1 + f_2 v_2 d t_2 + f_3 v_3 d t_3) &= \Big[ \partial_{t_2} (f_3 v_3) - \partial_{t_3} (f_2 v_2) \Big] d t_2 \wedge d t_3 \\
    &+ \Big[ \partial_{t_3} (f_1 v_1) - \partial_{t_1} (f_3 v_3) \Big] d t_3 \wedge d t_1 \\
    &+ \Big[ \partial_{t_1} (f_2 v_2) - \partial_{t_2} (f_1 v_1) \Big] d t_1 \wedge d t_2
\end{aligned}
$$

对照 \eqref{eq:surface-element}，可得

$$
\begin{equation} \label{eq:curl}
    \nabla \times \vec{v} = \frac{\partial_{t_2} (f_3 v_3) - \partial_{t_3} (f_2 v_2)}{f_2 f_3} \hat{e}_1 + \frac{\partial_{t_3} (f_1 v_1) - \partial_{t_1} (f_3 v_3)}{f_3 f_1} \hat{e}_2 + \frac{\partial_{t_1} (f_2 v_2) - \partial_{t_2} (f_1 v_1)}{f_1 f_2} \hat{e}_3
\end{equation}
$$

### 散度

对于 $\omega^{(2)}$ 的外微分：

$$
\begin{equation}
    \mathrm{d} \omega^{(2)} = \mathrm{d} (\vec{v} \cdot d \vec{S}) = \Big(\nabla \cdot \vec{v} \Big) d V
\end{equation}    
$$

利用 \eqref{eq:surface-element} 展开 LHS：

$$
\begin{aligned}
    \mathrm{d} (\vec{v} \cdot d \vec{S}) &= \mathrm{d} (f_2 f_3 v_1 \, d t_2 \wedge d t_3 + f_3 f_1 v_2 \, d t_3 \wedge d t_1 + f_1 f_2 v_3 \, d t_1 \wedge d t_2) \\
    &= \Big[ \partial_{t_1} (f_2 f_3 v_1) + \partial_{t_2} (f_3 f_1 v_2) + \partial_{t_3} (f_1 f_2 v_3) \Big] d t_1 \wedge d t_2 \wedge d t_3
\end{aligned}
$$

结合 \eqref{eq:volume-element} 可得

$$
\begin{equation} \label{eq:divergence}
    \nabla \cdot \vec{v} = \frac{\partial_{t_1} (f_2 f_3 v_1) + \partial_{t_2} (f_3 f_1 v_2) + \partial_{t_3} (f_1 f_2 v_3)}{f_1 f_2 f_3}
\end{equation}
$$

### 拉普拉斯算子

$\nabla^2 \Phi \equiv \nabla \cdot (\nabla \Phi)$


## 球坐标