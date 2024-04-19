
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual é a cor comum das Abóbora?");

    
    if (respostaTime.toLowerCase() === "Laranja") {
      alert("Isso mesmo! A cor comum das Abóboras é Laranja!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
