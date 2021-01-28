import React, { useState, useEffect } from 'react';
import Section from './Section';
import styled from 'styled-components';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from '../firebase';

function EmailList() {

    const [emails, setEmails ] = useState([]); 

    useEffect(() => {
        console.log('gfg')
      db.collection('emails')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
            setEmails(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })
        )))
        console.log(emails)
    },[])

    return (
        <Div>
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                 <Section Icon={InboxIcon} title="Primary" color="red" selected />
                 <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
                 <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="emailList_list">
                {emails.map(({id, data: { to, subject, message, timestamp } }) => (
                <EmailRow id={id}
                          key={id}
                          title={to}
                          subject={subject}
                          description={message}
                          time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
                ))
           }
            </div>
        </Div>
    )
}

export default EmailList

const Div = styled.div`
    flex: 1;
    overflow: scroll;

    ::-webkit-scrollbar{
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    .emailList_settings{
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid whitesmoke;
        background-color: white;
        z-index: 999;
        padding-right: 10px;
    }

    .emailList_sections{
        position: sticky;
        top: 0;
        display: flex;
        border-bottom: 1px solid whitesmoke;
        background-color: white;
        z-index: 999;
    }

    .emailList_list{
        padding-bottom: 20%;
    }
`