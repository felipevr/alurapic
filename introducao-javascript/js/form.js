
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montarTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montarTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    let keys = Object.keys(paciente);
    for (let i = 0; i < keys.length; i++) {
        campo = keys[i];
        pacienteTr.appendChild(montaTd(campo, paciente));
    }
    
    return pacienteTr;
}

function montaTd(campo, paciente) {
    
    var nomeTd = document.createElement("td");
    nomeTd.textContent = paciente[campo];
    nomeTd.classList.add('info-' + campo);

    return nomeTd;

}