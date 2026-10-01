const formulario =document.getElementById("formulario");

const nome =document.getElementById("nome");
const peso =document.getElementById("peso");
const altura =document.getElementById("altura");


const nomeResultado =document.getElementById("nomeResultado")
const pesoResultado =document.getElementById("pesoResultado")
const alturaResultado =document.getElementById("alturaResultado")
const boxResultado =document.getElementById("imcResultado")
const classificacao =document.getElementById("classificacao")
const resultado =document.getElementById("resultado")


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const valorNome = nome.value;
    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);

    const imc = valorPeso / (valorAltura * valorAltura);

    let resultadoimc

    if (imc < 18.5) {
        resultadoimc = "Abaixo do peso";
    } else if (imc < 25){
        resultadoimc = "peso normal";
        
    } else if (imc < 30){
        resultadoimc = "sobre peso";
    } else {
        resultadoimc = "Obesidade";
    }


    nomeResultado.textContent = valorNome
    pesoResultado.textContent = valorPeso
    alturaResultado.textContent= valorAltura
    boxResultado.textContent = imc.toFixed(2)
    classificacao.textContent = resultadoimc

    resultado.style.display = "block"

    
    
    





})