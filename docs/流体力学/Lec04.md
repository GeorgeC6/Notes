# 量纲分析

> Basically, dimensional analysis is a method for **reducing the number and complexity of experimental variables** that affect a given physical phenomenon, by using a sort of compacting technique.

假设流场中的某一物体受力为 $F$，依赖于物体长度 $L$、流速 $V$、流体密度 $\rho$ 和粘度 $\mu$，则

$$
\begin{equation} \label{eq:force-dependence}
    F = f(L, V, \rho, \mu)
\end{equation}
$$

如果每个参数做 10 次实验，总共就要做 $10^4$ 次实验！

通过量纲分析的方法（后面会介绍），上式可以简化为

$$
\begin{equation} \label{eq:force-dimensionless}
    \frac{F}{\rho V^2 L^2} = g \left(\frac{\rho V L}{\mu} \right) \iff C_F = g (\mathrm{Re})
\end{equation}
$$

也就是阻力系数 $C_F$ 只是雷诺数 $\mathrm{Re}$ 的函数。

- 节约时间成本
- 有利于设计实验
- **标度律（scaling law）**：小尺度实验结果推广到大尺度工程应用

!!! example "水下微小生物所受阻力"
    放大模型，雷诺数 $\mathrm{Re} = \frac{\rho V L}{\mu}$ 不变，则阻力系数 $C_F$ 相同

## 量纲

<center>

**表 1.** 基本物理量的量纲和单位

| 物理量名称 | 量纲符号 | SI 单位 |
| :---: | :---: | :---: |
| 质量 | $\mathrm{M}$ | $\text{kg}$ |
| 长度 | $\mathrm{L}$ | $\text{m}$ |
| 时间 | $\mathrm{T}$ | $\text{s}$ |
| 热力学温度 | $\Theta$ | $\text{K}$ |
| 电流强度 | $\mathrm{I}$ | $\text{A}$ |
| 物质的量 | $\mathrm{N}$ | $\text{mol}$ |
| 发光强度 | $\mathrm{J}$ | $\text{cd}$ |

</center>

!!! note "量纲幂次定理"
    任意参量的量纲均可表示为基本量纲的幂次单项式。

    例如：参量 $A$ 的量纲记为 $[\mathrm{A}]$，那么有

    $$
    [\mathrm{A}] = \mathrm{M}^{a_1} \mathrm{L}^{a_2} \mathrm{T}^{a_3} \Theta^{a_4} \mathrm{I}^{a_5} \mathrm{N}^{a_6} \mathrm{J}^{a_7}
    $$

流体力学中主要只考虑前四种基本量纲，即质量 $\mathrm{M}$、长度 $\mathrm{L}$、时间 $\mathrm{T}$ 和热力学温度 $\Theta$，称作 $MLT\Theta$ 系统。

!!! tip "选取作为标度的变量"
    1. 标度量本身不能组合成无量纲量，但加上一个变量后能组成无量纲参数
    2. 不要选择要输出的量
    3. （建议）选择常见变量而不是抽象变量

## 量纲和谐原理

Principle of Dimensional Homogeneity (PDH):

> If an equation truly expresses a proper relationship between variables in a physical process, it will be dimensionally homogeneous; that is, each of its additive terms will have the same dimensions.

## 瑞利法

若 $x = k x_1^{a_1} x_2^{a_2} \cdots x_n^{a_n}$，则

$$\dim x = \dim k \cdot \dim x_1^{a_1} \cdot \dim x_2^{a_2} \cdots \dim x_n^{a_n}$$

适用于变量较少的情况（不然会导致方程数过多）。

## Buckingham $\pi$ 定理

### 第一部分

若某一物理过程满足 PDH 条件，且涉及 $n$ 个有量纲变量，设可将其简化为 $k$ 个无量纲变量（或称 $\Pi$ 数，因为它们是有量纲变量的乘积）。**约减量 $j = n − k$ 等于这些变量中不构成 $\Pi$ 项（即无量纲数）的最大变量数目，且始终小于或等于描述这些变量的基本量纲数。**

以 \eqref{eq:force-dependence} 为例，

| $F$ | $L$ | $V$ | $\rho$ | $\mu$ |
| :---: | :---: | :---: | :---: | :---: |
| $[\mathrm{M}][\mathrm{L}][\mathrm{T}]^{-2}$ | $[\mathrm{L}]$ | $[\mathrm{L}][\mathrm{T}]^{-1}$ | $[\mathrm{M}][\mathrm{L}]^{-3}$ | $[\mathrm{M}][\mathrm{L}]^{-1}[\mathrm{T}]^{-1}$ |

$n = 5$，基本量纲数 $= 3 \,([\mathrm{M}], [\mathrm{L}], [\mathrm{T}])$，所以 $j \leq 3$。一般不选输出量 $F$ 作为重复变量，故在剩下四个变量里考虑。选 3 个变量（如 $L, V, \rho$）不能构成无量纲数，而任意 4 个变量都能构成无量纲数，所以 $j = 3$，$k = n - j = 2$。


### 第二部分

加上一个


### 矩阵表达

以 \eqref{eq:force-dependence} 为例，

| $\quad$ | $F$ | $L$ | $V$ | $\rho$ | $\mu$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $[\mathrm{M}]$ | 1 | 0 | 0 | 1 | 1 |
| $[\mathrm{L}]$ | 1 | 1 | 1 | -3 | -1 |
| $[\mathrm{T}]$ | -2 | 0 | -1 | 0 | -1 |

设量纲矩阵（Dimension Matrix）为 $D$，则

$$
D = \begin{bmatrix}
    1 & 0 & 0 & 1 & 1 \\
    1 & 1 & 1 & -3 & -1 \\
    -2 & 0 & -1 & 0 & -1
