import React from 'react'
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'
import Error from './components/error/Error'
import Why from './components/why/Why'
import SignIn from './components/form/signIn/SignIn'
import Trial from './components/form/trial/Trial'

const Routes = () => {
  return (
    <div>
        <Switch>
          <Route exact path={'/'} component={ Home } />
          <Route exact path={'/why'} component={ Why } />
          <Route exact path={'/signIn'} component={ SignIn } />
          <Route exact path={'/trial'} component={ Trial } />
          <Route component={ Error } />
        </Switch>
    </div>
  )
}

export default Routes