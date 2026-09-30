// pegar os elementos no html
const formulario =document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

const nomeResultado = document.getElementById("nomeResultado") 
const dataResultado = document.getElementById("dataResultado") 
const idadeResultado = document.getElementById("idadeResultado") 
const boxResultado = document.getElementById("resultado")

formulario.addEventListener("submit", function(event){
    event.preventDefault();// impede que ela recarregue

    //pegar o valor dos inputs
    const valorNome = nome.value;
    const valorNascimento = nascimento.value;

    // console.log(valorNome);
    // console.log(valorNascimento);

    //Separa a data em três valores 
    const dataSeparada = valorNascimento.split("-");

    // console.log(dataSeparada);

    //Armazenar as datas separadas em formato numerico
    const anoNascimento = Number(dataSeparada[0]);
    const mesNascimento = Number(dataSeparada[1]);
    const diaNascimento = Number(dataSeparada[2]);

    //Pega a data de hoje no sistema 
    const hoje = new Date();

    const anoAtual = hoje.getFullYear();//Pega somente o ano
    const mesAtual = hoje.getMonth()+1;//Pega somente o mes
    const diaAtual = hoje.getDate();//Pega somente o dia

    // console.log(hoje);
    // console.log(anoAtual);
    // console.log(mesAtual);
    // console.log(diaAtual);
    
    let idade = anoAtual  - anoNascimento // calcula a idade utilizando o ano
    // console.log(idade);
    
    if (mesNascimento > mesAtual) {// verifica se o mes de nascimento é maior que o mes atual
        idade = idade -1;// pega a idade e subtrai
    }

    if (mesNascimento == mesAtual) { //Verifica se o mes de nascimento é IGUAL ao mes atual
        if (diaNascimento > diaAtual) {//Verificasse o dia do nascimento é maior que o dia atual
            idade = idade -1;//pega a idade e subtrai 1
            
        }
    }
    //    console.log(idade);

    // if (mesNascimento > mesAtual || (mesNascimento == mesAtual && diaNascimento > diaAtual)) {
    //     idade = idade -1;
    // }   
    //
    const dataFormatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

   
    //inserindo o valores nos elementos HTML
    nomeResultado.textContent = valorNome;
    dataResultado.textContent = dataFormatada;
    idadeResultado.textContent = idade;

    //Exibindo o elemento com as informações
    boxResultado.style.display = "block";



})
