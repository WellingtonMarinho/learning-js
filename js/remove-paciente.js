let tabela = document.querySelector('table')
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function(){
      event.target.parentNode.remove()
    }, 500)
})


// function escutaDblClickParaRemoverPaciente(){
//     pacientes.forEach(function (paciente){
//         paciente.addEventListener('dblclick', function(){
//             this.remove()
//       })
//   })
// }
