   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
   import { getDatabase,ref,update, onValue} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
   import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
   const firebaseConfig = {
     apiKey: "AIzaSyByhfNIKlUejL_DZ8nX14shF3ecrOAoEtw",
     authDomain: "shoppers-club-23c3c.firebaseapp.com",
     databaseURL: "https://shoppers-club-23c3c-default-rtdb.firebaseio.com",
     projectId: "shoppers-club-23c3c",
     storageBucket: "shoppers-club-23c3c.appspot.com",
     messagingSenderId: "776825500422",
     appId: "1:776825500422:web:e77f016cc93a9b41d86487",
     measurementId: "G-FL037WLX5Z"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);
   const auth =getAuth();
   const user = auth.currentUser;
   onAuthStateChanged(auth,(user)=>{
       if(user){
           const uid = user.uid;
           console.log(uid);
           console.log(ref(database, 'users/' + uid));
           onValue(ref(database, 'users/'+uid), (snapshot) => {
               const username = snapshot.val().username;
               const heading =document.getElementById("login");
               heading.innerHTML=username;
           }), {
               onlyOnce: true
           };
       }
       else{

       }
   })
   function timer(){
    setTimeout(()=>{window.location.reload();},2000);
   }
   logout.addEventListener('click',(e)=>{
    signOut(auth).then(()=>{
        alert("User Logged Out");
        timer();
         
    }).catch((error)=>{
        const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
    });
});