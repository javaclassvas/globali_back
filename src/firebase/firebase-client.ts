import * as admin from 'firebase-admin';

const serviceAccount = require('./service-account-credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://glob-medicals.firebaseio.com"
});

const db = admin.firestore();
const auth = admin.auth();

export { admin, db, auth };