import React, { Component } from 'react'
import AppRouter from './config/router'
import './App.css';
import { BrowserRouter, Route, Link} from "react-router-dom";
import Sell from './components/Sell'



class app extends Component{
  render(){
      return(
          
          <div>
             <AppRouter/>
          </div>

      )
  }
}



export default app;