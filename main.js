// Solicita ao usuário dois números
const firstNumberInput = prompt("Digite o primeiro número:");
const secondNumberInput = prompt("Digite o segundo número:");

// Converte as entradas de texto para números
const firstNumber = parseFloat(firstNumberInput);
const secondNumber = parseFloat(secondNumberInput);

// Realiza operações matemáticas
const sum = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const remainder = firstNumber % secondNumber;

// Exibe os resultados das operações matemáticas
alert(`Soma: ${sum}`);
alert(`Subtração: ${subtraction}`);
alert(`Multiplicação: ${multiplication}`);
alert(`Divisão: ${division}`);
alert(`Resto da divisão: ${remainder}`);

// Verifica se a soma dos dois números é par
const isSumEven = sum % 2 === 0;
alert(`A soma dos dois números é ${isSumEven ? 'par' : 'ímpar'}.`);

// Verifica se os dois números inseridos são iguais
const areNumbersEqual = firstNumber === secondNumber;
alert(`Os dois números são ${areNumbersEqual ? 'iguais' : 'diferentes'}.`);
