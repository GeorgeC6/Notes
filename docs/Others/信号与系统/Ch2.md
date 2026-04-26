# 第二章 线性时不变（LTI）系统的时域分析

## 2.0 引言

## 2.2 离散时间信号的时域分析

### 2.2.1 离散时间信号的单位脉冲分解

$$
\begin{equation} \tag{2.2.1} \label{eq:unit_impulse_decomposition}
    x[n] = \sum_{k = -\infty}^{\infty} \underset{\text{系数}}{\underbrace{x[k]}} \,\underset{\text{基信号}}{\underbrace{\delta[n - k]}}
\end{equation}
$$

!!! example "用单位脉冲表示单位阶跃信号 $u[n]$"
    $$
    u[n] = \sum_{k = -\infty}^{\infty} u[k] \delta[n - k] = \sum_{\textcolor{orange}{k = 0}}^{\infty} \delta[n - k]
    $$

    做变量替换 $n - k = m$，则

    $$
    u[n] = \sum_{m = n}^{-\infty} \delta[m] \xlongequal[\text{可交换}]{\text{上下限}} \sum_{m = -\infty}^{n} \delta[m]
    $$

### 2.2.2 卷积和单位脉冲响应

$$
x[n] \longrightarrow \boxed{\text{LTI 系统}} \longrightarrow y[n]
$$

只要搞清楚单位脉冲输入 $\delta[n]$ 经过系统后的输出 $h[n]$，就可以求出任意输入的响应！这个 $h[n]$ 就称为系统的**单位脉冲响应（impulse response）**。

根据 LTI 系统的齐次性，有

$$
x[n] \cdot \delta[n - k] \xrightarrow{\text{LTI 系统}} x[k] \cdot h[n - k]
$$

再根据 LTI 系统的叠加性，有

$$
\sum_{k = -\infty}^{\infty} x[k] \, \delta[n - k] \xrightarrow{\text{LTI 系统}} \sum_{k = -\infty}^{\infty} x[k] \, h[n - k]
$$

所以

$$
\begin{equation} \tag{2.2.2} \label{eq:convolution_sum}
    y[n] = \sum_{k = -\infty}^{\infty} x[k] \, h[n - k] \equiv x[n] \textcolor{orange}{*} h[n]
\end{equation}
$$

上式定义了卷积和运算：$*$

!!! tip "卷积和图示法"
    1.  反转：$h[k] \to h[-k]$
    2.  平移：$h[-k] \to h[n-k]$
    3.  乘积：$x[k] h[n-k]$
    4.  求和：$\sum_{k=-\infty}^{\infty} x[k] h[n-k]$


!!! tip "卷积和列表法"
    | $k$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $\displaystyle y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$ |
    |:---:|:----:|:---:|:---:|:---:|:---:|:--:|
    | $x[k]$ | $\quad$ | $1$ | $2$ | $3$ | $\quad$ | $\quad$ |
    | $h[-k]$ | $1$ | $2$ | $\quad$ | $\quad$ | $\quad$ | $2$ |
    | $h[1-k]$ | $\quad$ | $1$ | $2$ | $\quad$ | $\quad$ | $5$ |
    | $h[2-k]$ | $\quad$ | $\quad$ | $1$ | $2$ | $\quad$ | $8$ |
    | $h[3-k]$ | $\quad$ | $\quad$ | $\quad$ | $1$ | $2$ | $3$ |

输出信号的长度：
设 $x[n]$ 的非零时间范围为 $n_1 \sim n_1 + N_1 - 1$，$h[n]$ 的非零时间范围为 $n_2 \sim n_2 + N_2 - 1$. 将 $h[n]$ 反转，右端为 $-n_2$，左端为 $-n_2 - N_2 + 1$. 设 $-n_2 + m_1 = n_1$ 后恰好出现第一个点重合，$-n_2 - N_2 + 1 + m_2 = n_1 + N_1 - 1$ 后恰好最后一个点重合，则 $y[n]$ 的非零时间范围为 $m_1 \sim m_2$，即 $n_1 + n_2 \sim n_1 + N_1 - 1 + n_2 + N_2 - 1$，**长度为 $N_1 + N_2 - 1$**.

:point_right: 单位脉冲响应 $h[n]$ 可以完全表征一个 LTI 系统，且提供了更一般的系统描述：系统对任意输入信号的响应都是在做卷积和运算。故下面都用 $h[n]$ 来代指系统。

$$
x[n] \longrightarrow \boxed{h[n]} \longrightarrow y[n]
$$

### 2.2.3 卷积和的性质

#### 代数性质

