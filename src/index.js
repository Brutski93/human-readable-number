module.exports = function toReadable (number) {
  let a = `${number}`;
  let otvet = func999(number);
  if (a.length > 3) {
    otvet = `${func999(+(a.slice(0, -3)))} thousand ${otvet}`;
  }
  return otvet;
}
const func999 = (number) => {
  let a = `${number}`;
  let i = a.length - 1;
  if ((number === 0) && (i === 0)) return 'zero';
  let b = (a[i] === '1') ? 'one' :
    (a[i] === '2') ? 'two' :
    (a[i] === '3') ? 'three' :
    (a[i] === '4') ? 'four' :
    (a[i] === '5') ? 'five' :
    (a[i] === '6') ? 'six' :
    (a[i] === '7') ? 'seven' :
    (a[i] === '8') ? 'eight' :
    (a[i] === '9') ? 'nine' : ''; 
  otvet = b;
  i--;
  if ((i >= 0) && a[i] === '1') {
    otvet = (a[i+1] === '1') ? 'eleven' :
      (a[i + 1] === '2') ? 'twelve' :
      (a[i + 1] === '3') ? 'thirteen' :
      (a[i + 1] === '4') ? 'fourteen' :
      (a[i + 1] === '5') ? 'fifteen' :
      (a[i + 1] === '6') ? 'sixteen' :
      (a[i + 1] === '7') ? 'seventeen' :
      (a[i + 1] === '8') ? 'eighteen' :
      (a[i + 1] === '9') ? 'nineteen' : 'ten';
  }
  if ((i >= 0) && a[i] !== '1') {
    b = (a[i] === '2') ? 'twenty' :
    (a[i] === '3') ? 'thirty' :
    (a[i] === '4') ? 'forty' :
    (a[i] === '5') ? 'fifty' :
    (a[i] === '6') ? 'sixty' :
    (a[i] === '7') ? 'seventy' :
    (a[i] === '8') ? 'eighty' :
    (a[i] === '9') ? 'ninety' : ''; 
    otvet = `${b} ${otvet}`;
  }
  i--;
  if (otvet[otvet.length - 1] === " ") otvet = `${otvet.slice(0, -1)}`;
  if (otvet[0] === " ") otvet = `${otvet.slice(1)}`;
if ((i >= 0) && (a[i] !== '0')) {
  b = (a[i] === '1') ? 'one' :
  (a[i] === '2') ? 'two' :
  (a[i] === '3') ? 'three' :
  (a[i] === '4') ? 'four' :
  (a[i] === '5') ? 'five' :
  (a[i] === '6') ? 'six' :
  (a[i] === '7') ? 'seven' :
  (a[i] === '8') ? 'eight' : 'nine';
  otvet = `${b} hundred ${otvet}`;
}
  if (otvet[otvet.length - 1] === " ") otvet = `${otvet.slice(0, -1)}`;
  return otvet;
}

const toReadable = (number) => {
  let a = `${number}`;
  let otvet = func999(number);
  console.log(otvet);
  if (a.length > 3) otvet = `${func999(+(a.slice(0, -3)))} thousand ${otvet}`;
  return otvet;
}
/* прогонка конкретного значения */
let i = '225111';
console.log('num:',i,'read:',toReadable(i), "last symbol:",toReadable(i)[toReadable(i).length - 1]);
/* прогонка в указаном диапозоне */
/*for (let i = 0; i < 1000; i++) {
  console.log('num:',i,'read:',toReadable(i), "last symbol:",toReadable(i)[toReadable(i).length - 1]);
}*/
