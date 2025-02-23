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