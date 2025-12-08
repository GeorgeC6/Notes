# 第五章 全同粒子

## 5.1 双粒子体系

双粒子体系的状态是粒子 1 的坐标 $\boldsymbol{r}_1$、粒子 2 的坐标 $\boldsymbol{r}_2$ 和时间的函数：$\Psi(\boldsymbol{r}_1, \boldsymbol{r}_2, t)$.

整个体系的哈密顿量为

$$
\hat{H} = -\frac{\hbar^2}{2m_1} \nabla_1^2 - \frac{\hbar^2}{2m_2} \nabla_2^2 + V(\boldsymbol{r}_1, \boldsymbol{r}_2, t)
$$

### 5.1.1 玻色子与费米子

假设粒子 1 处于单粒子态 $\psi_a(\boldsymbol{r})$，粒子 2 处于单粒子态 $\psi_b(\boldsymbol{r})$，则双粒子体系的波函数为（由统计诠释，就是两者简单的乘积）

$$
\psi(\boldsymbol{r}_1, \boldsymbol{r}_2) = \psi_a(\boldsymbol{r}_1) \psi_b(\boldsymbol{r}_2)
$$

这样表示的前提是，两个粒子可分辨，不然这么分开写没有任何意义。由多年的经验总结，不可分辨粒子的波函数有两种不同的构造方法

$$
\begin{equation} \label{eq:psi-boson-fermion} \tag{5.1.1}
    \psi_{\pm}(\boldsymbol{r}_1, \boldsymbol{r}_2) = A[\psi_a(\boldsymbol{r}_1) \psi_b(\boldsymbol{r}_2) \pm \psi_b(\boldsymbol{r}_1) \psi_a(\boldsymbol{r}_2)]
\end{equation}
$$

- $+$ 号：**玻色子（Bosons）**，所有自旋为整数的粒子均为玻色子
- $-$ 号：**费米子（Fermions）**，所有自旋为半整数的粒子均为费米子

!!! tip "泡利不相容原理（Pauli Exclusion Principle）"
    对于两个相同的费米子，即 $\psi_a = \psi_b$，则由式 \eqref{eq:psi-boson-fermion} 可知

    $$
    \psi_{-}(\boldsymbol{r}_1, \boldsymbol{r}_2) = 0
    $$

    波函数不存在，即两个相同的费米子不能处于同一量子态[^1]。

    [^1]: 这里还没有考虑自旋。

考虑交换算符（exchange operator）

$$
\hat{\mathcal{P}} f(\boldsymbol{r}_1, \boldsymbol{r}_2) = f(\boldsymbol{r}_2, \boldsymbol{r}_1)
$$

再作用一次

$$
\hat{\mathcal{P}}^2 f(\boldsymbol{r}_1, \boldsymbol{r}_2) = f(\boldsymbol{r}_1, \boldsymbol{r}_2)
$$

故 $\hat{\mathcal{P}}$ 的本征值为 $\pm 1$。

$$
\hat{\mathcal{P}} \psi(\boldsymbol{r}_1, \boldsymbol{r}_2) = \pm \psi(\boldsymbol{r}_1, \boldsymbol{r}_2) = \psi(\boldsymbol{r}_2, \boldsymbol{r}_1)
$$

对应式 \eqref{eq:psi-boson-fermion} 可知：

- 玻色子为 $\hat{\mathcal{P}}$ 的本征值为 $+1$ 的本征态，是交换对称的
- 费米子为 $\hat{\mathcal{P}}$ 的本征值为 $-1$ 的本征态，是交换反对称的

对于两个全同粒子，显然 $m_1 = m_2, \, V(\boldsymbol{r}_1, \boldsymbol{r}_2, t) = V(\boldsymbol{r}_2, \boldsymbol{r}_1, t)$. 因此哈密顿量与交换算符对易

$$
[\hat{\mathcal{P}}, \hat{H}] = 0
$$

且根据 Ehrenfest 定理，

$$
\frac{\mathrm{d} \braket{\hat{\mathcal{P}}}}{\mathrm{d} t} = 0.
$$

!!! example "例题 5.1"


### 5.1.2 交换力

交换力（exchange force）实际上不是一种“力”（并不出现在哈密顿量中），而是对称性要求引起的纯几何结果，是一种纯粹的量子效应，在经典力学中找不到对应。

假设粒子 1 处于 $\psi_a(x)$ 态，另一个粒子处于 $\psi_b(x)$ 态，这两个态正交归一。{++如果两个粒子是可分辨的++}，则总的波函数为

$$
\begin{equation} \label{eq:psi-distinguishable} \tag{5.1.2}
    \psi(x_1, x_2) = \psi_a(x_1) \psi_b(x_2)
\end{equation}
$$

{++如果它们是全同粒子++}，将 \eqref{eq:psi-boson-fermion} 归一化可以得到，全同玻色子满足

$$
\begin{equation} \label{eq:psi-boson} \tag{5.1.3}
    \psi_+(x_1, x_2) = \frac{1}{\sqrt{2}} [\psi_a(x_1) \psi_b(x_2) + \psi_b(x_1) \psi_a(x_2)]
\end{equation}
$$

全同费米子满足

$$
\begin{equation} \label{eq:psi-fermion} \tag{5.1.4}
    \psi_-(x_1, x_2) = \frac{1}{\sqrt{2}} [\psi_a(x_1) \psi_b(x_2) - \psi_b(x_1) \psi_a(x_2)]
\end{equation}
$$



## 5.2 原子

### 5.2.1 氦原子


### 5.2.2 元素周期表

由于历史原因，$\ell$ 的不同取值有着不同的名字：

- $\ell = 0$：$s$



