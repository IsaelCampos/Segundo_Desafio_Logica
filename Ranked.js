let nome = "Isael"
let vitorias = 36
let derrotas = 30

function ranked(vitorias, derrotas){
    let rank = vitorias - derrotas
    return rank
}

let resultado = ranked(vitorias, derrotas)

if(resultado <= 10 ){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Ferro")
}
else if(resultado <= 20){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Bronze")
}
else if (resultado<= 50){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Prata")
}
else if (resultado <= 80){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Ouro")
}
else if (resultado <= 90){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Diamante")
}
else if (resultado <= 100){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Lendário")
}
else if (resultado >= 101){
    console.log("O Herói tem de saldo de " + vitorias + " vitorias e está no nível de Imortal")
}
else{
    console.log("O heroi não possui saldo de vitórias")
}