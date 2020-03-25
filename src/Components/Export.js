import React from 'react';
import Color from 'onecolor'
import JSZip from 'jszip'
import saveAs from 'file-saver'


function Export(props) {
    const {colors} = props;

    function exportJson() {
        const data = [{ swatches: [] }];
        colors.forEach(color => {
            const parsed = Color(color);
            const hsv = parsed.hsv();
            const colorSpace = 0;
        
            data[0].swatches.push({
              hue: hsv.h(),
              saturation: hsv.s(),
              brightness: hsv.v(),
              alpha: 1,
              colorSpace
            });
        }); 

        return JSON.stringify(data);
    }
    
    function exportTozip() {
        const data = exportJson();
        var zip = new JSZip();
        zip.file('test.text', data)
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, "export.swatches");
    });
    
    }
    return (
        <div>
            <button onClick={exportTozip} >Export</button>
        </div>
    );
}

export default Export;