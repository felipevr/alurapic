//console.log("Olá Mundo!");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var nome = paciente.querySelector(".info-nome").textContent;

    var peso = tdPeso.textContent;

    var altura = paciente.querySelector(".info-altura").textContent;
    var gordura = paciente.querySelector(".info-gordura").textContent;

    var msg = document.querySelector('#mensagens');

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        msg.innerHTML = '<p><strong>Peso do ' + nome + ' inválido</strong></p>';
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        //paciente.style.color = "red";
        //paciente.style.backgroundColor = "orange";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        msg.innerHTML += '<p><strong>Altura do ' + nome + ' inválida</strong></p>';console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        //paciente.style.backgroundColor = "orange";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

