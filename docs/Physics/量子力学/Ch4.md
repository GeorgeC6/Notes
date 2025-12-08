# 第四章 三维空间中的量子力学

## 4.1 薛定谔方程

$$
\begin{equation} \tag{4.1.1} \label{eq:schrodinger-3d}
    \mathrm{i} \hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m} \nabla^2 \Psi + V \Psi
\end{equation}
$$

$\Psi(x, y, z) = \psi(x)\phi(y)\varphi(z)$，写成相乘的形式是因为粒子在各个方向上的概率是独立的。

### 4.1.1 球坐标

势能为中心势，即 $V(\vec{r}) = V(r)$. 采用球坐标系 $(r, \theta, \phi)$，拉普拉斯算符为

$$
\begin{equation} \tag{4.1.2} \label{eq:laplacian-spherical}
    \nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial}{\partial r} \right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial}{\partial \theta} \right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2}
\end{equation}
$$

定态薛定谔方程化为

$$
-\frac{\hbar^2}{2m} \left[ \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial \psi}{\partial r} \right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial \psi}{\partial \theta} \right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2 \psi}{\partial \phi^2} \right] + V \psi = E \psi
$$

分离变量，设 $\psi(r, \theta, \phi) = R(r) Y(\theta, \phi)$，得

$$
-\frac{\hbar^2}{2m} \left[ \frac{Y}{r^2} \frac{\mathrm{d}}{\mathrm{d} r} \left( r^2 \frac{\mathrm{d} R}{\mathrm{d} r} \right) + \frac{R}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial Y}{\partial \theta} \right) + \frac{R}{r^2 \sin^2 \theta} \frac{\partial^2 Y}{\partial \phi^2} \right] + V R Y = E R Y
$$

两边同除以 $R Y$，乘以 $-2mr^2/\hbar^2$，得

$$
\left( \frac{1}{R} \frac{\mathrm{d}}{\mathrm{d} r} \left( r^2 \frac{\mathrm{d} R}{\mathrm{d} r} \right) - \frac{2m r^2}{\hbar^2} [V(r) - E] \right) + \frac{1}{Y} \left( \frac{1}{\sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial Y}{\partial \theta} \right) + \frac{1}{\sin^2 \theta} \frac{\partial^2 Y}{\partial \phi^2} \right) = 0
$$

得到两个方程：

$$
\begin{align}
    \frac{1}{R} \frac{\mathrm{d}}{\mathrm{d} r} \left( r^2 \frac{\mathrm{d} R}{\mathrm{d} r} \right) - \frac{2m r^2}{\hbar^2} [V(r) - E] &= \ell(\ell+1) \tag{4.1.3} \label{eq:radial} \\
    \frac{1}{Y} \left( \frac{1}{\sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial Y}{\partial \theta} \right) + \frac{1}{\sin^2 \theta} \frac{\partial^2 Y}{\partial \phi^2} \right) &= -\ell(\ell+1) \tag{4.1.4} \label{eq:angular}
\end{align}
$$

### 4.1.2 角方程

对式 \eqref{eq:angular} 乘以 $Y \sin^2 \theta$，得

$$
\sin \theta \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial Y}{\partial \theta} \right) + \frac{\partial^2 Y}{\partial \phi^2} = -\ell(\ell+1) Y \sin^2 \theta
$$

继续分离变量，设 $Y(\theta, \phi) = \Theta(\theta) \Phi(\phi)$，得

$$
\left( \frac{\sin \theta}{\Theta} \frac{\mathrm{d}}{\mathrm{d} \theta} \left( \sin \theta \frac{\mathrm{d} \Theta}{\mathrm{d} \theta} \right) + \ell(\ell+1) \sin^2 \theta \right) + \frac{1}{\Phi} \frac{\mathrm{d}^2 \Phi}{\mathrm{d} \phi^2} = 0
$$

$\phi$ 向方程：

$$
\begin{equation} \label{eq:phi-equation}
    \frac{\mathrm{d}^2 \Phi}{\mathrm{d} \phi^2} + m^2 \Phi = 0 \implies \Phi(\phi) = e^{\mathrm{i} m \phi}
\end{equation}
$$

$\theta$ 向方程：

$$
\begin{equation} \label{eq:theta-equation}
    \sin \theta \frac{\mathrm{d}}{\mathrm{d} \theta} \left( \sin \theta \frac{\mathrm{d} \Theta}{\mathrm{d} \theta} \right) + \left[ \ell(\ell+1) \sin^2 \theta - m^2 \right] \Theta = 0
\end{equation}
$$

它的解是**缔和勒让德函数（associated Legendre function）** $\mathrm{P}_\ell^m(\cos \theta)$，其定义为

