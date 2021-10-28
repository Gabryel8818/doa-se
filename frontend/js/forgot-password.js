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

document.getElementById("button-forgot").addEventListener("click",function(event){
    event.preventDefault()
  });

function forgot_password(){
    email = document.getElementById("forgot-email").value
    firebase.auth().sendPasswordResetEmail(`${email}`)
    .then(res => {
        swal("Sucesso", "Verifique sua caixa de entrada/spam", 'success')
    })
    .catch(error => {
        swal("Erro", `${error.message}`, 'error')
    })

}