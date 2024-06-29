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

```python linenums="1" hl_lines="21 22 23 24"
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
