# Git

我与 Git 缘起于这个网站，MkDocs![](../../images/tieba/heihei.png)

最开始学到的三条命令就是

```bash
git add .
git commit -m "balabala总之是一句话"
git push origin main
```

平时没有什么代码合作的机会，所以 Git 的水平也停留在能用就行的程度。

## `git commit`

### 写 commit message

> ![](../../images/CC98_LOGO.png) [如何写 git commit message](https://www.cc98.org/topic/6098599){target=_blank}

### `git commit --amend`

- 用于修改最近一次提交的 commit message
- 要使远程仓库同步的话，需要使用 `git push origin main --force` 来强制推送，这样就能覆盖远程仓库的提交记录

!!! tip "更改 repo 的远程地址"
    ```bash
    git remote set-url origin <new-url>
    ```

!!! tip "重命名文件夹但保留历史记录"
    ```bash
    git mv old_folder new_folder
    git commit -m "Rename old_folder to new_folder"
    ```