$$
\begin{equation} \label{eq:associated-legendre}
    \mathrm{P}_{\ell}^m(x) = (-1)^m (1 - x^2)^{m/2} \frac{\mathrm{d}^m}{\mathrm{d} x^m} \mathrm{P}_\ell(x)
\end{equation}
$$

其中 $\mathrm{P}_\ell(x)$ 是 $\ell$ 阶**勒让德多项式（Legendre polynomial）**，由**罗德里格斯公式（Rodrigues' formula）**定义为

$$
\begin{equation}
    \mathrm{P}_{\ell}(x) = \frac{1}{2^\ell \ell!} \frac{\mathrm{d}^\ell}{\mathrm{d} x^\ell} (x^2 - 1)^\ell
\end{equation}
$$





组合 $\theta$ 和 $\phi$ 的解，得到（归一化的）**球谐函数（spherical harmonics）**：

$$
\begin{equation}
    \mathrm{Y}_{\ell}^m(\theta, \phi) = \sqrt{\frac{2\ell + 1}{4\pi} \frac{(\ell - m)!}{(\ell + m)!}} \, \mathrm{P}_\ell^m(\cos \theta) e^{\mathrm{i} m \phi}
\end{equation}
$$


### 4.1.3 径向方程

观察径向方程 \eqref{eq:radial}，令 $u(r) \equiv r R(r)$，有

$$
\begin{aligned}
    \frac{\mathrm{d} R}{\mathrm{d} r} &= \frac{\mathrm{d}}{\mathrm{d} r} \left( \frac{u}{r} \right) = \frac{1}{r} \frac{\mathrm{d} u}{\mathrm{d} r} - \frac{u}{r^2} \\
    \frac{\mathrm{d}}{\mathrm{d} r} \left( r^2 \frac{\mathrm{d} R}{\mathrm{d} r} \right) &= \frac{\mathrm{d}}{\mathrm{d} r} \left( r \frac{\mathrm{d} u}{\mathrm{d} r} - u \right) = r \frac{\mathrm{d}^2 u}{\mathrm{d} r^2}
\end{aligned}
$$

原式 \eqref{eq:radial} 化为

$$
\begin{equation} \label{eq:radial-u}
    - \frac{\hbar^2}{2m} \frac{\mathrm{d}^2 u}{\mathrm{d} r^2} + \left[ V(r) + \frac{\hbar^2}{2m} \frac{\ell(\ell+1)}{r^2} \right] u = E u
\end{equation}
$$

此即为**径向方程**。注意到式 \eqref{eq:radial-u} 与一维薛定谔方程形式相同，只是势能项（有效势）多了一个离心项：

$$
V_{\mathrm{eff}}(r) = V(r) + \frac{\hbar^2}{2m} \frac{\ell(\ell+1)}{r^2}
$$

因为 $r^{-2}$ 项倾向于将粒子向外抛出，类似于经典力学的离心力，故称为离心项。

#### 无限深球势阱

求无限深球势阱下的波函数和能量允许值。

$$
V(r) = \begin{cases}
    0, & r < a \\
    +\infty, & r \geq a
\end{cases}
$$

势阱内，径向方程 \eqref{eq:radial-u} 为

$$
\begin{equation} \label{eq:no-potential-radial}
    \frac{\mathrm{d}^2 u}{\mathrm{d} r^2} + \left( k^2 - \frac{\ell(\ell+1)}{r^2} \right) u = 0, \quad k \equiv \sqrt{\frac{2mE}{\hbar^2}}
\end{equation}
$$

边界条件：$u(a) = 0$. 先考虑 $\ell = 0$ 的简单情形：

$$
\frac{\mathrm{d}^2 u}{\mathrm{d} r^2} + k^2 u = 0 \implies u(r) = A \sin kr + B \cos kr
$$

$r \to 0 $ 时，$[\cos(kr)]/r \to \infty$，不符合物理意义，故 $B = 0$. 边界条件要求 $\sin (ka) = 0$，即 $ka = N \pi, \, N = 1, 2, 3, \ldots$ 故能量允许值为

$$
E_{N0} = \frac{N^2 \pi^2 \hbar^2}{2m a^2}, \quad N = 1, 2, 3, \ldots
$$

这与无限深方势阱的能级相同。对应的径向波函数为

$$
R(r) = \frac{u(r)}{r} = \sqrt{\frac{2}{a}} \frac{1}{r} \sin \left( \frac{N \pi r}{a} \right).
$$

对任意整数 $\ell$，式 \eqref{eq:no-potential-radial} 的解为**球贝塞尔函数（spherical Bessel function）**和**球诺伊曼函数（spherical Neumann function）**的线性组合：

$$
R(r) = \frac{u(r)}{r} = A \, \mathrm{j}_\ell(kr) + B \, \mathrm{n}_\ell(kr)
$$





## 4.2 氢原子

库仑势

$$
V(r) = -\frac{e^2}{4 \pi \varepsilon_0} \frac{1}{r}
$$

