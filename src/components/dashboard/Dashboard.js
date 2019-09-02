import React, {Component} from 'react'
import Notification from './Notification'
import ProductList from '../products/ProductList'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'


class Dashboard extends Component {


    render(){
        
        const {uid}= this.props.signedInUser
        if(uid === undefined)
           return (<Redirect to='/login' />)

        return(
            <div className='row'>
                <div className='col s12 m6'>
                    <ProductList products={this.props.products} />
                </div>
                <div className='col s12 m5 offset-m1'>
                    <Notification notifications={this.props.notifications} />
                </div>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    const prodData=state.firestore.ordered.products !== undefined ? state.firestore.ordered.products : state.product.products
    return {
        products : prodData,
        signedInUser: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
} 


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products', orderBy:['addedOn','desc']},
        {collection: 'notifications' , limit:5, orderBy:['time','desc']}
    ])
    )(Dashboard)