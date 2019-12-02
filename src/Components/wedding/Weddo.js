import React from 'react'
import '../../App.css'

class  Header extends React.Component{
    render(){
        return (
            <section>
                <h1>{this.props.wedo.title}</h1>
                <p>{this.props.wedo.location}</p>
            </section>
        )
    }
}
export default Header;