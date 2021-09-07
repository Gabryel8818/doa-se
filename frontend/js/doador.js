function getDoador(){

  var URL_TO_FETCH = 'http://ec2-18-231-54-129.sa-east-1.compute.amazonaws.com:8086/doador'
  const options = {
    method: 'GET'
  }

  fetch(URL_TO_FETCH, options)
    .then((response => {
      console.log(response.json())

    }))

}
