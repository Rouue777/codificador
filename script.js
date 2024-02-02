//selecionar elementos
let inputTexto = document.querySelector(".inputTexto")
let outputTexto = document.querySelector("#output")

//variaveis chaves criptografai
let chaveA = "ai";
let chaveE = "enter";
let chaveI = "imes";
let chaveO = "ober";
let chaveU = "ufat";

//function para criptografacao
function criptografar(){
    let texto = inputTexto.value;

    let resultadoCriptografia = texto.replace(/e/g, chaveE).replace(/i/g, chaveI).replace(/a/g, chaveA)
    .replace(/o/g, chaveO).replace(/u/g, chaveU);


    document.getElementById("output").innerHTML =" <textarea readonly  id='outputTexto'>" + resultadoCriptografia + "</textarea>" +
 "<button class='btnCopiar' onclick='copiar()'>Copiar</button>" + "<button class='btnCopiar' onclick='limparArea()'>Limpar</button>"

console.log('fala trem')
};

//function para descriptografar
function descriptografar(){
    let texto2 = inputTexto.value

    let resultadoDescriptografia = texto2.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = " <textarea readonly id='outputTexto'>" + resultadoDescriptografia + "</textarea>" +
    "<button class='btnCopiar' onclick='copiar()'>Copiar</button>" + "<button class='btnCopiar' onclick='limparArea()'>Limpar</button>"
};


//function para o botao copiar
function copiar(){
    let textCopiado = document.querySelector('#outputTexto');

    textCopiado.select();
    document.execCommand('copy')
  

}

//botão limpar o tex area
function limparArea() {
    let textArea2 = document.querySelector('#entradaTexto');
    textArea2.value = '';
  

    let textArea1 = document.querySelector('#outputTexto');
    textArea1.textContent = '';


  
    console.log('limpou boião')
    
}


