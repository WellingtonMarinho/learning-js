let campoFiltro = document.querySelector('#filtrar-tabela')


campoFiltro.addEventListener('input', function(){
    let pacientes = document.querySelectorAll('.paciente')
    if (this.value.length > 0){
      console.log(this.value, this.value.length)
      console.log('Entrou no if e consequentemente no forEach')
        pacientes.forEach(function(paciente){
            pacienteNome = paciente.querySelector('.info-nome').textContent
            let nomeRegex = new RegExp(campoFiltro.value, "i")
            if (!nomeRegex.test(pacienteNome)){
                paciente.classList.add('invisivel')
            }else{
              paciente.classList.remove('invisivel')
            }
        })
    }else{
          pacientes.forEach(function(paciente){
          paciente.classList.remove('invisivel')
        })
    }
})
