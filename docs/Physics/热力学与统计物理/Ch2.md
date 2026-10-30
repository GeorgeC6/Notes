# Chapter 2: Kinetic Theory of Gases

## 2.1 Maxwell-Boltzmann Distribution

Assumptions:

1. The molecular size is much less than the intermolecular separation, so that we assume that {++molecules only rarely bumping into each other++}
2. {++Ignore any intermolecular forces++}

> 气体中分子间距在 $\mathrm{nm}$ 量级，对于 Lennard-Jones 势来说已经趋近于 0.

### 2.1.1 The velocity distribution

任意一个方向（比如取 $x$ 方向），该方向上速度在 $[v_x, v_x + dv_x]$ 之间的分子数占总分子数的比例记为 $g(v_x) d v_x$. 在恒定温度下（也就是正则系综），速度分布函数 $g(v_x)$ 与玻尔兹曼因子成正比：

$$
g(v_x) \propto e^{- \frac{m v_x^2}{2 k_B T}}
$$

$y, z$ 方向同理，且三个方向的速度独立，因此

$$
g(v_x) \mathrm{d} v_x \, g(v_y) \mathrm{d} v_y \, g(v_z) \mathrm{d} v_z \propto e^{- \frac{m (v_x^2 + v_y^2 + v_z^2)}{2 k_B T}} \mathrm{d} v_x \mathrm{d} v_y \mathrm{d} v_z \equiv e^{- \frac{m v^2}{2 k_B T}} \mathrm{d}^3 v
$$

我们只关心速率大小，转换到球坐标 $\mathrm{d} v_x \mathrm{d} v_y \mathrm{d} v_z \mapsto v^2 \sin \theta \, \mathrm{d} v \, \mathrm{d} \theta \, \mathrm{d} \phi$，则

$$
f(v) \mathrm{d} v \propto v^2 e^{- \frac{m v^2}{2 k_B T}} \mathrm{d} v
$$

归一化后得到

$$
\begin{equation} \label{eq:MB-distribution}
    f(v) = 4 \pi \left( \frac{m}{2 \pi k_B T} \right)^{3/2} v^2 e^{- \frac{m v^2}{2 k_B T}}
\end{equation}
$$

!!! info "MB分布的实验验证"
    单粒子源，滚筒速度选择器

    根据弧长（粒子的位置）反推速度，数数量得到分布

    > 丁西林：热电子发射验证 MB 分布
    > 葛正权：精确验证

    !!! question "思考"
        这样测出来的真的是 MB 分布吗？
    
    ??? tip "解答"
        不是。之后讨论泄流的时候会更具体地说明这个问题。

## 2.2 Pressure

The pressure $p$ of a volumn $V$ of gas (comprising $N$ molecules) depends on its temperature $T$ via an **equation of state**（状态方程）

$$
p = f(T, V, N)
$$

对于理想气体，

$$
pV = N k_B T
$$

### 2.2.1 Molecular distribution

设 $n$ 为单位体积内的分子数。单位体积内速率在 $v$ 到 $v + dv$ 之间的分子数为 $n f(v) dv$.

如果所有分子沿任意方向运动是等概率的，那么沿某个方向的立体角微元 $\mathrm{d} \Omega = 2 \pi \sin \theta \, \mathrm{d} \theta$ 内的分子数为
$$
n f(v) dv \cdot \frac{\mathrm{d} \Omega}{4 \pi} = n f(v) dv \cdot \frac{2 \pi \sin \theta \, \mathrm{d} \theta}{4 \pi} = \frac{n f(v) dv}{2} \sin \theta \, \mathrm{d} \theta
$$

这相当于用速度和角度限定粒子的运动状态：$[v, v + dv], [\theta, \theta + d\theta]$. 上式就是




## 2.3 Molecular effusion

**Effusion（泄流）** is the process by which a gas escapes through a very small hole.

### 2.3.1 Flux

**Molecular flux** $\varPhi$ is defined to be the number of molecules striking unit area per second.

$$
\frac{N(v, \theta)}{A dt} = v \cos \theta \frac{1}{2} n f(v) dv \sin \theta d \theta
$$

对于各个方向各种速率的分子，通量为上式对 $\theta, v$ 的积分：

$$
\begin{aligned}
    \varPhi &= \int_0^\infty \int_0^{\pi/2} v \cos \theta \frac{1}{2} n f(v) dv \sin \theta d \theta \\
    &= \frac{n}{2} \int_0^\infty v f(v) dv \int_0^{\pi/2} \sin \theta \cos \theta d \theta \\
    &= \frac{1}{4} n \braket{v}
\end{aligned}
$$

!!! question "泄流出来的粒子服从 MB 分布吗？"
    是不一样的！极限情况：$v \to 0$ 的粒子根本无法泄流出来！

    实际情况：
    
    $$
    f_{\mathrm{e}}(v) dv \propto \textcolor{crimson}{v^3} e^{- \frac{m v^2}{2 k_B T}} dv
    $$



## 2.4 Mean free path and collisions

### 2.4.1 The mean collsion time

