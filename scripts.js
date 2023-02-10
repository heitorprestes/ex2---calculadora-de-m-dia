
let concorrentes = [
    {
        name: "João",
        nota1: 9,
        nota2: 6,
        nota3: 8
    },
    {
        name: "Cleide",
        nota1: 10,
        nota2: 8,
        nota3: 8
    },
    {
        name: "David",
        nota1: 6,
        nota2: 6,
        nota3: 7
    },
    {
        name: "Tobias",
        nota1: 5,
        nota2: 6,
        nota3: 10
    }
]

function mediatotal(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    return media
}

for (let concorrente of concorrentes) {
    let mediaconcorrente = mediatotal(concorrente.nota1, concorrente.nota2, concorrente.nota3).toFixed(1)
    let aprovreprov = mediaconcorrente < 7 ? 'Infelizmente não foi dessa vez.' : 'Parabéns pela sua aprovação'

    alert (`A média de ${concorrente.name} é ${mediaconcorrente}. ${aprovreprov}`)
}