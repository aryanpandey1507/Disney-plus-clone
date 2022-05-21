import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAjTHV9Imk2h82ABbur38N6VjAAbTidUPA",
    authDomain: "disneyplus-80bc9.firebaseapp.com",
    projectId: "disneyplus-80bc9",
    storageBucket: "disneyplus-80bc9.appspot.com",
    messagingSenderId: "100018136514",
    appId: "1:100018136514:web:da8a802f3a764299b7625b",
    measurementId: "G-01TKC2G667"
  };


  const app =  initializeApp(firebaseConfig);
  const db =  getFirestore(app);
  const auth = getAuth(app);
  //const storage = app.storage();



  export {auth  };
  export default db; 