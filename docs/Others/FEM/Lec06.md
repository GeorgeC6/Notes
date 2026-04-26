# ABAQUS 入门

> Reliable, robust, excellent nonlinear features
>
> Less user-friendly（没有撤销？）

## Key Components

1.  Preprocesser
    model generation, meshing, B.C. and loading setup
2.  Solver
    element stiffness $[K]_{\mathrm{e}}$, global stiffness $[K]$, solve $[K] \{u\} = \{F\}$
3.  Postprocesser
    $\{U\} \to \{\sigma\}$, stress interpolation and extrapolation, results visualization

## Typical Data Structure of an Input File

Keywords Reference Manual

```
*HEADING
    Short description
*NODE
    

```

e.g.

```
*ELASTIC, TYPE=ISOTROPIC, DEPENDENCIES=0
210000, 0.3
```

> [帮助页面](https://help.3ds.com)


1.  Set Work Directory
2.  Module
    -   Part（设置几何模型 `.cae`）
    -   Property（设置材料属性）
        -   Material（设置材料参数）
        -   Create Section & Assign Section（设置截面）
    -   Assembly（装配）
    -   Step（设置求解步）
        -   静力学：Static, General
        -   Incrementation：为了避免一次性加载不收敛的情况，设置增量步长
    -   Mesh
        -   Element Type（设置单元类型）
        -   Seed（设置网格尺寸）
        -   局部加密
    -   Job


