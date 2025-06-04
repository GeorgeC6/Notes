# Hashing

!!! info "Interpolation Search"
    Find `key` in a sorted list `list[l].key` , `list[l+1].key`, ..., `list[u].key`.

    - 如果 `key` 和下标的关系是线性的

    $$
    \frac{f[u].key - f[l].key}{n} = \frac{key - f[l].key}{i - l}
    $$

    - 非线性

    ```
    if (f[i].key < key)
        l = i
    else
        u = i
    ```

    **Seach by Formula**

## General Idea

**Symbol Table**: `<name, attribute>`，相当于字典

!!! example "Oxford Dictionary"
    - `name`: `word`
    - `attribute`: `definition`, `pronunciation`, `part of speech`, `example`

!!! example "Compiler"
    - `name`: identifier
    - `attribute`: type, scope, address

### Symbol Table ADT

- Objects: A set of name-attribute pairs, where the names are unique.
- Operations:
    - `Attribute Find(name)`: Find the attribute of a name.

### Hash Table

每一行都是一个桶，列数就是桶的槽数

For each identifier $x$, we define a **hash function** $f(x)$.

$f(x) = $ position of $x$ in `ht[]` (i.e. **the index of the bucket** that contains $x$)

- $T = $ total number of distinct possible values of $x$
- $n = $ total number of identifiers in `ht[]`
- identifier density $= n / T$
- loading density $\lambda = n / (sb)$

!!! warning "Collision"
    A **collision** occurs when we hash two different identifiers into the same bucket, i.e. $f(i_1) = f(i_2)$ when $i_1 \neq i_2$.

!!! bug "Overflow"
    An **overflow** occurs when we hash a new identifier into a full bucket.

!!! example "Example"
    Mapping $n = 10$ C library functions into a hash table `ht[]` with $b = 26$ buckets and $s = 2$ slots per bucket.

    | $\quad$ | Slot 0 | Slot 1 |
    | :---: | :-----: | :-----: |
    | 0 | $\quad$ | $\quad$ |
    | 1 | $\quad$ | $\quad$ |
    | 2 | $\quad$ | $\quad$ |
    | 3 | $\quad$ | $\quad$ |
    | 4 | $\quad$ | $\quad$ |
    | 5 | $\quad$ | $\quad$ |
    | 6 | $\quad$ | $\quad$ |
    | $\ldots$ | $\quad$ | $\quad$ |
    | 25 | $\quad$ | $\quad$ |

    Loading density $\lambda = 10 / (26 \times 2) = 0.19$.

    To map the letter *a* ~ *z* to $0$ ~ $25$, we may define $f(x) = $ `x[0] - 'a'`.

    - `ceil`, `clock`, `ctime`...
    - Overflow!!

    Without overflow,

    $$
    T_{\text{Search}} = T_{\text{Insert}} = T_{\text{Delete}} = \mathcal{O}(1)
    $$

## Hash Function

Properties of a good hash function $f$:

1. $f$ must be **easy to compute** and minimizes the number of collisions.
2. $f$ should be **unbiased**. That is, for $\forall x,i$, we have $P(f(x) = i) = 1/b$. Such kind of a hash function is called a **uniform hash function**.

> 密码学中的哈希算法，用来作文件完整性校验
>
> - MD5（已被破解）
> - SHA-1
> - SHA-256

$f(x) = x \mod \text{TableSize}$ if $x$ is an integer.

> TableSize = 10? Bad!

$f(x) = (\sum_i \text{ASCII}(x[i]) \mod \text{TableSize})$ if $x$ is a string.

> TableSize = 10007 and string length $\leq$ 8. If $x[i] \in [0, 127]$, then $f(x) \in [0, 127 \times 8]$.
>
> but $T = 128^8$. Many collisions!

$f(x) = (x[0] + x[1] \times 27 + x[2] \times 27^2) \mod \text{TableSize}$ if $x$ is a string.

