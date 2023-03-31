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
  export default Task;