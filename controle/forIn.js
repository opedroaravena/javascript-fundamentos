const programador = {
    nome: 'Pedro',
    idade: 23,
    stack: 'Javascript',
    disponibilidade: true
}

for(let atributos in programador) {
    console.log(`${atributos} = ${programador[atributos]}`)
}