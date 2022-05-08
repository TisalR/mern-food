import './App.css';
import { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Navbar from './components/Navbar';
import NewOrders from './components/NewOrders';
import Delivered from './components/Delivered';
import AddAgent from './components/AddAgent';
import { BrowserRouter as Router, Route } from "react-router-dom"



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
       

        <NewOrders />


        <Delivered />
        <AddAgent />



      </div>
    </Router>
  );
}

export default App;
