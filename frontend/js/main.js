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


  logout.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
          window.location.href = "index.html";

        }, function (error) {
            console.error(error);
            window.location.href = "index.html";
          });
});

firebase.auth().onAuthStateChanged(function(user){
  if (user){
      var email = user.email
      document.querySelector('#nomeLogado').innerHTML = `Bem vindo ${email}`

      // Alterando o valor das doações do usuário
      let url_to_doacoes = `http://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao/${email}`
        const options =  {
            method: 'GET',
            mode: 'cors'
          }
        
          fetch(url_to_doacoes,options)
              .then(async (response) => {
                var doacoes_response = await response.json()
                  console.log(doacoes_response)
    
        
                
              })
    
    
        document.getElementById("doacoes-mes").innerHTML = "R$ 300"
  }else
    console.log("disconnected")

})


