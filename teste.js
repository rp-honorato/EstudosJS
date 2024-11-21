const URL = "https://reqres.in/api/users/";

fetch(URL, {
    //método
    method: "POST", 
    //Cabeçalho JSON
    headers: {
    "Content-Type": 'application/JSON'
    },
    body: JSON.stringify({
        name: "Pedro",
        age: "26"
    })
})
.then(response => response.json())//Converte a resposta da requisição para JSON
.then(data => {
console.log(data) //Exibe os Dados
    })
.catch(error => {
console.log(error, "Erro!") //Exibe erros
});