/*this function gets the task from input*/
function get_todos() {
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will
    communicate with the web browser to make the task a javascript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos funciton array*/
function add() {
    /*This takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task at the end of the array*/
    todos.push(task);
    /*This converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show ();

    return false;
}

/*this function keeps the tasks permanantly displayed on the screen*/
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();
    
    /*This sets up each task as an unordered list*/
    var html = '<ul>';
    /*this displays a task to the list in the order that it is inputted*/
    for (var i = 0; i < todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>'
    /**This displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

/** This displays the inputed task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/* this will keep the inputs displayed permenantly on the screen */
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /* This looks in the show() how to display a removed item on the screen */
    show();

    return false;
}