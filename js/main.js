let pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {
    let peso = pacientes[i].querySelector('.info-peso').textContent
    let altura = pacientes[i].querySelector('.info-altura').textContent
    calculaIMC(peso, altura, pacientes[i])
}



function validaPeso(arg, paciente) {
  if (arg <= 0 || arg >= 300){
    console.log('Peso inválido!')
    paciente.querySelector('.info-imc').textContent = 'Peso inválido'
    paciente.style.backgroundColor = 'orange'
    return false
  }
  return true
}


function validaAltura(arg, paciente) {
  if (arg < 0.50 || arg > 3.00){
    console.log('Altura inválida!')
    paciente.querySelector('.info-imc').textContent = 'Altura inválida!'
    paciente.classList.add('paciente-invalido')
    return false
  }
  return true
}


function calculaIMC(peso, altura, paciente) {
  if (validaPeso(peso, paciente) && validaAltura(altura, paciente)) {

      let imc = peso / (altura * altura)
      return paciente.querySelector('.info-imc').textContent = imc.toFixed(2)
  }
  console.log('Altura ou peso inválidos.')
}