### 4.2.1 径向波函数

代入径向方程 \eqref{eq:radial-u}，得

$$
\begin{equation} \label{eq:hydrogen-radial}
    -\frac{\hbar^2}{2m_{\text{e}}} \frac{\mathrm{d}^2 u}{\mathrm{d} r^2} + \left[ -\frac{e^2}{4 \pi \varepsilon_0} \frac{1}{r} + \frac{\hbar^2}{2m_{\text{e}}} \frac{\ell(\ell+1)}{r^2} \right] u = E u
\end{equation}
$$

整理记号，令

$$
\kappa \equiv \sqrt{-\frac{2m_{\text{e}} E}{\hbar^2}}, \quad \rho \equiv \kappa r, \quad \rho_0 \equiv \frac{m_{\text{e}} e^2}{2 \pi \varepsilon_0 \hbar^2 \kappa}
$$

式 \eqref{eq:hydrogen-radial} 化为

$$
\begin{equation} \label{eq:hydrogen-radial-rho}
    \frac{\mathrm{d}^2 u}{\mathrm{d} \rho^2} = \left[ 1 - \frac{\rho_0}{\rho} + \frac{\ell(\ell+1)}{\rho^2} \right] u
\end{equation}
$$

先分析方程 \eqref{eq:hydrogen-radial-rho} 在 $\rho \to \infty$ 和 $\rho \to 0$ 时的渐近行为。$\rho \to \infty$ 时，方括号内常数项是主要的，因此近似地有

$$
\frac{\mathrm{d}^2 u}{\mathrm{d} \rho^2} \sim u
$$

通解为 $u(\rho) \sim A e^{-\rho} + B e^{\rho}$. 舍去发散解 $e^{\rho}$，得到 $\rho$ 比较大时，

$$
u(\rho) \sim A e^{-\rho}.
$$

当 $\rho \to 0$ 时，方括号内 $\rho^{-2}$ 项主导，则近似地有

$$
\frac{\mathrm{d}^2 u}{\mathrm{d} \rho^2} \sim \frac{\ell(\ell+1)}{\rho^2} u
$$

这是个欧拉方程，通解为 $u(\rho) \sim C \rho^{\ell+1} + D \rho^{-\ell}$. 舍去发散解 $\rho^{-\ell}$，得到 $\rho$ 比较小时，

$$
u(\rho) \sim C \rho^{\ell+1}.
$$

现在剥离出渐进行为，设方程 \eqref{eq:hydrogen-radial-rho} 的解为

$$
u(\rho) = \rho^{\ell+1} e^{-\rho} v(\rho)
$$

一通计算得到

$$
\begin{aligned}
    \frac{\mathrm{d} u}{\mathrm{d} \rho} &= \rho^{\ell} e^{-\rho} \left[ (\ell + 1 - \rho) v + \rho \frac{\mathrm{d} v}{\mathrm{d} \rho} \right] \\
    \frac{\mathrm{d}^2 u}{\mathrm{d} \rho^2} &= \rho^{\ell} e^{-\rho} \left( \left[ -2\ell - 2 + \rho + \frac{\ell(\ell+1)}{\rho} \right] v + 2 (\ell + 1 - \rho) \frac{\mathrm{d} v}{\mathrm{d} \rho} + \rho \frac{\mathrm{d}^2 v}{\mathrm{d} \rho^2} \right)
\end{aligned}
$$

回代，径向方程 \eqref{eq:hydrogen-radial-rho} 变为

$$
\begin{equation} \label{eq:radical-v}
    \rho \frac{\mathrm{d}^2 v}{\mathrm{d} \rho^2} + 2(\ell + 1 - \rho) \frac{\mathrm{d} v}{\mathrm{d} \rho} + [\rho_0 - 2(\ell + 1)] v = 0
\end{equation}
$$

假设 $v(\rho)$ 可展为幂级数：

$$
v(\rho) = \sum_{j=0}^{\infty} c_j \rho^j
$$

省略 n 页草稿纸，得到递推关系

$$
c_{j+1} = \frac{2(j + \ell + 1) - \rho_0}{(j + 1)(j + 2\ell + 2)} c_j.
$$

在 $j$ 较大时（对应 $\rho$ 较大的情况，此时高幂次项占主导），

$$
c_{j+1} \approx \frac{2}{j + 1} c_j \implies c_j \approx \frac{2^j}{j!} c_0.
$$





## 4.3 角动量

$$
\boldsymbol{L} = \boldsymbol{r} \times \boldsymbol{p}
$$

分量为

$$
\left \{
    \begin{aligned}
        L_x &= y p_z - z p_y = -\mathrm{i} \hbar \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right) \\
        L_y &= z p_x - x p_z = -\mathrm{i} \hbar \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right) \\
        L_z &= x p_y - y p_x = -\mathrm{i} \hbar \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right)
    \end{aligned}
