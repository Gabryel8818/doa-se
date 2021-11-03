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


  document.getElementById("button-registrardoc").addEventListener("click",function(event){
    event.preventDefault()
  });





  // SIGNUP
  function registrardoc(){
        const value_nomedoc = document.querySelector('#signup-nomedoc').value
        const value_email = document.querySelector('#signup-email').value
        const value_nome = document.querySelector('#signup-nome').value
        const value_telefone = document.querySelector('#signup-telefone').value
        const value_cep = document.querySelector('#signup-cep').value
        const value_logradouro = document.querySelector('#signup-logradouro').value
        const value_estado = document.querySelector('#signup-estado').value
        const value_cpf = document.querySelector('#signup-cpf').value
        const value_categoria = document.getElementById('categoria').value
        const value_cidade = document.querySelector('#signup-cidade').value

        let dataDoacao = {
          nome: value_nomedoc,
          categoria: value_categoria,
          status: 'D',
          doador: {
              nome: value_nome,
              telefone: value_telefone,
              email: value_email,
              cep: value_cep,
              estado: value_estado,
              cidade: value_cidade,
              logradouro: value_logradouro,
              cpf: value_cpf
          },
         ong: {
             nome: null,
             telefone: null,
             email: null,
             cep: null,
             estado: null,
             cidade: null,
             logradouro: null,
             cnp: null
         },
        receptor: {
            nome: null,
            telefone: null,
            email: null,
            cep: null,
            estado: null,
            cidade: null,
            logradouro: null
        },        
  }
 
 
 
 
                 // options para o fetch
                           options = {
                               method: 'POST',
                               mode: 'cors',
                               body: JSON.stringify(dataDoacao), // passando os dados da lista para o POST
                               headers: {"Content-Type": "application/json"}
                           }
 
                           fetch("https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao", options)
                             .then( response => response.json())
                             .then(resposta => {
                              // mensagem de sucesso
                              swal("Sucesso", "Seu cadastro foi efetuado com sucesso", "success")
                                .then((value) => {
                                  window.location.href = "cards.html"
                          })
                             })
                             .then(json => console.log(json))
                             .catch(err => console.log(err))
                              .catch(err => {
                                console.log(err)
                                swal("Erro", "Seu cadastro não foi efetuado", "error");
                              })
  }
