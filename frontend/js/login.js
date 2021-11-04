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
  
  
async function login(){
    const email = document.querySelector('#signin-email').value
    const senha = document.querySelector('#signin-password').value
    if ( email !== '' && email !== null && senha !== null && senha !== ''){
      auth
      .signInWithEmailAndPassword(email,senha)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user.email)
        })
  
        .catch((error) => {
          var errorCode = error.code
          console.log(errorCode)
          var errorMessage = error.message
          if (errorMessage === "The password is invalid or the user does not have a password.") {
            swal("Erro", 'Senha ou Email Inválidos','error')
          }
        })
  
        auth
          .onAuthStateChanged((user) => {
            if (user){
              window.location.href = "./site/dashboard.html" 
            } else {
              console.log ("User disconnected")
             
            }
  
  
          })
    } else {
      swal("Erro", "Preencha todos os campos", "error");
    }
}
  