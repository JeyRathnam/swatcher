import React, { useState } from 'react';
import 'rc-color-picker/assets/index.css';
import Swatch from './Components/Swatch'
import styled from 'styled-components';
import Export from './Components/Export';
import AddNew from './Components/AddNew';

import './styles.css';

const ParentDiv = styled.div`
// margin: 0 auto;
display: contents;
float: left;
width: 100%;
margin: 0 auto;
`;
function App() {
  const [colors, setColors] = useState(['#000000', '#126443', '#763209', '#443091', '#568212']);
  return (
    <React.Fragment>
      <ParentDiv>
        <Swatch colors={colors} setColors={setColors} />
      </ParentDiv>
      <AddNew handleAddNewClick={() => setColors(colors.concat('#000000'))}/>
      <Export colors={colors} />
      
    </React.Fragment>
  );
}

export default App;
