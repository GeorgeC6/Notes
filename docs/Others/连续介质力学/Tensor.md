# Intro

> 连续介质力学：描述物质材料在不同荷载下的反应

- 框架上：普适定律，适用于所有介质
    - 显而易见的公理
        - 质量守恒
        - 动量守恒
        - 能量守恒
        - 熵增原理
    - 数学上
        - 场方程/微分方程
        - 积分方程
- 细节上：针对理想的材料提出本构方程
    - 固体：应力和应变的关系
    - 流体：应力和应变率的关系

## 假设

- 数学上：假设物质无限可分，连续分布。于是可以使用**极限**，写出**连续方程**。
- 物理上：每个粒子由足够多的分子/原子组成。于是可以使用热统的概念，热力学变量可以取平衡态的平均值，而不用考虑涨落浮动。

## 张量初步

> **物理定律不应依赖于坐标系的选择**
>
> 引入抽象的概念：张量
>
> 张量的具体组成部分，在不同坐标系下会变化，但张量本身不变

### 求和，哑指标

$$
s = a_1 x_1 + a_2 x_2 + \ldots + a_n x_n
$$

这样写很麻烦。

$$
s = \sum_{i=1}^n a_i x_i
$$

把 $i$ 换成别的字母也是表达同一个意思。这样写都太啰嗦了！

只要有{==**重复 1 次**（也就是**出现 2 次**）==}的指标，就省略掉求和符号。此即**爱因斯坦求和约定（Einstein's summation convention）**。

$$
s = a_i x_i = a_k x_k
$$

一般三维情况下，$i$ 取值为 $1, 2, 3$.

!!! warning "注意"
    $a_i b_i x_i$ 中 $i$ 出现了 3 次，不能省略求和符号！必须显式地写出来：

    $$
    s = \sum_{i=1}^n a_i b_i x_i
    $$

    ---

    $a_{ii}$ 符合求和约定：

    $$
    a_{ii} = a_{11} + a_{22} + a_{33}
    $$

!!! tip "嵌套求和"
    $$
    \sum_{i=1}^3 \sum_{j=1}^3 a_{ij} x_i x_j = a_{ij} x_i x_j
    $$

    $i,j$ 都只重复了一次，符合求和约定。

    ---

    $$
    \sum_{i=1}^3 \sum_{j=1}^3 \sum_{k=1}^3 a_{ijk} x_i x_j x_k = a_{ijk} x_i x_j x_k
    $$

    同理，$i,j,k$ 都是哑指标，上式表示了 27 项！

### 自由指标

有线性方程组：

