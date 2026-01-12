# 第八章 变分原理

> 计算材料的能带：DFT，与变分原理息息相关

对任意归一化函数（即使它可能是不正确的）$\psi$，都有

$$
\begin{equation} \label{eq:variational-principle} \tag{8.1}
    E_{\text{gs}} \leq \braket{\psi|H|\psi} \equiv \braket{H}
\end{equation}
$$

!!! quote ""
    **证明：** 将 $\psi$ 展开为 $H$ 的本征函数 $\{\psi_n\}$ （未知）的线性组合，

    $$
    \psi = \sum_n c_n \psi_n , \quad H \psi_n = E_n \psi_n
    $$

    因为 $\psi$ 是归一化的，所以

    $$
    \begin{aligned}
        1 &= \braket{\psi | \psi} = \braket{\sum_m c_m \psi_m | \sum_n c_n \psi_n} = \sum_m \sum_n c_m^* c_n \braket{\psi_m | \psi_n} = \sum_n |c_n|^2 \\
        \braket{H} &= \braket{\sum_m c_m \psi_m | H | \sum_n c_n \psi_n} = \sum_m \sum_n c_m^* c_n E_n \braket{\psi_m | \psi_n} = \sum_n |c_n|^2 E_n
    \end{aligned}
    $$

    而基态能量是最小的本征值，故 $E_{\text{gs}} \leq E_n$，所以

    $$
    \braket{H} \geq \sum_n |c_n|^2 E_{\text{gs}} = E_{\text{gs}} \sum_n |c_n|^2 = E_{\text{gs}}
    $$

!!! example "例题 8.1 一维谐振子"
    一维谐振子的基态能量：

    $$
    \hat{H} = -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d} x^2} + \frac{1}{2} m \omega^2 x^2
    $$

    我们已经知道基态能量为 $E_{\text{gs}} = \frac{1}{2} \hbar \omega$. 选择高斯函数作为试探波函数：

    $$
    \psi(x) = A \mathrm{e}^{-b x^2}
    $$

    归一化条件 $\int_{-\infty}^{+\infty} |\psi(x)|^2 \, \mathrm{d} x = 1$ 给出 $A = \left(\frac{2b}{\pi}\right)^{1/4}.$

    $$
    \begin{aligned}
        \braket{H} &= - \frac{\hbar^2}{2m} |A|^2 \int_{-\infty}^{+\infty} \mathrm{e}^{-b x^2} \frac{\mathrm{d}^2}{\mathrm{d} x^2} (\mathrm{e}^{-b x^2}) \, \mathrm{d} x + \frac{1}{2} m \omega^2 |A|^2 \int_{-\infty}^{+\infty} x^2 \mathrm{e}^{-2b x^2} \, \mathrm{d} x \\
        &= \frac{\hbar^2 b}{2m} + \frac{m \omega^2}{8b}
    \end{aligned}
    $$

    为了尽可能地接近基态能量，求 $\braket{H}$ 的最小值：

    $$
    \frac{\mathrm{d} \braket{H}}{\mathrm{d} b} = \frac{\hbar^2}{2m} - \frac{m \omega^2}{8 b^2} = 0 \implies b = \frac{m \omega}{2 \hbar}
    $$

    回代得到

    $$
    \braket{H}_{\min} = \frac{1}{2} \hbar \omega.
    $$

    恰好是基态能量。因为谐振子基态波函数本身就是高斯函数。

!!! example "例题 8.2 $\delta$ 函数势"
    处于 $\delta$ 函数势阱中的粒子基态能量：

    $$
    H = -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d} x^2} - \alpha \delta(x)
    $$

    已知精确解为 $E_{\text{gs}} = -\frac{m \alpha^2}{2 \hbar^2}$. 还是采用高斯函数作为试探波函数（注意到高斯函数与精确解的指数衰减形式在形状上是相似的）：

    $$
    \begin{aligned}
        \braket{H} &= \frac{\hbar^2 b}{2m} \\
        \braket{V} &= -\alpha |A|^2 \int_{-\infty}^{+\infty} \mathrm{e}^{-b x^2} \delta(x) \, \mathrm{d} x = -\alpha |A|^2 = -\alpha \sqrt{\frac{2b}{\pi}} \\
        \implies \braket{H} &= \frac{\hbar^2 b}{2m} - \alpha \sqrt{\frac{2b}{\pi}}
    \end{aligned}
    $$

    求 $\braket{H}$ 的最小值：

    $$
    \frac{\mathrm{d} \braket{H}}{\mathrm{d} b} = \frac{\hbar^2}{2m} - \alpha \sqrt{\frac{1}{2 \pi b}} = 0 \implies b = \frac{2 m^2 \alpha^2}{\pi \hbar^4}
    $$

    所以

    $$
    \braket{H}_{\min} = -\frac{m \alpha^2}{\pi \hbar^2} > E_{\text{gs}}
    $$