\right.
$$

!!! tip "$\boldsymbol{r}$ 与 $\boldsymbol{p}$ 各分量之间的对易关系"
    $$
    \begin{equation} \label{eq:r-p-commutation}
        [x_i, p_j] = \mathrm{i} \hbar \delta_{ij}, \quad [x_i, x_j] = [p_i, p_j] = 0
    \end{equation}
    $$

!!! tip "对易符号 $[\cdot,\cdot]$ 的几个恒等式"
    $$
    \begin{equation} \label{eq:commutation-id}
        [AB, C] = A [B, C] + [A, C] B
    \end{equation}
    $$

### 4.3.1 本征值

算符[^1] $L_x$ 和 $L_y$ 不对易：

[^1]: 从现在开始省略算符上的“帽子”，避免与单位矢量混淆。

$$
\begin{aligned}
    \left[L_x, L_y \right] &= [y p_z - z p_y, z p_x - x p_z] \\
    &= [y p_z, z p_x] - \cancel{[y p_z, x p_z]} - \cancel{[z p_y, z p_x]} + [z p_y, x p_z] \\
    &\overset{\eqref{eq:commutation-id}}{=} y p_x [p_z, z] + x p_y [z, p_z] \overset{\eqref{eq:r-p-commutation}}{=} \mathrm{i} \hbar (x p_y - y p_x) \\
    &= \mathrm{i} \hbar L_z
\end{aligned}
$$

轮换得

$$
\begin{equation} \label{eq:L-commutation}
    \boxed{
    \begin{aligned}
        \left[L_x, L_y \right] &= \mathrm{i} \hbar L_z \\
        [L_y, L_z] &= \mathrm{i} \hbar L_x \\
        [L_z, L_x] &= \mathrm{i} \hbar L_y
    \end{aligned}
    }
\end{equation}
$$

所以 $L_x, L_y, L_z$ 是不相容的可观测量。代入广义不确定性原理，

$$
\sigma_{L_x}^2 \sigma_{L_y}^2 \geq \left( \frac{1}{2\mathrm{i}} \braket{[L_x, L_y]} \right)^2 = \frac{\hbar^2}{4} \braket{L_z}^2
$$

另一方面，总角动量的平方 $L^2 \equiv L_x^2 + L_y^2 + L_z^2$ 与各分量对易：

$$
\begin{aligned}
    [L^2, L_x] &= \cancel{[L_x^2, L_x]} + [L_y^2 + L_z^2, L_x] \\
    &\overset{\eqref{eq:commutation-id}}{=} L_y [L_y, L_x] + [L_y, L_x] L_y + L_z [L_z, L_x] + [L_z, L_x] L_z \\
    &\overset{\eqref{eq:L-commutation}}{=} -\mathrm{i} \hbar (L_y L_z + L_z L_y) + \mathrm{i} \hbar (L_z L_y + L_y L_z) \\
    &= 0.
\end{aligned}
$$

同理， $[L^2, L_y] = [L^2, L_z] = 0$. 简洁的形式为

$$
\begin{equation} \label{eq:L2-commutation}
    \boxed{
        [L^2, \boldsymbol{L}] = 0
    }
\end{equation}
$$

因此 $L^2$ 与 $L_x, L_y, L_z$ 是相容的，可以找到它们的共同本征态。比如

$$
L^2 f = \lambda f, \quad L_z f = \mu f.
$$

#### 升降算符

定义

$$
\begin{equation} \label{eq:L-ladder}
    L_{\pm} \equiv L_x \pm \mathrm{i} L_y
\end{equation}
$$

与 $L_z$ 的对易关系为

$$
\begin{equation} \label{eq:Lz-L+-commutation}
    \begin{aligned}
        [L_z, L_{\pm}] &= [L_z, L_x] \pm \mathrm{i} [L_z, L_y] \\
        &\overset{\eqref{eq:L-commutation}}{=} \mathrm{i} \hbar L_y \pm \mathrm{i} (-\mathrm{i} \hbar L_x) = \pm \hbar (L_x \pm \mathrm{i} L_y) \\
        &= \pm \hbar L_{\pm}
    \end{aligned}
\end{equation}
$$

与 $L^2$ 显然对易：

$$
\begin{equation} \label{eq:L2-L+-commutation} 
    \begin{aligned}
        [L^2, L_{\pm}] &= [L^2, L_x] \pm \mathrm{i} [L^2, L_y] \\
        &\overset{\eqref{eq:L2-commutation}}{=} 0
    \end{aligned}
\end{equation}
$$

断言：如果 $f$ 是 $L^2$ 和 $L_z$ 的共同本征函数，则 $L_{\pm} f$ 也是它们的共同本征函数。

