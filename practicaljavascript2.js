 var todos = ['item1','item 2','item 3']
    function displayTodos(){ 
    console.log('My todos:', todos);
    
}//display todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}//add item to the todo
function changeTodo(position, newValue){
    todos[position]= newValue;
    displayTodos();
    }//change todo function any value
    changeTodo(0,'changed')//changing first value
    
//function delete todos
function deleteTodo(){
    todo.splice(0,1)
}