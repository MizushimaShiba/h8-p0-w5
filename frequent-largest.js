function sorting(arrNumber) {
  // code di sini

  
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrNumber.length-1; j++) {
      if (arrNumber[j] > arrNumber[j+1]) {
        let mole = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = mole;
       }
    }
  }
  return arrNumber  
}

function getTotal(arrNumber) {
  // code di sini
  // max min algorithm

  if (!arrNumber.length) {return ''}
  else {
    // initiating

    let max = arrNumber[0]
    let count = 1

    for (let i = 1; i < arrNumber.length; i++) {
      if (arrNumber[i] > max) {
        max = arrNumber[i]
        count = 1
      } else if (arrNumber[i] == max ) {count ++}
    }
    return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${count} kali`
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
//''