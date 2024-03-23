alert("Olá, mundo! Ops, quero dizer, bem vindo ao Jogo.");
let numeroMax = 500

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute;
console.log("Valor do chute:", chute);
let tentativas = 1;

let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log("Sem trapacear");

//enquanto o chute não for igual ao numero secreto / != não é igual
while (chute != numeroSecreto) {
chute = prompt(`Me diga um número entre 1 e ${numeroMax}`)
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break    
    } else {
        alert("Você é um erro... quero dizer, você errou. Não é " + chute + "!");
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}...`);  
        } else {
                alert(`O número secreto é maior que ${chute}...`);
            }
            // tentativas = tentativas + 1
            tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "vezes" : "vez";
alert(`Contrariando as expectativas, você acertou, é ${numeroSecreto}! Você só precisou tentar ${tentativas} ${palavraTentativa}.`);

//if (tentativas >1) {
//alert(`Contrariando as expectativas, você acertou, é ${numeroSecreto}! Você só precisou tentar ${tentativas} vezes.`);
//} else {
//    alert(`Contrariando as expectativas, você acertou, é ${numeroSecreto}! Você só precisou tentar ${tentativas} vez.`);
//}

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log("Resultado da comparação:", chute == numeroSecreto);


