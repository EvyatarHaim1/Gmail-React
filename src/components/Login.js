import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { login } from '../features/userSlice'
import { auth, provider } from '../firebase'
import {useDispatch } from 'react-redux';

function Login() {

    const dispatch = useDispatch();

   const signIn = () => {
       auth.signInWithPopup(provider)
           .then(({ user }) => {
               dispatch(login({
                   displayName: user.displayName,
                   email: user.email,
                   photoUrl: user.photoURL
               }))
           })
           .catch(error => alert(error.message));
   };

    return (
        <Div>
            <LoginContainer>
               <img 
                 src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
                 alt="gmail_logo"
               />
               <Button onClick={signIn} variant="contained" color="primary"> Login </Button>
            </LoginContainer>
        </Div>
    )
}

export default Login

const Div = styled.div`
   background-color: #f2f2f2;
   display: grid;
   place-items: center;
   height: 100vh;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

   img{
       object-fit: contain;
       height: 200px;
   }
`