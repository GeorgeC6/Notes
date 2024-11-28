# 机器学习 Pt.I

## sklearn 包

- 内置简单的数据集

```python
from sklearn import datasets
iris = datasets.load_iris()
X = iris.data
y = iris.target
```

### 可视化绘图

- 箱型图

```python
iris_df = pd.DataFrame(np.c_[iris['data'], iris['target']], columns=iris['feature_names'] + ['target'])
sns.catplot(data=iris_df, x='sepal length (cm)', y='sepal width (cm)', kind='box')
```

```python

fig, ax = plt.subplots(1,3,figsize=(10,3))
sns.histplot(data=iris_df, x='sepal width (cm)', hue='target', ax=ax[0])
sns.histplot(data=iris_df, x='sepal width (cm)', hue='target', element='step', ax=ax[1])    # 柱的边缘线
sns.kdeplot(data=iris_df, x='sepal width (cm)', hue='target', ax=ax[2])    # 可能会掩盖信息
```

- `jointplot`

```python
sns.jointplot(data=iris_df, x='sepal width (cm)', y='sepal length (cm)', hue='target')
```

- `pairplot`

```python
sns.pairplot(iris_df, hue='target')
```

- matrix

```python
pd.plotting.scatter_matrix(iris_df, c=iris_df['target'], figsize=(8,8), marker='o', hist_kwds={'bins':20}, s=60, alpha=.8)
```

## 机器学习简介

!!! tip ""
    根据已有数据进行规律总结，预测未知数据
    - 回归
    - 分类
    - 聚类

### 数据集

- 一般形式：二维数组

$$n_\text{samples} \times n_\text{features}$$

- 监督学习（Superivised Learning）
  - 既含有特征，又含有标签（label）
  - 学习标签下的特征，给定新数据的特征，判断标签
- 标签：离散/连续，分类/回归
- 数据集拆分：为了评估，一般分为**训练（training）集**和**测试（testing）集**

!!! example "（很大的）例子"
    ```python
    from sklearn.inspection import DecisionBoundaryDisplay
    from sklearn import svm, metrics
    from sklearn.model_selection import train_test_split
    from sklearn.datasets import load_iris
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt


    iris = load_iris()

    iris_df = pd.DataFrame(np.c_[iris.data,iris.target], columns=iris.feature_names+["target"])

    X_train, X_test, y_train, y_test = train_test_split(
        iris_df[["petal width (cm)","petal length (cm)"]], iris.target, test_size=0.5, shuffle=True
    )

    X=X_train
    y=y_train
    print(X)
    C = 1.0  # SVM regularization parameter
    models = (
        svm.SVC(kernel="linear", C=C),
        svm.LinearSVC(C=C, max_iter=10000),
        svm.SVC(kernel="rbf", gamma=0.7, C=C),
        svm.SVC(kernel="poly", degree=3, gamma="auto", C=C),
    )
    models = (clf.fit(X, y) for clf in models)
    titles = (
        "SVC with linear kernel",
        "LinearSVC (linear kernel)",
        "SVC with RBF kernel",
        "SVC with polynomial (degree 3) kernel",
    )
    fig, sub = plt.subplots(2, 2,figsize=(10,10))
    plt.subplots_adjust(wspace=0.4, hspace=0.4)

    X0, X1 = X_train["petal width (cm)"], X_train["petal length (cm)"]
    X2, X3 = X_test["petal width (cm)"], X_test["petal length (cm)"]

    for clf, title, ax in zip(models, titles, sub.flatten()):
        disp = DecisionBoundaryDisplay.from_estimator(
            clf,
            X,
            response_method="predict",
            cmap=plt.cm.Set3,
            alpha=0.8,
            ax=ax,
            xlabel="petal width (cm)",
            ylabel="petal length (cm)",
        )
        ax.scatter(X0, X1, c=y, cmap=plt.cm.Set3, s=40, edgecolors="k")
        ax.scatter(X2, X3, c=y_test, cmap=plt.cm.Set3, s=20, marker="D",edgecolors="grey")

        ax.set_xticks(())
        ax.set_yticks(())
        ax.set_title(title)
    ```

!!! example "分步解释"
    1. 导入模块和数据集

    ```python
    from sklearn import svm, metrics
    from sklearn.model_selection import train_test_split    # 划分数据集
    from sklearn.datasets import load_iris

    iris = load_iris()  # 加载数据集

    clf = svm.SVC() # 创建分类器(classifier)

    X_train, X_test, y_train, y_test = train_test_split(
        iris.data, iris.target, test_size=0.5, shuffle=True
    )   # y 含标签，X 含特征（不含标签）
    print(X_train)
    print(y_train)
    ```

    - 支持向量机（SVM，Support Vector Machine）
    > 支持向量机 (SVMs) 是一种用于分类、回归和异常检测的有监督学习方法。
    - metrics：评估模型

    2. 训练模型

    ```python
    # 学习训练集的特征
    clf.fit(X_train, y_train)
    ```

    3. 预测、评估

    ```python
    predicted = clf.predict(X_test)
    # 对比预测值和真实值
    print(metrics.classification_report(y_test, predicted))
    ```

    - **Confusion Matrix**：混淆矩阵
    
    ```python
    confusion_matrix = metrics.confusion_matrix(y_test, predicted)
    ```

### 学习的性能量化

#### 准确率（Accuracy）

- 判断正确的样本数占总样本数的比例

!!! info "Accuracy 不足以判断机器学习的性能"
    两类判断，没有学习，认为所有的数据类别均为A。实际数据中A类有95个，B类有5个，Accuracy=95/100=0.95。

#### 精确率（Precision）

- 预测为A类的样本，真的是A类的样本比例

#### 召回律（Recall）

- 实际是A类的样本，被预测为A类的比例

#### F1 Score

精确率和召回率不能同时最大化

- 精确率和召回率的调和平均