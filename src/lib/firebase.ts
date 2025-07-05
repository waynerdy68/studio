import * as admin from 'firebase-admin';

// This is the "service account" that gives your server admin rights
const serviceAccount: admin.ServiceAccount = {
  project_id: process.env.FIREBASE_PROJECT_ID,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  // The private key is a long string that needs to be handled carefully.
  // In your .env file, make sure to wrap the entire key in double quotes,
  // including the "-----BEGIN PRIVATE KEY-----" and "-----END PRIVATE KEY-----" lines.
  privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
};

let db: admin.firestore.Firestore | null = null;

// Initialize the admin app if it hasn't been already
if (!admin.apps.length) {
  // Check if all the necessary credentials are provided
  if (serviceAccount.project_id && serviceAccount.client_email && serviceAccount.privateKey) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log('Firebase Admin SDK initialized successfully.');
      db = admin.firestore();
    } catch (error) {
      console.error('Firebase admin initialization error:', error);
    }
  } else {
    // This warning will show in your server logs if credentials are not in the .env file
    console.warn('Firebase Admin SDK credentials not provided. Server-side Firebase features will be disabled.');
    if (!serviceAccount.project_id) console.warn('- FIREBASE_PROJECT_ID is missing or empty in your .env file.');
    if (!serviceAccount.client_email) console.warn('- FIREBASE_CLIENT_EMAIL is missing or empty in your .env file.');
    if (!serviceAccount.privateKey) console.warn('- FIREBASE_PRIVATE_KEY is missing or empty in your .env file.');
  }
} else {
    db = admin.firestore();
}

export { db };
