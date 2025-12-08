# C++ Concurrency in Action

## Introduction

## `<thread>`

### Basic Thread Management

#### Launching a Thread

C++ Thread Constructor

```cpp
template <class F, class... Args>
    explicit thread(F&& f, Args&&... args);
thread(threads&& other) noexcept; // Move constructor
```

- `other`: another thread object to construct this thread object with
- `f`: Callable object to execute in the new thread
- `args`: Arguments to pass to the new function

!!! warning "Common Pitfall"
    C++ interprets ambiguous syntax as **function declaration**!

!!! success "Recommended"
    Use uniform initialization `{}` or lambdas to avoid parsing issues.

#### Waiting for a Thread to Complete

- `join()`: Wait for thread completion before continuing.

safe thread management with RAII:

```cpp
class thread_guard {
    thread& t;
public:
    explicit thread_guard(thread& t_) : t(t_) {}
    ~thread_guard() { if (t.joinable()) t.join(); }
    thread_guard(const thread_guard&) = delete; // 禁止拷贝
    thread_guard& operator=(const thread_guard&) = delete; // 禁止赋值
    void do_work() {
        thread t([]() { /* do work */ });
        thread_guard g(t); // RAII: 自动 join
        risky_operation(); // Safe!
        // Deconstrutor ensures thread is joined
    }
};
```

#### Running Threads in the Background

- `detach()`: Run the thread independently without waiting for it to finish.

!!! important
    Every thread must be joined or detached before destruction.

### Passing Arguments to a Thread Function

#### Parameter Passing Basics

**Key Principle:** Thread constructor copies arguments as rvalues.

### Transferring Ownership of a Thread

Thread is **move-only**, meaning it cannot be copied.

### Choosing the Number of Threads at Runtime

## `<mutex>`

### Race Conditions

**The core issue:** Multiple threads accessing shared data

```cpp
int counter = 0; // Shared variable
void increment_unsafe(int iterations) {
    for (int i = 0; i < iterations; i++) {
        counter++; // NOT thread-safe!
    }
}
```

```cpp
// 4 threads, each incrementing 100000 times
std::vector<std::thread> threads;
for (int i = 0; i < 4; i++) {
    threads.emplace_back(increment_unsafe, 100000);
}
for(auto& t : threads) { t.join(); }
// Expected: 400000, Actual: varies (e.g., 387234)
```

Assembly breakdown of `counter++`:

```assembly
mov eax, [counter]  // Read
add eax, 1          // Modify
mov [counter], eax  // Write
```

Thread Interleaving Problem:

- Thread 1 reads `counter = 0`
- Thread 2 reads `counter = 0`
- Thread 1  writes `counter = 1`
- Thread 2 writes `counter = 1`
- **Lost update!** Should be `counter = 2`

**Critical Section:** Code accessing shared resources

### Protecting Shared Data with Mutexes

#### C++ Mutex Solution

Using `std::mutex` with RAII:



## `<condition_variable>`

### Waiting for an Event or Other Condition

Inefficient waiting with `sleep_for`:

- CPU wastage from constant polling
- Unnecessary latency, unpredictable timing

### Waiting for a Condition with Condition Variables

#### Condition Variable Types

- `std::condition_variable`: Works only with `std::mutex`
- `std::condition_variable_any`: Works with any mutex type (extra overhead)

#### `wait()` overloads

```cpp
// Version 1: Basic wait
void wait (std::unique_lock<std::mutex>& lock);

// Version 2: Wait with predicate (recommended)
void wait (std::unique_lock<std::mutex>& lock, Predicate pred);
```

## Parallel Algorithms

### Parallelizing the Standard Library Algorithms

#### C++17 Parallel Algorithms

```cpp
#include <execution>
#include <vector>

std::vector<int> my_data = {3, 1, 4, 1, 5, 9, 2, 6};

// Serial execution (C++11/14)
std::sort(my_data.begin(), y_data.end());

// Parallel execution (C++17)
std::sort(std::execution::par, my_data.begin(), my_data.end());
```

