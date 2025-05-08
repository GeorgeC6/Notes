# Sorting

## Preliminaries

```c
void X_Sort(ElementType A[], int N)
```

> * `N` is a legal integer
> * 简洁起见，考虑整数数组
> * '`>`' and '`<`' 存在（Comparison-based Sorting）
> * Consider internal sorting only

## Insertion Sort

```c
void InsertionSort(ElementType A[], int N)
{
    int j, P;
    ElementType Tmp;

    for (P = 1; P < N; P++)
    {
        Tmp = A[P];
        for (j = P; j > 0 && A[j - 1] > Tmp; j--)
            A[j] = A[j - 1];
        A[j] = Tmp;
    }
}
```

- Worse case: $\mathcal{O}(N^2)$

## A Lower Bound for Simple Sorting Algorithms

Inversion 逆序对

!!! note "Theorem"
    The average number of inversions in an array of $N$ distinct elements is $\frac{N(N-1)}{4}$. 注意到总共的逆序对数是 $\binom{N}{2} = \frac{N(N-1)}{2}$，平均情况下刚好是一半。

    Any algorithm that sorts by exchanging adjacent elements requires $\Omega(N^2)$ time on average.

    交换相邻元素的排序算法（冒泡排序、插入排序）**至少**都需要 $\Omega(N^2)$ 的时间复杂度。所以要交换远一点的元素，一次交换消除更多的逆序对。

## Shell Sort

> by Donald Shell

1. 每相隔 5 个元素做一次排序（5 - sort）
2. 每隔 3 个元素做一次排序（3 - sort）
3. 相邻元素做一次插入排序（1 - sort）

- Define an increment sequence $h_1 < h_2 < \ldots < h_t \, (h_1 = 1)$
- Define an $h_k$ - sort at each phase for $k = t, t-1, \ldots, 1$

!!! note "Note"
    下一步排序不会把之前消除的逆序对再加回来！也就是所做的努力不会白费！

### Shell's increment sequence

$$
h_t = \left\lfloor \frac{N}{2} \right\rfloor, \, h_k = \left\lfloor \frac{h_{k-1}}{2} \right\rfloor
$$

```c
void ShellSort(ElementType A[], int N)
{
    int i, j, increment;
    ElementType Tmp;
    for (increment = N / 2; increment > 0; increment /= 2)
        for (i = increment; i < N; i++)
        {
            Tmp = A[i];
            for (j = i; j >= increment; j -= increment)
                if (Tmp < A[j - increment])
                    A[j] = A[j - increment];
                else
                    break;
            A[j] = Tmp;
        }
}
```

- Worst case: $\Theta(N^2)$
    - 前面几次排序都没有消除逆序对，最后的插入排序承担了一切

> Pairs of increments are not necessarily 
> prime

### Hibbard's increment sequence

$$
h_k = 2^k - 1
$$

!!! note "Theorem"
    The worst case for Hibbard's increment sequence is $\Theta(N^{3/2})$.

    Average case: $\Theta(N^{5/4})$.

### Sedgewick's increment sequence

$\{ 1, 5, 19, 41, 109, \ldots \}$

- Worst case: $\mathcal{O}(N^{4/3})$.
- Average case: $\mathcal{O}(N^{7/6})$.

> 希尔排序的算法很简单，但时间复杂度分析非常复杂。一般适用于中等大小的数组（上万个元素）。

## Heapsort

Algorithm 1

```c
{
    BuildHeap (H); // O(N)
    for (i = 0; i < N; i++)
    {
        TmpH[i] = DeleteMin(H); // O(log N)
    }
    for (i = 0; i < N; i++)
    {
        H[i] = TmpH[i]; // O(1)
    }
}
```

- $T(N) = \mathcal{O}(N \log N)$

缺点：The space requirement is doubled.

!!! tip "排序算法的性质"
    - **in-place**: 在数组内部做好排序，不需要额外的空间
    - **stable**: 不打乱相等元素的原始相对位置
        - 稳定：插入排序
        - 不稳定：希尔排序、堆排序

> 能否不用额外的空间？把 DeleteMin 得到的元素放到堆的最后面！
>
> 这样得到的是从大到小的顺序。获得递增序列就用最大堆和 DeleteMax。

Algorithm 2

```c
void Heapsort(ElementType A[], int N)
{
    for (int i = N / 2; i >= 0; i--) /* BuildHeap */
        PercDown(A, i, N);
    for (int i = N - 1; i > 0; i--) {
        Swap(&A[0], &A[i]); /* DeleteMax */
        PercDown(A, 0, i); /* RebuildHeap */
    }
}
```

> 注：堆排序的数组从下标 0 开始！以前 0 位置放的是哨兵。

!!! note "Theorem"
    The average number of comparisons used to heapsort a random permutation of $N$ distinct items is $2N \log N - \mathcal{O}(N \log \log N)$.

!!! note "Note"
    Although Heapsort gives the best average time, in practice it is slower than a version of Shellsort that uses the Sedgewick's increment sequence.

## Mergesort

### Merge two sorted lists

两个数组扫一遍，$\mathcal{O}(N)$

### Mergesort algorithm

```c
void MergeSort(ElementType A[], int N)
{
    ElementType *TmpArray;
    TmpArray = malloc(N * sizeof(ElementType));
    MSort(A, TmpArray, 0, N - 1);
    free(TmpArray);
}


void MSort(ElementType A[], ElementType TmpArray[], int Left, int Right)
{
    int Center;
    if (Left < Right)
    {
        Center = (Left + Right) / 2;
        MSort(A, TmpArray, Left, Center);
        MSort(A, TmpArray, Center + 1, Right);
        Merge(A, TmpArray, Left, Center + 1, Right); #(1)
    }
}
```

1. If a `TmpArray` is declared locally for each call of `Merge`, the space requirement is $\mathcal{O}(N \log N)$.

```c
void Merge(ElementType A[], ElementType TmpArray[], int Lpos, int Rpos, int RightEnd)
{
    int i, LeftEnd, NumElements, TmpPos;
    LeftEnd = Rpos - 1;
    NumElements = RightEnd - Lpos + 1;
    TmpPos = Lpos;
    while (Lpos <= LeftEnd && Rpos <= RightEnd)
        if (A[Lpos] <= A[Rpos])
            TmpArray[TmpPos++] = A[Lpos++];
        else
            TmpArray[TmpPos++] = A[Rpos++];
    while (Lpos <= LeftEnd) // copy the rest of the left half
        TmpArray[TmpPos++] = A[Lpos++];
    while (Rpos <= RightEnd) // copy the rest of the right half
        TmpArray[TmpPos++] = A[Rpos++];
    for (i = 0; i < NumElements; i++, RightEnd--)
        A[RightEnd] = TmpArray[RightEnd]; // copy back
}
```

### Analysis

- Recursive version（化整为零）

$$
\begin{aligned}
    T(1) &= 1 \\
    T(N) &= 2T\left(\frac{N}{2}\right) + \mathcal{O}(N) \\
    &= 2^k T\left(\frac{N}{2^k}\right) + k \cdot \mathcal{O}(N) \\
    &= N \cdot T(1) + \log_2 N \cdot \mathcal{O}(N) \\
    &= \mathcal{O}(N + N \log N)
\end{aligned}
$$

- Iterative version（化零为整）

> Mergesort requires linear extra memory, and copying an array is slow.
>
> It is hardly ever used for internal sorting, but is quite useful for **external sorting**.