class TaskFeedView {
    id;
  
    constructor(containerId) {
      this.id = containerId;
    }
  
    display(collect) {
      const array = collect;
      const headerButton = document.querySelector('.header__button');
      const container = document.getElementById(this.id);
      // --------------create column's header
      // TODO
      const cardsContainerTodo = document.createElement('div');
      cardsContainerTodo.classList.add('cards-container', 'todo');
      const cardsInfoTodo = document.createElement('div');
      cardsInfoTodo.classList.add('cards__info');
      const cardsCountTodo = document.createElement('div');
      cardsCountTodo.classList.add('cards__count');
      cardsCountTodo.innerText = 'count';
      const cardsTitleTodo = document.createElement('div');
      cardsTitleTodo.classList.add('cards__title');
      cardsTitleTodo.innerText = 'TO DO';
      cardsInfoTodo.append(cardsCountTodo, cardsTitleTodo);
      cardsContainerTodo.append(cardsInfoTodo);
      container.append(cardsContainerTodo);
  
      // INPROGRESS
      const cardsContainerInprogress = document.createElement('div');
      cardsContainerInprogress.classList.add('cards-container', 'inprogress');
      const cardsInfoInprogress = document.createElement('div');
      cardsInfoInprogress.classList.add('cards__info');
      const cardsCountInprogress = document.createElement('div');
      cardsCountInprogress.classList.add('cards__count');
      cardsCountInprogress.innerText = 'count';
      const cardsTitleInprogress = document.createElement('div');
      cardsTitleInprogress.classList.add('cards__title');
      cardsTitleInprogress.innerText = 'IN PROGRESS';
      cardsInfoInprogress.append(cardsCountInprogress, cardsTitleInprogress);
      cardsContainerInprogress.append(cardsInfoInprogress);
      container.append(cardsContainerInprogress);
  
      // COMPLETE
      const cardsContainerComplete = document.createElement('div');
      cardsContainerComplete.classList.add('cards-container', 'complete');
      const cardsInfoComplete = document.createElement('div');
      cardsInfoComplete.classList.add('cards__info');
      const cardsCountComplete = document.createElement('div');
      cardsCountComplete.classList.add('cards__count');
      cardsCountComplete.innerText = 'count';
      const cardsTitleComplete = document.createElement('div');
      cardsTitleComplete.classList.add('cards__title');
      cardsTitleComplete.innerText = 'COMPLETE';
      cardsInfoComplete.append(cardsCountComplete, cardsTitleComplete);
      cardsContainerComplete.append(cardsInfoComplete);
      container.append(cardsContainerComplete);
  
      // create tasks boxes
      const todoBox = document.createElement('div');
      todoBox.classList.add('card__wrapper-to768');
      todoBox.setAttribute('id', 'todo');
      const inprogressBox = document.createElement('div');
      inprogressBox.classList.add('card__wrapper-to768');
      inprogressBox.setAttribute('id', 'inprogress');
      const completeBox = document.createElement('div');
      completeBox.classList.add('card__wrapper-to768');
      completeBox.setAttribute('id', 'complete');
  
      let todoCount = 0;
      let inprogressCount = 0;
      let completeCount = 0;
      array.forEach((item) => {
        // create task's box
        const box = document.createElement('div');
        box.classList.add('card', 'card__box');
  
        const statusWrapper = document.createElement('div');
  
        const cardStatus = document.createElement('div');
        statusWrapper.classList.add('status__wrapper');
        cardStatus.classList.add('card__status');
        statusWrapper.innerText = item.status;
        cardStatus.append(statusWrapper);
  
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card__title');
        cardTitle.innerText = item.name;
  
        const cardPriority = document.createElement('div');
        cardPriority.classList.add('card__priority');
  
        const priorityWrapper = document.createElement('div');
        priorityWrapper.classList.add('priority__wrapper');
        priorityWrapper.innerText = item.priority;
        cardPriority.append(priorityWrapper);
  
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card__description');
        cardDescription.innerText = item.description;
  
        const cardAssignee = document.createElement('div');
        cardAssignee.classList.add('card__assignee');
        cardAssignee.innerText = item.assignee;
  
        const cardDate = document.createElement('div');
        cardDate.classList.add('card__date');
        cardDate.innerText = `${item.createdAt.getFullYear()}-${
          item.createdAt.getMonth() + 1
        }-${item.createdAt.getDate()} ${item.createdAt
          .toLocaleTimeString()
          .slice(0, -3)}`;
  
        const cardComments = document.createElement('div');
        cardComments.classList.add('card__comments');
        cardComments.innerText = item.comments.length;
  
        const comments = document.createElement('span');
        comments.classList.add('ico', 'comments');
        cardComments.append(comments);
  
        const cardPrivate = document.createElement('div');
        cardPrivate.classList.add('card__private');
        if (item.isPrivate) {
          cardPrivate.innerText = 'Private';
        }
  
        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.classList.add('card__delete-button');
  
        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('ico', 'delete');
        cardDeleteBtn.append(deleteBtn);
  
        const cardEditBtn = document.createElement('button');
        cardEditBtn.classList.add('card__edit-button');
        cardEditBtn.innerText = 'Edit';
  
        const editBtn = document.createElement('span');
        editBtn.classList.add('ico', 'edit');
        cardEditBtn.append(editBtn);
        box.append(
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
        // if the user is not logged in
        if (collect.user == '') {
          cardEditBtn.style.display = 'none';
          cardDeleteBtn.style.display = 'none';
          headerButton.innerText = 'Log in';
        }
        // access to edit and delete btn
        if (collect.user !== item.assignee) {
          cardEditBtn.style.opacity = '50%';
          cardDeleteBtn.style.opacity = '50%';
        }
        if (collect.user == '' && item.isPrivate) {
          box.style.display = 'none';
  
          if (item.status === 'To Do' && !item.isPrivate) {
            todoCount += 1;
          }
          if (item.status === 'In progress' && !item.isPrivate) {
            inprogressCount += 1;
          }
          if (item.status === 'Complete' && !item.isPrivate) {
            completeCount += 1;
          }
        } else if (item.status === 'To Do') {
          todoCount += 1;
          todoBox.append(box);
        }
        if (item.status === 'In progress') {
          inprogressCount += 1;
          inprogressBox.append(box);
        }
        if (item.status === 'Complete') {
          completeCount += 1;
          completeBox.append(box);
        }
      });
      cardsCountTodo.innerText = todoCount;
      cardsCountInprogress.innerText = inprogressCount;
      cardsContainerComplete.innerText = completeCount;
      cardsContainerTodo.append(todoBox);
      cardsContainerInprogress.append(inprogressBox);
      cardsContainerComplete.append(completeBox);
    }
  }
  export default TaskFeedView;