-   交换律：$x[n] * h[n] = h[n] * x[n]$
    
    !!! note "Proof"
        $$
        \begin{aligned}
            x[n] * h[n] &= \sum_{k=-\infty}^{\infty} x[k] h[n-k] \\
            &\xlongequal{m = n-k} \sum_{m=+\infty}^{-\infty} x[n-m] h[m] \\
            &= \sum_{m=-\infty}^{\infty} h[m] x[n-m] = h[n] * x[n]
        \end{aligned}
        $$
    
-   结合律：$x[n] * (h_1[n] * h_2[n]) = (x[n] * h_1[n]) * h_2[n]$

    !!! note "Proof"
        $$
        \begin{aligned}
            (x[n] * h_1[n]) * h_2[n] &= \left(\sum_{k=-\infty}^{\infty} x[k] h_1[n-k]\right) * h_2[n] \\
            &= \sum_{l=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} x[k] h_1[l-k] h_2[n-l] \\
            &\xlongequal{\text{交换求和顺序}} \sum_{k=-\infty}^{\infty} x[k] \left(\sum_{l=-\infty}^{\infty} h_1[l-k] h_2[n-l] \right) = \sum_{k=-\infty}^{\infty} x[k] \left(\sum_{l=-\infty}^{\infty} h_1[\textcolor{orange}{l-k}] h_2[(n-k) - (\textcolor{orange}{l-k})] \right) \\
            &= \sum_{k=-\infty}^{\infty} x[k] (h_1[n-k] * h_2[n-k]) = x[n] * (h_1[n] * h_2[n])
        \end{aligned}
        $$

    -   :exclamation: 级联系统的顺序无关
-   分配律：$x[n] * (h_1[n] + h_2[n]) = x[n] * h_1[n] + x[n] * h_2[n]$

#### 与冲激脉冲序列 $\delta[n]$ 的卷积

由 \eqref{eq:unit_impulse_decomposition} 和 \eqref{eq:convolution_sum} 可知

$$
\begin{equation} \tag{2.2.3} \label{eq:conv_delta}
    x[n] * \delta[n] = x[n]
\end{equation}
$$

相当于 $\delta[n]$ 是一个恒等系统的单位脉冲响应，进啥出啥。由于还是时不变的，容易证明 $x[n] * \delta[n - n_0] = x[n - n_0]$.

#### 与单位阶跃序列 $u[n]$ 的卷积和

$$
\begin{equation} \tag{2.2.4} \label{eq:conv_step}
    x[n] * u[n] = \sum_{k=-\infty}^{\infty} x[k] u[n-k] \xlongequal{n - k \geq 0} \sum_{k=-\infty}^{n} x[k]
\end{equation}
$$

:bulb: 单位脉冲响应是 $u[n]$ 的系统相当于一个加法器！


## 2.1 连续时间信号的时域分析

学完了离散情形，连续的就更好理解。

### 2.1.1 信号的脉冲分解

任一连续信号可用无穷多个单位冲激函数的移位、加权和（即积分）来表示。

$$
x(t) = \lim_{\Delta \to 0} \sum_{k=-\infty}^{\infty} x(k \Delta) \delta(t - k \Delta) \cdot \Delta = \int_{-\infty}^{\infty} x(\tau) \delta(t - \tau) \, \mathrm{d} \tau
$$


### 2.1.2 卷积积分与单位冲激响应

$$
x(t) = \int_{-\infty}^{\infty} x(\tau) \delta(t - \tau) \, \mathrm{d} \tau \xrightarrow{\text{LTI 系统}} \int_{-\infty}^{\infty} x(\tau) h(t - \tau) \, \mathrm{d} \tau
$$

因此响应为

$$
\begin{equation} \tag{2.1.1} \label{eq:conv_integral}
    y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) \, \mathrm{d} \tau \equiv x(t) \textcolor{orange}{*} h(t)
\end{equation}
$$

!!! example "例"
    已知一 LTI 系统的单位冲激响应为

    $$
    h(t) = \mathrm{e}^{-at} u(t)
    $$

    求系统的输入信号为 $x(t) = \mathrm{e}^{-b t} u(t), \, (a \neq b)$ 时的输出信号 $y(t)$.

    ---

    $$
    \begin{aligned}
        y(t) &= \int_{-\infty}^{\infty} x(\tau) h(t - \tau) \, \mathrm{d} \tau \\
        &= \int_{-\infty}^{\infty} \mathrm{e}^{-b \tau} u(\tau) \cdot \mathrm{e}^{-a (t - \tau)} u(t - \tau) \, \mathrm{d} \tau \\
        &\xlongequal[非零]{t \geq \tau \geq 0} \int_0^t \mathrm{e}^{-b \tau} \cdot \mathrm{e}^{-a (t - \tau)} \, \mathrm{d} \tau \\
        &= \mathrm{e}^{-a t} \int_0^t \mathrm{e}^{(a - b) \tau} \, \mathrm{d} \tau = \frac{\mathrm{e}^{-b t} - \mathrm{e}^{-a t}}{a - b}, \, \textcolor{crimson}{t \geq 0} \\
        &= \frac{\mathrm{e}^{-b t} - \mathrm{e}^{-a t}}{a - b} u(t)
    \end{aligned}
    $$

