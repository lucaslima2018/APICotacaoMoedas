function buscarDados(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarLinhaT1(dado1){
    linha = document.createElement("tr");
    tdcode = document.createElement("td");
    tdcodein = document.createElement("td");
    tdname = document.createElement("td");
    tdhigh = document.createElement("td");
    tdlow = document.createElement("td");
    tdvarbid = document.createElement("td");
    tdpctchange = document.createElement("td");
    tdbid = document.createElement("td");
    tdask = document.createElement("td");

    tdcode.innerHTML = dado1.code;
    tdcodein.innerHTML = dado1.codein;    
    tdname.innerHTML = dado1.name;
    tdhigh.innerHTML = dado1.high;
    tdlow.innerHTML = dado1.low;
    tdvarbid.innerHTML = dado1.varBid;
    tdpctchange.innerHTML = dado1.pctChange;
    tdbid.innerHTML = dado1.bid;
    tdask.innerHTML = dado1.ask;
    
    linha.appendChild(tdcode);
    linha.appendChild(tdcodein);
    linha.appendChild(tdname);
    linha.appendChild(tdhigh);
    linha.appendChild(tdlow);
    linha.appendChild(tdvarbid);
    linha.appendChild(tdpctchange);
    linha.appendChild(tdbid);
    linha.appendChild(tdask);

    return linha;

}

function main(){
    let data = buscarDados("https://economia.awesomeapi.com.br/USD-BRL/1");
    let dados1 = JSON.parse(data);
    let tabela1 = document.getElementById("tabela1");
    dados1.forEach(element => {
        let linha = criarLinhaT1(element);
        tabela1.appendChild(linha);
    });
}

main();