!!! note "洪德定则（Hund's Rules）"
    习惯用

    $$
    ^{2S+1}L_J
    $$

    来表示原子态，其中 $S, J$ 为数字，$L$ 为字母。

    1. 洪德第一定则：$S$ 取最大值
    2. 洪德第二定则：在 $S$ 确定后，$L$ 取最大值
    3. 洪德第三定则：对于半满或少于半满的壳层，$J = |L - S|$；对于多于半满的壳层，$J = L + S$.


!!! info "能级分裂的来源"
    - $S$ 不同的能级分裂：来自于与自旋取向相关的交换效应
    - $L$ 不同的能级分裂：来自于各电子不同分布造成电子间不同的库伦斥力

!!! example "前几个元素的基态电子组态"
    碳原子基态：$(1s)^2(2s)^2(2p)^2$

    - 总自旋 $S$：$\textcolor{red}{1}, 0$（$s$ 电子禁锢在单态，$2p$ 电子可成三重态或单态）
    - 总轨道角动量 $L$：$2, \textcolor{red}{1}, 0$（$L$ 不能取 $2$）
    - 总角动量 $J$：$3, 2, 1, \textcolor{red}{0}$（小于半满）

    故碳原子基态为 $^3P_0.$

    ---

    氮原子基态：$(1s)^2(2s)^2(2p)^3$

    - 总自旋 $S$：$\textcolor{red}{\frac{3}{2}}, \frac{1}{2}$
    - 总轨道角动量 $L$：$\textcolor{red}{0}$
    - 总角动量 $J$：$\textcolor{red}{\frac{3}{2}}$
    
    故氮原子基态为 $^4S_{\frac{3}{2}}.$

    ---

    氧原子基态：$(1s)^2(2s)^2(2p)^4$（$(2p)^2$ 的互补态）

    - 总自旋 $S$：$1$
    - 总轨道角动量 $L$：$1$
    - 总角动量 $J$：$\textcolor{red}{2}, 1, 0$（大于半满）

    故氧原子基态为 $^3P_2.$

## 5.3 固体

原子最外层价电子所受的束缚较弱，可以脱离原子，从而受到整个晶格组成的势场作用。本节讨论两个简单模型：

- **索末菲“电子气”理论**：忽略一切势场（除了约束边界），将流动的电子视作盒子中的自由电子（类似三维无限深方势阱）
- **布洛赫理论**：考虑周期性势场（规则排列的带正电原子核对电子的吸引，但仍然忽略电子间的相互作用）

### 5.3.1 自由电子气

电子束缚在边长为 $l_x, \, l_y, \, l_z$ 的长方体盒子中，不受任何其他力的作用：

$$
V(x, y, z) = \begin{cases}
    0, & 0 < x < l_x, \, 0 < y < l_y, \, 0 < z < l_z \\
    \infty, & \text{其他}
\end{cases}
$$

定态薛定谔方程为

$$
-\frac{\hbar^2}{2m} \nabla^2 \psi = E \psi
$$

采用分离变量法：$\psi(x, y, z) = X(x) \, Y(y) \, Z(z)$，得到

$$
-\frac{\hbar^2}{2m} \left( \frac{1}{X} \frac{\mathrm{d}^2 X}{\mathrm{d} x^2} + \frac{1}{Y} \frac{\mathrm{d}^2 Y}{\mathrm{d} y^2} + \frac{1}{Z} \frac{\mathrm{d}^2 Z}{\mathrm{d} z^2} \right) = E
$$

即

$$
-\frac{\hbar^2}{2m} \frac{\mathrm{d}^2 X}{\mathrm{d} x^2} = E_x X, \quad -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2 Y}{\mathrm{d} y^2} = E_y Y, \quad -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2 Z}{\mathrm{d} z^2} = E_z Z
$$









### 5.3.2 能带结构

!!! note "布洛赫定理（Bloch's Theorem）"
    对于周期性势场

    $$
    \begin{equation}
        V(x + a) = V(x)
    \end{equation}
    $$

    薛定谔方程的解满足

    $$
    \begin{equation}
        \psi(x + a) = e^{\mathrm{i} k a} \psi(x)
    \end{equation}
    $$

    其中 $k$ 为“适当”的常数。可以发现，波函数本身并不是周期的，而概率幅度 $|\psi(x)|^2$ 是周期的：

    $$
    |\psi(x + a)|^2 = |\psi(x)|^2
    $$

    ---

    ***证明：*** 定义位移算符 $\hat{D}$[^2]：

    [^2]: 也有写成 $$\hat{T}(a) f(x) = f(x - a)$$ 的形式，称作平移算符，在下一章有更深入的讨论。

    $$
    \begin{equation}
        \hat{D} f(x) = f(x + a)
    \end{equation}
    $$

    将 $\hat{D}$ 作用在哈密顿量上：

    $$
    \begin{equation}
        \begin{aligned}
            \hat{D} \hat{H} \, \psi(x) &= \hat{D} \left[ -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d} x^2} + V(x) \right] \psi(x) \\
            &= \left[ -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d} x^2} + V(x + a) \right] \psi(x + a) \\
            &= \left[ -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d} x^2} + V(x) \right] \hat{D} \, \psi(x) \\
            &= \hat{H} \hat{D} \, \psi(x)
        \end{aligned}
    \end{equation}
    $$

    因此位移算符与哈密顿算符对易：

    $$
    \begin{equation}
        [\hat{D}, \hat{H}] = 0
    \end{equation}
    $$

    故 $\hat{D}$ 和 $\hat{H}$ 有共同的本征函数。设 $\psi(x)$ 是 $\hat{H}$ 的本征函数，