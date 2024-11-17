alert("Bem vindo ao jogo do número secreto!");

// Gerando um número secreto aleatório entre 1 e 10
let numeroSecreto = Math.ceil(Math.random() * 10);
console.log("Número secreto:", numeroSecreto); // Para fins de depuração

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    if (isNaN(chute)) {
        alert("Por favor, digite um número válido.");
    } else {
        chute = Number(chute); // Convertendo a entrada para número
        if (chute == numeroSecreto) {
            alert(`ACERTOU!!!!PARABÉNS!!! ${numeroSecreto} com ${tentativas} tentativas`);
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
            tentativas++;
        }
    }
}