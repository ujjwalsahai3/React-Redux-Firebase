import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks =() =>{
    return (
        <ul className="right hide-on-med-and-down">
            <li title="Login"><NavLink to="/login">Login</NavLink></li>
            <li title="Sign up"><NavLink to="/signup">Signup</NavLink></li>
        </ul> 
    )
}

export default SignedOutLinks