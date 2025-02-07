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

## Console I/O

### `cout`

```cpp
int age = 20;
cout << "I'm " << age << " years old." << endl;
```

### `cin`

不太推荐，因为没有输入格式检查。

课程中使用 Stanford Library 里的函数。

| Function name | Example |
| --- | --- |
| `getInteger("Prompt")` | `int age = getInteger("How old are you? ");` |
| `getReal("Prompt")` | `double gpa = getReal("少废话，你 GPA 多少？ ");` ![](../../../../images/tieba/le.png)|
| `getLine("Prompt")` | `string name = getLine("What's your name? ");` |
| `getYesOrNo("Prompt")`<br>`getYesOrNo("Prompt", "y", "n")` | `if (getYesOrNo("R U single? ")) {...}` |

## Forward declarations

在函数定义之前声明函数，也称为函数原型（function prototype）

```cpp
returnType functionName(parameters); //有分号
```

## Default parameters

```cpp
returnType functionName(parameters = defaultValue);
```

***e.g.***

```cpp
// Print a line of characters of the given length
void printLine(int length = 5, char ch = '*'){
    for (int i = 0; i < length; i++){
        cout << ch;
    }
}

int main(){
    printLine(); // *****
    printLine(3); // ***
    printLine(4, '#'); // ####
}
```