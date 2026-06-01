# 第四章 能带理论

> 参考书籍：《固体物理学》，黄昆

!!! abstract "能带理论研究的问题"
    - 电子在晶体中是怎样运动的？
    - 导体、半导体、绝缘体

## Bloch 定理

晶体中的电子：周期势场，单电子近似

波动方程：

$$
\begin{equation}
    \left[ -\frac{\hbar^2}{2 m} \nabla^2 + V(\vec{r}) \right] \psi(\vec{r}) = E \psi(\vec{r}), \quad V(\vec{r}) = V(\vec{r} + \vec{R}_n)
\end{equation}
$$

其中

$$
\vec{R}_n = n_1 \vec{a}_1 + n_2 \vec{a}_2 + n_3 \vec{a}_3
$$

为任意晶格矢量，$a_1, a_2, a_3$ 晶格基矢。

!!! note "Bloch 定理"
    可以证明（下文有），晶体中的电子波函数满足

    $$
    \begin{equation} \tag{1} \label{eq:bloch-thm}
        \psi(\vec{r} + \vec{R}_n) = e^{i \vec{k} \cdot \vec{R}_n} \psi(\vec{r})
    \end{equation}
    $$

    其中 $\vec{k}$ 为波矢。由此可得推论：电子具有 Bloch 形式的波函数

    $$
    \begin{equation} \tag{2} \label{eq:bloch-wavefunction}
        \psi(\vec{r}) = e^{i \vec{k} \cdot \vec{r}} u(\vec{r})
    \end{equation}
    $$

    $u(\vec{r})$ 具有晶格的周期性：

    $$
    u(\vec{r} + \vec{R}_n) = u(\vec{r})
    $$

    这说明，{==Bloch 波函数 $\psi(\vec{r})$ 是由周期函数 $u(\vec{r})$ 调幅的平面波。==}

    ---

    证明：

    定义平移算符：$T_\alpha f(\vec{r}) = f(\vec{r} + \vec{a}_\alpha)$，其中 $\alpha = 1, 2, 3$，分别对应三个基矢。平移算符有对易性：

    $$
    \begin{aligned}
        T_\alpha T_\beta f(\vec{r}) &= T_\alpha f(\vec{r} + \vec{a}_\beta) = f(\vec{r} + \vec{a}_\alpha + \vec{a}_\beta) \\
        T_\beta T_\alpha f(\vec{r}) &= T_\beta f(\vec{r} + \vec{a}_\alpha) = f(\vec{r} + \vec{a}_\beta + \vec{a}_\alpha) \\[1ex]
        \implies [T_\alpha, T_\beta] &\equiv T_\alpha T_\beta - T_\beta T_\alpha = 0
    \end{aligned}
    $$

    > 推论：平移任意格矢 $\vec{R}_m = m_1 \vec{a}_1 + m_2 \vec{a}_2 + m_3 \vec{a}_3$ 是算符 $T_1$、$T_2$、$T_3$ 分别操作 $m_1$、$m_2$、$m_3$ 次的结果。

    下面说明，平移算符 $T_\alpha$ 与哈密顿量 $H(\vec{r}) = -\frac{\hbar^2}{2m}\nabla^2 + V(\vec{r})$ 对易：

    $$
    \begin{aligned}
        T_\alpha H f(\vec{r}) &= T_\alpha \left[ -\frac{\hbar^2}{2m} \nabla^2 + V(\vec{r}) \right] f(\vec{r}) \\
        &= \left[ -\frac{\hbar^2}{2m} \nabla_{\vec{r} + \vec{a}_\alpha}^2 + V(\vec{r} + \vec{a}_\alpha) \right] f(\vec{r} + \vec{a}_\alpha) \\
        &= \left[ -\frac{\hbar^2}{2m} \nabla^2 + V(\vec{r}) \right] f(\vec{r} + \vec{a}_\alpha) = H T_\alpha f(\vec{r}) \\[1ex]
        \implies [T_\alpha, H] &\equiv T_\alpha H - H T_\alpha = 0
    \end{aligned}
    $$

    这与系统的平移不变性是等价的：

    $$
    T_\alpha H T_\alpha^{-1} = H
    $$

    因为 $T_\alpha$ 与 $H$ 对易，所以它们有共同的本征函数：

    $$
    H \psi = E \psi, \quad T_\alpha \psi = \lambda_\alpha \psi
    $$

    选取周期性边界条件，设 $N_1, N_2, N_3$ 为 $\vec{a}_1, \vec{a}_2, \vec{a}_3$ 方向上的原胞数（$N_1 N_2 N_3 = N$ 为晶体总原胞数），则

    $$
    \psi(\vec{r}) = \psi(\vec{r} + N_\alpha \vec{a}_\alpha)
    $$

    引入平移算符表示，

    $$
    \psi(\vec{r} + N_\alpha \vec{a}_\alpha) = T_\alpha^{N_\alpha} \psi(\vec{r}) = \lambda_\alpha^{N_\alpha} \psi(\vec{r}) = \psi(\vec{r})
    $$

    由此得到

    $$
    \lambda_\alpha^{N_\alpha} = 1 \implies \lambda_\alpha = e^{i 2 \pi \frac{l_\alpha}{N_\alpha}}, \quad l_\alpha = 0, 1, \ldots, N_\alpha - 1
    $$

    引入波矢

    $$
    \vec{k} = \frac{l_1}{N_1} \vec{b}_1 + \frac{l_2}{N_2} \vec{b}_2 + \frac{l_3}{N_3} \vec{b}_3, \quad \vec{a}_i \cdot \vec{b}_j = 2 \pi \delta_{ij}
    $$

    这里 $\vec{b}_1, \vec{b}_2, \vec{b}_3$ 就是倒格子基矢。于是本征值 $\lambda_\alpha = e^{i \vec{k} \cdot \vec{a}_\alpha}$.

    $$
    \begin{aligned}
        \psi(\vec{r} + \vec{R}_m) &= T_1^{m_1} T_2^{m_2} T_3^{m_3} \psi(\vec{r}) = \lambda_1^{m_1} \lambda_2^{m_2} \lambda_3^{m_3} \psi(\vec{r}) \\
        &= e^{i \vec{k} \cdot (m_1 \vec{a}_1 + m_2 \vec{a}_2 + m_3 \vec{a}_3)} \psi(\vec{r}) \\
        &= e^{i \vec{k} \cdot \vec{R}_m} \psi(\vec{r})
    \end{aligned}
    $$

    Bloch 定理得证。:fontawesome-solid-paw:






