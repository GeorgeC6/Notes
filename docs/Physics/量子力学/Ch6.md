# 第六章 对称性与守恒律

## 6.1 引言

### 6.1.1 空间变换

- **平移算符（translation operator）**：

$$
\begin{equation} \label{eq:trans-op} \tag{6.1.1}
    \hat{T}(a) \psi(x) = \psi(x + a) = \psi'(x)
\end{equation}
$$

- **宇称算符（parity operator）**：

$$
\begin{equation} \label{eq:parity-op} \tag{6.1.2}
    \hat{\Pi} \psi(x) = \psi(-x) = \psi'(x)
\end{equation}
$$

- **旋转算符（rotation operator）**：

$$
\begin{equation} \label{eq:rot-op} \tag{6.1.3}
    \hat{R}_z(\varphi) \psi(r, \theta, \phi) = \psi(r, \theta, \phi - \varphi) = \psi'(r, \theta, \phi)
\end{equation}
$$

## 6.2 平移算符

事实上，式 \eqref{eq:trans-op} 定义的平移算符可以用动量算符来表示。在 $x$ 附近对 $\psi(x - a)$ 做泰勒展开：

$$
\begin{equation} \label{eq:taylor-expand} \tag{6.2.1}
    \begin{aligned}
        \hat{T}(a) \psi(x) &= \psi(x - a) = \sum_{n=0}^{\infty} \frac{(-a)^n}{n!} \frac{\mathrm{d}^n}{\mathrm{d} x^n} \psi(x) \\
        &= \sum_{n=0}^{\infty} \frac{1}{n!} \left( \frac{-\mathrm{i} a}{\hbar} \hat{p} \right)^n \psi(x) = \exp \left( -\frac{\mathrm{i} a}{\hbar} \hat{p} \right) \psi(x)
    \end{aligned}
\end{equation}
$$

即

$$
\begin{equation} \label{eq:trans-op-momentum} \tag{6.2.2}
    \hat{T}(a) = \exp \left( -\frac{\mathrm{i} a}{\hbar} \hat{p}\right)
\end{equation}
$$

> 动量是平移算符的“生成元”（generator）。这是李群的一个重要概念。

$\hat{T}(a)$ 是幺正算符：

$$
\begin{equation} \label{eq:trans-op-unitary} \tag{6.2.3}
    \hat{T}^{-1}(a) \xlongequal{\text{显然}} \hat{T}(-a) \xlongequal{\eqref{eq:trans-op-momentum}} \hat{T}^\dagger(a)
\end{equation}
$$

实际上，这是由于 $\hat{p}$ 是厄米算符。


### 6.2.1 算符如何平移

波函数 $\psi$ 平移到 $\psi'$ 比较好理解，那么平移一个算符是什么意思？其定义为，平移后的算符 $\hat{Q}'$ 在未平移态 $\psi$ 的期望值等于未平移算符 $\hat{Q}$ 在平移态 $\psi'$ 的期望值：

$$
\bra{\psi'} \hat{Q} \ket{\psi'} = \bra{\psi} \hat{Q}' \ket{\psi}
$$



## 6.3 守恒律



## 6.4 宇称

### 6.4.1 一维宇称

宇称算符 $\hat{\Pi}$ 实现空间反演。在一位情况下，

$$
\hat{\Pi} \psi(x) = \psi'(x) = \psi(-x)
$$

显然，$\hat{\Pi}^{-1} = \hat{\Pi}$，且 $\hat{\Pi}^\dagger = \hat{\Pi}$


### 6.4.2 三维宇称

真矢量：

$$
\begin{aligned}
    \hat{\Pi}^\dagger \hat{\boldsymbol{r}} \hat{\Pi} &= - \hat{\boldsymbol{r}} \\
    \hat{\Pi}^\dagger \hat{\boldsymbol{p}} \hat{\Pi} &= - \hat{\boldsymbol{p}}
\end{aligned}
$$

赝矢量：

$$
\hat{\Pi}^\dagger \hat{\boldsymbol{L}} \hat{\Pi} = \hat{\boldsymbol{L}}
$$

- 真标量：$\hat{\Pi}^\dagger f \hat{\Pi} = f$
- 赝标量：$\hat{\Pi}^\dagger g \hat{\Pi} = -g$

### 6.4.3 宇称选择定则

选择定则：矩阵元何时为 0. 电偶极矩算符

