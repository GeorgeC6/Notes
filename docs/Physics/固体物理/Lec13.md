# 第六章 

## 6.1 费米统计和电子热容量

### 费米分布函数

系统处于平衡时，能量为 $E$ 的（本征）态被占据的概率为

$$
f(E) = \frac{1}{e^{(E - E_F)/k_B T} + 1}
$$

> 统计物理中称 $E_F$ 为化学势 $\mu$，但在固体物理中习惯称为费米能级。


$2 \sum_i f(E_i) = N$ 的积分形式



有限温度的费米能级与零温度的费米能级关系为

$$
E_F = E_F^0 \left( 1 - \frac{\pi^2}{6 E_F^0} \left.\frac{d \ln N(E)}{d E}\right|_{E_F^0} (k_B T)^2  \right)
$$

对于 3D 自由电子，$N(E) \propto E^{1/2}$


!!! tip "热容理论的对比"
    电子热容量经典理论值

    $$
    C_V = \frac{3}{2} N k_B
    $$

    也就是每个电子都贡献 $\frac{3}{2} k_B$（三个方向的动能）。
    
    量子理论认为，只有 $E_F^0$ 附近 $k_B T$ 能量范围内的电子才有热容贡献。电子热容量为 $\gamma T$，晶格热容量为 $b T^3$. 极低温时，$C_V \to \gamma T$；较低温时，$C_V \to b T^3$


## 6.2 功函数和接触电势

### 热电子发射和功函数

实验发现，热电子发射现象的一个基本规律是，发射电流随温度按指数规律变化 $I \sim e^{-\frac{w}{k_B T}}$，其中 $w$ 为功函数。

#### 量子理论

金属可用自由电子气描述，$E(\vec{k}) = \frac{\hbar^2 k^2}{2m}$，电子速度

$$
\vec{v}(\vec{k}) = \frac{1}{\hbar} \nabla_{\vec{k}} E(\vec{k}) = \frac{\hbar \vec{k}}{m}
$$

故 $E(\vec{k}) = \frac{1}{2} m v^2$. 为了考虑输运问题，考察在{++实空间单位体积++}**和**{++倒空间 $d^3 \vec{k} = d k_x d k_y d k_z$ 体积++}之内（实空间体积元和倒空间体积元并在一起，即**相空间体积元**）的电子数为 $2 \frac{\textcolor{crimson}{1}}{(2\pi)^3} d^3\vec{k}$. 代入 $\vec{v}(\vec{k})$ 关系，得到在相空间体积元内的电子数为

$$
2 \left(\frac{m}{2\pi \hbar}\right)^3 d^3 \vec{v}
$$

为了输运，电子动能需大于势垒高度 $\chi$，即（假设沿 $x$ 方向）$\frac{1}{2} m v_x^2 \geq \chi$，这等价于 $\frac{1}{2} m v_x^2 - E_F^0 \geq \chi - E_F^0$.



发射电流

$$
\begin{aligned}
    \mathscr{j} &= - 2e \left(\frac{m}{2\pi \hbar}\right)^3 \frac{2 \pi k_B T}{m} e^{\frac{E_F}{k_B T}} \int_{\frac{1}{2} m v_x^2 \geq \chi}^\infty \frac{1}{2} e^{-\frac{1}{2} m v_x^2 / k_B T} d v_x \\
\end{aligned}
$$



#### 经典理论

沿 $x$ 方向的发射电流：

$$
\begin{aligned}
    \mathscr{j} &= \int_{\frac{1}{2} m v_x^2 \geq \chi}^\infty (-e v_x) d n \\
    &= n_0 \left( \frac{m}{2\pi \hbar} \right)^3 \int_{-\infty}^{+\infty} d v_y \int_{-\infty}^{+\infty} d v_z \int_{\frac{1}{2} m v_x^2 \geq \chi}^\infty (-e v_x) e^{-\frac{1}{2} m (v_x^2 + v_y^2 + v_z^2) / k_B T} d v_x \\
\end{aligned}
$$

#### 量子理论与经典理论的比较

