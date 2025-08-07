const baseNumbers = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const unusualNumbers = {
  0: 'ten',
  1: 'eleven',
  2: 'twelve',
  3: 'thirteen',
  4: 'fourteen',
  5: 'fifteen',
  6: 'sixteen',
  7: 'seventeen',
  8: 'eighteen',
  9: 'nineteen',
};

const decadeslNumbers = {
  0: '',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

function deleteSpace(a) {
  let str = a;
  if (str[str.length - 1] === ' ') {
    str = `${str.slice(0, -1)}`;
  }
  if (str[0] === ' ') {
    str = `${str.slice(1)}`;
  }
  return str;
}

module.exports = function toReadable(number) {
  const a = `${number}`;
  let i = a.length - 1;
  if (a.length === 1) {
    if (number === 0) {
      return 'zero';
    }
    return baseNumbers[a];
  }
  // min lenght 2
  let b = a[i];
  let answer = baseNumbers[b];
  i -= 1;
  if (a[i] === '1') {
    answer = unusualNumbers[a[i + 1]];
  } else {
    b = decadeslNumbers[a[i]];
    answer = `${b} ${answer}`;
  }
  answer = deleteSpace(answer);
  if (a.length === 2) {
    return answer;
  }
  // min lenght 3
  i -= 1;
  if (answer[answer.length - 1] === ' ') {
    answer = `${answer.slice(0, -1)}`;
  }
  if (answer[0] === ' ') {
    answer = `${answer.slice(1)}`;
  }
  if (a[i] !== '0') {
    b = baseNumbers[a[i]];
    answer = `${b} hundred ${answer}`;
  }
  answer = deleteSpace(answer);
  return answer;
};
