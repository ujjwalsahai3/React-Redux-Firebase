import {createStore, applyMiddleware, compose} from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import firebaseConfig from '../config/firebaseConfig'

const appStore=createStore(
    rootReducers,
    compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true , userProfile: 'users', attachAuthIsReady: true})
    )
)

export default appStore;