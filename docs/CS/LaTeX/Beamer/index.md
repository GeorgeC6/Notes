# Beamer Notes

遇到的编译错误集锦：

| Problem | Cause | Solution |
|---------|-------|----------|
| `\caption{}` 里不能用 `\href` | `\href` 是脆弱指令 | 用 `\protect\href{}{}` |
| `\href` 里的链接含有 `#` 符号 | `#` 是特殊字符 | 用 `\#` 转义 |