import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootstrap.min.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCmsLd7tDenPuQ4n5RwELjZF1Wcopvz0",
  authDomain: "my-first-project-53969.firebaseapp.com",
  projectId: "my-first-project-53969",
  storageBucket: "my-first-project-53969.appspot.com",
  messagingSenderId: "654413597572",
  appId: "1:654413597572:web:8aa0a2ca063085b004abd1"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
