import React, {Component} from 'react';
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { emailSignInStart } = this.props;
    const { email, password } = this.state

    emailSignInStart(email, password);
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const { email, password } = this.state
    const { googleSignInStart } = this.props
    return (
      <div className='sing-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            required
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            required
            handleChange={this.handleChange}
            label='Password'
          />
          <div className='buttons'>
            <CustomButton type="submit">Sing in</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              {' '}Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
