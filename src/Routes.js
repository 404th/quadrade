import React from 'react'
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'

const Routes = () => {
  return (
    <div>
        <Switch>
          <Route path={'/'} component={Home} />
        </Switch>
    </div>
  )
}

export default Routes