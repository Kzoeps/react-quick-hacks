import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC0OiZkEN5MkhUedhgAtvw2IQxQkrMvNlw",
  authDomain: "hacket-hacks.firebaseapp.com",
  projectId: "hacket-hacks",
  storageBucket: "hacket-hacks.appspot.com",
  messagingSenderId: "436150931702",
  appId: "1:436150931702:web:911ad9084a70fa72629cd7",
  measurementId: "G-SX3S3CSDQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
