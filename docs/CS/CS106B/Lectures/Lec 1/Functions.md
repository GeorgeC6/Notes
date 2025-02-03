# Functions

## Include

- Built-in C++ system library

```cpp
#include <libraryname>
```

- local library

```cpp
#include "libraryname.h"
```

## Using

```cpp
using namespace /*name*/;
```

- Many libraries separate their symbols (variables, functions, etc.) into **namespaces** to avoid conflicts
- `using namespace` brings symbols from a library's namespace into the global scope （全局作用域）
    - Common usage: `using namespace std;`
- 若不使用 `using` 声明，在调用函数时需要加上 `<namespace name>::` 前缀

```cpp
std::cout << "Hello, world!" << std::endl;
```

## Forward declarations

在函数定义之前声明函数，也称为函数原型（function prototype）

```cpp
returnType functionName(parameters); //有分号
```

## Default parameters

```cpp
returnType functionName(parameters = defaultValue);
```