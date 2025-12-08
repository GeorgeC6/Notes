

Calculate Stirling Series

$$
a_{n+1} = n a_n
$$

1. set $a_n = e^{S_n}$

$$
D S_n = \ln n
$$

controlling factor is $n^n$（5.3.13）

2. set $a_n = b_n n^n$，

$$
b_{n+1} (n+1)^{n+1} = n b_n n^n \implies b_{n+1} = \left( \frac{n+1}{n} \right)^{-(n+1)} b_n \implies \frac{b_{n+1}}{b_n} \to e^{-1}
$$

3. set $a_n = c_n e^{-n} n^n$，