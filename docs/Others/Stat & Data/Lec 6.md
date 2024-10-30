平均值 $\bar{X} = \sum_{i=1}^n X_i/n$

样本方差 $S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$

!!! question "Motivating Questions"
    - $\bar{X}$ 的期望值和标准差？
    - $\mathbb{E}[S^2]$ ?
    - $\bar{X}$ 能用于估计 $\mu$ 吗？
    - $S^2$ 能用于估计 $\sigma^2$ 吗？
    - $\frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$ 符合什么分布？
    - $\frac{\bar{X}-\mu}{S/\sqrt{n}}$ 符合什么分布？
    - $\frac{(n-1)S^2}{\sigma^2}$ 符合什么分布？

### 大数定理

- 平均值收敛于期望值
$$
    \lim_{n\to\infty} P(|\bar{X}-\mu|>\epsilon) = 0, \forall \epsilon>0
$$
- 频率收敛于概率

### 中心极限定理

任意同分布的随机变量 $X_i$ 之和，符合正态分布。

若 $X_i$ 服从均值 $\mu$，方差 $\sigma^2$ 的分布，则

$$
\lim_{n\to\infty} P\left(\frac{Y-n\mu}{\sqrt{n}\sigma}\leq x\right) = \Phi(x)
$$

#### Python 验证

```python
# 指数分布 -> 正态分布
%matplotlib inline
import numpy as np
import scipy.stats as st
import matplotlib.pyplot as plt

alambda=2.
fig,ax = plt.subplots(1,2)
yarr=[]
for n in range(50,1000):
    x=st.expon.rvs(0,alambda,size=n)
    y=(sum(x)-n*alambda)/(np.sqrt(n)*alambda)
    yarr.append(y)
ax[0].hist(x,density=True,bins='auto')
bins = np.histogram_bin_edges(yarr, bins='auto')
ax[1].hist(yarr,bins=bins,density=True)
ax[1].plot(bins,st.norm.pdf(bins))
plt.tight_layout()
```

### 统计学三大函数

- t 分布
  - $\frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t_{n-1}$
  - 用于估计 $\mu$
- $\chi^2$ 分布
  - $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2_{n-1}$
  - 用于估计 $\sigma^2$
- F 分布
  - $X_i \sim N(\mu_1,\sigma_1^2), Y_i \sim N(\mu_2,\sigma_2^2)$, 则

$$\left[\sum_{i=1}^m \frac{(Y_i-\mu_2)^2}{(m-1)\sigma_2^2}\right]/\left[\sum_{i=1}^n \frac{(X_i-\mu_1)^2}{(n-1)\sigma_1^2}\right] \sim F_{m-1,n-1}$$

#### $\chi^2$ 函数

$$ k_n(x) = \frac{1}{2^{n/2}\Gamma(n/2)}x^{n/2-1}e^{-x/2} $$

- 若 $X_i$ 独立同分布，$X_i \sim N(0,1)$，则 $Y = \sum_{i=1}^n X_i^2 \sim \chi^2_n$
- $E(Y) = n$
- $\frac{(n-1)S^2}{\sigma^2} = \sum_{i=1}^n \frac{(X_i-\bar{X})^2}{\sigma^2} \sim \chi^2_{n-1}$

##### Python 绘图

```python
import scipy.stats as st
import numpy as np
import matplotlib.pyplot as plt

fig,ax = plt.subplots(2,1)

for df in range(2,20,5):
    x = np.linspace(st.chi2.ppf(0.01,df), st.chi2.ppf(0.99,df),100)
    p=ax[0].plot(x, st.chi2.pdf(x, df),
                 #d 整数，:3 占3位, 0 format中的第一个参数
        label='dof={0:3d}'.format(df)) #定义图例
    k=sum(st.norm.rvs(size=[df,1000])**2) #正态随机变量x，生成df x 1000组，计算Y=df个元素的平方和
    ax[0].hist(k,density=True,alpha=0.6,color=p[0].get_color()) #1000组Y的分布
    ax[1].plot(x/df, st.chi2.pdf(x, df)*df,
        label='dof={0:3d}'.format(df)) #chi2/ndf
ax[0].legend()
ax[1].set(xlabel='x/dof')
ax[0].set(xlabel='x')
fig.tight_layout()
```

#### t 函数

$$t_n(y) = \frac{\Gamma\left(\frac{n+1}{2}\right)}{\sqrt{n\pi}\Gamma\left(\frac{n}{2}\right)}\left(1+\frac{y^2}{n}\right)^{-\frac{n+1}{2}}$$

- 若 $X_1,X_2$ 独立，$X_1 \sim \chi^2_n, X_2 \sim N(0,1)$，则 $Y = \frac{X_2}{\sqrt{X_1/n}} \sim t_n$
- $\frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t_{n-1}$
