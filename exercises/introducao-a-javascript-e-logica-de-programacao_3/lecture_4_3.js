let queenRow = 4;
let queenColl = 4;

let enemiRow = 7;
let enemiColl = 7;

let atackSucessul = false

/* Verificar quadrante superior direita */
for (let iSupDir = 1 ; iSupDir < 8 ; iSupDir++) {
  let queenPositionRow = queenRow + iSupDir;
  let queenPositionColl = queenColl + iSupDir;

  if ((queenPositionRow > 8) || ( queenPositionColl > 8 )) {
    break;
  }

  if ((queenPositionRow === enemiRow) && (enemiColl === queenPositionRow)) {
    atackSucessul = true;
  }
}

/* Verificar quadrante superior esquerda */
for (let iSupEsq = 1 ; iSupDir < 8 ; iSupEsq++) {
  let queenPositionRow = queenRow + iSupEsq;
  let queenPositionColl = queenColl - iSupEsq;

  if ((queenPositionRow > 8) || ( queenPositionColl > 8 )) {
    break;
  }

  if ((queenPositionRow === enemiRow) && (enemiColl === queenPositionRow)) {
    atackSucessul = true;
  }
}

/* Verificar quadrante inferior esqueda */
for (let iSupEsq = 1 ; iInfEsq < 8 ; iInfEsq++) {
  let queenPositionRow = queenRow - iInfEsq;
  let queenPositionColl = queenColl - iInfEsq;

  if ((queenPositionRow > 8) || ( queenPositionColl > 8 )) {
    break;
  }

  if ((queenPositionRow === enemiRow) && (enemiColl === queenPositionRow)) {
    atackSucessul = true;
  }
}

/* Verificar quadrante inferior direita */
for (let iSupEsq = 1 ; iInfEsq < 8 ; iInfEsq++) {
  let queenPositionRow = queenRow - iInfEsq;
  let queenPositionColl = queenColl + iInfEsq;

  if ((queenPositionRow > 8) || ( queenPositionColl > 8 )) {
    break;
  }

  if ((queenPositionRow === enemiRow) && (enemiColl === queenPositionRow)) {
    atackSucessul = true;
  }
}

console.log(atackSucessul)