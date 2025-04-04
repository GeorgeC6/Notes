# 常用符号命令

## 希腊字母

| 名称 | 指令 | 输出 | 名称 | 指令 | 输出 |
| :--: | :---: | :---: | :--: | :---: | :---: |
| Alpha | `\alpha` | $\alpha$ | Mu | `\mu` | $\mu$ |
| Beta | `\beta` | $\beta$ | Nu | `\nu` | $\nu$ |
| Gamma | `\gamma`<br>`\Gamma` | $\gamma$<br>$\Gamma$ | Xi | `\xi`<br>`\Xi` | $\xi$<br>$\Xi$ |
| Delta | `\delta`<br>`\Delta` | $\delta$<br>$\Delta$ | Omicron | `o` | $o$ |
| Epsilon | `\epsilon`<br>`\varepsilon` | $\epsilon$<br>$\varepsilon$ | Pi | `\pi`<br>`\Pi` | $\pi$<br>$\Pi$ |
| Zeta | `\zeta` | $\zeta$ | Rho | `\rho` | $\rho$ |
| Eta | `\eta` | $\eta$ | Sigma | `\sigma`<br>`\Sigma` | $\sigma$<br>$\Sigma$ |
| Theta | `\theta`<br>`\Theta` | $\theta$<br>$\Theta$ | Tau | `\tau` | $\tau$ |
| Iota | `\iota` | $\iota$ | Sigma | `\sigma`<br>`\Sigma` | $\sigma$<br>$\Sigma$ |
| Kappa | `\kappa` | $\kappa$ | Tau | `\tau` | $\tau$ |
| Lambda | `\lambda`<br>`\Lambda` | $\lambda$<br>$\Lambda$ | Phi | `\phi`<br>`\Phi` | $\phi$<br>$\Phi$ |
| Omega | `\omega`<br>`\Omega` | $\omega$<br>$\Omega$ | Upsilon | `\upsilon`<br>`\Upsilon` | $\upsilon$<br>$\Upsilon$ |
| Psi | `\psi`<br>`\Psi` | $\psi$<br>$\Psi$ | Chi | `\chi` | $\chi$ |

## 集合论

| 名称 | 指令 | 输出 |
| :--: | :---: | :---: |
| 空集 | `\emptyset`<br>`\varnothing` | $\emptyset$<br>$\varnothing$ |
| 并集 | `\cup` | $\cup$ |
| 交集 | `\cap` | $\cap$ |
| 子集 | `\subset` | $\subset$ |
| 包含 | `\supset` | $\supset$ |
| 真子集 | `\subsetneq` | $\subsetneq$ |
| 真包含 | `\supsetneq` | $\supsetneq$ |
| 自然数集 | `\mathbb{N}` | $\mathbb{N}$ |
| 整数集 | `\mathbb{Z}` | $\mathbb{Z}$ |
| 有理数集 | `\mathbb{Q}` | $\mathbb{Q}$ |
| 实数集 | `\mathbb{R}` | $\mathbb{R}$ |
| 复数集 | `\mathbb{C}` | $\mathbb{C}$ |

## 逻辑关系

| 名称 | 指令 | 输出 |
| :--: | :---: | :---: |
| 与 | `\land` | $\land$ |
| 或 | `\lor` | $\lor$ |
| 非 | `\lnot` | $\lnot$ |
| 充分 | `\implies`<br>`\Rightarrow` | $\implies$<br>$\Rightarrow$ |
| 必要 | `\impliedby`<br>`\Leftarrow` | $\impliedby$<br>$\Leftarrow$ |
| 充要 | `\iff`<br>`\Leftrightarrow` | $\iff$<br>$\Leftrightarrow$ |

## 大小关系

| 名称 | 指令 | 输出 |
| :--: | :---: | :---: |
| 等于 | `=` | $=$ |
| 不等于 | `\neq` | $\neq$ |
| 大于 | `>` | $>$ |
| 小于 | `<` | $<$ |
| 大于等于 | `\geq` | $\geq$ |
| 小于等于 | `\leq` | $\leq$ |
| 约等于 | `\approx` | $\approx$ |
| 恒等于 | `\equiv` | $\equiv$ |

## 几何关系 & 几何形状

| 名称 | 指令 | 输出 | 名称 | 指令 | 输出 |
| :--: | :---: | :---: | :--: | :---: | :---: |
| 平行 | `\parallel`<br>`\mathrel{/\mskip-2.5mu/}` | $\parallel$<br>$\mathrel{/\mskip-2.5mu/}$ | 垂直 | `\perp` | $\perp$ |
| 相似 | `\sim` | $\sim$ | 全等[^1] | `\cong` | $\cong$ |
| 角 | `\angle` | $\angle$ | 弧 | `yhmath` 包中 $\wideparen{AB}$ | |







---

## 参考资料

1. [The Comprehensive LaTeX Symbol List](https://ctan.org/pkg/comprehensive){target=_blank}
2. [Glossary of mathematical symbols](https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols){target=_blank}
3. [LaTeX 排版国标样式的数学符号](https://www.latexstudio.net/archives/51494.html){target=_blank}

[^1]: 国标要求的符号的弯曲方向是相反的。`amssymb` 提供了 `\backsim`，`unicode-math` 提供了 `\backsim` 和 `\backcong`，但是曲线部分仍略小于国标的样式。引自 [LaTeX 排版国标样式的数学符号](https://www.latexstudio.net/archives/51494.html){target=_blank}。