// v7
var todoList = {
  todos: [],
  displayTodos() {
    if(this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My todos:");
      for(var i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    
    for (var i=0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    if (completedTodos === totalTodos) {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    
    this.displayTodos();
  }
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});

//v8

var todoList = {
  todos: [],
  displayTodos() {
    if(this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My todos:");
      for(var i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    
    for (var i=0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    if (completedTodos === totalTodos) {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    
    this.displayTodos();
  }
};


var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
//v9
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    
    for (var i=0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    if (completedTodos === totalTodos) {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};


var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i=0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
}; 
//v10

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    
    for (var i=0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    if (completedTodos === totalTodos) {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i=0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};


var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i=0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function() {
      var elementClicked = event.target;
      if(elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

//v11
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });
    
    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    })
  }
};


var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function() {
      var elementClicked = event.target;
      if(elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();