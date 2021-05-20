/* console.log(" ++ OPERADORES ARITIMÉTICOS ++ ");

let a = 10;
let b = 5;

let soma = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;


console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: "+ div); */

//---------------------
/* console.log(" ++ COMPARADOR DE NÚMEROS ++ ")

let num1 = 20;
let num2 = 40;

if (num1 > num2) {
    console.log("O numero " + num1 + " é maior que " + num2);
} else if (num1 == num2) {
    console.log("O numero " + num1 + " é igual a " + num2);
} else {
    console.log("O numero " + num2 + " é maior que " + num1);
}
 */
//-----------------------
/* console.log(" ++ O MAIOR DE 3 NÚMEROS ++ ");

let n1 = 2;
let n2 = 3;
let n3 = 1;

if (n1 > n2 && n3) {
    console.log("O maior numero é " + n1);
} else if (n2 > n1 && n3) {
    console.log("O maior numero é " + n2);
} else if (n3 > n1 && n2) {
    console.log("O maior numero é " + n3);
} else {
    console.log("Possui números iguais");
} */

// -----------------------
/* console.log(" ++ É TRINAGULO ++ ");

let a1 = 60.0;
let a2 = 60.0;
let a3 = 60.0;

let triangulo = a1 + a2 + a3;

if (triangulo == 180.0) {
    console.log("É um tringulo");
} else {
    console.log("Não é um triangulo");
}

//----------------------------
console.log(" ++ PEÇAS DE XADREZ ++ ")

let peca = null; */

// peca = prompt("Digite o nome de uma peça de xadrez: ");

/* switch (peca.toLowerCase()) {
    case "bispo":
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("Move in L");
        break;
    case "torre":
        console.log("Move in T");
        break;
    case "peao":
        console.log("1 house in front");
        break;
    case "rei":
        console.log("1 house for all sides");
        break;
    case "dama":
        console.log("Move free");
        break;
}
 */
//----------------------------------------

/* console.log(" ++ RESULTADO NOTA EM PERCENTUAL ++");

let nota = prompt("Insira uma nota entre 0 e 100: ");

do {
  nota = prompt("Valor digitado incorreto, digite novamente: ");
} while (nota > 100 && nota < 0);
  


if(nota >= 90) {
  console.log("Sua nota foi A!");
} else if(nota >= 80) {
  console.log("Sua nota foi B!");
} else if(nota >= 70) {
  console.log("Sua nota foi C!");
} else if(nota >= 60) {
  console.log("Sua nota foi D!");
} else if(nota >= 50) {
  console.log("Sua nota foi E!");
} else {
  console.log("Sua nota foi F");
}
 */

//-------------------------------
/* console.log(" ++ PAR OU ÍMPAR ++");

let num1 = 10;
let num2 = 15;
let num3 = 17;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log("TRUE");
} */

//-----------------------------------------

/* console.log(" ++ PAR OU ÍMPAR -- 2 ++");

let num1 = 10;
let num2 = 15;
let num3 = 17;

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
  console.log("TRUE");
} else { 
  console.log("FALSE");
} */

//-----------------------------------
/* console.log(" ++ CALCULO DE VENDA DE PRODUTO ++");

let priceProduct;
let priceSell;

do {
  priceProduct = prompt("Informe o valor do Produto");
  priceSell = prompt("Informe o preço de venda");

  if (priceProduct <= 0 || priceSell <= 0) {
    console.log("Valores digitados incorretos, precisa ser maior que 0")
  }

} while ( priceProduct <= 0 || priceSell <= 0)

let priceTribute =  priceSell / (100 / 20);
let valorLucro = priceSell - priceProduct - priceTribute;
console.log(valorLucro); */

//------------------------------------------------------
console.log(" ++  BASE PARA SALÁRIO ++");

let salario = prompt("Informe o valor do salário: ");
let aliquota;
let result;

if (salario <= 1556.94) {
  aliquota = 8 / 100;
  result = salario - ( salario * aliquota);
} else if (salario > 1556.94 && salario <= 2594.92) {
  aliquota = 9 / 100;
  result = salario - ( salario * aliquota);
} else if (salario > 2594.92 && salario <= 5189.82) {
  aliquota = 11 / 100;
  result = salario - ( salario * aliquota);
} else {
  aliquota = 570.88;
  result = salario - aliquota;
}




