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


document.getElementById("button-registrar").addEventListener("click",function(event){
  event.preventDefault()
});
// SIGNUP
function registrarse(){
      const email = document.querySelector('#signup-email').value
      const senha = document.querySelector('#signup-password').value

      firebase.auth()
                  .createUserWithEmailAndPassword(email, senha)
                  .then(userCredential => {
                        console.log('sign-up')
                        var user = userCredential.user;
                        swal("Sucesso", "Seu cadastro foi efetuado com sucesso", "success");
                    })
                .catch(err => {
                  console.log(err)
                  swal("Erro", "Seu cadastro não foi efetuado", "error");
                })


}
