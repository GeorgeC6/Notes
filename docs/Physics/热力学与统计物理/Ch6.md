# Chapter 6: Thermodynamics in action


## 6.1 Thermodynamic potentials

我们知道，内能 $U$ 是一个状态函数，其变化只与初末状态有关，在参数空间中是路径无关的。

我们可以给 $U$ 加上一些功共轭变量的组合 $p, V, T, S$ 来获得新的状态函数，称为**热力学势（thermodynamic potentials）**。

$$
\begin{aligned}
    H &= U + pV \\
    F &= U - TS \\
    G &= U + pV - TS \\
\end{aligned}
$$


!!! question "为什么引入这些状态函数？"
    1869 马休定理：在独立变量的适当选择下，只要一个热力学函数就可以把一个均匀的平衡态性质完全确定，这个函数称为特性函数。

    在不同的自然变量下，由特性函数出发就能知道所有的热力学性质。


| Function of state | Differential | Natural variables | First derivatives |
|-----------------|-------------|------------------|------------------|
| Internal energy $U$ | $dU = TdS - pdV$ | $U = U(S, V)$ | $T = \left(\frac{\partial U}{\partial S}\right)_V$, $p = -\left(\frac{\partial U}{\partial V}\right)_S$ |
| Enthalpy $H$ | $dH = TdS + Vdp$ | $H = H(S, p)$ | $T = \left(\frac{\partial H}{\partial S}\right)_p$, $V = \left(\frac{\partial H}{\partial p}\right)_S$ |
| Helmholtz free energy $F$ | $dF = -SdT - pdV$ | $F = F(T, V)$ | $S = -\left(\frac{\partial F}{\partial T}\right)_V$, $p = -\left(\frac{\partial F}{\partial V}\right)_T$ |
| Gibbs free energy $G$ | $dG = -SdT + Vdp$ | $G = G(T, p)$ | $S = -\left(\frac{\partial G}{\partial T}\right)_p$, $V = \left(\frac{\partial G}{\partial p}\right)_T$ |


热力学第二定律：任意孤立系统的熵总是增加的 $\Delta S \geq 0$. 而平衡态的熵不变（平衡态任何宏观量都不变），所以平衡态的熵达到最大值。

这指明了系统演化的方向：孤立系统朝着熵最大的方向演化。在满足 $\sum P_i = 1, \sum P_i E_i = U$ 的约束下，用拉格朗日乘子法求熵的极大值，即可得到平衡态的分布函数为玻尔兹曼分布。

如果不是孤立系统呢？将系统与环境视为一个整体，则

$$
\mathrm{d} S_{\text{total}} = \mathrm{d} S_{\text{sys}} + \mathrm{d} S_{\text{env}} \geq 0
$$

### 6.1.5 Constraints

考虑一个体积固定的密闭系统，与周围环境有热接触，保持温度为 $T$. 假如



!!! question "为什么引入状态函数？- 自发方向"
    | 约束 | 热力学势 | 自发方向 | 平衡条件 |
    | :--: | :--: | :--: | :--: |
    | $U, V$ | $S$ | $\mathrm{d} S \geq 0$ | $S$ 最大 |
    | $T, V$ | $F$ | $\mathrm{d} F \leq 0$ | $F$ 最小 |
    | $T, p$ | $G$ | $\mathrm{d} G \leq 0$ | $G$ 最小 |