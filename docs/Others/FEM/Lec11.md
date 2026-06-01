# Plate Element

A plate can be considered as a 2D extension of a beam.

!!! info "Basic assumptions"
    1.  Thickness $t \ll$ in-plane dimensions $b, c$, generally $t < \frac{1}{10} \min(b, c)$
    2.  Transverse deflection $w \ll t$
        -   otherwise, “von Kármán plate”

!!! info "Kirchhoff assumptions"
    1.  Normals remain normal
        -   $\gamma_{yz} = \gamma_{xz} = 0, \, \gamma_{xy} \neq 0$.
        -   Shear in plane
    2.  Normal stress is negligible: $\sigma_z = 0$, and also neglecting thickness change $\varepsilon_z = 0$.
    3.  In-plane forces neglected: deflection $w \ll t, \, u(x, y, 0) = v(x, y, 0) = 0$.


        