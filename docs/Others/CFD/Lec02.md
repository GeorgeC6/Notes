# Chapter 2: Governing Equations

物质导数

$$
\frac{D}{D t} = \frac{\partial}{\partial t} + \mathbf{u} \cdot \nabla
$$

- $\frac{\partial}{\partial t}$：local derivative
- $\mathbf{u} \cdot \nabla$：convective derivative

速度散度的物理意义

考虑随流体运动的控制体，运动过程中其内的流体粒子不变，故质量不变。现在考虑控制体表面上以当地速度 $\mathbf{V}$ 运动的一个无穷小面元 $\mathrm{d} S$，小面元在 $\Delta t$ 内的运动导致了控制体体积的变化：

$$
\Delta \mathscr{V} = \mathbf{V} \Delta t 
$$