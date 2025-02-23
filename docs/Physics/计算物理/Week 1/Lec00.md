# 绪论

## $\pi$ 的计算

### 几何计算时代

- 刘徽、祖冲之：割圆术

小数点后 7 位

### 经典数值计算时代

- Gregory-Leibniz 无穷级数

$$ \arctan (z) = z - \frac{z^3}{3} + \frac{z^5}{5} - \frac{z^7}{7} + \cdots $$

在 $z = \frac{1}{\sqrt{3}}$ 处， Sharp：小数点后 71 位

- 利用变换

$$\arctan (\frac{a_1}{b_1}) + \arctan (\frac{a_2}{b_2}) = \arctan (\frac{a_1 b_2 + a_2 b_1}{b_1 b_2 - a_1 a_2})$$

有

$$\frac{\pi}{4} = 4\arctan (\frac{1}{5}) - \arctan (\frac{1}{239})$$

Machin 及后人：100-700位

### 机器计算时代

- Gauss-Legendre 迭代

$$
\begin{aligned}
    & a_{n+1} = \frac{a_n + b_n}{2}, b_{n+1} = \sqrt{a_n b_n}, \\
    & t_{n+1} = t_n - p_n (a_n - a_{n+1})^2, p_{n+1} = 2p_n
\end{aligned}
$$

在初始值 $a_0 = 1, b_0 = \frac{1}{\sqrt{2}}, t_0 = \frac{1}{4}, p_0 = 1$ 下，有如下的 $\pi$ 计算迭代公式：

$$\pi \approx \frac{(a_n + b_n)^2}{4t_n}$$

## 计算物理的主要方法

- 经典数值方法
    - 实验数据的插值、拟合、滤波，数值微分、积分
    - 线性方程组的求解、矩阵运算
- 差分法求解微分方程
    - 一维变量 ODE
    - 多维变量 PDE
- Monte Carlo 方法数值模拟
    - 均匀分布随机数产生方法，任意分布的抽样方法
    - 模拟物理系统状态及演化
- 复杂系统和智能计算
    - 非线性的离散映射和非线性微分方程
    - 复杂系统中的物理问题和神经元网络

## 问题举例

- 阻尼单摆
- 混沌摆
- 随机游走
- 蝴蝶效应
