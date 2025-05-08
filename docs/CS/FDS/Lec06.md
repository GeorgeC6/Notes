# Graph

## Definition

Graph $G$ is a pair of sets $G(V, E)$ where:

- V: finite nonempty set of Vertices
- E: finite set of Edges

无向图（Undirected Graph）：

$$
(v_i, v_j) = (v_j, v_i)
$$

有向图：箭头指向的是 head，发出的是 tail。

限制：

1. 自环
2. 重边

完全图（Complete Graph）：边数最大，每两个顶点都有一条边连接。

$$
\begin{aligned}
    V &= n \\
    E &= \binom{n}{2} = \frac{n(n-1)}{2}
\end{aligned}
$$

无向图：如果两个节点用一条边连接，则它们是是相邻的（Adjacent）

$(v_i, v_j)$ is **incident on** $v_i$ and $v_j$.

有向图：

- $v_i$ is adjacent to $v_j$；$v_j$ is adjacent from $v_i$.
- $<v_i, v_j>$ is incident on $v_i$ and $v_j$.

Subgraph：$G' = (V', E')$ where $V' \subseteq V$ and $E' \subseteq E$.

Path from $v_p$ to $v_q$: $(v_p, v_1), (v_1, v_2), \ldots, (v_{q-1}, v_q) \subseteq E$.

Simple path: no repeated vertices.

Cycle: simple path where $v_p = v_q$.

!!! tip "Tree"
    Tree is a graph that is connected and acyclic.

Connected graph: any two vertices are connected by a path.

Component of an undirected graph: maximal connected subgraph.

DAG (Directed Acyclic Graph)

Strongly connected directed graph: 每一对 $v_i$ 和 $v_j$ 都有互相指向对方的路径。没有方向则称为弱连通。

Strongly connected component: maximal subgraph that is strongly connected.

**Degree( $v$ )**: number of edges incident to $v$. For directed graph, we have **in-degree** and **out-degree**.

Given $G$ with $n$ vertices and $e$ edges,

$$
e = \sum_{i=1}^n \text{degree}(v_i) / 2
$$

## Representation

### Adjacency Matrix

邻接矩阵：`adj_mat[n][n]` is defined for $G(V, E)$ with $n$ vertices:

$$
\texttt{adj\_mat}[i][j] = 
\begin{cases}
    1 & \text{if } (v_i, v_j) \in E \\
    0 & \text{otherwise}
\end{cases}
$$

!!! note "Note"
    If $G$ is undirected, then `adj_mat[][]` is symmetric. Thus we can save space by storing only half of the matrix.

    三角阵怎么存储？不能用方阵，不然空间使用是一样多的！

    The trick is to use a 1D array: $\texttt{adj\_mat}[n(n+1)/2] = \{a_{11}, a_{12}, a_{13}, \ldots, a_{nn}\}$

对于有向图，第 $i$ 行表示从 $v_i$ 出发的边。

$$
\begin{aligned}
    \text{degree}(i) &= \sum_{j=0}^{n-1} \texttt{adj\_mat}[i][j] \quad \text{if } G \text{ is undirected} \\
    &+ \sum_{j=0}^{n-1} \texttt{adj\_mat}[j][i] \quad \text{if } G \text{ is directed}
\end{aligned}
$$

时间/空间复杂度：$\mathcal{O}(n^2)$

### Adjacency List

把邻接矩阵每一行换成链表

Note: the order of nodes in each list does not matter.

For undirected graph

$$
S = n \,\text{heads} + 2e \,\text{nodes} = (n + 2e) \,\text{pointers} + 2e \,\text{ints}
$$

Degree( $i$ ) = number of nodes in graph[i]

时间复杂度：$\mathcal{O}(n + e)$

For directed graph

- `inv[i]` is the list of nodes that point to $i$. 反转链表
- Multilist

### Adjacency Multilists

In adjacency list, for each $(i, j)$ we

## Topological Sort

!!! example "Example"
    选课，每门课程有先修要求。能否排出一个顺序，把所有的课都上完？

    > 两门课不可能互相是先修关系！

- AOV Network (Activity On Vertex)
    - digraph $G$ in which $V(G)$ represents the activities and $E(G)$ represents the precedence relations.

- $i$ 是 $j$ 的前驱：存在一条从 $i$ 到 $j$ 的路径。
- $i$ 是 $j$ 的直接前驱：$\langle i, j\rangle \subseteq E$，此时 $j$ 是 $i$ 的后继。

- 偏序（Partial order）: 有传递性但**不自反**的关系。

A feasible AOV network must be a DAG.

