var titulo = document.querySelector(".titulo")
titulo.textContent = 'Wellington Aprendendo JS'

var pacientes = document.querySelectorAll('.paciente')

function percoreListaDePacientes(pacientes){
  for (var i = 0; i < pacientes.length; i++){
    let peso = pacientes[i].querySelector('.info-peso').textContent
    let altura = pacientes[i].querySelector('.info-altura').textContent

    calculaIMC(peso, altura, pacientes[i])
  }
}

function verificaPeso(arg, paciente) {
  if (arg <= 0 || arg >= 300) {
    console.log('Peso inválido!')
    paciente.querySelector('.info-imc').textContent = 'Peso inválido!'
    paciente.classList.add('paciente-invalido')
    return false
  }
  return true
}

function verificaAltura(arg, paciente) {
    if (arg < 0.50 || arg >= 3.00){
      console.log('Altura inválida')
      paciente.querySelector('.info-imc').textContent = 'Altura inválida!'
      paciente.classList.add('paciente-invalido')
      return false
    }
    return true
}

function calculaIMC(peso, altura, paciente) {
    if (verificaPeso(peso, paciente) && verificaAltura(altura, paciente)){
      let imc = peso / (altura * altura)
      return paciente.querySelector('.info-imc').textContent = imc.toFixed(2)
    }
    console.log('Valor de peso ou altura inválido.')
}

percoreListaDePacientes(pacientes)

function calculaIMCSemValidar(peso, altura) {
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}


//teste
