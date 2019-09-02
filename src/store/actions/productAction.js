import {ActionTypes} from '../../constants/actionTypeConstants'

export const CreateProduct = (product) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
       const userProfile= getState().firebase.profile
       const userId=getState().firebase.auth.uid
        const firestoreObj= getFirestore();
        firestoreObj.collection('products').add({
            ...product,
            addedByFirstName: userProfile.firstName,
            addedByLastName: userProfile.lastName,
            addedBy: userId,
            addedOn: new Date()
        }).then(() => {
            dispatch({type: ActionTypes.Product_Create, payload: product})
        }).catch((err) => {
            dispatch({type: ActionTypes.Product_Error, payload: err})
        })
    }
}