# Trees

## Preliminaries

### Terminology

族谱 Lineal Tree -> 倒序：Pedigree Tree（一个人最多有两个父母，此为二叉树）

**Definition**:

A tree is a collection of nodes. The collection can be empty; otherwise, a tree consists of:

- a distinguished node $r$ called the **root**;
- and zero or more **subtrees** $T_1, T_2, \ldots, T_k,$ each of whose roots are connected by a directed edge from $r$.

!!! info "Note"
    - Subtrees must not connect to each other. 树不能是环。
    - A tree with $n$ nodes has $n-1$ edges.

- degree of a node: number of subtrees of the node
- degree of a tree: maximum degree of any node
- parent: a node that has subtrees
- children: the roots of the subtrees of a parent
- siblings: children of the same parent
- leaf: a node with no children (terminal node)
- path from $n_1$ to $n_k$: a (unique) sequence of nodes $n_1, n_2, \ldots, n_k$ such that $n_i$ is the parent of $n_{i+1}$ for $1 \leq i < k$.
- length of a path: number of edges in the path
- depth of $n_i$: length of the unique path from the root to $n_i$. Depth(root) = 0.
- height of a node: length of the longest path from the node to a leaf. Height(leaf) = 0.
- height (depth) of a tree: height(root) = depth(deepest leaf).
- ancestor: 

### Implementation

#### List Representation

`(A, (B, (D, E)), (C, (F)))`

不统一！

#### Linked list Representation

有的节点只有一个子节点，有的有两个，怎么办？

- FirstChild-NextSibling

```
----------------------------
|           Node           |
----------------------------
| FirstChild | NextSibling |
----------------------------
```

不唯一，兄弟节点无顺序

## Binary Trees

### Definition

A binary tree is a tree in which no node has more than two children.

```
----------------
|   Element    |
----------------
| Left | Right |
----------------
```

!!! warning "顺序很重要"

!!! example "Expression Trees (Syntax Trees)"
    Given an infix expression: $A + B \cdot C / D$, construct the expression tree.

    ```
        +
       / \
      A   /
         / \
        *   D
       / \
      B   C
    
    ```

    $(a+b)*(c*(d+e)) = ab + cde +**$


### Tree Traversal

例
```
      A
     / \
    B   C
   / \ / \
  D  E F  G
         / \
        H   I
```



#### Preorder Traversal 先根遍历

```c
void Preorder(tree_ptr tree)
{
  if (tree)
  {
      visit(tree);
      for (each child in tree)
          Preorder(child);
  }
}
```

#### Postorder Traversal 后根遍历

```c
void Postorder(tree_ptr tree)
{
  if (tree)
  {
      for (each child in tree)
          Postorder(child);
      visit(tree);
  }
}
```

#### Levelorder Traversal 层序遍历

```c
void Levelorder(tree_ptr tree)
{
  enqueue(tree);
  while (queue not empty)
  {
      visit(T = dequeue());
      for (each child in T)
          enqueue(child);
  }
}
```

#### Inorder Traversal 中根遍历

```c
void Inorder(tree_ptr tree)
{
  if (tree)
  {
      Inorder(tree->left);
      visit(tree->element);
      Inorder(tree->right);
  }
}
```

迭代版：

```c
void Inorder(tree_ptr tree)
{
  Stack S = CreateStack(MAX_SIZE);
  for (;;)
  {
      for (;tree; tree = tree->left)
          Push(tree, S);
      tree = Top(S);
      Pop(S);
      if (tree == NULL)
          break;
      visit(tree->element);
      tree = tree->right;
  }
}
```

!!! example "Expression Tree Traversal"

    - Inorder: $A + B * C / D$
    - Preorder: $+ A / * B C D$
    - Postorder: $A B C * D / +$

!!! example "File hierarchy in OS"

### Threaded Binary Tree

Rules:

1. If `Tree->left` is NULL, replace it with the inorder predecessor.
2. If `Tree->right` is NULL, replace it with the inorder successor.
3. There must not be any loose threads. Therefore a threaded binary tree must have a {++head node++} of which the left child points to the first node

!!! tip "Note"
    In a general tree, the order of children does not matter. But in a **binary tree**, left child and right child are different.

    - :thumbsdown: Skewed Binary Tree
    - :star: Complete Binary Tree
        - All the leaf nodes are at adjacent levels
    - :star: Full Binary Tree

### Properties of Binary Trees

- The maximum number of nodes at level $i$ is $2^{i-1}$, $i \geq 1$.
- The maximum number of nodes in a binary tree of depth $k$ is $2^k - 1$, $k \geq 1$.
- For any nonempty binary tree, $n_0 = n_2 + 1$, where $n_0$ is the number of leaf nodes and $n_2$ is the number of nodes with degree 2.
  
  !!! note "Proof"
      Let $n = n_0 + n_1 + n_2$ be the total number of nodes in the tree. The total number of edges $B = n - 1$.

