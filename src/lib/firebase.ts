import * as admin from 'firebase-admin';

// Define the service account object using environment variables.
// The replace function is crucial for parsing the private key from a .env file.
const serviceAccount = {
  project_id: process.env.FIREBASE_PROJECT_ID,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
};

/**
 * A function to get the initialized Firestore instance.
 * It uses a singleton pattern to ensure Firebase is only initialized once.
 * @returns {admin.firestore.Firestore} The initialized Firestore database instance.
 */
function getFirestoreInstance(): admin.firestore.Firestore {
  // If the app is already initialized, return the existing firestore instance.
  if (admin.apps.length > 0) {
    return admin.firestore();
  }

  // Check if all the necessary credentials are provided from the .env file.
  if (serviceAccount.project_id && serviceAccount.client_email && serviceAccount.private_key) {
    try {
      // Initialize the Firebase Admin SDK.
      admin.initializeApp({
        // The type definitions for ServiceAccount can be mismatched (expecting camelCase).
        // Casting to `any` bypasses TypeScript checks and allows the runtime to use the correct snake_case keys.
        credential: admin.credential.cert(serviceAccount as any),
      });
      console.log('Firebase Admin SDK initialized successfully.');
      // Return the Firestore instance from the newly initialized app.
      return admin.firestore();
    } catch (error) {
      console.error('Firebase admin initialization error:', error);
      // Throw an error to make it clear that initialization failed and the app cannot proceed.
      throw new Error('Could not initialize Firebase Admin SDK. Check server logs for details.');
    }
  } else {
    // This warning will show in your server logs if credentials are not in the .env file.
    console.warn('Firebase Admin SDK credentials not provided. Server-side Firebase features will be disabled.');
    if (!serviceAccount.project_id) console.warn('- FIREBASE_PROJECT_ID is missing or empty in your .env file.');
    if (!serviceAccount.client_email) console.warn('- FIREBASE_CLIENT_EMAIL is missing or empty in your .env file.');
    if (!process.env.FIREBASE_PRIVATE_KEY) console.warn('- FIREBASE_PRIVATE_KEY is missing or empty in your .env file.');
    // Throw an error because database functionality is unavailable.
    throw new Error('Missing Firebase Admin SDK credentials. Cannot connect to Firestore.');
  }
}

// Export a single, memoized instance of the Firestore database.
// The function will only run the initialization logic on the very first call.
export const db = getFirestoreInstance();
