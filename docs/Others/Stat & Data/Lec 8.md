### 点估计

- 估计统计参数 $\theta$
- 样本：一系列测量值
- 统计量：基于样本建立的函数，只由样本决定

重要统计量：平均值 $\bar{X}$，方差 $S^2$

表示方式：$\hat{\theta}$

#### 矩估计法

若被估计的参数 $\theta$ 可用样本的矩表示，则可用样本矩得到 $\hat{\theta}$ 的估计.

#### 最大似然估计法（Maximum Likelihood Estimation, MLE）

若 $x_1,x_2,\cdots,x_n$ 符合概率密度函数 $f(x;\theta_1,\theta_2,\cdots)$，则整个样本的概率分布为

$$L(x_1,x_2,\cdots,x_n;\theta_1,\theta_2,\cdots) = \prod_{i=1}^n f(x_i;\theta_1,\theta_2,\cdots)$$

!!! success ""
    **做法**：对于一组观测值 $x_1,x_2,\cdots,x_n$，找到一组参数 $\theta_1,\theta_2,\cdots$，使得 $L(\theta_1,\theta_2,\cdots)$ 最大.

    即找到 $(\hat{\theta}_1,\hat{\theta}_2,\cdots)$，使得 $L(\hat{\theta}_1,\hat{\theta}_2,\cdots) = \max L(\theta_1,\theta_2,\cdots)$

    $$\frac{\partial \ln L}{\partial \theta_i} = 0$$

!!! note 例
    一组 $X$ 服从正态分布 $N(\mu,\sigma^2)$，通过极大似然法估计 $\mu,\sigma^2$.

    $$L = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(X_i-\mu)^2}{2\sigma^2}}$$

    $$
    \begin{aligned}
    \ln L &= \sum_{i=1}^n \ln \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(X_i-\mu)^2}{2\sigma^2}} \\
    &= -\frac{n}{2}\ln(2\pi) - n\ln\sigma - \sum_{i=1}^n \frac{(X_i-\mu)^2}{2\sigma^2}
    \end{aligned}
    $$
    
    $$
    \begin{aligned}
    \frac{\partial L}{\partial \mu} &= \frac{1}{\sigma^2}\sum_{i=1}^n (X_i-\mu) = 0 \\
    \frac{\partial L}{\partial \sigma} &= -\frac{n}{\sigma} + \frac{1}{\sigma^3}\sum_{i=1}^n (X_i-\mu)^2 = 0
    \end{aligned}
    \Longrightarrow
    \begin{aligned}
    \hat{\mu} &= \sum_{i=1}^n X_i/n = \bar{X} \\
    \hat{\sigma^2} &= \sum_{i=1}^n (X_i-\bar{X})^2/n
    \end{aligned}
    $$


#### 点估计的优良性准则

- 无偏性：$E(\hat{g}(x)) = g(\theta)$
  - 称 $\hat{g}$ 为 $\theta$ 的无偏估计
  - $\bar{x}$ 和 $S^2$ 是 $\mu$ 和 $\sigma^2$ 的无偏估计
  - 极大似然估计不一定是无偏的