$$
\begin{aligned}
    & L^2 (L_{\pm} f) \overset{\eqref{eq:L2-L+-commutation}}{=} L_{\pm} (L^2 f) = \lambda (L_{\pm} f) \\
    & L_z (L_{\pm} f) \overset{\eqref{eq:Lz-L+-commutation}}{=} L_{\pm} (L_z f) \pm \hbar (L_{\pm} f) = (\mu \pm \hbar) (L_{\pm} f)
\end{aligned}
$$

可以发现 $L_{\pm}$ 使 $L_z$ 的本征值增加了或减少了一个 $\hbar$，故称 $L_+$ 为**升算符（raising operator）**，$L_-$ 为**降算符（lowering operator）**。

升算符不能使用无限多次，否则 $z$ 分量会超过总角动量的大小。一定存在一个最高的态，使得

$$
L_+ f_{\text{t}}= 0.
$$

设 $\hbar \ell$ 为 $L_z$ 在该态下的本征值




$$
\begin{equation}
    \begin{aligned}
        L_+ f_{\ell}^m &= \hbar \sqrt{\ell (\ell + 1) - m(m+1)} \\
        L_- f_{\ell}^m &= \hbar \sqrt{\ell (\ell + 1) - m(m-1)}
    \end{aligned}
\end{equation}
$$

## 4.4 自旋

电子除了轨道角动量之外，存在一种与空间运动无关的角动量，是电子的内禀属性，称为**内禀角动量（intrinsic angular momentum）**，或**自旋角动量（spin angular momentum）**。

自旋的代数形式与轨道角动量 \eqref{eq:L-commutation} 类似，基本的对易关系为

$$
\begin{equation} \tag{4.4.1} \label{eq:S-commutation}
    \boxed{
    \begin{aligned}
        \left[S_x, S_y \right] &= \mathrm{i} \hbar S_z \\
        [S_y, S_z] &= \mathrm{i} \hbar S_x \\
        [S_z, S_x] &= \mathrm{i} \hbar S_y
    \end{aligned}
    }
\end{equation}
$$

$S^2$ 和 $S_z$ 的本征矢满足

$$
\begin{equation} \tag{4.4.2} \label{eq:S-eigen}
    \begin{aligned}
        S^2 \ket{s, m} &= s(s+1) \hbar^2 \, \ket{s, m} \\
        S_z \ket{s, m} &= m \hbar \, \ket{s, m}
    \end{aligned}
\end{equation}
$$

以及 $S_{\pm}$ 的关系

$$

$$



!!! example "习题 4.33"
    构造表示沿任意方向 $\hat{r}$ 的自选角动量矩阵的分量 $S_r$.使用球坐标系

    $$
    \hat{r} = \sin \theta \cos \phi \, \hat{i} + \sin \theta \sin \phi \, \hat{j} + \cos \theta \, \hat{k}
    $$

    求出 $S_r$ 的本征值和本征旋量.

    ---

    $$
    \begin{aligned}
        S_r &= \hat{r} \cdot \boldsymbol{S} = S_x \sin \theta \cos \phi + S_y \sin \theta \sin \phi + S_z \cos \theta \\
        &= \frac{\hbar}{2} \left[
            \begin{pmatrix}
                0 & 1 \\
                1 & 0
            \end{pmatrix} \sin \theta \cos \phi +
            \begin{pmatrix}
                0 & -\mathrm{i} \\
                \mathrm{i} & 0
            \end{pmatrix} \sin \theta \sin \phi +
            \begin{pmatrix}
                1 & 0 \\
                0 & -1
            \end{pmatrix} \cos \theta
        \right] \\
        &= \frac{\hbar}{2} \begin{pmatrix}
            \cos \theta & e^{-\mathrm{i} \phi} \sin \theta \\
            e^{\mathrm{i} \phi} \sin \theta  & -\cos \theta
        \end{pmatrix}
    \end{aligned}
    $$

    求解本征值：

    $$
    \begin{vmatrix}
        \frac{\hbar}{2} \cos \theta - \lambda & \frac{\hbar}{2} e^{-\mathrm{i} \phi} \sin \theta \\
        \frac{\hbar}{2} e^{\mathrm{i} \phi} \sin \theta & -\frac{\hbar}{2} \cos \theta - \lambda
    \end{vmatrix} = \lambda^2 - \left( \frac{\hbar}{2} \right)^2 = 0 \implies \lambda = \pm \frac{\hbar}{2}
    $$

    本征旋量设为 $\chi = \begin{pmatrix}
        \alpha \\
        \beta
    \end{pmatrix}$，代入本征方程 $S_r \chi = \lambda \chi$，得

    $$
    \beta = e^{\mathrm{i} \phi} \frac{\pm 1 - \cos \theta}{\sin \theta} \alpha
    $$

    归一化后得到两个本征旋量：

    $$
    \chi_+^{(r)} = \begin{pmatrix}
        \cos (\theta/2) \\
        e^{\mathrm{i} \phi} \sin (\theta/2)
    \end{pmatrix}, \quad
    \chi_-^{(r)} = \begin{pmatrix}
        e^{-\mathrm{i} \phi} \sin (\theta/2) \\
        -\cos (\theta/2)
    \end{pmatrix}
    $$