### Definition

A topological order is a linear ordering of the vertices of a graph st., for any two vertices $i$ and $j$, if $i$ is a predecessor of $j$, then $i$ appears before $j$ in the ordering.

!!! note "Note"
    The topological order is not unique.

Test an AOV for feasibility, and generate a topological order if possible.

从入度为 0 的顶点开始，

```c
void TopSort(Graph G)
{
    int Counter;
    Vertex V, W;
    for (Counter = 0; Counter < NumberOfVertices(G); Counter++){
        V = FindNewVertexOfIndegreeZero(G); // 找到入度为0的顶点
        if (V == NULL) {
            printf("Graph is not feasible.\n");
            return;
        }
    }
}
```

## Shortest Path Algorithm

Given a digraph $G = (V, E)$, and a cost function $c(e)$ for $e \in E(G)$. The **length** of a path $P$ from **source** to **destination** is $\displaystyle \sum_{e_i \subset P} c(e_i)$.

Single-Source Shortest Path Problem

- 从一点出发，求到其他点的最短路径
- 不考虑负环，自己到自己的距离为0

### Unweighted Shortest Path

把所有距离相同的节点列出

**{==广度优先搜索（Breadth First Search, BFS）==}**

#### Implementation

- `Table[i].Dist`: distance from $s$ to $v_i$
- `Table[i].Known`: whether $v_i$ is known
- `Table[i].Path`: predecessor of $v_i$ in the path from $s$ to $v_i$，用于记录路径


```c title="无权重最短路径（伪代码）" linenums="1"
void Unweighted( Table T )
{
    int CurrentDist;
    Vertex V, W;
    for (CurrentDist = 0; CurrentDist < NumberOfVertices(G); CurrentDist++)
    {
        for (each vertex V in G)
        {
            if (!T[V].Known && T[V].Dist == CurrentDist)
            {
                T[V].Known = true;
                for (each vertex W adjacent to V)
                {
                    if (T[W].Dist == Infinity)
                    {
                        T[W].Dist = CurrentDist + 1;
                        T[W].Path = V;
                    }
                }
            }
        }
    }
}
```

- $\mathcal{O}(|V|^2)$

没有保存

### Dijkstra's Algorithm

两个集合：已经找到最小路径的点集 $S$ 和未知的点集。如何把没确定的顶点拉进 $S$？

Let $S = \{s$ and $v_i$ whose shortest paths from $s$ have been found$\}$.


### Acyclic Graphs

有向无环图，可以用拓扑排序来找最短路径。

#### AOE Network

- `EC[j]` / `LC[j]`: earliest/latest completion time of activity $j$


## Network Flow Problem

一个水管网络，两个节点之间能传输的最大流量是多少？

!!! note "Note"
    除了源点（source）和汇点（sink），其他节点的流入量等于流出量。

### A Simple Algorithm

三幅图：$G, G_f, G_r$，分别表示原图、流量图和残余图。

1. Find any path $s \to t$ in $G_r$.（随机找一条增益路径）
2. Take the minimum edge on this path as the amount of flow and add it to $G_f$.
3. Update the residual graph $G_r$, remove the $0$ flow edges.
4. If (there is a path $s \to t$ in $G_r$) then go to step 1. Else stop.

问题：第一步随机选取的路径很关键！

### A Solution

> allow the algorithm to undo its decisions.
>
> 在更新 $G_r$ 的边之后，再增加一条反向的边（假设水能反向回流）。

For each edge $(v, w)$ with flow $f_{v,w}$ in $G_f$, **add an edge $(w, v)$ with flow $f_{w,v}$ in $G_r$**.

!!! note "Proposition"
    If the edge capacities are rational numbers, this algorithm will terminate with a maximum flow.

此算法保证能给出最大流量，但是效率低下（选取路径时没有策略）。

!!! tip "Analysis"
    (If the capacities are integers)

    - An augmenting path can be found by an unweighted shortest path algorithm.（$\mathcal{O}(|V| + |E|) = \mathcal{O}(|E|)$）

      - $T = \mathcal{O}(f \cdot |E|)$ where $f$ is the maximum flow.
    - Always choose the augmenting path that allows the largest increase in flow. 反向的 Dijkstra 算法！
    
    $$
    \begin{aligned}
        T &= T_{\text{augmentation}} + T_{\text{find a path}} = \mathcal{O}(|E| \log \text{cap}_{\max}) \times \mathcal{O}(|E| \log |V|) \\
        &= \mathcal{O}(|E|^2 \log |V|) \qquad \text{ if cap}_{\max} \text{ is a small integer}
    \end{aligned}
    $$

    - Always choose the augmenting path that has the fewest edges. 无权最短路径！

    $$
    T = T_{\text{augmentation}} + T_{\text{find a path}} = \mathcal{O}(|E|) \times \mathcal{O}(|E| \cdot |V|) = \mathcal{O}(|E|^2 \cdot |V|)
    $$

    !!! note "Note"
        - 如果对于每个节点，要么只有流量为1的边进入，要么只有流量为1的边流出，$\mathcal{O}(|E||V|^{1/2})$
        - *min-cost*

