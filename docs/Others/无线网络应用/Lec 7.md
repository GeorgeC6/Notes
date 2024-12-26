# Lec 7

!!! abstract "主要内容"
    网络故障排除

## 故障排除

- 火箭学家方法（理论法）
- 穴居人方法（蛮力法）
- 整体分析，系统化、结构化的方法
    - 按照OSI模型的层次

### 结构化故障排除技术

- 自上而下
- 自下而上
- **分治法**

### 非结构化故障排除技术

- 试错法
- 替换法

- `ping`（基于 ICMP）
- `tracert`（基于 ICMP）
- `netstat`
    - `netstat -b`
    - `netstat -n`
- `nbtstat`（NetBIOS over TCP/IP）

## WLAN故障排除

- 无线标准不兼容
    - 11a、b、g、n、ac、ax、be、bn
- 每个无线会话都必须使用独立的频道