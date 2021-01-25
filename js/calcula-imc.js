var titulo = document.querySelector(".titulo")
titulo.textContent = 'Wellington Aprendendo JS'


function percoreListaDePacientes(){
  var pacientes = document.querySelectorAll('.paciente')

  for (var i = 0; i < pacientes.length; i++){
    let peso = pacientes[i].querySelector('.info-peso').textContent
    let altura = pacientes[i].querySelector('.info-altura').textContent

  //  calculaIMC(peso, altura, pacientes[i])
  setaIMC(peso, altura, pacientes[i])
  }
}

function verificaPeso(arg, paciente){
  if (arg <= 0 || arg >= 300) {
    console.log('Peso inválido!')
    return false
  }
  return true
}


function verificaAltura(arg, paciente){
    if (arg < 0.50 || arg >= 3.00){
      console.log('Altura inválida')
      return false
    }
    return true
}


function setaIMC(peso, altura, paciente){
    if (!verificaPeso(peso)){
        paciente.querySelector('.info-imc').textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
    }
    else if (!verificaAltura(altura)){
        paciente.querySelector('.info-imc').textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido')
    }else{
        calculaIMC(peso, altura, paciente)
    }
}


function calculaIMC(peso, altura, paciente){
      let imc = peso / (altura * altura)
      return paciente.querySelector('.info-imc').textContent = imc.toFixed(2)
    console.log('Valor de peso ou altura inválido.')
}


function calculaIMCSemValidar(peso, altura){
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}

percoreListaDePacientes()
