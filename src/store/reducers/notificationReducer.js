import {ActionTypes} from '../../constants/actionTypeConstants'

const initialState ={notification: []}

const notificationReducer =(state = initialState, action) =>{
    switch (action.type){
        case (ActionTypes.Notification_Add): {
                console.log(action.payload)
                return state
            }
        case (ActionTypes.Notification_Error): {
                console.log(action.payload)
                return state
            }
        default:
            return state
    }
}

export default notificationReducer