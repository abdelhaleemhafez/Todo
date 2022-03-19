// Selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
// Events
todoButton.addEventListener('click', addTask);
todoList.addEventListener('click', checkOrDelate);
//function

function addTask(e) {
    e.preventDefault();
    //create li
    let todoLi = document.createElement('li');
    todoLi.classList.add('todo');

    //create div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');

    //add input value to div
    todoDiv.innerText = todoInput.value;

    //create button complete
    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    //create button trash
    let trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    //add div + button 1 + button 2 => li
    todoLi.appendChild(todoDiv);
    todoLi.appendChild(completeBtn);
    todoLi.appendChild(trashBtn);

    // add li to ul
    todoList.appendChild(todoLi);

    //remove input value
    todoInput.value = '';
}
function checkOrDelate(e) {
    let item = e.target;
    if (item.classList[0] === 'complete-btn') {
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    if (item.classList[0] === 'trash-btn') {
        let todo = item.parentElement;
        todo.classList.toggle('fall');
        todo.addEventListener('transitioned', () => {
            todo.remove();
        });
    }
}