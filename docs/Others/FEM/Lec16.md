# Weighted Residual Methods

How to find element stiffness matrix and equations:

-   Direct equilibrium method: Good for simple problems (1D elements)
-   Energy method: Good for all elements
    -   Principle of minimum potential energy: elastic materials
    -   Castigliano's theorem: elastic materials
    -   Principle of virtual work: any material
-   Variational method
-   Method of weighted residuals

## Variational Method

Find a functional $\Pi_p$ equivalent to the PDE.

-   Structural stress analysis:

    $$
    \Pi_p = \frac{1}{2} \int_V \sigma_{ij} \varepsilon_{ij} dV - \int_V f_i u_i dV - \int_S T_i u_i dS
    $$


:thinking: Sometimes we can't find a functional!

## Weighted Residual Method

We want to find an approximate solution to any PDE, as long as we've obtained the governing equations and boundary conditions.

### Linear Elasticity

$$
\begin{aligned}
    \varepsilon_{ij} &= \frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) \\
    \sigma_{ij} &= 2 G \varepsilon_{ij} + \lambda \varepsilon_{kk} \delta_{ij} \\
    \frac{\partial \sigma_{ij}}{\partial x_j} + f_i &= 0
\end{aligned}
$$

15 equations + BC $\implies$ 15 unknowns, but the PDEs are very difficult to solve. Because the solution has to satisfy the PDEs at every material point, and this is a very strong requirement (**Strong form**).

Instead of finding a precise solution

$$
\frac{\partial \sigma_{ij}(u_1, u_2, u_3)}{\partial x_j} + f_i = 0
$$

we ask the above equations to be