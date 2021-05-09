import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBB2WZtuAg4IGDwCazzweDfdcD9YuJOp2g',
  authDomain: 'netflix-64e2c.firebaseapp.com',
  projectId: 'netflix-64e2c',
  storageBucket: 'netflix-64e2c.appspot.com',
  messagingSenderId: '717614460453',
  appId: '1:717614460453:web:a37250ee3fd9db3ab8d9cc',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
