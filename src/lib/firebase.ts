import * as admin from 'firebase-admin';

// This is the "service account" that gives your server admin rights
const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // The private key is a long string that needs to be handled carefully
  privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
};

// Initialize the admin app if it hasn't been already
if (!admin.apps.length) {
  // Check if all the necessary credentials are provided
  if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error) {
      console.error('Firebase admin initialization error', error);
    }
  } else {
    // This warning will show in your server logs if credentials are not in the .env file
    console.warn('Firebase Admin SDK credentials not provided. Server-side Firebase features will be disabled.');
  }
}

// Get a reference to the Firestore database
const db = admin.firestore();

export { db };
