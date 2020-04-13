    var ulTodos = document.querySelector('#app ul')
    var butAdiciona = document.querySelector('#butTodo');
    var inpText = document.querySelector('#novoTodo');

    var todos = JSON.parse(localStorage.getItem('list_todos')) || []
   

    function renderTodos(){
        ulTodos.innerHTML = '';

        for(todo of todos){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(todo);

            var linkElement = document.createElement('a');

            linkElement.setAttribute('href', '#')
            var linkText = document.createTextNode('Excluir');

            var pos = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
            linkElement.appendChild(linkText);

            todoElement.appendChild(todoText);

            todoElement.appendChild(linkElement);
            ulTodos.appendChild(todoElement);
        }

    }

    renderTodos();

    function adiciona(){

        var textElement = inpText.value;
    
        todos.push(textElement)
        inpText.value = '';
        renderTodos();
        saveStorage();
    }

    butAdiciona.onclick = adiciona;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
