function repeteFor(limite){

    var paragrafo = document.querySelector('#reptSimples');

    for(var i = 1; i <= limite; i++){
        paragrafo.innerHTML += `${i}<br><br>`
    }
}

repeteFor(20);

function repeteWhile(limite){

    var result = document.querySelector('#reptCompost');
    var cont = 1;

    while(cont <= limite){
        result.innerHTML += `${cont}<br><br>`;

        cont++;
    }
}

repeteWhile(25);

function repetedoWhile(limite){

    var resultado = document.querySelector('#reptdoCompost');
    var cont = 0;
    do{
        cont ++;
        resultado.innerHTML += `${cont}<br><br>`;
    }
    while(cont < limite)
}

repetedoWhile(10);