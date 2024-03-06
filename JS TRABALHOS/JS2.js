var dataAtual = new Date();
    var diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sextoou", "sabado"];
       var indiceDiaDaSemana = dataAtual.getDay();
    var diaDaSemanaPorExtenso = diasDaSemana[indiceDiaDaSemana];
console.log("Hoje é " + diaDaSemanaPorExtenso + ".");
