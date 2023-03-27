class TaskView {
    id;
  
    constructor(containerId) {
      this.id = containerId;
    }
  
    display(task) {
      const taskContainer = document.getElementById(this.id);
      console.log(taskContainer);
      const taskBox = document.createElement('div');
      console.log('lklklklkl');
      const statusWrapper = document.createElement('div');
      const cardStatus = document.createElement('div');
  
      statusWrapper.classList.add('status__wrapper');
      cardStatus.classList.add('task__status');
      console.log(task.status);
      statusWrapper.innerText = task.status;
      cardStatus.append(statusWrapper);
  
      const cardTitle = document.createElement('div');
      cardTitle.classList.add('task__title');
      cardTitle.innerText = task.name;
  
      const cardPriority = document.createElement('div');
      cardPriority.classList.add('task__priority');
      const priorityWrapper = document.createElement('div');
      priorityWrapper.classList.add('task__wrapper');
      priorityWrapper.innerText = task.priority;
      cardPriority.append(priorityWrapper);
      const cardDescription = document.createElement('div');
      cardDescription.classList.add('task__description');
      cardDescription.innerText = task.description;
      const cardAssignee = document.createElement('div');
      cardAssignee.classList.add('task__assignee');
      cardAssignee.innerText = task.assignee;
      const cardDate = document.createElement('div');
      cardDate.classList.add('task__date');
      cardDate.innerText = `${task.createdAt.getFullYear()}-${task.createdAt.getMonth() + 1}-${task.createdAt.getDate()} ${task.createdAt.toLocaleTimeString().slice(0, -3)}`;
      const cardComments = document.createElement('div');
      cardComments.classList.add('task__comments');
      cardComments.innerText = task.comments.length;
      const comments = document.createElement('span');
      comments.classList.add('ico', 'comments');
      cardComments.append(comments);
      const cardPrivate = document.createElement('div');
      cardPrivate.classList.add('task__private');
      if (task.isPrivate) {
        cardPrivate.innerText = 'Private';
      }
  
      const cardDeleteBtn = document.createElement('button');
      cardDeleteBtn.classList.add('task__delete-button');
      const deleteBtn = document.createElement('span');
      deleteBtn.classList.add('ico', 'delete');
      cardDeleteBtn.append(deleteBtn);
      const cardEditBtn = document.createElement('button');
      cardEditBtn.classList.add('task__edit-button');
      cardEditBtn.innerText = 'Edit';
      const editBtn = document.createElement('span');
      editBtn.classList.add('ico', 'edit');
      cardEditBtn.append(editBtn);
      taskBox.append(
        cardStatus,
        cardTitle,
        cardPriority,
        cardDescription,
        cardAssignee,
        cardDate,
        cardComments,
        cardPrivate,
        cardDeleteBtn,
        cardEditBtn,
      );
      taskBox.classList.add('task__box');
      taskContainer.prepend(taskBox);
  
      const commentsBox = document.createElement('div');
      commentsBox.classList.add('comments-box');
      task.comments.forEach((com) => {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        const username = document.createElement('div');
        username.classList.add('username');
        username.innerText = com.author;
        const commentDate = document.createElement('div');
        commentDate.classList.add('comment__date');
        commentDate.innerText = `${com.createdAt.getFullYear()}-${com.createdAt.getMonth() + 1}-${com.createdAt.getDate()} ${com.createdAt.toLocaleTimeString().slice(0, -3)}`;
        const commentText = document.createElement('div');
        commentText.classList.add('comment__text');
        commentText.innerText = com.text;
  
        comment.append(username, commentDate, commentText);
        commentsBox.append(comment);
      });
     
      taskBox.insertAdjacentElement('afterend', commentsBox);
    }
  }