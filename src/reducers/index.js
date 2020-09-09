import { combineReducers } from 'redux'
import { reducer as signInReducer } from 'redux-form'

import SignIn_reducer from './signIn'


const combinerReducer = combineReducers({
  SignIn_reducer,
  form: signInReducer
})

export default combinerReducer