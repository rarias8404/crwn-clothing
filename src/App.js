import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSingOutPage from "./pages/sing-in-and-sing-out/sing-in-and-sing-out.component";
import Header from "./components/header/header.component";

import { auth } from "./firebase/firebase.utils";

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SingInAndSingOutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
