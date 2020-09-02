import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyByLpuBS01Bm42ncF_vSTnXT-IMPKGejkg",
  authDomain: "todo-cp-39ec9.firebaseapp.com",
  databaseURL: "https://todo-cp-39ec9.firebaseio.com",
  projectId: "todo-cp-39ec9",
  storageBucket: "todo-cp-39ec9.appspot.com",
  messagingSenderId: "366495836070",
  appId: "1:366495836070:web:9106db17a5898992385167",
  measurementId: "G-6K5TTH1E0Z"
})

const db = firebaseApp.firestore()

export default db