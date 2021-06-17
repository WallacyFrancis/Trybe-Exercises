/* 1 - Programa que imprime numero de asteriscos */

/* let n = 5;
let s = '';
let c = '*';

for (let i = 0 ; i < n ; i++) {
  s = s + c;
}

for (let i = 0 ; i < n ; i++){
  console.log(s)
} */

/* 2 - Piramede de asteriscos */
/* let n = 5;
let c = '*';
let s = '';

for (let i = 0 ; i < n ; i++) {
  s = s + c;
  console.log(s);
} */

/* 3 - Piramede de asteriscos inversa */

/* let n = 7;
let c = '*';
let s = '';

let position = n;


for (let i = 0 ; i < n ; i++) {
  for (let coluna = 0 ; coluna < n ; coluna++) {
    if (coluna < position) {
      s = s + ' ';  
    } else {
      s = s + c;
    }
  }
  console.log(s);
  s = '';
  position -= 1;
} */

/* Piramede com base de asteriscos n */

let n = 9;
let c = '*';
let s = '';

let midle = (n + 1) / 2;
let left = midle;
let right = midle;

let position = n;


for (let i = 0 ; i <= midle ; i++) {
  for (let coluna = 0 ; coluna <= n ; coluna++) {
    if (coluna > left && coluna < right) {
      s = s + c ;  
    } else {
      s = s + ' ';
    }
  }
  console.log(s);
  s = '';
  right += 1;
  left -= 1;
}









