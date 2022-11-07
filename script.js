function start() {
  var buttonCalcular = document.querySelector('#calcular');
  buttonCalcular.addEventListener('click', calculadora);
}

function calculo(numeroA, operacao, numeroB) {
  if (operacao == 'Adição') {
    return numeroA + numeroB;
  }
  if (operacao == 'Subtração') {
    return numeroA - numeroB;
  }
  if (operacao == 'Multiplicação') {
    return numeroA * numeroB;
  }
  if (operacao == 'Divisão') {
    return numeroA / numeroB;
  }
}

function calculadora() {
  var inputNumeroA = document.querySelector('#numeroA');
  var inputOperacao = document.querySelector('#operacao');
  var inputNumeroB = document.querySelector('#numeroB');
  var resultadoCalculo = document.querySelector('#resultado');

  var numeroA = Number(inputNumeroA.value);
  var operacao = inputOperacao.value;
  var numeroB = Number(inputNumeroB.value);

  var calc = calculo(numeroA, operacao, numeroB);
  resultadoCalculo.textContent = calc;
}
start();
