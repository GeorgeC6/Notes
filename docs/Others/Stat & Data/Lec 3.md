### 画 Venn 图

```python
from matplotlib_venn import venn3
import matplotlib.pyplot as plt

set1 = {1,2,3}
set2 = {2,3,4}
set3 = {3,4,5}

venn3([set1, set2, set3], ('Set1', 'Set2', 'Set3'))
plt.show()
```

### 用 Python 列举试验结果

四面体骰子，投两次。

1. 两次和为偶数的概率

    ```python
    import itertools
    import numpy as np
    import collections

    x = np.arange(1,5) # [1 2 3 4]
    y = list(itertools.product(x,x)) # 16个元素

    collections.Counter(sum(i)%2 == 0 for i in y) # 两次和为偶数的样本点
    ```

2. 第一次比第二次大

    ```python
    collections.Counter(i[0] > i[1] for i in y)
    ```

3. 至少一次为4

    ```python
    collections.Counter(i[0]==4 or i[1]==4 for i in y)
    # 也可 4 in i for i in y
    ```

### 用 Python 生成离散随机数

```python
import numpy as np
# 在[0,4)之间生成一个随机整数
x = np.random.randint(4)
```

设置种子：

```python
np.random.seed(12)
```