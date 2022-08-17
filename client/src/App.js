import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import { GlobalStyles } from "./global.styles";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignOutPage = lazy(() => import('./pages/sign-in-and-sign-out/sign-in-and-sign-out.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))


const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route
            exact
            path='/signin'
            render={() => currentUser ? <Redirect to='/'/> : <SignInAndSignOutPage/>}
          />
        </Suspense>
      </Switch>
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
