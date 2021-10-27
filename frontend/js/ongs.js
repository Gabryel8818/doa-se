var url_to_ongs = "http://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/ong"

async function list_ongs() {
    const options =  {
        method: 'GET',
        mode: 'cors'
      }
    
    const response = await fetch(url_to_ongs,options);
    const data = await response.json()
    console.log(document.getElementById(ongs))
}

list_ongs()