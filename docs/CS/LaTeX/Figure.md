# 图片排版

> 引自帖子 ![](../../images/CC98_LOGO.png) [LaTeX中一些常见的图片排版组合方式](https://www.cc98.org/topic/5111533)

## 前置宏包

```latex
\documentclass{ctexart}
\usepackage[left=1cm, right=1cm]{geometry}
\usepackage{graphicx}
\usepackage{float}
\usepackage{caption}
\usepackage{subcaption}
```

## 双图并排

### 非子图

```latex
\begin{figure}[htbp]
    \centering
    \begin{minipage}[b]{0.45\linewidth}
        \centering
        \includegraphics[width=0.9\textwidth]{example}
        \caption{图1}
        \label{}
    \end{minipage}%
    \begin{minipage}[b]{0.45\linewidth}
        \centering
        \includegraphics[width=0.9\textwidth]{example}
        \caption{图2}
        \label{}
    \end{minipage}
\end{figure}
```

### 子图

```latex hl_lines="3 8"
\begin{figure}[htbp]
    \centering
    \subcaptionbox{\label{}子图1}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.4\textwidth]{example}
    }
    \hspace{0.5cm} 
    \subcaptionbox{\label{}子图2}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.4\textwidth]{example}
    } 
    \caption{Figure}
    \label{}
\end{figure}
```

!!! warning "`subcaptionbox` 的引用问题"
    **注意**：`\label{}` 要放在 `\subcaptionbox` 的第一个 `{}` 里面，否则引用时会找不到标签。

## 双图纵排子图

```latex
\begin{figure}[htbp]
    \centering
    \subcaptionbox{\label{}子图1}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.4\textwidth]{example}
    }\\[0.5cm] % 换行并产生图片纵向距离
    \subcaptionbox{\label{}子图2}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.4\textwidth]{example}
    } 
    \caption{双图纵排子图}
    \label{}
\end{figure}
```

## 三个子图横排

```latex
\begin{figure}[htbp]
    \centering
    \subcaptionbox{\label{}子图1}[0.33\textwidth][c]{
        \centering
        \includegraphics[width=0.32\textwidth]{example}
    }%
        \subcaptionbox{\label{}子图2}[0.33\textwidth][c]{
        \centering
        \includegraphics[width=0.32\textwidth]{example}
    }%
        \subcaptionbox{\label{}子图3}[0.33\textwidth][c]{
        \centering
        \includegraphics[width=0.32\textwidth]{example}
    }%
    \caption{三个子图横排}
    \label{}
\end{figure}
```

## 三个子图（金字塔型）

```latex
\begin{figure}[htbp]
    \centering
    \subcaptionbox{\label{}子图1}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }\\ % 换行
    \subcaptionbox{\label{}子图2}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }%
    \hspace{0.3cm}
    \subcaptionbox{\label{}子图3}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }%
    \caption{三个子图（金字塔型）}
    \label{}
\end{figure}
```

## 三图并排（一个非子图右两个子图）

```latex
\begin{figure}[htbp]
    \centering
    \begin{minipage}[b]{0.45\linewidth}
        \centering
        \includegraphics[width=0.9\textwidth]{example}
        \caption{并排非子图}
        \label{}
    \end{minipage}%
    \begin{minipage}[b]{0.45\linewidth}
        \subcaptionbox{\label{}并排两个子图1}[0.45\textwidth][c]{
            \centering
            \includegraphics[width=0.45\textwidth]{example}
        }%
        \hspace{0.02cm} % 调整图形间距
        \subcaptionbox{\label{}并排两个子图2}[0.45\textwidth][c]{
            \centering
            \includegraphics[width=0.45\textwidth]{example}
        } 
        \caption{并排两个子图}
        \label{}
    \end{minipage}
\end{figure}
```

## 三个非子图（一大两小）

```latex
\begin{figure}[htbp]
    \centering
    \begin{minipage}[b]{0.45\textwidth}
        \centering
        \includegraphics[width=\textwidth, height=1.2\textwidth]{example}
        \caption{大图}
        \label{}
    \end{minipage}
    \hspace{0.5cm}%
    \begin{minipage}[b]{0.4\textwidth}
        \begin{minipage}[b]{\textwidth}
            \centering
            \includegraphics[width=\textwidth]{example}
            \caption{小图1}
            \label{}
        \end{minipage}\\[0.8cm]% 换行
        \begin{minipage}[b]{\textwidth}
            \centering
            \includegraphics[width=\textwidth]{example}
            \caption{小图2}		
            \label{}
        \end{minipage}	
    \end{minipage}
\end{figure}
```

## 四个子图

```latex
\begin{figure}[htbp]
    \centering
    \subcaptionbox{\label{}子图1}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }%
    \hspace*{0.1cm}
    \subcaptionbox{\label{}子图2}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }\\% % 换行
    \subcaptionbox{\label{}子图3}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }%
    \hspace*{0.1cm}
    \subcaptionbox{\label{}子图4}[0.45\textwidth][c]{
        \centering
        \includegraphics[width=0.45\textwidth]{example}
    }%
    \caption{四个子图}
    \label{}
\end{figure}
```