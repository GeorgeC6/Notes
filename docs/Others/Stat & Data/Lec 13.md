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

- 对 $x$ 取某种函数 $z$，使得 $y$ 与 $z$ 满足 Logistic 函数关系

$$y = f(z) = \frac{1}{1+e^{-z}}$$

- 假设 $z$ 是 $x$ 的线性函数

$$z = b_0 + b_1x$$

!!! question "如何找到最佳的 $b_0, b_1$？"

#### 最小二乘法求解

残差最小化：

$$\delta^2 = \sum\left[y - f(z)\right]^2$$

- **损失/代价函数（Loss/Cost Function）**：残差的平方和 $\delta^2$

!!! example "最小二乘法求解例"
    ```python {.line-numbers}
    def lsq(b0,b1):
    return sum(((expit(b1*x+b0)-y)**2) for (x,y) in zip(xval,yval))

    xx, yy = np.meshgrid(np.linspace(-7, 10, 100), np.linspace(-10, 18, 100))

    fig = plt.figure(figsize=plt.figaspect(0.5))

    ax = fig.add_subplot(1, 2, 1, projection='3d')
    ax.plot_surface(xx, yy, lsq(xx,yy), rstride=1, cstride=1, cmap='Blues', edgecolor='none')

    ax2 = fig.add_subplot(1, 2, 2)
    ax2.contour(xx, yy, lsq(xx,yy), linewidths=2, levels=10, cmap='Blues',linestyles="dashed")
    ```

- 局部最小值有多个
    - 对 $b_0$ 和 $b_1$ 偏导为0的解有多个
    - 对全空间扫描找到全局最小值

#### 最大似然法求解

- 找到 $b_0, b_1$ 使得整体数据发生的概率最大

$$
\begin{aligned}
L &= \prod_{i=1}^n P(y = 1|x_i) \prod_{i=1}^m P(y = 0|x_i) \\
&= \prod_{i=1}^n f(z_i) \prod_{i=1}^m (1-f(z_i))
\end{aligned}
$$

- 要求 $\ln L$ 最大：

$$
\begin{aligned}
\ln L &= \sum_{i=1}^n \ln f(z_i) + \sum_{i=1}^m \ln (1-f(z_i)) \\
&= \sum_{i=1}^n \ln \frac{1}{1 + e^{-z_i}} + \sum_{i=1}^m \ln \frac{e^{-z_i}}{1 + e^{-z_i}} \\
&= \sum_{i=1}^N \left[y_i \ln \frac{1}{1 + e^{-z_i}} + (1-y_i) \ln \frac{e^{-z_i}}{1 + e^{-z_i}}\right]
\end{aligned}
$$

- 代价函数：
    - $y = 1$ 时，$L = -\ln \frac{1}{1 + e^{-z}}$
    - $y = 0$ 时，$L = -\ln \frac{e^{-z}}{1 + e^{-z}}$

!!! example "最大似然法求解例"
    ```python {.line-numbers}
    def mle(b0,b1):
    return sum( - y*np.log(expit(b1*x+b0))-(1-y)*np.log(1-expit(b1*x+b0)) for (x,y) in zip(xval,yval))

    fig = plt.figure(figsize=plt.figaspect(0.5))
    ax = fig.add_subplot(1, 2, 1, projection='3d')

    ax.plot_surface(xx, yy, mle(xx,yy), rstride=1, cstride=1, cmap='Blues', edgecolor='none')
    ax2 = fig.add_subplot(1, 2, 2)

    ax2.contour(xx, yy, mle(xx,yy), linewidths=2, levels=10, cmap='Blues',linestyles="dashed")
    ```

!!! note "LSQ 与 MLE 的代价函数"
    
    ```python
    fig,ax = plt.subplots()
    xarr = np.linspace(-10,10,100)
    y = expit(xarr)
    plt.plot(xarr,y)  # 假设函数
    ```

    - MLE 的代价函数

    ```python
    plt.plot(xarr,-np.log(y))
    plt.plot(xarr,-np.log(1-y))
    plt.legend(("hypothesis function","y=1 loss function","y=0 loss function"))
    ```

    - LSQ 的代价函数

    ```python
    fig.gca().plot(xarr,(1-np.heaviside(xarr,0.5))**2)
    fig.gca().plot(xarr,np.heaviside(xarr,0.5)**2)
    fig.gca().legend(("hypothesis function","y=1 loss function, mle","y=0 loss function, mle","y=1 loss function, lsq","y=0 loss function, lsq"))
    ```

    - 寻找代价函数的最小值

    ```python
    s=lsq(xx,yy)
    l=mle(xx,yy)

    fig, ax =plt.subplots(1,2,figsize=(10,5))

    # b0为特定值时，代价函数与b1的关系
    for i in [1,40,80]:
        ax[0].plot(yy[50:,i],s[50:,i],label="lsq, b0={:.1f}".format(xx[1,i]))
        ax[0].plot(yy[50:,i],l[50:,i],label="mle, b0={:.1f}".format(xx[1,i]),linestyle="--")
    
    # b1为特定值时，代价函数与b0的关系
    for i in [1,45,80]:
        ax[1].plot(xx[i,:],s[i,:],label="lsq, b1={:.1f}".format(yy[i,1]))
        ax[1].plot(xx[i,:],l[i,:],label="mle, b1={:.1f}".format(yy[i,1]),linestyle="--")
    ax[0].legend()
    ax[1].legend()

    #寻找代价函数的最小值
    for el in [s,l]:
        ind=np.unravel_index(el.argmin(), el.shape)
        print(xx[ind],yy[ind],el[ind])
    ```

