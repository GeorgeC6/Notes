- 无穷多取值
- 概率分布 $\Longrightarrow$ **概率密度函数 PDF**
  
$$\int f(x)dx = 1$$

- **累积分布函数 CDF**
  
$$f(x) = F'(x)$$

$$F(x) = P(X\leq x) = \int_{-\infty}^x f(t)dt$$

!!! note "例"
    - 质子中不同类别的夸克和胶子（部分子）携带动量比例的概率密度

### 连续均匀分布（Uniform）

$$f(x) =
\begin{cases}
\frac{1}{b-a}, & a\leq x\leq b \\
0, & \text{otherwise}
\end{cases}
$$

$$E(X) = \int_{a}^b x\frac{1}{b-a}dx = \frac{a+b}{2}$$

$$\text{var}(X) = \int_{a}^b x^2\frac{1}{b-a}dx - \left(\frac{a+b}{2}\right)^2 = \frac{(b-a)^2}{12}$$

#### Python 实现

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as st

x = st.uniform(2,5).rvs(size=1000) # 2-7
```

!!! warning ""
    `st.uniform(2,5)` 表示 $[2,7)$

- 绘制 PDF

```python
x = np.arange(2,7,0.01)
sns.histplot(x, bins=x, stat='density')
f = st.uniform(2,5).pdf(x)
plt.plot(x, f, 'r')
```

### 指数分布（Exponential）

$$f(x) =
\begin{cases}
\lambda e^{-\lambda x}, & x\geq 0 \\
0, & \text{otherwise}
\end{cases}
$$

- 描述某事件发生所需要的时间
- 单位时间事件发生的次数平均值为 $\lambda$，时长 $t$ 之内发生的总次数为 $\lambda t$. 实际观察到的次数符合泊松分布：
  $$g(n) = \frac{e^{-\lambda t}(\lambda t)^n}{n!}$$

  设 $0 \sim t$ 内事件未发生，其概率为 $g(0) = e^{-\lambda t}$.

  $t \sim t+dt$ 内事件发生一次的概率为 


### 正态分布（Normal）/ 高斯分布（Gaussian）

$$f(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

- 期望值 $\mu$
- 标准差 $\sigma$

#### Python 实现

```python
x = st.norm(0,1).rvs(size=1000)
```

!!! tip "二维正态分布"
    $$f(x,y) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}\text{exp}\left[{-\frac{1}{2(1-\rho^2)}\left(\frac{(x-\mu_1)^2}{\sigma_1^2} + \frac{(y-\mu_2)^2}{\sigma_2^2} - \frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}\right)}\right]$$

    协方差矩阵
    
    $$\Sigma = \begin{bmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma_2 & \sigma_2^2 \end{bmatrix}$$

    **Python 实现**

    ```python
    cov = np.array([[1,0.5],[0.5,1]])

    x,y = np.mgrid[-5:5:0.1,-5:5:0.1]
    pos = np.dstack((x,y))

    # 二维正态分布的pdf
    rv = st.multivariate_normal([xmean,ymean], cov)
    z = rv.pdf(pos)

    ax.plot_surface(x, y, z, cmap='viridis')
    ```

### 条件分布

```python
rv = multivariate_normal([xmean,ymean], cov)
fig = plt.figure()
ax = fig.add_subplot(111)

x1d = np.arange(xmin,xmax,.1)
y1d = np.arange(-2,-2,.06)

for yval in [-2,-1,0]:
    z=[]
    for i in x1d:
        z.append(rv.pdf([i,yval]))
    con=ax.plot(x1d,z/sum(z),label="y={:.1f}".format(yval))
plt.legend()
```

### 边缘分布

```python
from scipy.stats.contingency import margins

x1d = np.arange(xmin, xmax, 0.1)
y1d = np.arange(ymin, ymax, 0.1)

xmargin, ymargin = margins(rv.pdf(pos))

ax3.plot(x1d,xmargin/sum(xmargin),y1d,ymargin.T/sum(ymargin.T))
```

### 协方差和相关系数

- 协方差 $\text{cov}(X,Y) = E[(X-\mu_X)(Y-\mu_Y)] = E(XY) - E(X)E(Y)$
  - 若 $X,Y$ 独立，则 $\text{cov}(X,Y) = 0$
- 相关系数 $\rho = \frac{\text{cov}(X,Y)}{\sigma_X\sigma_Y}$，也可记作 $\text{corr}(X,Y)$
  - 协方差矩阵 $\Sigma = \begin{bmatrix} \text{var}(X) & \text{cov}(X,Y) \\ \text{cov}(X,Y) & \text{var}(Y) \end{bmatrix}$
  - 二维正态分布的 $\text{Cov}(X,Y) = \rho\sigma_X\sigma_Y$, $\text{Corr}(X,Y) = \rho$

### 二维离散随机变量生成

```python
cov = np.array([[2.0, 0.3], [0.3, 0.5]])

rns = multivariate_normal.rvs(mean=[xmean,ymean], cov=cov,size=10000)
g = sns.jointplot(x=rns[:,0],y=rns[:,1])
g.plot_joint(sns.kdeplot, color="r", levels=6) # 等高线
```