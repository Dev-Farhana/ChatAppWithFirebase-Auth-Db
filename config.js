  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import{ getDatabase} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCugpNU2ab1XvLRR0wbeDCc7VK6qZ5y0vQ",
    authDomain: "chat-app-d0c87.firebaseapp.com",
    projectId: "chat-app-d0c87",
    storageBucket: "chat-app-d0c87.appspot.com",
    messagingSenderId: "998925974732",
    appId: "1:998925974732:web:cbf80456841f1098905669",
    databaseURL: "https://chat-app-d0c87-default-rtdb.firebaseio.com",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export{db};

  

