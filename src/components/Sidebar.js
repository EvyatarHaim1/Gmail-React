import React from 'react'
import { Button, IconButton } from '@material-ui/core';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';



function Sidebar() {
    return (
        <Div>
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar_compose"
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected />
            <SidebarOption Icon={StarIcon} title="starred" number={31}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={4}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={7}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={15}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={3}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={10}/>

            <div className="sidebarFooter">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
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

  .sidebarFooter{
      display: flex;
      justify-content: center;
  }
`