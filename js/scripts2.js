function buscarDados(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarLinhaT2(dado2){
    linha2 = document.createElement("tr");
    tdcode2 = document.createElement("td");
    tdcodein2 = document.createElement("td");
    tdname2 = document.createElement("td");
    tdhigh2 = document.createElement("td");
    tdlow2= document.createElement("td");
    tdvarbid2 = document.createElement("td");
    tdpctchange2 = document.createElement("td");
    tdbid2 = document.createElement("td");
    tdask2 = document.createElement("td");

    tdcode2.innerHTML = dado2.code;
    tdcodein2.innerHTML = dado2.codein;
    tdname2.innerHTML = dado2.name;
    tdhigh2.innerHTML = dado2.high;
    tdlow2.innerHTML = dado2.low;
    tdvarbid2.innerHTML = dado2.varBid;
    tdpctchange2.innerHTML = dado2.pctChange;
    tdbid2.innerHTML = dado2.bid;
    tdask2.innerHTML = dado2.ask;
    
    linha2.appendChild(tdcode2);
    linha2.appendChild(tdcodein2);
    linha2.appendChild(tdname2);
    linha2.appendChild(tdhigh2);
    linha2.appendChild(tdlow2);
    linha2.appendChild(tdvarbid2);
    linha2.appendChild(tdpctchange2);
    linha2.appendChild(tdbid2);
    linha2.appendChild(tdask2);

    return linha2;
}

function main2(){
    let data2 = buscarDados("https://economia.awesomeapi.com.br/EUR-BRL/1");

    let dados2 = JSON.parse(data2);

    let tabela2 = document.getElementById("tabela2");

    dados2.forEach(element => {
        let linha2 = criarLinhaT2(element);
        tabela2.appendChild(linha2);
    });
}

main2();