$f(x) = (\sum x[N - i - 1] \times 32^i) \mod \text{TableSize}$

> 选 $32$ 是因为在计算机中好表示，左移 $5$ 位即可

```c
Index Hash3(const char *x, int TableSize)
{
    unsigned int HashVal = 0;
    while (*x != '\0')
    {
        HashVal = (HashVal << 5) + *x++;
    }
    return HashVal % TableSize;
}
```

> If $x$ is too long (i.e. street address), the early characters will be left-shifted out of place.
>
> - Carefully select some characters

## Separate Chaining

keep a list of all keys that hash to the same value

- Create an empty table

```c
HashTable InitTable(int TableSize)
{
    HashTable H;
    int i;
    if (TableSize < MinTableSize)
    {
        Error("Table size too small");
        return NULL;
    }

    H = malloc(sizeof(struct HashTbl)); // allocate table
    if (H == NULL)
        FatalError("Out of space!!!");
    H->TableSize = NextPrime(TableSize);
    H->TheLists = malloc(sizeof(List) * H->TableSize); // array of lists
    if (H->TheLists == NULL)
        FatalError("Out of space!!!");
    for (i = 0; i < H->TableSize; i++)
        H->TheLists[i] = NULL; // initialize all lists to NULL
    return H;
}
```

- Find a key from a hash table

```c
Position Find(ElementType Key, HashTable H)
{
    Position P;
    List L;

    L = H->TheLists[Hash(Key, H->TableSize)];
    P = L->Next;
    while (P != NULL && P->Element != Key) // probably need `strcmp`
        P = P->Next;
    return P;
}
```

- Insert a key into a hash table

```c
void Insert(ElementType Key, HashTable H)
{
    Position Pos, NewCell;
    List L;
    Pos = Find(Key, H);
    if (Pos == NULL) // not found
    {
        NewCell = malloc(sizeof(struct ListNode));
        if (NewCell == NULL)
            FatalError("Out of space!!!");
        else
        {
            L = H->TheLists[Hash(Key, H->TableSize)]; // 重复计算！！
            NewCell->Next = L->Next;
            NewCell->Element = Key; // probably need `strcpy`
            L->Next = NewCell;
        }
    }
}
```

!!! tip "Tip"
    Make the TableSize $\approx$ the number of distinct keys. $\lambda \approx 1$.

## Open Addressing

开放寻址法：find another empty cell to solve collision (avoiding pointers)

```c
/* Algorithm: insert key into an array of hash table */
{
    index = hash(key);
    initialize i = 0;
    while (collision at index)
    {
        index = (hash(key) + f(i)) % TableSize; // f(i) is the collision resolving function
        if (table is full)
            break;
        else
            i++;
    }
    if (table is full)
        ERROR("Table is full");
    else
        insert key at index;
}
```

Tip: Loading density $\lambda < 0.5$.

关键：$f(i)$ 的设计

### Linear Probing

$f(i) = i$.

!!! note "Analysis"
    Analysis of linear probing show that the **expected number of probes**:

    $$
    p = \begin{cases}
        \frac{1}{2} \left(1 + \frac{1}{(1 - \lambda)^2}\right) & \text{for insertions and unsuccessful searches} \\
        \frac{1}{2} \left(1 + \frac{1}{1 - \lambda}\right) & \text{for successful searches}
    \end{cases}
    $$

Worst case can be LARGE

!!! bug "Primary clustering"
    Any key that hashes into the cluster will add to the cluster after several attempts to resolve the collision.

### Quadratic Probing

$f(i) = i^2$.

