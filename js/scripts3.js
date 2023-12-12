function buscarDados(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarLinhaT3(dado3){
    linha3 = document.createElement("tr");
    tdcode3 = document.createElement("td");
    tdcodein3 = document.createElement("td");
    tdname3 = document.createElement("td");
    tdhigh3 = document.createElement("td");
    tdlow3= document.createElement("td");
    tdvarbid3 = document.createElement("td");
    tdpctchange3 = document.createElement("td");
    tdbid3 = document.createElement("td");
    tdask3 = document.createElement("td");

    tdcode3.innerHTML = dado3.code;
    tdcodein3.innerHTML = dado3.codein;
    tdname3.innerHTML = dado3.name;
    tdhigh3.innerHTML = dado3.high;
    tdlow3.innerHTML = dado3.low;
    tdvarbid3.innerHTML = dado3.varBid;
    tdpctchange3.innerHTML = dado3.pctChange;
    tdbid3.innerHTML = dado3.bid;
    tdask3.innerHTML = dado3.ask;
    
    linha3.appendChild(tdcode3);
    linha3.appendChild(tdcodein3);
    linha3.appendChild(tdname3);
    linha3.appendChild(tdhigh3);
    linha3.appendChild(tdlow3);
    linha3.appendChild(tdvarbid3);
    linha3.appendChild(tdpctchange3);
    linha3.appendChild(tdbid3);
    linha3.appendChild(tdask3);

    return linha3;
}

function main3(){
    let data3 = buscarDados("https://economia.awesomeapi.com.br/BTC-BRL/1");

    let dados3 = JSON.parse(data3);

    let tabela3 = document.getElementById("tabela3");

    dados3.forEach(element => {
        let linha3 = criarLinhaT3(element);
        tabela3.appendChild(linha3);
    });
}

main3();