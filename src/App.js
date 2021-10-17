import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Service from "./components/Home/Service/Service";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Shared/Login/Login";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/service">
          <Service></Service>
        </Route>
        <Route exact path="/bookVehicle/:id">
          <ServiceDetail></ServiceDetail>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