!!! note "Theorem"
    If quadratic probing is used, and the table size is a prime number, then a new element can always be inserted into the table as long as the loading density $\lambda < 0.5$.

    ---

    ***Proof.***

    We only need to show that the first $\lfloor \text{TableSize} / 2 \rfloor$ alternative locations are distinct. That is, for $\forall \, 0 < i \neq j \leq \lfloor \text{TableSize} / 2 \rfloor$, we have

    $$
    H(x) + i^2 \neq H(x) + j^2 \mod \text{TableSize}
    $$

    Proof by contradiction.

    Assume that
    
    $$H(x) + i^2 \equiv H(x) + j^2 \mod \text{TableSize}$$
    
    then

    $$i^2 \equiv j^2 \mod \text{TableSize}$$

    which implies that

    $$
    (i - j)(i + j) \equiv 0 \mod \text{TableSize}
    $$

    Since $\text{TableSize}$ is prime,

    $$
    i - j \equiv 0 \mod \text{TableSize} \quad \text{or} \quad i + j \equiv 0 \mod \text{TableSize}
    $$

    The first case implies $i = j$, which contradicts the assumption. The second case implies $i + j = \text{TableSize}$, which is impossible since $i, j \leq \lfloor \text{TableSize} / 2 \rfloor$. Contradiction!

!!! note "Note"
    If the table size is a prime number of the form $4k + 3$, then quadratic probing $f(i) = \pm i^2$ can probe the entire table.

```c
Position Find(ElementType Key, HashTable H)
{
    Position CurrPos;
    int Collisions = 0;
    CurrPos = Hash(Key, H->TableSize);
    while (H->Cells[CurrPos].Info != Empty && H->Cells[CurrPos].Element != Key) // (1)
    {
        CurrPos += 2 * ++Collisions - 1; // Quadratic probing: f(i) = f(i-1) + 2i - 1
        /* *2 is fast for computers, just a bit shift */
        if (CurrPos >= H->TableSize)
            CurrPos -= H->TableSize; // faster than mod
    }
    return CurrPos;
}
```

1. 交换两个条件的顺序，会增加执行次数。
   `Cells` 是结构体数组，成员有 `Info` 和 `Element`。

```c
void Insert(ElementType Key, HashTable H)
{
    Position Pos;
    Pos = Find(Key, H);
    if (H->Cells[Pos].Info != Legitimate) // (1)
    {
        H->Cells[Pos].Info = Legitimate;
        H->Cells[Pos].Element = Key; // probably need `strcpy`
    }
    else
        Error("Duplicate key");
    }
```

1. 为什么是 `Legitimate` 而不是 `Empty`？
   如果某个 cell 被删除变成 `empty`，会破坏连续性，之后二次探测如果途径这个 cell 就会停下来，后面的 cell 就无法找不到了。

   所以 `Info` 需要有三个状态：

   - `Empty`: 该 cell 还没有被使用
   - `Legitimate`: 该 cell 已经被使用
   - `Deleted`: 该 cell 已经被删除

   使用枚举变量类型来实现

### Double Hashing

$f(i) = i \cdot h_2(x)$, where $h_2(x)$ is a secondary hash function.

!!! tip "Tip"
    $h_2(x) = R - (x \mod R)$, where $R$ is a prime number and $R < \text{TableSize}$, works well.

!!! note "Note"
    1. If double hashing is correctly implemented, simulations imply that the expected number of probes is almost the same as that for a random collision resolution strategy.
    2. Quadratic probing does not require the use of a secondary hash function. Thus, it is likely to be faster and simpler in practice.

## Rehashing

- Build another table that is about {++twice++} as large as the original table.
- Scan down the entire original table
- Use a new hash function to rehash each non-deleted key into the new table

!!! question "When to rehash?"
    1. As soon as the table is half full.
    2. When an insertion fails.
    3. When the loading density $\lambda$ exceeds a certain threshold.

!!! note "Note"
    Usually there should have been $N/2$ insertions before rehashing, so $\mathcal{O}(N)$ rehashing time only adds a constant cost to each insertion.

    However, in an interactive system, the unfortunate user whose insertion caused a rehash could see a slowdown.