!!! example "习题4.34"
    构造自旋为 $1$ 的粒子的自旋矩阵 $S_x, S_y, S_z$.

    ---

    $s = 1 \implies m = -1, 0, 1$，$S_z$ 本征值为 $-\hbar, 0, \hbar$，对应的本征矢分别为 $\chi_+ = \begin{pmatrix}
        1 \\
        0 \\
        0
    \end{pmatrix}, \quad \chi_0 = \begin{pmatrix}
        0 \\
        1 \\
        0
    \end{pmatrix}, \quad \chi_- = \begin{pmatrix}
        0 \\
        0 \\
        1
    \end{pmatrix}$.

    $$
    \begin{aligned}
        S_+ \chi_- &= \hbar \sqrt{s(s+1) - m(m+1)} \chi_0 = \sqrt{2} \hbar \chi_0 \iff S_+ \begin{pmatrix}
            0 \\
            0 \\
            1
        \end{pmatrix} = \sqrt{2} \hbar \begin{pmatrix}
            0 \\
            1 \\
            0
        \end{pmatrix} \\
        S_+ \chi_0 &= \hbar \sqrt{s(s+1) - m(m+1)} \chi_+ = \sqrt{2} \hbar \chi_+ \iff S_+ \begin{pmatrix}
            0 \\
            1 \\
            0
        \end{pmatrix} = \sqrt{2} \hbar \begin{pmatrix}
            1 \\
            0 \\
            0
        \end{pmatrix} \\
        S_+ \chi_+ &= 0 \iff S_+ \begin{pmatrix}
            1 \\
            0 \\
            0
        \end{pmatrix} = 0 \\
        S_- \chi_+ &= \hbar \sqrt{s(s+1) - m(m-1)} \chi_0 = \sqrt{2} \hbar \chi_0 \iff S_- \begin{pmatrix}
            1 \\
            0 \\
            0
        \end{pmatrix} = \sqrt{2} \hbar \begin{pmatrix}
            0 \\
            1 \\
            0
        \end{pmatrix} \\
        S_- \chi_0 &= \hbar \sqrt{s(s+1) - m(m-1)} \chi_- = \sqrt{2} \hbar \chi_- \iff S_- \begin{pmatrix}
            0 \\
            1 \\
            0
        \end{pmatrix} = \sqrt{2} \hbar \begin{pmatrix}
            0 \\
            0 \\
            1
        \end{pmatrix} \\
        S_- \chi_- &= 0 \iff S_- \begin{pmatrix}
            0 \\
            0 \\
            1
        \end{pmatrix} = 0
    \end{aligned}
    $$

    由此可得

    $$
    S_+ = \sqrt{2} \hbar \begin{pmatrix}
        0 & 1 & 0 \\
        0 & 0 & 1 \\
        0 & 0 & 0
    \end{pmatrix}, \quad
    S_- = \sqrt{2} \hbar \begin{pmatrix}
        0 & 0 & 0 \\
        1 & 0 & 0 \\
        0 & 1 & 0
    \end{pmatrix}
    $$

    进而有

    $$
    \begin{align}
        S_x &= \frac{1}{2} (S_+ + S_-) = \frac{\hbar}{\sqrt{2}} \begin{pmatrix}
            0 & 1 & 0 \\
            1 & 0 & 1 \\
            0 & 1 & 0
        \end{pmatrix} \\
        S_y &= \frac{1}{2\mathrm{i}} (S_+ - S_-) = \frac{\hbar}{\sqrt{2}} \begin{pmatrix}
            0 & -\mathrm{i} & 0 \\
            \mathrm{i} & 0 & -\mathrm{i} \\
            0 & \mathrm{i} & 0
        \end{pmatrix} \\
        S_z &= \hbar \begin{pmatrix}
            1 & 0 & 0 \\
            0 & 0 & 0 \\
            0 & 0 & -1
        \end{pmatrix}
    \end{align}
    $$

### 4.4.2 磁场中的电子

一个带电旋转粒子构成一个磁偶极子。其磁矩 $\boldsymbol{\mu}$ 与自旋角动量 $\boldsymbol{S}$ 成正比：

$$
\begin{equation}
    \boldsymbol{\mu} = \gamma \boldsymbol{S}
\end{equation}
$$

式中，$\gamma$ 为**旋磁比（gyromagnetic ratio）**。磁偶极子处在磁场 $\boldsymbol{B}$ 中时，受到力矩 $\boldsymbol{\mu} \times \boldsymbol{B}$ 的作用，对应的势能为 $-\boldsymbol{\mu} \cdot \boldsymbol{B}$. 所以静止在磁场中[^2]的带电自旋粒子的哈密顿量为

