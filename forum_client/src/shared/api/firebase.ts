// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey as string,
    authDomain: import.meta.env.VITE_authDomain as string,
    projectId: import.meta.env.VITE_projectId as string,
    storageBucket: import.meta.env.VITE_storageBucket as string,
    messagingSenderId: import.meta.env.VITE_messagingSenderId as string,
    appId: import.meta.env.VITE_appId as string,
    measurementId: import.meta.env.VITE_measurementId as string,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// firestore 객체 생성
const db = getFirestore(app);
enableIndexedDbPersistence(db).catch(() => {});

// firestore export
export { auth, analytics, db, storage };
