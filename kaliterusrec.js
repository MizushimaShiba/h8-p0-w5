function kaliTerusRekursif(angka) {
  // you can only write your code here!

  if (angka <= 9) {
    return angka;
  } else {
    var result = Number(angka.toString().substring(0, 1))
        for(let i=1;i<angka.toString().length;i++){
            result = result * Number(angka.toString()[i])
        }
    }
    return kaliTerusRekursif(result)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6