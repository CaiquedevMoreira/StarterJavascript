var $ = document.querySelector.bind(document);

var nome = 'Caique';
var idade = 19;
var solteiro = false;
var peso = 75.5;

var alunos = ['Fulano', 'Beltrano', 'Ciclano'];

var pessoa = {
    nome2: 'Fulano',
    peso2: 85.7,
    idade2: 92,
    estudante: true
}

var info = $('#info');
info.innerHTML = `O nome é ${nome}`;

info.innerHTML += `</br></br>A idade de ${nome} é ${idade} anos`;

info.innerHTML += `</br></br>O peso de ${nome} com ${idade} anos é de ${peso}`;




var objeto = $('#objeto');
objeto.innerHTML = `O nome do objeto é ${pessoa.nome2}`;

objeto.innerHTML += `</br></br>A idade de ${pessoa.nome2} é ${pessoa.idade2} anos`;

objeto.innerHTML += `</br></br>${pessoa.nome2} tem ${pessoa.peso2} kilos`;

if(pessoa.estudante == true){
    objeto.innerHTML += `</br></br>${pessoa.nome2} é um estudante`;
}
else {
    objeto.innerHTML += `</br>${pessoa.nome2}não é um estudante`;
}



var arrays = $('#alunos');
arrays.innerHTML = `O primeiro aluno da lista é ${alunos[0]}`

arrays.innerHTML += `</br></br>O segundo aluno da lista é ${alunos[1]}`

arrays.innerHTML += `</br></br>O terceiro aluno da lista é ${alunos[2]}`




