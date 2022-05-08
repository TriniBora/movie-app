import React, { useState } from 'react'

const initialDetails = {
    email: "",
    password:"",
}

const LoginForm = ( { login, error } ) => {
    const [ details, setDetails ] = useState( initialDetails );

    const handleSubmit = e => { 
        e.preventDefault();
        login( details );
        setDetails( initialDetails );
    }

    const handleChange = e => {
        setDetails( {
            ...details,
            [ e.target.name ]: e.target.value,
        })
    }

  return (
      <form onSubmit={handleSubmit}>
          <div className="form-inner">
              <h2>Login</h2>
              { /*Error message*/ }
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={details.email} className="form-control" id="email" placeholder="Enter email" onChange={ handleChange} />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                <input type="password" name="password" value={details.password}className="form-control" id="password" placeholder="Password" onChange={ handleChange}/>
              </div>
          </div>
          <input type="submit" value="Login" />
    </form>
  )
}

export default LoginForm