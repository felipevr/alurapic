//console.log("Olá Mundo!");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");

var nome = paciente.querySelector(".info-nome").textContent;

var peso = tdPeso.textContent;

var altura = paciente.querySelector(".info-altura").textContent;
var gordura = paciente.querySelector(".info-gordura").textContent;

var msg = document.querySelector('#mensagens');

var invalido = false;

if (peso < 1 || peso >= 500) {
    msg.innerHTML = '<p><strong>Peso do ' + nome + ' inválido</strong></p>';
    invalido = true;
    //alert('Peso inválido');
    //return;
}

if (altura < 0.1 || altura >= 3) {
    msg.innerHTML += '<p><strong>Altura do ' + nome + ' inválida</strong></p>';
    invalido = true;
    //alert('Peso inválido');
    //return;
}

if (!invalido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

/*
console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(gordura);
*/