[^2]: 如果粒子运动，则还应包括动能项。但此时粒子会受到洛伦兹力 $q \boldsymbol{v} \times \boldsymbol{B}$ 的作用，这不是由势能导出的。

$$
\begin{equation} \label{eq:spin-hamiltonian}
    H = -\gamma \boldsymbol{B} \cdot \boldsymbol{S}
\end{equation}
$$

其中，$\boldsymbol{S}$ 是相应的自旋矩阵。

#### Larmor 进动

某自旋 $1/2$ 粒子静止在均匀磁场 $\boldsymbol{B} = B_0 \hat{k}$ 中，其哈密顿量（式 \eqref{eq:spin-hamiltonian}）为

$$
\boldsymbol{H} = -\gamma B_0 S_z = -\frac{\gamma B_0 \hbar}{2} \begin{pmatrix}
    1 & 0 \\
    0 & -1
\end{pmatrix}
$$



#### Stern-Gerlach 实验




$$
H(t) = \begin{cases}
    0, & t < 0 \\
    -\gamma (B_0 + \alpha z) S_z, & 0 \leq t \leq T \\
    0, & t > T
\end{cases}
$$

能量 $E_{\pm} = \mp \gamma (B_0 + \alpha z) \hbar/2$，量子态可以写为

$$
\chi(t) = a \chi_+ e^{-\mathrm{i} E_+ t / \hbar} + b \chi_- e^{-\mathrm{i} E_- t / \hbar}
$$




!!! tip "测量的影响"
    当测量某个可观测量时，仪器和体系会发生相互作用，从而得到最终的测量结果（指针）状态，与此同时，体系的量子态也会发生坍缩到相应的本征态。

    此外，环境也会和体系、仪器发生相互作用，导致体系和仪器的纠缠态退相干。

    - 体系：$\ket{\alpha} + \ket{\beta}$
    - 叠加态：$\ket{\alpha, \nearrow} + \ket{\beta, \nwarrow}$
    - 纠缠态：$\ket{\alpha} \otimes \ket{\nearrow}$（脆弱）

    体系在测量后坍缩，按概率演化：

    $$
    \chi(0) = a \chi_+ + b \chi_- \xrightarrow[]{\text{测量 }S_z} \begin{cases}
        \chi_+, & \text{概率 } |a|^2 \\
        \chi_-, & \text{概率 } |b|^2
    \end{cases} \xrightarrow[]{\text{测量 }S_x} \begin{cases}
        \chi_+^{(x)} \\
        \chi_-^{(x)}
    \end{cases}
    $$

!!! example "习题4.36"
    电子静止在振荡磁场 $\boldsymbol{B} = B_0 \cos(\omega t) \hat{k} \implies$ 哈密顿量随时间变化！

    $$
    H(t) = \frac{e \hbar}{2 m_{\text{e}}} B_0 \cos(\omega t) \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}
    $$

    不能使用定态薛定谔方程，而是含时薛定谔方程：

    $$
    \mathrm{i} \hbar \frac{\partial \chi}{\partial t} = H \chi
    $$

    对于此题可以直接求解！

    $$
    \begin{aligned}
        \mathrm{i} \hbar \frac{\partial}{\partial t} \begin{pmatrix}
            a(t) \\
            b(t)
        \end{pmatrix} &= \frac{e \hbar}{2 m_{\text{e}}} B_0 \cos(\omega t) \begin{pmatrix}
            1 & 0 \\
            0 & -1
        \end{pmatrix} \begin{pmatrix}
            a(t) \\
            b(t)
        \end{pmatrix} \\
        \implies \quad
        a(t) &= a(0) \exp \left( -\mathrm{i} \frac{e B_0}{2 m_{\text{e}} \omega} \sin(\omega t) \right) \\
        b(t) &= b(0) \exp \left( \mathrm{i} \frac{e B_0}{2 m_{\text{e}} \omega} \sin(\omega t) \right)
    \end{aligned}
    $$

### 4.4.3 角动量耦合

两个自旋 $1/2$ 的粒子，总角动量 $\boldsymbol{S} = \boldsymbol{S}^{(1)} + \boldsymbol{S}^{(2)}$ 是多少？两粒子量子态复合后的净自旋 $s$ 和 $z$ 分量 $m$ 是多少？

设两粒子复合量子态为态相乘 $\chi_1 \chi_2$. 对于自旋 $1/2$ 的粒子，共有 4 种可能的复合态：

$$
\ket{\uparrow \uparrow}, \quad \ket{\uparrow \downarrow}, \quad \ket{\downarrow \uparrow}, \quad \ket{\downarrow \downarrow}
$$

