import React from 'react';
import './App.css';

import Dashboard from './Components/Dashboard'
import Header from  './Components/layout/Header'
import Footer from './Components/layout/Footer'
import View from './Components/wedding/View'
import Add from './Components/wedding/Add'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          title: "Business website",
          location: "Nakuru",
          description:"blah blah blah ",
          price:"340000",
          capacity:"200"
        },
        {  title: "Social site",
          location: "Nakuru",
          description:"blah blah blah ",
          price:"340000",
          capacity:"200"
        },
        {
          title: "E-commerce shopping cart",
          location: "Nairobi",
          description:"blah blah blah ",
          price:"340000",
          capacity:"200"
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
  // handleAddProject(project){
  //   console.log(project)
  //   let projects = this.state.projects
  //   projects.push(project)
  //   this.setState({projects:projects})
  // }
  render(){
    return (
      <div className="apps">
       <Router>
                    
                    <Header />
                    <div id="dash">
                        <Switch>
                        <Route exact path="/" >
                        <View  wedding={this.state.wedding}/>
                        </Route>
                        <Route exact path="/add">
                        <Add addVenue={this.handleAddVenue.bind(this)}/>
                        </Route>
                        </Switch>
                    </div>
                    <Footer />
                
                </Router>
      {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
