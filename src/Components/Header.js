import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const HeaderDesign = styled.h1`
font-family: Helvetica;
  `;

  const DescriptionDesign = styled.p`
    font-family: Helvetica;
  `;

function Header(props) {
    return (
        <Container>
            <HeaderDesign>Procreate Swatch Creator</HeaderDesign>
            <DescriptionDesign>Open this site on an iPad, choose color for swatches below and export to ProCreate.</DescriptionDesign>
        </Container>
    );
}

export default Header;