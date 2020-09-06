window.onload = function() {

  const form = document.querySelector('#form');
  const inputDate = document.querySelector('#date');
  const message = document.querySelector('#message');

  function validateNumbers(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
      if (parseInt(numbers[index]) )
    }
  }

}

/*
const form = document.querySelector('#formExample');
const inputNumbers = document.querySelector('#inputNumbers');
const message = document.querySelector('#message');

  function validateNumbers(numbers) {
      for (let i=0;  i < numbers.length; i+=1) {
          if (parseInt(numbers[i]) % 2 !== 0) {
              return false;
          }
      }
      
      return true;
  }

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      message.innerHTML = '';

      let value  = inputNumbers.value;

      let numbers = value.split(',');

      if (validateNumbers(numbers)) {
          message.innerHTML = 'Campo válido (tem apenas números pares)';
      } else {
          message.innerHTML = 'Campo inválido (tem apenas números ímpares)';
      }  
  });
*/