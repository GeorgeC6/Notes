# 晶体结构的 X 射线衍射

## 6.1 晶体衍射的发现

### 光的衍射

## 6.3 劳厄（von Laue）条件

## 6.4 晶体结构衍射实验观测

Ewald 球构造法

### 实验

#### 劳厄法

劳厄法（连续谱 X 射线，波长为宽带）

连续谱 X 射线与单晶相互作用，在{++入射方向固定++}时，各晶面满足布拉格条件的{++特定波长++}产生衍射，形成**劳厄斑**。

1.  中心斑（$000$）
    对应直射光（未衍射），作为参考原点
2.  斑点位置与晶面方向有关

    **衍射面指数**：$(HKL)$，约化后对应着该晶面族的 Miller 指数 $(hkl)$.

3.  斑点亮度（强度）与结构因子有关
    可用于判断原胞内或晶胞内的原子排布

反推对称性

1.  旋转对称性
    -   四重旋转轴：立方晶系
    -   六重旋转轴：六方晶系

2.  反演对称性


#### 德拜法

德拜法（固定波长、随机取向的多晶样品）

单色 X 射线照射多晶样品，满足布拉格衍射条件的晶面族形成同心圆环

## 6.5 Brillouin 区

用于描述晶体中波矢的基本区域

布里渊区是 Brillouin 在进一步发展 Sommerfeld 的量子电导理论而提出的

- 实空间：用一个晶胞代表整个晶体
- 倒空间：用一个布里渊区代表整个倒空间

!!! warning "注意"
    布里渊区只在“存在（分立）周期势”的情况下才有物理意义。

    1.  没有周期势，如自由电子气
        :point_right: $\mathbf{k}$ 是绝对动量，计算系统能量时必须全部考虑
    2.  考虑周期势，如晶格周期性中的电子，近自由电子气
        :point_right: 只需计算第一布里渊区

以实空间中取 Wigner-Seitz 原胞的方式，在倒空间中将空间划分成一系列区域

### 一维

### 二维

### 从劳厄条件看 Brillouin 区边界

$$
\mathbf{k} - \mathbf{k}_0 = \mathbf{K}_h
$$

不考虑能量损耗，动量无损转移：$|\mathbf{k}| = |\mathbf{k}_0|$. 移项平方得

$$
\begin{equation}
    \mathbf{k}_0 \cdot \frac{\mathbf{K}_h}{2} = \left(\frac{\mathbf{K}_h}{2}\right)^2
\end{equation}
$$

:bulb: 从原点出发到 Brillouin 区边界的波矢满足布拉格衍射条件！$\iff$ 满足最大散射（布拉格条件）的波矢端点所构成的几何轨迹就是 Brillouin 区边界！

:question: 满足衍射条件就一定能看见衍射光斑吗？:arrow_right: 与散射强度有关

## 6.6 散射强度和结构因子

-   晶体 = 晶格 + 基元
-   劳厄条件给出了衍射极大的必要条件，不考虑{++格点的具体物理成分++}
-   基元为晶胞

因此

-   晶胞中原子的具体位置决定了散射的位相
-   每个原子附近的电子密度决定了

### 散射幅度

散射幅度 $\propto$ 电子密度。考虑散射体为有一定密度分布的电子气体。选定原点 $O$，记 $\mathbf{r}$ 处贡献的散射幅度为 $s(\mathbf{r})$.

散射幅度为晶体中所有电子沿某一方向的散射叠加：

$$
\begin{equation}
    F = \int s(\mathbf{r}) \mathrm{e}^{\mathrm{i} (\mathbf{k} - \mathbf{k}_0) \cdot \mathbf{r}} \, d^3 r
\end{equation}
$$

由于电子密度 $n(\mathbf{r})$ 具有平移对称性，$s(\mathbf{r})$ 也应当有平移对称性：

$$
s(\mathbf{r} + \mathbf{R}_l) = s(\mathbf{r})
$$

故

$$
\begin{equation}
    F = \sum_{\mathbf{K}} s(\mathbf{K}) \int_{\text{cell}} \mathrm{e}^{\mathrm{i} [\mathbf{K}- (\mathbf{k} - \mathbf{k}_0)] \cdot \mathbf{r}} \, d^3 r
\end{equation}
$$

由于狄拉克归一性 $\int \mathrm{e}^{\mathrm{i} \mathbf{q} \cdot \mathbf{r}} \, d^3 r \propto \delta(\mathbf{q})$，故有

$$
\mathbf{K} = \mathbf{k} - \mathbf{k}_0
$$

回代，得到 $F = \sum_{\mathbf{K}} s(\mathbf{K}) \Omega$


$$
\begin{aligned}
    S_{\mathbf{K}} &= \sum_{j = 1}^s \int_{\text{cell}} s_j(\mathbf{r} - \mathbf{r}_j) \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot \mathbf{r}} \, d^3 r \\
    &= \sum_{j = 1}^s \int_{\text{cell}} s_j(\mathbf{r} - \mathbf{r}_j) \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot (\mathbf{r} - \mathbf{r}_j)} \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot \mathbf{r}_j} \, d^3 r \\
    &= \sum_{j = 1}^s \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot \mathbf{r}_j} \int_{\text{cell}} s_j(\mathbf{r} - \mathbf{r}_j) \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot (\mathbf{r} - \mathbf{r}_j)} \, d^3 r \\
\end{aligned}
$$


设

$$
\begin{gather}
    S_{\mathbf{K}} = \sum_{j = 1}^s f_j(\mathbf{K}) \mathrm{e}^{-\mathrm{i} \mathbf{K} \cdot \mathbf{r}_j} \\
    \mathbf{r}_j = u_j \mathbf{a} + v_j \mathbf{b} + w_j \mathbf{c} \\[1ex]
    \mathbf{K} = \mathbf{K}_{hkl} = h \mathbf{a}^* + k \mathbf{b}^* + l \mathbf{c}^*
\end{gather}
$$

代入上式得

$$
S_{hkl} = \sum_{j = 1}^s f_j(\mathbf{K}_{hkl}) \mathrm{e}^{-\mathrm{i} 2 \pi (h u_j + k v_j + l w_j)}
$$

散射强度

$$
I = F^2 \propto |S_{hkl}|^2
$$

所以若 $S_{hkl} = 0$，则 $I = 0 \implies$ 结构因子有可能使劳厄条件允许的某些衍射斑点消失！

!!! tip "消光的原因"
    使用 Miller 指数会在正空间漏掉一些面（格点），于是在倒空间中多出了一些倒结点。消光指的是消除这些本就不该存在衍射条件.


### 衍射面指数

#### 判断消光

将衍射面代入结构因子：