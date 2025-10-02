

const todoList = [{
    name: "Make dinner",
    dueDate: '2025-19-7'
}, {
    name: "Wash dishes",
    dueDate: '2025-19-7'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    //* calling function by name
    //todoList.forEach(function (todoObject, index) {
    //    const { name, dueDate } = todoObject; //* This is called Destructuring
    //    const html = ``;
    //    //const html = `<li> ${todo}</li>`;
    //    todoListHTML += html;
    //});
    //* calling a function using arrow func
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject; //* This is called Destructuring
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        //const html = `<li> ${todo}</li>`;
        todoListHTML += html;
    });
    //console.log(todoListHTML); 
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value
    //console.log(name);
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate
        //* This is called shorthand property syntax 
        name,
        dueDate,
    });
    //console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}


//****** Simple version of Todo list 1 ******************************************/
//const todoList = [];

//function addTodo() {
//    const inputElement = document.querySelector('.js-name-input');
//    const name = inputElement.value
//    //console.log(name);
//    todoList.push(name);
//    console.log(todoList);

//    inputElement.value = '';
//}