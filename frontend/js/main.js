const firebaseConfig = {
    apiKey: "AIzaSyAlGREJPTOTx3eIsalRh8xvngnPFF5c-Ss",
    authDomain: "doase-4611e.firebaseapp.com",
    projectId: "doase-4611e",
    storageBucket: "doase-4611e.appspot.com",
    messagingSenderId: "389479966724",
    appId: "1:389479966724:web:60b9123f18dab6342fad51",
    measurementId: "G-L4NYQFYF69"
  };
  

  var logout = document.querySelector("#logout")

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth()


  firebase.auth().onAuthStateChanged(function(user){
      if (user){
          var email = user.email
          document.querySelector('#nomeLogado').innerHTML = `Bem vindo ${email}`




      }else
      window.location.href = "404.html"
  })


  logout.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
          window.location.href = "login.html";

        }, function (error) {
            console.error(error);
            window.location.href = "login.html";
          });
});
