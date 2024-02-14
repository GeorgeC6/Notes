### `3.1 for语句`

#### 3.1.1 使用列表

```python
for variable in [list]:
    chunk
```

***e.g.***

```python
a = [1,2,3,'a']
for i in a:
    print(a,type(a))
```

***e.g.2* 带条件的列表解析**

```python
[i*2 if i%2==1 else -2*i for i in [1,2,3,4,5]]
```

```python
[i if i%4==1 else -i for i in range(1,50) if i%2==1]
```

#### 3.1.2 range()函数

```python
range(start,stop[,step])
```

- 从start到stop项，不含stop项
- step可为负数
- 若按照step不能从start走到stop项，则输出空列表

### `3.2 while语句`
python的while结构：**先判断条件再执行**，没有真正意义上的do-while结构。
> Python哲学：“最好用一种方法来做一件事”
