import { tasks, completeTask, restoreTask, deleteTask } from './taskList.js';

export function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const tr = document.createElement('tr');

    const checkboxTd = document.createElement('td');
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
    checkboxTd.appendChild(checkbox);

    const titleTd = document.createElement('td');
    const titleElement = document.createElement('h3');
    titleElement.textContent = task.title;
    if (task.completed) {
      titleElement.style.textDecoration = 'line-through';
    }
    titleTd.appendChild(titleElement);

    const descriptionTd = document.createElement('td');
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = task.description;
    descriptionTd.appendChild(descriptionElement);

    const dueDateTd = document.createElement('td');
    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = task.dueDate;
    dueDateTd.appendChild(dueDateElement);

    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
      renderTasks();
    });
    deleteTd.appendChild(deleteButton);

    tr.appendChild(checkboxTd);
    tr.appendChild(titleTd);
    tr.appendChild(descriptionTd);
    tr.appendChild(dueDateTd);
    tr.appendChild(deleteTd);

    taskList.appendChild(tr);
  });
}