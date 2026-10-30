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

其中

-   $\left( \frac{\partial f}{\partial t} \right)_{\text{drift}}$ 来自{++外场引起的变化++}
-   $\left( \frac{\partial f}{\partial t} \right)_{\text{collision}}$ 来自{++晶格振动或杂质对电子的散射引起的变化++}。

#### 外场引起的分布函数的变化

$2 f(\vec{r}, \vec{k}, t)$ 视作相空间 $(\vec{r}, \vec{k})$ 中的流体的**密度**，$\vec{v}(\vec{k})$ 是实空间速度，$\dot{\vec{k}}$ 是倒空间速度。

对于通常流体，有微分形式的连续性方程

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0
$$

速度散度 $\nabla \cdot \vec{v}$ 代表体积元的单位膨胀率。

现在我们要考虑相空间中的流体。相空间 $(\vec{r}, \vec{k})$ 中流体密度为 $2 f(\vec{r}, \vec{k}, t)$，于是连续性方程为

$$
\frac{\partial}{\partial t} \Big(2 f(\vec{r}, \vec{k}, t)\Big) = - \nabla_{\vec{r}} \cdot \Big[2 f(\vec{r}, \vec{k}, t) \vec{v}(\vec{k})\Big] - \nabla_{\vec{k}} \cdot \Big[2 f(\vec{r}, \vec{k}, t) \dot{\vec{k}}\Big]
$$

1.  $f(\vec{r}, \vec{k}, t)$ 随 $\vec{r}$ 的变化来自系统中存在**温度梯度**

    $$
    \nabla_{\vec{r}} \cdot \Big[2 f(\vec{r}, \vec{k}, t) \vec{v}(\vec{k})\Big] = 2 \vec{v}(\vec{k}) \cdot \nabla_{\vec{r}} f(\vec{r}, \vec{k}, t) + 2 f(\vec{r}, \vec{k}, t) \nabla_{\vec{r}} \cdot \vec{v}(\vec{k})
    $$

    认为 $\nabla_{\vec{r}} \cdot \vec{v}(\vec{k}) = 0$，则有

2.  $f(\vec{r}, \vec{k}, t)$ 随 $\vec{k}$ 的变化来自系统中存在


综上，分布函数漂移项

$$
\left[\frac{\partial f}{\partial t}\right]_{\text{drift}} = - \vec{v}(\vec{k}) \cdot \nabla_{\vec{r}} f(\vec{r}, \vec{k}, t) - \frac{d \vec{k}}{d t} \cdot \nabla_{\vec{k}} f(\vec{r}, \vec{k}, t)
$$

#### 碰撞



考虑漂移和碰撞，

### 玻尔兹曼方程

定态问题：$\frac{\partial f}{\partial t} = 0$

定态玻尔兹曼方程：

$$
\begin{equation} \tag{6.1} \label{eq:boltzmann-eq-steady}
    - \frac{e}{\hbar} \vec{E} \cdot \nabla_{\vec{k}} f(\vec{k}) = - \frac{f - f_0}{\tau}
\end{equation}
$$

由于微分/积分形式的玻尔兹曼方程难以求解，引入近似：

1.  弛豫时间近似

    $$
    f(\vec{k}, t) = f_0 + (\Delta f)_0 \textcolor{crimson}{e^{-t/\tau(\vec{k})}}
    $$

    即假设达到平衡态的时间是一个指数衰减过程


## 6.4 弛豫时间近似和电导率公式

###

### 欧姆定律的一般公式

将分布函数 $f$ 按电场 $\vec{E}$ 的幂级数展开（$f_i$ 为包含 $\vec{E}$ 的 $i$ 次幂的项），

$$
f = f_0 + f_1 + f_2 + \cdots
$$

由定态玻尔兹曼方程 \eqref{eq:boltzmann-eq-steady}，得到

$$
\vec{E} = \vec{0} \implies f = f_0
$$

故 $f$ 关于 $\vec{E}$ 的零次幂项满足 Fermi-Dirac 分布


考虑等式两边的

