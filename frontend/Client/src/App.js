
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddEmployee from './Components/AddEmployee';
import AllEmployees from './Components/AllEmployees';
import UpdateEmployee from './Components/UpdateEmployee';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';



function App() {

  const useStyles = makeStyles({ 
    root : {
      minHeight: '600px',
      marginBottom: '100px',
      clear: 'both',
    }

  })

 
  const classes = useStyles();


  
  return (  
    <Router>
        <div className="App">

          <Header />
          <div className={classes.root}>
            <br /><br />
            <br /><br />


            <Route path="/add" exact component={AddEmployee} />
            <Route path="/" exact component={AllEmployees} />
            <Route path="/Up" exact component={UpdateEmployee} />
            

          </div>
          <Footer />
        </div>
      </Router>

      




  );
}

export default App;


