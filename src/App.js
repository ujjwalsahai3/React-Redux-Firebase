import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import ProductDetail from './components/products/ProductDetail'
import ProductAddition from './components/products/ProductAddition'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import {Routes} from './constants/routeConstants'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={Routes.dashboard} component={ Dashboard } />
        <Route path={Routes.productDetail} component= { ProductDetail } />
        <Route path={Routes.signIn} component={ SignIn } />
        <Route path={Routes.signUp} component={ SignUp } />
        <Route path={Routes.addProduct} component={ ProductAddition } />
      </Switch>
    </Layout>
  );
}

export default App;
