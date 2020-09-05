let salBruto = 3500,
    inss,
    ir;

if (salBruto <= 1556.94) {
  inss = salBruto * 0.08;
} else if (salBruto <= 2594.92 ) {
  inss = salBruto * 0.09;
} else if (salBruto <= 5189.82 ) {
  inss = salBruto * 0.11;
} else {
  inss = 570.88;
}

let salBase = salBruto - inss;

if (salBase <= 1903.98) {
  ir = 0;
} else if (salBase <= 2826.65) {
  ir = (salBase * 0.075) - 142.80; 
} else if (salBase <= 3751.05) {
  ir = (salBase * 0.15) - 354.80; 
} else if (salBase <= 4664.68) {
  ir = (salBase * 0.225) - 636.13; 
} else {
  ir = (salBase * 0.275) - 869.36; 
}

let salLiquido = salBase - ir;

let descTrybe = salLiquido * 0.17;

let salFinal = salLiquido - descTrybe;

console.log('Seu salário com o desconto do INSS é ' + salBase);
console.log('Seu salário com os descontos do INSS e IR é ' + salLiquido);
console.log('Seu salário com os descontos do INSS, IR e os 17% da Trybe é ' + salFinal.toFixed(2)); // Math.round(salFinal)



















/*
let aliquotINSS,
    aliquotIR;

let grossSalary = 3500.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.99) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
}

let netSalary = baseSalary - aliquotIR;

console.log('Salário líquido é ' + netSalary);
*/