import React, { Component } from 'react'
import {connect} from 'react-redux'
import {UserAuth} from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: null,
        password: null
    }


    onSubmitHandler = (event) =>{
        event.preventDefault();
        this.props.authUser(this.state)
    }

    onChangeHandler = (event) => {
            const {name, value}= event.target;
            this.setState({[name] : value})
    }

    render() { 
       const {location} =this.props
       console.log(location)
        const {uid}= this.props.signedInUser
        if(uid)
           return (<Redirect to={location.pathname==='/login'? '/': location.pathname} />)
       
        return (  
            <div className='container'>
                <form className='white' onSubmit={(e) => this.onSubmitHandler(e)}>
                    <h5 className='grey-text text-darken-3'>Login</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' autoFocus  onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-feild'>
                        <span className='red-text'>{this.props.authentication.authError}</span>
                    </div>
                    <button type='submit' className='btn orange lighten-2 z-depth-0'>Login</button> 
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.auth,
        signedInUser: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        authUser: (credentials) => {dispatch(UserAuth(credentials))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)