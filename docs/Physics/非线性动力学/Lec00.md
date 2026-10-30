# 绪论

!!! info "物理学前沿科学"
    ```mermaid
    graph TD
        A[物理学]
        B[宇观<br>时间尺度：150亿年]
        C[微观<br>时间尺度：10^-17s]
        D[复杂系统]
        E[非线性科学<br>湍流、混沌、斑图自组织、复杂网络]
        F[凝聚态物理<br>新型半导体物理，高温超导，强关联系统，玻璃态]
        G[生物物理<br>系统生物学，定量生物学，生物信息学]
        H[经济物理<br>财富分配，金融市场]
        I[社会科学]
        B --> A
        C --> A
        A --> D
        D --> E
        D --> F
        D --> G
        D --> H
        D --> I
    ```

!!! question "什么是复杂系统?"

    我们还没有有效方法做出可靠预测的系统.

    - 非线性系统：分岔现象，涌现行为，混沌现象
    - 强关联网络（网络）：无法做有效的近似处理
    - 平均场理论失效：平均值不能代表系统的性质
      - 幂律衰减，方差无穷大（例如股票系统）
    - 主动性系统：博弈论理论的困难
    - 受历史影响的系统（生物进化）：历史的定量刻画

!!! abstract "Purpose of the class"
    - Introduction of dynamics analytical tools
      - Phase space representation
      - geometry approach
      - trajectories
    - Introduction of nonlinear dynamics
      - Critical phenomena (in dynamical systems)
      - central manifold theory（中心形理论）
        > AI 也是一种降维，方法上与 central manifold theory 有相似之处
      - linear stability analysis
      - bifurcation theory
    - Pattern formation dynamics
      - Turing pattern
      - chemical waves
      - excitable media
      - spiral waves
      - pattern in bistable systems

## Overview

> 本课程不讨论混沌

### Dynamical Systems

#### Difference equation / Iterated map (discrete time)

一般形式：

$$
\vec{X}_{j+1} = \vec{f}(\vec{X}_j)
$$

!!! example "Logistic map"
    $$
    X_{j+1} = \gamma X_j (1 - X_j)
    $$

    It gives a good example of period doubling bifurcation, cascade bifurcation to chaos.

#### ODE (continuous time)

连续时间 ODE 的一般形式：

$$
\frac{d \vec{X}}{d t} = \vec{f}(\vec{X}, \lambda)
$$


!!! example "阻尼谐振子"
    $$
    m \frac{d^2 X}{d t^2} + b \frac{d X}{d t} + k X = 0
    $$

    It is an autonomous system. 降阶，相应的代价是升维。令 $X_1 = X$，$X_2 = \frac{d X}{d t}$，则有：

    $$
    \left \{
    \begin{aligned}
        \frac{d X_1}{d t} &= X_2 \\
        \frac{d X_2}{d t} &= - \frac{k}{m} X_1 - \frac{b}{m} X_2
    \end{aligned}
    \right.
    $$

    Non-autonomous system 也可以用类似方法降阶，再加一个变量 $X_3 = t$ 即可。

#### PDE (continuous time and space)

PDE 可以认为是无穷维的 ODE（能用有限差分法说明）。

!!! note
    1. Translate a PDE into an ODE is usually for the numerical simulation purpose. {++It is not suitable for analysis++} (pattern formation theory).
    2. Writing the dynamical system in a general form does not make the solution easier. The purpose is {++using geometry approach for qualitative analysis++}.
    3. One can view the dynamical system as a {++flow (trajectory) in phase space++}.

### Nonlinear Systems

!!! quote "A beautiful but false belief (from Greece)"
    *“A natural system subjected to well-defined external conditions will follow a unique course, and that a slightly change in these conditions will likewise induce a slight change in the system’s response.”*

    :point_right: 适用于线性系统！

