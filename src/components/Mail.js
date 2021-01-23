import React from 'react'
import {useHistory} from 'react-router-dom';
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import styled from 'styled-components'

function Mail() {

    const history = useHistory();

    return (
        <Div>
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                     <IconButton onClick={() => history.push("/")}>
                         <ArrowBackIcon />
                     </IconButton>
                     <IconButton>
                         <MoveToInboxIcon />
                     </IconButton>
                     <IconButton>
                         <ErrorIcon />
                     </IconButton>
                     <IconButton>
                         <DeleteIcon />
                     </IconButton>
                     <IconButton>
                         <EmailIcon />
                     </IconButton>
                     <IconButton>
                         <WatchLaterIcon />
                     </IconButton>
                </div>

                <div className="mail_toolsRight">
                     <IconButton>
                         <UnfoldMoreIcon />
                     </IconButton>
                     <IconButton>
                         <PrintIcon />
                     </IconButton>
                     <IconButton>
                         <ExitToAppIcon />
                     </IconButton>
                </div>
            </div>
                <div className="mail_body">
                    <div className="mail_bodyHeader">
                        <h2>subject</h2>
                        <LabelImportantIcon className="mail_important" />
                        <p>Title</p>
                        <p className="mail_time">10pm</p>
                    </div>
                    <div className="mail_bodyMessage">
                        <p> this is a meesage </p> 
                    </div>
                </div>
        </Div>
    )
}

export default Mail

const Div = styled.div`
   flex: 1;
   background-color: whitesmoke;

   .mail_tools{
       display: flex;
       justify-content: space-between;
       background-color: white;
   }

    .mail_toolsLeft{
       display: flex;
   }
   .mail_toolsRight{
       
   } 

   .mail_body{
       display: flex;
       flex-direction: column;
       margin: 30px;
       background-color: white;
       padding: 20px;
       height: 100vh;
       box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24);
   } 

   .mail_bodyHeader{
       display: flex;
       align-items: center;
       border-bottom: 1px solid whitesmoke;
       padding: 20px;
       position: relative;
   }

   .mail_bodyHeader > h2 {
       font-weight: 400;
       margin-right: 20px;
   }

 .mail_bodyHeader > p {
     margin-left: 20px;
 }

   .mail_important{
       color: #e8ab02 !important;
   }

   .mail_bodyMessage > p {
       padding: 10px;
       margin-right: 20px;
       overflow-wrap: break-break-word;
   }

   .mail_time {
       position: absolute;
       top: 24px;
       right: 0;
       font-size: 12px;
       color: gray;
   }
`