import React, { useState } from 'react'
import AddNew from './AddNew'
import ColorPicker from 'rc-color-picker'

function Swatch({colors, setColors}) {
    function AddNewColor() {
        setColors(colors.concat('#000000'))
    }
    function handleColorChange(i, c) {
        const t = colors
        t[i] = c.color
        setColors(t)
    }
    
    return (
        <React.Fragment>
        {colors.map(function(x, i){
            if(i <= 20) {
            return <ColorPicker key={i}
            animation="slide-up"
            color={x}
            onChange={(colors) => handleColorChange(i, colors)} 
            />
            }
        })}
        <AddNew handleAddNewClick={AddNewColor} />
        </React.Fragment>
    )

}

export default Swatch;