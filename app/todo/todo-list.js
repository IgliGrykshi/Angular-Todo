angular.module("todoApp",[]).controller("TodoListController", function() {
  var todoList = this;
  todoList.todos = [
    { name: "learn ReactJS", done: true },
    { name: "learn AngularJS", done: false }
  ];
  todoList.addTodo = function() {
    todoList.todos.push({name: todoList.todoText, done:false });
    todoList.todoText = "";
  };
  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 1 : 0;
    });
    return count;
  };
  todoList.delete = function(todo) {
    console.log(todoList.todos);
    var nr = todoList.todos.indexOf(todo);
    var newList = todoList.todos.splice(nr, 1);
  };

});