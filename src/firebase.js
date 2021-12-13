import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBnJXOjLqJHua7E8r_fsESdNqGm9DLosBM',
  authDomain: 'midha-website.firebaseapp.com',
  projectId: 'midha-website',
  storageBucket: 'midha-website.appspot.com',
  messagingSenderId: '139313925072',
  appId: '1:139313925072:web:af951175441169a24887d5',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
