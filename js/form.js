
let botaoAdicionar = document.querySelector('#adicionar-paciente')


botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    let form = document.querySelector('#form-adicionar')

    let paciente = obtemDadosDoFormulario(form)
    console.log(paciente)

    let pacienteTr = montaTr(paciente)

    let error = validaPaciente(paciente)
    if(error.length > 0){
      document.querySelector('#mensagem-erro').textContent = error
      return
    }


    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
    form.reset()
})


function obtemDadosDoFormulario(form){
    let paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaIMCSemValidar(form.peso.value, form.altura.value),
    }
  return paciente
}

function montaTr(paciente){
  let pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
  return pacienteTr
}

function montaTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    let erros  = []
    if(!verificaPeso(paciente.peso)){
        erros.push('Peso inválido!')
    }
    else if (!verificaAltura(paciente.altura)){
        erros.push('Altura inválida!')
    }
    return erros
}



//
