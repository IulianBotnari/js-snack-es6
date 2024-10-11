const nomiSquadre = [

    {
        nome: "Juventus",
        punti: Math.floor(Math.random()*20 + 1),
        falli: Math.floor(Math.random()*20 + 1),
    
    },
    
    {
        nome: "Milan",
        punti: Math.floor(Math.random()*20 + 1),
        falli: Math.floor(Math.random()*20 + 1),
    
    },
    
    
    {
        nome: "Inter",
        punti: Math.floor(Math.random()*20 + 1),
        falli: Math.floor(Math.random()*20 + 1),
    
    },
    
    {
        nome: "Napoli",
        punti: Math.floor(Math.random()*20 + 1),
        falli: Math.floor(Math.random()*20 + 1),
    
    },
    
    {
        nome: "Roma",
        punti: Math.floor(Math.random()*20 + 1),
        falli: Math.floor(Math.random()*20 + 1),
    
    },
    
]

console.log(nomiSquadre);

let newArr = []

for (let i = 0; i < nomiSquadre.length; i++) {
    let punti = nomiSquadre[i].punti
    let falli = nomiSquadre[i].falli
    let squadre = {
        punti: punti,
        falli: falli,
    }
    newArr.push(squadre)
    }

console.log(newArr);

