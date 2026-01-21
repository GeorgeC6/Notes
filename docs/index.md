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

!!! abstract "版权声明"
    1.  原创内容
        本站由我原创编写的笔记，除特别声明外，均采用 [CC BY-NC-SA 4.0 许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)。

        - ✅ 允许：分享、复制、修改及二次创作。
        - 📝 条件：必须署名、保持一致的许可协议。
        - ❌ 禁止：任何形式的商业用途。

    2.  引用资源
        本站引用的课件、教材截图、开源书籍及视频等内容，版权归原作者所有。本站仅用于个人学习记录与学术交流（Fair Use），不包含在上述 CC 协议授权范围内。

        如您是版权方且认为侵权，请联系我删除。

    3.  网站源码
        网站由 [![Built with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?style=for-the-badge&logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/) 构建，其本身以及我在样式上做的改动遵循 [MIT License](https://opensource.org/license/MIT)。


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