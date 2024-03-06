var dataAtual = new Date();
    var diasdasemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sextoou", "sabado"];
       var indidiadasemana = dataAtual.getDay();
    var diadasemanaescrito = diasdasemana[indidiadasemana];
console.log("Hoje é " + diadasemanaescrito + ".");
