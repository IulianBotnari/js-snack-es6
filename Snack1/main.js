let bike = [
    {
        name: "bike 1",
        weight: 20,

    },

    {
        name: "bike 1",
        weight: 18,

    },

    {
        name: "bike 1",
        weight: 15,

    }
]


let newArr = []
for (let i = 0; i < bike.length; i++) {
    let element = bike[i]
    let bikeWeight = element.weight

    newArr.push(bikeWeight)


}
console.log(newArr);

let compareFIrstIf

if (newArr[0] > newArr[1]) {
    compareFIrstIf = newArr[1]
} else {
    compareFIrstIf = newArr[0]
}


if (compareFIrstIf > newArr[2]) {
    compareFIrstIf = newArr[2]
}else{
    compareFIrstIf = compareFIrstIf
    
}

console.log(`La bici più leggera pesa ${compareFIrstIf} kg`);
