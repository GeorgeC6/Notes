## 拟合优度

检验观察数据和理论预言是否相符

### 分类数据的理论检验

- 假设 $H_0: P(X=a_i) = p_i, i=1,2,...,k$
- 对 $X$ 进行 $n$ 次观测，得到样本数据 $x_1,x_2,...,x_n$，$x = a_i$ 的频数为 $\nu_i$
  - $\nu \sim B(n,p)$，近似为 $\nu \sim P(np)$

检验 $H_0$ 是否成立：
- 理论预言：$a_i$ 的个数为 $np_i$
- 实际测量：$a_i$ 的个数为 $\nu_i$
- $\left|np_i - \nu_i \right|$ 应该尽可能小

定义

$$Z = \sum_{i=1}^k \frac{(np_i - \nu_i)^2}{np_i}$$

称作 **Pearson's $\chi^2$ Test Statistic**

- $\nu$ 在一定条件下符合 Poisson 分布
- $\frac{np_i - \nu_i}{\sqrt{np_i}} \sim N$
- $\sum_{i=1}^k p_i = 1$，故自由度为 $k-1$，$Z \sim \chi^2_{k-1}$

### P-Value

- $Z$ 越大，理论与实验越不符
- $Z/(k-1)$ 最佳值为 1
- $Z > C$，拒绝 $H_0$. 其中 $C = \text{chi2.ppf}(1-\alpha,k-1)$
- p-value 的含义：z 取值大于 $z'$ 的概率（比 $z'$ 更不可能发生）
  - $P = 1 - \text{chi2.cdf}(z',k-1)$

### 拟合优度例子

掷骰子，共掷了 $6 \times 10^10$ 次，每个面的次数分别为 $10^{10}-10^6,10^{10}+1.5 \times 10^6,10^{10}-2 \times 10^6,10^{10}+4 \times 10^6,10^{10}-3 \times 10^6,10^{10}+0.5 \times 10^6$. 骰子是否均匀？





### 对列联表 (Contingency Table)

- 变量 A 分为 $a$ 类，变量 B 分为 $b$ 类，数据共分为 $a \times b$ 类
- 总样本数为 $n$，每一类的样本数为 $n_{ij}$
- 设 A 落入第 $i$ 个类别的概率为 $u_i$，B 落入第 $j$ 个类别的概率为 $v_j$，则

$$\sum_{i=1}^a u_i = 1, \sum_{j=1}^b v_j = 1$$

- 若 A,B 独立，则 $P(A=a_i,B=b_j) = u_i v_j$