const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', removeTasks);
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
    if (taskInput.value == '')
        alert("Add a task");
    
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement("a");
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
    saveTaskInLocalStorage(taskInput.value);
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    const element = e.target;
    if (element.parentElement.classList.contains('delete-item')) {
        element.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(element.parentElement.parentElement.firstChild.textContent);
    }
}

function removeTasks(e) {
    //taskList.innerHTML = '';
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1)
            task.style.display = 'block';
        else
            task.style.display = 'none';
    });
}

function removeTaskFromLocalStorage(value) {
    let tasks;
    if(localStorage.getItem('tasks') == null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task, index) {
        if (value == task)
            tasks.splice(index, 1);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasksFromLocalStorage(value) {
    localStorage.clear();
}

function getTasksFromLocalStorage() {
    let tasks;
    if(localStorage.getItem('tasks') == null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
    
        const link = document.createElement("a");
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class = "fa fa-remove"></i>';
    
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

function saveTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') == null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