$$
\hat{\boldsymbol{p}}_{\mathrm{e}} = q \hat{\boldsymbol{r}}
$$

显然电偶极矩算符是奇宇称的：

$$
\hat{\Pi}^\dagger \hat{\boldsymbol{p}}_{\mathrm{e}} \hat{\Pi} = - \hat{\boldsymbol{p}}_{\mathrm{e}}
$$

考虑电偶极子算符在两个状态 $\psi_{n \ell m}$ 和 $\psi_{n' \ell' m'}$ 之间的矩阵元

$$
\begin{aligned}
    \bra{n' \ell' m'} \hat{\boldsymbol{p}}_{\mathrm{e}} \ket{n \ell m} &= - \bra{n' \ell' m'} \hat{\Pi}^\dagger \hat{\boldsymbol{p}}_{\mathrm{e}} \underset{(-1)^\ell \ket{n \ell m}}{\underbrace{\hat{\Pi} \ket{n \ell m}}} \\
    &= - \bra{n' \ell' m'} (-1)^{\ell'} \hat{\boldsymbol{p}}_{\mathrm{e}} (-1)^{\ell} \ket{n \ell m} \\
    &= (-1)^{\ell' + \ell + 1} \bra{n' \ell' m'} \hat{\boldsymbol{p}}_{\mathrm{e}} \ket{n \ell m}
\end{aligned}
$$

可见，当 $\ell' + \ell$ 为偶数时，$\bra{n' \ell' m'} \hat{\boldsymbol{p}}_{\mathrm{e}} \ket{n \ell m} = 0$.


!!! warning "重要"
    - 同一个粒子的几部分波函数（或多粒子波函数）是相乘的
        - $\hat{\Pi} (\psi_1 \psi_2 \psi_3)$ 总的本征值是相乘的
    - 连续变换对应的力学量本征值是相加的
    
    $$
    \begin{aligned}
        \hat{T}(a) \psi_1(r_1) \psi_2(r_2) &= \psi_1(r_1 - a) \psi_2(r_2 - a) \\
        &= e^{-\frac{\mathrm{i} a}{\hbar} \hat{p}_1} \psi_1(r_1) \cdot e^{-\frac{\mathrm{i} a}{\hbar} \hat{p}_2} \psi_2(r_2) \\
        &= e^{-\frac{\mathrm{i} a}{\hbar} (\hat{p}_1 + \hat{p}_2)} \psi_1(r_1) \psi_2(r_2)
    \end{aligned}
    $$

## 6.5 旋转算符

$$
R_z(\varphi) \psi(r, \theta, \phi) = \psi'(r, \theta, \phi) = \psi(r, \theta, \phi - \varphi)
$$

由类似 \eqref{eq:taylor-expand} 式的推导可得

$$
\begin{equation} \label{eq:rot-op-angular-momentum} \tag{6.5.1}
    \hat{R}_z(\varphi) = \exp \left( -\frac{\mathrm{i} \varphi}{\hbar} \hat{L}_z \right)
\end{equation}
$$

所以说 $\hat{L}_z$ 是绕 $z$ 轴转动的**转动生成元**。

下面考虑算符 $\hat{\boldsymbol{r}}$ 和 $\hat{\boldsymbol{p}}$ 在旋转下的变换。使用 \eqref{eq:rot-op-angular-momentum} 的无穷小形式（$\varphi \mapsto \delta \ll 1$）：

$$
\begin{equation}
    \hat{R}_z(\varphi) \approx 1 - \frac{\mathrm{i} \delta}{\hbar} \hat{L}_z
\end{equation}
$$

由此可得

!!! tip inline end "角动量的几组对易关系"
    $$
    \begin{aligned}
        \left[\hat{L}_i, \hat{L}_j \right] &= \mathrm{i} \hbar \epsilon_{ijk} \hat{L}_k \\
        \left[\hat{L}_i, \hat{r}_j \right] &= \mathrm{i} \hbar \epsilon_{ijk} \hat{r}_k \\
        \left[\hat{L}_i, \hat{p}_j \right] &= \mathrm{i} \hbar \epsilon_{ijk} \hat{p}_k
    \end{aligned}
    $$

$$
\begin{aligned}
    \hat{x}' &= \hat{R}^\dagger \hat{x} \hat{R} \approx \left( 1 + \frac{\mathrm{i} \delta}{\hbar} \hat{L}_z \right) \hat{x} \left( 1 - \frac{\mathrm{i} \delta}{\hbar} \hat{L}_z \right) \\
    &\approx \hat{x} + \frac{\mathrm{i} \delta}{\hbar} [\hat{L}_z, \hat{x}] = \hat{x} - \delta \hat{y}
