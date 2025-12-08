
振动系统的元素：

- 回复力（弹性元件）
- 阻尼力（阻尼元件）
- 外力

!!! example "最简单的例子"
    记 $x$ 为质量块距离平衡位置的位移，由牛顿第二定律可得

    $$
    m \ddot{x} = -k x - c \dot{x} + F(t)
    $$

## 激励

### 外力激励 $F(t)$

1.  $F(t) = 0$：**自由振动**
2.  $F(t) = F_0 \sin(\omega_0 t + \varphi_0)$：**谐和激励**
    - *e.g.* 偏心力（叶片的不对称缺陷等导致）
    - 在频域：
       - $F(t) \to F(\omega)$：幅频
       - $\varphi \to \varphi(\omega)$：相频
    - 有限个谐波激励
       - $F(t) = F_0 + \sum_{n=1}^{N} A_n \sin(\omega_n t + \varphi_n)$
3.  $F(t + T) = F(t)$：**周期激励**
    $$
    F(t) = F_0 + \sum_{n=1}^{\infty} F_n \sin(\frac{2\pi n}{T} t + \varphi_n)
    $$
4.  **任意激励**
    - 转换为频域，是连续谱
5.  **随机激励**
    - *不满足绝对可积：*

    $$\int_0^{+\infty} |F(t)| \mathrm{d}t \nless +\infty$$
    
    不能做傅里叶分析！

    - 引入**相关函数** $R(\tau) = \mathbb{E}[F(t)F(t+\tau)]$
    - 集合平均（ensemble average）

    相关函数是绝对可积的：$\int_0^{+\infty} |R(\tau)| \mathrm{d}\tau < +\infty$

### 参数激励

> 参数随着时间变化

1. 刚度参激 $k = k_0 + F_1(t)$
2. 阻尼参激 $c = c_0 + F_2(t)$
3. 质量参激 $m = m_0 + F_3(t)$

## 参数的简介

### 刚度 $k$

- 线性：$F = k x$
- 硬弹簧：$F(x) = k_1 x + k_2 x^3 (k_2 > 0)$
    - 切线斜率随位移增大而增大
- 软弹簧：$F(x) = k_1 x + k_2 x^3 (k_2 < 0)$
    - 切线斜率随位移增大而减小

!!! example "Duffing 振子"
    $$
    m \ddot{x} + c \dot{x} + k_1 x + k_2 x^3 = F(t)
    $$

    非线性振子

出于简单起见，只考虑 $F(x)$ 为奇函数的情况

### 阻尼 $c$

标准化方程：

$$
\ddot{x} + 2 \zeta \omega_0 \dot{x} + \omega_0^2 x = f(t)
$$

- $\omega_0 = \sqrt{\frac{k}{m}}$：系统的固有频率
- $\zeta = \frac{c}{2 m \omega_0}$：阻尼系数，一般比较小

#### 非线性阻尼

!!! example "Van der Pol 振子"
    $$
    m \ddot{x} + (c_0 + c_1 \dot{x}^2 + c_2 x^2) \dot{x} + k x = F(t)
    $$