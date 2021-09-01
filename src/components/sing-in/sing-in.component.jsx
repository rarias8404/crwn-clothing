import React, {Component} from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { singInWithGoogle } from "../../firebase/firebase.utils";

import './sing-in.styles.scss'

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {email, password} = this.state
    return (
      <div className='sing-in'>
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>

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
            <CustomButton onClick={singInWithGoogle} isGoogleSignIn>
              {' '}Sing in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;