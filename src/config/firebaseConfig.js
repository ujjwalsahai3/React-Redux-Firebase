import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBfwTEgnSndCJwJfk9AT5bwADKJdTEVWRQ",
    authDomain: "tactical-coder-198109.firebaseapp.com",
    databaseURL: "https://tactical-coder-198109.firebaseio.com",
    projectId: "tactical-coder-198109",
    storageBucket: "",
    messagingSenderId: "85100697931",
    appId: "1:85100697931:web:90164f04356cd5ae"
  };

  firebase.initializeApp(config)
  //firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase