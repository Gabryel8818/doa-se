async function loadIntoTable(url, table) {
  const options =  {
      method: 'GET',
      mode: 'cors'
    }
  
  const response = await fetch(url,options);
  const data = await response.json()
  data.forEach(ong => {
    document.querySelector("table").innerHTML += `
      <tbody>
          <tr id="${ong.id_ong}">
              <td>${ong.id_ong}</td>  
              <td >${ong.nome}</td>
              <td>${ong.telefone}</td>
              <td>${ong.cep}</td>
              <td>${ong.logradouro}</td>
              <td>${ong.cnpj}</td>
          </tr>
      </tbody>
          
    
    `

  });


  
}



loadIntoTable("https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/ong", document.querySelector("table"));