弱电场近似下，只需考虑到一阶项，

$$
f_1 = e \tau \vec{E} \cdot \vec{v}(\vec{k}) \left(\frac{\partial f_0}{\partial E}\right)
$$

代入电流密度的式子

$$
\begin{aligned}
    \vec{\mathscr{j}} &= - e \int 2 f_1 \vec{v}(\vec{k}) \frac{d^3 \vec{k}}{(2\pi)^3} = - 2 e^2 \int \tau(\vec{k}) \vec{v}(\vec{k}) \Big[\vec{v}(\vec{k}) \cdot \vec{E}\Big] \frac{\partial f_0}{\partial E} \frac{d^3 \vec{k}}{(2\pi)^3} \\
\end{aligned}
$$

由于 $\left(- \frac{\partial f_0}{\partial E}\right)$ 的性质（低温时，$-\frac{\partial f_0}{\partial E} \approx \delta(E - E_F)$），电流密度主要由 $E_F$ 附近的电子贡献。最终得到欧姆定律的一般公式：

$$
\mathscr{j}_\alpha = \sigma_{\alpha \beta} E_\beta
$$

若系统各向同性，意味着 $\tau(\vec{k}) = \tau(k)$，与 $\vec{k}$ 的方向无关。故张量

$$
\sigma_{\alpha \beta} = - 2 e^2 \int \left(\frac{\hbar}{m^*}\right)^2 k_\alpha k_\beta \tau(k) \left(\frac{\partial f_0}{\partial E}\right) \frac{d^3 \vec{k}}{(2\pi)^3}
$$

除了 $k_\alpha, k_\beta$ 外，其余因子是球对称的，因此

