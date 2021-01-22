import React from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';

function Sidebar() {
    return (
        <Div>
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar_compose"
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54}/>
        </Div>
    )
}

export default Sidebar

const Div = styled.div`
  .sidebar_compose{
      margin-top: 15px;
      margin-left: 10px !important;
      margin-bottom: 15px !important;
      text-transform: capitalize !important;
      color: gray;
      padding: 15px !important;
      border-radius: 30px !important;
      box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
  }
`