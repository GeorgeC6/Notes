# Priority Queues (Heaps)

Delete the element with the highest/lowest priority.

## ADT

- Objects: A finite ordered list with zero or more elements.
- Operations:
    - Initialize
    - :star: Insert
    - :star: DeleteMin/DeleteMax
    - FindMin

## Implementations

### Array

- Insert
    - add one item at the end: $\Theta(1)$
- Delete
    - find: $\Theta(n)$
    - remove the item and shift the array: $\mathcal{O}(n)$

### Linked List

- Insert
    - add to the front of the chain: $\Theta(1)$
- Delete
    - find: $\Theta(n)$
    - remove the item: $\Theta(1)$

### Ordered Array

- Insert
    - find the right place: $\mathcal{O}(n)$
    - shift the array: $\mathcal{O}(n)$
- Delete
    - remove the first/last item: $\Theta(1)$

### Ordered Linked List

- Insert
    - find the right place: $\mathcal{O}(n)$
    - add: $\Theta(1)$
- Delete
    - remove the first/last item: $\Theta(1)$

显然 Insertion 的操作次数比 Delete 多，所以链表的实现最好。

!!! tip ""
    插入是随机的，但删除一直是删除最小的。这会使二叉树越来越斜！

## Binary Heap

完全二叉树由完美二叉树的前 $n$ 个节点组成。

A complete binary tree of height $h$ has between $2^h$ and $2^{h+1} - 1$ nodes.

$$h = \lfloor \log_2 n \rfloor$$

### Array Representation

- `BT[0]` is not used.
- 按层序依次存放节点。

!!! note "Lemma"
    If a complete binary tree with $n$ nodes is represented sequentially, then for any node $i$:

    1. index of the parent

    $$\text{Parent}(i) =
    \begin{cases}
        \text{None} & \text{if } i = 1 \\
        \lfloor i/2 \rfloor & \text{otherwise}
    \end{cases}$$

    2. index of the left child



```c
PriorityQueue Initialize(int MaxElements)
{
    PriorityQueue H;

    if (MaxElements < MinPQSize)
        Error("Priority queue size is too small"); // 太小的队列没意义
    
    H = malloc(sizeof(struct HeapStruct));
    if (H == NULL)
        FatalError("Out of space!!!");
    /* Allocate the array plus one extra for sentinel（哨兵） */
    H->Elements = malloc((MaxElements + 1) * sizeof(ElementType));
    if (H->Elements == NULL)
        FatalError("Out of space!!!");
    H->Capacity = MaxElements;
    H->Size = 0;
    H->Elements[0] = MinData; // 哨兵
    return H;
}
```

### Heap Order Property

- **{++min tree++}**: 节点的值比其子节点的值小。
- **{++min heap++}**: 满足 min tree 的完全二叉树。

### Basic Heap Operations

#### Insertion

> *先满足结构，再调整顺序*

```
        10
      /    \
    12      20
   /  \    /
  15  18  ？
```

```c
/* H->Elements[0] is a sentinel */
void Insert(ElementType X, PriorityQueue H)
{
    int i;

    if (IsFull(H))
    {
        Error("Priority queue is full");
        return;
    }

    for (i = ++H->Size; H->Elements[i/2] > X; i /= 2)
        H->Elements[i] = H->Elements[i/2];
    H->Elements[i] = X;
}
```

代码中并没有真正的交换操作，而是将最后一个元素不断**上浮（percolate up）**。

哨兵的存在省去了判断是否到达根节点的步骤。保持了代码的一致性[^1]。

[^1]: 代码越短越好。让TCB（信任计算基）小。Bug也少。

#### DeleteMin

```c
ElementType DeleteMin(PriorityQueue H)
{
    int i, Child;
    ElementType MinElement, LastElement;
    if (IsEmpty(H))
    {
        Error("Priority queue is empty");
        return H->Elements[0];
    }
    MinElement = H->Elements[1]; // Save the min element
    LastElement = H->Elements[H->Size--]; // Get the last element and reduce the size
    for (i = 1; i * 2 <= H->Size; i = Child)
    {
        // Find smaller child
        Child = i * 2;
        if (Child != H->Size && H->Elements[Child + 1] < H->Elements[Child])
            Child++;
        // Percolate one level
        if (LastElement > H->Elements[Child])
            H->Elements[i] = H->Elements[Child];
        else
            break;
    }
    H->Elements[i] = LastElement;
    return MinElement;
}
```

- 删除体现在 `H->Size--` 上
- `Child != H->Size` 判断是否有右孩子，防止数组越界
    - 能否也在这里加一个哨兵？

### Other Heap Operations

- DecreaseKey( P, $\Delta$, H )
    - percolate up
- IncreaseKey( P, $\Delta$, H )
    - percolate down
- Delete( P, H )
    - DecreaseKey( P, $-\infty$, H )
    - DeleteMin( H )
- BuildHeap( H )
    - $N$ successive Insertions? $\mathcal{O}(n \log n)$
    - Floyd's method: $\mathcal{O}(n)$
    - 从最后一个非叶子节点开始（倒数第二层的最右边的节点），依次 percolate down

!!! note "Theorem"
    For the perfect binary tree of height $h$ containing $2^{h+1} - 1$ nodes, the sum of the heights of all the nodes is $2^{h+1} - h - 2$.

    $$T(N) = \mathcal{O}(N)$$

    $\implies$ 不论数据的顺序好坏，建堆的时间复杂度都是恒定的。堆排序也如此！

## Applications

!!! example "Example"
    在 $N$ 个元素中找出最大的 $k$ 个元素。

## $d$-Heaps

All nodes have $d$ children.

!!! question "Shall we make $d$ as large as possible?"
    - `DeleteMin` will take $d-1$ comparisons to find the smallest child.
    - `*2` or `/2` are bit operations, but `*d` is not.
    - When the priority queue is too large to fit entirely in the main memory, we can use a $d$-heap to reduce the number of disk accesses. 时间换空间！