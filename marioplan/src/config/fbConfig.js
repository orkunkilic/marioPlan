import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDKinFH6DTbyviBlCfRU0zmSllRKjQot2g",
    authDomain: "orkun-marioplan.firebaseapp.com",
    databaseURL: "https://orkun-marioplan.firebaseio.com",
    projectId: "orkun-marioplan",
    storageBucket: "orkun-marioplan.appspot.com",
    messagingSenderId: "242072105290",
    appId: "1:242072105290:web:24bdceb7d91de97eacd1b3",
    measurementId: "G-ED2XFTK4K5"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 