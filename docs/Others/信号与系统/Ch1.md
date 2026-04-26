# 第一章 信号与系统的基本概念

## 1.0 信号的概念

信号：表达、传递**信息**的符号

!!! question "什么是信息？"
    > “信息就是信息，既非物质，也非能量。”
    >
    > <div align="right"> ——维纳（美国数学家、控制论创始人）</div>
    >
    > “信息是用来消除随机不定性的东西。”
    >
    > <div align="right">——香农（美国数学家、信息论创始人）</div>

    :point_right: 信息可以使不确定性降低。

!!! info "重点内容一：对信号性质的研究"

系统：有输入、有输出。脱离了系统的信号没有意义。

```mermaid
graph LR
    A[设计产生信号] --> B[设计制造系统]
    B --> C[输出新的信号]
```

!!! example "信号与系统示例"
    - 地动仪
        - 输入信号：地震波
        - 系统：地动仪
        - 输出信号：地震方向
    - 人脸识别系统
        - 输入信号：人脸图像
        - 系统：人脸检测系统
        - 输出信号：人脸所在矩形区域
        - 系统：人脸识别系统
        - 输出信号：人脸ID
    - 语音识别系统（Speech to Text）
        - 输入信号：语音信号
        - 系统：语音识别系统
        - 输出信号：文本
    - Text to 3D
    - ...

!!! info "重点内容二：系统的基本知识和方法"

## 1.1 信号与系统的基本概念

### 1.1.1 信号的描述与分类

#### 信号的定义

- 物理量随着时间、空间等自变量而变化的情况
- 是信息的表征（信息的载体）

#### 信号的分类

##### 基于信号维度

- 一维信号：时间序列信号（音频）
- 二维信号：图像
- 三维信号：视频
- 四维信号：3D游戏
  > 高斯球
  > spd-gaussian

> 本课程只考虑一维信号

##### 基于信号取值类型

- 连续信号 $x(t)$：在任何时刻除若干个不连续点以外都有定义的信号。
- 离散信号 $x[n]$：仅在一些离散时刻有定义，一般自变量只取整数值。通常也称为序列。

##### 周期信号与非周期信号

- 周期信号：$x(t) = x(t + T)$ 或 $x[n] = x[n + N]$. 满足条件的最小正整数 $N$ 称为基波周期。

##### 奇信号与偶信号

- 奇信号：$x(t) = -x(-t)$ 或 $x[n] = -x[-n]$
- 偶信号：$x(t) = x(-t)$ 或 $x[n] = x[-n]$
> 信号总是可以分解为奇分量与偶分量之和
>
> $$
> \begin{aligned}
>     x_{\mathrm{e}}(t) &= \frac{1}{2} [x(t) + x(-t)] \\
>     x_{\mathrm{o}}(t) &= \frac{1}{2} [x(t) - x(-t)] \\
> \end{aligned}
> $$
>
> 且容易说明这种分解是唯一的。

##### 功率信号与能量信号

一个信号的能量和功率是这样定义的：设 $x(t)$ 为电压/电流，则它在 $1 \, \Omega$ 的电阻上的瞬时功率为 $p(t) = |x(t)|^2$，在 $t_1 \leq t \leq t_2$ 内消耗的能量为 $E_{[t_1, t_2]} = \int_{t_1}^{t_2} |x(t)|^2 \, \mathrm{d}t$. 无穷大区间内的总能量和平均功率分别为

$$
\begin{aligned}
    E_\infty &= \lim_{\substack{t_2 - t_1 \to \infty \\ t_1 \to -\infty \\ t_2 \to \infty}} \int_{t_1}^{t_2} |x(t)|^2 \, \mathrm{d}t = \int_{-\infty}^{\infty} |x(t)|^2 \, \mathrm{d}t \\
    P_\infty &= \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 \, \mathrm{d}t
\end{aligned}
$$

对于离散信号 $x[n]$，在 $n_1 \leq n \leq n_2$ 内的离散时间内，其能量和功率分别为

