# 向量化计算

!!! important "Intel Intrinsics Guide"
    - [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

!!! example "使用 AVX512 对 Baseline 进行优化"

    - `logits`：矩阵 $C$: `float`
    - `q_ptr_start`：矩阵 $A$: `BF16` --> `float`
    - `k_cache_start`：矩阵 $B$: `BF16` --> `float`
    - $A$ 和 $B$ 相乘后累加，得到 `vec`，再存成 `float` 的 `C` 矩阵

    `BF16`: 把 `float` 的高位截断


AMX（Advanced Matrix Extensions）：一个寄存器 1024 Bytes（最多16行64列）

输入有点不太一样，$B$ 矩阵原先是 $N \times K * 2$，改成 $K \times N * 2$（以 32bit 为单位的转置）