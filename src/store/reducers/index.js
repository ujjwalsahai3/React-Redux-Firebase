import {combineReducers} from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import notificationReducer from './notificationReducer'

const rootReducers = combineReducers({
    auth: authReducer,
    product : productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    notification: notificationReducer
})

export default rootReducers