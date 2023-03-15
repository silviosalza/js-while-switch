//ciclo while (condizione)

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

//equivalente a

// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }




//crea 10 elementi (tra 1 a 100) con numeri random, diversi tra loro


const numbers = [];


//genero numero random 
const rndNumber = Math.floor(Math.random() * 100) + 1;

// Se il numero non è presente nell'array pusho il numero nell'array

while (numbers.length < 10 ){

    const rndNumber = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(rndNumber)){
        numbers.push(rndNumber);
    }

}

console.log(numbers)



let userNumber;

do{
    userNumber = parseInt(prompt("dimmi un numero"))
} while (isNaN(userNumber))

console.log(userNumber)