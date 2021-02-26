import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import MainTable from './pages/Main';
import AddInfo from './pages/AddInfo';


function App() {
  return (
     <Router>
       <div>
         <NavBar />
         <Switch>
           <Route path='/' exact component={MainTable} />
           <Route path='/add' exact component={AddInfo} />
         </Switch>
       </div>
     </Router>
  );
}

export default App;
