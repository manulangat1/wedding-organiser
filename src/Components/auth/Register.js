import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/auth";
import { Link } from 'react-router-dom'
// import '../../'

class Register extends Component {
    state = {
        email:"",
        password:"",
        password2:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { email, password,password2 } = this.state;

        dispatch(loginUser(email, password));
    }
    render(){
        const { classes, loginError, isAuthenticated } = this.props;
        const {email,password,password2} = this.state
        return(
            <div>
                <section id="login">
                    <form onSubmit={this.onSubmit}>
                        <h1>Sign up to the application to start using</h1>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" class="form-control" value={email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="pasword" name="password" class="form-control" value={password} onChange={this.onChange} />
                    </div>
                    <div>
                        <label> Confirm Password</label>
                        <input type="pasword" name="password2" class="form-control" value={password2} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Sign Up" class="primary-btn" />
                    </form>
                    <div>
                        <p>Alread have an account?? <Link className="current" to="/login">Login here</Link></p>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToprops = state => ({
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToprops)(Register)