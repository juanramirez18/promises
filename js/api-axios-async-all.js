// const axios = require('axios');
// const url_1 = "https://rickandmortyapi.com/api/character";
// const url_2 = "https://rickandmortyapi.com/api/location";
// const url_3 = "https://rickandmortyapi.com/api/episode";

// const apiCall = async (url1,url2,url3) => {
//     const pt1 = await axios.get(url1);
//     const pt2 = await axios.get(url2);
//     const pt3 = await axios.get(url3);
//     Promise.all([pt1,pt2,pt3]).then(response => {
//         response.forEach(res => {
//             const {data} = res;
//             console.log("mostrando respuesta del api", data);
//         })
//     })
//     .catch(error => {
//         console.log("Mostrando error", error)
//     })
// }

// apiCall(url_1, url_2, url_3)

//then-catch homework

document.addEventListener("DOMContentLoaded", ()=> {
    const url_1 = "https://rickandmortyapi.com/api/character";
    const url_2 = "https://rickandmortyapi.com/api/location";
    const url_3 = "https://rickandmortyapi.com/api/episode";


     fetch(url_1).then(respuesta => respuesta.json()).then(datos => mostraResultado(datos)).catch(error => console.log(error))

})

function mostraResultado(datos){
    const {results} = datos
    results.forEach(element => {
        mostrarHTML(element)
    });
}

function mostrarHTML(element){
    const {name, episode, image} = element
    const resultado = document.querySelector("#resultado");
    const divResultado = document.createElement("DIV")

    divResultado.innerHTML = `<p class="font-bold">Nombre: ${name}</p> Episodio: ${episode[0]} <img class="w-full" src="${image}">`;
    resultado.appendChild(divResultado);
    
}
