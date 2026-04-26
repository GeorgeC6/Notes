# 倒格子

## 1 晶格周期性与 Fourier 展开

!!! question "为什么要引入倒（$k$）空间"
    不同表象原则上都能描述同一物理问题，但是有方便不方便之分。一个物理系统既可以在**实空间（real space, $r$）** 描述，也可以在**动量空间（reciprocal space, $k$）** 描述。

    :bulb: 核心思想：选择合适表象，使问题简化

    :exploding_head: 在具有平移对称性的系统中，动量 $k$ 是好量子数，哈密顿量在 $k$ 表象下是对角化的

<div class="grid cards" markdown>

-   实空间

    ---

    - 数学：布拉菲格子（正格子）
    - 实验现象：原子的周期性排列（X 衍射实验）

-   倒空间

    ---

    - 数学：倒格子
    - 实验现象：X 射线衍射

</div>


晶体具有平移对称性，空间中任意一点坐标为 $\mathbf{r}$，把晶体移动一个格矢 $\mathbf{R}_l$，$\mathbf{r} + \mathbf{R}_l$ 处的物理环境（各种物理属性）和 $\mathbf{r}$ 处完全一样：

$$
\begin{equation} \tag{5.1} \label{eq:lattice_periodicity}
    F(\mathbf{r} + \mathbf{R}_l) = F(\mathbf{r})
\end{equation}
$$

其中 $F$ 是某种物理量。周期函数可以展开为傅里叶级数：

$$
\begin{equation} \tag{5.2} \label{eq:fourier_expansion}
    F(\mathbf{r}) = \sum_{\mathbf{K}} F_{\mathbf{K}} \mathrm{e}^{\mathrm{i} \mathbf{K} \cdot \mathbf{r}}
\end{equation}
$$

Fourier 系数：

$$
\begin{equation} \tag{5.3} \label{eq:fourier_coeff}
    F_{\mathbf{K}} = \frac{1}{\Omega} \int_{\text{unit cell}} d \mathbf{r} \, F(\mathbf{r}) \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot \mathbf{r}}
\end{equation}
$$

做一次晶格平移：

$$
\begin{equation} \tag{5.4} \label{eq:lattice_translation}
    F(\mathbf{r} + \mathbf{R}_l) = \sum_{\mathbf{K}} F_{\mathbf{K}} \mathrm{e}^{\mathrm{i} \mathbf{K} \cdot (\mathbf{r} + \mathbf{R}_l)} = \sum_{\mathbf{K}} F_{\mathbf{K}} \mathrm{e}^{\mathrm{i} \mathbf{K} \cdot \mathbf{r}} \mathrm{e}^{\mathrm{i} \mathbf{K} \cdot \mathbf{R}_l}
\end{equation}
$$

利用 \eqref{eq:lattice_periodicity}，得到

$$
\begin{equation} \tag{5.5} \label{eq:reciprocal_lattice_condition}
    \mathrm{e}^{\mathrm{i} \mathbf{K} \cdot \mathbf{R}_l} = 1 \implies \mathbf{K} \cdot \mathbf{R}_l = 2 n \pi, \quad n \in \mathbb{Z}
\end{equation}
$$

> 实空间中，格矢 $\mathbf{R}$ 的端点构成晶格；在倒空间中，$\mathbf{K}$ 矢量的端点构成什么？


## 2 倒格子

定义：对于 Bravais 格子中任意格矢 $\mathbf{R}$，满足条件

$$
\mathbf{K} \cdot \mathbf{R} = 2 n \pi, \quad n \in \mathbb{Z}
$$

的所有 $\mathbf{K}$ 矢量端点的集合，构成该 Bravais 格子的**倒格子**（reciprocal lattice）。这些点称为**倒格点**，$\mathbf{K}$ 矢量称为**倒格矢**（reciprocal lattice vector）。

性质：倒格子仍然是一个 Bravais 格子

$$
\mathbf{K} + \mathbf{K}' \in \text{reciprocal lattice}
$$

与实空间的关系：

$$
\text{实空间} \overset{\mathcal{F}}{\longleftrightarrow} \text{倒空间}
$$

### 倒格子基矢

实空间格矢

$$
\mathbf{R} = l_1 \mathbf{a}_1 + l_2 \mathbf{a}_2 + l_3 \mathbf{a}_3 \quad (l_1, l_2, l_3 \in \mathbb{Z})
$$

倒格矢的约束条件

$$
\mathbf{K} \cdot \mathbf{R} = 2 n \pi, \quad n \in \mathbb{Z}
$$

第二种推导：

$$
\begin{equation} \tag{5.6} \label{eq:reciprocal_lattice_def}
    \mathbf{b}_i \cdot \mathbf{a}_j = 2 \pi \delta_{ij}
\end{equation}
$$

所以有正交关系：

$$
\mathbf{b}_1 \perp \mathbf{a}_2, \mathbf{a}_3 \iff \mathbf{b}_1 \parallel (\mathbf{a}_2 \times \mathbf{a}_3)
$$

设 $\mathbf{b}_1 = \eta (\mathbf{a}_2 \times \mathbf{a}_3)$，代入归一化条件

得到

$$
\eta = \frac{2 \pi}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)} = \frac{2 \pi}{\Omega}
$$

其中 $\Omega$ 为实空间原胞体积。

