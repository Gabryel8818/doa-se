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
     //let url_to_doacoes = `http://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao/${email}`
      let url_to_doacoes = `https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao/`
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



async function receber_doacao(id){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
      
       fetch(`https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao/${id}`)
       .then(async (response) => {
         var doacao_response = await response.json()

        let data = {
          id_doacao: `${id}`,
          nome: `${doacao_response.nome}`,
          categoria: `${doacao_response.categoria}`,
          ong: {
            id_ong: `${doacao_response.ong.id}`,
            nome: `${doacao_response.ong.nome}`,
            telefone: `${doacao_response.ong.telefone}`,
            email: `${doacao_response.ong.email}`,
            cep: `${doacao_response.ong.cep}`,
            estado: `${doacao_response.ong.estado}`,
            cidade: `${doacao_response.ong.cidade}`,
            logradouro: `${doacao_response.ong.logradouro}`,
            cnpj: `${doacao_response.ong.cnpj}`
          },
          receptor: {
            "id_receptor": 1,
            "nome": `${user.email}`,
            "telefone": `${doacao_response.receptor.telefone}`,
            "email": `${user.email}`,
            "cep": `${doacao_response.receptor.cep}`,
            "estado": `${doacao_response.receptor.estado}`,
            "cidade": `${doacao_response.receptor.cidade}`,
            "logradouro": `${doacao_response.receptor.logradouro}`
          },
          doador: {
            "id_doador": `${doacao_response.doador.id}`,
            "nome": `${doacao_response.doador.nome}`,
            "telefone": `${doacao_response.doador.telefone}`,
            "email": `${doacao_response.doador.email}`,
            "cep": `${doacao_response.doador.cep}`,
            "estado": `${doacao_response.doador.estado}`,
            "cidade": `${doacao_response.doador.cidade}`,
            "logradouro": `${doacao_response.doador.email}`,
            "cpf": `${doacao_response.doador.cpf}`
          }
        
         }
         console.log(data)

         const putMethod = {
          method: 'PUT', // Method itself
          headers: {  'Content-type': 'application/json; charset=UTF-8' },
          //body: JSON.stringify(data)
        }


       })
    }
  })

}






function deletar_doacao(id){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      
      const options = {
        method: 'DELETE',
        headers: {  'Content-type': 'application/json; charset=UTF-8'}
      }
      let url_to_delete = `https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao/${id}`
      fetch(url_to_delete,options)
      .then(response => {
        var element = document.getElementById(id)
        element.remove();
      })


    }

  })
}




