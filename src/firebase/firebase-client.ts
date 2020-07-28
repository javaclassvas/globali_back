import * as admin from 'firebase-admin';
import * as serviceAccount from "./service-account-credentials.json"


admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),

  databaseURL: "https://glob-medicals.firebaseio.com"
});

const db = admin.firestore();
const auth = admin.auth();

export { admin, db, auth };