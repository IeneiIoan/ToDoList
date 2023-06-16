let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.completed) {
      li.innerHTML = `
        <span><del>${task.title}</del></span>
        <button onclick="restoreTask(${index})">Restore</button>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
    } else {
      li.innerHTML = `
        <span>${task.title}</span>
        <button onclick="completeTask(${index})">Complete</button>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
    }
    taskList.appendChild(li);
  });
}

function restoreTask(index) {
  tasks[index].completed = false;
  renderTasks();
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const title = taskInput.value.trim();

  if (title !== '') {
    tasks.push({ title, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function completeTask(index) {
  tasks[index].completed = true;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}