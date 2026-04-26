# Chapter 5: Grids with Appropriate Transformation

## 5.1 Introduction

标准的有限差分法需要均匀网格。而很多时候需要非均匀网格！

!!! example "机翼"
    机翼面是非常重要的边界条件，必须在网格中得到很好的体现。但是使用均匀网格的话，机翼表面很少落到网格点上，误差很大。

-   A boundary-fitted coordinate system（贴体坐标系）
    - 以边界的形状做等值线，构建正交曲线坐标系
    - 将物理空间的正交曲线网格转换为计算空间的均匀网格，一一对应（$x, y \leftrightarrow \xi, \eta$）
    - 在计算空间中使用有限差分方法求解方程，再对应回物理空间

## 5.2 General Transformations of the Equations

为简单起见，考虑二维非定常流动。物理空间到计算空间的变换 $(x, y, t) \to (\xi, \eta, \tau)$

$$
\begin{align}
    \xi &= \xi(x, y, t) \tag{5.1a}\\
    \eta &= \eta(x, y, t) \tag{5.1b}\\
    \tau &= \tau(t) \tag{5.1c}
\end{align}
$$

通常 $\tau$ 不依赖于 $x, y$，并且通常是 $\tau = t$. 下面研究导数的变换关系。使用链式法则

$$
\left( \frac{\partial}{\partial x} \right)_{y, t} = \left( \frac{\partial}{\partial \xi} \right)_{\eta, \tau} \left( \frac{\partial \xi}{\partial x} \right)_{y, t} + \left( \frac{\partial}{\partial \eta} \right)_{\xi, \tau} \left( \frac{\partial \eta}{\partial x} \right)_{y, t} + \left( \frac{\partial}{\partial \tau} \right)_{\xi, \eta} \left( \frac{\partial \tau}{\partial x} \right)_{y, t}
$$

下标表示求偏导时保持不变的变量。由此得到变换关系

$$
\begin{align}
    \frac{\partial}{\partial x} &= \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta} \tag{5.2} \label{eq:transform_x} \\
    \frac{\partial}{\partial y} &= \frac{\partial \xi}{\partial y} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial y} \frac{\partial}{\partial \eta} \tag{5.3} \label{eq:transform_y} \\
    \frac{\partial}{\partial t} &= \frac{\partial \xi}{\partial t} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial t} \frac{\partial}{\partial \eta} + \frac{\partial \tau}{\partial t} \frac{\partial}{\partial \tau} \tag{5.4} \label{eq:transform_t}
\end{align}
$$

导数前面的系数称为度量（metric）。下面求二阶导数。以 $\frac{\partial^2}{\partial x^2}$ 为例，利用 \eqref{eq:transform_x}，得到

$$
\begin{aligned}
    \frac{\partial^2}{\partial x^2} &= \frac{\partial}{\partial x} \left( \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta} \right) \\
    &= \frac{\partial^2 \xi}{\partial x^2} \frac{\partial}{\partial \xi} + \frac{\partial \xi}{\partial x} \frac{\partial^2}{\partial x \partial \xi} + \frac{\partial^2 \eta}{\partial x^2} \frac{\partial}{\partial \eta} + \frac{\partial \eta}{\partial x} \frac{\partial^2}{\partial x \partial \eta}
\end{aligned}
$$




!!! tip "非结构化网格的优缺点"
    <div class="grid cards" markdown>
    
    -   :thumbsup: Pros
    
        ---

        1.  Improved mesh quality
        2.  Enhanced 


    -   :thumbsdown: Cons
    
        ---

        1.  Increased computational cost
        2.  Complex data structures
    
    </div>

