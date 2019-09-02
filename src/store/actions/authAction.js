import {ActionTypes} from '../../constants/actionTypeConstants'
export const UserAuth = (credentials) => {
    return (dispatch,getState, {getFirebase}) => {
        //async method execution
        const firebaseObj= getFirebase();
        firebaseObj.auth().signInWithEmailAndPassword(
            credentials.email, 
            credentials.password
            ).then((response)=>{
                dispatch({type: ActionTypes.Auth_User, payload: response})
            }).catch((err) =>{
                dispatch({type: ActionTypes.Auth_Error, payload: err})
            })
    }
}

export const UserLogout = () => {
    return (dispatch,getState, {getFirebase}) => {
        //async method execution
        const firebaseObj= getFirebase();
        firebaseObj.auth().signOut().then((response)=> {
            dispatch({type: ActionTypes.User_Signout, payload: response})
        }).catch((err)=>{
            dispatch({type:ActionTypes.User_Error, payload: err})
        })
        
    }
}

export const UserRegistration = (userInfo) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        //async method execution
        const firebaseObj= getFirebase()
        const firestoreObj = getFirestore()
        firebaseObj.auth().createUserWithEmailAndPassword(
            userInfo.email, 
            userInfo.password
            ).then((result) => {
                return firestoreObj.collection('users').doc(result.user.uid).set({
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    dob: userInfo.dob,
                    initials: userInfo.firstName[0]+ " "+ userInfo.lastName[0]
                }).then(
                    (res) => {
                        dispatch({type: ActionTypes.User_Registration, payload: res})
                    }
                ).catch((err) =>{
                    dispatch({type: ActionTypes.User_Registration_Error, payload: err})
                })
            }).catch((err) => {
                dispatch({type: ActionTypes.User_Error, payload: err})
            })
    }
}



