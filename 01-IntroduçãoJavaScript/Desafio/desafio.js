var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Jardim das Árvores',
    cidade: 'Avonts',
    uf: 'SP'
}

var retorno = document.querySelector('#retornoEndereco');
retorno.innerHTML = `O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, rua ${endereco.rua}, número ${endereco.numero} `;

function numsPares(x, y){
    var inicio = x;
    var limite = y;

   for(var i = inicio; i <= limite; i++){
     var div = i;
     var resultado = div % 2;
     if(resultado == 0){
         var retorno = document.querySelector('#retornoPares');
         retorno.innerHTML += `O número ${div} é par<br><br>`;
     }
   }

  
}

numsPares(1, 10)

function habilidades(){
  var skills = ['JavaScript', 'React', 'React Native']

   var elemento = 'Java';

   var msgRetorno = document.querySelector('#retornoArray');

    msgRetorno.innerHTML = `Array declarado: ${skills}`

   if(skills.indexOf(elemento) > -1){
       msgRetorno.innerHTML += `<br><br>O elemento ${elemento} já existe no seu array`;
   }
   else if(skills.indexOf(elemento) === -1) {
     skills.push(elemento);
     msgRetorno.innerHTML += `<br><br>O elemento ${elemento} foi adicionado com sucesso`
   }

   msgRetorno.innerHTML += `<br><br>Após a função: ${skills}`

}

habilidades();

function experiencia(anos){

    var exp = anos;

    var retornoExp = document.querySelector('#retornoExperiencia');

        if(exp > 0 && exp <= 1){
            retornoExp.innerHTML = 'Iniciante';
        }
        else if(exp > 1 && exp <= 3){
            retornoExp.innerHTML = 'Intermediário';
        }
        else if(exp > 3 && exp <= 6){
            retornoExp.innerHTML = 'Avançado';
        }
        else if(exp > 7){
            retornoExp.innerHTML = 'Jedi Master';
        }
        else {
            retornoExp.innerHTML = 'Dados insuficientes';
        }
    

}

experiencia(0.7);

function retornaSkills(){
    var usuarios = [
        {
            nome: 'Caique',
            habilidades: ['JavaScript', 'C#', 'HTML5 e CSS3', 'Selenium']
        },
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        }
    ];

    var retornoDevs = document.querySelector('#retornoDevs');

    
    for (let value of usuarios) {
        retornoDevs.innerHTML += `O usuário ${value.nome} tem as seguintes habilidades ${value.habilidades.join(', ')}<br><br>`
    }
}

retornaSkills();