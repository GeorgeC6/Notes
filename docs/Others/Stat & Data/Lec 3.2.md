## 全概率公式

$$P(B) = \sum_{i=1}^n P(B\cap A_i) = \sum_{i=1}^n P(B|A_i)P(A_i)$$

## 贝叶斯准则

$$P(A_i|B) = \frac{P(B|A_i)P(A_i)}{P(B)} = \frac{P(B|A_i)P(A_i)}{\sum_{i=1}^n P(B|A_i)P(A_i)}$$

- 因果推论：有很多原因$A_i$，导致结果$B$，推断由某个原因$A_i$导致结果$B$的概率
- 后验概率：$P(A_i|B)$
- 先验概率：$P(A_i)$

## 独立事件

$$P(A|B) = P(A)$$

### 条件独立

$$P(A\cap B|C) = P(A|C)P(B|C)$$

$$P(A|B\cap C) = P(A|C)$$

给定C发生，假定B发生与否对A发生的概率没有影响。

!!! warning **A,B相互独立 $\nLeftrightarrow$ A,B条件独立**

## 独立试验和二项概率

- Bernoulli 试验
- n次抛硬币，k次正面朝上的概率：二项概率

$$p(k) = \binom{n}{k} p^k (1-p)^{n-k}$$

## Python 实现排列组合

### `math` 库

```python
import math

for k in range(5):
    p0 = math.perm(5, k)
    p1 = math.comb(5, k)
    print("5选",k,", 排列 ",p0,", 组合 ",p1)
```

### 穷举排列

```python
import numpy as np
import itertools

x = np.arange(1,5)
y = list(itertools.permutations(x, 3)) # 4选3排列
z = list(itertools.combinations(x, 3)) # 4选3组合
```