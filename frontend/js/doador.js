const url_to_fetch = "https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doador"
const email = document.querySelector('#signin-email').value
const senha = document.querySelector('#signin-password').value



// fetch(url_to_fetch,options)
//     .then(function(response){
//         response.json().then(function(data) {
//             var arr = console.log(data)
//             var count = Object.keys(arr).length
//             console.log(count)
//           });
//         }).catch(function(err) {
//           console.error('Failed retrieving information', err);
//         });
