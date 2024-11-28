# 常见数据格式和分析

## Dataframe

### 创建Dataframe

```python
import pandas as pd

l1 = [1,2,3,4]
l2 = ['a','b','c','d']
dict1 = {'A':l1,'B':l2}
df = pd.DataFrame(dict1)
df
```

```python
list(zip(l1,l2))
```

### Dataframe 读入读出

```python
df.to_csv('test.csv',delimiter=',',quotechar='"',index=False)
# 分隔符为 ,
# 引号为 "
```

!!! question "如何知道分隔符？"
    用 vi 打开文件（但是要加载整个文件，可能会很慢）

#### 读取前几行/后几行

```python
df.head(2)
df.tail(2)
```

### 行列操作

#### 选择列

```python
df['A']
```

### 筛选

```python
# 选择 A 列数据大于2的行
reduce[reduce['A']>2]
# 比较 iloc 和 loc
reduce.iloc[2:3,0:1]
reduce.loc[2:3,'A']
```

### 合并表格

- `pd.merge()`

```python
sub1 = df.iloc[0:2,0:1]
sub2 = df.iloc[0:2,1:2]
pd.merge(sub1,sub2,how='left',left_on='A',right_on='A')
# how='left': 只使用左表的键
# how='inner'(默认): 使用两个表的键的交集
# how='outer': 使用两个表的键的并集
# left_on: 
```

- `pd.concat()`

直接拼接

```python
pd.concat([sub1,sub2],axis=1)
# axis=1: 按列合并（向右拼接）
```

### 简单画图

```python
df['A'].plot()
```

### 时间处理

```python
df['date'] = pd.to_datetime(df['date'])
df['date'].dt.year
```

### 分类画图

```python
# 例：杭州的气温随月份的变化
sns.catplot(reduce,y="T",x="month",kind='box')
```