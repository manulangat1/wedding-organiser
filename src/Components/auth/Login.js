import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/auth";
import { Link } from 'react-router-dom'
// import '../../'

class Login extends Component {
    state = {
        email:"",
        password:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(loginUser(email, password));
    }
    render(){
        const { classes, loginError, isAuthenticated } = this.props;
        const {email,password} = this.state
        if (isAuthenticated) {
            return <Redirect to="/" />;
          } else {
        return(
            <div>
                <section id="login">
                    <form onSubmit={this.onSubmit}>
                        <h1>Login </h1>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" class="form-control" value={email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="pasword" name="password" class="form-control" value={password} onChange={this.onChange} />
                    </div>
                    <input type="submit" value="Login" class="primary-btn" />
                    </form>
                    <div>
                        <p>Dont have an account?? <Link className="current" to="/register">Register here</Link></p>
                    </div>
                </section>
            </div>
        )
          }
    }
}
const mapStateToprops = state => ({
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToprops)(Login)