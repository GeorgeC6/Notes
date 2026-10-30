# 1 Quantitative Formulation

!!! abstract "Objectives"
    - 基于基本物理/化学定律发展得到非线性 ODE
    - 无量纲化形式
    - 介绍延迟模型（the delay model）


## 1.1 Dynamical equation in classical mechanics

### Beads on a rotating hoop

Newton's second law:

$$
\vec{F} = m \vec{a}
$$

-   Gravitational force: $mg$
    - in the tangential direction: $- mg \sin \theta$
-   Centrifugal force: $m \omega^2 r \sin \theta$


### Dimensional analysis

$$
m r \frac{d^2 \theta}{d t^2} = - mg \sin \theta - b \frac{d \theta}{d t} + m \omega^2 r \sin \theta \cos \theta
$$


### Analysis of an overdamped bead


### Duffing equation


## 1.2 Chemical reaction model

$$
X + Y \overset{k}{\longrightarrow} 2Z + W
$$

the mass action law:

$$
\frac{d Z}{d t} = 2 k X Y, \quad \frac{d W}{d t} = k X Y, \quad \frac{d X}{d t} = - k X Y
$$

!!! note "Belousov-Zhabotinsky (BZ) reaction: Oregonator model"
    Control parameters: 

    $$
    A = [\mathrm{BrO_3^-}], \quad B = [\mathrm{CH_2(COOH)_2}] + [\mathrm{BrCH(COOH)_2}]
    $$


## 1.3 Ecological system & Delay model

A simple model for the growth of a population:

$$
\frac{d N}{d t} = \text{birth - death + migration}
$$

Simpler case: no migration, linear dependence on birth and death rates:

$$
\frac{d N}{d t} = \lambda_b N - \lambda_d N \implies \frac{\dot{N}}{N} = \lambda_b - \lambda_d \implies N = N_0 
$$