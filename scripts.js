
const concorrentes = [
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

function Média(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3 ).toFixed(2)
}

function mediaconcorrentes(concorrente) {
  return `
        ${concorrente.name} teve uma media de ${Média(concorrente.nota1, concorrente.nota2, concorrente.nota3)}.
    `

}

for (let concorrente of concorrentes) {
    let Média = mediaconcorrentes(concorrente)
    alert (Média)
}
