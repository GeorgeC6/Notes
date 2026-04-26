# 绪论

> 2026/03/03 10:00


!!! quote "参考资料"
    - 主要
        - Griffiths（第四版）
        - 课程讲义
    - 次要
        - Jackson
        - {++Zangwill++}
        - Landau. *Classical Field Theory*
        - Mikio Nakahara. *Geometry, Topology and Physics*

电·动力学（Electro-dynamics）：“电”指的是电磁场。{++电磁场是一个对象++}，而不是现象。现象是对象的一种表现、性质。那为什么电磁场是一个物理对象呢？$\implies$ 来自于{++观测++}。

- 测量
    - 对象的存在与否，可以通过观测鉴别开来，这是认识物理对象的第一步
- 描述
    - 哪些量可以刻画对象的状态
    - 形成概念：电场 $\boldsymbol{E}(\boldsymbol{x}, t)$ 和磁场 $\boldsymbol{B}(\boldsymbol{x}, t)$ 随着空间会变化，是一个矢量，也会随时间变化
- 规律：麦克斯韦方程组

    $$
    \left \{
    \begin{gather}
        \nabla \cdot \boldsymbol{E}(\boldsymbol{x}, t) = \frac{\textcolor{orange}{\rho(\boldsymbol{x}, t)}}{\varepsilon_0} \tag{1.1} \label{maxwell-divE} \\[1ex]
        \nabla \times \boldsymbol{E}(\boldsymbol{x}, t) + \frac{\partial}{\partial t} \boldsymbol{B}(\boldsymbol{x}, t) = \mathbf{0} \tag{1.2} \label{maxwell-curlE} \\[1ex]
        \nabla \times \boldsymbol{B}(\boldsymbol{x}, t) - \varepsilon_0 \mu_0 \frac{\partial}{\partial t} \boldsymbol{E}(\boldsymbol{x}, t) = \mu_0 \textcolor{orange}{\boldsymbol{J}(\boldsymbol{x}, t)} \tag{1.3} \label{maxwell-curlB}\\[1ex]
        \nabla \cdot \boldsymbol{B}(\boldsymbol{x}, t) = 0 \tag{1.4} \label{maxwell-divB}
    \end{gather}
    \right.
    $$

    - 变量：$\Big(\boldsymbol{E}(\boldsymbol{x}, t), \boldsymbol{B}(\boldsymbol{x}, t) \Big), \rho(\boldsymbol{x}, t), \boldsymbol{J}(\boldsymbol{x}, t)$
    - 常量：$\varepsilon_0, \mu_0$
    - 方程：\eqref{maxwell-divE} \eqref{maxwell-curlB} 中的 $\rho$ 和 $\boldsymbol{J}$ 称为“背景”，无需考虑其动力学

将 \eqref{maxwell-divE} \eqref{maxwell-curlB} 联立消去 $\boldsymbol{B}$，可以得到

$$
\nabla \cdot \boldsymbol{J} + \frac{\partial \rho}{\partial t} = 0
$$

这反映了电荷的守恒性质。