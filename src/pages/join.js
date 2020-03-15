import React, { Component } from 'react'
import InputField from '../components/input';
import { Background } from '../components/background';

export class Join extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      loginEmail: '',
      loginPassword: '',
      password: '',
      confirmPassword: '',
      signupError: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
      },
      loginError: {
          message: ''
      }
  };
  }

  onChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  signupUser(e) {
    e.preventDefault();
    const signupDetails = { ...this.state }
    console.log("signup success", signupDetails)
    // this.props.registerUser(signupDetails, this.props.history);
  }

  render() {
    return (
      <Background>
        <div className="container">
                <div className="row blog-entries">
                    <div className="col-md-6 col-lg-6 main-content" id="signup">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h1>Register</h1>
                            </div>
                        </div>
                        <form onSubmit={this.signupUser}>
                            <div className="row">
                              <InputField 
                                placeholder = 'First Name'
                                name = 'firstName'
                                type = 'text'
                                // value = {this.state.firstName}
                                onChange = {this.onChange}
                                // error = {signupError.firstName}
                                 />
                                <InputField
                                placeholder = 'Last Name'
                                name = 'lastName'
                                type = 'text'
                                value = {this.state.lastName}
                                onChange = {this.onChange}
                                // error = {signupError.lastName}
                                 />
                                <InputField
                                placeholder = 'Email'
                                name = 'email'
                                type = 'email'
                                value = {this.state.email}
                                onChange = {this.onChange}
                                // error = {signupError.email}
                                 />
                                <InputField
                                placeholder = 'Password'
                                name = 'password'
                                type = 'password'
                                value = {this.state.password}
                                onChange = {this.onChange}
                                // error = {signupError.password}
                                 />
                                <InputField
                                placeholder = 'Confirm Password'
                                name = 'confirmPassword'
                                type = 'password'
                                value = {this.state.confirmPassword}
                                onChange = {this.onChange}
                                // error = {signupError.confirmPassword}
                                 />
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="submit" value="Create Account" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 col-lg-6 main-content" id="signin">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h1>Login</h1>
                            </div>
                        </div>
                         {/* {
                            loginError.message ?
                            <div className="alert alert-danger"> {loginError.message } </div> : null
                        }   */}
                        <form onSubmit={this.signinUser}>
                            <div className="row">
                            <InputField
                                placeholder = 'Email'
                                name = 'loginEmail'
                                type = 'email'
                                onChange = {this.onChange}
                                 />
                                <InputField
                                placeholder = 'Password'
                                name = 'loginPassword'
                                type = 'password'
                                onChange = {this.onChange}
                                 />
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

      </Background>
    )
  }
};