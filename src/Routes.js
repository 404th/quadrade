import React from 'react'
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'
import Error from './components/error/Error'
import Why from './components/why/Why'

const Routes = () => {
  return (
    <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/why'} component={Why} />
          <Route component={Error} />
        </Switch>
    </div>
  )
}

export default Routes