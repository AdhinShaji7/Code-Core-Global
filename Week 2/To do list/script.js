const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const error = document.getElementById('error');

document.addEventListener('DOMContentLoaded', loadTasks);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();

  if (task === "") {
    error.textContent = "⚠ Please enter a task.";
    return;
  }

  error.textContent = "";
  addTask(task);
  saveTask(task);
  taskInput.value = "";
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  delBtn.classList.add('delete-btn');

  delBtn.onclick = () => {
    taskList.removeChild(li);
    deleteTask(task);
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task));
}

function deleteTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
