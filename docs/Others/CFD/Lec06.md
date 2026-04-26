# Chapter 6: Techniques for CFD

## The Lax-Wendroff Technique

显式，适合步进解（与双曲型和抛物型方程有关）。基于在时间上的泰勒展开。

设 $\rho_{i,j}^t$ 为网格点 $(i,j)$ 在时间 $t$ 时的密度。

$$
\rho_{i,j}^{t + \Delta t} = \rho_{i,j}^t + \left. \frac{\partial \rho}{\partial t} \right|_{i,j}^t \Delta t + \left. \frac{\partial^2 \rho}{\partial t^2} \right|_{i,j}^t \frac{\Delta t^2}{2} + \cdots
$$

其它量也做同样的展开，只需把时间导数求出即可得到显式的递推式。求时间导数需要用到流动控制方程。

## MacCormack Technique

显式、二阶精度，1969年提出并流行。

**Predictor-Corrector**


## 不可压粘性流动

困难：椭圆形方程，声速是无穷大，由 CFL 条件知 $\Delta \to 0 \implies$ 迭代收敛极慢

### 不可压 N-S 方程

$$
\begin{gather}
    \nabla \cdot \vec{V} = 0 \\
\end{gather}
$$

### SIMPLE 算法

Semi-Implicit Method for Pressure-Linked Equations，压力耦合方程的半隐式算法

1.  按照交错网格给出所有“压力”网格点
2.  $(\rho u^*)^{n+1}$


只有一阶精度

### PISO 算法




| SIMPLE | PISO |
| :---: | :---: |
| 求稳态解 | 求瞬态解 |



!!! warning "Reference Pressure"
    If all BCs are Neumann, the Poisson equation for pressure correction is singular!

    需要设置参考压强点（reference pressure point），如 $p_{i,j}^* = 0$

    > COMSOL 有这个提示