## 8.2 氦原子基态

$$
\begin{equation}
    \hat{H} = -\frac{\hbar^2}{2m} (\nabla_1^2 + \nabla_2^2) - \frac{e^2}{4 \pi \varepsilon_0} \left( \frac{2}{r_1} + \frac{2}{r_2} - \frac{1}{|\boldsymbol{r}_1 - \boldsymbol{r}_2|} \right)
\end{equation}
$$

困难来自电子-电子相互作用

$$
\begin{equation}
    V_{\mathrm{ee}} = \frac{e^2}{4 \pi \varepsilon_0} \frac{1}{|\boldsymbol{r}_1 - \boldsymbol{r}_2|}.
\end{equation}
$$

如果完全忽略这一项，则哈密顿量可分解为两个独立的氢原子的哈密顿量（原子核电量 $e \to 2e$），精确解就是两个电子分别处于氢原子基态：

$$
\begin{equation}
    \psi_0 (\boldsymbol{r}_1, \boldsymbol{r}_2) = \psi_{100}(\boldsymbol{r}_1) \psi_{100}(\boldsymbol{r}_2) = \frac{Z^3}{\pi a^3} \mathrm{e}^{-Z (r_1 + r_2) / a} , \quad Z = 2
\end{equation}
$$




## 8.3 氢分子离子

$\mathrm{H}_2^+$ 的哈密顿量：

$$
\begin{equation}
    \hat{H} = -\frac{\hbar^2}{2m} \nabla^2 - \frac{e^2}{4 \pi \varepsilon_0} \left( \frac{1}{r_1} + \frac{1}{r_2} \right) + \frac{e^2}{4 \pi \varepsilon_0 R}
\end{equation}
$$







## 8.4 氢分子

令两个质子处于静止状态，哈密顿量为

$$
\begin{equation}
    \hat{H} = -\frac{\hbar^2}{2m} (\nabla_1^2 + \nabla_2^2) + \frac{e^2}{4 \pi \varepsilon_0} \left( \frac{1}{R} + \frac{1}{r_{12}} - \frac{1}{r_1} - \frac{1}{r_1'} - \frac{1}{r_2} - \frac{1}{r_2'} \right)
\end{equation}
$$

变分波函数：

$$
\begin{equation}
    \psi(\boldsymbol{r}_1, \boldsymbol{r}_2) = \left( \frac{\psi_0(\boldsymbol{r}_1) + \psi_0(\boldsymbol{r}_1')}{\sqrt{2(1 + I)}} \right) \left( \frac{\psi_0(\boldsymbol{r}_2) + \psi_0(\boldsymbol{r}_2')}{\sqrt{2(1 + I)}} \right)
\end{equation}
$$

Heitler-London 近似

$$
\begin{equation} \label{eq:Heitler-London_+} \tag{8.4.3}
    \psi_+(\boldsymbol{r}_1, \boldsymbol{r}_2) = A_+ \left[ \psi_0(\boldsymbol{r}_1) \psi_0(\boldsymbol{r}_2') + \psi_0(\boldsymbol{r}_1') \psi_0(\boldsymbol{r}_2) \right]
\end{equation}
$$

注意到上式中的空间波函数是交换对称的（$1 \leftrightarrow 2$），所以自旋波函数必须是反对称的，即单态。如果使用

