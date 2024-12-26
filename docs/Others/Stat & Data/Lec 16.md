# 粒子物理实验中的统计学

!!! abstract 粒子物理简介
    - Quarks *6
    - Leptons *6
    - Bosons *5
    - Higgs boson

    SM

    大型强子对撞机（LHC）

    - ATLAS
    - CMS
    - ALICE
    - LHCb

    25 ns 碰撞一次，数据量巨大

> A portrait of the Higgs boson in the CMS experiment ten years after the discovery

## 假设检验

自旋 $0^+$ / $1^+$

## ROOT 简介

CERN 开发的数据分析 Python 库

## 系统误差

Nuisance parameters：影响参数估计，但不是我们关心的物理量

Systematic uncertainties

!!! example "单摆"
    测量周期：测量 $N$ 个周期的时间 $\tau$，计算平均周期 $T = \tau / N$
    测量摆长：如果尺子每次给出的结果

### 用似然函数和高斯限定条件纠正

$$L(\mu,\theta) = \prod_c \prod_i P_c(x_i|\mu,\theta) \cdot \prod_j C_j(g_j|\theta_j)$$

- $\mu$：感兴趣的物理量（POI）
- $P_c(x_i|\mu,\theta)$：Channel c 的概率密度函数（PDF）
- $C_j(g_j|\theta_j)$：额外的概率密度函数，不依赖于数据
- $x_i$：测量量（observables）
    - binned dataset: each entry contains the contents of a bin
    - unbinned dataset
- $\theta$：Nuisance parameters（NPs）
    - 系统误差的主要来源

### Likelihood ratio:

$$\Lambda(\mu) = \frac{L(\mu,\hat{\hat{\theta}(\mu)})}{L(\hat{\mu},\hat{\theta})}$$

### Discovery Significance

- In the asymptotic limit (large N), the PLR, $\Lambda(\mu) = \frac{L(\mu,\hat{\hat{\theta}(\mu)})}{L(\hat{\mu},\hat{\theta})}$, gives the compatibility between $\mu$ and $\hat{\mu}$ hypothesis.

### Discovery with toys

- Toy MC(Monte Carlo pseudo-experiments) can be generated directly from the components of the likelihood function.