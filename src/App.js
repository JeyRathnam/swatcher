import React, {useState} from 'react';
import 'rc-color-picker/assets/index.css';
import Swatch from './Components/Swatch'
import styled from 'styled-components';
import Export from './Components/Export'

const ParentDiv = styled.div`
margin: 0 auto;
display: inline-block;
float: left;
`;
function App() {
  const [colors, setColors] = useState(['#000000']);
  return (
    <React.Fragment>
      <ParentDiv>
        <Swatch colors={colors} setColors={setColors}/>
        <Export colors={colors} />
      </ParentDiv>
      
    </React.Fragment>
  );
}

export default App;
