let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// -1
/* for (let elements of numbers) {
  console.log(elements);
} */

// -2
      /*
        código referência: https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981

      */
/* let sum = 0

for (let i = 0 ; i < numbers.length ; i++) {
  sum += numbers[i]
}

console.log(sum); */

// -3

/* let media = 0

for (let x = 0 ; x < numbers.length ; x++) {
  media += numbers[x]
}

console.log('Média aritimética: ' + (media / numbers.length)); */

// -4

/* let media = 0
let mediaAritimetica;

for (let x = 0 ; x < numbers.length ; x++) {
  media += numbers[x]
}

mediaAritimetica = media / numbers.length;

if (mediaAritimetica <= 20) {
  console.log('Valor menor ou igual a 20');
} else {
  console.log('Valor maior que 20');
} */

// -5
/* let maior = 0

for (let i = 0 ; i < numbers.length ; i++) {
  if ( maior < numbers[i]) {
    maior = numbers[i];
  }
}

console.log(maior) */

// -6
/* let impar = 0;

for (let i = 0 ; i < numbers.length ; i++) {
  if (numbers[i] % 2 == 1) {
    impar++;
  }
}

if (impar > 0) {
  console.log('Possui ' + impar + ' números impares');
} else {
  console.log('Não possui números ímpares')
} */

// -7
/* let menor = numbers[0];

for (let i = 0 ; i < numbers.length ; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor); */

// -8, 9
let numbers2 = [];

for (let i = 0 ; i < 26 ; i++) {
  numbers2.push(i);
}

let diferenca;
//console.log(numbers2);
for (let div of numbers2) {
  diferenca = div / 2;
  console.log(div + ' / ' + '2 = ' + diferenca);
}
