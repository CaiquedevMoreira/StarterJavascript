function soma(num1, num2){
    
  return num1 + num2;
}

    var resultado = document.querySelector('#soma');
    var result = soma(5, 10);
    resultado.innerHTML = `O resultado da soma é ${result}`;


function contador(){
    var cont = document.querySelector('#cont');
    for(var i = 1; i <= 10; i++){
        cont.innerHTML += `<br>Posição ${i}`
    }
}

contador();

