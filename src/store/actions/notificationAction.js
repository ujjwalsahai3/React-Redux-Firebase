import {ActionTypes} from '../../constants/actionTypeConstants'

export const GetNotification = () => {

    return (dispatch,getState, { getFirestore }) => {
        const getFirestoreObj = getFirestore();
            getFirestoreObj.collection('notifications')
                .get().then(doc =>{
                    dispatch({type: ActionTypes.Notification_Add, payload: doc.docs})
                }).catch(err =>{
                    dispatch({type: ActionTypes.Notification_Error, payload: err})
                })
    }
}