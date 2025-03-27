# 误差的传播

有一个计算公式：

$$y = f(x_1, x_2, \cdots, x_n)$$

其中 $x_1, x_2, \cdots, x_n$ 是输入，$y$ 是输出。

!!! question "Motivating Questions"
    - 输入有误差 $x_1^*, x_2^*, \cdots, x_n^*$，和输出的误差 $y^*$ 关系？
    - $e(x_1^*), e(x_2^*), \cdots, e(x_n^*)$ 和 $e(y^*)$ 关系？
    - $|e_{\mathrm{r}}(x_i^*)| \leq \varepsilon, \, i = 1, 2, \cdots, n$，$|e(y^*)| \leq ?$

$f$ 需要的性质：在 $(x_1^*, x_2^*, \cdots, x_n^*)$ 附近可微。

$$
\begin{aligned}
e(y^*) &= y - y^* = f(x_1, x_2, \cdots, x_n) - f(x_1^*, x_2^*, \cdots, x_n^*) \\
&\approx \vec{k} \cdot (x_1 - x_1^*, x_2 - x_2^*, \cdots, x_n - x_n^*) \\
&= k_1 (x_1 - x_1^*) + k_2 (x_2 - x_2^*) + \cdots + k_n (x_n - x_n^*) \\
\end{aligned}
$$

- 一元

$$y = y^* + k (x - x^*)$$

$$\Delta y = k \Delta x$$

- 二元

$$y = y^* + k_1 (x_1 - x_1^*) + k_2 (x_2 - x_2^*)$$

$$\Delta y = k_1 \Delta x_1 + k_2 \Delta x_2$$

$$\Rightarrow k_1 = \frac{\Delta y}{\Delta x_1} - \frac{k_2 \Delta x_2}{\Delta x_1} \to k_1 = \frac{\partial y}{\partial x_1} + 0 = \frac{\partial y}{\partial x_1}$$

- 多元

$$k_i = \frac{\partial y}{\partial x_i}, \quad i = 1, 2, \cdots, n$$

$$e(y^*) = \sum_{i=1}^{n} \left.\frac{\partial y}{\partial x_i}\right|_{(x_1^*, x_2^*, \cdots, x_n^*)} (x_i - x_i^*) + o(||x - x^*||)$$

!!! example "例子"
    **+**：输入 $x_1, x_2$，输出 $f(x_1, x_2) = x_1 + x_2$。

    $$
    \begin{aligned}
    e(x_1 + x_2) &= \frac{\partial f}{\partial x_1} e(x_1) + \frac{\partial f}{\partial x_2} e(x_2) \\
    &= 1 \cdot e(x_1) + 1 \cdot e(x_2) \\
    &= e(x_1) + e(x_2)
    \end{aligned}
    $$

    此即书上 (1.7) 式。

## 算法的数值稳定性

计算

$$I_n = \int_0^1 \frac{x^n}{x+5} \, dx \quad (n = 0, 1, 2, \cdots)$$

可以凑出

$$I_n + 5I_{n-1} = \int_0^1 \frac{x^n + 5x^{n-1}}{x+5} \, dx = \int_0^1 x^{n-1} \, dx = \frac{1}{n}$$

且（并没有证明地）有（其实也没啥用）

$$\frac{1}{6(n+1)} \leq I_n \leq \frac{1}{5(n+1)}$$

由此可以得到两种算法：

- 算法一：向上递推

$$I_n = \frac{1}{n} - 5I_{n-1}$$

其中 $I_0 = \int_0^1 \frac{1}{x+5} \, dx = \ln 1.2$。

**误差传播**：$e_n = -5e_{n-1}$，是**不稳定**的算法，无法通过仅仅提高初值精度来达到稳定！

!!! note ""
    物理上不稳定的问题不可能找到绝对精确的稳定算法！
    
    但是提高初值精度是有意义的，例如台风预测的计算浮点数可以达到数十万位。

- 算法二：向下递推

$$I_{k-1} = \frac{1}{5} \left( \frac{1}{k} - I_k \right) \quad (k = n, n-1, \cdots, 1)$$

通过 $I_n^* \approx \frac{1}{2} \left[ \frac{1}{6(n+1)} + \frac{1}{5(n+1)} \right]$ 计算 $I_{14}$，再向下递推。

> 实际上，$I_{14}$（或者 $I_{100}$ 啥的都行）随便取一个数也行![](../../images/tieba/huaji.png)

**误差传播**：$e_{k-1} = \frac{1}{5} e_k$

> MATLAB `eps` 命令可以给出计算机的机器精度。
>
> 大致为 2.2204e-16。
>
> 如果要看单精度：`eps('single')`。