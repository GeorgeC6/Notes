# 晶体的热学性质

## 经典理论（能量均分定理）

能均分定理：每个简谐振子包含动能和势能两个二次型自由度，总平均能量为

$$
2 \times \frac{1}{2} k_B T = k_B T
$$

对于三维晶体，每个原子有 3 个独立振动方向，体系总能量为

$$
E = 3 N k_B T
$$

定容热容为

$$
\begin{equation} \tag{10.1} \label{eq:dulong-petit}
    C_V = \left( \frac{\partial E}{\partial T} \right)_V = 3 N k_B
\end{equation}
$$

即每个原子贡献 $3 k_B$，这就是 **Dulong-Petit 定律**。


## Einstein 模型

> Die plancksche theorie der strahlung und die theorie der spezifischen wärme, *Annalen der Physik* 327, 180-190 (1907)

**将量子化引入晶格振动中**：晶格振动是原子的集体振动（格波），可分解为一组相互独立的简谐振动模式。每个振动模式的能量量子化为

$$
E_n = \left( n + \frac{1}{2} \right) \hbar \omega
$$

振动能量的量子称为**声子（phonon）**，每个声子对应一个振动模式的激发，晶格振动能量由声子数决定。

色散关系 $\omega(q)$ 的近似：所有晶格振动模式近似为具有相同频率 $\omega$.

## Debye 模型

> Zur Theorie der spezifischen Wärmen, *Annalen der Physik* 344, 789-839 (1912)

引入真实的色散关系。核心思想：将所有格波近似为{++弹性波++}，即引入线性色散关系：

$$
\omega = v q
$$

因为{++在低温条件下，仅有**低频的长声学波**才能被热激发++}。

晶格热容是所有振动模式贡献的总和

$$
\begin{equation} \tag{10.2} \label{eq:heat_capacity_sum}
    C_V = \sum_{i = 1}^{3N} k_B \left( \frac{\hbar \omega_i}{k_B T} \right)^2 \frac{\mathrm{e}^{\hbar \omega_i / k_B T}}{(\mathrm{e}^{\hbar \omega_i / k_B T} - 1)^2}
\end{equation}
$$

在宏观晶体中，波矢 $q$ 的取值是准连续的，振动频率 $\omega$ 也准连续，求和 $\to$ 积分：

$$
\sum_i f(\omega) \to \int_0^{\omega_D} f(\omega) D(\omega) \, \mathrm{d} \omega
$$

频率空间态密度 $D(\omega)$

关于积分上下限，

-   下限：长波极限（$q \to 0 \implies \omega \to 0$），所以 $\omega_\min = 0$
-   上限
    -   理想连续介质：允许任意小波长，上限可以取 $\infty$
    -   实际晶体：存在最小长度尺度，也就是格波的波长最小只能到晶格常数 $a$.

    $$
    \lambda \geq a \implies q_\max \sim \frac{\pi}{a}
    $$

    定义**德拜截止频率** $\omega_D = v q_\max$. 下面确定截止频率。

总模数限制：

$$
\begin{equation}
    \int_0^{\omega_D} D(\omega) \, \mathrm{d} \omega = 3 N
\end{equation}
$$




对于各向同性介质，固定 $q$（波矢空间中的球面），则 $q \sim q + \mathrm{d}q$ 对应的状态分布在球壳 $4 \pi q^2 \mathrm{d}q$. 由色散关系 $\omega = vq$，得 $\mathrm{d} q = \frac{\mathrm{d} \omega}{v}$

$$
\begin{aligned}
    \mathrm{d} n &= \frac{V}{(2\pi)^3} \cdot 4 \pi q^2 \mathrm{d} q = \frac{V}{(2\pi)^3} \cdot 4 \pi \left( \frac{\omega}{v} \right)^2 \frac{\mathrm{d} \omega}{v} = \frac{V}{2\pi^2 v^3} \omega^2 \mathrm{d} \omega \\
    &=
\end{aligned}
$$

三维简单晶体的三支弹性波（声学支）：一支纵波（L）和两支横波（T）。


将 $D(\omega)$ 代入总模数

$$
\begin{equation} \label{eq:debye_freq}
    \omega_D = \left( 6 \pi^2 \frac{N}{V} \right)^{1/3} v_p
\end{equation}
$$

又称为**德拜频率**. 定义德拜温度：

$$
\begin{equation} \label{eq:debye_temp}
    \Theta_D = \frac{\hbar \omega_D}{k_B}
\end{equation}
$$

原子数密度大、声速大（硬度高）的固体，德拜温度就高。一般固体的德拜温度在 $1000 \, \mathrm{K}$ 左右。

### 德拜频率与晶体参数的关系

$$
v = \frac{\mathrm{d} \omega}{\mathrm{d} q} \approx \sqrt{\frac{\beta}{m}} a
$$


德拜温度越高，室温下的热容越小于经典值 $3 N k_B$. 因为高频的振动模式无法被热激发

有了态密度表达式和截止频率后，热容表达式为

$$
C_V = \frac{}{} \int_0^{\omega_D} k_B \left( \frac{\hbar \omega}{k_B T} \right)^2 \frac{\mathrm{e}^{\hbar \omega / k_B T}}{(\mathrm{e}^{\hbar \omega / k_B T} - 1)^2} \omega^2 \, \mathrm{d} \omega
$$

定义无量纲变量 $x = \frac{\hbar \omega}{k_B T}$，则 $\mathrm{d} \omega = \frac{k_B T}{\hbar} \mathrm{d} x$，积分上限 $x_D = \frac{\hbar \omega_D}{k_B T} = \frac{\Theta_D}{T}$，最终得到

$$
\begin{equation}
    C_V = \frac{12 \pi^4 N k_B}{5} \left( \frac{T}{\Theta_D} \right)^3
