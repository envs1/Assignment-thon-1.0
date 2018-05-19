//Function

var todos = ['item 1','item 2','item 3'];

//display todo with function
function displayTodos(){
    console.log('My todos:',todos);
}

//It should have a function to add todos.
function addTodo(todo){
    todos.push(todos);
    displayTodos();
}
//change todos
function changeTodo(postion, newValue){
    todos[postion] = newValue;
    displayTodos();
}


