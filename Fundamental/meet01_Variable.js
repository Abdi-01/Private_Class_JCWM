//////////////////////VARIABLE////////////////////////////////////////
//Var : tipe variable yang bisa dideklarasikan berulang-ulang
var a = 10  //deklarasi 1
var a = 5   //deklarasi 2

a += 1 //=>> a= a + 1 ==> a = 5 + 1 ==> a = 6

//Let : tipe variable yang hanya bisa dideklarasikan satu kali, dan tinggal memanggil nama variablenya
let b = 5  //deklarasi 1
b = 6  // memanggil variable b dan isinya diganti menjadi 6
b += 5 //=>> b= b + 5 ==> b = 5 + 5 ==> b = 10

//Const : tipe variable yang nilai maupun namanya tidak dapat diganti, dan bersifat tetap
const pi = 3.14

let angka = 10
angka += "20"
// Tipe data apapun jika ditambah dengan string maka tipe datanya akan menjadi string
// console.log(angka)


//Array index >> 0  1     2       3      4
let arrayData = [4, 5, "tujuh", "Tiga", true]

console.log(arrayData.length)
