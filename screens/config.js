import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBU26UZzy0GRd30VTQC9_XtDhhTZR5cjUQ',
  authDomain: 'sakar-287519.firebaseapp.com',
  databaseURL: 'https://sakar-287519.firebaseio.com/',
  projectId: 'sakar-287519',
  storageBucket: 'sakar-287519.appspot.com',
  messagingSenderId: '287500585179',
  appId: '1:287500585179:android:ea980941ebf4d9565d64fe',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };