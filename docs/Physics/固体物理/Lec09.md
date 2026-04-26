# 简正振动、声子

> 简正：简谐、正交

!!! info "Motivation"
    -   目标：求解在特定温度下的晶格振动的总能量和比热
    -   一方面，晶格中所有原子的运动是相互耦合的，直接求解极其复杂。希望找到新的描述方式，使复杂的多体振动问题简单化
    -   另一方面，一维单原子链模型不能求解出振动总能量，但是给出了色散关系

    :point_right: 将振动分解为一系列彼此独立的简正振动模式

!!! example "一维单原子链模型"
    晶格振动的总能量 $E = T + V$. 动能

    $$
    T = \sum_{n = 1}^{N} \frac{1}{2} m \dot{u}_n^2
    $$

    势能

    $$
    V = \sum_{n = 1}^{N} \frac{1}{2} \beta (u_n - u_{n - 1})^2
    $$

    势能表达式采用了周期性边界条件，且以平衡状态为势能零点。

    :warning: 注意到势能中出现了交叉项 $u_n u_{n-1}$，表明不同原子的运动相互耦合，变量无法直接分离！
    
    :bulb: 这是因为晶格振动是原子的集体行为。而我们想将振动分解为一组独立的振动模式，消除势能中的交叉项，同时保证动能里不引入交叉项。

-   振动特解：$u_n = A \mathrm{e}^{\mathrm{i}(qna - \omega t)}$
-   色散关系：$\omega = 2 \sqrt{\frac{\beta}{m}} \left| \sin \frac{qa}{2} \right|$
-   每个波矢 $q$ 对应一个振动模式 $u_{n, q} = A_q \mathrm{e}^{\mathrm{i}[qna - \omega(q) t]}$

实际晶格振动可表示为所有振动模式的线性叠加

$$
\begin{equation}
    \begin{aligned}
        U_n &= \sum_q A_q \mathrm{e}^{\mathrm{i}[qna - \omega(q) t]} \\
        &= \frac{1}{\sqrt{N m}} \sum_q \Big(\sqrt{N m} A_q \mathrm{e}^{-\mathrm{i} \omega(q) t} \Big) \mathrm{e}^{\mathrm{i} qna}
    \end{aligned}
\end{equation}
$$

这个操作相当于做了一次傅里叶变换：

$$
\begin{equation}
    \begin{aligned}
        U_n &= \frac{1}{\sqrt{N m}} \sum_q Q(q) \mathrm{e}^{\mathrm{i} qna} \\
        Q(q) &= \sqrt{N m} A_q \mathrm{e}^{-\mathrm{i} \omega(q) t}
    \end{aligned}
\end{equation}
$$

下面将说明 $Q(q)$ 就是简正坐标

!!! note "预备公式"
    1.  $Q(-q) = Q^*(q)$
    2.  $\frac{1}{N} \sum_{n = 1}^N \mathrm{e}^{\mathrm{i} (n - n') q} = \delta_{q, q'}$