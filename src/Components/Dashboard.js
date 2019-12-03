import React from 'react'
import '../App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import View from './wedding/View'
import Add from './wedding/Add'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class  Dashboard extends React.Component{
    state = {
        wedding:[]
    }
    componentDidMount(){
        this.setState({wedding:[
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
          ]});
    }
    handleAddVenue = venue => {
        console.log(venue)
        let wedding
        wedding = this.state.wedding
        wedding.push(venue)
        this.setState({wedding})
    }
    render(){
        return (
            <div>
            <section>
                <Router>
                    <Switch>
                    <Header />
                    <div id="dash">
                        <h1>hey</h1>
                        {/* <Add addVenue={this.handleAddVenue.bind(this)}/> */}
                        <View  wedding={this.state.wedding}/>
                        {/* <Route exact path="/" component={View} /> */}
                        {/* <Route path="/" render={props => (<View {...props} wedding={this.state.wedding}/>)}/> */}
                        {/* <Route exact path="/add" component={Add}/> */}
                    </div>
                    <Footer />
                </Switch>
                </Router>
            </section>
            </div>
        )
    }
}
export default Dashboard;