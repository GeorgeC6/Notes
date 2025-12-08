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

取 $m \neq n$ 的原因：如果 $\psi_n^1$ 包含 $\psi_n^0$ 的项，则 \eqref{eq:1st-perturbation-var} 左边