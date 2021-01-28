import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { logout, selectUser } from '../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase';
function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

    return (
        <Div>
            <Header_left>
              <IconButton>
                 <MenuIcon />
              </IconButton>
              <img
                 src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png"
                 alt=""
              />
            </Header_left>

            <Header_middle>
                  <SearchIcon />
                  <input placeholder="Search mail" type="text" />
                  <ArrowDropDownIcon className="header_inputCaret" />
            </Header_middle>

            <Header_right>
                 <IconButton>
                     <AppsIcon />
                 </IconButton>
                 <IconButton>
                     <NotificationsIcon />
                 </IconButton>
                 <Avatar className="userPic" src={user?.photoUrl} onClick={signOut}/>
            </Header_right>
        </Div>
    )
}

export default Header

const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid whitesmoke;
`
const Header_left = styled.div`
   display: flex;
   align-items: center;

  img{
      object-fit: contain;
      height: 80px;
      margin-left: 5px;
  }
` 
const Header_middle = styled.div`
    display: flex;
    align-items: center;
    flex: 0.7;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    
    .MuiSvgIcon-root{
        color:gray;
    }
    input{
        border: none;
        width: 100%;
        padding: 10px;
        outline-width: 0;
        font-size: medium;
        background-color: transparent;
    }
` 
const Header_right = styled.div`
   display:flex;
   padding-right: 20px;

   .userPic{
       :hover{
           cursor: pointer;
       }
   }
` 
