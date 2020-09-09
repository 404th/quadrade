import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SignIn = () => {

  const createInputField = field => {
    console.log( field )
    return (
      <div className="form-input">
        <label htmlFor="post"> { field.myLabel } </label>
        <input type="text" {...field.input} />
      </div>
    )
  }

  return (
    <div>
      <form>
        <Field
          myLabel='Enter username'
          name='username'
          component={ createInputField }
        />

        <Field
          myLabel='Enter firstname'
          name='firstname'
          component={ createInputField }
        />

        <button type={'submit'}> Submit </button>

      </form>
    </div>
  )
}

export default reduxForm({
  form:'SignIn_user'
})( SignIn )