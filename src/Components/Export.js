import React from 'react';
import Color from 'onecolor'
import JSZip from 'jszip'
import saveAs from 'file-saver'
import styled from 'styled-components'

const ExportButton = styled.button`
border: 0;
 background: rgb(44,108,128);
 box-shadow: none;
 border-radius: 2px;
 padding : 5px 15px;
 color: white;
`;

const Container = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
`;


function Export(props) {
    const { colors } = props;

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
        zip.file('swatches.json', data)
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                saveAs(content, "export.swatches");
            });

    }
    return (
        <Container>
            <ExportButton onClick={exportTozip} >Export</ExportButton>
        </Container>
    );
}

export default Export;