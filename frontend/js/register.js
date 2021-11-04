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


const url_to_fetch = "https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doador"




  // SIGNUP
  function registrar_doador(){
        const value_email = document.querySelector('#signup-email').value
        const value_senha = document.querySelector('#signup-password').value
        const value_nome = document.querySelector('#signup-nome').value
        const value_telefone = document.querySelector('#signup-telefone').value
        const value_cep = document.querySelector('#signup-cep').value
        const value_rua = document.querySelector('#signup-rua').value
        const value_estado = document.querySelector('#signup-estado').value
        const value_cpf = document.querySelector('#signup-cpf').value

        let data = {
          email: value_email,
          nome: value_nome,
          telefone: value_telefone,
          cep: value_cep,
          rua: value_rua,
          estado: value_estado,
          cpf: value_cpf
        }


        firebase.auth()
                    .createUserWithEmailAndPassword(value_email, value_senha)
                    .then(userCredential => {
                          console.log('sign-up')
                          var user = userCredential.user;

                          // options para o fetch
                          options = {
                              method: 'POST',
                              mode: 'cors',
                              body: JSON.stringify(data), // passando os dados da lista para o POST
                              headers: {"Content-Type": "application/json"}
                          }

                           fetch(url_to_fetch, options)
                            .then( response => response.json())
                            .then(json => console.log(json))
                            .catch(err => console.log(err))

                          // mensagem de sucesso
                          swal("Sucesso", "Seu cadastro foi efetuado com sucesso", "success")
                          .then((value) => {
                            window.location.href = "index.html"
                          })
                      })
                  .catch(err => {
                    if (err.message === "Password should be at least 6 characters") {
                      swal("Erro", "Sua senha precisa ser maior que 6 caracteres", "error");
                    }else if (err.message === 'The email address is already in use by another account.') {
                      swal("Erro", "Este email ja foi cadastrado", "error");
                    }
                  })


  }


  function registrar_ong(){
    const value_email = document.querySelector('#signup-email').value
    const value_senha = document.querySelector('#signup-password').value
    const value_nome = document.querySelector('#signup-nome').value
    const value_telefone = document.querySelector('#signup-telefone').value
    const value_cep = document.querySelector('#signup-cep').value
    const value_rua = document.querySelector('#signup-rua').value
    const value_estado = document.querySelector('#signup-estado').value
    const value_cnpj = document.querySelector('#signup-cnpj').value

    let data = {
      email: value_email,
      nome: value_nome,
      telefone: value_telefone,
      cep: value_cep,
      rua: value_rua,
      estado: value_estado,
      cpf: value_cnpj
    }


    firebase.auth()
                .createUserWithEmailAndPassword(value_email, value_senha)
                .then(userCredential => {
                      console.log('sign-up')
                      var user = userCredential.user;

                      // options para o fetch
                      options = {
                          method: 'POST',
                          mode: 'cors',
                          body: JSON.stringify(data), // passando os dados da lista para o POST
                          headers: {"Content-Type": "application/json"}
                      }

                       fetch(url_to_fetch, options)
                        .then( response => response.json())
                        .then(json => console.log(json))
                        .catch(err => console.log(err))

                      // mensagem de sucesso
                      swal("Sucesso", "Seu cadastro foi efetuado com sucesso", "success")
                      .then((value) => {
                        window.location.href = "index.html"
                      })
                  })
              .catch(err => {
                if (err.message === "Password should be at least 6 characters") {
                  swal("Erro", "Sua senha precisa ser maior que 6 caracteres", "error");
                }else if (err.message === 'The email address is already in use by another account.') {
                  swal("Erro", "Este email ja foi cadastrado", "error");
                }
              })


}


function buscaCEP(){
  cep = document.getElementById('signup-cep').value

  url_to_cep =  `https://viacep.com.br/ws/${cep}/json/`
  const options =  {
    method: 'GET',
    mode: 'cors'
  }

  fetch(url_to_cep,options)
      .then(async (response) => {
        var viacep_response = await response.json()
          console.log(viacep_response)
        console.log(viacep_response.logradouro);
        document.getElementById('signup-rua').value = viacep_response.logradouro
        document.getElementById('signup-estado').value = viacep_response.uf

        
      })
}


function selectType(){
  selection = document.getElementById('selection').value
  if(selection === 'ong'){
    window.location.href = "register-ong.html"
  } else {
    window.location.href = "register-doador.html"

  }
}