\end{bmatrix}
$$

矩阵 $D$ 的秩 $\mathrm{rank}(D) = 3$，所以 $j = \text{列数} - \mathrm{rank}(D) = 5 - 3 = 2$。

## Ipsen 逐步消去法

每次消去一种量纲（相当于把处理过的变量作为新的变量），直到所有量纲都被消去

以 \eqref{eq:force-dependence} 为例，记作

$$
\begin{aligned}
    \underset{[\mathrm{M}][\mathrm{L}][\mathrm{T}]^{-2}}{F} &= \mathrm{fcn}(\underset{[\mathrm{L}]}{L}, \underset{[\mathrm{L}][\mathrm{T}]^{-1}}{V}, \underset{[\mathrm{M}][\mathrm{L}]^{-3}}{\rho}, \underset{[\mathrm{M}][\mathrm{L}]^{-1}[\mathrm{T}]^{-1}}{\mu}) \\[2em]
    \xrightarrow[除以 \rho]{{消去} [\mathrm{M}]} \quad \underset{[\mathrm{L}][\mathrm{T}]^{-2}}{\frac{F}{\rho}} &= \mathrm{fcn}(\underset{[\mathrm{L}]}{L}, \underset{[\mathrm{L}][\mathrm{T}]^{-1}}{V}, \underset{[\mathrm{L}]^{-3}}{\rho}, \underset{[\mathrm{L}]^{-1}[\mathrm{T}]^{-1}}{\mu}) \\
\end{aligned}
$$


这种方法不需要用到 $j$。消去的顺序不唯一。


!!! example "让量纲分析引起重视的工作"
    G.I. Taylor 对点源在空气中爆炸问题的分析

    初始能量为 $E_0$ 的点源在空气爆炸后形成球面的冲击波。记时刻 $t$ 的球面半径为 $r$，该球面内部是火球（高温高压），外部是密度为 $\rho$ 的空气，其压强与火球压强相比可忽略不计。空气的绝热指数为 $\gamma$。采用量纲分析确定

    $$ r = f(E_0, \rho, \gamma, t) $$

    - 基本量纲：$[\mathrm{M}], [\mathrm{L}], [\mathrm{T}]$
    - 无量纲因变量：$\gamma$
    - 约减量：$j = 3$，故无量纲自变量个数 $k = 4 - 3 = 1$

    $$
    \Pi_r = \gamma E_0^a t^b \rho^c
    $$


## 基本方程的无量纲化

$$
\begin{aligned}
    & \text{Continuity: } \qquad \nabla \cdot \mathbf{V} = 0 \\
    & \text{Navier-Stokes: } \qquad \rho \frac{\mathrm{d} \mathbf{V}}{\mathrm{d} t} = -\nabla p + \mu \nabla^2 \mathbf{V} + \rho \mathbf{g}
\end{aligned}
$$

采用特征速度 $U$、物体长度 $L$ 作为无量纲化的物理量：

$$
\mathbf{V}^* = \frac{\mathbf{V}}{U}, \quad \nabla^* = L \nabla, \quad t^* = \frac{t U}{L}, \quad p^* = \frac{p + \rho g z}{\rho U^2}
$$

梯度算子的具体例子：$\dfrac{\partial}{\partial x} = \dfrac{\partial}{\partial (L x^*)} = \dfrac{1}{L} \dfrac{\partial}{\partial x^*}$。

代入 N-S 方程，

$$
\begin{aligned}
    \frac{\mathrm{d} \mathbf{V}}{\mathrm{d} t} &= \frac{\partial \mathbf{V}}{\partial t} + \mathbf{V} \cdot \nabla \mathbf{V} \\
    &= \frac{\partial (U \mathbf{V}^*)}{\partial (t^* L/U)} + (U \mathbf{V}^*) \cdot (\frac{1}{L} \nabla^*) (U \mathbf{V}^*) \\
    &= 
\end{aligned}
$$

### 无量纲参数

- Reynolds 数 $\mathrm{Re} = \dfrac{\rho U L}{\mu}$
- Froude 数 $\mathrm{Fr} = \dfrac{U^2}{g L}$
- Euler 数 $\mathrm{Eu} = \dfrac{p}{\rho U^2}$
- Strouhal 数 $\mathrm{St} = \dfrac{\omega L}{U}$
- Weber 数 $\mathrm{We} = \dfrac{\rho U^2 L}{\Upsilon}$

!!! info "关于 Strouhal number"
    V. Strouhal, wires singing in the wind (1878)

    圆柱绕流后振荡：卡门涡街（Karman vortex street，1912）

## 相似原理

- 力学相似基本概念
    - 几何相似
        - 表征流场几何形状
    - 运动相似
        - 表征流体微团运动状态
    - 动力学相似
        - 表征流体微团动力性质
    - 热力学相似
- 可压缩流动
    - $\mathrm{Re}, \mathrm{Ma}$ 相等，比热比 $\gamma$ 也可考虑
- 不可压流动
    - 无自由面：$\mathrm{Re}$ 相等
    - 有自由面：$\mathrm{Re}, \mathrm{Fr}$ 相等（$\mathrm{We}, \mathrm{Ca}$ 也可考虑）

### 几何相似

模型（model）与原型（prototype）对应的所有线长度比例相等，$\dfrac{l_p}{l_m} = \lambda_l$.

:warning: 在流动问题里，流动方向也必须一致！也就是模型和原型相对于环境的朝向也要一致。

### 运动学相似

几何相似的两个系统，具有相同的长度比例和时间比例

### 动力学相似

在运动学相似的两个系统中，对应点的受力比例相等

存在自由面时，优先保证 Froude 数相等