 // const URL = "https://reqres.in/api/users/";

 // fetch(URL, {
    //método
 //     method: "POST", 
    //Cabeçalho JSON
 //     headers: {
 //     "Content-Type": 'application/JSON'
 //     },
 //     body: JSON.stringify({
 //         name: "Pedro",
 //         age: "26"
 //     })
 // })
 // .then(response => response.json())//Converte a resposta da requisição para JSON
// .then(data => {
// console.log(data) //Exibe os Dados
//    })
//.catch(error => {
//console.log(error, "Erro!") //Exibe erros
//});

//Async function
async function getData() {
    const response = await fetch("https://reqres.in/api/users/", {
            method: "POST",
            headers: {
            "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
            name: "Pedro Honorato",
            age: "28"
        })
    })
    console.log(response.headers);

    const data = await response.json();
    console.log('Dados dos usuários: ', data)

}   

getData();