import React from 'react'
import { Route, Switch } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'

const Routes = () => {
  return (
    <div>
        <Route exact render={ () => {console.log('404')} } />
        <Route path={'/'} component={Home} />
    </div>
  )
}

export default Routes