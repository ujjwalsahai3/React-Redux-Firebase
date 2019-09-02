import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {UserLogout} from '../../store/actions/authAction'

const SignedInLinks =(props) =>{
    return (
        <ul className="right hide-on-med-and-down">
            <li title="Add new product"><NavLink to="/productAdd">Add Product</NavLink></li>
            <li title="Logout"><a href='#' onClick={()=> props.userLogOut()} >Logout</a></li>
            <li><NavLink to="/" className='btn btn-floating orange lighten-1'>{props.profile.initials}</NavLink></li>
        </ul> 
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogOut: () =>{ dispatch(UserLogout()) }
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)