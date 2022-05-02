import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCe3cY0XMfjmCdE4WEXyWvc0SMLCc3OCWU',
  authDomain: 'bloodfindr.firebaseapp.com',
  databaseURL:
    'https://bloodfindr-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bloodfindr',
  storageBucket: 'bloodfindr.appspot.com',
  messagingSenderId: '437330623861',
  appId: '1:437330623861:web:c4e4b7603c0309de0fa73c',
  measurementId: 'G-TS8BGXCMS0',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

export const collections = {
  // Example
  // USERS: 'users',
}
