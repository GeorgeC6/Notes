### 分布列

对于随机变量的每个取值，给出一个概率

$$P_X(x) = P(X=x)$$

### 分布函数

分布函数（累积分布函数 CDF）

$$F(x) = P(X\leq x)$$

### 常见离散随机变量

#### Bernoulli 随机变量

#### 二项随机变量（Binomial）

一个伯努利变量在 $n$ 次独立重复试验中成功的次数为 $k$，则

$$p(k) = \binom{n}{k} p^k (1-p)^{n-k}$$

二项分布的参数：$n,p$，记作$B(n,p)$.

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

x = np.random.binomial(10,0.3,100) # k,p,n
sns.histplot(x, discrete=True)
```

#### 几何随机变量（Geometric）

伯努利随机变量首次成功所需的次数

$$p(k) = (1-p)^{k-1}p$$

```python
x = np.random.geometric(0.3, 1000)
sns.histplot(x, discrete=True,stat='probability')
```

绘制 CDF：

```python
sns.ecdfplot(x)
```

#### 泊松随机变量（Poisson）

- 泊松分布与二项分布
  - 二项分布：$n$ 很大，$p$ 很小，则二项分布近似于泊松分布
  - $\lambda = np$
- 随机变量 $X$ 表示一段时间/空间内发生事件A的次数

$$p(k) = \frac{\lambda^k}{k!}e^{-\lambda}$$

```python
x = np.random.poisson(5, 1000)
```

### 期望

$$E(X) = \sum_{x} xP(X=x)$$

### 方差

$$\text{var}(X) = E(X^2) - E(X)^2$$


### $n$ 阶矩

$$E(X^n) = \sum_{x} x^n P(X=x)$$

- 一阶矩：期望
- 二阶矩：可算出方差

!!! tip "期望和方差的性质"
    若 $Y=aX+b$，则

    $$E(Y) = aE(X)+b$$

    $$\text{var}(Y) = a^2\text{var}(X)$$

#### 常见随机变量的期望值和方差

##### 均匀分布

$$
p_X(k) = 
\begin{cases}
\frac{1}{b-a+1}, & a\leq k\leq b \\
0, & \text{otherwise}
\end{cases}
$$

$E(X) = \frac{1}{b-a+1} \sum_{k=a}^b k = \frac{a+b}{2}$

$\text{var}(X) = \frac{(b-a+1)^2-1}{12}$

#### 多个随机变量的函数

$$E(g(X,Y)) = \sum_{x,y} g(x,y)P(x,y)$$

若 $g$ 是 $X,Y$ 的线性函数，则

$$E(aX+bY+c) = aE(X) + bE(Y) + c$$

$$E(XY) = E(X)E(Y)$$

$$\text{var}(X+Y) = \text{var}(X) + \text{var}(Y)$$

$$\text{var}(XY) = (留给读者自行证明)$$
