# 共轭梯度法

向量 $d_0, d_1$ 正交的条件是

$$\vec{d}_0 \perp \vec{d}_1 \iff \left\langle \vec{d}_0, \vec{d}_1 \right\rangle = 0 \iff d_0^T (\lambda I) d_1 = 0$$

其中 $\lambda$ 是任意常数。

$A$-共轭：

$$\left\langle \vec{d}_0, A\vec{d}_1 \right\rangle = d_0^T A d_1 = 0$$



---

## 不完全 Cholesky 分解

$A$ spd. 

若直接 Choelsky 分解，会使得 $L$ 变成满阵！

若 $a_{ij}=0$，使 $l_{ij}=0$

$$
A = \tilde{L} \tilde{L}^T + R
$$

$$
\begin{aligned}
Ax = b \iff L^{-1} A L^{-T} L^T x &= L^{-1} b \\
\approx \tilde{L}^{-1} A 
\end{aligned}
$$

> 对角占优阵，一定是 spd 的。
>
> SOR会打破对称性，实际使用SSOR