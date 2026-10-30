# Chapter 3: Transport and thermal diffusion

## 3.1 Transport properties in gases

现在我们考虑非平衡情形（**non-equilibrium**, 有净流量 $J$）。但我们只考虑稳恒态（**steady state**），也就是输运流量 $J$ 不随时间变化：$dJ/dt = 0$.

| 输运现象 | 驱动力 | 输运量 |
| :-----: | :-----: | :-----: |
| 热传导 | 温度梯度 | 能量 |
| 扩散 | 浓度梯度 | 物质 |
| 黏滞现象 | 速度梯度 | 动量 |
| 导电 | 电势梯度 | 电荷 |

下面主要研究前三种输运。


### 3.1.1 Viscosity

Viscosity is the measure of the resistance of a fluid to the deformation produced by a shear stress.

!!! info "牛顿粘性定律"
    流体层间切应力与法线方向的速度梯度成正比。

    $$
    \tau_{zx} = \frac{F}{A} = \eta \frac{\partial \braket{u_x}}{\partial z}
    $$

    如果流体是气体，此处的 $\braket{u_x}$ 是定向运动叠加在 MB 热运动之上的速度（类似于漂移速度，也正是因此使用平均的符号）。

    ---

    非牛顿流体：jamming


力是动量的变化率，因此 $\tau_{zx}$ 是单位面积上动量的变化率。这恰好是动量通量 $\Pi_z$ 的定义，但是差了个负号。因为通量是从物理量大的地方流向物理量小的地方（逆梯度方向）




### 3.1.2 Thermal conductivity

!!! info "傅里叶定律"
    热流密度与温度梯度成正比。

    $$
    \boldsymbol{J} = - \kappa \nabla T
    $$

    其中 $\kappa$ 是热导率（thermal conductivity）。


### 3.1.3 Diffusion


!!! info "Fick 定律"
    物质通量与浓度梯度成正比。

    $$
    \boldsymbol{J} = - D \nabla n
    $$

    其中 $D$ 是扩散系数（diffusion coefficient）。

!!! tip "扩散系数与随机行走"
    这个扩散系数正是之前提到的随机行走的扩散系数。对于三维情形，

    $$
    \braket{| \boldsymbol{r}(t) - \boldsymbol{r}(0) |^2} = 6 D t
    $$

    这称为**爱因斯坦关系**



!!! tip "统一的框架"
    由上述讨论可知，三种输运现象各自有


## 3.2 Thermal diffusion equation

### 3.2.1 Derivation

流出闭合面 $S$ 的热量为

$$
\int_S \boldsymbol{J} \cdot \mathrm{d} \boldsymbol{S} = - \frac{\partial}{\partial t} \int_V CT \, \mathrm{d} V
$$

使用 Stokes 定理，得到

$$
\nabla \cdot \boldsymbol{J} = - C \frac{\partial T}{\partial t}
$$

代入傅里叶定律 $\boldsymbol{J} = -\kappa \nabla T$，得到**热扩散方程**

$$
\begin{equation} \tag{3.1} \label{eq:heat-diffusion}
    \frac{\partial T}{\partial t} = D \nabla^2 T
\end{equation}
$$

其中 $D = \kappa / C$ 为热扩散系数（thermal diffusivity）。


### 3.2.2 1D equation

取试探解

$$
T(x, t) \propto \exp \big(\mathrm{i} (k x - \omega t) \big)
$$

得到色散关系

$$
k^2 = \frac{\mathrm{i} \omega}{D}
$$

即

$$
k = \pm (1 + \mathrm{i}) \sqrt{\frac{\omega}{2 D}}
$$

空间部分：

$$
\begin{cases}
    \displaystyle
    \exp \left( (\mathrm{i} - 1) \sqrt{\frac{\omega}{2 D}} x \right), & \text{which blows up as } x \to -\infty \\
    \displaystyle \exp \left( - (\mathrm{i} - 1) \sqrt{\frac{\omega}{2 D}} x \right), & \text{which blows up as } x \to \infty
\end{cases}
$$

若只考虑 $x > 0$ 的区域，通解可写为

$$
T(x, t) = \sum_\omega A(\omega) \exp (- \mathrm{i} \omega t) \exp \left( (\mathrm{i} - 1) \sqrt{\frac{\omega}{2 D}} x \right)
$$

边界条件如果是 $T(0, t) = T_0 + \Delta T \cos (\Omega t)$，则

$$
T(x, t) = T_0 + \Delta T e^{-x/\delta} \cos (\Omega t - x/\delta)
$$

其中

$$
\delta = \frac{2 D}{\Omega} = \sqrt{\frac{2 \kappa}{\Omega C}}
$$

称为 **skin depth**，表示热波的衰减深度。


### 3.2.3 稳态

$$
\frac{\partial T}{\partial t} = 0 \implies \nabla^2 T = 0
$$

### 3.2.4 球体热扩散方程






!!! question "思考题"
    1.  温度对液体粘度的影响是什么？
        
        ??? success "解答"
            想象在夏天和冬天倒蜂蜜，前者轻松得多。所以温度越高，液体的粘度越小。

    2.  黏度公式适用于液体吗？
        
        ??? success "解答"
            气体黏度公式：

            $$
            \eta = \frac{5}{16 d^2} \sqrt{\frac{m k_B T}{\pi}}
            $$

            显然，气体黏度公式在定性上就与液体的事实矛盾。

            气体分子除了碰撞，就是热运动。气体输运时，其行为由碰撞主导。而液体分子之间的相互作用力更强，不能忽略，所以不能只用碰撞理解。液体粘性源于分子间多体相互作用。

            液体分子的主导机制：**活化**（activation）. Arrhenius law:

            $$
            \eta = \eta_0 \exp \left( \frac{E_a}{k_B T} \right)
            $$

            活化需要克服势垒，势垒越高，分子越难以移动，液体的黏度就越大。温度越高，分子越容易克服势垒，所以液体的黏度随温度升高而降低。

            > 这只是宏观的公式，$E_a$ 如何从微观计算得到依然未知。
            > 液体是最麻烦的：气体可以忽略相互作用，固体（晶体）有周期性结构方便计算。但液体既不能忽略相互作用，又无序。
        
        !!! info "超临界流体"
            超临界流体（supercritical fluid）是指温度和压力都超过临界点的流体。超临界流体既有气体的性质（低密度、低黏度），又有液体的性质（高溶解性）。因此，超临界流体在化学工业中有广泛应用。
            
        !!! info "玻璃化转变"
            玻璃化转变（glass transition）附近，液体的黏度随温度变化非常剧烈。

            Angell plot: $\log \eta$ vs $T_g / T$，其中 $T_g$ 是玻璃化转变温度。

            -   强玻璃（strong glass）：
                $$\eta = \eta_0 \exp \left( \frac{E_a}{k_B T} \right)$$
            -   脆玻璃（fragile glass）：
                $$\eta = \frac{}{}$$


