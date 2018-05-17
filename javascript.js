//Arrays

var todos = ['item1','item2','item3'];
console.log('My todos:',todos);

// Add new todos
todos.push('item 4');
//change a todo
todos [0] = 'item 1 updated';
//delete todo
todos.splice (0, 1); //delete item 1
todos.splice (3, 1); //delete item 4
