> 2026/04/28 10:00
> 
> - 一般参数化下静电/静磁规律的张量表述
> - （三维）静电/静磁场 $\longrightarrow$（四维）电磁场

## 一般参数化下的张量表述

### 体元

话接上回，由于体元 $d V$ 是一个几何对象，它不应该依赖于参数化的选取

$$
\begin{aligned}
    d V &= \frac{1}{3!} \varepsilon_{ijk} \, d u^i \wedge d u^j \wedge d u^k \\
    &= \frac{1}{3!} \varepsilon_{ijk}' \, d u'^i \wedge d u'^j \wedge d u'^k \\
\end{aligned}
$$

这个花体的 $\varepsilon_{ijk}$ 应该是一个张量，且正比于 Levi-Civita 符号：$\varepsilon_{ijk} \propto \epsilon_{ijk}$. 平时见到的 $d V = \frac{1}{3!} \epsilon_{ijk} d x^i \wedge d x^j \wedge d x^k$，只是 $\varepsilon_{ijk}$ 在直角坐标下的一个取值形式。所以我们讨论这个张量的变换关系：

$$
\begin{aligned}
    \varepsilon_{ijk} &= \varepsilon'_{l m n} \frac{\partial u'^l}{\partial u^i} \frac{\partial u'^m}{\partial u^j} \frac{\partial u'^n}{\partial u^k} \\
    &= \varepsilon'_{ijk} \det \left( \frac{\partial u'}{\partial u} \right) \\
\end{aligned}
$$

上面的化简利用了 $\varepsilon'_{l m n}$ 的全反对称性，自然就是行列式。由于 $\varepsilon_{ijk} \propto \epsilon_{ijk}$，可以设 $\varepsilon_{ijk} = a \epsilon_{ijk}, \, \varepsilon_{ijk}' = a' \epsilon_{ijk}$. 也就是

$$
a = a' \det \left( \frac{\partial u'}{\partial u} \right)
$$

为了求出 $a$，我们再回头考虑度规：

$$
d s^2 = g_{ij} d u^i d u^j = g'_{kl} d u'^k d u'^l
$$

度规的变换关系

$$
g_{ij} = g'_{kl} \frac{\partial u'^k}{\partial u^i} \frac{\partial u'^l}{\partial u^j}
$$

由于是二阶张量，我们可以在脑海里用矩阵理解。设 $\| g_{ij} \|$ 是 $g_{ij}$ 的矩阵形式，前面的指标是行，后面的指标是列，在考虑矩阵乘法的顺序后，上式可写为

$$
\| g_{ij} \| = \left\| \frac{\partial u'^k}{\partial u^i} \right\|^T \| g'_{kl} \| \left\| \frac{\partial u'^l}{\partial u^j} \right\|
$$

取行列式，利用行列式乘积的性质，

$$
\det \| g_{ij} \| = \left( \det \left\| \frac{\partial u'}{\partial u} \right\| \right)^2 \det \| g'_{kl} \|
$$

记 $g = \det \| g_{ij} \|$，则

$$
\sqrt{|g|} = \sqrt{|g'|} \det \left( \frac{\partial u'}{\partial u} \right)
$$

> 保险起见，这里的根号里加了绝对值，不过在一般情况下讨论的变换都是保手性的，$g > 0$

对比前面 $a = a' \det \left( \frac{\partial u'}{\partial u} \right)$，得到

$$
\begin{aligned}
    \varepsilon_{ijk} &= \sqrt{|g|} \, \epsilon_{ijk} \\
    \varepsilon^{ijk} &= \frac{1}{\sqrt{|g|}} \, \epsilon^{ijk}
\end{aligned}
$$

这就是 Levi-Civita 的张量形式。

!!! note "重温恒等式 $\epsilon_{ijk} \epsilon_{klm} = \delta_{il} \delta_{jm} - \delta_{im} \delta_{jl}$"
    在张量形式下，需要把协变和逆变的 Levi-Civita 放在一起

    $$
    \varepsilon_{ijk} \varepsilon^{klm} = \epsilon_{ijk} \epsilon^{klm} = \delta_i^l \delta_j^m - \delta_i^m \delta_j^l
    $$

### Hodge 对偶

$$
\begin{aligned}
    \omega^{(k)} &= \frac{1}{k!} \omega_{i_1 i_2 \cdots i_k} d x^{i_1} \wedge d x^{i_2} \wedge \cdots \wedge d x^{i_k} \\
    \star \omega^{(k)} &= \frac{1}{k! (d-k)!} \omega_{i_1 i_2 \cdots i_k} \epsilon_{i_1 i_2 \cdots i_d} d x^{i_{k+1}} \wedge d x^{i_{k+2}} \wedge \cdots \wedge d x^{i_d}
\end{aligned}
$$

> 这里的上下标有点乱。如果是在直角坐标系，上下标就无所谓，因为度规 $g_{ij} = \mathbb{1}$，分量是一样的

现在要把 Levi-Civita 符号换成张量形式，因为 $\star \omega^{(k)}$ 的

