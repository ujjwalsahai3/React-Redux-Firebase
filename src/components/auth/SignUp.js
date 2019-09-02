import React, { Component } from 'react'
import {connect} from 'react-redux'
import {UserRegistration} from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        dob: null
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        this.props.registerUser(this.state)
    }

    onChangeHandler = (event) => {
            const {name, value}= event.target;
            this.setState({[name] : value})
    }

    render() { 
        
        const {uid}= this.props.signedInUser
        if(uid)
           return (<Redirect to='/' />)

        return (  
            <div className='container'>
                <form className='white' onSubmit={(e) => this.onSubmitHandler(e)}>
                    <h5 className='grey-text text-darken-3'>Register</h5>
                    <div className='input-field s6'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' name='firstName' autoFocus onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field s6'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' name='lastName' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='dob'>DOB</label>
                        <input type='date' id='dob' name='dob' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field red-text'>
                       {this.props.authError}
                    </div>
                    <button type='submit' className='btn orange lighten-2 z-depth-0'>Register</button> 
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        signedInUser: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        registerUser : (userInfo) =>{ dispatch(UserRegistration(userInfo))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)