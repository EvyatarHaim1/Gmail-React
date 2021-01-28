import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import firebase from 'firebase';

function SendMail() {

    const { register , handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
      db.collection('emails').add({
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });

          dispatch(closeSendMessage());
    }

    return (
        <Div>
            <div className="sendMail_header">
                <h3> New Message </h3>
                <CloseIcon 
                        onClick={() => dispatch(closeSendMessage())}
                        className="sendMail_close" 
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                     type="email" 
                     placeholder="To" 
                     name="to" 
                     ref={register({ required: true})} 
                />
                {errors.to && <p className="sendMail_error">To is required</p> }
                <input 
                     type="text" 
                     placeholder="Subject" 
                     name="subject" 
                     ref={register({ required: true})} 
                />
                {errors.subject && <p className="sendMail_error">subject is required</p> }
                <input 
                     type="text" 
                     placeholder="Message..." 
                     className="sendMail_message" 
                     name="message"
                     ref={register({ required: true})} 
                />
                 {errors.message && <p className="sendMail_error">message is required</p> }

                <div className="sendMail_options">
                    <Button
                         className="sendMail_BTN"
                         variant="contained"
                         color="primary"
                         type="submit"
                         >
                             Send
                    </Button>
                </div>
            </form>
        </Div>
    )
}

export default SendMail;

const Div = styled.div`
   position: absolute;
   bottom: 0px;
   right: 50px;
   background-color: #404040;
   width: 40%;
   height: 40%;
   max-width: 500px;
   display: flex;
   flex-direction: column;
   border: 1px solid whitesmoke;
   box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24);

   form {
       display: flex;
       flex: 1;
       flex-direction: column;
   }

   form > input {
       height: 30px;
       padding: 10px;
       border: none;
       border-bottom: 1px solid whitesmoke;
       outline: none;
   }

.sendMail_header{
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;

    h3{
        color: whitesmoke;
        font-size: 13px;
    }
}

.sendMail_BTN{
    background-color: #3079ed !important;
    text-transform: capitalize !important;
    margin: 15px !important;
}

.sendMail_close{
    cursor: pointer;
}

.sendMail_message{
    flex: 1;
}

.sendMail_error{
    background-color: white;
    color: red;
    text-align:right;
    padding: 2px;
}
`