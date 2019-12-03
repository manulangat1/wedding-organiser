import React from 'react'
import '../../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class  Header extends React.Component{
    render(){
        return (
            <nav>
                <div class="container">
                <div>
                    <h1>Wedding Organizer</h1>
                </div>
                <div id="links">
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/add">Add</Link></li>
                    </ul>
                </div>
                </div>
            </nav>

        )
    }
}
export default Header;