$$
\begin{equation} \label{eq:Heitler-London_-} \tag{8.4.4}
    \psi_-(\boldsymbol{r}_1, \boldsymbol{r}_2) = A_- \left[ \psi_0(\boldsymbol{r}_1) \psi_0(\boldsymbol{r}_2') - \psi_0(\boldsymbol{r}_1') \psi_0(\boldsymbol{r}_2) \right]
\end{equation}
$$

则空间波函数是交换反对称的，自旋处于三重态。



## 拓展：多电子体系

1.  **Born-Oppenheimer 近似**：$\psi = \psi_{\mathrm{electrons}}(\boldsymbol{r}; \boldsymbol{R}) \psi_{\mathrm{nuclei}}(\boldsymbol{R})$，即认为原子核的运动很慢，可以和电子运动分开处理。:point_right: 绝热定理
2.  $H \psi_{\mathrm{el}} = \mathcal{E} \psi_{\mathrm{el}}$，其中 $\mathcal{E}$ 为总能量，$\psi_{\mathrm{el}}$ 为总波函数
    -   多电子波函数需要满足 Pauli 不相容性：
    
        $$
        \psi_{\mathrm{el}}(\ldots, \boldsymbol{r}_i, \ldots, \boldsymbol{r}_j, \ldots) = - \psi_{\mathrm{el}}(\ldots, \boldsymbol{r}_j, \ldots, \boldsymbol{r}_i, \ldots)
        $$

3.  用 Slater 行列式（单电子波函数的组合）来做 $\psi_{\mathrm{el}}$ 的最优近似

    $$
    \psi_{\mathrm{el}} = \frac{1}{\sqrt{N!}} \begin{vmatrix}
        \phi_1(\boldsymbol{r}_1) & \phi_2(\boldsymbol{r}_1) & \cdots & \phi_N(\boldsymbol{r}_1) \\
        \phi_1(\boldsymbol{r}_2) & \phi_2(\boldsymbol{r}_2) & \cdots & \phi_N(\boldsymbol{r}_2) \\
        \vdots & \vdots & \ddots & \vdots \\
        \phi_1(\boldsymbol{r}_N) & \phi_2(\boldsymbol{r}_N) & \cdots & \phi_N(\boldsymbol{r}_N)
    \end{vmatrix}
    $$

    注：若存在简并或电子激发，可使用多个 Slater 行列式的线性组合

4.  从 Slater 行列式入手，基于变分原理，得到 Hartree-Fock 方程

    $$
    \Big[T + V_{\mathrm{el-nuc}} + J_{\mathrm{el-el}} + K_{\mathrm{exc}}\Big] \phi_i = \varepsilon_i \phi_i
    $$

    其中

    -  $T$：单电子动能
    -  $V_{\mathrm{el-nuc}}$：电子-原子核相互作用势
    -  $J_{\mathrm{el-el}}$：电子-电子库伦相互作用势（直接项）
    -  $K_{\mathrm{exc}}$：交换相互作用势（交换项）
    -  $\phi_i$：单电子波函数
    -  $\varepsilon_i$：不同分子轨道的不同能量

    注：

    1.  $J_{\mathrm{el-el}}$ 包含 $\phi_i$，需要迭代求解
    2.  $V_{\mathrm{el-nuc}}$ 和 $J_{\mathrm{el-el}}$ 依赖于电子密度 $\rho(\boldsymbol{r})$，而 $K_{\mathrm{exc}}$ 是 $\rho$ 的泛函 $\implies$ 密度泛函理论（DFT, Density Functional Theory）
        
        $$
        \rho(\boldsymbol{r}) = 2 |\psi_1(\boldsymbol{r})|^2 + 2 |\psi_2(\boldsymbol{r})|^2 + \cdots
        $$

5.  假设 $K_\mathrm{exc}$ 对 $\rho$ 的依赖
    - LDA, Local Density Approximation
    - GCC
    
    可得到 DFT 方程。

    Hartree-Fock/DFT方程通过迭代 $\phi(\boldsymbol{r}) = \sum_i c_i \phi_i(\boldsymbol{r})$ 求解，得到最优系数 $c_i$.
6.  LCAO, Linear Combination of Atomic Orbitals：用原子轨道线性组合来表示分子轨道 $\phi_i$.