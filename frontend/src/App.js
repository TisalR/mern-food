
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
 
 //import Updatesupplier from './components/Updatesupplier';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import Home from './components/home/Home'
 
 import Allemployee from './components/Allemployee';
 import Addemployee from './components/Addemployee';
 import empview from './components/employeeview';
  
 import editemployee from './components/editemployee';

function App() {
  return (
    
    <Router>
   <div>
     <Nav/>
     <Header/>
     
      
     <Route path = "/add" exact component={Addemployee}/>
     <Route path = "/all" exact component={Allemployee}/>
     <Route path = "/emp" exact component={empview}/>
    
     <Route path = "/edit/:id" exact component={editemployee}/>
      
   </div>
   </Router>
  );
}

export default App;
