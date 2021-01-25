let buscarPacientes = document.querySelector('#buscar-pacientes')

buscarPacientes.addEventListener('click', function(){
    console.log('Buscando pacientes...')
    // http://api-pacientes.herokuapp.com/pacientes
    let xhr =  new XMLHttpRequest();

    xhr.open("GET", 'http://api-pacientes.herokuapp.com/pacientes')
    let erroRequest = document.querySelector('#erro-ajax')

    xhr.addEventListener('load', function(){
        if (xhr.status == 200){
          erroRequest.classList.add('invisivel')
          let response = xhr.responseText
          var pacientes = JSON.parse(response)

          pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
          })
        } else {
              console.log(xhr.status)
              console.log(xhr.responseText)
              let errorRequest = document.querySelector('#erro-ajax')
              errorRequest.classList.remove('invisivel')
        }
    })
    xhr.send()

})
