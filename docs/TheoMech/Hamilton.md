# 哈密顿力学

## 勒让德变换

### 一元 case

$f(x)$ 是 $x$ 的函数，且 $u(x) = \frac{\mathrm{d} f}{\mathrm{d} x}$.

构造

$$
\boxed{
    g(u) = xu - f(x)
}
$$

!!! info "$g$ 是 $u$ 的函数"
    取全微分，得

    $$
    \begin{aligned}
        \mathrm{d}g &= x\mathrm{d}u + u\mathrm{d}x - \mathrm{d}f \\
        &= x\mathrm{d}u + \cancel{u\mathrm{d}x} - \cancel{u\mathrm{d}x} \\
        &= x\mathrm{d}u.
    \end{aligned}
    $$

    故 $\frac{\mathrm{d}g}{\mathrm{d}u} = x$, 即 $g(u)$ 是 $u$ 的函数。

称 $g(u)$ 为 $f(x)$ 的**勒让德变换 (Legendre transformation)**.    

### 多元 case

函数 $f(x_1, x_2, \dots, x_n; \alpha_1, \alpha_2, \dots, \alpha_m)$ 是 $x_i$ 和 $\alpha_j$ 的函数，且

$$ y_i = \frac{\partial f}{\partial x_i}, \quad (i = 1, 2, \dots, n). $$

将变量 $x_i, \alpha_j$ 变换为 $y_i, \alpha_j$，构造

$$
\boxed{
    g = \sum_{i=1}^n x_i y_i - f
}
$$

!!! info "$g$ 是 $y_i$ 的函数"
    取全微分，得

    $$
    \begin{aligned}
        \mathrm{d}g &= \sum_{i=1}^n y_i\mathrm{d}x_i + \sum_{i=1}^n x_i \mathrm{d}y_i - \mathrm{d}f \\
        &= \cancel{\sum_{i=1}^n y_i\mathrm{d}x_i} + \sum_{i=1}^n x_i \mathrm{d}y_i - \cancel{\sum_{i=1}^n y_i \mathrm{d}x_i} \\
        &= \sum_{i=1}^n x_i \mathrm{d}y_i.
    \end{aligned}
    $$

    故 $\frac{\partial g}{\partial y_i} = x_i$, 即 $g$ 是 $y_i$ 的函数。

### 重要应用

- **在物理学中，用于推导各种热力学势**
    - 热力学第一定律 $\mathrm{d}U = \mathrm{d}Q + \mathrm{d}W$
    - 热力学第二定律 $\mathrm{d}Q = T\mathrm{d}S$
    
    $$\Longrightarrow \mathrm{d}U = T\mathrm{d}S - P\mathrm{d}V$$

    - $U(S,V)$ 是 $S$ 和 $V$ 的函数，且 $\frac{\partial U}{\partial S} = T, \frac{\partial U}{\partial V} = -P$

- **在数学中，用于求解 PDE**
- **在弹性力学中**
    - 定义势能（应变能）
    - **余能**是势能的勒让德变换
    - 势能和余能构成力学的数值分析方法（FEM）的基础
- **在理论力学中**
    - 推导哈密顿方程

## 哈密顿方程

### 保守系统

设质点系由 $n$ 个质点组成，受到 $s$ 个完整约束，系统自由度为 $k = 3n - s$.
理想约束情况，保守系统的拉格朗日函数为

$$\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}_i} \right) - \frac{\partial L}{\partial q_i} = 0, \quad i = 1, 2, \dots, k.$$

- 哈密顿（Hamilton）引入**广义动量**

$$p_i = \frac{\partial L}{\partial \dot{q}_i}, \quad i = 1, 2, \dots, k.$$

- 以广义动量和广义坐标作为描述系统的状态变量

$$
\begin{aligned}
H &= H(p_1, p_2, \dots, p_k; q_1, q_2, \dots, q_k; t) \\
&= \sum_{i=1}^k p_i \dot{q}_i - L, \quad i = 1, 2, \dots, k.
\end{aligned}
$$

**拉格朗日函数的勒让德变换为哈密顿函数 $H$.**

- 勒让德变换存在性：

$$
\begin{aligned}
    \det \left[ \frac{\partial^2 L}{\partial \dot{q}_i \partial \dot{q}_j} \right]
\end{aligned}
$$

