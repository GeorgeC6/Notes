# Intro

!!! abstract "Grading"
    - 出勤 10%
    - 作业 30%
    - 期末 60%

流体：能够流动的介质（物质）

> 爆炸冲击波：可压缩
>
> 鼓虾：极快的空穴（cavitation），局部温度极高
>
> 水管的安装有讲究（钝角）

!!! quote "流体力学发展历史"

## 学科定位和研究方法

1.  **流体力学与数学密不可分，相互推动**
    - 流体力学的基本方程是非线性二阶 PDE，求解需要坚实的数学基础
    - 微积分、数理方程、特殊函数、积分变换、统计理论、离散数学、摄动法

      > 千禧年问题：Navier-Stokes 方程的光滑解

    - 连续性方程
    
    $$
    \frac{1}{\rho} \frac{D \rho}{D t} + \nabla \cdot \mathbf{u} = 0
    $$

    - 动量方程

    $$
    \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} = -\frac{1}{\rho} \nabla p + \nu \nabla^2 \mathbf{u} + \mathbf{g}
    $$

2.  **流体力学与物理**
    “混沌”和“孤立波”等非线性物理在二十世纪最重大的进展均源于流体力学问题的研究

    - 朗道

3.  **流体力学是现代工程技术的重要基础**
    - 上天——航空航天工程、气候天气
    - 入地——能源、环境、交通、建筑工程
    - 下海——海洋海岸工程、舰船航海工程

### 研究方法

```mermaid
flowchart LR
    A[理论分析] --> B[现象观察]
    B --> C[实验模拟]
    C --> A
```

#### 实验研究

- 古老、有效

- :thumbsup:
    - 能直接解决生产中的复杂问题，能发现流动中的新现象和新原理，它的结果可以作为检验其他方法是否正确的依据
- :thumbsdown:
    - 对不同情况，需作不同实验，即所得结果的普适性较差
    - 有些实验的费用较高

#### 理论分析

- :thumbsup:
    - 普适性较好

流体不能抵抗剪应力！

- 连续性假设

$$
\rho = \lim_{\delta V \to 0} \frac{\delta m}{\delta V}
$$

- 运动描述

$$
\frac{D}{Dt} = \frac{\partial}{\partial t} + \mathbf{u} \cdot \nabla
$$

- 层流流动剪应力

$$
\tau = \mu \frac{\mathrm{d}\gamma}{\mathrm{d}t}
$$

- 牛顿流体
- 非牛顿流体
    - 需要精确描述非牛顿流体的地方比较少
    - 本构关系还不清楚，都是经验公式

!!! note "粘性的物理来源"
    - 动量交换

    > - 气体分子热运动，互相碰撞，产生动量交换 $\to$ 分子平均自由程明确
    >
    > - 液体分子排列致密，是多体作用 $\to$ 理论不完备，需要实验测量


粘度与温度的关系

- 气体

$$
\frac{\mu}{\mu_0} \approx \begin{cases}
    \left(\frac{T}{T_0}\right)^n & \text{power law} \\
    \left(\frac{T}{T_0}\right)^{3/2} \frac{T_0 + S}{T + S} & \text{Sutherland's formula}
\end{cases}
$$

- 液体



!!! tip "无滑移边界条件（no-slip）"
    -  连续、有粘性

    $$
    \mathbf{V}_{\text{fluid}} = \mathbf{V}_{\text{wall}}
    $$

    - 连续、无粘性

    $$
    V_{\text{normal}}(\text{fluid}) \equiv V_{\text{normal}}(\text{solid})
    $$

    - 稀薄气体

    $$
    u_{\text{fluid}} - u_{\text{wall}} \approx \ell \left. \frac{\partial u}{\partial n} \right|_{\text{wall}}
    $$

    其中 $\ell$ 为气体平均自由程（mean free path），气体大约 100 nm，液体没有准确定义

    - 努森数（Knudsen number）

    $$
    \text{Kn} = \frac{\ell}{L}
    $$

应力矢量

!!! note "Euler-Cauchy 应力原理"
    在流体内部任何一个想象的封闭曲面上，都存在一个**应力矢量场**

    $$
    \Sigma = \Sigma(\mathbf{x}, t, \mathbf{n})
    $$

    曲面外物质对曲面内流体的作用，等价于该矢量场对曲面内流体的作用。

$\sigma_{ij}$

- $i$：与剪应力作用平面垂直的轴的方向
- $j$：剪应力作用的方向

!!! note "等值线"
    - 全微分（total differential）

    $$
    \mathrm{d}f = \frac{\partial f}{\partial x} \mathrm{d}x + \frac{\partial f}{\partial y} \mathrm{d}y
    $$

    - 沿轨迹 $S$ 方向的全导数（total derivative）

    $$
    \frac{\mathrm{d}f}{\mathrm{d}s} = \frac{\partial f}{\partial x} \frac{\mathrm{d}x}{\mathrm{d}s} + \frac{\partial f}{\partial y} \frac{\mathrm{d}y}{\mathrm{d}s} := \frac{\partial f}{\partial x} \cos \alpha + \frac{\partial f}{\partial y} \sin \alpha
    $$

    在等值线上，$P$ 沿轨迹 $S$ 方向不变，即

    $$
    \frac{\mathrm{d}f}{\mathrm{d}s} = 0 \implies \tan \alpha = -\frac{\partial f / \partial x}{\partial f / \partial y}
    $$

    若要使 $P$ 变化最快，则有

    $$
    \frac{\mathrm{d}}{\mathrm{d} \alpha} \left( \frac{\mathrm{d}f}{\mathrm{d}s} \right) = 0 \implies 
    $$
