const result = document.querySelector('.resultado')
const humanoPontuacao = document.querySelector('#suaPontuacao')
const maquinaPontuacao = document.querySelector('#maquinaPontuacao')

let humanoPontos = 0
let maquinaPontos = 0

const GAME_OPTIONS = {
    PEDRA: "pedra",
    PAPEL: "papel",
    TESOURA: "tesoura"
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3)/*Math.floor arredonda para baixo
    Math.ceil arredonda para cima*/
    
    return choices[randomNumber]
   }
const playTheGame = (human, machine) => {
    console.log('Humano: '+ human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (
        (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
        (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
        (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
    ){
        humanoPontos++
        humanoPontuacao.innerHTML = humanoPontos
        result.innerHTML = 'Você ganhou !'
    } else {
        maquinaPontos++
        maquinaPontuacao.innerHTML = maquinaPontos
        result.innerHTML = 'Alexa ganhou !'
    }
}