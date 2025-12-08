# Intro to CUDA C

## Heterogeneous Computing

- Host: CPU and its memory (host memory)
- Device: GPU and its memory (device memory)

## Processing Flow

1. Copy input data from CPU memory to GPU memory.
2. Load GPU program and execute, caching data in GPU memory.
3. Copy output data from GPU memory to CPU memory.

!!! example "Hello World with Device Code"
    ```c title="hello.cu"
    #include <stdio.h>

    __global__ void hello() {
        printf("Hello, World from GPU!\n");
    }

    int main() {
        hello<<<1, 1>>>();
        cudaDeviceSynchronize();
        return 0;
    }
    ```

    - CUDA C/C++ keyword `__global__` indicates a function that:
        - runs on the device (GPU)
        - is called from the host code
    - `nvcc` separates source code into host and device components.
    - `mykernel<<<1, 1>>>`:
        - `<<<>>>` marks a call

!!! example "Addition on the Device"
    ```c
    __global__ void add(int *a, int *b, int *c) {
        *c = *a + *b;
    }
    ```
    - `add()` runs on the device, so `a`, `b` and `c` must point to device memory.
    - We need to allocate memory on the GPU!

## Memory Management

- Host and device memory are separate entities
    - Device pointers point to GPU memory.
    - Host pointers point to CPU memory.
- `cudaMalloc()`
- `cudaMemcpy()`
- `cudaFree()`


CPU 和 GPU 的内存不能互相访问（实际上也行，但此处不做讨论），但是地址空间是一样的。

!!! example "Addition on the Device `main()`"
    ```c
    int main(void) {
        int a, b, c;            // host copies of a, b, c
        int *d_a, *d_b, *d_c;   // device copies of a, b, c
        size_t size = sizeof(int);
        // Allocate space for device copies of a, b, c
        cudaMalloc((void **)&d_a, size);
        cudaMalloc((void **)&d_b, size);
        cudaMalloc((void **)&d_c, size);
        // Copy inputs to device
        cudaMemcpy(d_a, &a, size, cudaMemcpyHostToDevice);
        cudaMemcpy(d_b, &b, size, cudaMemcpyHostToDevice);
        // Launch add() kernel on GPU
        add<<<1, 1>>>(d_a, d_b, d_c);
        // Copy result back to host
        cudaMemcpy(&c, d_c, size, cudaMemcpyDeviceToHost);
        // Free device memory
        cudaFree(d_a);
        cudaFree(d_b);
        cudaFree(d_c);
        return 0;
    }
    ```

## Moving to Parallel Programming

Instead of executing `add()` once, we can execute it multiple times in parallel.

- `<<<N, M>>>`:
    - `N`: number of thread blocks
    - `M`: number of threads per block

### Vector Addition On the Device

- each parallel invocation of `add()` is referred to as a block
    - the set of blocks is referred to as a grid
    - Each invocation can refer

- Use `blockIdx.x` to access the block index
- Use `threadIdx.x` to access the thread index within a block (a block can be split into multiple threads)

!!! hint
    With `M` threads per block, a unique index for each thread is given by:

    ```c
    int index = blockIdx.x * blockDim.x + threadIdx.x;
    ```

!!! question "Why bother with threads?"

1D Stencil

with radius 3, every element is read 7 times!

### Sharing Data Between Threads

- Shared memory: within a block, threads can share data
- 比缓存好操控（？
- Use `__shared__` to declare shared memory

!!! warning "Data race"
    线程之间是独立的，如果一个线程还没写完数据，另一个线程又要读取这个数据，就会输出错误的结果。

- `__syncthreads()` to synchronize threads within a block
    - RAW / WAW / WAR hazards

### IDs and Dimensions

`blockIdx` and `threadIdx` are 1D by default, but can be 2D or 3D.

## Coordinating Host and Device

- Kernel launches are asynchronous
    - control returns to the CPU immediately
- CPU needs to synchronize before consuming the results

`cudaMemcpy()` 是阻塞型API，blocks the CPU until the copy is complete，copy begins when all preceding CUDA calls have completed.

现在最新的 CUDA 已经到了汇编层面，很少写 CUDA C