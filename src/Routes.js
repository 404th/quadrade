import React from 'react'
import { Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'

const Routes = () => {
  return (
    <div>
      <Route exact path={'/'} component={Home} />
      <Route render={ () => {console.log('404')} } />
    </div>
  )
}

export default Routes