export function createTask(title, description, dueDate) {
    return {
      title,
      description,
      dueDate,
      completed: false
    };
  }