#### 梯度下降法（Gradient Descent）

- 寻找使得代价函数 $L$ 最小的参数 $(b_0,b_1)$，即 $\frac{\partial L}{\partial b_{0,1}} = 0$
- 导数较复杂时，利用**梯度下降法**迭代求解

$$\frac{\partial L(y,f(z))}{\partial b_0} = 0$$

- 迭代（初始值 $b_0',b_1'$）

$$b_0'' = b_0' - \alpha \left.\frac{\partial L}{\partial b_0}\right|_{b_0=b_0',b_1=b_1'}$$

其中 $\alpha$ 为步长。如此迭代，直到 $b_0''$ 趋于稳定。

!!! tip "最小二乘法 vs. 梯度下降法"
    - 迭代动画

    ```python {.line-numbers}
    #%matplotlib notebook
    from matplotlib.animation import FuncAnimation

    #定义代价函数为最小二乘法时对b1的偏导
    def gd_lsq_b1(b0,b1,j):
        if j==0:
            return sum((2*(expit(b1*x+b0)-y)*(expit(b1*x+b0)**2)*np.exp(-b1*x-b0)*x) for (x,y) in zip(xval,yval))
        else:
            return sum( - y/(expit(b1*x+b0))*(expit(b1*x+b0)**2)*np.exp(-b1*x-b0)*x+(1-y)/(1-expit(b1*x+b0))*(expit(b1*x+b0)**2)*np.exp(-b1*x-b0)*x for (x,y) in zip(xval,yval))

    #定义代价函数为最小二乘法时对b0的偏导
    def gd_lsq_b0(b0,b1,j):
        if j==0:
            return sum((2*(expit(b1*x+b0)-y)*(expit(b1*x+b0)**2)*np.exp(-b1*x-b0)) for (x,y) in zip(xval,yval))
        else: 
            return sum( - y/(expit(b1*x+b0))*(expit(b1*x+b0)**2)*np.exp(-b1*x-b0)+(1-y)/(1-expit(b1*x+b0))*(expit(b1*x+b0)**2)*np.exp(-b1*x-b0) for (x,y) in zip(xval,yval))


    def dolsq(it,b0,b1,b0_,b1_,lsq_,j,alpha=0.2):
        b0_.append(b0)
        b1_.append(b1)
        #阶梯下降法求b0和b1,b0''=b0'-alpha*(partialL/partialb0)
        for i in range(it):
            b0=b0-gd_lsq_b0(b0,b1,j)*alpha
            b1=b1-gd_lsq_b1(b0,b1,j)*alpha
            #将迭代中得到的b0’’存储至数组b0_
            b0_.append(b0)
            b1_.append(b1)
            if j==0:
                lsq_.append(lsq(b0,b1))
            else:
                lsq_.append(mle(b0,b1))

        return(b0_,b1_,lsq_)

    def animate_lsq(i,line,line2):
        #画出从初始值到第i次迭代的b0值
        line.set_data(b0_[:i],lsq_[:i])
        #画出从初始值到第i次迭代的b0值
        line2.set_data(b1_[:i],lsq_[:i])
        return (line,line2)
    
    b1_init=0

    def init_all(b0,b1,b0_,b1_,lsq_):
        b0_=[];b1_=[];lsq_=[]
        b0=0;b1=b1_init    
        return (b0,b1,b0_,b1_,lsq_)

    b0_=[];b1_=[];lsq_=[]
    #初始化b0和b1
    b0=0;b1=b1_init  
    #迭代40次
    it=40
    b0_lsq=[];b1_lsq=[]
    for j in range(2):
        fig, ax = plt.subplots()
        b0,b1,b0_,b1_,lsq_=init_all(b0,b1,b0_,b1_,lsq_)
        line, = ax.plot([],[],"X")
        line2, = ax.plot([],[],"X")
        b0_,b1_,lsq_=dolsq(it,b0,b1,b0_,b1_,lsq_,j) 
        if (j==0):
            b0_lsq=b0_
            b1_lsq=b1_
        ax.set_xlim(-10,20)
        ax.set_ylim(min(lsq_)-1,max(lsq_)+1)
        anim=FuncAnimation(fig, animate_lsq, fargs=[line,line2],repeat=False,frames=range(it)) 
        anim.save('gd{:d}.gif'.format(j),fps=2,dpi=200)
        plt.close() # update
    ```

    - 等高线图

    ```python {.line-numbers}
    def animate_2d_lsq(i):
    line.set_data(b0_[:i],b1_[:i])
    line2.set_data(b0_lsq[:i],b1_lsq[:i])
    return (line,line2)

    fig, ax = plt.subplots(1,2,figsize=(10,5))

    xx, yy = np.meshgrid(np.linspace(-7, 10, 100), np.linspace(-10, 18, 100))
    ax[1].contour(xx, yy, mle(xx,yy), linewidths=2, levels=range(0,200,8), cmap='Blues',linestyles="dashed")
    line,= ax[1].plot([],[],marker="x",c="r")

    ax[0].contour(xx, yy, lsq(xx,yy), linewidths=2, levels=range(0,40), cmap='Blues',linestyles="dashed")
    line2,= ax[0].plot([],[],marker="x",c="r")
    anim=FuncAnimation(fig, animate_2d_lsq,repeat=True,frames=range(it)) 
    anim.save("gd_2d.gif",fps=2,dpi=200)
    plt.close() # update
    ```

    - 每次迭代 $b_0'' \sim b_0'$ 的变化

    ```python {.line-numbers}
    b0_1=b0_[1:]
    b1_1=b1_[1:]

    #每次迭代的b''-b'的变化
    plt.plot(np.array(b0_1)-np.array(b0_[:it]))
    plt.plot(np.array(b1_1)-np.array(b1_[:it]))
    plt.legend(("b0","b1"))
    ```

!!! warning "最小二乘法可能会陷入局部最小值！"
    若取 `b1_init = -9`

    - 迭代动画

    ```python {.line-numbers}
    #%matplotlib notebook
    b1_init=-9

    b0_=[];b1_=[];lsq_=[]
    b0=0;b1=b1_init    
    it=40
    anim=[]
    b0_lsq=[];b1_lsq=[]
    for j in range(2):
        fig, ax = plt.subplots()
        b0,b1,b0_,b1_,lsq_=init_all(b0,b1,b0_,b1_,lsq_)
        line, = ax.plot([],[],"X")
        line2, = ax.plot([],[],"X")
        b0_,b1_,lsq_=dolsq(it,b0,b1,b0_,b1_,lsq_,j) 
        if (j==0):
            b0_lsq=b0_
            b1_lsq=b1_
        ax.set_xlim(-10,20)
        ax.set_ylim(min(lsq_)-1,max(lsq_)+1)
        anim=FuncAnimation(fig, animate_lsq, fargs=[line,line2],repeat=False,frames=range(it)) 
        anim.save('gd_init-10_{:d}.gif'.format(j),fps=2,dpi=200)
        plt.close() # update
    ```

    - 等高线图

    ```python {.line-numbers}
    def animate_2d_lsq(i):
    line.set_data(b0_[:i],b1_[:i])
    line2.set_data(b0_lsq[:i],b1_lsq[:i])
    return (line,line2)

    fig, ax = plt.subplots(1,2,figsize=(10,5))

    xx, yy = np.meshgrid(np.linspace(-7, 10, 100), np.linspace(-10, 18, 100))
    ax[1].contour(xx, yy, mle(xx,yy), linewidths=2, levels=range(0,200,8), cmap='Blues',linestyles="dashed")
    line,= ax[1].plot([],[],marker="x",c="r")

    ax[0].contour(xx, yy, lsq(xx,yy), linewidths=2, levels=range(0,40), cmap='Blues',linestyles="dashed")
    line2,= ax[0].plot([],[],marker="x",c="r")
    anim=FuncAnimation(fig, animate_2d_lsq,repeat=True,frames=range(it)) 
    anim.save("gd_2d_init.gif",fps=2,dpi=200)
    plt.close() # update
    ```

    - 每次迭代 $b_0'' \sim b_0'$ 的变化

    ```python {.line-numbers}
    b0_1=b0_[1:]
    b1_1=b1_[1:]

    plt.plot(np.array(b0_1)-np.array(b0_[:it]))
    plt.plot(np.array(b1_1)-np.array(b1_[:it]))
    plt.legend(("b0","b1"))
    ```

#### 拟合结果

#### `sklearn` 包实现（LogisticRegression）

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

