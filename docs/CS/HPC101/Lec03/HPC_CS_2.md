# 高性能计算基础

!!! info "科学发展的几种范式"
    - 理论科学
    - 实验科学
    - 数据科学

    飞机机翼设计、生物科学、天气预测、深度学习网络、大数据挖掘...

    :point_right: 新需求：超大数据存储容量，超高数据处理速度。需要高性能计算系统来解决。

    > 以 GPU 为中心的操作系统？

计算很快，慢在数据的转移。数据搬运的功耗也远大于计算

!!! warning "挑战"
    - 高速互联（快速数据迁移）
    - 内联架构（网络、环状、树状...）
    - 支持大规模处理的输入输出（1M+ cores）
    - 存储架构和充足的存储容量
    - debug 难度大
    - 资源管理、任务调度
    - 工程/经济问题：冷却、电能、空间...

> HPC cluster vs. MapReduce/Hadoop cluster
> 
> - HPC 设备可靠，分布式体系设备廉价，有三个备份，容错高
> - HPC 的计算节点访问每个存储节点的距离是一样的，MapReduce 的计算和存储节点在一起，存在局部/全局性问题：近的快，远的慢

## Instruction Set Architecture (ISA)

- 高级语言：Primitives for programmers to code
    - Data types
    - Pointers
    - Control logic
    - ...
- Instructions: Primitives for processors to execute
    - Defined by an ISA
    - e.g. x86, ARM, RISC-V
    - Code type: machine code, assembly code

### Assembly/Machine Code View

- PC (Program Counter)
    - Address of the next instruction to execute
- Registers file
    - Heavily used program data
- Condition codes
    - Store status information about most recent arithmetic or logical operation
    - Used for conditional branching
    - e.g. CF, ZF, SF, OF
- Memory
    - Byte addressable

### Assembly Operations

- Arithmetic and Logical Operations (e.g. `add`, `xor`)
- Condition
    - indirect branching
- ...

### x86-64 Registers

- Integer registers
    - 16 general-purpose registers, 64 bits each
    - `%rax`, `%rbx`, `%rcx`, `%rdx`, `%rsi`, `%rdi`, `%rsp`, `%rbp`, `%r8`, `%r9`, `%r10`, `%r11`, `%r12`, `%r13`, `%r14`, `%r15`
- SIMD registers

### Modern Computer Systems

现代计算机系统的优化

- 多核，multi-socket
- 线程级并行

!!! example "Hand-coded Assembly"
    在 C 语言中手动嵌入汇编

    - Extended Asm

    ```c
    int src = 1, dst;
    asm ("mov %1, %0\n\tadd $0 )
    ```

    - :star: Compiler Intrinsics

    `_mm_add_ps()`


### ISA vs. Microarchitecture

- Intel: 一堆 Bridge
- AMD

### Core

Core: execute instructions one by one

- Fetch
- Decode
- Execute
- Commit

硬件利用率很低！$\approx 0.25$ instructions per cycle

### Pipeline

exploit all functional units with a pipeline, 在空闲的工作段中执行下一个指令的任务

- speedup: throughput $\approx 1$ instruction per cycle

!!! bug "Pipeline Hazards"
    - Data hazards
        - 后一条指令需要前一条指令的结果出来之后才能执行
        - 解决：Forwarding
    - Control hazards
        - 前一个指令是一个分支指令
    - Structural hazards

## Memory Hierarchy

### Random Access Memory (RAM)

- SRAM (Static RAM): fast, costly
- DRAM (Dynamic RAM): slow, cheap, needs refresh
    - 即使一直通着电，存在 DRAM 的数据也会慢慢没掉

### Virtual Memory

OS utilizes virtual memory to isolate address spaces of different processes and provide each process with the same linear address space.

- Address spaces are divided into pages (typically 4KB)
- Upon access to a *virtual address*, hardware + OS converts it to a *physical address* in main memory or in swap space.
    - OS maintains a page table for each process to store the mapping from virtual addresses to physical addresses.
    - TLB (Translation Lookaside Buffer) caches recent translations to speed up address translation.
    - Page faults occur when a process tries to access a page that is not currently in physical memory, requiring the OS to load it from disk (very slow).

每个进程都认为自己有无穷大的内存，系统把虚拟内存和物理内存映射起来。

### x86-64/Linux Memory Layout

- Stack
    - Runtime stack (8MB limit)
    - e.g. local variables
- Heap
    - Dynamically allocated as needed
    - e.g. `malloc()`-like functions
- Data
    - Statically allocated data
    - e.g. global variables, static variables, string constants
- Text/Shared Libraries
    - Executable machine instructions
    - read-only

### The CPU-Memory Performance Gap

随着 CPU 性能的提升，内存访问速度的提升远远跟不上 CPU 的速度。

#### Locality

- Principle: Programs tend to use data and instructions with addresses near or equal to those they have used recently.
- Temporal Locality
- Spatial Locality

### Cache

- A smaller, faster storage device that acts as a staging area for a subset of the data in a larger, slower device.
- SRAM-based

Data is transferred between cache and main memory in blocks (cache lines), typically 64 bytes.

#### Cache Organization

- 随机映射
- 直接映射
- 多路组相连

#### Cache Usage

- Read hit
    - Load bytes in cacheline
- Read miss
- Write hit
- Write miss
    - Load into cache first, then write

#### Multicore Cache Hierarchy

Intel Xeon E5-2680 v4 (Haswell)

- L1 Cache
    - 32KB, 8-way
- L2 Cache
    - 256KB, 8-way
- L3 Cache
    - 30MB, 20-way

## Concurrency Basics

### Critical Section

A uniprocessor can interleave instructions from different processes arbitrarily.

---

### x86 Microarchitecture

#### Pipelining

- Fetch
- Decode
- Allocate
- 
- Execute
- Commit

#### Branch Prediction

- Make a guess (prediction) and start the *presumably* correct path

> 容易受病毒攻击：幽灵病毒（Spectre）

#### Out-of-Order Execution

- Sequential execution imposes restrictions on the degree of instruction-level parallelism.
- Modern processors leverage {++*out-of-order* execution++} to improve performance.

#### Execution Engine

- Processor *back end* that executes the micro-operations
- Allocation
    - 寄存器重命名
    - Re-order buffer to track attributes of in-flight micro-ops
- Dynamic scheduling
- Execution
- In-order commit
    - Leverage the order in re-order buffer

:point_right: 乱序执行，顺序完成

### Single Instruction Multiple Data (SIMD)

同时对多个数据进行相同的操作

#### SIMD Registers

#### SIMD Computation

- 基本运算
- Overflow issue
    - Add/substract with saturation
    - mul low
- Advanced arithmetics
    - 倒数，平方倒数

#### SIMD Control Flow

- Conditional SIMD execution is supported through *{++masking++}*.
- Dedicated opmask registers

### Multicore & Multithreading

#### Multicore Caching

:point_right: 不同 CPU core 的 cache 之间的通信是有开销的

### Multi-Socket Servers

#### Non-uniform Memory Access (NUMA)

- Accessing remote memory is slower than accessing local memory.
- Co-locate worker thread and data in the same NUMA node