## Binary Search Trees

### Definition

### ADT

- Objects: A finite ordered list with zero or more elements.
- Operations:
    - MakeEmpty
    - Find
    - FindMin
    - FindMax
    - Insert
    - Delete
    - Retrieve

### Implementations

#### Find

```c
Position Find(ElementType X, SearchTree T)
{
    if (T == NULL)
        return NULL; // 必须先判断
    if (X < T->Element)
        return Find(X, T->Left);
    else if (X > T->Element)
        return Find(X, T->Right);
    else
        return T;
}
```

- $T(N) = \mathcal{O}(d)$, where $d$ is the depth of the tree.
- 若树比较平衡，$d \sim \log_2 n$

#### FindMin

一路向左

```c
Position FindMin(SearchTree T)
{
    if (T == NULL)
        return NULL;
    else if (T->Left == NULL)
        return T; // 最左
    else
        return FindMin(T->Left); // 继续向左
}
```

#### FindMax

一路向右

```c
Position FindMax(SearchTree T)
{
    if (T != NULL)
        while (T->Right != NULL)
            T = T->Right;
    return T;
}
```

- $T(N) = \mathcal{O}(d)$.

#### Insert

```c
SearchTree Insert(ElementType X, SearchTree T)
{
    if (T == NULL)
    {
        T = malloc(sizeof(struct TreeNode));
        if (T == NULL)
            FatalError("Out of space!!!");
        else
        {
            T->Element = X;
            T->Left = T->Right = NULL;
        }
    } // 创建一棵树
    else if (X < T->Element)
        T->Left = Insert(X, T->Left);
    else if (X > T->Element)
        T->Right = Insert(X, T->Right);
    /* Else: X is in the tree already; do nothing or handle special case */
    return T;
}
```

#### Delete

叶子容易删，如果是根节点，怎么办？

- Delete a leaf node: reset the parent's pointer to `NULL`.
- Delete a degree-1 node: replace the node by its single child.
- Delete a degree-2 node:
    1. Replace the node by **the largest one in its left subtree** *or* **the smallest one in its right subtree**（用左子树的最大值/右子树的最小值替代（最好是度数为1的节点））.
    2. Delete the replacing node from the subtree.

!!! example "Delete 60"

    ```
            40
           /  \
         20    60
        /  \  /  \
      10  30 50  70
            /  \
           45  55
               /
             52
    ```

    - Solution 1: Reset left subtree

    ```
            40
           /  \
         20    55
        /  \  /  \
      10  30 50  70
            /  \
           45  52
    ```

    - Solution 2: Reset right subtree

    ```
            40
           /  \
         20    70
        /  \  /
      10  30 50
            /  \
           45  55
               /
             52
    ```

    Solution 1 is better! 减少了树的深度！

静态删除：

```c
SearchTree Delete(ElementType X, SearchTree T)
{
    Position TmpCell;

    if (T == NULL)
        Error("Element not found");
    else if (X < T->Element)
        T->Left = Delete(X, T->Left);
    else if (X > T->Element)
        T->Right = Delete(X, T->Right);
    else // Found element to be deleted
    {
        if (T->Left && T->Right) // Two children
        /* Replace with smallest in right subtree */
        {
            TmpCell = FindMin(T->Right);
            T->Element = TmpCell->Element;
            T->Right = Delete(T->Element, T->Right);
        }
        else // One or zero children
        {
            TmpCell = T;
            if (T->Left == NULL) // Also handles 0 children
                T = T->Right;
            else if (T->Right == NULL)
                T = T->Left;
            free(TmpCell);
        }
    }
    return T;
}
```

- $T(N) = \mathcal{O}(d)$.

!!! tip ""
    增删改查的时间复杂度都是 $\mathcal{O}(d)$！

    树之所以快，是因为树“很能装”。

    代价是要维持树的形状。

!!! note "Lazy Deletion"
    下载一整天，删除一秒钟，为什么？

    Add a flag field to each node, to **mark** the node as deleted.

    在物理硬盘中并未真正删除。有新文件需要存储时，再覆盖。

    !!! question
        While the number of deleted nodes is the same as the number of active nodes, will it seriously affect the efficiency of the operation?

        对二叉树影响不大，因为删掉一半节点，树的深度几乎不变。

### Average-Case Analysis

!!! question
    Place $n$ elements in a binary search tree. How high can the tree be?

    The height depends on the order of insertion.

    4,2,1,3,6,5,7 vs. 1,2,3,4,5,6,7