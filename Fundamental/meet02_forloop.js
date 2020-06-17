//forlooping
let x //declaration as global variable
for (x = 1; x <= 10; x++) {
    console.log(x)
}

console.log(x) // ✅

for ( let y = 1; y <= 10; y++) { //variable y as local variable
    console.log(y)  // only can used in the forloop function
}

console.log(y) //❌ because variable y is not global variable