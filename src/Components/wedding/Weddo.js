import React from 'react'
import '../../App.css'
import background from '../../images/background.jpeg'
class  Header extends React.Component{
    render(){
        return (
            <section id="boxes">
                <img src={this.props.wedo.image} alt="weddings" />
                <h1>Title:{this.props.wedo.title}</h1>
                <p>location:{this.props.wedo.location}</p>
                <p>{this.props.wedo.description}</p>
                <p>price:{this.props.wedo.price}</p>
                <p>capacity:{this.props.wedo.capacity}</p>
                <p>contact_details:{this.props.wedo.contact_details}</p>
            </section>
        )
    }
}
export default Header;