$$
\left \{
\begin{array}{l}
    \sigma_{xx} = \sigma_{yy} = \sigma_{zz} \\
    \sigma_{\alpha \beta} = 0 \quad (\alpha \neq \beta), \text{因为 } k_\alpha, k_\beta \text{ 为奇函数}
\end{array}
\right.
$$

进而

$$
\begin{aligned}
    \sigma &= \frac{1}{3} (\sigma_{xx} + \sigma_{yy} + \sigma_{zz}) \\
    &= - \frac{2 e^2}{3} \int \left(\frac{\hbar}{m^*}\right)^2 k^2 \tau(k) \left(\frac{\partial f_0}{\partial E}\right) \frac{d^3 \vec{k}}{(2\pi)^3} \\
    &= - \frac{e^2}{3 \pi^2} \int \left(\frac{\hbar}{m^*}\right)^2 k^4 \tau(k) \left(\frac{\partial f_0}{\partial E}\right) d k
\end{aligned}
$$


极低温时（近似认为绝对零度），$-\frac{\partial f_0}{\partial E} \approx \delta(E - E_F)$

$$
\sigma = \frac{e^2}{m^*} \frac{k_F^2}{3 \pi^2} \tau(k_F)
$$

其中 $k_F$ 为费米波矢，$E_F = \frac{\hbar^2 k_F^2}{2 m^*}$，对应的等能面为球面。其内包含的电子状态数为

$$
2 \frac{V}{(2 \pi)^3} \times \frac{4}{3} \pi k_F^3 = N \implies \frac{k_F^3}{3 \pi^2} = \frac{N}{V} \equiv n
$$

所以

$$
\sigma = \frac{n e^2 \tau(E_F)}{m^*}
$$

这与经典电子论的电导率公式类似！但是概念不同：

- 弛豫时间 $\tau$ 代替了经典理论中的平均自由时间（自由碰撞时间）
- 有效质量 $m^*$ 代替了经典理论中的电子质量 $m$

## 6.5 各向同性弹性散射下 $\tau$ 的求解

> 靠近费米面的电子离导带较近，近似于自由电子、各向同性
>
> 弹性散射相对来说比较简单，非弹性散射存在非线性

考虑 Boltzmann 方程

$$
- \frac{e}{\hbar} \vec{E} \cdot \nabla_{\vec{k}} f(\vec{k}) = \int \bigg(f(\vec{k}') \Big[1 - f(\vec{k})\Big] \Theta(\vec{k}', \vec{k}) - f(\vec{k}) \Big[1 - f(\vec{k}')\Big] \Theta(\vec{k}, \vec{k}')\bigg) \frac{d^3 \vec{k}'}{(2\pi)^3}
$$

### 弹性散射

弹性散射，$\Theta(\vec{k}, \vec{k}') = \Theta(\vec{k}', \vec{k})$. 此时

$$
- \frac{e}{\hbar} \vec{E} \cdot \nabla_{\vec{k}} f(\vec{k}) = \int \bigg(f(\vec{k}') - f(\vec{k})\bigg) \Theta(\vec{k}', \vec{k}) \frac{d^3 \vec{k}'}{(2\pi)^3}
$$

两边考虑到 $\vec{E}$ 的一阶项，有

$$
\begin{aligned}
    - \frac{e}{\hbar} \vec{E} \cdot \nabla_{\vec{k}} f_0 (\vec{k}) &= \int \Theta(\vec{k}, \vec{k}') \bigg(\Big[f_0(\vec{k}') + f_1(\vec{k}')\Big] - \Big[f_0(\vec{k}) + f_1(\vec{k})\Big]\bigg) \frac{d^3 \vec{k}'}{(2\pi)^3} \\
    &= \int \Theta(\vec{k}, \vec{k}') \Big[f_0(\vec{k}') - f_0(\vec{k})\Big] \frac{d^3 \vec{k}'}{(2\pi)^3} + \int \Theta(\vec{k}, \vec{k}') \Big[f_1(\vec{k}') - f_1(\vec{k})\Big] \frac{d^3 \vec{k}'}{(2\pi)^3}
\end{aligned}
$$

对于弹性散射，当 $E(\vec{k}) \neq E(\vec{k}')$ 时，$\Theta(\vec{k}, \vec{k}') = 0$（能量守恒的要求）。而 $f_0(\vec{k}') = f_0(E(\vec{k}'))$，所以

$$

$$

### 各向同性

各向同性情形下，$E(\vec{k})$ 的值与 $\vec{k}$ 的方向无关，在 $\vec{k}$ 空间等能面为球面：$E(\vec{k}) = \frac{\hbar^2 k^2}{2 m}$. 因此

$$
\nabla_{\vec{k}} E(\vec{k}) = \frac{d E}{d k} \hat{k}
$$

在 $\vec{k}$ 的方向和垂直于 $\vec{k}$ 的方向上分解 $\vec{k}' - \vec{k}$：

$$
\vec{k}' - \vec{k} = (\vec{k}' - \vec{k})_\parallel + (\vec{k}' - \vec{k})_\perp
$$

上式 RHS：

$$
\begin{aligned}
    b - a &= \varphi (E(\vec{k})) \bigg[\vec{k} \int \Theta(\vec{k}, \vec{k}') (\cos \eta - 1) \frac{d^3 \vec{k}'}{(2\pi)^3}\bigg]_{x\text{ 分量}} \\
    &= k_x \varphi(E(\vec{k})) \int \Theta(\vec{k}, \vec{k}') (1 - \cos \eta) \frac{d^3 \vec{k}'}{(2\pi)^3} \\
    &= f_1(\vec{k}) \int \Theta(\vec{k}, \vec{k}') (\cos \eta - 1) \frac{d^3 \vec{k}'}{(2\pi)^3}
\end{aligned}
$$

碰撞项

$$
\left(\frac{\partial f}{\partial t}\right)_{\text{collision}} = b - a = - \frac{f - f_0}{\tau(\vec{k})} \approx - \frac{f_1}{\tau(\vec{k})} = - \frac{k_x \varphi(E(\vec{k}))}{\tau(\vec{k})}
$$

各向同性弹性散射情况下的弛豫时间：

$$
\frac{1}{\tau(\vec{k})} = \int \Theta(\vec{k}, \vec{k}') (1 - \cos \eta) \frac{d^3 \vec{k}'}{(2\pi)^3}
$$

[6.4 节](#64)中已推导出，弛豫时间近似下各向同性情形时的电导

-   小角度散射：$\vec{k}'$ 和 $\vec{k}$ 接近，$\eta$ 小，$\cos \eta \approx 1$，散射对 $1/\tau$ （即电阻）的贡献小
-   大角度散射：$\eta$ 较大，$1 - \cos \eta$ 较大，散射对 $1/\tau$ 的贡献大

> 弹性散射过程中，电子不断改变方向。散射角度小的，积累路程后可以到达目的地；散射角度大的，达不到目的地。

**电阻的微观解释**：{==散射破坏了电子的定向运动==} $\implies$ 电阻！


## 6.6 晶格散射和电导

### 电声子相互作用

设每个原胞只含一个原子。第 $j$ 个原子的坐标：$\vec{x}_j = \vec{R}_j + \vec{u}_j$，其中 $\vec{R}_j$ 是原子在平衡位置的坐标，$\vec{u}_j$ 是原子离开格点的位移。位移 $\vec{u}_j$ 引起了第 $j$ 个原子势能的改变，

$$
\begin{align}
    \delta V^{\text{atom}}(\vec{r}, \vec{x}_j) &= V^{\text{atom}}(\vec{r} - \vec{x}_j) - V^{\text{atom}}(\vec{r} - \vec{R}_j) \\
    &= V^{\text{atom}}(\vec{r} - \vec{R}_j - \vec{u}_j) - V^{\text{atom}}(\vec{r} - \vec{R}_j) \\
    &\approx - \vec{u}_j \cdot \nabla V^{\text{atom}}(\vec{r} - \vec{R}_j) \tag{6.2} \label{eq:delta-V-atom}
\end{align}
$$

之前我们学过，原子的位置可写成各种格波的叠加：

$$
\vec{u}_j = \sum_{\vec{q}} \Big(\vec{U}_\vec{q} e^{i \vec{q} \cdot \vec{R}_j} + \vec{U}_{\vec{q}}^* e^{-i \vec{q} \cdot \vec{R}_j}\Big)
$$

求和只限于 $\vec{q}$ 范围的一半。为了使位移是实数，要求共轭对称性：

$$
\vec{U}_{-\vec{q}} = \vec{U}_\vec{q}^*
$$

由于原子振动，晶体势能的改变为

$$
\begin{align}
    \delta V(\vec{r}) &= \sum_j \delta V^{\text{atom}}(\vec{r}, \vec{x}_j) \xlongequal{\eqref{eq:delta-V-atom}} - \sum_j \vec{u}_j \cdot \nabla V^{\text{atom}}(\vec{r} - \vec{R}_j) \\
    &= - \sum_j \sum_{\vec{q}} \Big(\vec{U}_\vec{q} e^{i \vec{q} \cdot \vec{R}_j} + \vec{U}_{\vec{q}}^* e^{-i \vec{q} \cdot \vec{R}_j}\Big) \cdot \nabla V^{\text{atom}}(\vec{r} - \vec{R}_j) \tag{6.3} \label{eq:delta-V-crystal}
\end{align}
$$

> 注意，格波是含时的，所以上式是含时微扰。微扰导致矩阵的跃迁，由费米黄金法则可知，跃迁矩阵元的平方是正比于跃迁概率的。

同样考虑各向同性的情形，电子态近似用平面波描述。跃迁矩阵元

$$
\begin{aligned}
    M_{\vec{k}', \vec{k}} &= \left\langle \vec{k}' \Big| \delta V(\delta(\vec{r})) \Big| \vec{k} \right\rangle \approxeq \frac{1}{N \Omega} \int e^{-i \vec{k}' \cdot \vec{r}} \delta V(\vec{r}) e^{i \vec{k} \cdot \vec{r}} d^3 \vec{r} \\
    &= \sum_{\vec{q}} \sum_j \frac{1}{N} e^{i (\vec{k} - \vec{k}') \cdot \vec{R}_j} \Big(e^{-i \vec{q} \cdot \vec{R}_j} \vec{U}_\vec{q} \cdot \vec{I} + e^{i \vec{q} \cdot \vec{R}_j} \vec{U}_{-\vec{q}}^* \cdot \vec{I} \Big) \\
    \vec{I} &= \int e^{-i (\vec{k}' - \vec{k}) \cdot (\vec{r} - \vec{R}_j)} \nabla V^{\text{atom}}(\vec{r} - \vec{R}_j) d^3 \vec{r}
\end{aligned}
$$


将 $V^{\text{atom}}(\vec{\xi})$ 做 Fourier 展开

$$
V^{\text{atom}}(\vec{\xi}) = \sum_\vec{p} V_a(\vec{p}) e^{i \vec{p} \cdot \vec{\xi}}
$$

则

$$
\vec{I} = 
$$

实际上，晶格振动的振幅 $\vec{U}_q$ 中包含时间因子 $e^{-i \omega_q t}$，而电子的初态波函数也有时间因子 $e^{-i E(\vec{k}) t / \hbar}$，末态波函数的共轭也有时间因子 $e^{i E(\vec{k}') t / \hbar}$


#### 正常过程（Normal process）

$

#### 倒逆过程（Umklapp process）

$\vec{K}_m \neq \vec{0}$

倒逆过程要求 $|\vec{k}|$ 和 $|\vec{k}'|$ 大，散射角也大

### 电导

单位体积晶体中单位时间内电子跃迁几率（费米黄金定则）：

$$
\Theta(\vec{k}', \vec{k}) = \frac{2 \pi}{\hbar} \Big|M_{\vec{k}', \vec{k}}\Big|^2 = \frac{4 \pi}{\hbar} \Big|\vec{q} \cdot \vec{U}_\vec{q}\Big|^2 \Big|V_a(\vec{q})\Big|^2 \delta(E(\vec{k}') - E(\vec{k}) \pm \hbar \omega_q)
$$

#### 高温情形

$T \ll \Theta_D$

**结论**：高温时，电阻率与温度成正比

#### 低温情形

低温时，$\displaystyle -\frac{\partial f_0}{\partial E} = \delta(E - E_F)$，只需考虑费米面上电子的弛豫时间：$\tau(k_F) = \tau(E_F)$

$$
\frac{1}{\tau(E_F)} = C \sqrt{E_F} 
$$

**结论**：低温时，电阻率与 $T^5$ 成正比

#### 杂质与缺陷对电导的影响

晶体中的杂质与缺陷也会导致电子的散射。杂质与缺陷浓度较小时，其与晶格振动对电子的散射相互独立，总散射几率是两种机制的散射几率之和：

$$
\frac{1}{\tau} = \frac{1}{\tau_{\text{phonon}}} + \frac{1}{\tau_{\text{impurity}}}
$$


!!! info "Kondo 效应"
    在非磁性的简单金属（如 Cu, Ag, Au, Mg, Zn 等）中掺杂微量 3d 壳层不满的磁性杂质（如 Fe, Mn, V, Mo 等），称为**稀磁合金**。

    电阻反常现象（近藤效应）


    :bulb: 磁性杂质除了影响晶体周期势之外，还会影响电子的自旋。

    > 是发现比较早的关联体系

## 6.7 Boltzmann 方程的局限性

### 玻尔兹曼方程的局限性

**前提条件**：已知弛豫时间 $\tau$ 的形式和载流子的能带 $E(\vec{k})$.

$$
\sigma_{\alpha \beta} = -2 e^2 \int \tau(\vec{k}) v_\alpha(\vec{k}) v_\beta(\vec{k}) \left(-\frac{\partial f_0}{\partial E}\right) \frac{d^3 \vec{k}}{(2\pi)^3}
$$

**失效情形**：载流子的能带很难给出 / 没有能带的概念（如非晶态材料），但波函数能给出

:thinking: 能否由波函数直接求出电导率，以获得一个更一般性的公式？

:point_right: Kubo-Greenwood 电导公式

### 电子在电磁场下的跃迁矩阵元

电子在电磁场作用下的哈密顿量

$$
\begin{aligned}
    H &= \frac{1}{2 m} \left(\vec{p} + e \vec{A}\right)^2 - \phi + V(\vec{r}) \\
    \vec{E} &= - \frac{\partial \vec{A}}{\partial t} - \nabla \phi \\
    \vec{B} &= \nabla \times \vec{A}
\end{aligned}
$$

考虑{++无外加静电场++}的情形：$\phi = 0, \; \vec{E} = - \frac{\partial \vec{A}}{\partial t}$. 则

$$
\begin{aligned}
    H \psi &= \frac{1}{2 m} \left(\vec{p} + e \vec{A}\right)^2 \psi + V(\vec{r}) \psi = \frac{1}{2 m} \left(\vec{p} + e \vec{A}\right) \left(\vec{p} + e \vec{A}\right) \psi + V(\vec{r}) \psi \\
    &= \frac{1}{2 m} \left(\vec{p} + e \vec{A}\right) \left(\vec{p} \psi + e \vec{A} \psi \right) + V(\vec{r}) \psi \\
    &= \frac{1}{2m} \Big[ \vec{p}^2 \psi + e \textcolor{tomato}{\vec{p} \cdot (\vec{A} \psi)} + e \textcolor{tomato}{\vec{A} \cdot (\vec{p} \psi)} + e^2 \vec{A}^2 \psi \Big] + V(\vec{r}) \psi \\
    &= \left[\frac{\vec{p}^2}{2 m} + V(\vec{r})\right] \psi + \frac{1}{2 m} \Big[ e \textcolor{tomato}{\vec{p} \cdot (\vec{A} \psi)} + e \textcolor{tomato}{\vec{A} \cdot (\vec{p} \psi)} + e^2 \vec{A}^2 \psi \Big] \\
    (\vec{p} \mapsto -i \hbar \nabla) & = \left[\frac{\vec{p}^2}{2 m} + V(\vec{r})\right] \psi - \frac{i e \hbar}{2 m} \Big[ \textcolor{skyblue}{(\nabla \cdot \vec{A})} \psi + \vec{A} \cdot \nabla \psi \Big] + \frac{e^2}{2 m} \vec{A}^2 \psi
\end{aligned}
$$

取库伦规范 $\nabla \cdot \vec{A} = 0$，则


设 $\vec{k}$ 为电磁场的波矢（不是晶格电子的波矢），$\vec{e}$ 为电场单位矢量。设电场形式为

$$
\vec{E} = - \vec{e} E_0 \sin(\vec{k} \cdot \vec{r} - \omega t)
$$

电子的初态波函数

$$
\psi_i(\vec{r}, t) = \psi_E(\vec{r}) e^{-\frac{i}{\hbar} E t}
$$

电子的末态波函数

$$
\psi_f(\vec{r}, t) = \psi_{E'}(\vec{r}) e^{-\frac{i}{\hbar} E' t}
$$

吸收过程的跃迁矩阵元为

$$
H_{fi}^a = \left\langle \psi_f \Big| H'_a \Big| \psi_i \right\rangle = e^{\frac{i}{\hbar}(E' - E - \hbar \omega) t} \left\langle \psi_{E'}(\vec{r}) \left| -i \left(\frac{e \hbar A_0}{2 m}\right) e^{i \vec{k} \cdot \vec{r}} \vec{e} \cdot \nabla \right| \psi_E(\vec{r}) \right\rangle
$$

### Kubo-Greenwood 电导公式

单位时间内电子从态 $\ket{E}$ 跃迁到态 $\ket{E'}$ 的几率（费米黄金定则）：

$$
W^a(E', E) = \frac{2 \pi}{\hbar} \left(\frac{e \hbar A_0}{2 m}\right)^2 \Big| M_{E', E}^a \Big|^2 \delta(E' - E - \hbar \omega)
$$

其中

$$
M_{E', E}^a = \left\langle \psi_{E'}(\vec{r}) \left| e^{i \vec{k} \cdot \vec{r}} \vec{e} \cdot \nabla \right| \psi_E(\vec{r}) \right\rangle
$$

!!! warning "注意"
    上面假定了态 $\ket{E}$ 有一个电子，且态 $\ket{E'}$ 是空态。实际上，态 $\ket{E}$ 和 $\ket{E'}$ 都可能被电子占据，占据几率分别为 $f(E)$ 和 $f(E')$。$f$ 为 Fermi-Dirac 分布函数。

    $$
    \begin{aligned}
        \Big| M_{E + \hbar \omega, E}^a \Big|^2 &= 
        \Big| M_{E + \hbar \omega, E}^e \Big|^2 &= 
    \end{aligned}
    $$

单位体积、单位时间内电子总共吸收的能量

$$
\begin{aligned}
    \Delta E &= \int \hbar \omega W(E) N(E) d E \\
    
\end{aligned}
$$

按电磁学观点，电子吸收的能量将转换为焦耳热。单位时间、单位体积内电场产生的焦耳能平均值为

$$
\Delta E_J = \frac{1}{T} \int_0^T \sigma(\omega) E_0^2 \sin^2(\omega t) \, \mathrm{d} t = \frac{1}{2} \sigma(\omega) E_0^2
$$

焦耳能等于电子从电场中吸取的能量：$\Delta E_J = \Delta E$，故

$$
\begin{aligned}
    \sigma(\omega) &= 
\end{aligned}
$$


在电子从态 $\ket{E}$ 跃迁到态 $\ket{E'} = \ket{E + \hbar \omega}$ 的同时，也有可能从态 $\ket{E'}$ 跳回态 $\ket{E}$，这对应

$$
H_{fi}^e = \left\langle \psi_f \big| H'_e \big| \psi_i \right\rangle 
$$

当 $\omega \to 0$ 时，

$$
\begin{aligned}
    \sigma(0) &= \int \left(-\frac{\partial f}{\partial E}\right) \sigma_E(0) \\
    \sigma_E(0) &= \frac{2 \pi e^2 \hbar^3}{m^2} \Big| M_{E', E}^a \Big|^2 [N(E)]^2 \\
    M_{E', E}^a &= \left\langle \psi_{E'}(\vec{r}) \left| \vec{e} \cdot \nabla \right| \psi_E(\vec{r}) \right\rangle
\end{aligned}
$$


## 6.8 非晶态金属的电阻率及其温度关系

-   非晶态金属的制备：快速冷却法
-   非晶态金属电子输运研究的状况：处于实验规律的总结和建立理论模型的初步阶段，不少问题尚无统一认识。


## 6.9 金属-绝缘体转变

### Wilson 转变

- 实验发现：非导体材料{++在足够大的压强下可以实现价带与导带的重叠++}，从而呈现金属导电性

### Peierls 转变

{++由于结构的变化++}（如晶格周期 $a \to 2a$），能带发生分裂，电子能带填充由原来的半满变成满带，从而由金属转变为绝缘体

-   $a' = na, \, n = 2, 3, \ldots$：超晶格
-   $a'/a \in \mathbb{Q}$：公度（commensurate）超晶格
-   $a'/a \notin \mathbb{Q}$：非公度（incommensurate）超晶格

### Mott 转变

{++关联效应++}引起的转变

紧束缚模型是单电子模型，忽略了电子之间的相互作用。考虑电子之间的库伦相互作用，得到 Hubbard 模型：

$$
H = H_0 + H_U
$$

- $H_0$：紧束缚形式的哈密顿量（单体问题）
- $H_U$：考虑{++电子在同一格点处的库伦相互作用++}

记 $\Delta$ 为紧束缚模型给出的能带带宽，$U$ 为 Hubbard 模型中电子之间的库伦排斥作用强度。

- $\Delta / U < \frac{2}{\sqrt{3}}$：Mott 绝缘体
- $\Delta / U > \frac{2}{\sqrt{3}}$：Mott 金属

### Anderson 转变

无序体系存在分隔电子的定域态和扩展态的能量边界（mobility edge）