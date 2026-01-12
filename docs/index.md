---
title: Welcome!
home: true
comments: false
statistics: True
hide:
    - footer
---

# **欢迎来到我的云知识库！:material-cloud:**

这里是我所有电子版笔记和课程相关资源的汇总。

!!! info inline "Tips"
    若有错误之处或可以改进的地方，欢迎指出[:material-open-in-new:](https://github.com/GeorgeC6/Notes){.target="_blank"} !:octicons-heart-fill-24:{ .heart }

??? tip inline end "快捷键"
    您可使用键盘快捷键浏览本站点：

    -   全局（除了在搜索框时）：
        -   ++slash++, ++f++, ++s++：打开搜索框
        -   ++p++, ++comma++：前往上一页
        -   ++n++, ++period++：前往下一页
    -   处于搜索框时：
        -   ++arrow-down++, ++arrow-up++：选择下/上一条搜索结果
        -   ++esc++, ++tab++：退出搜索框
        -   ++enter++：打开选中的搜索结果

???+ stat "站点统计"
    :material-file-document: 页数：{{ pages }}
    
    :material-text: 字数：{{ words }}
    
    :fontawesome-solid-code: 代码：{{ codes }}
    
    :material-clock-outline: 网站运行时间：<span id="web-time"></span>

## 许可

由我自己编写的部分依照 [MIT LICENSE](https://www.tawesoft.co.uk/kb/article/mit-license-faq)。

其余部分（包括但不限于引用的课程资源、开源书籍以及视频内容）遵循原作者规定的许可。

<!--
## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
-->

<script>
function updateTime() {
    var date = new Date();
    var now = date.getTime();
    var startDate = new Date("2024/02/08 12:00:00");
    var start = startDate.getTime();
    var diff = now - start;
    var y, d, h, m;
    y = Math.floor(diff / (365 * 24 * 3600 * 1000));
    diff -= y * 365 * 24 * 3600 * 1000;
    d = Math.floor(diff / (24 * 3600 * 1000));
    h = Math.floor(diff / (3600 * 1000) % 24);
    m = Math.floor(diff / (60 * 1000) % 60);
    if (y == 0) {
        document.getElementById("web-time").innerHTML = d + "<span class=\"heti-spacing\"> </span>天<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
    } else {
        document.getElementById("web-time").innerHTML = y + "<span class=\"heti-spacing\"> </span>年<span class=\"heti-spacing\"> </span>" + d + "<span class=\"heti-spacing\"> </span>天<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
    }
    setTimeout(updateTime, 1000 * 60);
}
updateTime();
function toggle_statistics() {
    var statistics = document.getElementById("statistics");
    if (statistics.style.opacity == 0) {
        statistics.style.opacity = 1;
    } else {
        statistics.style.opacity = 0;
    }
}
</script>