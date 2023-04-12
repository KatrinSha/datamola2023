import Task from './Task.js';
import tasks from './Tasks.js';

function getUniqId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class TaskCollection {
  #user = '';

  #tasks;

  constructor(tasks) {
    this.#tasks = tasks;
  }

  addAll(someTasks) {
    const validTask = someTasks.filter((item) => Task.validate(item));
    this.#tasks = [...this.#tasks ?? [], ...validTask];
    return someTasks.filter((item) => !Task.validate(item));
  }

  set user(userValue) {
    this.#user = userValue;
  }

  get user() {
    return this.#user;
  }

  get tasks() {
    return this.#tasks;
  }

  getPage(skip = 0, top = 10, filter = {}) {
    function sortCollection(array) {
      array.sort((a, b) => b.createdAt - a.createdAt);
      return array;
    }
    const {
      assignee: filterAssignee,
      dateFrom: filterdateFrom,
      dateTo: filterdateTo,
      status: filterStatus,
      priority: filterPriority,
      isPrivate: filterIsPrivate,
      description: filterDescription,
    } = filter;
    let result = [...this.#tasks];
    if (filterAssignee !== undefined) {
      result = result.filter((item) => item.assignee.includes(filterAssignee));
    }
    if (filterdateFrom !== undefined) {
      result = result.filter(
        (item) => item.createdAt >= new Date(filterdateFrom),
      );
    }
    if (filterdateTo !== undefined) {
      result = result.filter(
        (item) => item.createdAt <= new Date(filterdateTo),
      );
    }
    if (filterStatus !== undefined) {
      result = result.filter((item) => item.status === filterStatus);
    }
    if (filterPriority !== undefined) {
      result = result.filter((item) => item.priority === filterPriority);
    }
    if (filterIsPrivate !== undefined) {
      result = result.filter((item) => item.isPrivate === filterIsPrivate);
    }
    if (filterDescription !== undefined) {
      result = result.filter((item) => item.description.includes(filterDescription));
    }
    const sortedArr = sortCollection(result).slice(skip, top + skip);
    return sortedArr;
  }

  get(id) {
    const index = this.#tasks.findIndex((item) => item.id === id);
    if (index >= 0) {
      return this.#tasks[index];
    }
    return false;
  }

  add(task={}) {
    const{name, description, assignee,status,priority, isPrivate,createdAt}=task;
    const newTask=new Task(getUniqId(),description,name,status,priority,isPrivate,[],assignee,createdAt)
    if (Task.validate(newTask)) {
      this.#tasks.push(newTask);
      return true;
    }
    return false;
  }

  edit(id, task) {
    const editTask = this.get(id);

    if (editTask.assignee === this.#user) {
      if (task.assignee !== undefined) {
        editTask.assignee = task.assignee;
      }
      if (task.name !== undefined) {
        editTask.name = task.name;
      }
      if (task.description !== undefined) {
        editTask.description = task.description;
      }
      if (task.status !== undefined) {
        editTask.status = task.status;
      }
      if (task.priority !== undefined) {
        editTask.priority = task.priority;
      }
      if (task.isPrivate !== undefined) {
        editTask.isPrivate = task.isPrivate;
      }
      return Task.validate(editTask);
    }
    return false;
  }

  removeTask(id) {
    const deletedTask = this.get(id);
    let index;

    if (deletedTask.assignee === this.user) {
      index = this.#tasks.findIndex((item) => item.id === id);
      this.#tasks = this.#tasks.filter((item, i) => i !== index);
      return true;
    }
    return false;
  }

  addComment(id, text) {
    const newComm = new Comment(text);
    const task = this.get(id);
    if (Comment.validate(newComm)) {
      task.comments.push(newComm);
      return true;
    }
    return false;
  }

  clear() {
    this.#tasks = [];
  }
}
export default TaskCollection;

// const col=new TaskCollection();
// const sub=tasks.map((item)=>{return new Task(item.id,item.description,item.name,item.status,item.priority,item.isPrivate,item.comments,item.assignee,item.createdAt)});
// const tasks1=col.addAll(sub);
