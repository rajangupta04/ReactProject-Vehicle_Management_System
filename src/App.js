import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddVehicleDetails from './components/AddVehicleDetails';
import UpdateVehicleDetails from './components/UpdateVehicleDetails';
import Admin from './components/Admin';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/"> <AddVehicleDetails /> </Route>
            <Route  path="/Navbar"><Navbar /> </Route>
            <Route path="/Admin"> <Admin /> </Route>
            <Route path="/UpdateVehicleDetails:id"> <UpdateVehicleDetails /> </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

