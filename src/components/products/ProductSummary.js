import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProductSummary = (props) => {
    const {product} = props
     

    return (
        <div className='card z-depth-0 product-summary'>
            <Link to={"/product/"+ product.id}>
                <div className='card-content orange-text text-darken-4'>
                    <span className='card-title'>{product.name}</span>
                    <p className='orange-text text-darken-2'>
                        Manufactured by {product.manufacturer}, since {product.since} 
                    </p>
                    <p className='orange-text'>
                        {product.description}
                    </p>
                    <p className='orange-text text-lighten-2'>
                        Added By: {product.addedByFirstName + " "+ product.addedByLastName} 
                    </p>
                    <p className='orange-text text-lighten-4'>
                        Added On: {moment(product.addedOn.toDate()).calendar()} 
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ProductSummary