# 第七章 定态微扰理论

## 7.1 非简并微扰理论

### 7.1.1 一般公式

对某些势场，假设已经得到了其定态薛定谔方程的解：

$$
\begin{equation} \label{eq:unperturbed-Schrödinger} \tag{7.1.1}
    H^0 \psi_n^0 = E_n^0 \psi_n^0
\end{equation}
$$

以及一组正交归一完备集的本征函数 $\{\psi_n^0\}$. 相当于 0 级微扰。现在，在这个势上加一个微小的扰动，我们希望求出新的本征函数和本征值：

$$
\begin{equation} \label{eq:perturbed-Schrödinger} \tag{7.1.2}
    H \psi_n = E_n \psi_n
\end{equation}
$$

其中

$$
\begin{equation} \label{eq:perturbed-H} \tag{7.1.3}
    H = H^0 + \lambda H'
\end{equation}
$$

相应的波函数和能量可展开为 $\lambda$ 的幂级数：

$$
\begin{equation} \label{eq:perturbed-psi} \tag{7.1.4}
    \psi_n = \psi_n^0 + \lambda \psi_n^1 + \lambda^2 \psi_n^2 + \cdots
\end{equation}
$$

$$
\begin{equation} \label{eq:perturbed-E} \tag{7.1.5}
    E_n = E_n^0 + \lambda E_n^1 + \lambda^2 E_n^2 + \cdots
\end{equation}
$$

$E_n^1$ 是第 $n$ 个本征值的**一阶修正（first-order correction）**，以此类推。将 \eqref{eq:perturbed-H}、\eqref{eq:perturbed-psi} 和 \eqref{eq:perturbed-E} 代入 \eqref{eq:perturbed-Schrödinger}，

$$
(H^0 + \lambda H') (\psi_n^0 + \lambda \psi_n^1 + \lambda^2 \psi_n^2 + \cdots) = (E_n^0 + \lambda E_n^1 + \lambda^2 E_n^2 + \cdots) (\psi_n^0 + \lambda \psi_n^1 + \lambda^2 \psi_n^2 + \cdots)
$$

考虑 0 阶到 2 阶项：

$$
H^0 \psi_n^0 + \lambda (H^0 \psi_n^1 + H' \psi_n^0) + \lambda^2 (H^0 \psi_n^2 + H' \psi_n^1) + \cdots = E_n^0 \psi_n^0 + \lambda (E_n^0 \psi_n^1 + E_n^1 \psi_n^0) + \lambda^2 (E_n^0 \psi_n^2 + E_n^1 \psi_n^1 + E_n^2 \psi_n^0) + \cdots
$$

- 零阶项（$\lambda^0$）：$H^0 \psi_n^0 = E_n^0 \psi_n^0$（即 \eqref{eq:unperturbed-Schrödinger} 式）
- 一阶项（$\lambda^1$）：

$$
\begin{equation} \label{eq:1st-perturbation} \tag{7.1.6}
    H^0 \psi_n^1 + H' \psi_n^0 = E_n^0 \psi_n^1 + E_n^1 \psi_n^0
\end{equation}
$$

- 二阶项（$\lambda^2$）：

$$
\begin{equation} \label{eq:2nd-perturbation} \tag{7.1.7}
    H^0 \psi_n^2 + H' \psi_n^1 = E_n^0 \psi_n^2 + E_n^1 \psi_n^1 + E_n^2 \psi_n^0
\end{equation}
$$

之后就不再用到 $\lambda$ 了，它只是用于标记不同级次的符号。

### 7.1.2 一阶理论

做 \eqref{eq:1st-perturbation} 和 $\psi_n^0$ 的内积，

$$
\braket{\psi_n^0 | H^0 \psi_n^1 + H' \psi_n^0} = \braket{\psi_n^0 | E_n^0 \psi_n^1 + E_n^1 \psi_n^0} = E_n^0 \braket{\psi_n^0 | \psi_n^1} + E_n^1 \braket{\psi_n^0 | \psi_n^0}
$$

而由于 $H^0$ 是厄米算符，所以

$$
\braket{\psi_n^0 | H^0 \psi_n^1} = \braket{H^0 \psi_n^0 | \psi_n^1} = E_n^0 \braket{\psi_n^0 | \psi_n^1}
$$

所以消去了第一项，得到一阶微扰理论最基本的结论：

$$
\begin{equation} \label{eq:1st-energy-correction} \tag{7.1.8}
    \boxed{
        E_n^1 = \braket{\psi_n^0 | H' | \psi_n^0}
    }
\end{equation}
$$

这说明，能量的一阶修正对应于未微扰状态下微扰项的期望值。

!!! example "例题 7.1 常数微扰"
    将无限深方势阱整体抬高一个常数 $V_0$，计算能量的一阶修正。

    ---

    $H' = V_0$，第 $n$ 个状态的能量一阶修正为

    $$
    E_n^1 = \braket{\psi_n^0 | V_0 | \psi_n^0} = V_0 \braket{\psi_n^0 | \psi_n^0} = V_0
    $$

    这是精确解，因为对于常数微扰（不论原势场是什么形式），高阶修正均为零。

式 \eqref{eq:1st-energy-correction} 是能量的一阶修正，下面求波函数的一阶修正。将 \eqref{eq:1st-perturbation} 式改写为

$$
\begin{equation} \label{eq:1st-perturbation-var} \tag{7.1.9}
    (H^0 - E_n^0) \psi_n^1 = - (H' - E_n^1) \psi_n^0
\end{equation}
$$

右侧是已知的非齐次项，为了求解 $\psi_n^1$，将其用完备集 $\{\psi_m^0\}$ 展开：

$$
\begin{equation} \label{eq:1st-psi-expansion} \tag{7.1.10}
    \psi_n^1 = \sum_{m \neq n} c_m^{(n)} \psi_m^0
\end{equation}
$$

取 $m \neq n$ 的原因：如果 $\psi_n^1$ 包含 $\psi_n^0$ 的项，则 \eqref{eq:1st-perturbation-var} 左边为 0（因为 $H^0 \psi_n^0 = E_n^0 \psi_n^0$），可以跳过这一项。





## 7.2 简并微扰理论



## 7.3 氢原子的精细结构

氢原子的哈密顿量（电子动能加上库伦势能）也称为玻尔哈密顿量，其形式为

$$
\begin{equation} \label{eq:Bohr-Hamiltonian} \tag{7.3.1}
    H_{\mathrm{Bohr}} = -\frac{\hbar^2}{2m} \nabla^2 - \frac{e^2}{4 \pi \epsilon_0} \frac{1}{r}
\end{equation}
$$

而这只是最简单的近似。除了将 $m$ 代换为约化质量之外的质心修正外，还有**精细结构（fine structure）**要考虑。产生精细结构的物理机制有两种：

- 相对论修正（relativistic correction）
- 自旋轨道耦合（spin-orbit coupling）

与玻尔能量相比，精细结构是一个很小的微扰，它比玻尔能量小约 $\alpha^2$ 倍，其中

$$
\begin{equation} \label{eq:fine-structure-constant} \tag{7.3.2}
    \alpha = \frac{e^2}{4 \pi \varepsilon_0 \hbar c} \approx \frac{1}{137.036}
\end{equation}
$$


### 7.3.1 相对论修正



### 7.3.2 自旋-轨道耦合




## 7.4 塞曼效应

当原子置于外磁场 $\boldsymbol{B}_{\mathrm{ext}}$ 中时，能级会发生移动，这种现象称为**塞曼效应（Zeeman Effect）**。对于单个电子，微扰[^1]是轨道磁矩 $\boldsymbol{\mu}_L = -\frac{e}{2m} \boldsymbol{L}$ 和自旋磁矩 $\boldsymbol{\mu}_S = -\frac{e}{m} \boldsymbol{S}$ 在外磁场中的势能：

$$
\begin{equation} \label{eq:Zeeman-perturbation} \tag{7.4.1}
    H_Z' = - (\boldsymbol{\mu}_L + \boldsymbol{\mu}_S) \cdot \boldsymbol{B}_{\mathrm{ext}} = \frac{e}{2m} (\boldsymbol{L} + 2 \boldsymbol{S}) \cdot \boldsymbol{B}_{\mathrm{ext}}
\end{equation}
$$

[^1]: 上式精确到 $B_{\mathrm{ext}}$ 的一阶。精确结果在习题 4.72 中给出。

      $$
      H = \frac{p^2}{2m} + q \varphi - \boldsymbol{B}_0 \cdot (\gamma_0 \boldsymbol{L} + \gamma \boldsymbol{S}) + \frac{q^2}{8m} [r^2 B_0^2 - (\boldsymbol{r} \cdot \boldsymbol{B}_0)^2]
      $$

      其中 $\gamma_0 = \frac{q}{2m}$.

      - 线性项 $B_0$ 使磁矩（轨道和自旋）沿磁场排列，体现**顺磁性（paramagnetism）**
      - 二次项 $B_0^2$ 效果相反，体现**抗磁性（diamagnetism）**

塞曼分裂的特性很大程度上取决于外磁场的强弱。外场造成的微扰（塞曼效应）和自旋轨道耦合的内场（精细结构）之间的相对强度决定了不同的情形：

- $B_{\mathrm{ext}} \ll B_{\mathrm{int}}$，弱场，精细结构起主导作用，$H_Z'$ 看作微扰
- $B_{\mathrm{ext}} \gg B_{\mathrm{int}}$，强场，塞曼效应起主导作用，自旋轨道耦合作为微扰
- $B_{\mathrm{ext}} \sim B_{\mathrm{int}}$，中间场，两者都是微扰

### 7.4.1 弱场塞曼效应

当 $B_{\mathrm{ext}} \ll B_{\mathrm{int}}$ 时，精细机构起主导作用，将 $\underset{\eqref{eq:Bohr-Hamiltonian}}{H_{\mathrm{Bohr}}} + H_{\mathrm{fs}}'$