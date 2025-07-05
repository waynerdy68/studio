import * as admin from 'firebase-admin';

// This is the "service account" that gives your server admin rights.
// The Firebase Admin SDK's runtime expects snake_case keys for the service account object,
// which matches the keys in the downloaded JSON file.
const serviceAccount = {
  project_id: process.env.FIREBASE_PROJECT_ID,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  // The private key must be the full string from the JSON file, wrapped in double quotes in the .env file.
  // The replace function below ensures that newline characters are correctly parsed.
  private_key: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
};

let db: admin.firestore.Firestore | null = null;

// Initialize the admin app if it hasn't been already
if (!admin.apps.length) {
  // Check if all the necessary credentials are provided from the .env file
  if (serviceAccount.project_id && serviceAccount.client_email && serviceAccount.private_key) {
    try {
      admin.initializeApp({
        // The type definitions for ServiceAccount are incorrect (expect camelCase).
        // Casting to `any` bypasses the type check and allows the runtime to use the correct snake_case keys.
        credential: admin.credential.cert(serviceAccount as any),
      });
      console.log('Firebase Admin SDK initialized successfully.');
      db = admin.firestore();
    } catch (error) {
      console.error('Firebase admin initialization error:', error);
      db = null; // Ensure db is null on error
    }
  } else {
    // This warning will show in your server logs if credentials are not in the .env file
    console.warn('Firebase Admin SDK credentials not provided. Server-side Firebase features will be disabled.');
    if (!serviceAccount.project_id) console.warn('- FIREBASE_PROJECT_ID is missing or empty in your .env file.');
    if (!serviceAccount.client_email) console.warn('- FIREBASE_CLIENT_EMAIL is missing or empty in your .env file.');
    if (!process.env.FIREBASE_PRIVATE_KEY) console.warn('- FIREBASE_PRIVATE_KEY is missing or empty in your .env file.');
  }
} else {
    // If the app is already initialized, just get the database instance.
    db = admin.firestore();
}

export { db };
