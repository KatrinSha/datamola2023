class TaskView {
  id;

  constructor(containerId) {
    this.id = containerId;
  }

  display(task, user, toMainPage) {
    const taskPage = document.createElement('section');

    taskPage.classList.add('task');
    taskPage.setAttribute('id', this.id);
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task__wrapper', 'wrapper');
    // -------------link and button
    const pathTo = document.createElement('div');
    pathTo.classList.add('path-to');
    const path = document.createElement('div');
    path.classList.add('path');
    const linkToMain = document.createElement('a');
    linkToMain.setAttribute('href', '');
    linkToMain.textContent = 'Main';
    const icoArrowBack = document.createElement('span');
    icoArrowBack.classList.add('ico', 'arrow-back_dark');
    const linkToTask = document.createElement('a');
    linkToTask.setAttribute('href', '');
    linkToTask.textContent = 'Task';
    const buttonToMain = document.createElement('button');
    buttonToMain.classList.add('button__to-main');
    buttonToMain.textContent = 'Main page';
    const icoArrowBackToMain = document.createElement('span');
    icoArrowBackToMain.classList.add('ico', 'arrow-back');
    buttonToMain.append(icoArrowBackToMain);

    path.append(linkToMain, icoArrowBack, linkToTask);
    pathTo.append(path, buttonToMain);

    // --------TASK
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task__container');
    const taskBox = document.createElement('div');
    const statusWrapper = document.createElement('div');
    const cardStatus = document.createElement('div');

    statusWrapper.classList.add('status__wrapper');
    cardStatus.classList.add('task__status');

    statusWrapper.textContent = task.status;
    cardStatus.append(statusWrapper);

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('task__title');
    cardTitle.textContent = task.name;

    const cardPriority = document.createElement('div');
    cardPriority.classList.add('task__priority');
    const priorityWrapper = document.createElement('div');
    priorityWrapper.classList.add('task__wrapper');
    priorityWrapper.textContent = task.priority;
    cardPriority.append(priorityWrapper);
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('task__description');
    cardDescription.textContent = task.description;
    const cardAssignee = document.createElement('div');
    cardAssignee.classList.add('task__assignee');
    cardAssignee.textContent = task.assignee;
    const cardDate = document.createElement('div');
    cardDate.classList.add('task__date');
    cardDate.textContent = `${task.createdAt.getFullYear()}-${
      task.createdAt.getMonth() + 1
    }-${task.createdAt.getDate()} ${task.createdAt
      .toLocaleTimeString()
      .slice(0, -3)}`;
    const cardComments = document.createElement('div');
    cardComments.classList.add('task__comments');
    cardComments.textContent = task.comments.length;
    const comments = document.createElement('span');
    comments.classList.add('ico', 'comments');
    cardComments.append(comments);
    const cardPrivate = document.createElement('div');
    cardPrivate.classList.add('task__private');
    if (task.isPrivate) {
      cardPrivate.textContent = 'Private';
    }

    const cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.classList.add('task__delete-button');
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('ico', 'delete');
    cardDeleteBtn.append(deleteBtn);
    const cardEditBtn = document.createElement('button');
    cardEditBtn.classList.add('task__edit-button');
    cardEditBtn.textContent = 'Edit';
    const editBtn = document.createElement('span');
    editBtn.classList.add('ico', 'edit');
    if (user === '') {
      cardDeleteBtn.setAttribute('disabled', 'disabled');
      cardEditBtn.setAttribute('disabled', 'disabled');
    }
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
      username.textContent = com.author;
      const commentDate = document.createElement('div');
      commentDate.classList.add('comment__date');
      commentDate.textContent = `${com.createdAt.getFullYear()}-${
        com.createdAt.getMonth() + 1
      }-${com.createdAt.getDate()} ${com.createdAt
        .toLocaleTimeString()
        .slice(0, -3)}`;
      const commentText = document.createElement('div');
      commentText.classList.add('comment__text');
      commentText.textContent = com.text;

      comment.append(username, commentDate, commentText);
      commentsBox.append(comment);
    });

    const formComm = document.createElement('form');

    formComm.classList.add('comment__form');
    formComm.setAttribute('method', 'post');
    formComm.setAttribute('action', ' ');

    const commInput = document.createElement('input');
    commInput.classList.add('comment__input');
    commInput.setAttribute('placeholder', 'Add comment...');

    const addCommBtn = document.createElement('button');
    addCommBtn.classList.add('submit');
    addCommBtn.textContent = 'Enter';

    formComm.prepend(commInput, addCommBtn);

    taskContainer.append(commentsBox, formComm);
    taskWrapper.append(pathTo, taskContainer);
    taskPage.append(taskWrapper);
    const cards = document.querySelector('#cards');
    cards.replaceWith(taskPage);
    const filters = document.querySelector('.filters');
    filters.remove();
    const link = document.querySelector('link');
    link.setAttribute('href', './UI/css/styles_task.css');

    buttonToMain.addEventListener('click', toMainPage);
    buttonToMain.addEventListener('click', () => {
      link.setAttribute('href', './UI/css/styles_main-row.css');
    });
  }
}
export default TaskView;
