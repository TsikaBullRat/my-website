import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAQohvLfTjRT4e6fatFKg4u9rvnO4sVxfY",
    authDomain: "tsikabullrat.firebaseapp.com",
    projectId: "tsikabullrat",
    storageBucket: "tsikabullrat.appspot.com",
    messagingSenderId: "1051593338195",
    appId: "1:1051593338195:web:e37342d493711788a985a6",
    measurementId: "G-NNLGG0M8TH"
}

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()

export { db, auth }