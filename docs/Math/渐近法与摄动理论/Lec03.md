# Local Analysis

Linear homogeneous ODE:

$$
\begin{equation} \label{eq:linear_homogeneous_ode}
    y^{(n)}(x) + p_{n-1}(x) y^{(n-1)}(x) + \ldots + p_1(x) y'(x) + p_0(x) y(x) = 0
\end{equation}
$$

Well-posedness of the IVP for this eq. may fail at singular points of $p_k(x)$.

Classification of singular points of an ODE (i.e. singular points of coefficients)

ODE on a complex plane

$$
y = y(z), \quad z \in \mathbb{C}$$
$$

is a sol. to equation \eqref{eq:linear_homogeneous_ode}

$y'(z)$ exists in a region of $\mathbb{C}$ $\implies y$ is analytic there.

So NOT all ODE makes sense when formulated in $\mathbb{C}$.

!!! example "Example"
    $$
    y'(x) = |x|
    $$

    is OK in $\mathbb{R}$.

    $$
    y(x) = \frac{1}{2} x |x| + c
    $$

Therefore, for $y'(z) = g(z, y(z))$ to make sense, we need $g(z, y(z))$ to be analytic in $z$.

If $y_1, y_2$ are two linearly independent solutions

$$
\begin{aligned}
    p_0(z) &= \frac{y_1'' y_2' - y_2'' y_1'}{y_1' y_2 - y_1 y_2'} \\
    p_1(z) &= \frac{y_2'' y_1 - y_1'' y_2}{y_1' y_2 - y_1 y_2'}
\end{aligned}
$$

- $p_0, p_1$: meromorphic functions with isolated poles

!!! example "Example"
    $$
    y'' - |z| y' + (|z| - 1) y = 0
    $$

    admits analytic solutions

Singular point of an ODE: non-analytic point of $p_k(z)$

## Ordinary Points

**the point where the coeff. are analytic at.**

Set of ordinary points is open in $\mathbb{C}$.

!!! example "e.g."
    $$
    y' = |z| y
    $$

    $|z|$ is nowhere analytic $\implies$ no ordinary points.

!!! example "e.g."
    $$
    x^5 y'' = y
    $$

    $p_0 = -\frac{1}{x^5}$, ordinary points: $\mathbb{C} \setminus \{0\}$

!!! summary "Conclusion"
    Near an ordinary point $x_0$, all the $n$ linearly independent solutions are analytic.

    Radius of convergence: $R \geq \text{dist}(x_0, \text{nearest singular point of } p_k(x))$

!!! example "Example"
    $$
    (x^2 + 1) y' + 2xy = 0
    $$

    $p_0 = \frac{2x}{x^2 + 1}$ is analytic near $x_0 = 0$. Singular points: $\pm \mathrm{i}$.

    $$
    y = C (1 + x^2)^{-1} = C \sum_{n=0}^{\infty} (-x^2)^n
    $$

    converges for $|x| < 1$, $R = 1$.

