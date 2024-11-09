# <center>**协方差**</center>

<center>November 10, 2024</center>

## **1 $~~$协方差的定义**

设 $X$ 和 $Y$ 是两个随机变量, 考虑它们联合后的方差 $\text{Var}(X \pm Y)$. 


\begin{aligned}
    \text{Var}(X \pm Y) &= E\left[\left((X \pm Y) - E(X \pm Y)\right)^2\right] \\
    &= E\left[(X \pm Y)^2 - 2(X \pm Y)E(X \pm Y) + E(X \pm Y)^2\right] \\
    &= E\left[(X \pm Y)^2\right] - \left(E(X \pm Y)\right)^2 \\
    &= E(X^2) + E(Y^2) \pm 2E(XY) - \left(E(X)\right)^2 - \left(E(Y)\right)^2 \mp 2E(X)E(Y) \\
    &= \text{Var}(X) + \text{Var}(Y) \pm 2\left(\boxed{E(XY) - E(X)E(Y)} \right).
\end{aligned}

一方面可以看出, $\text{Var}$ 不是一个线性算子, 即 $\text{Var}(X \pm Y) \neq \text{Var}(X) \pm \text{Var}(Y)$. 另一方面，上式中的 $E(XY) - E(X)E(Y)$ 可以看作是 $X$ 和 $Y$ 之间“共同的方差”, 而且如果 $X$ 和 $Y$ 独立, 则 $E(XY) = E(X)E(Y)$, 故可以引出协方差的定义：

\begin{equation} \tag{1.1} \label{eq1.1}
    \text{Cov}(X,Y) = E(XY) - E(X)E(Y)
\end{equation}

注意到 $E(XY) - E(X)E(Y)$ 也可以写成

\begin{aligned}
    E(XY) - E(X)E(Y) &= E(XY) - E\left[E(X)E(Y)\right] \\
    &= E\left[XY - E(X)E(Y)\right] \\
    &= E\left[XY - E(X)Y - XE(Y) + E(X)E(Y)\right] \\
    &= E\left[(X - E(X))(Y - E(Y))\right].
\end{aligned}

故协方差也可以写成

\begin{equation} \tag{1.2} \label{eq1.2}
    \text{Cov}(X,Y) = E\left[(X - E(X))(Y - E(Y))\right].
\end{equation}

## **2 $~~$协方差的性质**

由式 \eqref{eq1.1} 或 \eqref{eq1.2} 可以得到以下性质：


1. $\text{Cov}(X,X) = \text{Var}(X)$.
2. $\text{Cov}(X,Y) = \text{Cov}(Y,X)$（对称）.
3. $\text{Cov}(aX,bY) = ab\text{Cov}(X,Y)$（倍乘）.
4. $\text{Cov}(X \pm Y,Z) = \text{Cov}(X,Z) \pm \text{Cov}(Y,Z)$（线性）.

从上面的性质可以看出，协方差是一个{==**双线性算子**==}，而方差不是！

更进一步的，可以由上述四条性质得到，协方差可以看成是两个随机变量的**内积**. 所以下面这条性质变得显而易见：

\begin{equation*}
    \left(\text{Cov}(X,Y) \right)^2 \leq \text{Var}(X)\text{Var}(Y).
\end{equation*}

## **3 $~~$协方差矩阵**

设 $X = (X_1, X_2, \cdots, X_n)$ 是一个 $n$ 维随机向量，其协方差矩阵定义为

\begin{equation} \tag{3.1} \label{eq3.1}
    \text{Cov}(X) = \begin{pmatrix}
        \text{Cov}(X_1,X_1) & \text{Cov}(X_1,X_2) & \cdots & \text{Cov}(X_1,X_n) \\
        \text{Cov}(X_2,X_1) & \text{Cov}(X_2,X_2) & \cdots & \text{Cov}(X_2,X_n) \\
        \vdots & \vdots & \ddots & \vdots \\
        \text{Cov}(X_n,X_1) & \text{Cov}(X_n,X_2) & \cdots & \text{Cov}(X_n,X_n)
    \end{pmatrix}.
\end{equation}