## Minimum Spanning Tree

一个图 $G$ 的生成树是一个包含 $G$ 所有顶点的子图，子图是树且子图的边是原图的子集。

- *minimum*: the total cost of edges is minimized.
- *spanning*: the tree covers every vertex in the graph.
- *tree*: the graph is acyclic. $|E| = |V| - 1$.
- A minimum spanning tree exists iff $G$ is connected.

!!! tip "Greedy Method"
    1. 必须在原图 $G$ 中选择边
    2. 必须选择 $|V| - 1$ 条边
    3. 选出的边不能构成环

### Prim's Algorithm

> **“Grow a tree”**
>
> very similar to Dijkstra's algorithm.
>
> 贪心的部分像，但是 Prim 算法不需要回撤（选的边数是固定的，就是 $|V| - 1$）。

### Kruskal's Algorithm

> **“Maintain a forest”**

```c
void Kruskal(Graph G)
{
    T = {};
    while ( T contains less than |V| - 1 edges && E is not empty )
    {
        choose a least cost edge (v, w) from E;
        delete (v, w) from E;
        if ((v, w) does not form a cycle in T)
        {
            add (v, w) to T;
        }
        else
        {
            discard (v, w);
        }
    }
    if (T contains |V| - 1 edges)
    {
        return T;
    }
    else
    {
        return "Graph is not connected";
    }
}
```

## Applications of Depth-First Search

> A generalization of preorder traversal

```c
void DFS(Graph G, Vertex V)
{
    V->Known = true;
    for (each vertex W adjacent to V)
    {
        if (!W->Known)
        {
            DFS(G, W); // 递归调用
        }
    }
}
```

### Undirected graph

DFS 可以遍历连通图，所以可以用于找到所有连通组件

```c
void ListComponents(Graph G)
{
    for (each vertex V in G)
    {
        if (!V->Known)
        {
            DFS(G, V);
            printf("Component: %d\n", V->ID);
        }
    }
}
```

### Biconnectivity

- $v$ is an **articulation point** if removing $v$ leaves the graph with $\geq 2$ components.
- $G$ is a **biconnected graph** if it is connected and has no articulation points. 双连接图
- $G$ is a **biconnected component** if it is *maximal* biconnected subgraph.

!!! note "Note"
    No edges can be shared by two or more biconnected components. Hence $E(G)$ is {++partitioned++} by the biconnected components of $G$.

    两个双连通组件之间不可能共享边。否则这两个双连通组件又构成了一个双连通组件，与定义矛盾。

#### 寻找双连通组件

- 使用 DFS 获得生成树
- 找 articulation points
    - *The root* is an articulation point $\iff$ it has $\geq 2$ children.
    - *Any other vertex* $v$ is an articulation point $\iff$ $v$ has {++at least one child++}, **and** it is impossible to jump back to $v$'s ancestor by {++moving down a least 1 step++}.（back edge 也算）

back edge 是指不在生成树中的边。

!!! tip "Low number"
    $$
    \text{Low}(v) = \min \left\{ \small{\text{DFS-Num}}(v), \min \left \{\text{Low}(w) | w \text{ is a child of } v\right\}, \min \left\{\small{\text{DFS-Num}}(w) | (v, w) \text{ is a back edge}\right\} \right\}
    $$

    Therefore, $u$ is an articulation point if and only if:

    1. $u$ is the root and has $\geq 2$ children, or
    2. $u$ is not the root and has at least one child $v$ such that $\text{Low}(v) \geq \text{DFS-Num}(u)$.

### Euler Circuits

- **Euler tour**（欧拉路径）: draw each line exactly once without lifting the pen. 一笔画
- **Euler circuit**（欧拉回路）: draw each line exactly once without lifting the pen *and return to the starting point*. 一笔画能回到起点

!!! note "Proposition"
    An Euler circuit is possible only if the graph is connected and each vertex has an **even degree**.

    An Euler tour is possible if there are exactly **two** vertices with an **odd degree**.

修改后的 DFS 算法，遍历所有的边