!!! example "Example"
    $$
    \left \{
    \begin{array}{l}
        y' = 2xy \\
        y(0) = 1
    \end{array}
    \right.
    $$

    $p_0 = -2x$ is analytic everywhere, $x_0 = 0$ is an ordinary point.

    Find a solution near $x_0 = 0$:

    $$
    y(x) = \sum_{n=0}^{\infty} a_n x^n \quad\text{(ansatz)}
    $$

    Plug into the ODE:

    $$
    \sum_{n=0}^{\infty} n a_n x^{n-1} = \sum_{n=0}^{\infty} 2 a_n x^{n+1}
    $$

    Compare coeff., $a_1 = 0$. For $n \geq 2$, we have the recursion relation

    $$
    n a_n = 2 a_{n-2} \implies a_{2k} = \frac{a_0}{k!}
    $$

    sol

    $$ y(x) = \sum_{n=0}^{\infty} \frac{a_0}{k!} x^{2k} = a_0 e^{x^2} $$

    By i.c., $a_0 = 1$. So

    $$y(x) = e^{x^2}$$

    is the unique sol. to the IVP.

!!! example "Airy Equation"
    $$
    y'' - x y = 0
    $$

    > **Physical background**: 1D time-dependent Schrödinger equation:
    > $$ -\frac{\hbar^2}{2m} \frac{d^2}{dx^2} \psi(x) + V(x) \psi(x) = i \hbar \frac{\partial}{\partial t} \psi(x, t) $$
    > 
    > where $\psi(x, t) = \psi(x) e^{-iEt/\hbar}, E = \hbar \omega$
    > 
    > $$ k^2(x) =\frac{2m (E - V(x)}{\hbar^2} $$
    > 
    > $$
    \begin{equation} \tag{Helmholtz eq.}
    \implies \psi''(x) + k^2(x) \psi(x) = 0
    \end{equation}
    > $$
    >
    > If $k^2(x) \sim \alpha(x - x_0)$ near $x_0$, then $x_0$ is called a turning point.
    > 
    > $$ \psi''(x) + \alpha(x - x_0) \psi(x) = 0 $$

    $x_0$ is an ordinary point, so try the ansatz

    $$ y(x) = \sum_{n=0}^{\infty} a_n x^n $$

    $$ \sum_{n=2}^{\infty} a_n n(n-1) x^{n-2} = \sum_{n=0}^{\infty} a_n x^{n+1} $$

    - $a_0, a_1$ are arbitrary constants, determined by i.c.
    
    $n = 2 \implies a_2 = 0$. The recursion relation is

    $$ (n+2)(n+1) a_{n+2} = a_{n-1}, \quad n = 1, 2, \ldots $$

    i.e.,

    $$ a_{n+3} = \frac{a_n}{(n+2)(n+1)}, \quad n = 0, 1, 2, \ldots $$

    we can get

    $$
    \begin{aligned}
        a_{3k} &= \frac{a_0}{(3k)(3k-1)(3k-3)(3k-4) \ldots 9 \cdot 8 \cdot 6 \cdot 5 \cdot 3 \cdot 2} \\
        &= \frac{a_0 \Gamma(\frac{2}{3})}{9^n n! \Gamma(n + \frac{2}{3})} \\
        a_{3k+1} &= \frac{a_1}{(3k+1)(3k)(3k-2)(3k-3) \ldots 10 \cdot 9 \cdot 7 \cdot 6 \cdot 4 \cdot 3} \\
        &= \frac{a_1 \Gamma(\frac{4}{3})}{9^n n! \Gamma(n + \frac{4}{3})} \\
        a_{3k+2} &= 0
    \end{aligned}
    $$

    So the general solution is

    $$
    y(x) = c_1 \sum_{k=0}^{\infty} \frac{x^{3k}}{9^k k! \Gamma(k + \frac{2}{3})} + c_2 \sum_{k=0}^{\infty} \frac{x^{3k+1}}{9^k k! \Gamma(k + \frac{4}{3})}
    $$

    where

    $$ c_1 = a_0 \Gamma(\frac{2}{3}), \quad c_2 = a_1 \Gamma(\frac{4}{3}) $$

    
## Singular Points

### Regular Singular Points

$x_0 \neq \infty$ is a regular singular point if not all $p_0(x), p_1(x), \ldots, p_{n-1}(x)$ are analytic at $x_0$, but $(x - x_0)^n p_0(x), (x - x_0)^{n-1} p_1(x), \ldots, (x - x_0) p_{n-1}(x)$ are analytic at $x_0$.

!!! summary "Conclusion"
    Near a regular singular point $x_0$, solutions are

    1. analytic
    2. has a pole
    3. has an algebraic or logarithmic branch point

    At least one solution has the form

    $$
    y(x) = (x - x_0)^{\alpha} A(x)
    $$

    where $\alpha \notin \mathbb{Z}$ and $A(x)$ is analytic at $x_0$. $\alpha$ is called an indicial exponent.

    $$
    A(x) = \sum a_n (x - x_0)^n
    $$

    then

    $$
    y(x) = \sum a_n (x - x_0)^{n + \alpha}
    $$

    this is called a **Frobenius series**.

!!! example "Example"
    $$
    x^3 y' = (x+1) y
    $$

    $x_0 = 0$ is an irregular singular point.

!!! example "Example"
    $$
    y(x) = C \tanh \left(\frac{x}{2}\right) = C \frac{e^x - 1}{e^x + 1}
    $$

    poles at $x = \pm \mathrm{i} \pi$, radius of convergence $R = \pi$.

Other solutions:

$$
y(x) = (x - x_0)^{\beta} B(x)
$$

- $\alpha, \beta$: indicial exponents

!!! example "Euler Equation"
    $$
    y'' + \frac{y}{4x^2} = 0
    $$

    > If we try Taylor series,
    > 
    > $$ y(x) = \sum a_n x^n $$
    > 
    > then we can only get the trivial solution $y(x) = 0$.

    $x_0 = 0$ is a regular singular point. $y(x) \equiv 0$ is a solution.

    Try the ansatz

    $$ y(x) = (x - x_0)^{\alpha} A(x) $$

    where $A(x)$ is analytic at $x_0$. Plug into the ODE:

    $$
    \sum_{n=0}^{\infty} 4 (n + \alpha)(n + \alpha - 1) a_n x^{n + \alpha - 2} + \sum_{n=0}^{\infty} a_n x^{n + \alpha} = 0
    $$

    $$
    \implies \alpha = \frac{1}{2}, a_n = 0 \text{ for } n \geq 1
    $$


### Frobenius Method for 2nd order ODEs

$$
y'' + \frac{p(x)}{x - x_0} y' + \frac{q(x)}{(x - x_0)^2} y = 0
$$

- $p(x), q(x)$: analytic near $x_0$
- $x_0$: regular singular point

Try the ansatz

$$
\begin{aligned}
    p(x) &= \sum_{n=0}^{\infty} p_n (x - x_0)^n \\
    q(x) &= \sum_{n=0}^{\infty} q_n (x - x_0)^n \\
    y(x) &= \sum_{n=0}^{\infty} a_n (x - x_0)^{n + \alpha}
\end{aligned}
$$

Plug into the ODE:

$$
\sum_{n=0}^{\infty} a_n (n + \alpha)(n + \alpha - 1) (x - x_0)^{n + \alpha - 2} + \frac{1}{x - x_0} \left(\sum_{n=0}^{\infty} p_n (x - x_0)^n \right) \left(\sum_{n=0}^{\infty} a_n (n + \alpha) (x - x_0)^{n + \alpha - 1} \right) + \frac{1}{(x - x_0)^2} \left(\sum_{n=0}^{\infty} q_n (x - x_0)^n \right) \left(\sum_{n=0}^{\infty} a_n (x - x_0)^{n + \alpha} \right) = 0
$$

$n = 0$ i.e. $(x - x_0)^{\alpha - 2}$ term:

$$
(\underset{P(\alpha)}{\underbrace{\alpha(\alpha - 1) + p_0 \alpha + q_0}}) a_0 = 0
$$

- $a_0 \neq 0$, arbitrary constant
- $P(\alpha) = 0$

$(x - x_0)^{n + \alpha - 2}$ terms:

$$

$$


If $P(\alpha) = 0$ & $P(\alpha + n) \neq 0$, we can get $a_n$ from solving the recursion relation. Then we get Frobenius series sol.

From $P(\alpha) = 0$, we get two roots $\alpha_1, \alpha_2$.

- If $\Re \alpha_1 > \Re \alpha_2$, then $P(\alpha_1 + n) \neq 0 \implies y(x) = \sum a_n (x - x_0)^{n + \alpha_1}$.

!!! example "Modified Bessel Equation"
    $$
    y'' + \frac{1}{x} y' - \left(1 + \frac{\nu^2}{x^2}\right) y = 0
    $$

    where $\nu \in \mathbb{C}$ is a constant.

    It is obvious that $x_0 = 0$ is a regular singular point.

    $$
    p(x) = 1, \quad q(x) = -(x^2 + \nu^2).
    $$

    Plug in $y(x) = \sum_{n=0}^{\infty} a_n x^{n + \alpha}$,

    $$
    a_0 [\alpha(\alpha - 1) + \alpha - \nu^2] = 0
    $$

    i.e.,

    $$
    P(\alpha) = \alpha^2 - \nu^2 = 0 \implies \alpha = \pm \nu
    $$

    Without loss of generality, assume $\Re \nu \geq 0$.

    $$
    P(\alpha_1 + 1) = (\alpha_1 + 1)^2 - \nu^2 \neq 0
    $$

    where $\alpha_1 = \nu$. $P(\alpha_1 + n) \neq 0$.

    $$
    \begin{aligned}
        \implies & a_1 = 0, \, a_3 = a_5 = \ldots = a_{2k+1} = 0, \\
        &a_{2n} = \frac{a_{2n-2}}{(\nu + 2n)^2 - \nu^2} \\
        \implies & a_{2n} = \frac{a_0 \Gamma(\nu + 1)}{2^{2n} n! \Gamma(n + \nu + 1)}
    \end{aligned}
    $$

    then

    $$
    y(x) = a_0 \Gamma(\nu + 1) \sum_{n=1}^{\infty} \frac{(x/2)^{2n + \nu}}{n! \Gamma(n + \nu + 1)}
    $$

    Set

    $$
    a_0 = \left(\frac{1}{2} \right)^{\nu} \frac{1}{\Gamma(\nu + 1)}
    $$

    we get the modified Bessel function of the first kind

    $$
    y(x) = \sum_{n=0}^{\infty} \frac{(x/2)^{2n + \nu}}{n! \Gamma(n + \nu + 1)} := I_{\nu}(x)
    $$

    Radius of convergence: $R = \infty$.

    For $\nu = 
    
### Irregular Singular Points


!!! tip "Some Notations for Asymptotic Analysis"
    when $x \to x_0$,

    - $f(x) \ll g(x) \iff f(x) = \omicron(g(x))$
    - $\displaystyle f(x) \sim g(x) \iff \lim_{x \to x_0} \frac{f(x)}{g(x)} = 1$

!!! example "Example"
    $$
    x^2 y'' + (1 + 3x) y' + y = 0
    $$

    We can derive that one sol. $y(x) \sim C_2 x^{-1} e^{1/x}$ as $x \to 0^+$.

    ---

    $$
    x^3 y'' = y
    $$

    $$
    \begin{aligned}
        y_1(x) &\sim C_1 x^{\frac{3}{4}} e^{2 x^{-\frac{1}{2}}} \\
        y_2(x) &\sim C_2 x^{\frac{3}{4}} e^{-2 x^{-\frac{1}{2}}}
    \end{aligned}
    $$

    - $e^{x^{-1}}, e^{2 x^{-1/2}}, e^{-2 x^{-1/2}}$ describes the **essential singularity** of the sol. at $x_0 = 0$, called {++controlling factors++}.

Inspired by the exponential controlling factors, we look for sol. of the form

$$
y(x) = e^{S(x)}
$$

Plug into the ODE,

$$

$$



Method of Dominant Balance:

$$
x^3 y'' = y
$$

$y(x) = e^{S(x)} \implies (S'' + S'^2) x^3 = 1$