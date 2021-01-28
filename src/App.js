import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Mail from './components/Mail'; 
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {selectUser} from './features/userSlice';
import Login from './components/Login';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    <Router>
       
       {!user ? (
         <Login />
       ) : (
        <div className="App">
          <Header />

          <div className="app_body">
              <Sidebar />
              <Switch>
                  <Route path="/mail">
                    <Mail />
                  </Route>
                  <Route path="/">
                    <EmailList />
                  </Route>
              </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
       )}
    </Router>
  );
}

export default App;
