# ARPES

能带结构与角分辨光电子能谱

> 固体物理：周期势场
>
> 布里渊区：周期性势场下的动量空间
>
> 自由电子模型、紧束缚模型

自由电子 $\frac{\hbar^2 k^2}{2m}$

周期性势场下的电子（能带）

$$
\begin{vmatrix}
    \frac{\hbar^2 k^2}{2m} & 
\end{vmatrix}
$$

紧束缚下的能带：能带宽度与不同原子位的电子轨道波函数交叠大小有关

> 孤立原子能级：动量空间上非常弥散，没有变化。在实空间中 localized

!!! tip "电子能带的重要性"
    - 发光二极管
    - 高温超导体

    直接能隙（CB和VB之间有一段没有电子占据）：电子从价带跃迁到导带，动量变化远小于布里渊区的大小，近似动量守恒，易发光

    间接能隙：为了满足动量守恒，还要放出声子

    拓扑绝缘体：块体绝缘，表面有自旋极化的电子态（拓扑保护）

测量费米面的手段：量子振荡（早期）

现代的手段：**Angle-Resolved PhotoEmission Spectroscopy (ARPES)**

- 能量守恒：

$$
E_{\text{kinetic}} = h\nu - \Phi_{\text{wf}} - |E_b|
$$

- $\Phi_{\text{wf}}$：功函数，费米能电子变成自由电子所需要的能量
- $E_b$：电子相对于费米能量的能量，i.e. 费米能量上的电子 $|E_b| = 0$

$$
E_b \, \begin{cases}
    < 0, & \text{占据电子态} \\
    > 0, & \text{高于费米能量的未占据电子}
\end{cases}
$$

考虑费米能量的电子，$E_{\text{kin}} = h\nu - \Phi_{\text{wf}}$，三个量都可以实验测得。对于不是费米能量的电子，可以推出 $|E_b|$ 的大小

- 面内动量守恒：

$$
k_{\parallel} = \sqrt{\frac{2m}{\hbar^2} E_{\text{kin}}} \sin \theta
$$

通过测量 $E_{\text{kin}}$ 和 $\theta$，可以得到能量和动量的信息，即强度（电子数目）关于动量能量的函数 $I(k_x, k_y, |E_b|)$，可以推出能带结构！

> 对于 $\sim 100 \, \text{eV}$ 的光子，动量 $\sim 0.00001 \, Å^{-1}$，可忽略

动量分布曲线/能量分布曲线（固定一个参数得到）

$$
I(E_b, k_{\parallel x}, k_{\parallel y}) \propto \left|M_{f,i}^{\mathrm{k}} \right|^2 f(E_b) A(\mathbf{k}, E_b)
$$

- $\left|M_{f,i}^{\mathrm{k}} \right|^2$：光电激发概率（截面）
- $f(E_b)$：费米狄拉克函数
- $A(\mathbf{k}, E_b)$：谱函数（固体内在信息）

!!! quote ""
    普朗克（？）电子理论上寿命为无穷大

$$
A(\mathbf{k}, E_b) = \frac{\Gamma_k/\pi}{}
$$

## 应用

### 量子霍尔效应

经典霍尔效应

$$
R_{\text{H}} = \frac{U_{\text{Hall}}(x)}{I_{\text{DC}}(y)} = \frac{B}{nec} \propto B
$$

- 低温强磁场下，霍尔系数出现平台！
    - 平台位置非常精确 $\frac{1}{n} \times \frac{h}{e^2}$
    - 平台中纵向电阻 $\rho_{xx} = \frac{V_{\text{DC}}(y)}{I_{\text{DC}}(y)}$ 为 $0$
    - 来自 Landau 能级

!!! quote ""
    整数量子霍尔效应，Klaus von Klitzing, 1985 Nobel Prize

### 石墨烯的狄拉克费米子

电导 $\sigma_{xy} \overset{\text{approx.}}{\sim} \frac{1}{R_{\text{H}}}$

石墨烯：半整数量子霍尔效应

在发现石墨烯之前的二维电子气：$E = \frac{\hbar^2 k^2}{2m}$

