import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import UpdateOrder from './Components/Admin/UpdateOrder/UpdateOrder';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Shipping from './Components/Shipping/Shipping';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route path="/placeorder">
              <Shipping></Shipping>
            </Route>
            <Route path="/orders/updateOrder/:id">
              <UpdateOrder></UpdateOrder>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    
  );
}

export default App;
