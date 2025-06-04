# 非线性方程的解法

!!! question
    $f(x) = 0$，在 $x \in [a, b]$ 上有零点 $x^*$，求 $x^*$.
    
    - $f$ 是具有一定光滑性的非线性函数

## 二分法

$f(x)$ 在 $[a, b]$ 上连续，且 $f(a) \cdot f(b) < 0$。由介值定理，$f(x)$ 必在 $(a, b)$ 上有零点。

假设 $f(x)$ 在 $[a, b]$ 有且仅有一根

1. 令 $a_0 = a, \, b_0 = b$，取 $c = \frac{a_0 + b_0}{2}$. 若 $f(a_0) \cdot f(c) < 0$，则取 $a_1 = a_0, \, b_1 = c$，否则取 $a_1 = c, \, b_1 = b_0$.
2. 已知 $x^* \in (a_k, b_k)$，取 $c_k = \frac{a_k + b_k}{2}$. 若 $f(a_k) \cdot f(c_k) < 0$，



第 $k$ 步误差限 $|e_k| = |x_k - x^*|$，则 $|e_{k+1}| = \frac{1}{2} |e_k|$. ![](../../images/tieba/good.png)

## Newton 法

假设 $f(x)$ 在其零点 $x^*$ 附近连续可微

$$
x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}
$$

> 作切线太昂贵！

!!! example "例"
    求以下函数的零点。

    $$
    y = x - x^{\frac{1}{3}} - 2
    $$

    ```matlab
    function y = func(x)
        y = x - x.^(1/3) - 2;
    end

    function y = dfunc(x)
        y = 1 - (1/3) * x.^(-2/3);
    end
    ```

    猜测 $x_0 = 3.5$，第一步 Newton 法迭代结果：

    ```matlab
    x1 = x0 - func(x0) / dfunc(x0);
    ```

    如何判断 $x_0$ 和 $x_1$ 哪个离 $x^*$ 更近？比较函数值 $|f(x_0)|$ 和 $|f(x_1)|$ 的大小。


## 弦截法（Secant）

!!! warning "代价"
    1. 需要两个初值
    2. 收敛从 $r = 2$ 下降到 $r = 1.618$（黄金分割数）
    3. 快出结果的时候，分子分母都很小，舍入误差大！稳定性不如 Newton 法。![](../../images/tieba/bored.png)

> 提高数值运算精度：`gmp`
>
> - 可以提供任意浮点精度
> - 速度很慢！用于不得不死磕的场景。

## 非线性方程组解法

### Newton 法

$$
\left \{
\begin{aligned}
    f_1(x_1, x_2, \ldots, x_n) &= 0 \\
    f_2(x_1, x_2, \ldots, x_n) &= 0 \\
    &\vdots \\
    f_n(x_1, x_2, \ldots, x_n) &= 0
\end{aligned}
\right.
$$

$\vec{x}_0 = (x_1, x_2, \ldots, x_n)^{(0)} \in \mathbb{R}^n$ 是初始猜测。引入记号 $\vec{F}(\vec{x}) = \vec{0}$.

瞎几把类比一下：

$$
\begin{aligned}
    x_{k+1} &= x_k - \frac{f(x_k)}{f'(x_k)} \\
    \implies \quad \vec{x}_{k+1} &= \vec{x}_k - \frac{\vec{F}(\vec{x}_k)}{\vec{F}'(\vec{x}_k)}
\end{aligned}
$$

有点扯淡了！

- $\vec{F}'(\vec{x})$ 是 Jacobi 矩阵 $\displaystyle J = \left[\frac{\partial f_i}{\partial x_j}\right]_{n \times n}$
- $\frac{1}{J}$ 除以一个矩阵？？写成逆 $J^{-1}$ 就行了 ![](../../images/tieba/heihei.png)

令 $\Delta \vec{x}_n = \vec{x}_{n+1} - \vec{x}_n$, 则

$$
\begin{aligned}
    \Delta \vec{x}_n &= - \vec{F}(\vec{x}_n) \cdot \left.J^{-1}\right|_{\vec{x} = \vec{x}_n} \\
    \implies \left.J\right|_{\vec{x} = \vec{x}_n} \cdot \Delta \vec{x}_n &= - \vec{F}(\vec{x}_n)
\end{aligned}
$$

!!! example "例"
    求以下方程组的解。

    $$
    \vec{F}(\vec{x}) = 
    \left \{
        \begin{aligned}
            4x_1^2 + 3x_2^2 - 1 &= 0 \\
            x_1^3 - 8x_2^3 - 1 &= 0
        \end{aligned}
    \right.
    $$

    初始猜测 $\vec{x}^{(0)} = (0.25, -0.5)^{\mathrm{T}}$.

    $$
    \vec{F}'(\vec{x}) =
    \begin{bmatrix}
        \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\[1ex]
        \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2}
    \end{bmatrix} = 
    \begin{bmatrix}
        8x_1 & 6x_2 \\[1ex]
        3x_1^2 & -24x_2^2
    \end{bmatrix}
    $$

    计算 $\Delta \vec{x}_0$：

    $$
    \begin{bmatrix}
        8x_1 & 6x_2 \\[1ex]
        3x_1^2 & -24x_2^2
    \end{bmatrix}_{\vec{x} = \vec{x}^{(0)}}
    \cdot \Delta \vec{x}_0 = - \vec{F}(\vec{x}^{(0)})
    $$

    解线性方程组，得到 $\Delta \vec{x}_0$，进而得到 $\vec{x}^{(1)} = \vec{x}^{(0)} + \Delta \vec{x}_0$.

    ---

    ```matlab
    x0 = [0.25; -0.5];
    err = norm(func(x0));
    tol = 1e-12;
    iter = 0;
    iter_max = 100;

    while (err > tol)
        dx = - jacobian(x0) \ func(x0);
        x1 = x0 + dx;
        err = norm(func(x1));
        x0 = x1;
        iter = iter + 1;

        if (iter > iter_max)
            break;
        end
    end

    function y = func(x)
        y = [4*x(1)^2 + 3*x(2)^2 - 1; x(1)^3 - 8*x(2)^3 - 1];
    end

    function J = jacobian(x)
        J = [8*x(1), 6*x(2); 3*x(1)^2, -24*x(2)^2];
    end
    ```

### 最速下降法

$$
\left \{
\begin{aligned}
    f_1(x_1, x_2, \ldots, x_n) &= 0 \\
    f_2(x_1, x_2, \ldots, x_n) &= 0 \\
    &\vdots \\
    f_n(x_1, x_2, \ldots, x_n) &= 0
\end{aligned}
\right.
$$

非线性方程组有没有零点很难说。如果考虑如下问题：

$$
\Phi(\vec{x}) = \sum_{i=1}^n f_i^2(x_1, x_2, \ldots, x_n) \to \min
$$

适定性会好很多。管他有没有零点，总有最小值的吧！![](../../images/tieba/tushe.png)