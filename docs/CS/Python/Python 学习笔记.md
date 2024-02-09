![PythonLOGO](Python-LOGO.jpg)

---
**<font size=5><center>前言</center></font>**
本笔记内容主要基于肖少拥老师（ZJU）的计算机科学基础（A）课程以及郭炜老师（PKU）的实用Python程序设计慕课，适合非计算机专业学生入门Python并快速上手。

---

## <center>第零章 Python拾级</center>

### `0.1 程序设计语言初识`

下面简单介绍一些常见的程序设计语言。

|语言|简介|
|:---:|:---:|
|Java|开发服务器端应用、安卓应用|
|C/C++|开发对速度要求较高的软件，如系统软件和大型端游|
|C#|微软公司语言，开发网站、桌面应用|
|PHP|开发网站，服务器运行（后端）|
|JavaScript|开发网站，浏览器运行（前端）|
|Swift|苹果()公司语言，开发果家应用|

*What about Python?* 为什么学Python？

### `0.2 Why Python?`
 
- 简单易学：语法简单
- 功能强大：有众多的库支持
（*库：预先设计好的功能模块*）
- 跨平台：Windows，macOS，Linux等操作系统都能运行

**$⇒$ 编程效率高，适合非计算机专业人士学习**

### `0.3 What's Python?`

Python由荷兰人Guido van Rossum于1989年开始开发，1991年形成雏形。之所以把“Python”当作这个编程语言的名字，是因为Guido喜欢的一个电视剧叫*Monty Python's Flying Circus*，而不是他喜欢大蟒蛇。

如今Python已经成为最受欢迎的程序设计语言之一。

