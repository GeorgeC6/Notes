# Drude 自由电子气模型

## 基本假设

$$
H = \sum_i \frac{p_i^2}{2 m} + \cancel{\frac{1}{2}\sum_{i,j} \frac{e^2}{|\vec{r}_i - \vec{r}_j|}} + \cancel{\sum_i V(\vec{r}_i)}
$$

三个大胆的假设：

1.  **自由电子近似**（忽略电子和晶格的相互作用）
    - 除了碰撞瞬间，电子和离子（正电荷背景）无相互作用
    - 离子实完全抹平，均匀分布在整个空间，只起到维持系统的电中性。
2.  **独立电子近似**（忽略电子-电子的相互作用）
    > 看起来非常粗糙，但是有库伦屏蔽所以也还合理
3.  **弛豫时间假设**（一给定电子在单位时间内受一次碰撞的几率为 $1/\tau$，代表电子每 $\tau$ 秒碰撞一次。$\tau$ 称为{++弛豫时间++}或{++平均自由时间++}）
    - 防止电子被无限加速
    - 碰撞后失去原先的速度记忆，回归热平衡（保持和环境温度对应的原速度）——引入散射机制
    - 关键：将电子的碰撞机制引入运动方程

## 电子的运动方程

电流密度与平均速度 $v$ 的关系：

$$
\begin{equation}
    j = -n e v = - \frac{ne}{m} p
\end{equation}
$$

在 $dt$ 时间内，电子被电场力 $F = -eE$ 加速

$$
d p = F dt
$$



得到运动方程

$$
\frac{d p(t)}{d t} = - \frac{p(t)}{\tau} + F(t)
$$

平衡后达到稳定速度，即漂移速度（drift velocity）$v_d$：

$$
\frac{dp}{dt} = 0 \implies v_d = - \frac{e \tau}{m} E
$$

回代到电流密度中，结合微观欧姆定律 $j = \sigma E$，得到电导率的微观表达式：

$$
\begin{equation} \label{eq:conductivity}
    \sigma = \frac{n e^2 \tau}{m}
\end{equation}
$$

!!! info "弛豫时间 & 平均自由程的量级"
    取 $n \sim 10^{23} \, \text{cm}^{-3}$，在室温下，弛豫时间 $\tau$ 的量级约为 $10^{-15}$ 秒。

    估计平均自由程 $l = v \tau$，其中 $v$ 为均方根速率（由能量均分定理 $\bar{\varepsilon} = \frac{1}{2} m \braket{v^2} = \frac{3}{2} k_B T$）在室温（300 K）下约为 $10^5 \, \text{m/s}$，得到 $l \approx 10^{-9} \sim 10^{-10} \, \text{m}$，与晶格相当。

    看似合理，实则还有电子与晶格的振动（声子），实际大 3 个数量级

!!! summary "思考总结"
    1.  电导率的公式里只有 $\tau$ 未知，其他参数都已知，因此总能符合实验数据，太随机


!!! success "Drude 模型“成功”解释了 Wiedemann-Franz 定律"
    许多金属的热导率 $\kappa$ 和电导率 $\sigma$ 在给定温度下的比值为常数：

    $$
    \frac{\kappa}{\sigma T} = L = 2.45 \times 10^{-8} \, \text{W} \Omega /\text{K}^2
    $$

    Drude 模型的解释：

    理想气体热传导系数

    $$
    \kappa = \frac{1}{3} c_V v l = \frac{1}{3} c_V v^2 \tau
    $$

    根据经典的能量均分定理，电子气的定容比热是常数 $c_V = \frac{3}{2} n k_B$，因此

    $$
    L = \frac{3}{2} \Big(\frac{k_B}{e}\Big)^2 = 1.11 \times 10^{-8} \, \text{W} \Omega /\text{K}^2
    $$

    > Drude 在当年推导的时候，电导率的分母多了个 $2$，算出来 $L = 2.22 \times 10^{-8} \, \text{W} \Omega /\text{K}^2$，闹麻了![](../../images/tieba/le.png)

!!! failure "Drude 模型无法解释电子比热"
    金属在低温下的比热 $C$ 与温度 $T$ 有关，而 Drude 模型得到 $c_V = \frac{3}{2} n k_B$ 是常数，完全失效。

    比热被严重高估，室温下仍高了 100 倍！

    !!! question "思考题"
        1.  电子在低温下可自由迁移，电导率变高，但为什么电子对热传导和比热的贡献这么小？
        2.  对比热的估计严重偏高，却能较好地解释 Wiedemann-Franz 定律？
            :point_right: 对电子平均动能估计过小！
            
            $$
            \frac{\kappa}{\sigma} = \frac{m \textcolor{crimson}{c_V v^2}}{3 n e^2}
            $$
            
            $v^2$ 小了 100 倍，刚好抵消了！

假设不合理的地方：

-   独立电子近似
    - 多体问题难以解决，属无奈之举
    - 除非是强关联材料，对于多数材料该近似有效
-   自由电子近似
    -   即使以现代量子的观点，对于金属来说也是很好的近似。金属中离子势场具有周期性，电子形成延展的布洛赫态 $\implies$ 平均自由程大
        -   布洛赫态电子波函数 $\psi_k(\mathbf{r}) = u_k(\mathbf{r}) \mathrm{e}^{i \mathbf{k} \cdot \mathbf{r}}$
        -   晶格周期函数 $u_k(\mathbf{r} + \mathbf{R}) = u_k(\mathbf{r})$
        -   因此布洛赫态满足 $\psi_k(\mathbf{r} + \mathbf{R}) = \mathrm{e}^{i \mathbf{k} \cdot \mathbf{R}} \psi_k(\mathbf{r})$，概率密度 $|\psi_k(\mathbf{r} + \mathbf{R})|^2 = |\psi_k(\mathbf{r})|^2$ 是一样的！
-   弛豫时间假设



1.  自由电子气是各向同性模型，无法解释各向异性行为（比如石墨的电导率在不同方向上差异很大，方解石的双折射现象）。说明固体存在微观结构，需要引入晶格
2.  