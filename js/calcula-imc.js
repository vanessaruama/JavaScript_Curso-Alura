var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido")
        pesoValido = false;
        tdPeso.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValido){
        console.log("Altura inválido")
        alturaValido = false;
        tdAltura.textContent = "Altura Inválido"
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValido){

        var tdImc = paciente.querySelector(".info-imc");
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>> 25

    return imc.toFixed(2)
}