### `0.4 Python开发环境搭建`
*building...*
1. 在[Python官网](https://www.python.org)下载对应自己操作系统的稳定版本
2. 

### `0.5 程序编写的基本概念和规范`

#### ※ 0.5.1 注意输入法！！

<p style="color:red">注意：用英文字符写程序！</p>

|英文字符（半角）|中文字符（全角）|
|:---|:---|
|:|：|
|.|。|
|,|，|
|''|‘’|
|""|“”|
|()|（）|

除了输出中文内容（一般都会写在""里面），程序部分**必须**用英文字符写！~~无数人间惨案（指找程序错误几个小时也不知道错在哪）都因此而起！！~~

#### 0.5.2 注释

程序不止是给机器读的，**也是给人看的！**
写注释，可以让难懂的程序好懂很多。~~难的程序还是看不懂（doge）。~~
注释可以用任何语言写，方便理解就行。

##### 0.5.2.1 单行注释
即把注释写在一行程序后面，通常用于解释这行程序是干嘛的。注释不会被当作程序运行。

***e.g.* 单行注释用法：井号 #**
```python
a = b   #让a和b的值相同
```
a = b是一条赋值语句（后面会讲），在同一行的后面写着对该语句的解释。

##### 0.5.2.2 多行注释
~~当你有很多的话要对屏幕那头的人说...~~
其实最主要的用途是：写了一段代码暂时用不着，但可能以后会用上，不想删掉，就把这段代码改成注释。以后用到再把注释去掉。

***e.g.* 多行注释用法：三对单引号''' '''**
```python
'''
你想说的话 or 一个代码块
'''
```

#### 0.5.3 变量

即可变的量。计算机将某些数据储存在变量中。
变量有两个属性：名字和类型。

##### 0.5.3.1 变量名命名规则
*building...*
##### 0.5.3.2 变量类型


## <center>第一章 数据类型与运算符</center>

### `1.1 int 整型`

> **Python的整数不用担心溢出！**
> 
#### 1.1.1 进制
- 十进制（默认）
  - 注：非零十进制数不能以0开头
- 二进制（0b或0B开头）
- 八进制（0o或0O开头）
- 十六进制（0x或0X开头）

#### 1.1.2 int()函数

```python
int(x,base) #x可以是数或字符串
#e.g.
>>>int("0b100",base=0) #base=0表示自动识别进制
   4
>>>int(2.8)
   2 #只取整数部分
```

***e.g.* 错误示范**
```python
>>>int("10.0")  #对于底数10,"10.0"是非法的
ValueError: invalid literal for int() with base 10: '10.0'
```

#### 1.1.3 小整数、大整数

**Python的小整数范围（约）：-50 ~ 500**

***e.g.* 小整数**
```python
>>>x = 1
>>>y = 1
>>>z = 1  #1是小整数，x,y,z的内存地址都相同
>>>x == y
   True
>>>x is y
   True
>>>x == z
   True
```

***e.g.* 大整数**
```python
>>>a = 1000
>>>b = 1000
>>>c = a
>>>a == b  #a和b的值相同
   True
>>>a is b  #a和b的内存地址不同
   False
>>>a == c
   True
```


### `1.2 float 浮点型`

- 写成指数形式，一定是小数
  *e.g.*
  ```python
  >>>a = 28E3
  >>>type(a)
     <class 'float'>
  >>>a
     28000.0
  ```
> 注：浮点运算可能不精确！

### `1.3 complex 复数`

```python
>>>z1 = 3+4j
>>>z2 = 2+5j
>>>z1*z2
   (-14+23j)
```

### `1.4 string 字符串`

#### 1.4.1 字符串运算

- **加法（拼接）**
  
  ```python
  >>>"Hello"+" "+"World!"
     'Hello World!'
  ```
- **数乘**
  ```python
  >>>'哈'*3
     '哈哈哈'
  ```
- **索引**
  |字符串中元素|1|2|3|...|n|
  |:--:|:--:|:--:|:--:|:--:|:--:|
  |正索引|0|1|2|...|n-1|
  |负索引|-n|...|-3|-2|-1|

- **切片**
```python
[start:end:step] #start省略默认为0（step为正时）
```

- **in**
  判断某个字符是否在字符串内


#### 1.4.2 strip()函数
去掉string中的空格

#### 1.4.3 转义字符
仅列举几个常用的：
|转义字符|描述|转义字符|描述|
|:--:|:--:|:--:|:--:|
|\\(在行尾时)|续行符|\n|换行|
|\b|退格(Backspace)|\r|回车|
|\e|转义|\f|换页|

> **不可用赋值的方法修改字符串！字符串是不可变对象！**
```python
>>>a = 'Hello'
>>>a[2] = 'L'
TypeError: 'str' object does not support item assignment
```

### `1.5 list 列表`

#### 1.5.1 索引与切片
与字符串类似

#### 1.5.2 append()

在列表末尾添加元素

```python
list.append()
```

#### insert()

在列表指定位置插入元素

```python
list.insert(index,value)
```

### `1.6 dict 字典`

```python
{key:value}
```

### `1.7 tuple 元组`

**有序数组，不可修改。用圆括号表示。**
***e.g.* 时间元组**
```python
(2023,12,24,22,0,0,6,358,-1) #本作业ddl的时间
```

### `1.8 运算符`

#### 1.8.1 算术运算符
|运算符|描述|
|:--:|:--:|
|+|两个数相加，或是字符串连接|
|-|两个数相减|
|*|两个数相乘，或是返回一个重复若干次的字符串|
|**|幂运算，返回乘方结果|
|/|两个数相除，结果为浮点数（小数）
|//|两个数相除，结果为向下取整的整数|
|%|取模，返回两个数相除的余数|

#### 1.8.2 比较（关系）运算符
|运算符|描述|
|:--:|:--:|
|==|比较两个对象是否相等|
|！=|比较两个对象是否不相等|
|> (<)|大小比较，如 x 比 y 大（小），返回 True，否则返回 False|
|>= (<=)|比较两个对象是否相等大小比较，如 x 大于（小于）等于 y，返回 True，否则返回 False|

#### 1.8.3 赋值运算符
|运算符|描述|
|:--:|:--:|
|=|常规赋值运算符|
|+=|加法赋值运算符，例如 a+=b 等效于 a=a+b|
|-=|减法赋值运算符，例如 a-=b 等效于 a=a-b|
|*=|乘法赋值运算符，例如 a*=b 等效于 a=a*b|
|/=|除法赋值运算符，例如 a/=b 等效于 a=a/b|
|%=|取模赋值运算符，例如 a%=b 等效于 a=a%b|
|**=|幂运算赋值运算符，例如 a**=b等效于 a=a**b|
|//=|取整除赋值运算符，例如 a//=b 等效于 a=a//b|

#### 1.8.4 逻辑运算符
|运算符|描述|
|:--:|:--:|
|and|“与”运算符，返回bool值|
|or|“或”运算符，返回bool值|
|not|“非”运算符，返回bool值|

```python
>>>print(1 > 2 and '1' > 2)
   False  #没有报错，因为 and “遇假则假”
```

#### 1.8.5 位运算符
暂略

#### 1.8.6 成员运算符
|运算符|描述|
|:--:|:--:|
|in|当在指定的序列中找到值时返回 True,否则返回 False|
|not in|当在指定的序列中没有找到值时返回 True,否则返回 False|

#### 1.8.7 身份运算符
|运算符|描述|
|:--:|:--:|
|is|判断两个标识符是否引用自同一个对象，若引用的是同一个对象则返回 True，否则返回 False|
|not is|判断两个标识符是不是引用自不同对象，若引用的不是同一个对象则返回 True，否则返回 False|

#### 1.8.8 运算符优先级
|运算符|描述|
|:--:|:--:|
|**|幂|
|~|按位“取反”|
|*、/、%、//|乘、除、取模、取整除|
|+、-|加、减|
|>>、<<|右移、左移|
|&|按位“与”|
|^、∣|按位“异或”、按位“或”|
|<=、<、>、>=|比较运算符|
|==、!=|等于、不等于|
|=、%=、/=、//=、-=、+=、*=、**=|赋值运算符|
|is、is not|身份运算符|
|in、not in|成员运算符|
|and or not|逻辑运算符|


## <center>第二章 常用函数</center>

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

## <center>第三章 条件和循环</center>

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

## <center>第四章 算法</center>

### `4.1 概念`

算法是求解问题步骤的有序集合，它能够产生结果并在有限时间内结束。

### `4.2 特性`

- 确定性
- 有穷性
- 有效性
- 可以无输入
- 可以有多个输出
*思考:随机数算法，产生伪随机数。*

### `4.3 分类`

- 数值计算
  - 针对特定数学模型求出数值解
- 非数值计算
  - 处理符号、表格

### `4.4 结构`

- **顺序结构**
- **分支结构**
- **循环结构**
  - 当型(While)
  *e.g.*
  ```python
  n = int(input())
  fac = 1
  i = 2
  while i<=n:
    fac = fac*i
    i += 1
  print(fac)
  ```

  - 直到型(Until)

### `4.5 表示`

- 流程图
- 伪代码

### `4.6 算法举例`

#### `4.6.1 基本算法`

##### **例一 求最大公约数**

**① 枚举法**

```python
A = int(input())
B = int(input())

for i in range(min(A,B),0,-1):
  if A%i==0 and B%i==0:
    break
print(i)
```

**★② Euclid算法**

```python
a = int(input())
b = int(input())
if a<b: a,b = b,a
r = a%b
while r>0:
  a,b = b,r
  r = a%b
print(r)
```

##### **例二 求最小值**

```python
data=[6,15,4,2,8,5,11,9,7,13]

min_index = 0 #只要不越界，初值可任意选
for i in range(1,len(data)):  #注意i的开始和结束
  if data[min_index]>data[i]:
    min_index = i
        
print(min_index,data[min_index])
```


#### `4.6.2 迭代`

***e.g.* 求平方根$\sqrt a$**

递推公式：**$$ x_{i+1}=\frac{x_i+\frac{a}{x_i}}{2},~a>0 $$**

```python
a = float(input())
count = 0 #数循环次数
x1 = 1
while True:
  x2 = (x1+a/x1)/2
  count += 1
  if x1 == x2:  #x1与x2足够接近的时候，会被判定为二者相等
    break
  x1 = x2
print(x1)
print(count)
```

***e.g.2* 计算 $[\log_2x]$**

即求一个数能被2整除多少次。
```python
x = int(input())
count = 0
while x > 1:
  x //= 2
  count += 1
print(count)
```

#### `4.6.3 递归`

**函数调用自身**

##### **定义函数**

```python
def f(x):
  return value
```

***e.g.* 求阶乘**

```python
def fac(n):
  if n==0 or n==1:
    return 1  #终止条件
  else:
    return n*fac(n-1)
```

***e.g.2* Fibonacci数列**

```python
#该问题用递归较慢 O((3/2)^n)
def fib(n): #返回第n+1个Fibonacci数
  if n==0 or n==1:
    return 1
  else:
    return fib(n-1)+ fib(n-2)
```
***e.g.3* 走迷宫**

```python linenums="1"
maze = [[1,0,1,1,1],
        [1,1,1,0,1],
        [0,0,0,1,1],
        [0,1,1,1,0],
        [0,0,0,1,1]]

def valid(maze,x,y):
    if (x>=0 and x<len(maze) and y>=0 and y<len(maze) and maze[x][y]==1):
        return True
    else:
        return False


def mazesolver(maze,x,y):
    if (x==4 and y==4):
        print("Mission Success!")
        return True
    if valid(maze,x,y):
        maze[x][y]=2
        print(x,y)
        mazesolver(maze,x-1,y)
        mazesolver(maze,x,y-1)
        mazesolver(maze,x+1,y)
        mazesolver(maze,x,y+1)

x=int(input("xstart:"))
y=int(input("ystart:"))
mazesolver(maze,x,y)
```

#### `4.6.4 排序`

##### **4.6.4.0 双层循环**

```python
#输出质数
n = int(input())
for i in range(1,n+1):
  flag = 1
  for j in range(2,i):  #n=1或2时不进入该循环
    if i%j == 0:
      flag = 0
      break
  if flag == 1 and i != 1:
    print(i,end=' ')

```

##### **4.6.4.1 选择排序**

（升序）扫描所有数据，挑出最小的放在第一个，再扫描剩下的，如此循环。

***e.g.***

```python
a = [3,1,5,2,4]
for i in range(len(a)-1):
  index = i
  for j in range(i+1,len(a)):
    if a[j] < a[index]:
      index = j
  a[i],a[index] = a[index],a[i]
print(a)
```

##### **4.6.4.2 冒泡排序**

```python
for i in range(len(a)-1):
  for j in range(len(a)-1-i):
    if a[j] > a [j+1]:
      a[j],a[j+1] = a[j+1],a[j]
print(a)
```

#### `4.6.5 查找`

##### **4.6.5.1 顺序查找**

##### **4.6.5.2 折半查找**

> 要求：列表有序

```python
a = [1,2,3]
x = int(input())

left = 0
right = len(a)-1
found = -1

while left <= right:
  mid = (left + right)//2
  if x > a[mid]:
    left = mid + 1
  elif x < a[mid]:
    right = mid - 1
  else:
    found = 1
    break
print(found)
```

### `4.7 算法的方法学`

#### `4.7.1 贪心算法`

**基本思想：寻找局部最优解，不考虑全局。**

**特点：速度快，使用内存小 | 一般不是最优解**

- 可行性：每一步选择必须满足问题的约束
- 局部最优：它是当前可选择的方案中最优的
- 不可取消性：选择一旦做出，在算法的其后步骤中不能被取消

***e.g. 霍夫曼编码***

***e.g.2 找零钱问题***
若面值为1,5,10,25,50,100，从面值大的从面值小的找零是最优解。
63元，若有21元的面值，则只要3张，贪心法失效。

#### `4.7.2 分治算法`

**基本思想：
分：大问题拆成小问题，递归求解子问题。
治：从小问题的解构建大问题的解。**

***e.g.* 比较列表中数的大小**

```python
def min_max(a):
  if len(a)==1:
    return (a[0],a[0])
  elif len(a)==2:
    return (min(a),max(a))
  else:
    m=len(a)//2
    lmin,lmax=min_max(a[:m])
    rmin,rmax=min_max(a[m:])
    return (min(lmin,rmin),max(lmax,rmax))
    
a,b = min_max([3,8,9,4,10,5,1,17])
print("最小值是",a,"，最大值是",b)
```

#### `4.7.3 回溯算法`

暂略

#### `4.7.4 动态规划`

**基本思想：大问题的子问题具有重叠，可以将每个子问题的解存放到一个表中，这样就可以通过查表解决问题。以空间换时间！**

***e.g.* Fibonacci数列**
```python
pre={0:1,1:1}
def fib(n):
  if n in pre:  #可以用in检查字典中是否有n这个关键字
    return pre[n]
  else:
    newvalue=fib(n-1)+fib(n-2)
    pre[n]=newvalue #增加字典的条目
    return newvalue
print(fib(100))
```

## <center>第五章 </center>
*building...*
## <center>附录</center>
*building...*

---
To be continued...


<div align="right"> <font size=4><i><b>by</b></i></font> </div>
<img src=George%20Sig.%20Simple(Trans).png style="float:right;width:200px;height:200px">