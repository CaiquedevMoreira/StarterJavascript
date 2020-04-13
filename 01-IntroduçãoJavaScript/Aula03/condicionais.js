function mORf(sexo){
    var resultado = document.querySelector('#condSimples');

    if(sexo == 'M'){
        resultado.innerHTML = 'Sexo Masculino';
    }
    else {
        resultado.innerHTML = 'Sexo Feminino';
    }
}

mORf('M');


function faixaEtaria(idade) {
    var resultado = document.querySelector('#condCompost');
  

    if(idade > 0 && idade < 13){
        resultado.innerHTML = 'Criança';
    }
    else if(idade > 13 && idade < 18){
        resultado.innerHTML = 'Adolescente';
    }
    else if(idade > 18 && idade < 50){
        resultado.innerHTML = 'Adulto';
    }
    else if(idade > 50){
        resultado.innerHTML = 'Idoso';
    }
    else {
        resultado.innerHTML = `${idade} é uma idade inválida`
    }
}

faixaEtaria(19);

function sexoEidade(sexo, idade){
    var resultado = document.querySelector('#condEncadeadas');

    if(sexo == 'M'){
        if(idade > 0 && idade < 13){
            resultado.innerHTML = 'Um garoto';
        }
        else if(idade > 13 && idade < 18){
            resultado.innerHTML = 'Um rapaz';
        }
        else if(idade > 18 && idade < 50){
            resultado.innerHTML = 'Um homem';
        }
        else if(idade > 50){
            resultado.innerHTML = 'Um senhor';
        }
        else {
            resultado.innerHTML = `${idade} é uma idade inválida`
        }
    }
    else if(sexo == 'F'){
        if(idade > 0 && idade < 13){
            resultado.innerHTML = 'Uma garota';
        }
        else if(idade > 13 && idade < 18){
            resultado.innerHTML = 'Uma moça';
        }
        else if(idade > 18 && idade < 50){
            resultado.innerHTML = 'Uma mulher';
        }
        else if(idade > 50){
            resultado.innerHTML = 'Uma senhora';
        }
        else {
            resultado.innerHTML = `${idade} é uma idade inválida`
        }
    }
    else {
        resultado.innerHTML = 'Valores Inválidos'
    }
}

sexoEidade('M', 19);

function ternaria(sexo){
    var retorno = (sexo == 'M') ? 'Masculino' : 'Feminino';

    console.log("Condição Ternária");
    console.log(retorno);
}

ternaria('M')