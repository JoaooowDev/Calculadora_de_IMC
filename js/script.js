var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var calcular = document.getElementById('calcular')

var res = document.getElementById('massa')

calcular.addEventListener('click', calculando)

function calculando() {
    if (altura.value && peso.value) {

        var imc = peso.value / ( altura.value * altura.value )

        if (imc.toFixed(1) >= 18.5 && imc.toFixed(1) <= 24.9 ){

            res.innerHTML = `<h2>Seu IMC é ${imc.toFixed(1)}<br>Classificação: Normal</h2>`

        } else if (imc.toFixed(1) >= 20.0 && imc.toFixed(1) <= 29.9 ) {

            res.innerHTML = `<h2>Seu IMC é ${imc.toFixed(1)}<br>Classificação: Sobrepeso</h2>`

        } else if (imc.toFixed(1) >= 30.0 && imc.toFixed(1) <= 39.9 ) {

            res.innerHTML = `<h2>Seu IMC é ${imc.toFixed(1)}<br>Classificação: Obesidade</h2>`

        } else if (imc.toFixed(1) <= 18.4) {

            res.innerHTML = `<h2>Seu IMC é ${imc.toFixed(1)}<br>Classificação: Abaixo do peso</h2>`

        } else {

            res.innerHTML = `<h2>Seu IMC é ${imc.toFixed(1)}<br>Classificação: Obesidade Grave</h2>`

        }

    } else {
        alert('[ERRO] Está faltando informação!')
    }
}