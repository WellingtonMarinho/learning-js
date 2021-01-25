let campoFiltro = document.querySelector('#filtrar-tabela')


campoFiltro.addEventListener('input', function(){
    let pacientes = document.querySelectorAll('.paciente')
    if (this.value.length > 0){
        pacientes.forEach(function(paciente){
            pacienteNome = paciente.querySelector('.info-nome').textContent

            if (pacienteNome != campoFiltro.value){
                paciente.classList.add('invisivel')
            }else{
              paciente.classList.remove('invisivel')
            }
        })
    })
}
