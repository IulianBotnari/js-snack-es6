let bike = [
    {
        name: "bike 1",
        weight: 20,

    },

    {
        name: "bike 2",
        weight: 18,

    },

    {
        name: "bike 3",
        weight: 15,

    }
]


let newArr = []
for (let i = 0; i < bike.length; i++) {
    let element = bike[i]
    let bikeWeight = element.weight

    newArr.push(bikeWeight)


}

let result
let lighterBike
if (newArr[0] > newArr[1]) {
    result = newArr[1]
    lighterBike = bike[1]
} else {
    result = newArr[0]
    lighterBike = bike[0]
}


if (result > newArr[2]) {
    result = newArr[2]
    lighterBike = bike[2]
}else{
    result = result
    lighterBike = lighterBike
    
}
console.log(result);

console.log(lighterBike);
