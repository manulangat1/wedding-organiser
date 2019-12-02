import React from 'react'
import '../../App.css'

class  Header extends React.Component{
    render(){
        return (
            <nav>
                <div>
                    <h1>Wedding Organizer</h1>
                </div>
                <div id="links">
                    <ul>
                        <li> <a href="#">Manu</a></li>
                        <li><a href="#">is here</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;