!!! tip "实空间与倒空间的对偶性"
    $$
    \left \{
    \begin{aligned}
         & \mathbf{b}_1 = 2 \pi \frac{\mathbf{a}_2 \times \mathbf{a}_3}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}, \\
         & \mathbf{b}_2 = 2 \pi \frac{\mathbf{a}_3 \times \mathbf{a}_1}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}, \\
         & \mathbf{b}_3 = 2 \pi \frac{\mathbf{a}_1 \times \mathbf{a}_2}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}
    \end{aligned} \right. \iff
    \left \{
    \begin{aligned}
         & \mathbf{a}_1 = 2 \pi \frac{\mathbf{b}_2 \times \mathbf{b}_3}{\mathbf{b}_1 \cdot (\mathbf{b}_2 \times \mathbf{b}_3)}, \\
         & \mathbf{a}_2 = 2 \pi \frac{\mathbf{b}_3 \times \mathbf{b}_1}{\mathbf{b}_1 \cdot (\mathbf{b}_2 \times \mathbf{b}_3)}, \\
         & \mathbf{a}_3 = 2 \pi \frac{\mathbf{b}_1 \times \mathbf{b}_2}{\mathbf{b}_1 \cdot (\mathbf{b}_2 \times \mathbf{b}_3)}
    \end{aligned}
    \right.
    $$

    亦可作为倒格矢的定义。

> 实空间和倒空间是两个不同的数学空间，但是可以用同一个坐标系来描述它们（也就是可以画在一起）

!!! example "求二维倒格子"
    正方形格子
    : 实空间基矢：$\mathbf{a}_1 = a \mathbf{i}, \mathbf{a}_2 = a \mathbf{j}.$



    ---
    长方形格子
    : 实空间基矢：$\mathbf{a}_1 = a \mathbf{i}, \mathbf{a}_2 = b \mathbf{j}.$ 由倒格矢定义 \eqref{eq:reciprocal_lattice_def}，得到 $\mathbf{b}_1 = \frac{2 \pi}{a} \mathbf{i}, \mathbf{b}_2 = \frac{2 \pi}{b} \mathbf{j}.$

    : :point_right: 长边变短，短边变长。但仍为矩形格子。

    ---
    二维斜方格子
    : 实空间基矢：$\mathbf{a}_1 = a \mathbf{i}, \mathbf{a}_2 = \frac{\sqrt{2} b}{2} (\mathbf{i} + \mathbf{j})$. 由倒格矢定义 \eqref{eq:reciprocal_lattice_def}，得到

    $$
    \begin{aligned}
        \mathbf{b}_1 &= 2 \pi \frac{\mathbf{a}_2 \times \mathbf{k}}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{k})} = 2 \pi \frac{\frac{\sqrt{2} b}{2} (\mathbf{i} + \mathbf{j}) \times \mathbf{k}}{\frac{\sqrt{2} a b}{2}} = \frac{2 \pi}{a} (\mathbf{i} - \mathbf{j}) \\
        \mathbf{b}_2 &= 2 \pi \frac{\mathbf{k} \times \mathbf{a}_1}{\mathbf{a}_1 \cdot (\mathbf{k} \times \mathbf{a}_1)} = 2 \pi \frac{\mathbf{k} \times a \mathbf{i}}{\frac{\sqrt{2} a b}{2}} = 2 \pi \frac{\sqrt{2}}{b} (\mathbf{i} + \mathbf{j})
    \end{aligned}
    $$

    仍为斜方格子。

## 3 倒格矢与晶面的几何对应关系

取一组互质整数 $h_1, h_2, h_3$，定义倒格矢 $\mathbf{K}_h$

$$
\begin{equation}
    \mathbf{K}_h = h_1 \mathbf{b}_1 + h_2 \mathbf{b}_2 + h_3 \mathbf{b}_3
\end{equation}
$$

这组互质整数 $h_1, h_2, h_3$ 定义了一个晶面族。是什么样的呢？

### 倒格矢与对应晶面族垂直

下面说明，$\mathbf{K}_h = h_1 \mathbf{b}_1 + h_2 \mathbf{b}_2 + h_3 \mathbf{b}_3$ 与晶面族 $(h_1, h_2, h_3)$ 垂直。

:warning: 注意：倒格矢是相对于{++原胞基矢++} $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ 定义的

$(h_1 h_2 h_3)$ 代表晶面在原胞基矢的截距分别为 $\frac{\mathbf{a}_1}{h_1}, \frac{\mathbf{a}_2}{h_2}, \frac{\mathbf{a}_3}{h_3}$，

### 倒格矢长度与对应晶面族间距成反比

设晶面 $(h_1 h_2 h_3)$ 的面间距为 $d$. 最靠近原点的晶面到原点的距离为截距在面法线方向上的投影：

$$
d = \frac{\mathbf{a}_1}{h_1} \cdot \frac{\mathbf{K}_h}{|\mathbf{K}_h|} = \frac{\mathbf{a}_1 \cdot (h_1 \mathbf{b}_1 + h_2 \mathbf{b}_2 + h_3 \mathbf{b}_3)}{h_1 |\mathbf{K}_h|} = \frac{2 \pi}{|\mathbf{K}_h|}
$$

故

$$
\begin{equation}
    |\mathbf{K}_h| = \frac{2 \pi}{d}
\end{equation}
$$

## 4 典型例子