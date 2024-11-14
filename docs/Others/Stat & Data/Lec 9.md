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









---

## 多元线性回归

### Python 中的线性代数

#### 矩阵

```python
import numpy as np
a = np.array([[1,2],[3,4]]) # 注意两个方括号
```

#### 初始化矩阵

```python
# 注意两个括号
A = np.zeros((2,2))
B = np.ones((2,2))
C = np.eye(2)   # 谐音 I
D = np.diag([1,2,3])
E = np.array(np.random.randint(10,size=(3,4)))  # 随机数矩阵
```

#### 取值

```python
A[1,1]  # a_22
A[1,:]   # 第二行
A[:,1]   # 第二列
A[:,1:3]    # 第二到第三列
```

#### 矩阵运算

```python
# 加法
A+B
# 每个元素的乘法（Element-wise）
A*B
# 每个元素的除法
A/B
```

- Broadcast

```python
# Broadcast
C = np.array(np.random.randint(3,size=(1,4)))
# C: 1x4, E: 3x4
C*E # C与E的每一行相乘

# F: 3x1
F = np.array(np.random.randint(3,size=(3,1)))

F*E # F与E的每一列相乘
```

##### 矩阵转置

```python
A.T
```

##### 矩阵乘法

```python
A = np.array(np.random.randint(10,size=(3,4)))
B = np.array(np.random.randint(10,size=(4,1)))

A@B
```

- 查看矩阵的形状

```python
A.shape
```

##### 矩阵求逆

```python
# 解 Ax = b
b = np.array(np.random.randint(10,size=(3,1)))
A = np.array(np.random.randint(10,size=(3,3)))

# 逆矩阵
A_inv = np.linalg.inv(A)
# 解方程
np.linalg.solve(A,b)
np.linalg.inv(A)@b  # 更慢
```

!!! tip "`solve(A,b)`与`inv(A)@b`"
    `solve`更快，因为它使用了更高效的算法

    计时比较：
    
    ```python
    %timeit np.linalg.solve(A,b)
    %timeit np.linalg.inv(A)@b
    ```

### 多变量的回归

- 若 $Y$ 由多个变量控制：

$$Y = b_0 + b_1X_1 + b_2X_2 + ... + b_pX_p + \epsilon$$

$b_k$ 为 $Y$ 对 $x_k$ 的回归系数.

- 写为 $\beta_0,\beta_1,...,\beta_p$ 的形式：

$$Y = \beta_0 + \beta_1X_1 + \beta_2X_2 + ... + \beta_pX_p + \epsilon$$

#### 多元线性函数的矩阵表示

- 用列向量来表示 $\beta$ 和 $Y$ 的测量值

$$\beta = 
\begin{pmatrix}
\beta_0 \\
\beta_1 \\
\vdots \\
\beta_p
\end{pmatrix}, Y =
\begin{pmatrix}
Y_1 \\
Y_2 \\
\vdots \\
Y_n
\end{pmatrix}$$

- 用矩阵表示 $X$ 的测量值

$$X =
\begin{pmatrix}
1 & x_{11} & x_{12} & \cdots & x_{1p} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_{n1} & x_{n2} & \cdots & x_{np}
\end{pmatrix}$$

残差

$$\delta = 
\begin{pmatrix}
y_1 - \beta_0 - x_{11}\beta_1 - \cdots - x_{1p}\beta_p \\
\vdots \\
y_n - \beta_0 - x_{n1}\beta_1 - \cdots - x_{np}\beta_p
\end{pmatrix} = Y - X\beta$$

$$\delta^2 = (Y - X\beta)^T(Y - X\beta)$$

#### 最小二乘法

- 求解 $\beta$ 使得 $\delta^2$ 最小

$$\frac{\partial \delta^2}{\partial \beta} = 0$$

- 矩阵求导（$x$ 为列向量）

$$\frac{\partial x^T a}{\partial x} = \frac{\partial a^T x}{\partial x} = a$$

$$\frac{\partial x^T A x}{\partial x} = (A + A^T)x$$

一顿推导TAT...

得到

$$X^T X \beta = X^T Y$$

$$\beta = (X^TX)^{-1}X^TY$$

令 $L = (X^T X), \sigma^2 L^{-1}$ 为 $\beta$ 的协方差矩阵，且有

- $\text{var}(\beta_0) = \sigma^2/n$
- $\text{var}(\beta_i) = \sigma^2 L_{ii}^{-1}$
- $\text{Cov}(\beta_i,\beta_j) = \sigma^2 L_{ij}^{-1}$

- $\sigma^2$ 仍然可用残差来估计

$$\delta^2 = \delta^T \delta s= (Y - X\beta)^T(Y - X\beta)$$

$$\sigma^2 = \frac{\delta^2}{n-p-1}$$

#### $\beta_j$ 的区间估计

$$(\hat{\beta}_j - \beta_j) / (\hat{\sigma}\sqrt{L_{jj}^{-1}}) \sim t(n-p-1)$$

