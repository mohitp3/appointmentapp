import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppointmentList from "./Pages/AppointmentList/AppointmentList";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointments">
            <AppointmentList />
          </Route>
          
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
