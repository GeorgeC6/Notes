
## 自由振动

$$
\begin{equation}
    \ddot{x} + 2 \xi \omega_0 \dot{x} + \omega_0^2 x = 0, \, \omega_0 = \sqrt{\frac{k}{m}}, \, \xi = \frac{c}{2 m \omega_0} \in \mathbb{R}^+
\end{equation}
$$

代入 $x(t) = e^{\lambda t}$，得到特征方程

$$
\lambda^2 + 2 \xi \omega_0 \lambda + \omega_0^2 = 0
$$

1. $\lambda_1, \lambda_2 \in \mathbb{R}$（$\xi > 1$）：过阻尼
    $$
    x(t) = C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t}
    $$
2. $\lambda_1 = \lambda_2$（$\xi = 1$）：临界阻尼
    $$
    x(t) = (C_1 + C_2 t) e^{-\omega_0 t}
    $$
3. :star: $\lambda_1, \lambda_2 \in \mathbb{C}$（$0 \leq \xi < 1$）：欠阻尼
    $$
    \begin{equation}
        \lambda_{1,2} = -\xi \omega_0 \pm i \omega_0 \sqrt{1 - \xi^2} = -\xi \omega_0 \pm i \omega_{\mathrm{d}}
    \end{equation}
    $$

    $$
    \begin{equation}
        \begin{aligned}
            x(t) &= e^{-\xi \omega_0 t} (C_1 \cos \omega_{\mathrm{d}} t + C_2 \sin \omega_{\mathrm{d}} t) \\
            &= A e^{-\xi \omega_0 t} \sin(\omega_{\mathrm{d}} t + \varphi)
        \end{aligned}
    \end{equation}
    $$

    代入初始条件 $x(0) = x_0, \dot{x}(0) = \dot{x}_0$ 可解出

    $$
    \begin{equation}
        A = \sqrt{x_0^2 + \left(\frac{\dot{x}_0 + \xi \omega_0 x_0}{\omega_{\mathrm{d}}}\right)^2}, \quad \varphi = \arctan \frac{x_0 \omega_{\mathrm{d}}}{\dot{x}_0 + \xi \omega_0 x_0}
    \end{equation}
    $$

    对于**单位脉冲响应** $x_0 = 0, \dot{x}_0 = 1$，有

    $$
    \begin{equation}
        h(t) = x(t) = \frac{1}{\omega_{\mathrm{d}}} e^{-\xi \omega_0 t} \sin \omega_{\mathrm{d}} t \quad (t \geq 0)
    \end{equation}
    $$

!!! tip "测量阻尼比 $\xi$ 的实验方法"
    - 测量两个振动幅值（这里以相邻的为例）$A_1, A_2$
    - $\eta = \ln \frac{A_2}{A_1} = \ln \frac{A e^{-\xi \omega_0 (t + T_{\mathrm{d}})}}{A e^{-\xi \omega_0 t}} = - \xi \omega_0 T_{\mathrm{d}}, \, T_{\mathrm{d}} = \frac{2\pi}{\omega_0 \sqrt{1 - \xi^2}}$

    $$
    \xi = - \frac{\eta}{\omega_0 T_{\mathrm{d}}} = \frac{1}{\omega_0 T_{\mathrm{d}}} \ln \frac{A_1}{A_2} \approx \frac{1}{2\pi} \ln \frac{A_1}{A_2}
    $$

    提高测量精度：测量 $A_1, A_{n+1}$，则

    $$\xi = \frac{1}{n \omega_0 T_{\mathrm{d}}} \ln \frac{A_1}{A_{n+1}} \approx \frac{1}{2\pi n} \ln \frac{A_1}{A_{n+1}}$$

## 谐和激励

$$
\begin{equation}
    \ddot{x} + 2 \xi \omega_0 \dot{x} + \omega_0^2 x = \frac{F_0}{m} \cos(\omega_0 t + \varphi_0)
\end{equation}
$$

通解的振幅项指数衰减，很快消失，以特解为主导。

代入 $\bar{x} = A \cos \omega t + B \sin \omega t$，即可求得特解。也可使用复变方法。

$$
\begin{equation}
    \ddot{x} + 2 \xi \omega_0 \dot{x} + \omega_0^2 x = \frac{F_0}{m} e^{\mathrm{i} \omega t}
\end{equation}
$$

代入 $\tilde{x} = \tilde{A} e^{\mathrm{i} \omega t}$，解得

$$
\begin{equation}
    \begin{aligned}
        \tilde{A} &= \frac{F_0 / m}{\omega_0^2 - \omega^2 + 2 \mathrm{i} \xi \omega_0 \omega} && := H(\omega) \frac{F_0}{m} \\
        \xrightarrow{\frac{F_0}{m} = \frac{F_0}{k} \omega_0^2} &= \frac{1}{1 - \eta^2 + 2 \mathrm{i} \xi \eta} \frac{F_0}{k} && := \beta(\eta) e^{- \mathrm{i} \varphi_0(\eta)} \frac{F_0}{k}, \quad \eta = \frac{\omega}{\omega_0}
    \end{aligned}
\end{equation}
$$

其中

$$
\begin{aligned}
    \beta(\eta) &= \frac{1}{\sqrt{(1 - \eta^2)^2 + (2 \xi \eta)^2}} \\
    \varphi_0(\eta) &= \arctan \frac{2 \xi \eta}{1 - \eta^2}
\end{aligned}
$$

得到振动解

$$
\begin{equation}
    \tilde{x}(t) = \beta(\eta) \frac{F_0}{k} e^{\mathrm{i} (\omega t - \varphi_0(\eta))}
\end{equation}
$$

半带宽、品质因数

!!! note "考虑地面运动的振动"
    1. 绝对坐标

    $$
    m \ddot{x} = -k (x - x_{\text{g}}) - c (\dot{x} - \dot{x}_{\text{g}})
    $$

    2. 相对坐标

    $$
    m (\ddot{\tilde{x}} + \ddot{x}_{\text{g}}) = -k \tilde{x} - c \dot{\tilde{x}}
    $$

