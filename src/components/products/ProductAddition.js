import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {CreateProduct} from '../../store/actions/productAction'

class ProductAddition extends Component {
    state = {
        name: null,
        manufacturer: null,
        since: null,
        description: null
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        //console.log(this.state)
        this.props.createProduct(this.state)
        this.props.history.push('/')
    }

    onChangeHandler = (event) => {
            //console.log(event)
            const {name, value}= event.target;
            this.setState({[name] : value})
    }

    render() { 
        const {uid}= this.props.signedInUser
        if(uid === undefined)
           return (<Redirect to='/login' />)

        return (  
            <div className='container'>
                <form className='white' onSubmit={(e) => this.onSubmitHandler(e)}>
                    <h5 className='grey-text text-darken-3'>Add Product</h5>
                    <div className='input-field'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='description'>Description</label>
                        <textarea id='description' name='description' className='materialize-textarea' onChange={(e) => this.onChangeHandler(e)}></textarea>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='manufacturer'>Manufacturer</label>
                        <input type='text' id='manufacturer' name='manufacturer' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='since'>Since</label>
                        <input type='date' id='since' name='since' onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <button type='submit' className='btn orange lighten-2 z-depth-0'>Add Product</button> 
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        signedInUser: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct : (product) => {dispatch(CreateProduct(product))}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddition)