import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import chat from "../components/chat";
import Header from '../components/Header'
import Sell from '../components/Sell'


class AppRouter extends Component { 
   render(){
       return(
           <Router>
               <Route exact path="/" component={Header} />
               <Route exact path="/chat" component={chat} />
               <Route exact path="/Sell" component={Sell} />
           </Router>

       )
   }
}

export default AppRouter;