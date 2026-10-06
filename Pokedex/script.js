let pokemons = [];

const listaPokemons = document.getElementById("listaPokemons");
const campoBusca = document.getElementById("campoBusca");
const botoesTipo = document.querySelectorAll(".tipo");

function buscarPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")

    .then(resposta => resposta.json())
    .then(dados => {

        const lista = dados.results;
        console.log(lista);

        const consultas = lista.map(pokemon => {
            return fetch(pokemon.url)
            .then(resposta => resposta.json())

        })


        Promise.all(consultas)
        .then(resultados => {
            pokemons = resultados

            mostrarPokemons(pokemons);
        })
        
        
    })
}

function mostrarPokemons(lista) {
    listaPokemons.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        <img src="${p.sprites.front_default}" alt="" srcset="">
          <h3>${p.name}</h3>
        <p>${p.id}</p>
        <p>${p.types[0].type.name}</p>

        `;
        listaPokemons.appendChild(card);
    });


}


botoesTipo.forEach(b =>{
    b.addEventListener("click", function(){

     const tipoSelecionado = b.dataset.tipo;
     if (tipoSelecionado == "todos") {
        mostrarPokemons(pokemons);
        return;
     }   

     const resultado = pokemons.filter(p => {
        return p.types.some(tipo =>{
            return tipo.type.name == tipoSelecionado;
        })
     })

     mostrarPokemons(resultado)
    })

})


campoBusca.addEventListener("input", function(){
    const texto = campoBusca.value.toLowerCase();

    const resultado = pokemons.filter(p => {
        return p.name.includes(texto);
    });

    mostrarPokemons(resultado);
})





buscarPokemons()