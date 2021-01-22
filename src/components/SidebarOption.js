import React from 'react'
import styled from 'styled-components'

function SidebarOption({ Icon, title, number, selected}) {
    return (
        <Div selected={selected}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </Div>
    )
}

export default SidebarOption

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  ${props => props.selected && `
      background-color: #fcecec;
      color: #c04b37;
    h3{font-weight: 800 !important;}
    p{ display: inline !important; 
       font-weight: 800 !important;}
    `}


  .MuiSvgIcon-root{
      padding: 5px;
  }

  h3{
      flex:1;
      margin-left: 10px;
      font-size: 14px;
      font-weight: 400;

  }
  p{
      display: none;
      font-weight: 300;
  }

  :hover > p {
      display: inline;
  }

  :hover, 
  :hover > p, 
  :hover > h3 {
      background-color: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
  }
`