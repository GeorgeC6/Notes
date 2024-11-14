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

### 最小二乘法求解

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

### $\beta_j$ 的区间估计

$$(\hat{\beta}_j - \beta_j) / (\hat{\sigma}\sqrt{L_{jj}^{-1}}) \sim t(n-p-1)$$



```python
from sklearn import linear_model
import numpy as np

# x,y 为 1*20 的行向量

X = np.vstack([x,y]).T      # 20*2
ols = linear_model.LinearRegression()   # 创建线性回归对象. OLS: Ordinary Least Squares
model = ols.fit(X, z)    # 拟合

x_pred = np.linspace(0, 10, 50)  # 生成预测值
y_pred = np.linspace(0, 8, 50)
x_predmesh, y_predmesh = np.meshgrid(x_pred, y_pred)  # 生成网格

# flatten() 将多维数组转换为一维数组
model_viz = np.array([x_predmesh.flatten(), y_predmesh.flatten()]).T    # 2500*2
print(model_viz.shape)
predicted = model.predict(model_viz)

fig = plt.figure(figsize=(4, 4))
ax = fig.add_subplot(111, projection='3d')
ax.plot(x_predmesh.flatten(), y_predmesh.flatten(), predicted, , alpha=0.9)

ax.scatter(x, y, z, color='red')
```

#### 矩阵运算求线性回归系数

```python
ones = np.ones(20)
Xm = np.vstack([ones, x, y]).T
Y = np.array(z).reshape(20, 1)
b = np.linalg.solve(Xm.T @ Xm, Xm.T @ Y)
print(b)
```

#### 矩阵运算求线性回归误差

`statsmodels` 无脑求解：

```python
import statsmodel.api as sm

Xp = sm.add_constant(X) # Xp = np.vstack([ones, x, y]).T

# OLS 拟合
model = sm.OLS(z, Xp)
Fit_result = model.fit()
print(Fit_result.summary())
```

### 多元线性回归的假设检验

- 单个系数 $\beta_i$ 是否为0，由 $\beta_i$ 的 $t$ 分布得到：
  
  $$(\hat{\beta}_i - \beta_i) / (\hat{\sigma}\sqrt{L_{ii}^{-1}}) \sim t(n-p-1)$$

- 一系列 $\beta_1, \cdots, \beta_r (r<p)$ 为0，即 $X_1, \cdots, X_r$ 对 $Y$ 无显著影响
  - $H_0$: $\beta_1 = \cdots = \beta_r = 0$
  
  $$R_1 = \delta^2$$

  $$R_2 = \left.\delta'^2\right|_{\beta_1 = \cdots = \beta_r = 0} = \sum_{i = 1}^n (Y_i - \beta_0)^2$$

  - $\delta'^2$

### 转化为线性回归的模型

- 多项式回归

$$Y = \beta_0 + \beta_1 x + \beta_2 x^2 + \cdots + \beta_p x^p + \epsilon$$

- 指数拟合

```python
from sklearn.preprocessing import PolynomialFeatures

a = 0.3
b = -4
c = 10
d = 8

x2 = st.uniform(0, 10).rvs(40)
x2 = np.sort(x2)
y2 = 
```

---

### 偏相关

- 一组观测量 $X_i$ 中，相互之间有关联
  - 若 $X_3$ 为一个人的收入，$X_1, X_2$ 为ta在吃和穿上的花费
  - 观察到 $X_1, X_2$ 之间的正相关
  - 但实际上 $X_1, X_2$ 均由 $X_3$ 所带动，使得它们呈现正相关
  - 若能去掉 $X_3$ 的影响，$X_1, X_2$ 之间的实际相关性可能转为负相关
- 重新定义 $X_1', X_2'$
  
  $$X_1' = X_1 - L(X_3)$$
  
  $$X_2' = X_2 - L(X_3)$$

  $$\rho(X_1', X_2') = \frac{\rho_{12} - \rho_{13}\rho_{23}}{\sqrt{(1-\rho_{13}^2)(1-\rho_{23}^2)}}$$

- 将原本 $X$ 的相关矩阵写为
  
  $$\rho = \begin{bmatrix} 1 & \rho_{12} & \rho_{13} \\ \rho_{12} & 1 & \rho_{23} \\ \rho_{13} & \rho_{23} & 1 \end{bmatrix}$$

  记 $P_{ij}$ 为 