其中 $\ket{\uparrow \uparrow}$ 对应 $s_1 = 1/2, m_1 = 1/2; s_2 = 1/2, m_2 = 1/2$. 写在前面的箭头代表第一个粒子（省略下标了）。角动量算符再写得明确些：

$$
\begin{aligned}
    \boldsymbol{S} &= \boldsymbol{S}^{(1)} + \boldsymbol{S}^{(2)} \\
    S^2 &= \boldsymbol{S} \cdot \boldsymbol{S} \\
    S_z &= S_z^{(1)} + S_z^{(2)} \, (= S_z^{(1)} \otimes I^{(2)} + I^{(1)} \otimes S_z^{(2)})
\end{aligned}
$$

$S_z$ 的求解比较简单：

$$
\begin{aligned}
    S_z \chi_1 \chi_2 &= (S_z^{(1)} + S_z^{(2)}) \chi_1 \chi_2 \\
    &= (S_z^{(1)} \chi_1) \chi_2 + \chi_1 (S_z^{(2)} \chi_2) \\
    &= \hbar m_1 \chi_1 \chi_2 + \chi_1 \hbar m_2 \chi_2 \\
    &= \hbar (m_1 + m_2) \chi_1 \chi_2
\end{aligned}
$$

因此复合态的 $m$ 值为 $m = m_1 + m_2$. 对于自旋为 $1/2$ 的两粒子，$m = 1, 0, -1$. 而 $m$ 的取值范围为 $-s, -s+1, \ldots, s-1, s$，






!!! note "结论"
    自旋为 $s_1$ 和 $s_2$ 的两个粒子，总自旋

    $$
    s = s_1 + s_2, s_1 + s_2 - 1, \ldots, |s_1 - s_2|
    $$


!!! example "习题4.64"
    表达空间和自旋的组合状态

    $$
    R_{21} \left(\sqrt{\frac{1}{3}} Y_1^0 \chi_{+} + \sqrt{\frac{2}{3}} Y_1^1 \chi_{-}\right)
    $$

    或

    $$
    \left(\sqrt{\frac{1}{3}} R_{21} Y_1^0 + \sqrt{\frac{2}{3}} R_{21} Y_1^1 \right) \left(\frac{1}{\sqrt{2}} (\chi_{+} + \chi_{-})\right)
    $$


## 4.5 电磁作用

### 4.5.1 最小耦合

洛伦兹力 $\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$ 不能用标量势函数的梯度表示，因此不能简单地用 $-\frac{\hbar^2}{2m} \nabla^2 + V$ 来表示哈密顿量。需要引入矢势 $\boldsymbol{A}$，使得

$$
\begin{equation} \label{eq:em-potentials} \tag{4.5.1}
    \boldsymbol{E} = -\nabla \varphi - \frac{\partial \boldsymbol{A}}{\partial t}, \quad \boldsymbol{B} = \nabla \times \boldsymbol{A}
\end{equation}
$$

经典哈密顿量为

$$
\begin{equation} \label{eq:hamiltonian-em-classic} \tag{4.5.2}
    H = \frac{1}{2m} (\boldsymbol{p} - q \boldsymbol{A})^2 + q \varphi
\end{equation}
$$

做标准代换 $\boldsymbol{p} \to -i \hbar \nabla$，得到哈密顿算符

$$
\begin{equation} \label{eq:hamiltonian-em} \tag{4.5.3}
    \hat{H} = \frac{1}{2m} (-i \hbar \nabla - q \boldsymbol{A})^2 + q \varphi
\end{equation}
$$

薛定谔方程变为

$$
\begin{equation} \label{eq:schrodinger-em} \tag{4.5.4}
    \mathrm{i} \hbar \frac{\partial \boldsymbol{\Psi}}{\partial t} = \left[ \frac{1}{2m} (-i \hbar \nabla - q \boldsymbol{A})^2 + q \varphi \right] \boldsymbol{\Psi}
\end{equation}
$$

这也被称为**最小耦合规则（minimal coupling rule）**。

!!! example "朗道能级（Landau Levels）"
    习题 4.43：

    $$
    \boldsymbol{A} = \frac{B_0}{2} (-y \hat{i} + x \hat{j}), \quad \varphi = K z^2
    $$


### 4.5.2 AB 效应

经典电动力学中，\eqref{eq:em-potentials} 中的电势 $\boldsymbol{A}$ 和 $\varphi$ 不是唯一确定的。具体来说，这样的势

$$
\begin{equation} \label{eq:gauge-transform} \tag{4.5.5}
    \varphi' = \varphi - \frac{\partial \Lambda}{\partial t}, \quad \boldsymbol{A}' = \boldsymbol{A} + \nabla \Lambda
\end{equation}
$$

也能给出与 $\varphi$ 和 $\boldsymbol{A}$ 相同的电场和磁场。这种变换被称为**规范变换（gauge transformation）**，这个理论是**规范不变的（gauge invariant）**。

