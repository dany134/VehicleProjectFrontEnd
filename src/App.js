
import './App.css';
import {Home} from './pages/Home';
import  VehicleMake  from './pages/VehicleMake';
import VehicleModel from './pages/VehicleModel';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from './components/Navigation';
import CreateVehicleMake from './pages/CreateVehicleMake';
import CreateVehicleModel from './pages/CreateVehicleModel';
import EditVehicleMake from './pages/EditVehicleMake';
import MakesDropDown from './components/MakesDropDown';
import EditVehicleModel from './pages/EditVehicleModel';
function App() {
  return (
      <BrowserRouter >

    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">Vehicle Project</h3>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/makes" exact component={VehicleMake} />
        <Route path="/models" exact component={VehicleModel} />
        <Route path="/makes/create" exact component={CreateVehicleMake} />
        <Route path="/models/create" exact component={CreateVehicleModel} />
        <Route path="/makes/edit/:id" component={EditVehicleMake} />
        <Route path="/drop" component={MakesDropDown} />
        <Route path="/models/edit/:id" component={EditVehicleModel} />

      </Switch>
    </div>
     </BrowserRouter>
  );
}

export default App;
