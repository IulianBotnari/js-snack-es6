


let city = ["Spilimbergo", "Milan", "Tokyo", "Rimini", "Udine", "Pordenone"]

let numS = 1
let numB = 4


function extractFromArray(arr, num1, num2) {
    for (let i = 0; i < arr.length; i++){
        let arrElement = arr[i]
        
        let iOff = arr.indexOf(arrElement)

        

        if (iOff > num1 && iOff < num2) {
            console.log(arrElement);
            
        }
        
        

    }
    
}

extractFromArray(city, numS, numB)