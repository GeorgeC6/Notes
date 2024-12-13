# 机器学习：神经网络

## 非线性边界

> - Logistic 的二元和多元分类基础：对输入特征进行线性变换，然后通过 Sigmoid 函数或者 Softmax 函数进行分类。
> - 可以处理边界为关于特征值的多项式的形式
> - 若边界无法表达为各输入的有限多项式和？

!!! example "一维举例"

    ```python
    import numpy as np
    import matplotlib.pyplot as plt
    from scipy.special import expit

    ### x的线性变换
    ### w[0][0]+w[1][0]*x = z1
    ### w[0][1]+w[1][1]*x = z2
    ### w[0][2]+w[1][2]*x = z3
    ### w[0][3]+w[1][3]*x = z4

    w=[[-2.5,0.5,-2,2.5],[1,-2,5,-3]]
    x=np.linspace(-1,1,100)
    x_c=np.vstack((np.ones(100),x)).T
    trans=x_c@w

    ### sigmoid(zi)
    ns=4
    for i in range(ns):
        plt.scatter(x,expit(trans[:,i]))
        
    ### z=sigmoid(z1)+sigmoid(z2)+sigmoid(z3)
    middle=np.sum(expit(trans),axis=1)
    out=(middle-np.mean(middle))/np.std(middle)

    ### y = sigmoid(z)
    plt.plot(x,expit(out))
    plt.plot(x,expit(out)>0.5)
    ```

    蓝细线：x线性变换后sigmoid函数值的和

- 对输入作（任意多个）线性变换

$$
\begin{aligned}
W_1 X &= Z_1 \\
W_2 X &= Z_2 \\
W_3 X &= Z_3 \\
\end{aligned}
$$

- 对中间值 $Z_i$ 取 Sigmoid 函数

$$g(Z_1), g(Z_2), g(Z_3)$$

- 对 $g(Z_i)$ 继续作线性操作

$$W_1' g(Z) = Z'$$

- 对 $Z'$ 取 Sigmoid (Softmax) 函数