-   量子理论：{++费米面附近的电子++}为热发射电子，它们只要做 $W = \chi - E_F$ 的功，即可发射到金属表面外
-   经典理论：{++导带底以上的电子++}均为热发射电子，它们至少要做 $W = \chi$ 的功，才能发射到金属表面外

### 不同金属中电子的平衡和接触电势

两个不同的导体 $A$ 和 $B$ 相接触，或者以导线相连时，就会带电并产生不同的电势 $V_A$ 和 $V_B$

1.  当 $A, B$ 通过直接接触或通过导线相连时，{++电子从化学势高的导体流向化学势低的导体++}，平衡时两导体的化学势相等
2.  （设 $A$ 化学势高）$A$ 导体表面带正电，$B$ 导体表面带负电；$A$ 导体产生静电势 $V_A > 0$，$B$ 导体产生静电势 $V_B < 0$.
    这使得 $A$ 导体中的电子产生附加的静电势能 $-e V_A < 0$，化学势向下移动 $-e V_A$；$B$ 导体中的电子产生附加的静电势能 $-e V_B > 0$，化学势向上移动 $-e V_B$.
3.  平衡时，

    $$
    W_A - (- e V_A) = W_B - (- e V_B)
    $$

    得到电势差

    $$
    V_A - V_B = \frac{W_B - W_A}{e}
    $$

## 6.3 分布函数和 Boltzmann 方程

!!! abstract "Motivation"
    偏离平衡的体系，怎么描述？需要研究非平衡统计分布。

    电子输运（经典）理论的基础：玻尔兹曼方程

### 分布函数

电子在平衡状态时，有 Fermi-Dirac 统计分布律；在非平衡状态时，假设其有类似的分布 $f(\vec{k})$（和波矢有关）。在相空间体积元内的电子数为

$$
2 f(\vec{k}) \frac{1}{(2\pi)^3} d^3 \vec{k}
$$

电子的速度为 $\vec{v}(\vec{k})$，则电流密度为

$$
\left[ (-e) 2 f(\vec{k}) \frac{d^3 \vec{k}}{(2\pi)^3} \right] \vec{v}(\vec{k})
$$

总电流

$$
\vec{\mathscr{j}} = \int (-e) \vec{v}(\vec{k}) \, 2 f(\vec{k}) \frac{d^3 \vec{k}}{(2\pi)^3}
$$

> 由于 $f(\vec{k})$ 未知，电流密度 $\mathscr{j}$ 也不知道。

一般来说，分布函数为 $f(\vec{r}, \vec{k}, t)$. 其随时间的变化

$$
\frac{\partial f}{\partial t} = \left( \frac{\partial f}{\partial t} \right)_{\text{drift}} + \left( \frac{\partial f}{\partial t} \right)_{\text{collision}}
$$

其中 $\left( \frac{\partial f}{\partial t} \right)_{\text{drift}}$ 来自{++外场引起的变化++}，$\left( \frac{\partial f}{\partial t} \right)_{\text{collision}}$ 来自{++晶格振动或杂质对电子的散射引起的变化++}。

#### 外场引起的分布函数的变化

$2 f(\vec{r}, \vec{k}, t)$ 视作相空间 $(\vec{r}, \vec{k})$ 中的流体

对于通常流体，有微分形式的连续性方程

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0
$$

速度散度 $\nabla \cdot \vec{v}$ 代表体积元的单位膨胀率。

现在我们要考虑相空间中的流体。相空间 $(\vec{r}, \vec{k})$ 中流体密度为 $2 f(\vec{r}, \vec{k}, t)$，于是连续性方程为

$$
\frac{\partial}{\partial t} \Big(2 f(\vec{r}, \vec{k}, t)\Big) = - \nabla_{\vec{r}} \cdot \Big[2 f(\vec{r}, \vec{k}, t) \vec{v}(\vec{k})\Big] - \nabla_{\vec{k}} \cdot \Big[2 f(\vec{r}, \vec{k}, t) \dot{\vec{k}}\Big]
$$

1.  $f(\vec{r}, \vec{k}, t)$ 随 $\vec{r}$ 的变化来自系统中存在温度梯度