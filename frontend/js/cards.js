
async function loadIntoTable(url, table) {
    const options =  {
        method: 'GET',
        mode: 'cors'
      }
    
    const response = await fetch(url,options);
    const data = await response.json()
    data.forEach(doacao => {
      console.log(status)
      console.log(doacao)
      document.querySelector("table").innerHTML += `
        <tbody>
            <tr id="${doacao.id_doacao}">
                <td>${doacao.id_doacao}</td>  
                <td >${doacao.nome}</td>
                <td>${doacao.categoria}</td>
                <td>${doacao.ong.nome}</td>
                 <td>${doacao.doador.nome}</td>
                 <td><span id="a" class="badge badge-success">Dsisponível</span></td>
                <td> <button id="button-registrar" class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onclick="receber_doacao(${doacao.id_doacao})">Receber</button>
                <button id="button-registrar" class="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2" onclick="deletar_doacao(${doacao.id_doacao})">Deletar</button> </td>
            </tr>
        </tbody>
            
      
      `
 
    });


    
}



loadIntoTable("https://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao", document.querySelector("table"));
