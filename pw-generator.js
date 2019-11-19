function changeVocals (str) {
  //code di sini
  
  if (str.length === 0) {
    return '';
  } else if (str[0] == 'a' || str[0] == 'i' || str[0] == 'u' || str[0] == 'e' || str[0] == 'o') {
    return String.fromCharCode(str[0].charCodeAt() + 1) + changeVocals(str.slice(1));
  } else if (str[0] == 'A' || str[0] == 'I' || str[0] == 'U' || str[0] == 'E' || str[0] == 'O') {
    return String.fromCharCode(str[0].charCodeAt() + 1) + changeVocals(str.slice(1));
  } else {
    return str[0] + changeVocals(str.slice(1));
  }

}

function reverseWord (str) {
  //code di sini
  if (str.length === 0) {
    return ''
  } else {
    return str[str.length-1] + reverseWord(str.slice(0, -1))
  }
}

function setLowerUpperCase (str) {
  //code di sini
  if (str.length === 0) {
    return '';
  } else if (str[0].charCodeAt() >= 65 && str[0].charCodeAt() <= 90) {
    return String.fromCharCode(str[0].charCodeAt() + 32) + setLowerUpperCase(str.slice(1));
  } else {
    return String.fromCharCode(str[0].charCodeAt() - 32) + setLowerUpperCase(str.slice(1));
  }
}

function removeSpaces (str) {
  //code di sini

  if (str.length === 0) {
    return '';
  } else if (str[0] == ' ') {
    return removeSpaces(str.slice(1));
  } else if (str[0] !== ' ') {
    return str[0] + removeSpaces(str.slice(1));
  }
}

function passwordGenerator (name) {
  //code di sini
  return name.length < 5 ? 'Minimal karakter yang diinputkan adalah 5 karakter' : removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'