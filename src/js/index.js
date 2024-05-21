// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countDown = (number) =>{

for (let counter = number; counter >=0; counter--) {
    console.log(counter)
    
}
}
countDown(4);

//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const additionAllNumbers = numbers =>{
    let total = 0;
    for (let counter = 0; counter < numbers.length; counter++){
    
        total = total + numbers [counter];
        
    }
    console.log(total)
};
additionAllNumbers([10, 25, 50, 22, 1, 5, 87, 3, 9, 24]);


//Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser

function multiplicationTable(number1){
    for (let i = 0; i <= 10; i++) {
        console.log ( `${number1} * ${i} = ${number1 * i}`);
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
    for (let counter = 0; counter < 10; counter++) {
    
    }
      console.log(`naciste en el año ${year - age}`)
      console.log(`En el año ${year - age + 1 } cumpliste 1 año`)
      console.log(`En el año ${year - age + 2} cumpliste 2 año`)
      console.log(`En el año ${year - age + 3} cumpliste 3 año`)
    
  }
  getNumbers (2024, 25)

  //Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

  const getPairNumbers = (number1, number2)=> {
    for (let counter = number1; counter <= number2; counter++) {
        if(counter %2===0){
            console.log(counter);
        }
    }
    }
    getPairNumbers(2,12)