\end{aligned}
$$




## 6.6 简并

两个不同的态[^1]能量相等，称为简并。对称性是简并的根源。

[^1]: 只相差一个系数不是不同的态。

!!! warning "这些不是简并"
    设对称算符 $[\hat{H}, \hat{Q}] = 0$，

    旋转算符有无穷多简并？

!!! example "例 6.3"
    $[\hat{H}, \hat{L}_\pm] = 0$，故 $\hat{L}_\pm$ 的本征态具有相同的能量.

    $$
    \hat{L}_\pm \ket{n \ell m} = \hbar \sqrt{\ell (\ell + 1) - m (m \pm 1)} \ket{n \ell, m \pm 1} \implies (2 \ell + 1)\text{ 简并}
    $$

!!! example "习题 6.18"
    一维自由粒子：$\hat{H} = \frac{\hat{p}^2}{2m}.$ 动量的本征函数 $f_p(x) = \frac{1}{\sqrt{2\pi \hbar}} e^{\frac{\mathrm{i} p x}{\hbar}}.$ 宇称算符作用下，$\hat{\Pi} f_p(x) = f_{-p}(x).$

    $e^{\frac{\mathrm{i} p x}{\hbar}}$ 不是 $\hat{\Pi}$ 的本征态，因为它是奇函数和偶函数的线性组合。


## 6.7 转动选择定则

### 6.7.1 标量算符的选择定则

$$
\begin{aligned}
    \left[\hat{L}_z, \hat{f} \right] &= 0, \\
    \left[\hat{L}_\pm, \hat{f} \right] &= 0, \\
    \left[\hat{L}^2, \hat{f} \right] &= 0. \\
\end{aligned}
$$



## 6.8 时间平移变换

记 $\varPsi(x,t)$ 为含时薛定谔方程的解：

$$
\begin{equation} \label{eq:time-dependent-schrodinger} \tag{6.8.1}
    \hat{H} \varPsi(x,t) = \mathrm{i} \hbar \frac{\partial}{\partial t} \varPsi(x,t)
\end{equation}
$$

定义一个使波函数在时间上向前传播的算符 $\hat{U}(t)$，

$$
\begin{equation} \label{eq:time-evolution-op-def} \tag{6.8.2}
    \hat{U}(t) \varPsi(x,0) = \varPsi(x,t)
\end{equation}
$$

下面说明 $\hat{U}(t)$ 可以用哈密顿算符表示。考虑不含时哈密顿量（这样高阶时间导数形式简单很多），对 \eqref{eq:time-evolution-op-def} 式右侧做泰勒展开：

$$
\begin{equation}
    \hat{U}(t) \varPsi(x,0) = \sum_{n=0}^{\infty} \frac{t^n}{n!} \left.\frac{\partial^n}{\partial t^n} \varPsi(x,t) \right|_{t=0} \xlongequal{\eqref{eq:time-dependent-schrodinger}} \sum_{n=0}^{\infty} \frac{1}{n!} \left( -\frac{\mathrm{i} \hat{H}}{\hbar} t \right)^n \varPsi(x,0)
\end{equation}
$$

因此，不含时的哈密顿量的时间演化算符是

$$
\begin{equation} \label{eq:time-evolution-op} \tag{6.8.3}
    \hat{U}(t) = \exp \left( -\frac{\mathrm{i} \hat{H}}{\hbar} t \right)
\end{equation}
$$

哈密顿量是**时间平移的生成元（generator of translations in time）**。




### 6.8.1 海森堡绘景

时间平移变换后的算符称为**海森堡绘景（Heisenberg picture）**（或称**海森堡表象**）算符。

$$
\begin{equation}
    \hat{Q}_{\mathrm{H}} (t) = \hat{U}^\dagger (t) \, \hat{Q}_{\mathrm{S}} \, \hat{U} (t)
\end{equation}
$$



### 6.8.2 时间平移不变性

若哈密顿量含时，

$$
\varPsi(x, t) = \hat{U}(t, t_0) \varPsi(x, t_0)
$$




!!! info "时间反演算符（习题 6.36）"
    时间反演算符（time-reversal operator）$\hat{\varTheta}$ 