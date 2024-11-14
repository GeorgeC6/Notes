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

### 矩阵运算求线性回归系数

```python
ones = np.ones(20)
Xm = np.vstack([ones, x, y]).T
Y = np.array(z).reshape(20, 1)
b = np.linalg.solve(Xm.T @ Xm, Xm.T @ Y)
print(b)
```

### 矩阵运算求线性回归误差

`statsmodels` 无脑求解：

```python
import statsmodel.api as sm

Xp = sm.add_constant(X) # Xp = np.vstack([ones, x, y]).T

# OLS 拟合
model = sm.OLS(z, Xp)
Fit_result = model.fit()
print(Fit_result.summary())
```

---

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