石墨烯：$E = hk \times v$，和 $k$ 呈线性关系！

$E^2 = p^2 c^2 + m_0^2 c^4$，当 $E \propto pc \propto k$，静止质量 $m_0 = 0$！无静止质量的费米子在固体中可以得到！？

4 个电子，3 个电子形成 $\sigma$ 键，还有一个 $p_z$ 轨道

pseudo-spin

$$
\psi = \begin{pmatrix}
    e^{\mathrm{i} \theta /2} \\
    \pm e^{-\mathrm{i} \theta /2}
\end{pmatrix}
$$

$\theta$ 转一圈 $2\pi$，$\psi$ 并没有回到原来的状态

> 类似于电子的 Pauli 矩阵（？）

- 单层石墨烯，Berry Phase $= \pi$

$$
\psi = \begin{pmatrix}
    e^{\mathrm{i} \theta} \\
    b \\
    b \\
    \pm e^{-\mathrm{i} \theta}
\end{pmatrix}
$$

- 双层石墨烯，Berry Phase $= 2\pi$

- Bloch wave function: $n(\mathbf{R})$
- Berry phase 定义：

$$
\gamma_n = \mathrm{i} \oint_C \mathrm{d} \mathbf{R} \left\langle n(\mathbf{R}) | \nabla_{\mathbf{R}} | n(\mathbf{R}) \right\rangle
$$

!!! quote ""
    Berry phase 与外界磁场无关，但是需要通过磁场体现出来

### 量子霍尔效应的拓扑解释

#### 拓扑物态

!!! note "Gauss-Bonnet 定理"
    $$
    \int_S \kappa \, \mathrm{d}A = 4\pi (1-g)
    $$

    其中 $\kappa = \frac{1}{r_1 r_2}$ 为表面曲率，$g$ 为表面穿孔数目

边界态数目 $\iff$ 几何体的穿孔数目

这可以解释霍尔电导为 $e^2/h$ 的整数倍

$$
\sigma_{xy} = - \nu \frac{e^2}{h}
$$

Chern number $n$:

$$
n = \frac{1}{2\pi} \int_{\text{BZ}} \mathrm{d}^2 k \, \mathbf{F}(\mathbf{k}) = \frac{1}{2\pi} \oint_C \mathbf{A} \cdot \mathrm{d} \mathbf{k}
$$

$\mathbf{A} = -\mathrm{i} \left\langle u(\mathbf{k}) | \nabla_{\mathbf{R}} | u(\mathbf{k}) \right\rangle$

#### 三维拓扑绝缘体

拓扑绝缘体特点

- 块体是绝缘体（半导体）
- 表面有受拓扑保护的表面态
- 表面态是自旋极化且与动量耦合
- 表面态可以认为是狄拉克费米子

> 固体物理中，绝大部分能带的简并度为 2

在时间反演不变点出现能带翻转（马鞍型）

### Hubbard 模型和 Mott 绝缘体

单带 Hubbard 模型

$$
H = \underset{\text{紧束缚能带}}{\underbrace{-t \sum_{\langle j,l \rangle} \sum_{\sigma} \left(c_{j\sigma}^{\dagger} c_{l\sigma} + c_{i\sigma}^{\dagger} c_{j\sigma}\right)}} + \underset{\text{Hubbard interaction}}{\underbrace{U \sum_j \hat{n}_{j\uparrow} \hat{n}_{j\downarrow}}}
$$

$$
\begin{cases}
    |-2t| \gg U, & \text{弱关联，金属} \\
    |-2t| <\sim U, & \text{强关联，绝缘体}
\end{cases}
$$

超导的母态（未掺杂）：Mott 绝缘体

### Mott-Hubbard 转变

在很大的 $U$ 区间里，既有局域的 Hubbard 能带（远离费米能量 $E_f$），也有巡游的准粒子态（费米能量附近）。电子既局域，又巡游！

!!! summary "总结"
    - 丰富的物理 & 呈展现象（more is different），应用价值（磁存储、超导 etc.）
    - 重要性质：