$$f(Z') = y$$

## 神经网络算法

通过多层迭代，进行多类别分类

- 输入层（Input Layer）：输入特征值
- 隐藏层（Hidden Layer）：中间步骤，输入层的线性变换
- 激活函数（Activation Function）：对隐藏层得到的线性函数进行转换（Logistic, ReLU...）
- 输出层（Output Layer）：最后一步的隐藏层的 Softmax 函数

## 激活函数

- 常用的激活函数：Logistic, ReLU（Rectified Linear Unit）, Tanh, Softmax

!!! tip "ReLU 函数"
    - 定义：

    $$f(x) = \max(0, x)$$

    - ReLU 比 Logistic 更常用，因为导数非 0 的范围更大

    ```python
    def relu(x):
        return x*(x>0)
    x = np.linspace(-5,5,100)
    plt.plot(x,relu(x))
    ```

## 神经网络求解

- 定义代价函数
    - 常用：最小二乘法，极大似然法
- 求解每层之间的线性系数
    - 常用：阶梯下降法（Gradient Descent），从前往后递推
    - 因此**激活函数的导数性质很重要**

## 神经网络运用

### ReLU

数据集：`make_moons`

```python
from sklearn.datasets import make_moons

X, y = make_moons(n_samples=100, noise=0.13, random_state=25)
fig = plt.figure()
plt.scatter(X[:,0],X[:,1],c=y,cmap="Paired")
```

- 线性边界

```python
from sklearn.inspection import DecisionBoundaryDisplay
from sklearn.linear_model import LogisticRegression

ax = fig.gca()

clf = LogisticRegression()
clf.fit(X,y)
DecisionBoundaryDisplay.from_estimator(
    clf, X, plot_method="contour",levels=[0],ax=ax,colors="k"
)
```

- 二次边界

```python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree = 2, interaction_only=False, include_bias=False)
X_poly = poly.fit_transform(X)

clf.fit(X_poly,y)
ax=fig.gca()

xx, yy = np.meshgrid(np.linspace(-2, 3, 100), np.linspace(-1.5, 2.5, 100))

mg=np.c_[xx.ravel(), yy.ravel()]
xx_poly = poly.fit_transform(mg)

Z = clf.decision_function(xx_poly)
ax.contour(xx, yy, Z.reshape(100,100), levels=[0], colors="C0",linewidths=2, linestyles="dashed")
```

- 神经网络（非线性边界）

```python
from sklearn.neural_network import MLPClassifier

mlp = MLPClassifier(hidden_layer_sizes=(25,),activation='relu',
                    learning_rate_init=0.1,random_state=10,
                    verbose=True)
# learning rate：学习速率，即每次迭代的步长
# hidden_layer_sizes：隐藏层的神经元个数
# activation：激活函数
# random_state：随机种子
# verbose：是否输出训练过程
mlp.fit(X,y)
```

- 10个循环后 loss 函数的改变小于容忍值`tol`，停止训练

```python
disp = DecisionBoundaryDisplay.from_estimator(
    mlp, X ,plot_method='contour',levels=[0.5]
)
#plt.colorbar(disp.ax_.collections[1])
ax = plt.scatter(X[:,0],X[:,1],c=y,cmap="Paired")
```

- 最终的边界是每个神经元的输出的线性组合

```python
coef = mlp.coefs_
bias = mlp.intercepts_

X_hidden_2d=mg@coef[0]+bias[0]
print(X_hidden_2d.shape)
fig,ax = plt.subplots(5,5,figsize=(10,10))
for i in range(25):
    ax[int(i/5)][i%5].set_axis_off()
    ax[int(i/5)][i%5].contourf(xx,yy,relu(X_hidden_2d[:,i]).reshape(100,100),cmap="Blues")
```

```python
y_out=relu(X_hidden_2d)@coef[1]+bias[1]
plt.contourf(xx,yy,y_out.reshape(100,100),cmap="Blues")
plt.colorbar()
```

### Logistic

```python
mlp = MLPClassifier(hidden_layer_sizes=(25,),activation='logistic',
                    learning_rate_init=0.1,random_state=10,
                     verbose=True) #
mlp.fit(X,y)
plt.contourf(xx,yy,mlp.predict_proba(mg)[:,1].reshape(100,100),cmap="Blues")
plt.colorbar()
```

可见 Logistic 函数给出的边界没那么好

### 输入标准化

- 当输入特征值很多，且大小范围不在一个尺度，求解导数容易受到大的特征值的影响
- 将每一个输入变量按照其平均值，方差进行标准化，减小由此带来的影响

!!! warning "注意"
    - 标准化的操作对于训练和测试集应采用相同的数值
    - 不能对测试集重新标准化

```python
from sklearn.preprocessing import StandardScaler  
scaler = StandardScaler()
scaler.fit(X)  
X_s = scaler.transform(X)  # transform必须固定，不能再改

mlp = MLPClassifier(hidden_layer_sizes=(25,),activation='logistic',
                    learning_rate_init=0.2,random_state=40,max_iter=400,
                     verbose=True) #
mlp.fit(X_s,y)
```

```python
coef=mlp.coefs_
bias=mlp.intercepts_
xx, yy = np.meshgrid(np.linspace(-2, 2, 100), np.linspace(-2, 2., 100))

mg=np.c_[xx.ravel(), yy.ravel()]

X_hidden_2d=mg@coef[0]+bias[0]
print(X_hidden_2d.shape)
fig,ax =plt.subplots(5,5,figsize=(10,10))
for i in range(25):
    ax[int(i/5)][i%5].set_axis_off()
    ax[int(i/5)][i%5].contourf(xx,yy,expit(X_hidden_2d[:,i]).reshape(100,100),cmap="Blues")
```

```python
y_out=expit(X_hidden_2d)@coef[1]+bias[1]
plt.contourf(xx,yy,y_out.reshape(100,100),cmap="Blues")
plt.colorbar()
plt.scatter(X_s[:,0],X_s[:,1],c=y)
```

## 图像识别

### 手写数字识别

```python
from sklearn.datasets import load_digits

digits = load_digits()
```

训练集中有 1797 张 8x8 的图片：

`digits.images.shape`：（1797, 8, 8）

```python
a, axes = plt.subplots(4,4, figsize=(10, 10))
for i in range(16):
    axes[int(i/4)][i%4].set_axis_off()
    axes[int(i/4)][i%4].imshow(digits.images[i], cmap=plt.cm.gray_r,interpolation="nearest")
    axes[int(i/4)][i%4].set_title("Training: %i" % digits.target[i])
```

