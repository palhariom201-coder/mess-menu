// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBix-y_Bme62eNdMmNOJ3B9IyAzC3lgbzU",
  authDomain: "campus-utilities-hub-6c4e6.firebaseapp.com",
  projectId: "campus-utilities-hub-6c4e6",
  storageBucket: "campus-utilities-hub-6c4e6.firebasestorage.app",
  messagingSenderId: "526621297338",
  appId: "1:526621297338:web:d4b05b4bd209dc97439083",
  measurementId: "G-9CBJP9V3B2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveFeedback = async (data) => {
  const { name, rollNumber, rating, comments, meal } = data;
  try {
    const savedData = await addDoc(collection(db, "mess-menu"), {
      name,
      rollNumber,
      rating,
      comments,
      meal,
      createdAt: Date.now(),
    });
    return savedData;
  } catch (err) {
    console.log('Error in savedFeedback',err.message);
  }
};

export const fetchFeedback = async () => {
  const now = new Date();

  const startOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();

  const endOfDay = startOfDay + 24 * 60 * 60 * 1000;

  try {
  const q = query(
    collection(db, "mess-menu"),
    where("createdAt", ">=", startOfDay),
    where("createdAt", "<", endOfDay)
  );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.warn("No documents found");
      return [];
    }

    const data = await snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return data;
  } catch (err) {
    console.error("getDocs failed:", err);
  }
};

