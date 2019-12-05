import React from 'react'
import '../../App.css'
import background from '../../images/background.jpeg'
class  Search extends React.Component{
    render(){
        return (
            <section id="boxes">
                {
                    Object.keys(this.props.wedding).length > 0 ?
                    <h1>hey</h1>
                    : null
                }
                <img src={this.props.wedding.image} alt="weddings" />
                <h1>{this.props.wedding.title}</h1>
                <p>{this.props.wedding.location}</p>
                <p>{this.props.wedding.description}</p>
                <p>{this.props.wedding.price}</p>
                <p>{this.props.wedding.capacity}</p>
            </section>
        )
    }
}
export default Search;