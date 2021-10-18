
async function loadIntoTable(url, table) {

    const response = await fetch(url);
    const data = await response.json()
    data.forEach(doacao => {
      console.log(doacao)
      document.querySelector("table").innerHTML = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>categoria</th>
                <th>ong</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${doacao.nome}</td>
                <td>${doacao.categoria}</td>
                <td>${doacao.ong}</td>
            </tr>
        </tbody>
            
      
      `
    });
    
}



loadIntoTable("http://ec2-52-67-195-32.sa-east-1.compute.amazonaws.com:8086/doacao", document.querySelector("table"));
