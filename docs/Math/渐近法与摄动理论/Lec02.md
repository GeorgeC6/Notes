# Difference Equations

Motivation: arises from discretization of ODEs/PDEs.

## Discrete Calculus

### Difference

$$
\begin{aligned}
    D a_n &= a_{n+1} - a_n := a_n^{(1)} \\
    D^2 a_n &= D a_{n+1} - D a_n = a_{n+2} - 2 a_{n+1} + a_n := a_n^{(2)} \\
    \vdots & \\
    D^k a_n &= D a_{n}^{(k-1)} = \sum_{j=0}^k (-1)^j \binom{k}{j} a_{n+k-j}
\end{aligned}
$$

### Discrete Integral

$$
b_n = \sum_{j = n_0}^{n} a_j + c_0
$$

- $D(f_n + g_n) = D f_n + D g_n$
- $D(f_n g_n) = f_{n+1} D g_n + g_n D f_n$
- $D\left(\frac{f_n}{g_n}\right) = \frac{g_n D f_n - f_n D g_n}{g_n g_{n+1}}$

| Continuous | Discrete |
|:----------:|:--------:|
| $y = x^k$ | $f_n = n(n+1)\ldots(n+k-1)$ |
| $(x^k)' = k x^{k-1}$ | $\begin{aligned} D f_n &= (n+1)\ldots (n+k) - n(n+1)\ldots (n+k-1) \\ &= k \underset{k-1 \text{ terms}}{\underbrace{(n+1)\ldots (n+k-1)}} \end{aligned}$ |
| $\int x^k \mathrm{d}x = \frac{x^{k+1}}{k+1} + c$ | $\sum_{j=n_0}^n j(j+1)\ldots (j+k-1)$ |

## Difference Equations

$N$-th order difference equation:

$$
D^N a_n = F(n, a_n, D a_n, \ldots, D^{N-1} a_n)
$$

- $D^k a_n$ depends on $a_n, a_{n+1}, \ldots, a_{n+k}$

We can omit the $D$ operator and rewrite it in algebraic form:

$$
a_{n+N} = G(n, a_n, a_{n+1}, \ldots, a_{n+N-1})
$$

- $a_{n+1} = D a_n + a_n$
- $a_{n+2} = D^2 a_n + 2 D a_n + a_n$

similar to ODEs, we have

- General solutions:
    $$
    a_n = a(n; \underset{\text{general const.}}{\underbrace{c_1, c_2, \ldots, c_N}})
    $$

!!! example "Factorial"
    $$
    a_{n+1} = n a_n
    $$

    general solution:

    $$
    a_n = c_1 (n-1)!
    $$

!!! example "Gamma function"
    $$
    \Gamma(n) = (n-1)!
    $$

    Definition:

    $$
    \Gamma(z) = \int_0^\infty t^{z-1} e^{-t} \, \mathrm{d}t, \quad \text{Re}(z) > 0
    $$

    Integration by parts gives

    $$
    \Gamma(z+1) = z \Gamma(z)
    $$

    extends to $\mathbb{C}$ except at $z = 0, -1, -2, \ldots$

### First Order

#### Homogeneous

$$
a_{n+1} = p(n) a_n
$$

take natural log on both sides:

$$
\ln a_{n+1} - \ln a_n = \ln p(n)
$$

$$
D(\ln a_n) = \ln p(n)
$$

thus,

$$
\ln a_n = \sum_{j=n_0}^{n} \ln p(j) + c_0
$$

the general solution is

$$
a_n = e^{c_0} \prod_{j=1}^{n} p(j)
$$

#### Inhomogeneous

$$
a_{n+1} = p(n) a_n + q(n)
$$

> For ODEs like
>
> $$
> y' = p(x) y + q(x)
> $$
>
> we have the multiplying factor $e^{\int p(x) \mathrm{d}x}$.

- summing factors

$$
\left(\prod_{j=1}^n p(j)\right)^{-1}
$$

$$
a_n = \prod_{j=1}^{n} p(j) \left(\sum_{k=1}^{n} \frac{q(k)}{\prod_{j=1}^{k} p(j)} + c_0\right)
$$

### Higher Order

$$
a_{n+N} + p_{N-1}(n) a_{n+N-1} + \ldots + p_1(n) a_{n+1} + p_0(n) a_n = 0
$$

Linear dependency of $N$ solutions by Wronskian

$$
\begin{aligned}    
    W_n &= W(n) = W\left[a^1, a^2, \ldots, a^N\right] \\[1ex]
    &= \det \begin{vmatrix}
        a^1(n) & a^2(n) & \ldots & a^N(n) \\[1ex]
        a^1(n+1) & a^2(n+1) & \ldots & a^N(n+1) \\
        \vdots & \vdots & \ddots & \vdots \\[1ex]
        a^1(n+N-1) & a^2(n+N-1) & \ldots & a^N(n+N-1)
    \end{vmatrix}
\end{aligned}
$$

!!! note "Abel's formula"
    $$
    W_n = W_{n_0} \prod_{j=n_0}^{n-1} p_0(j), \quad n > n_0
    $$

- IVP:

$$
\begin{array}{c}
    a_{n_0}, D a_{n_0}, D^2 a_{n_0}, \ldots, D^{N-1} a_{n_0} \\
    a_{n_0}, a_{n_0+1}, a_{n_0+2}, \ldots, a_{n_0+N-1}
\end{array}
$$

- BVP: $a_n$ at $N$ different $n$ values

#### Constant coeff. Linear Homogeneous

> Recall for linear homogeneous ODEs with constant coeff., we use $y = e^{r x}$ ansatz.

For difference equations, we use the ansatz

$$
a_n = r^n.
$$

- for single root $r$: $a_n = r^n$
- for multiple root $r$ of multiplicity $m$: $a_n = n^k r^n, k = 0, 1, \ldots, m-1$

#### Euler eq. (equidimensional eq.)

> ODE:
>
> $$
> x^N y^{(N)} + p_{N-1} x^{N-1} y^{(N-1)} + \ldots + p_1 x y' + p_0 y = 0
> $$

$x^N \leftrightarrow n(n-1)\ldots(n-N+1) = \Gamma(n+N) / \Gamma(n)$

Difference Euler eq.:

$$
\frac{\Gamma(n+N)}{\Gamma(n)} a_n^{(N)} + p_{N-1} \frac{\Gamma(n+N-1)}{\Gamma(n)} a_n^{(N-1)} + \ldots + p_1 n a_n^{(1)} + p_0 a_n = 0
$$

Try the ansatz $a_n = \frac{\Gamma(n+r)}{\Gamma(n)}$.

#### Inhomogeneous Linear Eq.

1. Variation of parameters
2. Reduction of order
3. 


## Generating Functions

Given $a_n$ (integer function), we can construct

$$
F(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n
$$

converges near $x_0$.

!!! example "e.g."
    $$
    (n+1)(n+2) a_{n+2} - 2(n+1) a_{n+1} - 3 a_n = 0, \quad \text{i.c. } a_0 = 2, a_1 = 2
    $$

    Let $F(x) = \sum_{n=0}^{\infty} a_n x^n$. Then

    $$
    F'' - 2 F' - 3 F = 0
    $$