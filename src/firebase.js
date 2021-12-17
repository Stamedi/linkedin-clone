import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJI2VYthb02qIPIgVNb4h353J2c9McsLg',
  authDomain: 'linkedin-clone-99877.firebaseapp.com',
  projectId: 'linkedin-clone-99877',
  storageBucket: 'linkedin-clone-99877.appspot.com',
  messagingSenderId: '629136268315',
  appId: '1:629136268315:web:8db162c088b72945286cbe',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCJI2VYthb02qIPIgVNb4h353J2c9McsLg',
//   authDomain: 'linkedin-clone-99877.firebaseapp.com',
//   projectId: 'linkedin-clone-99877',
//   storageBucket: 'linkedin-clone-99877.appspot.com',
//   messagingSenderId: '629136268315',
//   appId: '1:629136268315:web:8db162c088b72945286cbe',
// };

// initializeApp(firebaseConfig);
// const db = getFirestore();
// const auth = getAuth();

// export { db, auth };
