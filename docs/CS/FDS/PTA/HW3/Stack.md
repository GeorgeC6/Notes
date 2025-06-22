# Stack

## 单选题

<div class="grid cards" markdown>

-   **2-1**
    
    Push 5 characters `ooops` onto a stack. In how many different ways that we can pop these characters and still obtain `ooops`?

    ---

    - [ ] A. 1
    - [ ] B. 3
    - [x] C. 5
    - [ ] D. 6

    ??? success "Solution 2-1"
        **卡塔兰数**是组合数学中一个重要的数列，常用于解决**“合法序列”**或**“结构计数”**问题。
        
        $$
        C_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}
        $$

        - 例如：
            - \( C_0 = 1 \)
            - \( C_1 = 1 \)
            - \( C_2 = 2 \)
            - \( C_3 = 5 \)
            - \( C_4 = 14 \)

        假设有 \( n \) 个元素按顺序入栈（如 `1,2,3,...,n`），卡塔兰数 \( C_n \) 表示这些元素**合法的出栈顺序总数**。  

        例如，有 $3$ 个元素要入栈，合法序列为 `1 2 3`、`1 3 2`、`2 1 3`、`2 3 1`、`3 2 1`（共 5 种，即 \( C_3=5 \)）。

        ---
        
        **卡塔兰数的其他经典应用**
        
        1. **括号匹配**：  
        \( n \) 对括号的合法匹配方式数为 \( C_n \).
        例如，\( n=3 \) 时有 5 种合法括号组合：`((()))`, `(()())`, `(())()`, `()(())`, `()()()`.

        2. **二叉树结构**：
        \( n \) 个节点可以构成的不同二叉搜索树（BST）的数量为 \( C_n \).

        3. **多边形三角划分**：
        将 \( n+2 \) 边形用不相交的对角线划分为三角形的方法数为 \( C_n \).
</div>


## 编程题

<div class="grid cards" markdown>

-   **<center>7-1 Pop Sequence</center>**

    Given a stack which can keep $M$ numbers at most. Push $N$ numbers in the order of $1, 2, 3, \ldots, N$ and pop randomly. You are supposed to tell if a given sequence of numbers is a possible pop sequence of the stack. For example, if $M$ is $5$ and $N$ is $7$, we can obtain $1, 2, 3, 4, 5, 6, 7$ from the stack, but not $3, 2, 1, 7, 5, 6, 4$.

    **Input Specification:**

    Each input file contains one test case. For each case, the first line contains $3$ numbers (all no more than $1000$): $M$ (the maximum capacity of the stack), $N$ (the length of push sequence), and $K$ (the number of pop sequences to be checked). Then $K$ lines follow, each contains a pop sequence of N numbers. All the numbers in a line are separated by a space.

    **Output Specification:**

    For each pop sequence, print in one line `YES` if it is indeed a possible pop sequence of the stack, or `NO` if not.

    **Sample Input:**

    ```
    5 7 5
    1 2 3 4 5 6 7
    3 2 1 7 5 6 4
    7 6 5 4 3 2 1
    5 6 4 3 7 2 1
    1 7 6 5 4 3 2
    ```
    
    **Sample Output:**

    ```
    YES
    NO
    NO
    YES
    NO
    ```

    ??? success "Solution 7-1"
        模拟入栈和出栈的过程。

        ```c
        int IsFromStack( int* seq, int M, int N )
        {
            int stack[MAX] = {0};
            int top = -1;      // 空栈
            int current = 1;   // 下一个需要 push 的数字
            
            for (int i = 0; i < N; i++) {
                int target = seq[i];
                // 入栈直到栈顶元素等于目标值或栈满
                while ((top == -1 || stack[top] != target) && current <= N) {
                    if (top + 1 == M) break;
                    stack[++top] = current++;
                }
                if (top != -1 && stack[top] == target) {
                    top--; // pop
                } else {
                    return 0;
                }
            }
            return 1;
        }
        ```
</div>