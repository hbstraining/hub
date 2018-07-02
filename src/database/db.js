import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseSettings, firestoreSettings } from './settings';

// initialize the firebase connection, and connect to our remote backend
let firebaseApp = firebase.initializeApp( firebaseSettings );

// create a reference to the firestore database
let db = firebaseApp.firestore();

// bind recommended settings to our remote database connection
db.settings( firestoreSettings );

// export the database connection to make it accessible in other files
export default db;
