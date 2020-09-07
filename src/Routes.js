import React from 'react'
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'
import Error from './components/error/Error'

const Routes = () => {
  return (
    <div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route component={Error} />
        </Switch>
    </div>
  )
}

export default Routes