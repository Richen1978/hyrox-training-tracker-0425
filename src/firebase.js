
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPfLTRvTSn2RKOwCmBWo7zA1MrcGlQqJA",
  authDomain: "hyrox-tracker-apr-25.firebaseapp.com",
  projectId: "hyrox-tracker-apr-25",
  storageBucket: "hyrox-tracker-apr-25.appspot.com",
  messagingSenderId: "144557246168",
  appId: "1:144557246168:web:e98c7cafb7db35aae079ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
