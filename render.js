import { tasks, completeTask, restoreTask, deleteTask } from './taskList.js';

export function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        completeTask(index);
      } else {
        restoreTask(index);
      }
      renderTasks();
    });

    const titleElement = document.createElement('h3');
    titleElement.textContent = task.title;
    if (task.completed) {
      titleElement.style.textDecoration = 'line-through';
    }

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${task.description}`;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${task.dueDate}`;

    const priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${task.priority}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(titleElement);
    li.appendChild(descriptionElement);
    li.appendChild(dueDateElement);
    li.appendChild(priorityElement);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}