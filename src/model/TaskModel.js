function getUniqId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  class Task {
    #id;
  
    #createdAt;
  
    name;
  
    description;
  
    status;
  
    priority;
  
    isPrivate;
  
    comments;
  
    assignee;
  
    constructor(
      name,
      description,
      status,
      priority,
      isPrivate,
      comments,
      assignee,
    ) {
      this.#id = getUniqId();
      this.name = name;
      this.description = description;
      this.status = status;
      this.priority = priority;
      this.isPrivate = isPrivate;
      this.comments = comments;
      this.assignee = assignee;
      this.#createdAt = new Date();
    }
  
    get id() {
      return this.#id;
    }
  
    get createdAt() {
      return this.#createdAt;
    }
  
    static validate(task) {
      function isIdvalid() {
        return typeof task.id === 'string' && task.id !== '';
      }
  
      function isNameValid() {
        return (
          typeof task.name === 'string'
            && task.name !== ''
            && task.name.length <= 100
        );
      }
  
      function isDescriptionValid() {
        return (
          typeof task.description === 'string'
            && task.description !== ''
            && task.description.length <= 280
        );
      }
  
      function isDateValid() {
        return task.createdAt instanceof Date;
      }
  
      function isAssigneeValid() {
        return typeof task.assignee === 'string' && task.assignee !== '';
      }
  
      function isStatusValid() {
        return (
          typeof task.status === 'string'
            && task.status !== ''
            && ['To Do', 'In progress', 'Complete'].includes(task.status)
        );
      }
  
      function isPriorityValid() {
        return (
          typeof task.priority === 'string'
            && task.priority !== ''
            && ['Low', 'Medium', 'High'].includes(task.priority)
        );
      }
  
      function isPrivateValid() {
        return typeof task.isPrivate === 'boolean';
      }
  
      function isArrayValid() {
        return Array.isArray(task.comments);
      }
  
      return (
        isIdvalid()
          && isNameValid()
          && isDescriptionValid()
          && isDateValid()
          && isAssigneeValid()
          && isStatusValid()
          && isPriorityValid()
          && isPrivateValid()
          && isArrayValid()
      );
    }
  }
  
  // const task1 = new Task('NameNameName', 'Description', 'To Do', 'Low', true, [], 'assignee', 'Kate Kate');
  // Task.validate(task1);
  // console.log(task1);
  
  class Comment {
    user = 'Иванов Иван';
  
    #id;
  
    #createdAt;
  
    #author;
  
    constructor(text) {
      this.text = text;
      this.#id = getUniqId();
      this.#createdAt = new Date();
      this.#author = this.user;
    }
  
    get id() {
      return this.#id;
    }
  
    get createdAt() {
      return this.#createdAt;
    }
  
    get author() {
      return this.#author;
    }
  
    static validate(com) {
      function isIdValid() {
        return typeof com.id === 'string' && com.id !== '';
      }
  
      function isTextValid() {
        return typeof com.text === 'string' && com.text.length <= 280;
      }
  
      function isDateValid() {
        return com.createdAt instanceof Date;
      }
  
      function isAuthorvalid() {
        return typeof com.author === 'string' && com.author !== '';
      }
      console.log(
        isIdValid() && isTextValid() && isDateValid() && isAuthorvalid(),
      );
      return isIdValid() && isTextValid() && isDateValid() && isAuthorvalid();
    }
  }
  
  // const com = new Comment("ftghfyktgykt", "lala");
  // com.print()
  // Comment.validate(com)
  
  class TaskCollection {
    #user = '';
  
    #tasks = tasks;
  
    tasks1 = tasks;
  
    constructor(tasks) {
      this.#tasks = tasks;
    }
  
    addAll(someTasks) {
      const validTask = someTasks.filter((item) => Task.validate(item));
      this.#tasks = [...this.#tasks, ...validTask];
      return someTasks.filter((item) => !Task.validate(item));
    }
  
    set user(userValue) {
      this.#user = userValue;
    }
  
    get user() {
      return this.#user;
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
      const index = tasks.findIndex((item) => item.id === id);
      if (index >= 0) {
        console.log(tasks[index]);
        return tasks[index];
      }
      return false;
    }
  
    add(task) {
      console.log(task);
      if (Task.validate(task)) {
        this.#tasks.push(task);
        return true;
      }
      return false;
    }
  
    edit(id, name, description, assignee, status, priority, isPrivate = false) {
      const editTask = this.get(id);
      console.log(editTask);
      if (editTask.assignee === this.user) {
        if (assignee !== undefined) {
          editTask.assignee = assignee;
        }
        if (name !== undefined) {
          editTask.name = name;
        }
        if (description !== undefined) {
          editTask.description = description;
        }
        if (status !== undefined) {
          editTask.status = status;
        }
        if (priority !== undefined) {
          editTask.priority = priority;
        }
        if (isPrivate !== undefined) {
          editTask.isPrivate = isPrivate;
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
        this.#tasks.splice(index, 1);
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