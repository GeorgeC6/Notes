# 物理学实验 II

## 合成标准不确定度

间接被测量量 $y$ 与直接被测量量 $x_1, x_2, \ldots, x_n$ 的函数关系为 $y = f(x_1, x_2, \ldots, x_n)$

- 和差形式

$$
u_c = \sqrt{\sum_{i = 1}^n \left( \frac{\partial f}{\partial x_i} u(x_i) \right)^2}
$$

> 取平方和是因为偏导数有正有负，直接相加会抵消

- 积商形式

$$
\frac{u_c}{y} = \sqrt{\sum_{i = 1}^n \left( \frac{\partial \ln f}{\partial \ln x_i} \frac{u(x_i)}{x_i} \right)^2}
$$



!!! abstract "课程安排"
    8 次实验（70%）+ 自主实验（30%）