import React from 'react';
import {useHistory} from 'react-router-dom';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import styled from 'styled-components';

function EmailRow({ title, subject, description, time }) {

   const history = useHistory();

    return (
        <Div onClick={() => history.push('/mail')}>
            <EmailRow_Options>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </EmailRow_Options>

            <EmailRow_title>
                {title}
            </EmailRow_title>
               
            <EmailRow_message>
                <h4>{subject}
                     <span className="emailRow_description"> - {description} </span>
                </h4>
            </EmailRow_message>

            <EmailRow_time>
                {time}
            </EmailRow_time>
        </Div>
    )
}

export default EmailRow;

const Div = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 999;

    :hover{
        border-top: 1px solid whitesmoke; 
        box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.24);
    }
`
const EmailRow_Options = styled.div`
    display: flex;
`
const EmailRow_title = styled.h3`
   font-size: 13px;
   flex: 0.3;
`
const EmailRow_message = styled.div`
    display: flex;
    flex: 0.8;
    align-items: center;
    font-size: 13px;

    .emailRow_description{
        font-weight: 400;
        color: gray;
    }

    h4{
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }
`
const EmailRow_time = styled.p`
   padding-right: 15px;
   font-size: 9px;
   font-weight: bold;
`

