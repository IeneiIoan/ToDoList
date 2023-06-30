import { createTask } from './task.js';
import { addTask, completeTask, deleteTask } from './taskList.js';
import { renderTasks } from './render.js';

function addTaskFromInput() {
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const dueDateInput = document.getElementById('dueDateInput');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const dueDate = dueDateInput.value;

  if (title !== '') {
    const task = createTask(title, description, dueDate);
    addTask(task);
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    renderTasks();
  }
}

document.getElementById('addTaskButton').addEventListener('click', addTaskFromInput);

renderTasks();