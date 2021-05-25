let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  note: 'Namorada do personagem principal dos quadrinhos do pato Donald'
}

//console.log('Boas vinsdas ' + info.personagem + '!');

info['recorrente'] = 'Sim';

//console.log(info);

for (let key in info) {
  //console.log(key);
}

for (let key in info) {
  console.log(info[key]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  note: 'O último MacPatinhas',
  recorrente: 'Não'
}

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.note + ' e ' + info2.note);

if (info.recorrente == 'Sim' && info2.recorrente == 'Sim') {
  console.log('Ambos são recorrentes');
} else {
  if (info.recorrente == 'Sim') {
    console.log(info.personagem + ' é recorrente');
  } else if (info2.recorrente == 'Sim') {
    console.log(info2.personagem + ' é recorrente');
  } else {
    console.log('Nenhum é recorrente');
  }
}

