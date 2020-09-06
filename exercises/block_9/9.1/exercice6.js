/* Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar 
muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as 
ações a serem tomadas em caso de falha. */
​
const messageDelay = () => Math.floor(Math.random() * 5000);
​
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
// passa dois parametros para o callback, uma para caso for verdadeiro e outro para caso seja negativo
const sendMarsTemperature = (sucess, error) => {

  //puxa em uma const o sedMarsTemperature
  const temperatureMultmax = getMarsTemperature();

  // fazendo um if dentro de umas const para ver se é verdadeiro ou falso 
  // rando gera um numero qualquer entre 0 e 1 e se for maior que 0,6 é verdadeiro
  const testIf = Math.random() <= 0.6;
​
  // entra o setTimeOut para rodar no tempo que eu pedi assincronamente 
  setTimeout(() => {
  // se o testIf for verdadeiro o callback sucess roda, mandando para função que ela tem o parametro que esta dentro de sucess
  if (testIf) sucess(temperatureMultmax)
  //caso contrario retorna o callback error, ele roda mandando para função que erro recebeu como calbacl o parametro robot is busy
  else error(`Robot is busy`);
  }, messageDelay());
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature (callback1(sucess), calback2 (sucess))
// os callback são funções que eu mando e ele por si só já entende que quando chamo por elas mesmoo renomeadas com outro nome
// os callbacks são assincronos, funções que roda em background.
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);