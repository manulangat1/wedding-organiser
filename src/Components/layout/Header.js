import React from 'react'
import '../../App.css'
import {
    Link,Redirect, withRouter
  } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import firebase from 'firebase';

class  Header extends React.Component{
    handleLogout = () => {
        // return <Redirect to="/login" />
        // firebase.auth().signOut();
        const { dispatch } = this.props;
        dispatch(logoutUser());
        this.props.history.push("/login");
        return <Redirect to="/login"></Redirect>
      };
    // const authLinks = (
    //     <li className="current"> <Link to="/" >Home</Link></li>
    //                     <li className="current"><Link to="/add">Add</Link></li>
    //                     <li><button onClick={this.handleLogout} className="primary-btn">Logout</button></li>
    // )
    render(){
        const {isAuthenticated} = this.props
        return (
            <nav>
                <div class="container">
                <div>
                    <div id="branding">
                        <h1> <span class="highlight">Wedding </span> Organizer</h1>
                    </div>
                </div>
                <div id="links">
                    <ul>
                        {/* { user ? this.authLinks : ""} */}
                        <li className="current"> <Link to="/" >Home</Link></li>
                        <li className="current"><Link to="/ed">Venues</Link></li>
                        <li><button onClick={this.handleLogout} className="primary-btn">Logout</button></li>
                    </ul>
                </div>
                </div>
            </nav>

        )
    }
}
function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }
export default connect(mapStateToProps) ( withRouter(Header));