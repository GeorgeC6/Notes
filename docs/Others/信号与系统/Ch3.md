# 第三章 频域分析

对于周期函数 $f(t)$

$$
f(t) = B_0 + \sum_{k = 1}^\infty [A_k \cos(k \omega_0 t) + B_k \sin(k \omega_0 t)]
$$

复指数形式

$$
f(t) = \sum_{k = -\infty}^\infty a_k \mathrm{e}^{j k \omega_0 t}
$$

系数的转换关系

$$
\begin{aligned}
    a_k &= \frac{1}{T} \int_{t_0}^{t_0 + T} f(t) \mathrm{e}^{-j k \omega_0 t} \, \mathrm{d} t \\
    A_k &= 2 \mathrm{Re}(a_k) = a_k + a_{-k} \\
    B_k &= -2 \mathrm{Im}(a_k) = j (a_k - a_{-k})
\end{aligned}
$$



1.  绝对可积
2.  Dirichlet 收敛条件：在任意周期区间内，$x(t)$ 的最大值和最小值数目有限

## :material-star:{.star} 傅里叶变换性质

### 线性

### 时移

### 频移
    
### 时域微分

### 频域微分

### 时域卷积

### 时域积分

### 共轭对称

| $x(t)$ | $X(j\omega)$ |
| :---: | :---: |
| 实偶 | 实偶 |
| 实奇 | 虚奇 |
| 虚偶 | 虚偶 |
| 虚奇 | 实奇 |

!!! note "Remark"
    一个实信号 $x(t)$ 的傅里叶变换 $X(j\omega)$ 的实部来自于 $x(t)$ 的偶对称部分，虚部来自于 $x(t)$ 的奇对称部分。

    $$
    \begin{aligned}
        x(t) &= \frac{x(t) + x(-t)}{2} + \frac{x(t) - x(-t)}{2} = x_\text{e}(t) + x_\text{o}(t) \\
        X(j\omega) &= \mathrm{Re}(X(j\omega)) + j \mathrm{Im}(X(j\omega)) = X_\text{e}(j\omega) + X_\text{o}(j\omega)
    \end{aligned}
    $$

    例：$u(t) = \frac{1}{2} + \frac{1}{2} \mathrm{sgn}(t) \overset{\mathcal{F}}{\longrightarrow} \pi \delta(\omega) + \frac{1}{j\omega}$

!!! note "Remark"
    实函数 $x(t)$ 的傅里叶变换 $X(j\omega)$ 的幅度谱 $|X(j\omega)|$ 是偶函数，相位谱 $\theta(\omega)$ 是奇函数。


### 尺度变换

$$
x(at) \overset{\mathcal{F}}{\longrightarrow} \frac{1}{|a|} X\left( \frac{j\omega}{a} \right)
$$

-   时域压缩 $\implies$ 频域扩展（$|a| > 1$）
-   时域扩展 $\implies$ 频域压缩（$|a| < 1$）

### 对偶

若 $x(t) \overset{\mathcal{F}}{\longrightarrow} X(j\omega)$，则

$$
X(t) \overset{\mathcal{F}}{\longrightarrow} 2\pi x(-\omega)
$$

证明：交换 $\omega \leftrightarrow t$

$$
\begin{aligned}
    X(t) &= \int_{-\infty}^\infty x(\omega) \mathrm{e}^{-j \omega t} \, \mathrm{d} \omega \\
    \implies \mathcal{F}[X(t)] &= \int_{-\infty}^\infty X(t) \mathrm{e}^{-j \omega t} \, \mathrm{d} t = \int_{-\infty}^\infty \left( \int_{-\infty}^\infty x(\omega') \mathrm{e}^{-j \omega' t} \, \mathrm{d} \omega' \right) \mathrm{e}^{-j \omega t} \, \mathrm{d} t \\
    &= \int_{-\infty}^\infty x(\omega') \left( \int_{-\infty}^\infty \mathrm{e}^{-j (\omega + \omega') t} \, \mathrm{d} t \right) \mathrm{d} \omega' = \int_{-\infty}^\infty x(\omega') 2\pi \delta(\omega + \omega') \, \mathrm{d} \omega' \\
    &= 2\pi x(-\omega)
\end{aligned}
$$

### 调制

$$
x_1(t) x_2(t) \overset{\mathcal{F}}{\longrightarrow} \frac{1}{2\pi} X_1(j\omega) * X_2(j\omega)
$$

证明：利用对偶性

$$
X_1(t) \overset{\mathcal{F}}{\longrightarrow} 2\pi x_1(-\omega), \quad X_2(t) \overset{\mathcal{F}}{\longrightarrow} 2\pi x_2(-\omega)
$$

得到

$$
X_1(t) * X_2(t) \overset{\mathcal{F}}{\longrightarrow} (2\pi)^2 x_1(-\omega) x_2(-\omega)
$$

再次使用对偶性，

$$
2 \pi x_1(-t) x_2(-t) \overset{\mathcal{F}}{\longrightarrow} X_1(-j \omega) * X_2(-j \omega)
$$

利用尺度变换 $a = -1$，即得原式。


> 很难传输很尖锐的信号，因为频带带宽有限。
>
> 做法：在频域乘上一个矩形脉冲（理想低通滤波器）截断高频，相当于在时域卷积 $x(t) * \frac{\sin (\omega_c t)}{\pi t}$. 但是 $\frac{\sin (\omega_c t)}{\pi t}$ 在时域无限延伸，所以实际的低通滤波器在截断处会更平滑。

### 调制的步骤

1.  $y(t) = x(t) \cos(\omega_c t)$，其中 $\omega_c$ 称为载波频率。频域上

    $$
    Y(j\omega) = \frac{1}{2} \Big[ X(j(\omega + \omega_c)) + X(j(\omega - \omega_c)) \Big]
    $$