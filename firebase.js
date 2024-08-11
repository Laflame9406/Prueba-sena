
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeLgjDFtiCRGJ59557phf7KyT_0wCztwA",
    authDomain: "pruebasena-carlos.firebaseapp.com",
    projectId: "pruebasena-carlos",
    storageBucket: "pruebasena-carlos.appspot.com",
    messagingSenderId: "963210261217",
    appId: "1:963210261217:web:19fe97f0a2980e63ef7da0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage };
  
