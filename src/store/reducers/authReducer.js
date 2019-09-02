import {ActionTypes} from '../../constants/actionTypeConstants'
const initialState={
    userId: null,
    authError: null,
    isAuth: false
}
const authReducer = ( state= initialState, action ) => {
    switch (action.type) {
        case ActionTypes.Auth_User : {
            //console.log('Signed in', action.payload)
            return {
                ...state,
                authError: null,
                isAuth: true
            }
        }
        case ActionTypes.Auth_Error : {
            //console.log('Auth Error', action.payload)
            const {message}= action.payload
            return {
                ...state,
                authError: message,
                isAuth: false
            }
        }
        case ActionTypes.User_Signout : {
            //console.log('Signout', action.payload)
            return {
                ...state,
                userId: null,
                authError: null,
                isAuth: false
            }
        }

        case ActionTypes.User_Registration : {
            console.log('Registered', action.payload)
            return {
                ...state,
                authError: null
            }
        }
        case ActionTypes.User_Registration_Error : {
            console.log('User Reg Error', action.payload)
            return {
                ...state,
                authError: action.payload.message
            }
        }
        case ActionTypes.User_Error : {
            console.log('Error', action.payload)
            return {
                ...state,
                authError: action.payload.message
            }
        }
        default : {
            return state
        }
    }
}

export default authReducer