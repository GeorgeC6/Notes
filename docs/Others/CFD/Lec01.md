# Chapter 1: Philosophy of CFD

!!! quote ""
    *All the mathematical sciences are founded on relations between physical laws of numbers, so that the aim of exact science is to reduce the problems of nature to the determination of quantities by operations with numbers.*

    <div align="right">——James Clerk Maxwell</div>

守恒律的一般形式是{++积分方程++}或 {++PDE++}，CFD 是将其转换为{++代数方程++}的艺术。

!!! quote "CFD before Modern Computers"
    - 1917, Richardson 差分方法求解气象方程
        - 使用了 6400 个计算员，算法设计考虑了并行计算
    - 1928, Courant, Friedrichs 和 Lewy 证明 PDE 解存在唯一性论文
        - PDE -> 离散为代数方程
    - Goudonov