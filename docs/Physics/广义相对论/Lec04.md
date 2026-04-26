

张量 $(r, s)$ 在 $P$ 点

- 切空间 $T_p M$
- 余切空间 $T_p^* M$

$$
\underset{r}{\underbrace{T_p^* M \otimes \cdots \otimes T_p^* M}} \otimes \underset{s}{\underbrace{T_p M \otimes \cdots \otimes T_p M}} \mapsto \mathbb{R}
$$

$$
T_p(d x^{\mu_1}, \ldots, d x^{\mu_r}, \partial_{\nu_1}, \ldots, \partial_{\nu_s}) = \left.T^{\mu_1, \ldots, \mu_r}\right._{\nu_1, \ldots, \nu_s}
$$

$$
T_p = \left.T^{\mu_1, \ldots, \mu_r}\right._{\nu_1, \ldots, \nu_s} \, \frac{\partial}{\partial x^{\mu_1}} \otimes \cdots \otimes \frac{\partial}{\partial x^{\mu_r}} \otimes d x^{\nu_1} \otimes \cdots \otimes d x^{\nu_s}
$$


#### 把张量积推广到弯曲空间中

坐标卡 $T \in T_p^{(r,s)}(M), S \in T_p^{(k,l)}(M)$，则 $T \otimes S \in T_p^{(r+k,s+l)}(M)$

$$
\left.\left.\left.(T \otimes S)^{\mu_1, \ldots, \mu_r}\right._{\nu_1, \ldots, \nu_s}\right.^{\alpha_1, \ldots, \alpha_k}\right._{\beta_1, \ldots, \beta_l} = \left.T^{\mu_1, \ldots, \mu_r}\right._{\nu_1, \ldots, \nu_s} \, \left.S^{\alpha_1, \ldots, \alpha_k}\right._{\beta_1, \ldots, \beta_l}
$$

有 $T \otimes S \neq S \otimes T$

> 有的书把上下标写在一起，写成 $T^{\mu_1 \ldots \mu_r \alpha_1 \ldots \alpha_k}_{\nu_1 \ldots \nu_s \beta_1 \ldots \beta_l}$，但分开写在后面的讨论会更清晰


### 缩并（Contraction）

对 $T \in T_p^{(r,s)}(M)$，其中 $r, s \geq 1$，则有一个缩并操作 $C^i_j: T_p^{(r,s)}(M) \to T_p^{(r-1,s-1)}(M)$，定义为

$$
\left.T^{\mu_1, \ldots, \mu_r}\right._{\nu_1, \ldots, \nu_s} \xrightarrow{C^i_j} \left.T^{\mu_1, \ldots, \mu_{i-1}, \textcolor{orange}{\mu}, \mu_{i+1}, \ldots, \mu_r}\right._{\nu_1, \ldots, \nu_{j-1}, \textcolor{orange}{\mu}, \nu_{j+1}, \ldots, \nu_s}
$$

例子：$T \in T_p^{(1,1)}(M)$，则 $\left.T^{\mu}\right._{\nu} \mapsto \left.T^{\mu}\right._{\mu} = \mathrm{Tr}(T)$

### 对称化与反对称化

$T \in T_p^{(0,2)}(M)$，且 $T_{\mu \nu} = T_{\nu \mu}$

