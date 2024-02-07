`   `
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSYVR3APM-Ogg5wo9aATyH3ney45DXbGk",
    authDomain: "priyatam-database.firebaseapp.com",
    databaseURL: "https://priyatam-database-default-rtdb.firebaseio.com",
    projectId: "priyatam-database",
    storageBucket: "priyatam-database.appspot.com",
    messagingSenderId: "1099250282733",
    appId: "1:1099250282733:web:3184fba9e9a21d62231ce4",
    measurementId: "G-B6VXWCJ1W8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



addEventListener('submit', (e) => {
    e.preventDefault()
    const fo = new FormData(e.target)
    const obj = Object.fromEntries(fo)
    console.log(obj.name)

})