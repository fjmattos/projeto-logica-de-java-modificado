README: Jogo do Número Secreto

Descrição:

Um jogo simples onde o jogador tenta adivinhar um número secreto gerado aleatoriamente entre 1 e 10. O jogo fornece dicas sobre se o chute é maior ou menor que o número secreto.

Como Jogar:

Iniciar o jogo: Execute o arquivo HTML (index.html) em um navegador web.

Chutar um número: Digite um número entre 1 e 10 no prompt que aparecerá.

Receber dicas: O jogo informará se o seu chute foi alto ou baixo.

Continuar chutando: Repita o processo até acertar o número secreto.

Tecnologias Utilizadas:

HTML: Estrutura básica da página.

JavaScript: Lógica do jogo, geração de números aleatórios, interação com o usuário.

Estrutura de Arquivos:

index.html: Arquivo principal que contém o código HTML e a referência ao arquivo JavaScript.

script.js: Arquivo JavaScript com a lógica do jogo.

Como Melhorar:

Dificuldade: Implementar níveis de dificuldade, ajustando o intervalo de números aleatórios ou o número máximo de tentativas.

Interface: Criar uma interface gráfica mais atraente utilizando CSS.

Persistência: Salvar o histórico de jogos e pontuações do jogador em um arquivo local ou em um banco de dados.

Multijogador: Permitir que dois jogadores joguem simultaneamente ou contra o computador.

Código:

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
