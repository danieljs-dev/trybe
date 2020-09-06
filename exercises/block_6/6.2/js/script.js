window.onload = function() {
  // Opções dos estados no select
  let state = document.querySelector('#state');

  function stateValues() {
    let arrayStates = [
      ["Acre"],
      ["Alagoas"],
      ["Amapá"],
      ["Amazonas"],
      ["Bahia"],
      ["Ceará"],
      ["Distrito Federal"],
      ["Espírito Santo"],
      ["Goiás"],
      ["Maranhão"],
      ["Mato Grosso"],
      ["Mato Grosso do Sul"],
      ["Minas Gerais"],
      ["Pará"],
      ["Paraíba"],
      ["Paraná"],
      ["Pernambuco"],
      ["Piauí"],
      ["Rio de Janeiro"],
      ["Rio Grande do Norte"],
      ["Rio Grande do Sul"],
      ["Rondônia"],
      ["Roraima"],
      ["Santa Catarina"],
      ["São Paulo"],
      ["Sergipe"],
      ["Tocantins"]
    ];

    for (let index = 0; index < arrayStates.length; index += 1) {
      let option = document.createElement('option');
      state.appendChild(option);
      state.lastChild.innerHTML = arrayStates[index];
    }
  }
  stateValues();


  // Biblioteca Data 
  document.getElementById('date').DatePickerX.init();

  // Biblioteca validação de formulário
  new JustValidate('.js-form', {
    rules: {
      email: {
        required: true,
        email: true
      },
      cpf: {
        required: true,
        custom: '/(\d{3})(\d{3})(\d{3})(\d{2}'
      },

    },
  
    messages: {
      email: {
        required: 'Campo obrigatório',
        email: 'Formato do email inválido'
      },
      cpf: {
        required: 'Campo obrigatório',
      }
    },
  
    submitHandler: function (form, values) {
      console.log(form, values);
    },
  });




/*
  function formataCPF(cpf) {
    const elementoAlvo = cpf;
    const cpfAtual = cpf.value;
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
      return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = cpfAtualizado; 
    }  
*/

}
