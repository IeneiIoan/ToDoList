export let tasks = [];

export function addTask(task) {
  tasks.push(task);
}

export function completeTask(index) {
  tasks[index].completed = true;
}

export function restoreTask(index) {
    tasks[index].completed = false;
  }

export function deleteTask(index) {
  tasks.splice(index, 1);
}