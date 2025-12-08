# Lecture 1: ODE Review

- ODE class: recipe-like methods
    - classify, guess, verify
    - limited scope
- Asymptotic methods: approximate

## Differential Equations

1.  Separable equations
    $$
    \begin{aligned}
        y'(x) &= A(x)B(y) \\
        \int \frac{1}{B(y)} \mathrm{d}y &= \int A(x) \mathrm{d}x \\
        \implies F(y) &= G(x) + c_0
    \end{aligned}
    $$

    - general solution: $y = y(x; c_0)$
    - Initial Value Problem (IVP)
2. $n$-th order ODE
    $$
    y^{(n)} = F(x, y, y', \ldots, y^{(n-1)})
    $$

    - linear
        $$
        y^{(n)} + p_{n-1}(x) y^{(n-1)} + \ldots + p_1(x) y' + p_0(x) y = f(x)
        $$

        - homogeneous: $f(x) = 0$


### Linear Homogeneous ODEs

**Wronskians**

$$
W(x) = W(y_1, y_2, \ldots, y_n) = \begin{vmatrix}
y_1 & y_2 & \ldots & y_n \\
y_1' & y_2' & \ldots & y_n' \\
\vdots & \vdots & \ddots & \vdots \\
y_1^{(n-1)} & y_2^{(n-1)} & \ldots & y_n^{(n-1)}
\end{vmatrix}
$$

- $\{y_1, y_2, \ldots, y_n\}$ are linearly dependent $\iff W(x) = 0$ for all $x$.
- $\{y_1, y_2, \ldots, y_n\}$ are linearly independent $\iff W(x) \neq 0$ except at isolated points.


**Abel's Formula**

$$
W'(x) = -p_{n-1}(x) W(x) \implies W(x) = W(x_0) \exp\left(-\int_{x_0}^x p_{n-1}(t) \mathrm{d}t\right)
$$

the general solution will remain to be general solution for all $x$ s.t., $p_{n-1}(x)$ is non-singular.

:point_right: **IVP is ill-posed if $W(x_0) = 0$.**

!!! example "Example"
    $$
    y'' - \frac{1+x}{x} y' + \frac{1}{x} y = 0
    $$

    $p_1(x) = -\frac{1+x}{x}$ is singular at $x=0$.

    Abel's formula gives $W(x) = Cx e^x$. At $x_0 = 0$, $W(0) = 0$.

    Check: 
    
    - $y(0) = 1, y'(0) = 2$ has no solution.
    - $y(0) = 1, y'(0) = 1$ has more than one solution.

> Boundary value problem (BVP) is global.

- $y_k(x) = e^{r_k x}$ ansatz for constant coefficient ODEs, where $r_k$ are roots of characteristic polynomial.
- Euler equations
    - e.g. $ y'' + \frac{y}{4x^2} = 0$
    - is invariant w.r.t. the scaling $x \mapsto ax$.
    - $y = x^r$ or $y = x^r (\ln x)^s$ ansatz.
- Reduction of order
    - given one solution $y_1(x)$, try $y = v(x) y_1(x)$.

### Inhomogeneous ODEs

$$
y(x) = \sum_{j=1}^n c_j y_j(x) + y_{\text{p}}(x)
$$

Finding $y_{\text{p}}(x)$:

1.  Variation of parameters
    $$
    y_{\text{p}}(x) = \sum_{j=1}^n c_j(x) y_j(x)
    $$
2.  Green's function
    for $Ly = f$, $G(x, a)$ at $a$ is defined as the solution to
    $$
    L G(x, a) = \delta(x - a)
    $$

!!! quote "Remarks on delta function"
    > $\delta(x - a)$ is the Dirac delta function, "derivative"[^1] of the Heaviside step function $H(x - a)$.

    [^1]: Weak derivative in the distribution theory.

    Note that the jump discontinuity of Heaviside function is ***milder*** than the $\infty$-singularity of $\delta$ function.

    - ramp function:

    $$
    \int_{-\infty}^x h(t-a) \, \mathrm{d}t = r(x - a) = \begin{cases}
        0, & x < a \\
        x - a, & x \geq a
    \end{cases}
    $$

    The following hierarchy shows the increasing smoothness (decreasing singularity):

    $$
    \delta(x - a) \to H(x - a) \to r(x - a) \to C^k \to C^\infty
    $$

    :point_right: integration is a smoothing operation.

    !!! note "Important property"
        $$
        \int_{-\infty}^{\infty} \delta(x - a) f(x) \, \mathrm{d}x = f(a)
        $$

        This is the weak definition of $\delta$ function.

        distributions are functionals on $C_0^\infty(\mathbb{R})$

        $$
        \mathcal{D}'(\mathbb{R}) = \{\text{linear functionals on } C_0^\infty(\mathbb{R})\}
        $$

        Dirac delta function can be expressed as a limit of smoother functions, e.g.

        $$
        \delta(x - a) = \lim_{\epsilon \to 0} \frac{1}{\sqrt{\pi \epsilon}} e^{-\frac{(x - a)^2}{\epsilon}}
        $$

Set $y(x) = \int_a^b G(x, a) f(a) \, \mathrm{d}a$.

Then
$$
\begin{aligned}
    L y(x) &= L \int_a^b G(x, a) f(a) \, \mathrm{d}a \\
    &= \int_a^b L G(x, a) f(a) \, \mathrm{d}a \\
    &= \int_a^b \delta(x - a) f(a) \, \mathrm{d}a = f(x)
\end{aligned}
$$

Solve $LG = \delta(x - a)$ 

e.g. $$L = \frac{\mathrm{d}^2}{\mathrm{d}x^2} + p_1(x) \frac{\mathrm{d}}{\mathrm{d}x} + p_0(x)$$

$$
G(x, a) = \begin{cases}
    A_1 y_1(x) + A_2 y_2(x), & x < a \\
    B_1 y_1(x) + B_2 y_2(x), & x > a
\end{cases}
$$

$$
G'' + p_1(x) G' + p_0(x) G = \delta(x - a)
$$

$G''$ should have a singularity similar to $\delta(x - a)$, that is,

$$
G'' \sim \delta(x - a).
$$

Likewise, $G'$ should have a jump discontinuity like $H(x - a)$, and $G$ should be continuous like $r(x - a)$.

Thus,

$$
A_1 y_1(a) + A_2 y_2(a) = B_1 y_1(a) + B_2 y_2(a)
$$

> **Bernoulli Eq.**
>
> $$y' + p(x) y = q(x) y^n$$
>
> substitution: $v = y^{1-n}$
>
> **Riccati Eq.**
>
> $$y' = a(x) y^2 + b(x) y + c(x)$$
>
> substitute: $$y = - \frac{W'(x)}{a(x) W(x)}$$
>
> $$\implies W'' - \left(\frac{a'(x)}{a(x)} + b(x)\right) W' + a(x) c(x) W = 0$$

!!! summary "Summary"
    1. For linear equations ($n$-th order), general sol. with $n$ constants.
        - Interval of well-posedness of the sol. extends from a local neighborhood of $x_0$ to the maximal interval where $p_k(x)$ are continuous.
    2. nonlinear equations, general sol. with $n$ constants + other sol.
        - sol. could develop autonomous singularities.