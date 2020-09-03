import React from 'react'
import { Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/Home'
import Layout from './components/layout/Layout'

const Routes = () => {
  return (
    <div>
        <Route path={'/'} component={Home} />
    </div>
  )
}

export default Routes