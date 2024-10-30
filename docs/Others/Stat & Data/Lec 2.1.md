## 常见数据格式和处理

### List

```python
a = [1, 2, 3, 4, 5]
```

- 可由不同类型元素组成
    ```python
    a = [1, 'a', 3.14]
    ```
- 可以嵌套
    ```python
    a = [1, [2, 3], 4]
    ```
- index 从 0 开始
- 调用方便
    ```python
    print(a[-1]) # 最后一个元素
    print(a[0:4]) # 0-3
    print(a[0:4:2]) # step=2
    ```
- 可以修改
    ```python
    c = []
    for x in a:
        c.append(x**2)
    ```

    !!! tip "简洁写法"
        ```python
        c = [x**2 for x in a]
        ```

#### 几个内置函数

- `max()`
- `min()`
- `len()`
- `sum()`
- `np.mean()`
- `np.std()`

#### 数学运算

```python
a = [1,2]
b = [3,4]
c = a + b
# c = [1, 2, 3, 4]
```

!!! success ""
    ```python
    import numpy as np
    c = np.array(a)

    print(c + 1)
    ```

- `split()`

```python
sentences = ['I am a student',
            'You are a teacher',
            'He is a doctor']
words = [lines.split() for lines in sentences]
print(words)
# [['I', 'am', 'a', 'student'], ['You', 'are', 'a', 'teacher'], ['He', 'is', 'a', 'doctor']]
```

摆脱嵌套：

```python
words = sum(words, [])
```

### Tuple

- 用`()`表示
- 性质和 List 类似
- 不可修改
- 快

### Dict

- 用`{}`表示
- key-value
- 无序

```python
#增加元素
dict1["o"] = 4
dict2 = {i:i**2 for i in range(5)}
```

```python
texts = ["中文处理"]
vocab=[list(i) for i in texts]

#enumerate重要功能,返回index和内容
vocab_dict = {k:i for i,k in enumerate(sum(vocab,[]))}
print(vocab, "\n")
print(vocab_dict, "\n")
```

### Set

#### 集合的增删

```python
set1.update((5,)) # 添加元素,若已有则不变
set1.remove(5) # 删除元素
```

#### 集合运算

```python
set1.union(set2) # 并集
set1 | set2

set1.intersection(set2) # 交集
set1 & set2

set1.difference(set2) # 差集
set1 - set2

set1.symmetric_difference(set2) # 对称差
set1 ^ set2
```

*e.g.* 

```python
set1 = {1,2,3}
set2 = {2,3,4}

set1.update(set2) # {1, 2, 3, 4}
set1 &= set2
```


### DataFrame

#### 创建表格

- `zip()`

同时遍历两个列表。若长度不同，在最短的停止。

```python
for i,j in zip([1,2,3],['a','b','c']):
    print(i,j)
"""
1 a
2 b
3 c
"""
```

!!! warning "忠告"
    **做数值计算千万不要用 `list`，而是要用 NumPy 的 `array`，不然消耗的是电脑的内存和电力以及自己的精力！**

    *帮同学解决某爆内存的屎山代码后的感想*![](../../images/tieba/cool.png)