$$
\begin{aligned}
    E_{[n_1, n_2]} &= \sum_{n=n_1}^{n_2} \Big|x[n] \Big|^2 \\
    P_{[n_1, n_2]} &= \frac{1}{n_2 - n_1 + 1} \sum_{n=n_1}^{n_2} \Big|x[n] \Big|^2
\end{aligned}
$$

无穷大区间内的总能量和平均功率分别为

$$
\begin{aligned}
    E_\infty &= \sum_{n=-\infty}^{\infty} \Big|x[n] \Big|^2 \\
    P_\infty &= \lim_{N \to \infty} \frac{1}{2N + 1} \sum_{n=-N}^{N} \Big|x[n] \Big|^2
\end{aligned}
$$

### 1.1.2 系统的表示与分类


## 1.2 基本的连续时间信号

### 1.2.1 连续时间复指数信号与正弦信号

连续时间复指数信号：

$$
x(t) = C \mathrm{e}^{s t}
$$

一般地，$C, s \in \mathbb{C}$，通常设 $s = \sigma + j \omega_0$

#### 实指数信号

$C,s \in \mathbb{R}$，主要看 $\sigma$ 符号（特别地，$\sigma = 0$ 称直流信号）

> 自然界广泛存在指数衰减的信号

#### 周期复指数信号和正弦信号

$\sigma = 0$，$s = j \omega_0$ 为纯虚数时：$x(t) = C \mathrm{e}^{j \omega_0 t}$. 若要使该信号为周期信号，

$$
x(t) = x(t + T) \implies \mathrm{e}^{j \omega_0 T} = 1 \implies T_0 = \frac{2\pi}{|\omega_0|}
$$

$T_0$ 称为基波周期。

正弦信号和余弦信号统称为正弦信号，由欧拉公式可知正弦信号都是由周期复指数信号构成的。




### 1.2.2 奇异信号

#### 单位阶跃信号

$$
u(t) = \begin{cases}
    0, & t < 0 \\
    1, & t \geq 0
\end{cases}
$$

#### 单位冲激信号

经过冲激信号的激发后，输出值跃变到单位 1，故

$$
u(t) = \int_{-\infty}^{t} \delta(\tau) \, \mathrm{d}\tau \implies \delta(t) = \frac{\mathrm{d}u(t)}{\mathrm{d}t}
$$

Dirac 定义：

$$
\left \{
    \begin{aligned}
        & \int_{-\infty}^{\infty} \delta(t) \, \mathrm{d}t = 1 \\[1ex]
        & \delta(t) = 0, \quad t \neq 0
    \end{aligned}
\right.
$$

筛选性质：

对于 $\forall x(t) \in C(0)$，

$$
\int_{-\infty}^{\infty} x(t) \delta(t) \, \mathrm{d}t = x(0)
$$

显然 $x(t) \delta(t)$ 也是一个冲激信号，其面积由上式可知是 $x(0)$，因此 $x(t) \delta(t) = x(0) \delta(t)$.

!!! tip "利用 Lebesgue 积分证明两个函数相等"
    Lebesgue 积分是泛函分析中的一个重要工具，可以用来证明两个函数在几乎处处相等。若要证 $x(t) = y(t)$，只需证

    $$
    \int_{-\infty}^{\infty} x(t) z(t) \, \mathrm{d}t = \int_{-\infty}^{\infty} y(t) z(t) \, \mathrm{d}t
    $$

    对于 $\forall z(t) \in C_c(\mathbb{R})$ 即可。


### 1.2.3 其他连续时间信号

#### 抽样函数

$$
\mathrm{Sa}(t) = \frac{\sin t}{t} \quad \text{or} \quad \mathrm{sinc}(t) = \frac{\sin(\pi t)}{\pi t}
$$

性质：

$$
\int_0^{\infty} \mathrm{Sa}(t) \, \mathrm{d}t = \frac{\pi}{2}
$$

#### 高斯函数

也称为钟形脉冲信号

$$
x(t) = E \mathrm{e}^{-\frac{t^2}{\tau^2}}
$$

## 1.3 基本的离散时间信号

### 1.3.1 单位冲激序列和单位阶跃序列

单位冲激序列：

$$
\delta[n] = \begin{cases}
    1, & n = 0 \\
    0, & n \neq 0
\end{cases}
$$

单位阶跃信号：

$$
u[n] = \begin{cases}
    0, & n < 0 \\
    1, & n \geq 0
\end{cases}
$$

因此有

$$
u[n] = \sum_{k=0}^{\infty} \delta[n-k] = \sum_{k=-\infty}^{n} \delta[k]
$$

> 一般地，
>
> $$
> x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k]
> $$

### 1.3.2 离散时间复指数信号与正弦信号

$$
x[n] = C \alpha^n
$$

- 实指数序列

- 纯虚指数序列

- 复指数序列周期性要求：$\omega / 2\pi \in \mathbb{Q}$

- **复指数序列集**：成谐波关系的信号集

$$
\varphi_k[n] = \{\mathrm{e}^{j \frac{2\pi k}{N} n}\}, \quad k = 0, \pm 1, \ldots, \pm (N-1)
$$

易知 $\varphi_{k+N}[n] = \varphi_k[n]$，因此 $\{\varphi_k[n]\}$ 是一个周期为 $N$ 的信号集。

#### 一般复指数序列

$C = |C| \mathrm{e}^{j \theta}, \, a = |a| \mathrm{e}^{j \omega_0}$

$$
\begin{aligned}
    x[n] &= |C||a|^n \mathrm{e}^{j(\theta + \omega_0 n)} \\
    &= |C||a|^n \left[ \cos(\theta + \omega_0 n) + j \sin(\theta + \omega_0 n) \right]
\end{aligned}
$$

## 1.4 信号的运算与自变量变换

- 平移 $x(t + t_0)$
- 反褶 $x(-t)$
- 尺度变换 $x(a t)$
    - $|a| > 1$：压缩
    - $|a| < 1$：扩展
    > $\delta(a t) = \frac{1}{|a|} \delta(t)$
- 抽取：$x_1[n] = x[Nn], \, N \in \mathbb{Z}^+$
- 插值：$$x_2[n] = \begin{cases}
    x[n/N], & n \text{ 是 } N \text{ 的倍数} \\
    0, & \text{其他}
\end{cases}$$

## 1.5 系统的描述

### 1.5.2 系统的互联

- 并联
- 反馈结构
- 串联/级联

### 1.5.3 系统的分类

- 连续/离散
- 线性/非线性
- 时变/时不变
- 记忆/无记忆
- 因果/非因果
- 可逆/不可逆
- 稳定/不稳定

### 1.6.1 线性和非线性系统

连续时间线性系统的定义：一个系统满足

- 齐次性：对 $\forall x(t) \xrightarrow{\text{系统}} y(t)$，有 $\forall a \in \mathbb{R}, \, a x(t) \xrightarrow{\text{系统}} a y(t)$
- 可加性：对 $\forall x_1(t) \xrightarrow{\text{系统}} y_1(t), \, x_2(t) \xrightarrow{\text{系统}} y_2(t)$，有 $x_1(t) + x_2(t) \xrightarrow{\text{系统}} y_1(t) + y_2(t)$

> 省流：每一项都有 $x$，每个 $x$ 都是一次项
>
> - $y(t) = 2 x(t) + 3 t x(1 - t) - 5 x(t^2 + 1)$
> - $y[n] = x[n] - x[n-1]$

### 1.6.3 增量线性系统

:bulb: $y(t) = x(t) + 1$ 本身不是线性系统，但输入的变化与输出的变化是线性的

!!! example "例"
    系统

    $$
    \frac{d y(t)}{dt} = x(t)
    $$

    