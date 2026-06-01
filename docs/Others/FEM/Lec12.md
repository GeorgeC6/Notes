# Nonlinearity

1.  **Material nonlinearity**: constitutive relation $\sigma(\varepsilon)$ is nonlinear
2.  **Geometric nonlinearity**: strain-displacement relation is nonlinear (large deformation), equilibrium equations are nonlinear
3.  **Boundary condition nonlinearity**: contact-impact

<div class="grid cards" markdown>

-   **Linear**

    $$
    \mathbf{K} \mathbf{u}(t) = \mathbf{P}(t)
    $$

    In linear analysis, results can be scaled linearly (proportionally) with the load.

-   **Nonlinear**

    $$
    \mathbf{K}(\mathbf{u}(t), t) \mathbf{u}(t) = \mathbf{P}(\mathbf{u}(t), t)
    $$

    If the deformation is large, one needs to account the shape change.

</div>

## Nonlinear Analysis

<div class="grid cards" markdown>

-   **Linear**: small deformation

    $$
    \varepsilon_{ij} = \frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right)
    $$
    

-   **Nonlinear**: large deformation

    $$
    \varepsilon_{ij} = \frac{1}{2} \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} + \bbox[5px,border:2px dashed orange]{\frac{\partial u_k}{\partial x_i} \frac{\partial u_k}{\partial x_j}} \right)
    $$

</div>

:point_right: Nonlinear terms can account for large deformation accurately, but its formulation is much more complicated, and the computational cost is much higher.

## Contact-Impact

Contact-impact problem is one of the most difficult nonlinear problems.

- The response in contact-impact problems is non-smooth.
- When impact happens, the normal speed at the interface is incontinuous. The tangential speed may also be incontinuous if friction is involved.


Refine slave surface mesh to avoid intrusion.

---

## ABAQUS Nonlinear 实操

-   Step
    -   `Nlgeom` 打开
    -   Automatic stabilization（增加阻尼，帮助收敛。不得已的时候用）
        -   energy traction
        -   damping factor
    -   修改时间步长 Incrementation（关系到收敛）
        -   初始步长调小
        -   固定步长利于画图
        -   要反复尝试
-   Interaction
    -   Contact

:bulb: 如果每一步都输出，大的模型可能输出文件很大。可以在 Field Output 中