## ⼀维周期场中电⼦运动的近⾃由电⼦近似

### 模型和微扰计算

零级近似：周期势场用平均值 $\bar{V}$ 代替

$$
\begin{equation}
    \left(-\frac{\hbar^2}{2 m} \nabla^2 + \bar{V} \right) \psi^{(0)} = E^{(0)} \psi^{(0)}
\end{equation}
$$





### 波函数的微扰近似

简并情形，波函数应取为线性叠加

$$
\psi = a \psi_{k'}^{(0)} + b \psi_{k}^{(0)}
$$

哈密顿量

$$
H = \begin{pmatrix}
    E_k^{(0)} & V_{k k'} \\
    V_{k' k} & E_{k'}^{(0)}
\end{pmatrix}
$$



## 三维周期场中电子运动的近自由电子近似


### 布里渊区和能带

当 $E_{\vec{k}}^{(0)} = E_{\vec{k} + \vec{G}_n}^{(0)}$ 时，即

$$
|\vec{k}|^2 = |\vec{k} + \vec{G}_n|^2 \quad \text{或} \quad \vec{G}_n \cdot \left( \vec{k} + \frac{1}{2} \vec{G}_n \right) = 0
$$

非简并微扰理论失效，需用简并微扰理论处理。

!!! note "主要结论"
    1.  方程 $\vec{G}_n \cdot \left( \vec{k} + \frac{1}{2} \vec{G}_n \right) = 0$ 对应 $\vec{k}$ 空间中从原点所作倒格矢 $\vec{G}_n$ 的垂直平分面
    2.  由这些垂直平分面围成的区域为第一（简约）布里渊区，第二布里渊区，第三布里渊区等。
    3.  在布里渊区边界上，简并微扰理论给出能级分裂，即带隙。
    4.  在 $\vec{k}$ 空间不同方向，带宽和带隙可能都不一样
    5.  能带的标记 $E_n(\vec{k})$，波矢 $\vec{k}$ 在第一布里渊区，$n$ 为能带序数
    6.  反演对称性 $E(\vec{k}) = E(-\vec{k})$
        -   倒空间周期性 $E(\vec{k}) = E(\vec{k} + \vec{G}_n)$
        -   倒空间旋转对称性（$\alpha$-晶体的点群操作）$E(\alpha \vec{k}) = E(\vec{k})$


## 赝势

研究晶体时，主要考虑原子中的价电子，它们形成晶体中的共有电子。也就是将原子看作 {++离子实 + 价电子++}。这些价电子只感受离子实半径 $R_c$ 外部的势（也就是不关心电子到离子实里面）。为了节省计算资源（也就是一种近似），电子感受到的离子实势场设为如下的赝势（pseudo-potential）：

$$
V_i(r) = \begin{cases}
    - \frac{Z e^2}{r}, & r > R_c \\
    0, & r \leq R_c
\end{cases}
$$

晶体中的共有电子感受到的（来自各个离子实的）总赝势为

$$
\bar{V}(\vec{r}) = \sum_l V_i(\vec{r} - \vec{R}_l) = \sum_l \left(- \frac{Z e^2}{|\vec{r} - \vec{R}_l|} \right) \xlongequal{\mathcal{F}} \sum_{\vec{G}_n} \bar{V}(\vec{G}_n) e^{i \vec{G}_n \cdot \vec{r}}
$$

-   电子的屏蔽作用
    -   晶体中的共有电子实际为多电子体系，电子-电子之间存在相互作用。单电子近似（平均场近似）时，需要考虑其他电子对该电子的屏蔽作用。
    -   将其他电子看成介质，屏蔽作用可用介电函数 $\varepsilon(\vec{G}_n)$ 来描述：
        
        $$
        \bar{V}(\vec{G}_n) \to \frac{\bar{V}(\vec{G}_n)}{\varepsilon(\vec{G}_n)}
        $$

## 紧束缚近似

**紧束缚（tight-binding）近似**：

1.  电子在一个离子实附近时，该离子实的影响占主导，其它离子实势场的作用看成微扰。
2.  晶体由 $N$ 个离子实组成，在每个离子实处的价电子有相同的能级 $\varepsilon_i$ 和波函数 $\varphi_i(\vec{r} - \vec{R}_m)$，所以要用简并微扰方法。
3.  考虑微扰后，电子的状态是 $N$ 个简并态的线性组合
    
    $$
    \psi(\vec{r}) = \sum_m a_m \varphi_i(\vec{r} - \vec{R}_m)
    $$

### 模型与微扰计算

格点 $\vec{R}_m$ 附近，价电子满足波动方程

$$
\begin{equation} \tag{3} \label{eq:val-electron}
    \left[ -\frac{\hbar^2}{2 m} \nabla^2 + V(\vec{r} - \vec{R}_m) \right] \varphi_i(\vec{r} - \vec{R}_m) = \varepsilon_i \varphi_i(\vec{r} - \vec{R}_m)
\end{equation}
$$

价电子形成共有电子后，感受到的势场为周期势 $U(\vec{r})$. 有电子在单电子近似下满足波动方程

$$
\begin{equation} \tag{4} \label{eq:cond-electron}
    \left[ -\frac{\hbar^2}{2 m} \nabla^2 + U(\vec{r}) \right] \psi(\vec{r}) = E \psi(\vec{r})
\end{equation}
$$

1.  \eqref{eq:val-electron} 为 \eqref{eq:cond-electron} 的零级近似
2.  $U(\vec{r}) - V(\vec{r} - \vec{R}_m)$ 看成微扰
3.  简并微扰近似下的波函数写为

    $$
    \begin{equation} \tag{5} \label{eq:degen-wavefunction}
        \psi(\vec{r}) = \sum_m a_m \varphi_i(\vec{r} - \vec{R}_m)
    \end{equation}
    $$

式 \eqref{eq:degen-wavefunction} 代入 \eqref{eq:cond-electron}，并利用 \eqref{eq:val-electron}，得到

$$
\sum_m a_m \left[ \varepsilon_i + U(\vec{r}) - V(\vec{r} - \vec{R}_m) \right] \varphi_i(\vec{r} - \vec{R}_m) = E \sum_m a_m \varphi_i(\vec{r} - \vec{R}_m)
$$

当



令 $\vec{\xi} = \vec{r} - \vec{R}_m$，即 $\vec{r} = \vec{R}_m + \vec{\xi}, \; U(\vec{r}) = U(\vec{\xi} + \vec{R}_m) = U(\vec{\xi})$，

$$
\sum_m a_m \int \varphi_i^* (\vec{\xi} - (\vec{R}_n - \vec{R}_m)) \Big[ U(\vec{\xi}) - V(\vec{\xi}) \Big] \varphi_i(\vec{\xi}) \, \mathrm{d} \vec{\xi} = (E - \varepsilon_i) a_n
$$

定义

$$
J(\vec{R}_n - \vec{R}_m) = - \int \varphi_i^* (\vec{\xi} - (\vec{R}_n - \vec{R}_m)) \underset{\text{通常}< 0}{\underbrace{\Big[ U(\vec{\xi}) - V(\vec{\xi}) \Big]}} \varphi_i(\vec{\xi}) \, \mathrm{d} \vec{\xi}
$$

-   $\varepsilon_i$：格点能（site energy）
-   $J(\vec{R}_n - \vec{R}_m) \equiv J_{nm}$：交叠积分（hopping integral）

$$
\sum_m a_m J_{nm} = (E - \varepsilon_i) a_n
$$

结合 Bloch 定理 \eqref{eq:bloch-thm}，

$$
\begin{aligned}
    \psi(\vec{r}) &= \sum_m a_m \varphi_i(\vec{r} - \vec{R}_m) = \sum_m a_m \varphi_i(\vec{\xi} - (\vec{R}_m - \vec{R}_n)) \\
\end{aligned}
$$


本征值

$$
\begin{aligned}
    E(\vec{k}) &= \varepsilon_i - \sum_m J_{nm} e^{i \vec{k} \cdot (\vec{R}_m - \vec{R}_n)} \\
    &= \varepsilon_i - \sum_s J(\vec{R}_s) e^{- i \vec{k} \cdot \vec{R}_s}, \quad \vec{R}_s = \vec{R}_n - \vec{R}_m
\end{aligned}
$$

本征函数：各离子实波函数的{++ Bloch 和 ++}：

$$
\begin{aligned}
    \psi_k(\vec{r}) &= \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_i(\vec{r} - \vec{R}_m) \\
    &= e^{i \vec{k} \cdot \vec{r}} \left[ \frac{1}{\sqrt{N}} \sum_m e^{- i \vec{k} \cdot (\vec{r} - \vec{R}_m)} \varphi_i(\vec{r} - \vec{R}_m) \right] \\
    & \equiv e^{i \vec{k} \cdot \vec{r}} u(\vec{r})
\end{aligned}
$$

只考虑最近邻项，

-   $\vec{R}_s = 0$

    $$
    \quad J_0 \equiv J(\vec{0}) = - \int \Big[ U(\vec{\xi}) - V(\vec{\xi}) \Big] \Big|\varphi_i(\vec{\xi}) \Big|^2 \, \mathrm{d} \vec{\xi}
    $$

-   一个间隔

!!! example "例1：简单立方晶格中由原子 $s$ 态 $\varphi_s(\vec{r})$ 形成的能带"
    对于 SC 晶格，$(0,0,0)$ 有 6 个近邻格点：

    $$
    \begin{array}{c}
        (a, 0, 0), & (0, a, 0), & (0, 0, a), \\
        (-a, 0, 0), & (0, -a, 0), & (0, 0, -a)
    \end{array}
    $$

    1.  $s$ 态波函数 $\varphi_s(\vec{r})$ 是球对称的，交叠积分 $J(\vec{R}_s)$ 只与 $|\vec{R}_s|$ 有关，所以最近邻项 $J(\vec{R}_s) = J_1$.
    2.  $s$ 态波函数为偶宇称，$\varphi_s(-\vec{r}) = \varphi_s(\vec{r}) \implies J_1 > 0.$

        $$
        E(\vec{k}) = \varepsilon_s - J_0 - 2 J_1 \left[ \cos(k_x a) + \cos(k_y a) + \cos(k_z a) \right]
        $$
    
    在布里渊区中，

    -   $\Gamma$ 点：$\vec{k} = (0, 0, 0), \quad E^{\Gamma} = \varepsilon_s - J_0 - 6 J_1$（带底）
    -   $X$ 点：$\vec{k} = \left( \frac{\pi}{a}, 0, 0 \right), \quad E^X = \varepsilon_s - J_0 - 2 J_1$
    -   $M$ 点：$\vec{k} = \left( \frac{\pi}{a}, \frac{\pi}{a}, 0 \right), \quad E^M = \varepsilon_s - J_0 + 2 J_1$
    -   $R$ 点：$\vec{k} = \left( \frac{\pi}{a}, \frac{\pi}{a}, \frac{\pi}{a} \right), \quad E^R = \varepsilon_s - J_0 + 6 J_1$（带顶）

!!! example "例2：简单立方晶格中由原子 $p$ 态形成的能带"
    三个 $p$ 轨道：

    $$
    \varphi_{p_x}(\vec{r}) = x f(r), \quad \varphi_{p_y}(\vec{r}) = y f(r), \quad \varphi_{p_z}(\vec{r}) = z f(r)
    $$

    原子的 $p$ 态是三重简并的，但三个 $p$ 轨道各自形成一个能带，其波函数为各自原子轨道的 Bloch 和：

    $$
    \begin{aligned}
        \varphi_{\vec{k}}^{p_x} &= \frac{1}{\sqrt{N}} \sum_n e^{i \vec{k} \cdot \vec{R}_n} \varphi_{p_x}(\vec{r} - \vec{R}_n) \\
        \varphi_{\vec{k}}^{p_y} &= \frac{1}{\sqrt{N}} \sum_n e^{i \vec{k} \cdot \vec{R}_n} \varphi_{p_y}(\vec{r} - \vec{R}_n) \\
        \varphi_{\vec{k}}^{p_z} &= \frac{1}{\sqrt{N}} \sum_n e^{i \vec{k} \cdot \vec{R}_n} \varphi_{p_z}(\vec{r} - \vec{R}_n)
    \end{aligned}
    $$

    交叠积分

    $$
    J(\vec{R}_s) = - \int \varphi_i^* (\vec{\xi} - \vec{R}_s) \Big[ U(\vec{\xi}) - V(\vec{\xi}) \Big] \varphi_i(\vec{\xi}) \, \mathrm{d} \vec{\xi}
    $$

    以 $\varphi_{p_x}$ 为例，六个近邻的交叠积分中，沿 $x$ 轴（即 $(0,0,0)$ 到 $(\pm a, 0, 0)$）的交叠积分大，记为 $J_1$；其它四个交叠积分较小，但彼此相等，记为 $J_2$.

    $$
    E^{p_x}(\vec{k}) = \varepsilon_p - J_0 - 2 J_1 \cos(k_x a) - 2 J_2 [ \cos(k_y a) + \cos(k_z a) ]
    $$

    因为 $p$ 态是奇宇称的，哑铃状，对于 $\varphi_{p_x}$，在 $x$ 轴方向上靠得近的两瓣哑铃异号，所以 $J_1 < 0$；在 $y,z$ 轴方向同号，所以 $J_2 > 0$.

### 原子能级与能带的对应

1.  简单情形：一个原子能级对应一个能带
    对内层电子，能带较窄，往往有这种对应关系。
2.  复杂情形：
    $sp^3$ 杂化

$$
\begin{aligned}
    \psi_{\vec{k}}^s &= \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_s(\vec{r} - \vec{R}_m) \\
    \psi_{\vec{k}}^{p_x} &= \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_{p_x}(\vec{r} - \vec{R}_m) \\
    \psi_{\vec{k}}^{p_y} &= \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_{p_y}(\vec{r} - \vec{R}_m) \\
    \psi_{\vec{k}}^{p_z} &= \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_{p_z}(\vec{r} - \vec{R}_m)
\end{aligned}
$$

能带中的电子态取成这四个 Bloch 和的线性组合

> Bloch 和与波矢 $\vec{k}$ 有关，所以下标有 $\vec{k}$. 但后面又说电子态和波矢 $k$ 没关系
>
> 书上的讲法不太清楚

$$
\varphi_i(\vec{r}) = a_1 \varphi_s(\vec{r}) + a_2 \varphi_{p_x}(\vec{r}) + a_3 \varphi_{p_y}(\vec{r}) + a_4 \varphi_{p_z}(\vec{r}), \quad i = 1, 2, 3, 4
$$

$$
\psi_i(\vec{r}) = \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_i(\vec{r} - \vec{R}_m)
$$

3.  复式格子

### Wannier 函数

紧束缚近似中，能带中的电子波函数为原子（离子实）波函数的 Bloch 和：

$$
\psi_k^{(i)}(\vec{r}) = \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_i(\vec{r} - \vec{R}_m)
$$


假设波函数能严格求解

由波函数 $\psi_{i, \vec{k}}(\vec{r})$ 的正交性，容易证明

$$
\int W_i^*(\vec{r} - \vec{R}_n) W_i(\vec{r} - \vec{R}_m) \, \mathrm{d} \vec{r} = \delta_{nm}
$$


!!! note "推论"
    1.  Bloch 波函数（晶体中电子波函数，即能带中的波函数）的集合 $\{ \psi_{i, \vec{k}}(\vec{r}) \}$ 与 Wannier 函数的集合 $\{ W_i(\vec{r} - \vec{R}_m) \}$，
        -   是两组完备的正交函数系
        -   由一个幺正矩阵联系
    2.  Wannier 函是格点处的**定域化函数**（localized function）
        当原子间距较大时，可近似地用原子（离子实）的波函数代替 Wannier 函数：

        $$
        \begin{aligned}
            \psi_{i, \vec{k}}(\vec{r}) &= \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} W_i(\vec{r} - \vec{R}_m) \\
            \implies \psi_{i, \vec{k}}(\vec{r}) &\approx \frac{1}{\sqrt{N}} \sum_m e^{i \vec{k} \cdot \vec{R}_m} \varphi_i(\vec{r} - \vec{R}_m)
        \end{aligned}
        $$

## 能态密度和费米面

能态密度

$$
N(E) = \lim_{\Delta E \to 0} \frac{\Delta Z}{\Delta E}
$$

其中 $\Delta Z$ 为能量在 $E \sim E + \Delta E$ 之间的能态数目。而状态在 $\vec{k}$ 空间是均匀分布的，密度为 $\frac{V}{(2\pi)^3}$. 因此

$$
\Delta Z = \frac{V}{(2\pi)^3} \int_{\text{等能面}} \, \mathrm{d} S \, \mathrm{d} k_\perp
$$

其中 $\mathrm{d} S$ 是等能面上的面积元，$\mathrm{d} k_\perp$ 是垂直于等能面的波矢间隔。由方向导数

$$
\mathrm{d} k_\perp \, \Big|\nabla_{\vec{k}} E \Big| = \mathrm{d} E
$$

上式化为

$$
\Delta Z = \frac{V}{(2\pi)^3} \int_{\text{等能面}} \frac{\mathrm{d} S}{|\nabla_{\vec{k}} E|} \, \Delta E
$$

因此能态密度为（不考虑自旋）

$$
N(E) = \frac{V}{(2\pi)^3} \int_{\text{等能面}} \frac{\mathrm{d} S}{|\nabla_{\vec{k}} E|}
$$

考虑自旋的话乘以 2.

!!! example "例1：自由电子的能态密度"
    $$
    E(\vec{k}) = \frac{\hbar^2 k^2}{2 m}
    $$

    -   3D 情形

        等能面为球面，方向导数沿径向

        $$
        \Big|\nabla_{\vec{k}} E \Big| = \left| \frac{d E}{d k} \right| = \frac{\hbar^2 k}{m}
        $$

        能态密度（考虑自旋，下同）

        $$
        N(E) = \frac{V}{4 \pi^3} \int_{\text{等能球面}} \frac{d s}{\frac{\hbar^2 k}{m}} = \frac{V}{4 \pi^3} \frac{m}{\hbar^2 k} 4 \pi k^2 \textcolor{crimson}{\propto \sqrt{E}}
        $$

    -   2D 情形

        等能面为圆，方向导数沿径向

        $$
        \Big|\nabla_{\vec{k}} E \Big| = \left| \frac{d E}{d k} \right| = \frac{\hbar^2 k}{m}
        $$

        能态密度

        $$
        N(E) = \frac{S}{2 \pi^2} \int_{\text{等能圆}} \frac{d s}{\frac{\hbar^2 k}{m}} = \frac{S}{4 \pi^2} \frac{m}{\hbar^2 k} 2 \pi k \textcolor{crimson}{= \text{const.}}
        $$

    -   1D 情形

### 费米面




1.  绝缘体和半导体：价带填满，导带为空带
2.  导体：导带被部分填充