\end{equation}
$$

> 铍（Be）：少见的高德拜温度轻金属，对于航空航天等领域是宝贵的材料

局限性：未考虑光学支

## 金属的热膨胀与热传导

简谐近似与实验不符：

1.  不存在热膨胀
2.  高温时热容是常数
3.  声子之间不存在相互作用，即无声子散射。从而声子的寿命和平均自由程无穷大，在无杂质/缺陷的理想晶体中，热导率无穷大！

:bulb: 因此必须考虑非简谐效应！

### 热膨胀

简谐近似失败原因：对原子运动方程的求解中，仅保留了势能在平衡位置附近的二次项（简谐项），势能曲线是关于平衡位置对称的，振动关于 $r_0$ 对称，也就是原子平均位置不变，没有热膨胀！

引入非简谐项，振动关于 $r_0$ 不对称，势能曲线向“软”侧偏斜，从而有了热膨胀。然而非简谐项会导致原子运动方程变为非线性，难以求解。因此通常以简谐近似为基础，对其结果进行修正。

!!! example "Morse 势"

    $$
    u(r) = D \left[1 - \mathrm{e}^{-\lambda (r - r_0)} \right]^2
    $$

    将势能在平衡位置 $r_0$ 处作泰勒展开：

    $$
    u(r_0 + \delta) = u(r_0) + \cancelto{0}{\left(\frac{\mathrm{d} u}{\mathrm{d} r}\right)_{r_0}} \delta + \frac{1}{2} \left( \frac{\mathrm{d}^2 u}{\mathrm{d} r^2} \right)_{r_0} \delta^2 + \frac{1}{3!} \left( \frac{\mathrm{d}^3 u}{\mathrm{d} r^3} \right)_{r_0} \delta^3 + \cdots
    $$

    重写为

    $$
    u(r_0 + \delta) - u(r_0) = \frac{1}{2} \beta \delta^2 + \frac{1}{6} g_0 \delta^3 + \frac{1}{24} h_0 \delta^4 + \cdots
    $$

    -   $\beta$ 是简谐项系数，决定了振动频率 $\omega = \sqrt{\frac{\beta}{m}}$
    -   $g_0$ 是非简谐项系数，决定了热膨胀系数
    -   $h_0$ 是四阶非简谐项系数

    忽略常数项，保留到三次非简谐项：

    $$
    u(r_0 + \delta) \approx \frac{1}{2} \beta \delta^2 + \frac{1}{6} g_0 \delta^3
    $$

    按照 Boltzmann 统计，热平衡时偏离平衡位置的位移大小为

    $$
    \braket{\delta} = \frac{\int_{-\infty}^{\infty} \delta \exp{\left[-\frac{u(\delta)}{k_B T}\right]} \, \mathrm{d} \delta}{\int_{-\infty}^{\infty} \exp{\left[-\frac{u(\delta)}{k_B T}\right]} \, \mathrm{d} \delta}
    $$

### 热传导

当固体中存在温度梯度时，体系中产生热流。热流密度

$$
\boldsymbol{J}_q = - \kappa \nabla T
$$

微观图像：

1.  热传导来源于**声子的输运**
2.  声子平均自由程决定能量传输能力
3.  声子散射机制
    -   正常过程（N 过程）
    -   倒逆过程（U 过程）：热阻
4.  热导率随温度变化

$$
\text{热传导} \left \{
    \begin{array}{l}
        \text{电子热导} \\
        \text{晶格热导（依赖声子）}
    \end{array}
\right.
$$

存在温度梯度时，高温区域的声子激发更强，导致声子分部不均匀。由于声子的输运类似气体分子的扩散，这一模型也称为**声子气体模型**.

$$
\kappa = \frac{1}{3} C_V v l
$$


### 声子平均自由程

忽略缺陷、边界效应，声子平均自由程 $l \to \infty \implies \kappa \to \infty$. 因此必须考虑非简谐效应，引入声子-声子相互作用，导致声子散射（特别是倒逆过程），才能发生热阻，使热导率有限。

> 在体材料中：
>
> - 高温：声子-声子相互作用（尤其 U 过程）占主导
> - 低温：边界散射占主导
> - 中间温区：缺陷/杂质散射可能占主导

#### (1) 声子-声子散射

最简单：三声子散射过程

$$
\text{声子 1} + \text{声子 2} \xrightarrow{产生} \text{声子 3}
$$

碰撞过程满足：

$$
\begin{aligned}
    & \text{能量守恒} && \hbar \omega(\vec{q}_1) + \hbar \omega(\vec{q}_2) = \hbar \omega(\vec{q}_3) \\
    & \text{动量守恒} && \vec{q}_1 + \vec{q}_2 = \vec{q}_3 + \vec{G}
\end{aligned}
$$

$\vec{G}$ 为倒格矢。当 $\vec{G} = \vec{0}$ 时，为正常过程；


##### 正常过程（N 过程）

正常过程不会改变声子气的

##### 倒逆过程（U 过程）

当 $\vec{q}_1, \vec{q}_2$ 较大时，$\vec{q}_1 + \vec{q}_2$ 可能超过第一布里渊区边界，通过减去倒格矢 $\vec{G}$ 折回区内。因此，倒逆过程会破坏声子的定向输运

#### (2) 缺陷等对声子的散射

晶体的不完整性，杂质和缺陷破坏周期性，也散射声子。

在低温下，波矢 $\vec{q}$ 较小，(1) 影响较小；波长较长，“无视”小缺陷，(2) 影响较小。此时主要的散射机制来自样品的外部边界，即边界散射。

#### (3) 边界效应


!!! example "高温极限"
    晶格热导率主要由声子-声子散射决定

    平均


