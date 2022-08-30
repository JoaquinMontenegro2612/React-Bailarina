import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyCXzX3cdJYJYNF3LkjdAv1n2q8kykfKkjI",
authDomain: "bailarina-react.firebaseapp.com",
projectId: "bailarina-react",
storageBucket: "bailarina-react.appspot.com",
messagingSenderId: "595123072907",
appId: "1:595123072907:web:63a9bc81ad0b138809c98e",
measurementId: "G-T5F5PQ20B7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

console.log(db);