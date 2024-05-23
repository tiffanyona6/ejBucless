// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countDown = (number) => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};
countDown(4);

//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const additionAllNumbers = (numbers) => {
  let total = 0;
  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter];
  }
  console.log(total);
};
additionAllNumbers([10, 25, 50, 22, 1, 5, 87, 3, 9, 24]);

//Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser

function multiplicationTable(number1) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number1} * ${i} = ${number1 * i}`);
  }
}
multiplicationTable(4);

// Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser

function multiplicationTableReverse(number) {
  for (let i = 10; i >= 0; i--) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
multiplicationTableReverse(4);

//Crea una función que reciba el año actual y tu edad, la función debe imprimir:
//- "naciste en el año X" - "En el año X cumpliste 1 año"- "En el año X cumpliste 2 años"- "En el año X cumpliste 3 años"

function getNumbers(year, age) {
  for (let counter = 0; counter < 10; counter++) {}
  console.log(`naciste en el año ${year - age}`);
  console.log(`En el año ${year - age + 1} cumpliste 1 año`);
  console.log(`En el año ${year - age + 2} cumpliste 2 año`);
  console.log(`En el año ${year - age + 3} cumpliste 3 año`);
}
getNumbers(2024, 25);

//Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const getPairNumbers = (number1, number2) => {
  for (let counter = number1; counter <= number2; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};
getPairNumbers(2, 12);

//Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const repeatNumbersInArray = () => {
  const arrayA = [];
  const arrayB = [];
  for (let counter = 0; counter < 5; counter++) {
    const randomNumberA = Math.floor(Math.random() * 11);
    arrayA.push(randomNumberA);

    const randomNumberB = Math.floor(Math.random() * 11);
    arrayB.push(randomNumberB);
  }

  for (let counter = 0; counter < arrayA.length; counter++)
    if (arrayA.includes(arrayB[counter])) {
      console.log(`El número ${arrayB[counter]} se repite`);
    }
  console.log(arrayA, arrayB);
};
repeatNumbersInArray();

// Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

const isPrime = (number) => {
  if (number <= 1 || number % 2 === 0) {
    console.log(`El número ${number} no es primo`);
    return;
  }
  for (let counter = 2; counter < number; counter++) {
    if (number % counter === 0) {
      console.log(` El número ${number} no es primo`);
      return;
    }
  }
  console.log(`El número ${number} si es primo`);
};

isPrime(10);

//Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//"Número: 2 - Cuadrado: 4 - Cubo: 8".
//Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const numberSquareCube = (numbers) => {
  for (let counter = 0; counter < 10; counter++) {
    const numberCube = Math.pow(numbers[counter], 3);
    const numberSquare = Math.pow(numbers[counter], 2);

    console.log(
      `Número: ${numbers[counter]} - Cuadrado: ${numberSquare} - Cubo: ${numberCube}`
    );
  }
};
numberSquareCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const upperCase = (word) => {
  const word = "palabra";
  let wordUpper = "";

  for (const letter of word) {
    wordUpper = wordUpper + letter.toUpperCase();
    console.log(wordUpper);

    if (["a", "e", "i", "o", "u"].includes(letter)) {
    }
  }
};
upperCase();
