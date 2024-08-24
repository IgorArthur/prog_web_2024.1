function verificarTCC(E, D) {
    if (E < 0 || E >= 25 || D < 0 || D >= 25) {
        return "Entrada inválida!";
    }

    if (E + 3 < D) {
        return "Muito bem! O aluno está apto a apresentar até o natal!";
    } else if (E + 3 === D || E + 2 === D) {
        if (D + 2 < 24) {
            return "O trabalho está muito ruim!\nTCC Apresentado!";
        } else {
            return "O trabalho está muito ruim!\nNão deu! Só no próximo ano agora.";
        }
    } else {
        return "Eu odeio o prof. Florovsky!";
    }
}

console.log(verificarTCC(13, 19));
console.log(verificarTCC(22, 23));
console.log(verificarTCC(21, 22)); 