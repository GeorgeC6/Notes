# 管流

- 内流
- 外流

## 雷诺数的定义

$$
\mathrm{Re} = \frac{\rho V L}{\mu} = \frac{V L}{\nu}
$$

### 水力直径

:thinking: 特征长度 $L$ 的选取有没有一个统一的标准？

:point_right: 水力直径（Hydraulic diameter）

$$
\begin{equation}
    D_h = \frac{4 A}{\mathscr{P}}
\end{equation}
$$

其中 $\mathscr{P}$ 为湿周长，即所有“被浸湿”（受到流体的剪切作用）的边界长度之和。

### 迟滞现象

从层流转捩到湍流的雷诺数 $\mathrm{Re}_{\mathrm{cr}2}$，比从湍流转捩到层流的雷诺数 $\mathrm{Re}_{\mathrm{cr}1}$ 要大得多。工程中使用**下临界雷诺数** $\mathrm{Re}_{\mathrm{cr}1}$.

- 圆管转捩的下临界雷诺数约为 $2300$
- 上临界雷诺数约为 $> 10000$，和管道粗糙度有关

> 圆管道中保持层流流动的流速是很慢的（$\sim 0.04$ m/s），故一般都是湍流

## 管道流的发展

流体进入管道，经过一段距离后，上下管壁的边界层增长，最终合并，流动状态达到稳定

入口长度

$$
L_e = f(d, V, \rho, \mu) \implies \frac{L_e}{d} = g(\mathrm{Re}_d)
$$

- 层流：$L_e / d \approx 0.06 \, \mathrm{Re}_d$
- 湍流：$L_e / d \approx 1.6 \, \mathrm{Re}_d^{1/4}$

## 头损失（Head Loss）

定常不可压缩单入口单出口的管道流动里，考虑修正的能量方程为

$$
\bigg(\frac{p}{\rho g} + \alpha \frac{V^2}{2g} + z \bigg)_1 = \bigg(\frac{p}{\rho g} + \alpha \frac{V^2}{2g} + z \bigg)_2 + h_f
$$

- $\alpha$：摩擦因子


## 湍流管道流

假设局部平均速度处处满足对数律

$$
\frac{u(r)}{u^*} \approx \frac{1}{\kappa} \ln \frac{(R - r) u^*}{\nu} + B
$$

平均速度

$$
V = \frac{Q}{A} = \frac{1}{\pi R^2} \int_0^R u(r) \, 2 \pi r \, \mathrm{d} r
$$

对于光滑内壁管道，

$$
\begin{equation}
    \frac{1}{f^{1/2}} = 2.0 \log \bigg( \mathrm{Re}_d f^{1/2} \bigg) - 0.8
\end{equation}
$$

此即为

近似显式表达

表面粗糙度的影响

### Nikuradse 实验结果




平均速度剖面

$$
u^+ = \frac{1}{\kappa} \ln y^+ + B - \Delta B  = \frac{1}{\kappa} \ln y^+ + 8.5
$$

沿程损失

$$
\begin{equation}
    h_l = \frac{\Delta p}{\rho g} = f \frac{L}{d} \frac{V^2}{2g}
\end{equation}
$$

- $f \textcolor{lightblue}{\,(\text{or } \lambda)}= \mathrm{fcn}(\mathrm{Re}, \varepsilon / d \, (\text{or } \Delta / d))$

局部损失

$$
h_m = \zeta \frac{U^2}{2g}
$$

$\zeta$ 为局部损失系数，