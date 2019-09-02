import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'


const Navbar= (props) =>{

    const {uid} = props.userAuth
    const dynamicComponent=uid ? <SignedInLinks profile={props.userProfile}/>: <SignedOutLinks  />
    return (
        <nav className='nav-wrapper orange lighten-2'>
            <div className="nav-wrapper">
            <div className='container'>
                <Link to='/' className="brand-logo"><i className="material-icons">blur_circular</i>Earlymyles</Link>
                {dynamicComponent}
            </div>
            </div>
    </nav>
    )
}

const mapStateToProps =(state) => {
    return {
        userAuth : state.firebase.auth,
        userProfile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)