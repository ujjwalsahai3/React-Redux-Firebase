import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProductDetail = (props) => {
    const {product}= props;
    console.log(props)
    const {uid}= props.signedInUser
        if(uid===undefined)
           return (<Redirect to='/login' />)

    if(product !==null)
    return (
        <div className='container section product-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'> 
                        {product.name}
                    </span>
                    <p>
                        Manufactured by {product.manufacturer}, since {product.since}
                    </p>
                    <p>
                    {product.description}
                    </p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>{product.addedByFirstName+ " "+ product.addedByLastName}</div>
                    <div>{moment(product.addedOn.toDate()).calendar()} </div>
                </div>
            </div>
        </div>
    )
    else
     return null
}

const mapStateToProps = (state, ownProps) =>{
    const productId = ownProps.match.params.product_Id
    const productData = state.firestore.ordered.products !== undefined ? 
    (state.firestore.ordered.products.find(product => (product.id)  === (productId) )) :
    (null);
    return {
        product : productData,
        signedInUser: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'products'
    }])
)(ProductDetail)