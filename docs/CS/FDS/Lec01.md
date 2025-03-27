# Algorithm Analysis

Algorithm:

1. Input $(\geq 0)$
2. Output $(\geq 1)$
3. Definiteness
4. Finiteness
5. Effectiveness

!!! example "Selection Sort"
    **Human language**:
    *From {++those integers that are currently unsorted++}[^1], find the smallest and place it next in the sorted list.*
    [^1]: Where and how to store them?

    **Pseudocode**:
    ```plaintext
    for (i = 0; i < n; i++){
        Examine list[i] to list[n-1] and suppose that the smallest is at list[min];
        Interchange list[i] and list[min];
    }
    ```

## What to Analyze

- **Time & space complexity**: Machine & compiler independent

Assumptions:

1. instructions are executed sequentially
2. each instruction is **simple**, and takes exactly **one time unit**
3. integer size is fixed and we have infinite memory

- $T_{\text{avg}}(N)$ & $T_{\text{worst}}(N)$

the average and worst-case time complexity as a function of the **input size $N$**

!!! example "Matrix addition"
    ```c
    void add(int a[][MAX_SIZE],
             int b[][MAX_SIZE],
             int c[][MAX_SIZE],
             int rows, int cols)
    {
        int i, j;
        for (i = 0; i < rows; i++) /* rows+1 times (the last time is for the exit condition) */
            for (j = 0; j < cols; j++) /* rows·(cols +1) */
                c[i][j] = a[i][j] + b[i][j]; /* rows·cols */
    }
    ```

    No worst case!

    $T(\mathrm{rows, cols}) = 1 + 2 \times \mathrm{rows} + 2 \times \mathrm{rows} \times \mathrm{cols}$

!!! example "Summing the list"
    ```c
    float sum(float list[], int n)
    {
        float sum = 0; /* 1 */
        int i;
        for (i = 0; i < n; i++) /* n+1 times */
            sum += list[i]; /* n */
        return sum; /* 1 */
    }
    ```

    $T_{\mathrm{sum}}(n) = 2n + 3$

!!! example "Summing the list recursively"
    ```c
    float rsum(float list[], int n)
    {
        if (n) /* n+1 */
            return list[n-1] + rsum(list, n-1); /* n */
        return 0; /* 1 */
    }
    ```

    $T_{\mathrm{rsum}}(n) = 2n + 2$

    But it takes more time to compute each step.

!!! question "Does it really matter to compare the time complexity exactly?"

## Asymptotic Notation ( $\mathcal{O}$ )

The point of counting the steps is to **predict the growth** in run time as $N$ changes, so we only care about the asymptotic behavior.

### Definition

- $T(N) = \mathcal{O}(f(N))$ if there are positive constants $c$ and $N_0$ such that $T(N) \leq c \cdot f(N)$ for all $N \geq N_0$. **(Worst case)**
- $T(N) = \Omega(g(N))$ if there are positive constants $c$ and $N_0$ such that $c \cdot g(N) \leq T(N)$ for all $N \geq N_0$. **(Best case)**
- $T(N) = \Theta(h(N))$ if and only if $T(N) = \mathcal{O}(h(N))$ and $T(N) = \Omega(h(N))$.
- $T(N) = o(p(N))$ if $T(N) = \mathcal{O}(p(N))$ and $T(N) \neq \Theta(p(N))$.

Notes:

- We shall always take the smallest $f(N)$ (smallest upper bound)
- We shall always take the largest $g(N)$ (largest lower bound)

### Rules

If $T_1(N) = \mathcal{O}(f(N))$ and $T_2(N) = \mathcal{O}(g(N))$, then:

1. $T_1(N) + T_2(N) = \max(\mathcal{O}(f(N)), \mathcal{O}(g(N)))$
2. $T_1(N) \cdot T_2(N) = \mathcal{O}(f(N) \cdot g(N))$

- If $T(N)$ is a polynomial of degree $k$, then $T(N) = \Theta(N^k)$.
- $\log^k N = \mathcal{O}(N^{\epsilon})$ for any $\epsilon > 0$.

!!! example "Matrix addition"
    $T(\mathrm{rows, cols}) = \Theta(\mathrm{rows} \cdot \mathrm{cols})$

!!! example "Fibonacci"
    ```c
    int fib(int n)
    {
        if (n <= 1) // O(1)
            return 1; // O(1)
        else
            return fib(n-1) + fib(n-2); // T(n-1) + T(n-2)
    }
    ```

    $T(N) = T(N-1) + T(N-2) + 2 \geq \mathrm{Fib}(N)$

    Note that $\mathrm{Fib}(N)$ grows exponentially.

    We can prove that

    $$\left(\frac{3}{2} \right)^N \leq \mathrm{Fib}(N) \leq \left(\frac{5}{3} \right)^{N}$$

    The reason why $T(N)$ is so large is that we are computing the same value multiple times instead of storing it.

## Compare the Algorithms

!!! example "最大子串和"
    Given (possibly negative) integers $A_1, A_2, \cdots, A_N$, find the maximum sum of a subsequence.

    ```c {.line-numbers} title="Algorithm 1"
    int maxsum(const int A[], int N)
    {
        int max = 0, sum;
        int i, j;
        for (i = 0; i < N; i++)
        {
            sum = 0;
            for (j = i; j < N; j++)
            {
                sum += A[j];
                if (sum > max)
                    max = sum;
            }
        }
        return max;
    }
    ```

    - $T(N) = \mathcal{O}(N^2)$

    分治算法：

    例：`[4,-3,5,-2,-1,2,6,-2]`

    把序列分为两半，最大子串可能在左半部分、右半部分、或者跨越中间，共 3 种情况

    $$
    \begin{aligned}
    T(N) &= 2T(N/2) + cN, \quad T(1) = \mathcal{O}(1) \\
    &= 2(2T(N/4) + cN/2) + cN \\
    &... \\
    &= 2^k T(N/2^k) + k \cdot cN \\
    &\Rightarrow N/2^k = 1 \Rightarrow k = \log N \\
    &\Rightarrow T(N) = \mathcal{O}(N \log N)
    \end{aligned}
    $$

    ```c {.line-numbers} title="Algorithm 2: Divide and Conquer"
    /*  */
    ```

    - $T(N) = \mathcal{O}(N \log N)$

    ```c {.line-numbers} title="Algorithm 3: On-line"
    int maxsum(const int A[], int N)
    {
        int max = 0, sum = 0;
        for (int i = 0; i < N; i++)
        {
            sum += A[i];
            if (sum > max)
                max = sum;
            else if (sum < 0)
                sum = 0;
        }
        return max;
    }
    ```

    - $T(N) = \mathcal{O}(N)$

## Logarithms in the Running Time

!!! example "Binary Search"
    - Given: A[0] <= A[1] <= ... <= A[N-1]; X
    - Task: Find `X`
    - Output: `i` if `A[i] = X`, `-1` if `X` is not in `A`

    ```c
    int BinarySearch(const int A[], int N, int X)
    {
        int low, mid, high;
        low = 0;
        high = N - 1;
        while (low <= high)
        {
            mid = (low + high) / 2;
            if (A[mid] < X)
                low = mid + 1;
            else if (A[mid] > X)
                high = mid - 1;
            else
                return mid;
        }
        return -1;
    }
    ```

    - $T_{\text{worst}}(N) = \mathcal{O}(\log N)$
    - 要求：
        1. 有序
        2. 静态

## Checking Your Analysis

- Method 1
    - When $T(N) = \mathcal{O}(N)$, check if $T(2N)/T(N) \approx 2$