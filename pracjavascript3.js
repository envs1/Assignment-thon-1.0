//lesson 3 objects and functions
//object
var todoList={
  todos:['item 1', 'item 2', 'item 3']
  displayTodos:function(){
    console.log('My Todos',this.todos)//display
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position,newValue){
    this.todos[position] =newValue;
    this.displayTodos();
  },
  deleteTodo: function (postion){
  this.todos.splice(position, 1);
  this.displayTodos();
};
