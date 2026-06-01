# Numerical Integration

## Newton-Cotes Formulas (Quadrature)

Lagrangian interpolation

$$
l_j(x) = \prod_{k=0, k \neq j}^n \frac{x - x_k}{x_j - x_k}
$$

Newton-Cotes formulas

$$
\int_a^b f(x) \, \mathrm{d} x \approx \sum_{j=0}^n C_j f(x_j), \quad C_j = \int_a^b l_j(x) \, \mathrm{d} x
$$


## Gaussian Quadrature


$$
2n - 1 \geq 2(p - 1) \implies n \geq \frac{2p - 1}{2}
$$

## Reduc


!!! warning "Hourglass Mode"
    Spurious zero-energy modes that can arise in under-integrated elements, leading to non-physical deformations.

    :point_right: Use full integration schemes or apply hourglass control techniques to mitigate this issue.

!!! info "Accuracy of Stress and Strain"
    1.  应变和应力的精确度比位移低
    2.  应力和应变在高斯点上的精确度更高

不光滑的应变区域边界 $\longrightarrow$ 光滑化