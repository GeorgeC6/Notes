# 机器学习 Pt.II: 二元分类

## 二元分类

- 将数据分为 A、B 两类
- 输入：特征向量 $(x_{1i}, x_{2i})$
- 输出：$(y_i \in \{0, 1\})$

假设函数：如何找到一个好的分类器？

### 单特征值情形

```python
X_train, X_test, y_train, y_test = train_test_split(
    iris_df.loc[iris_df["target"]!=0, ["petal width (cm)","petal length (cm)"]], iris.target[iris.target!=0], test_size=0.5, shuffle=True
)
# plt.scatter(X_train["petal width (cm)"], X_train["petal length (cm)"], c=y_train, cmap=plt.cm.Set3, s=40, edgecolors="k")
```

#### 阶梯函数

- 定义

$$f(x) = 
\begin{cases}
1, & x \geq 0 \\
0, & x < 0
\end{cases}$$

- Python 函数

```python
np.heaviside()

# heaviside(x1, x2) = 
# 1, x1 >= x2
# 0, x1 < x2
```

#### Logistic（Sigmond）函数

- 定义

$$f(x) = \frac{1}{1+e^{-x}}$$

- Python 函数

```python
from scipy.special import expit

expit()
```

- $y$ 只能取 0,1 两个值，将函数 $f(x)$ 看做 $x$ 取特定值时，$y=1$ 的概率
  - $f(x) = P(y=1|x)$

#### Logistic 函数的拟合

- 对 $x$ 取某种函数

#### 最小二乘法求解

残差最小化：

$$\delta^2 = \left[y - f(z)\right]^2$$

- 损失/代价函数（Loss/Cost Function）

#### 最大似然法

- 找到 $b_0, b_1$ 使得整体数据发生的概率最大

$$
\begin{aligned}
L &= \prod_{i=1}^n P(y = 1|x_i) \prod_{i=1}^n P(y = 0|x_i) \\
&= \prod_{i=1}^n f(z_i) \prod_{i=1}^n (1-f(z_i))
\end{aligned}
$$

- 要求 $\ln L$ 最大：

$$
\begin{aligned}
\ln L &= \sum_{i=1}^n \ln f(z_i) + \sum_{i=1}^n \ln (1-f(z_i)) \\
&= \sum_{i=1}^n \ln \frac{1}{1 + e^{-z_i}} + \sum_{i=1}^n \ln \frac{e^{-z_i}}{1 + e^{-z_i}} \\
&= \sum_{i=1}^n \left[y_i \ln \frac{1}{1 + e^{-z_i}} + (1-y_i) \ln \frac{e^{-z_i}}{1 + e^{-z_i}}\right]
\end{aligned}
$$

- 代价函数：
  - $y = 1$，

#### 梯度下降法（Gradient Descent）

- 寻找使得代价函数 $L$ 最小的参数 $(b_0,b_1)$，即 $\frac{\partial L}{\partial b_{0,1}} = 0$
- 导数较复杂时，利用**梯度下降法**迭代求解
$$\frac{\partial L(y,f(z))}{\partial b_0} = 0$$
- 迭代
$$b_0'' = b_0' - \alpha \left.\frac{\partial L}{\partial b_0}\right|_{b_0=b_0'}$$
其中 $\alpha$ 为步长

#### 拟合结果

#### sklearn包实现（LogisticRegression）

```python
from sklearn.linear_model import LogisticRegression, LinearRegression

clf = LogisticRegression(C=10)  # C 为正则化参数
plt.scatter(xval, yval, s=30, c=y_train, cmap=plt.cm.Paired)

# 变为多维数组
xx = np.array(xval).shape(-1,1)
clf.fit(xx, yval)

```

- 不希望系数太多和太大
  - 方差过大
  - 过拟合（Overfitting）
- 加入惩罚项（Penalty）
$$L' = CL + r(\omega)$$
  - $C$ 为正则化参数
  - $r(\omega)$ 为惩罚项，可以有多种选择
    - $l_1$
- $C$ 越大，惩罚越小

