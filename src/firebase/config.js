import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyB1uR1EXCUOlVEIXfDGNhQ7Sdj6otuHde0",
    authDomain: "mymoney-99cd2.firebaseapp.com",
    projectId: "mymoney-99cd2",
    storageBucket: "mymoney-99cd2.appspot.com",
    messagingSenderId: "316299521370",
    appId: "1:316299521370:web:75b85960371a50296c5763"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }