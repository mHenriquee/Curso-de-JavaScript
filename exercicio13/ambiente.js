var num = [3, 1, 9, 5, 7]
/* 
console.log (`O vetor tem ${num.length} posições`)

console.log (`O primeiro valor é ${num[0]}`)

num.push(2)

num.sort()

console.log(num)

for (var i=0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

var existe = num.indexOf(9)
    if (existe == -1) {
        console.log(`O número não está dentro do array`)
    } else {
        console.log (`O número está na array ${existe}`)
    }

for (i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}