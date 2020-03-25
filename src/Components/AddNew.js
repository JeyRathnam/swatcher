import React from 'react'
import styled from 'styled-components';

const NewButton = styled.div`
    border-radius: 50%;
  width: ${props => (props.width ? props.width : '25px')};
  height: ${props => (props.height ? props.height : '25px')};
  background-color: rgb(44,108,128);
`;

const HorizontalPlus = styled.div`
position: relative;
  background-color: #FFFFFF;
  width: 50%;
  height: 12.5%;
  left: 25%;
  top: 43.75%;
  `;

  const VerticalPlus = styled.div`
  position: relative;
  background-color: #FFFFFF;
  width: 12.5%;
  height: 50%;
  left: 43.75%;
  top: 12.5%;
  `;

function AddNew(props) {
return (
    <NewButton width={props.width} height={props.height} onClick={props.handleAddNewClick}>
        <HorizontalPlus />
        <VerticalPlus />
    </NewButton>
)

}

export default AddNew;