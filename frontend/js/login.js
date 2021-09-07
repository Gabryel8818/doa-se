const firebaseConfig = {
  apiKey: "AIzaSyAlGREJPTOTx3eIsalRh8xvngnPFF5c-Ss",
  authDomain: "doase-4611e.firebaseapp.com",
  projectId: "doase-4611e",
  storageBucket: "doase-4611e.appspot.com",
  messagingSenderId: "389479966724",
  appId: "1:389479966724:web:60b9123f18dab6342fad51",
  measurementId: "G-L4NYQFYF69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth()


document.getElementById("button-login").addEventListener("click",function(event){
  event.preventDefault()
});


function login(){
  const email = document.querySelector('#signin-email').value
  const senha = document.querySelector('#signin-password').value
  auth
    .signInWithEmailAndPassword(email,senha)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
      })

      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
      })

      auth
        .onAuthStateChanged((user) => {
          if (user){
            var email = user.email
            window.location.href = "main.html"

          } else {
            console.log ("User disconnected")
          }


        })

}
