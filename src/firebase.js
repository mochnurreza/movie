import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAGh96q0Gaj9U2EuvkCZcxIxNqsqFdwqjs",
    authDomain: "movie-firebase-cf165.firebaseapp.com",
    projectId: "movie-firebase-cf165",
    storageBucket: "movie-firebase-cf165.appspot.com",
    messagingSenderId: "946084793545",
    appId: "1:946084793545:web:4b5194606bda7f09429118"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore
  const auth = firebase.auth()

  export {auth}
  export default db