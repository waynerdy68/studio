import admin from 'firebase-admin';

// Define the service account object using environment variables.
// The replace function is crucial for parsing the private key from a .env file.
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
};

/**
 * A function to get the initialized Firestore instance.
 * It uses a singleton pattern to ensure Firebase is only initialized once.
 * It will not throw an error on initialization failure, but will return null instead.
 * @returns {admin.firestore.Firestore | null} The initialized Firestore database instance, or null if initialization fails.
 */
function getFirestoreInstance(): admin.firestore.Firestore | null {
  // If the app is already initialized, return the existing firestore instance.
  if (admin.apps.length > 0) {
    return admin.firestore();
  }

  // Check if all the necessary credentials are provided from the .env file.
  if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
    try {
      // Initialize the Firebase Admin SDK.
      admin.initializeApp({
        // The type definitions for ServiceAccount can be mismatched (expecting camelCase).
        // Casting to `any` bypasses TypeScript checks and allows the runtime to use the correct snake_case keys.
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      });
      console.log('Firebase Admin SDK initialized successfully.');
      // Return the Firestore instance from the newly initialized app.
      return admin.firestore();
    } catch (error) {
      console.error('Firebase admin initialization error:', error);
      // Return null instead of throwing to prevent server crashes on startup.
      return null;
    }
  } else {
    // This warning will show in your server logs if credentials are not in the .env file.
    if (process.env.NODE_ENV === 'development') {
        console.warn('Firebase Admin SDK credentials not provided. Server-side Firebase features will be disabled.');
        if (!serviceAccount.projectId) console.warn('- FIREBASE_PROJECT_ID is missing or empty in your .env file.');
        if (!serviceAccount.clientEmail) console.warn('- FIREBASE_CLIENT_EMAIL is missing or empty in your .env file.');
        if (!process.env.FIREBASE_PRIVATE_KEY) console.warn('- FIREBASE_PRIVATE_KEY is missing or empty in your .env file.');
    }
    // Return null because database functionality is unavailable.
    return null;
  }
}

// Export a single, memoized instance of the Firestore database.
// The function will only run the initialization logic on the very first call.
export const db = getFirestoreInstance();
