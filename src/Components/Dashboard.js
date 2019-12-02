import React from 'react'
import '../App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import View from './wedding/View'
import Add from './wedding/Add'

class  Dashboard extends React.Component{
    state = {
        wedding:[]
    }
    componentWillMount(){
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
                <Header />
                <div id="dash">
                    <Add addVenue={this.handleAddVenue.bind(this)}/>
                    <View  wedding={this.state.wedding}/>
                </div>
                <Footer />
            </section>
            </div>
        )
    }
}
export default Dashboard;