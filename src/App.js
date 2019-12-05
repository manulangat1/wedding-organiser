import React from 'react';
import './App.css';
import  configureStore from './store'
import { Provider } from "react-redux";
import ProtectedRoute from './Components/ProtectedRoute'
import Header from  './Components/layout/Header'
import Footer from './Components/layout/Footer'
import About from './Components/layout/About'
import Help from './Components/layout/Help'
import View from './Components/wedding/View'
import Add from './Components/wedding/Add'
import Home from './Components/wedding/Home'
// import background from '../../images/background.jpeg'
import background from  './images/background.jpeg'
import display from  './images/display.jpeg'
import p3 from  './images/p3.jpeg'
// import Login from './Components/auth/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
// const store = configureStore();
class  App extends React.Component {
  constructor(){
    super()
    this.state = {
      wedding:[]
    }
  }
  componentWillMount(){
    this.setState(
      {wedding:[
        {
          image:background,
          title: "Merica Hotel",
          location: "Nakuru",
          description:"its a good and accomondative events reception and easilly accesible along Nakuru-Nairobi highway",
          price:"340000",
          capacity:"200",
          contact_details:"tel:+25472345678,"
        },
        { 
          image:display, 
          title: "Sarova woodlands",
          location: "Nakuru",
          description:"it is a serine place with ambient parking and wedding grounds and its accomondativeto a good nmumber of guests.",
          price:"400000",
          capacity:"200",
          contact_details:"tel:+254745563753"
        },
        {
          image:p3,
          title: "Eka Hotel",
          location: "Nakuru",
          description:"for weddings, Eka is the place to be,with the best services and most qualified workers.we  offer the best to uor esteemed customers and our business is to mind your best.",
          price:"340000",
          capacity:"300",
          contact_details:"tel:+254765432648"
        }
      ]}
    );
  }
  handleAddVenue = venue => {
    console.log(venue)
    let wedding
    wedding = this.state.wedding
    wedding.push(venue)
    this.setState({wedding})
}
// const store = configureStore();
  render(){
    const store = configureStore();
    return (
      <div className="apps">
        <Provider store={store}>
       <Router>
                    
                    <Header />
                    <div id="dash">
                        <Switch>
                        <Route exact path="/login">
                              <Login />
                            </Route>
                            <Route exact path="/about">
                              <About />
                            </Route>
                            <Route exact path="/help">
                              <Help />
                            </Route>
                            <Route exact path="/register">
                              <Register />
                            </Route>
                        <ProtectedRoute exact path="/" >
                              <Home wedding={this.state.wedding}/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/ed" >
                              <View  wedding={this.state.wedding}/>
                            </ProtectedRoute>
                            <ProtectedRoute exact path="/add">
                              <Add addVenue={this.handleAddVenue.bind(this)}/>
                            </ProtectedRoute>
                        </Switch>
                    </div>
                    <Footer />     
                </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