!!! tip "广义速度表示的动能"
    $$
    \begin{aligned}
        T &= \frac{1}{2} \sum_{i=1}^k \sum_{j=1}^k a_{ij} \dot{q}_i \dot{q}_j + \sum_{i=1}^k b_i \dot{q}_i + c \\
        &= T_2 + T_1 + T_0.
    \end{aligned}
    $$

    其中 $T_2, T_1, T_0$ 分别表示二阶、一阶和常数项动能。

- 对 $H$ 求全微分

$$
\begin{aligned}
\mathrm{d}H &= \cancel{\sum_{i=1}^k p_i \mathrm{d}\dot{q}_i} + \sum_{i=1}^k \dot{q}_i \mathrm{d}p_i - \cancel{\sum_{i=1}^k \frac{\partial L}{\partial q_i} \mathrm{d}\dot{q}_i} - \sum_{i=1}^k \frac{\partial L}{\partial \dot{q}_i} \mathrm{d}q_i \\[2em]
& \text{（利用广义动量定义消去两项）} \\
&= \sum_{i=1}^k \dot{q}_i \mathrm{d}p_i - \sum_{i=1}^k \frac{\partial L}{\partial \dot{q}_i} \mathrm{d}q_i.
\end{aligned}
$$

故得

$$
\begin{aligned}
    \frac{\partial H}{\partial p_i} &= \dot{q}_i, \\[1em]
    \frac{\partial H}{\partial q_i} &= -\frac{\partial L}{\partial q_i}.
\end{aligned}
$$

利用拉格朗日方程和广义动量定义，代换掉 $\frac{\partial L}{\partial q_i}$:

$$
\begin{aligned}
    \frac{\partial L}{\partial q_i} &= \frac{\mathrm{d}}{\mathrm{d}t} \left(\frac{\partial L}{\partial \dot{q}_i} \right) \\
    &= \frac{\mathrm{d}p_i}{\mathrm{d}t} \\
    &= \dot{p}_i.
\end{aligned}
$$

最终得到

$$
\boxed{
\begin{cases}
    \dot{q}_i = \dfrac{\partial H}{\partial p_i} \\[2em]
    \dot{p}_i = -\dfrac{\partial H}{\partial q_i}
\end{cases}
}
$$

其中 $i = 1, 2, \dots, k$. 此即为**哈密顿方程**。

!!! tip "Remarks"
    1. 哈密顿方程是 $2k$ 个一阶常微分方程，拉格朗日方程是 $k$ 个二阶常微分方程。

### 非保守系统

对于非保守系统，主动力可分为有势力和非有势力两类，系统的拉格朗日方程为

$$\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}_i} \right) - \frac{\partial L}{\partial q_i} = \tilde{Q}_i, \quad i = 1, 2, \dots, k.$$

广义动量关于时间的全导数

$$\dot{p}_i = \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}_i} \right) = \frac{\partial L}{\partial q_i} + \tilde{Q}_i = -\frac{\partial H}{\partial q_i} + \tilde{Q}_i.$$

哈密顿方程

$$
\begin{aligned}
    H &= \left(\sum_{i=1}^k p_i \dot{q}_i - L \right)_{\dot{q}_i \to p_i}







!!! note "例题"
    某二自由度动力学系统的广义坐标为 $q_1, q_2$, 拉格朗日量为

    $$L = \frac{3}{2} \dot{q}_1^2 + \frac{1}{2} \dot{q}_2^2 - q_1^2 - \frac{1}{2} q_2^2 - q_1q_2.$$

    求哈密顿函数 $H$.

???+ success "解"
    系统的广义动量

    $$p_1 = \frac{\partial L}{\partial \dot{q}_1} = 3\dot{q}_1, \quad p_2 = \frac{\partial L}{\partial \dot{q}_2} = \dot{q}_2.$$

    解得广义速度

    $$\dot{q}_1 = \frac{1}{3} p_1, \quad \dot{q}_2 = p_2.$$

    代入哈密顿函数

    $$
    \begin{aligned}
        H &= p_1 \dot{q}_1 + p_2 \dot{q}_2 - L \\
        &= \frac{1}{3} p_1^2 + p_2^2 - \frac{3}{2} \dot{q}_1^2 - \frac{1}{2} \dot{q}_2^2 + q_1^2 + \frac{1}{2} q_2^2 + q_1q_2 \\
        &= -\frac{2}{3} p_1^2 - \frac{1}{2} p_2^2 + q_1^2 + \frac{1}{2} q_2^2 + q_1q_2.
    \end{aligned}
    $$