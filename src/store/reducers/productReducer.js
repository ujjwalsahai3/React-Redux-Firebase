import {ActionTypes} from '../../constants/actionTypeConstants'

const initialState={
    products: []
}
const productReducer = ( state= initialState, action ) => {
    switch (action.type){
        case ActionTypes.Product_Create:{
                console.log("Product added ", state)
                return state
        }
        case ActionTypes.Product_Error:{
            console.log("Product error ",action.payload)
            return state
        }
        default :{
                return state
        }
    }
}

export default productReducer