$$
\left \{
    \begin{aligned}
        S_{\mu \nu} &= \frac{1}{2} (T_{\mu \nu} + T_{\nu \mu}) \equiv T_{(\mu \nu)} \\
        A_{\mu \nu} &= \frac{1}{2} (T_{\mu \nu} - T_{\nu \mu}) \equiv T_{[\mu \nu]}
    \end{aligned}
\right.
$$

对于三个指标“夹心”型：$\frac{1}{2} (T_{\mu \nu \rho} + T_{\rho \nu \mu}) \equiv T_{(\mu |\nu| \rho)}$

若 $T_{\mu \nu} = \pm T_{\nu \mu}$，则 $T$ 为对称/反对称张量。

### Tangent Bundle

没有交集的并操作：$\sqcup$

$$
TM = \bigsqcup_{p \in M} T_p M
$$

坐标卡 $(x, v)$

- $x = (x^1, \ldots, x^n)$ 
- $v = (v^1, \ldots, v^n)$
- $v_p = v^\mu \partial_\mu \in T_p M$

$$
\phi: W \to \phi(U) \subset \mathbb{R}^{\textcolor{crimson}{2n}}
$$


### Fiber Bundle

描述性的定义：$E, B, F$ 都为微分流形，分别称为总空间（total space）、基空间（base space）和典型纤维（typical fiber）。

所有的物理场都可以用纤维丛来理解。

标量场 $f: M \to \mathbb{R}$

- $E = M \times \mathbb{R}$，整个空间都是直积的，得到的是平庸的纤维丛
- $t_{\alpha \beta}: F \mapsto F$ 恒等

!!! note "对偶向量"
    $v \in T_p M, \omega \in T_p^* M$，一种很自然的将 $v$ 和 $\omega$ 联系起来的方式是内积 $<v, \omega> \in \mathbb{R}$

    $$
    v = v^\mu \frac{\partial}{\partial x^\mu}, \quad \omega = \omega_\nu d x^\nu, \quad <v, \omega> = v^\mu \omega_\nu
    $$



### Metric tensor field

$(0,2)$ 张量场 $g|_p: T_p M \times T_p M \to \mathbb{R}$，满足

1.  对称性：$g_p(u, v) = g_p(v, u)$
2.  非退化性：固定$u$，有 $g_p(u, v) = 0, \, \forall v \in T_p M \implies u = 0$

$$
g_{\mu \nu}(p) = g_p \left(\frac{\partial}{\partial x^\mu}, \frac{\partial}{\partial x^\nu} \right)
$$

$$
g_p
 = g_{\mu \nu}(p) \, d x^\mu \otimes d x^\nu
$$

线元

$$
\begin{aligned}
    ds &= v dt = \sqrt{\|v\|^2} dt \\
    &= \Big| g_{\mu \nu} v^\mu v^\nu \Big|^{\frac{1}{2}} dt \\
    &= \Big| g_{\mu \nu} \frac{d x^\mu}{dt} \frac{d x^\nu}{dt} \Big|^{\frac{1}{2}} dt = \Big| g_{\mu \nu} d x^\mu d x^\nu \Big|^{\frac{1}{2}}
\end{aligned}
$$

所以 $d s^2 = g_{\mu \nu} d x^\mu d x^\nu$

!!! info "Sylvester's Law"
    对于二次型 $Q = \sum_{i,j = 1}^r a_{ij} x_i x_j$，存在一个可逆矩阵 $S$，使得

    $$
    S Q S^{-1} = (y^1)^2 + \cdots + (y^p)^2 - (y^{p+1})^2 - \cdots - (y^{p+q})^2
    $$
    
    其中 $p + q = r$.

    - 若 $p = n, q = 0$，则 $g$ 是正定的，称为**黎曼度规（Riemannian metric）**
        - Signature：$(+,+,\ldots,+)$
        - $(M, g)$ 是一个**黎曼流形（Riemannian manifold）**
    - 若 $p = n - 1, q = 1$，则 $g$ 是 Lorentzian 的，称为**洛伦兹度规（Lorentzian metric）**
        - Signature：$(-,+,\ldots,+)$
        - $(M, g)$ 是一个**伪黎曼流形（pseudo-Riemannian manifold）**


---

:sob: 物理时间到！！

$$
\text{Spacetime is a pseudo-Riemannian manifold.}
$$

狭义相对论：$M = \mathbb{R}^{1,3}, \, d s^2 = -dt^2 + dx^2 + dy^2 + dz^2$

本征时间（固有时）：与参考系无关

$$
\Delta \tau = \int_\gamma \sqrt{-d s^2} = \int_\gamma \sqrt{dt^2 - dx^2} = \int_\gamma dt \sqrt{1 - v^2}
$$

其中 $\gamma$ 是连接事件 $A$ 和 $B$ 的世界线，$t$ 为坐标时（coordinate time）。并且有

$$
dt = \frac{d \tau}{\sqrt{1 - v^2}} > d \tau
$$

!!! info "Classification of vectors $v \in T_p M$"
    1.  按照 $g_p(v, v)$ 的符号分类
        -   $g_p(v, v) > 0$，类空（spacelike）
        -   $g_p(v, v) = 0$，类光（lightlike），又称为零向量（null vector）
        -   $g_p(v, v) < 0$，类时（timelike）
    2.  按照粒子的质量分类
        -   $m \neq 0$：类时
        -   $m = 0$：类光


Poincaré Transformation

$$
\begin{equation}
    x'^\mu = \Lambda^\mu_{\phantom{\mu}\nu} x^\nu + a^\mu
\end{equation}
$$

等价于 $g_{\mu \nu} = \eta_{\mu \nu} = \mathrm{diag}(-1, +1, +1, +1)$.

线元的变换：$d s^2 = \eta_{\mu \nu} d x^\mu d x^\nu = \eta_{\rho \sigma} d x'^\rho d x'^\sigma$.




### Differential $p$-forms

全反对称（totally antisymmetric）$(0, p)$ 张量场 $\omega$

-   $0$-form：标量场
-   $1$-form：$\omega \in T^* M$，$\bigwedge^1(M) = \mathrm{span} \{dx^1, \ldots, dx^n\}$
-   $2$-form：$d x^\mu \otimes d x^\nu - d x^\nu \otimes d x^\mu \equiv d x^\mu \wedge d x^\nu$，$\bigwedge^2(M) = \mathrm{span} \{d x^\mu \wedge d x^\nu | 1 \leq \mu < \nu \leq n\}$
-   一般情形
    -   $p$-form：$\omega = \frac{1}{p!} \omega_{\mu_1 \ldots \mu_p} d x^{\mu_1} \wedge \cdots \wedge d x^{\mu_p}$
    -   $q$-form：$\eta = \frac{1}{q!} \eta_{\nu_1 \ldots \nu_q} d x^{\nu_1} \wedge \cdots \wedge d x^{\nu_q}$
    -   $(p+q)$-form：$\omega \wedge \eta$

        $$
        (\omega \wedge \eta)_{\mu_1 \ldots \mu_p \nu_1 \ldots \nu_q} = \frac{(p+q)!}{p! q!} \omega_{[\mu_1 \ldots \mu_p} \eta_{\nu_1 \ldots \nu_q]}
        $$

        - 交换律：$(\omega \wedge \eta) = (-1)^{p \cdot q} (\eta \wedge \omega)$
        - 结合律：$\omega \wedge (\eta \wedge \xi) = (\omega \wedge \eta) \wedge \xi$

外微分