## 回归

Regression，即拟合

### 一元线性回归

n个数据点 $(X_i,Y_i)$，$i=1,2,...,n$, 认为 $Y$ 与 $X$ 之间存在线性关系, 即

$$Y_i = a + bX_i + \epsilon_i$$

其中 $\epsilon_i$ 为误差项.

#### 最小二乘法

希望 $Y$ 的预测值与测量值偏差最小

$$Q = \sum_{i=1}^n (Y_i - \hat{Y}_i)^2 = \sum_{i=1}^n (Y_i - a - bX_i)^2$$

对 $a,b$ 求偏导，令偏导数为0，解得

$$\begin{cases}
a = \bar{Y} - b\bar{X} \\
b = \frac{\sum_{i=1}^n (X_i - \bar{X})(Y_i - \bar{Y})}{\sum_{i=1}^n (X_i - \bar{X})^2}
\end{cases}$$

##### $a,b$ 的关系

$$\text{var}(a) = \frac{\sigma^2}{n}$$

<!-- $$\text{var}(b) = \frac{\sigma^2}{\sum_{i=1}^n (X_i - \bar{X})^2}$$ -->

$$\text{Cov}(a,b) = 0$$

##### Python 实例

```python
import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as st
import seaborn as sns

a = 3
b = 4
x = st.uniform(0,10).rvs(20)
y = [np.random.normal(a*i+b,5) for i in x]

sns.regplot(x=x,y=y,ci=95)
plt.show()
```

表示残差：

```python
sns.residplot(x=x,y=y)
```

残差趋势（for fun）

```python
sns.residplot(x=x,y=y,lowess=True)
```

### 线性回归的区间误差

- $\hat{\beta}_0$ 和 $\hat{\beta}_1$ 的区间估计
- $f(x_i)$ 的区间误差
- 函数 $f(x)$ 的区间误差
- $Y_i = f(x_i) + \epsilon_i$ 的区间误差

#### 参数 $\beta_0$ 和 $\beta_1$ 的参数估计

- 假设 $\epsilon_i$ 服从正态分布 $N(0,\sigma^2)$
- $\hat{\beta}_{0,1}$ 是 $\beta_{0,1}$ 的无偏估计，服从正态分布，且
  - $\text{var}(\hat{\beta}_0) = \sigma^2/n$
  - $\text{var}(\hat{\beta}_1) = \sigma^2/S_X^2$
- $(\beta_0 - \hat{\beta}_0) / 


#### $f(x_i)$ 的区间

$$f(x) = \beta_0 + \beta_1 (x - \bar{x})$$

- $\beta_0$ 的 $1-\alpha$ 区间 $[C1,C2]$
- $\beta_1$ 的 $1-\alpha$ 区间 $[C3,C4]$

#### $f(x)$ 的区间

!!! question "$f(x)$ 的 $1-\alpha$ 区间？"
    - 根据 $f(x_i)$ 的区间得到边界
    - 根据 $\beta_0$ 和 $\beta_1$ 的区间得到边界
    - 根据 $b_0$ 和 $b_1$ 的区间得到边界

    ```python
    nsigma = st.t(n-2).ppf(0.975)

    for j in (beta0-nsigma*std_beta0, beta0+nsigma*std_beta0):
        for i in (beta1-nsigma*std_beta1,beta1+nsigma*std_beta1):
            plt.plot([0,10],[i*0+j-meanx*i,i*10+j-meanx*i],color='C0')
    ```

##### 多变量的置信区间

- $\beta_0$ 和 $\beta_1$ 独立，各自为正态分布，方差分别为 $\sigma^2(\beta_0),\sigma^2(\beta_1)$
- 它们的联合分布为二维正态分布

$$f(x,y) = \frac{1}{\sqrt{(2\pi)^2|\Sigma|}}\exp\left(-\frac{1}{2}(x,y)\Sigma^{-1}(x,y)^T\right)$$






