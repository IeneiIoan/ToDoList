import { createTask } from './task.js';
import { addTask, completeTask, deleteTask } from './taskList.js';
import { renderTasks } from './render.js';

function addTaskFromInput() {
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const dueDateInput = document.getElementById('dueDateInput');
  const priorityInput = document.getElementById('priorityInput');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;

  if (title !== '') {
    const task = createTask(title, description, dueDate, priority);
    addTask(task);
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = '';
    renderTasks();
  }
}

document.getElementById('addTaskButton').addEventListener('click', addTaskFromInput);

renderTasks();