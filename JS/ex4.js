//4.	
const values = [3, 11, 7, 2, 9, 10]
let sum = 0
for (let i = 0; i <
    values.length; i += 1) {

    sum += values[i]

}

console.log(sum)
console.log(Math.min.apply(Math, values))
console.log(Math.max.apply(Math, values))