### `2.1 print()`
```python
print(*objects, sep=' ', end='\n', file=sys.stdout)
```
- objects : 表示一次可输出多个对象。输出多个对象时，需要用 , 分隔
- sep : 用来间隔多个对象，默认值是一个空格
- end : 用来设定结尾符。默认值是换行符 \n
- file : 要写入的文件对象

### `2.2 格式化输出`

```python
"string".format([parameters])
```

- **{} 占位符**
  - **{编号:格式}**

***e.g.***

```python
a = 12
b = 123.456
print("a = {},b = {}".format(a,b))
```

***e.g.2***

```python
a = 12
b = 123.456
print("a = {},b = {:.2f}".format(a,b))
```

***e.g.3***

```python
a = 12
print("a = {0:b},b = {0:o}".format(a))
```

***e.g.4***

```python
name = George
print("Hi,{:>7s}".format(name)) #右对齐，7个宽度
```

***e.g.5***

```python
print("{:>7.2f}".format(name)) #右对齐，7个宽度,保留两位小数
```

### `2.3 内置转换函数`
|函数名|含义|
|:--:|:--:|
|bool|根据传入的参数的逻辑值创建一个新的布尔值|
|int|根据传入的参数创建一个新的整数|
|float|根据传入的参数创建一个新的浮点数|
|str|创建一个字符串|
|>>、<<|右移、左移|
|ord|返回Unicode字符对应的整数|
|chr|返回整数所对应的Unicode字符|
|bin|将整数转换成2进制字符串|
|oct|将整数转化成8进制数字符串|
|hex|将整数转换成16进制字符串|
|list|根据传入的参数创建一个新的列表|

```python
>>>bool('str')
   True
>>>float(3)
   3.0
>>>str(123)
   '123'
>>>list('abcd')
   ['a','b','c','d']
```

### `2.4 split()`
***e.g.1* 变量数与分割后元素数相等**
```python
>>>a,b=input().split()  #分割1和3，且去掉空格
         1        3
>>>a
   '1'
>>>b
   '3'
```
***e.g.2* 一个变量**
```python
>>>a=input().split()  #由分割后的元素产生列表
      1    2    3   4
>>>a
   ['1', '2', '3', '4']
```

### `2.5 map()`

```python
a,b = map(input().split())
```
