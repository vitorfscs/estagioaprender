var dataAtual = new Date();
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
       var indiceDiaDaSemana = dataAtual.getDay();
    var diaDaSemanaPorExtenso = diasDaSemana[indiceDiaDaSemana];
console.log("Hoje é " + diaDaSemanaPorExtenso + ".");