$$
\left \{
\begin{aligned}
x_1' &= a_{11} x_1 + a_{12} x_2 + a_{13} x_3 \\
x_2' &= a_{21} x_1 + a_{22} x_2 + a_{23} x_3 \\
x_3' &= a_{31} x_1 + a_{32} x_2 + a_{33} x_3
\end{aligned}
\right.
$$

把 $m$ 作为哑指标：

$$
\left \{
\begin{aligned}
x_1' &= a_{1m} x_m \\
x_2' &= a_{2m} x_m \\
x_3' &= a_{3m} x_m
\end{aligned}
\right.
$$

进一步简化：

$$
x_i' = a_{im} x_m, \quad i = 1, 2, 3
$$

$m$ 出现在同一乘积项里，是哑指标；$i$ {==**在等式的每一项中出现有且仅有一次**==}，称作**自由指标**。

> $i = 1, 2, 3$ 作为惯例，之后省略。

!!! example "向量"
    向量 $\mathbf{a}$ 在笛卡尔坐标系 $(\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3)$ 下的分量：

    $$
    a_i = \mathbf{a} \cdot \mathbf{e}_i
    $$

    :point_right: 使用哑指标，$\mathbf{a} = a_i \mathbf{e}_i$.

    ---

    假设坐标系旋转过一个角度/平移一段距离，变为 $(\mathbf{e}_1', \mathbf{e}_2', \mathbf{e}_3')$，则

    $$
    \mathbf{e}_i' = Q_{im} \mathbf{e}_m
    $$

    展开写就是

    $$
    \left \{
    \begin{aligned}
    \mathbf{e}_1' &= Q_{11} \mathbf{e}_1 + Q_{12} \mathbf{e}_2 + Q_{13} \mathbf{e}_3 \\
    \mathbf{e}_2' &= Q_{21} \mathbf{e}_1 + Q_{22} \mathbf{e}_2 + Q_{23} \mathbf{e}_3 \\
    \mathbf{e}_3' &= Q_{31} \mathbf{e}_1 + Q_{32} \mathbf{e}_2 + Q_{33} \mathbf{e}_3
    \end{aligned}
    \right.
    $$

    可以发现，$Q_{im}$ 就是坐标变换矩阵。

!!! warning "注意"
    $$
    a_i = b_j
    $$

    不是自由指标。

    ---

    $$
    a_i + b_i = c_i \quad \text{or} \quad a_i + b_i c_j d_j = f_i
    $$

    是自由指标。前者即 3 个方程，后者也是 3 个方程，哑指标 $j$ 展开后等号左边共 4 项。

    ---

    $$
    T_{ij} = A_{im} B_{jm}
    $$

    $i,j$ 均为自由指标，共 9 个方程，等号右边有 3 项（$m$ 为哑指标）。

### The Kronecker delta

定义：

$$
\delta_{ij} = \begin{cases}
1, & i = j \\
0, & i \neq j
\end{cases}
$$

展开写就是

$$
\left \{
\begin{aligned}
& \delta_{11} = \delta_{22} = \delta_{33} = 1 \\
& \delta_{12} = \delta_{13} = \delta_{21} = \delta_{23} = \delta_{31} = \delta_{32} = 0
\end{aligned}
\right.
$$

写成矩阵的形式 $[\delta_{ij}]$:

$$
[\delta_{ij}] = \begin{bmatrix}
\delta_{11} & \delta_{12} & \delta_{13} \\
\delta_{21} & \delta_{22} & \delta_{23} \\
\delta_{31} & \delta_{32} & \delta_{33}
\end{bmatrix} = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

即为单位矩阵 $I$.

!!! note "Remarks"
    - $\delta_{ii} = \delta_{11} + \delta_{22} + \delta_{33} = 3$
    - $\delta_{1m} a_m = \delta_{11} a_1 + \cancel{\delta_{12} a_2} + \cancel{\delta_{13} a_3} = a_1$
      $\implies \delta_{im} a_m = a_i$
    - $\delta_{1m} T_{mj} = \delta_{11} T_{1j} + \cancel{\delta_{12} T_{2j}} + \cancel{\delta_{13} T_{3j}} = T_{1j}$
      $\implies \delta_{im} T_{mj} = T_{ij}$
      - 若取 $T_{mj} = \delta_{mj}$，则 $\delta_{im} \delta_{mj} = \delta_{ij}$
      - 还能进一步得到 $\delta_{im} \delta_{mn} \delta_{nj} = \delta_{ij}$

    !!! tip "$\delta$ 的作用"
        $\delta$ 可以消去一个哑指标！
    
    - $\mathbf{e}_i \cdot \mathbf{e}_j = \delta_{ij}$

### The Permutation symbol

$$
\varepsilon_{ijk} = \left \{
\begin{array}{c}
    1 \\
    -1 \\
    0
\end{array}
\right\}
\text{如果 } i,j,k \text{ 是 } 1,2,3 \text{ 的}
\begin{pmatrix}
    \text{偶排列} \\
    \text{奇排列} \\
    \text{不构成排列}
\end{pmatrix}
$$

展开写就是

$$
\left \{
\begin{aligned}
& \varepsilon_{123} = \varepsilon_{231} = \varepsilon_{312} = +1 \\
& \varepsilon_{132} = \varepsilon_{213} = \varepsilon_{321} = -1 \\
& \varepsilon_{111} = \varepsilon_{112} = \ldots = 0
\end{aligned}
\right.
$$

更抽象地写，

$$\varepsilon_{ijk} = \varepsilon_{jki} = \varepsilon_{kij} = - \varepsilon_{jik} = - \varepsilon_{ikj} = - \varepsilon_{kji}.$$

回忆叉乘，

$$
\mathbf{e}_1 \times \mathbf{e}_2 = \mathbf{e}_3, \quad
\mathbf{e}_2 \times \mathbf{e}_1 = -\mathbf{e}_3, \quad \mathbf{e}_2 \times \mathbf{e}_3 = \mathbf{e}_1, \ldots
$$

可用置换符号简介地写为

$$
\begin{equation}
    \mathbf{e}_i \times \mathbf{e}_j = \varepsilon_{ijk} \mathbf{e}_k.
\end{equation}
$$

有两个向量 $\mathbf{a} = a_i \mathbf{e}_i, \mathbf{b} = b_j \mathbf{e}_j$，则

$$
\begin{aligned}
    \mathbf{a} \times \mathbf{b} &= (a_i \mathbf{e}_i) \times (b_j \mathbf{e}_j) = a_i b_j (\mathbf{e}_i \times \mathbf{e}_j) \\
    &= a_i b_j \varepsilon_{ijk} \mathbf{e}_k.
\end{aligned}
$$

> 这里使用了 $j$，以防止和 $i$ 混淆。

!!! example "习题2-12"
    证明：
    
    $$\varepsilon_{ijm} \varepsilon_{klm} = \delta_{ik} \delta_{jl} - \delta_{il} \delta_{jk}.$$

    这个式子很有用。

### 指标操作