import React, { useState } from 'react'
import ColorPicker from 'rc-color-picker'

function Swatch({ colors, setColors }) {

    function handleColorChange(i, c) {
        const t = colors
        t[i] = c.color
        setColors(t)
    }

    return (
        <React.Fragment>
            {colors.map(function (x, i) {
                if (i <= 20) {
                    return <ColorPicker key={i}
                        animation="slide-up"
                        color={x}
                        onChange={(colors) => handleColorChange(i, colors)}
                    />
                }
            })}
        </React.Fragment>
    )

}

export default Swatch;