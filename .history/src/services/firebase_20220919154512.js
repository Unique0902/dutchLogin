import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBDzODkej9juBS_GhWezPfnTY7Mfppooz8',
  authDomain: 'my-project-7a224.firebaseapp.com',
  projectId: 'my-project-7a224',
  storageBucket: 'my-project-7a224.appspot.com',
  messagingSenderId: '426812582942',
  appId: '1:426812582942:web:869070747d3d8ac788920f',
  measurementId: 'G-XFQXSNL0YG',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
