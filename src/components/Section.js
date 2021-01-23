import React from 'react';
import styled from 'styled-components';

function Section({Icon, title, color, selected }) {
    return (
        <Div selected={selected}
             style={{
                 borderBottom: `3px solid ${color}`,
                 color: `${selected && color}`,
             }}>
            <Icon />
            <h4>{title}</h4>
        </Div>
    )
}

export default Section;

const Div = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  padding: 15px;
  min-width: 200px;
  cursor: pointer;
  color: gray;
  border-width:0 !important;

  ${props => props.selected && `
      background-color: whitesmoke;
      border-width: 3px !important;
      `}
    
    :hover{
          background-color: whitesmoke;
          border-width: 3px !important;
    }

   h4{
        font-size: 14px;
        margin-left: 15px;
   }
`