### 2.1.3 卷积积分的图示法

1. 反转：$h(\tau) \to h(-\tau)$
2. 平移：$h(-\tau) \to h(t-\tau)$
3. 相乘：$x(\tau) h(t-\tau)$
4. 积分：$\int_{-\infty}^{\infty} x(\tau) h(t-\tau) \, \mathrm{d} \tau$
5. 选取不同的 $t$ 值，重复 2-4 步骤，得到 $y(t)$ 的不同取值



!!! note "$\delta(t)$ 的性质"
    1.  $\int_{-\infty}^{+\infty} \delta(t) \, \mathrm{d} t = 1$
    2.  $\int_{-\infty}^{+\infty} x(t) \delta(t - t_0) \, \mathrm{d} t = x(t_0)$
    3.  $x(t) \delta(t) = x(0) \delta(t)$
    4.  $\delta(a t) = \frac{1}{|a|} \delta(t)$
    5.  $\delta(f(t)) = \sum_{t_i} \frac{1}{|f'(t_i)|} \delta(t - t_i)$，其中 $t_i$ 是 $f(t) = 0$ 的根.

    下面证明第 5 条。任选测度函数 $y(t)$，并令 $\tau = f(t)$，则 $\mathrm{d} \tau = f'(t) \mathrm{d} t$. 对于 LHS：

    $$
    \int_{-\infty}^{+\infty} y(t) \delta(f(t)) \, \mathrm{d} t = \int_{-\infty}^{+\infty} \frac{y(t)}{|f'(t)|} \delta(\tau) \, \mathrm{d} \tau = \sum_{t_i} \frac{y(t_i)}{|f'(t_i)|}
    $$

    > 有绝对值是因为

    对于 RHS：

    $$
    \int_{-\infty}^{+\infty} y(t) \left[ \sum_{t_i} \frac{1}{|f'(t_i)|} \delta(t - t_i) \right] \, \mathrm{d} t = \sum_{t_i} \frac{1}{|f'(t_i)|} \int_{-\infty}^{+\infty} y(t) \delta(t - t_i) \, \mathrm{d} t = \sum_{t_i} \frac{y(t_i)}{|f'(t_i)|}
    $$

    根据 Lebsegue 定理，LHS = RHS.



### 卷积的代数性质

#### 卷积的求导

$$
\frac{\mathrm{d}}{\mathrm{d} t} [x(t) * h(t)] = \frac{\mathrm{d} x(t)}{\mathrm{d} t} * h(t) = x(t) * \frac{\mathrm{d} h(t)}{\mathrm{d} t}
$$

#### 卷积的积分

$$
\int_{-\infty}^t [x(\lambda) * h(\lambda)] \, \mathrm{d} \lambda = \left( \int_{-\infty}^t x(\lambda) \, \mathrm{d} \lambda \right) * h(t)
$$

证明：

利用 $x(t) * u(t) = \int_{-\infty}^t x(\lambda) \, \mathrm{d} \lambda$，

$$
\begin{aligned}
    \text{LHS} &= [x(\lambda) * h(\lambda)] * u(t) \xlongequal{交换律} [x(\lambda) * u(t)] * h(t) \\
    &= \left( \int_{-\infty}^t x(\lambda) \, \mathrm{d} \lambda \right) * h(t) = \text{RHS}
\end{aligned}
$$

!!! note "推广：卷积的高阶导数/多重积分"
    设 $r(t) = [x_1(t) * x_2(t)]$，则有

    $$
    r^{(i)}(t) = x_1^{(i)}(t) * x_2^{(i-j)}(t)
    $$

    其中，当 $i, j,\, i - j$ 为正整数时，为高阶导数；当 $i, j, i - j$ 为负整数时，为多重积分。**可任意交换阶数！**


    ---

    $$
    \begin{aligned}
        x(t) * \delta^{(k)}(t) &= x^{(k)}(t) * \delta(t) = x^{(k)}(t) \\
        x^{(-1)}(t) * \delta(t) &= x(t) * \delta^{(-1)}(t) = x(t) * u(t)
    \end{aligned}
    $$

!!! info "微分器"
    $$x(t) \xrightarrow{\text{微分器}} \frac{\mathrm{d} x(t)}{\mathrm{d} t}$$

    而 $\frac{\mathrm{d} x(t)}{\mathrm{d} t} = x^{(1)}(t) * \delta(t) = x(t) * \delta'(t)$

