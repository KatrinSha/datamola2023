class TaskFeedView {
  id;

  constructor(containerId) {
    this.id = containerId;
  }

  display(collect, user) {
    const array = collect;
    const headerButton = document.querySelector('.header__button');
    // -------------------------------------
    const cards = document.createElement('section');
    cards.classList.add('cards');
    cards.setAttribute('id', this.id);
    const cardsWrapper = document.createElement('div');
    cardsWrapper.classList.add('cards__wrapper', 'wrapper');
    cardsWrapper.setAttribute('id', 'cards__wrapper');
    const btnShowMore = document.createElement('button');
    btnShowMore.classList.add('button_show-more');
    btnShowMore.textContent = 'Show more task';

    // --------------create table's header
    const tableHeader1 = document.createElement('div');
    tableHeader1.classList.add('table__header');
    const tableHeader2 = document.createElement('div');
    tableHeader2.classList.add('table__header');
    const tableHeader3 = document.createElement('div');
    tableHeader3.classList.add('table__header');

    const arrHeaderTab = ['To Do', 'In progress', 'Complete'];
    arrHeaderTab.forEach((item) => {
      const tableName = document.createElement('div');
      tableName.classList.add('table__name');
      tableName.textContent = item;
      const tableStatus = document.createElement('div');
      tableStatus.classList.add('table__status');
      tableStatus.textContent = 'Status';
      const tableTitle = document.createElement('div');
      tableTitle.classList.add('table__title');
      tableTitle.textContent = 'Title';
      const tablePriority = document.createElement('div');
      tablePriority.classList.add('table__priority');
      tablePriority.textContent = 'Priority';
      const tableDiscription = document.createElement('div');
      tableDiscription.classList.add('table__discription');
      tableDiscription.textContent = 'Discription';
      const tableAssignee = document.createElement('div');
      tableAssignee.classList.add('table__assignee');
      tableAssignee.textContent = 'Assignee';
      const tableDate = document.createElement('div');
      tableDate.classList.add('table__date');
      tableDate.textContent = 'Date';
      const tableComments = document.createElement('div');
      tableComments.classList.add('table__comments');
      tableComments.textContent = 'Comments';
      const tablePrivacy = document.createElement('div');
      tablePrivacy.classList.add('table__privacy');
      tablePrivacy.textContent = 'Privacy';
      const tableEdit = document.createElement('div');
      tableEdit.classList.add('table__edit');
      tableEdit.textContent = 'Edit';
      const tableDelete = document.createElement('div');
      tableDelete.classList.add('table__delete');
      tableDelete.textContent = 'Delete';
      if (item === 'To Do') {
        tableHeader1.append(
          tableName,
          tableStatus,
          tableTitle,
          tablePriority,
          tableDiscription,
          tableAssignee,
          tableDate,
          tableComments,
          tablePrivacy,
          tableEdit,
          tableDelete,
        );
      }
      if (item === 'In progress') {
        tableHeader2.append(
          tableName,
          tableStatus,
          tableTitle,
          tablePriority,
          tableDiscription,
          tableAssignee,
          tableDate,
          tableComments,
          tablePrivacy,
          tableEdit,
          tableDelete,
        );
      }
      if (item === 'Complete') {
        tableHeader3.append(
          tableName,
          tableStatus,
          tableTitle,
          tablePriority,
          tableDiscription,
          tableAssignee,
          tableDate,
          tableComments,
          tablePrivacy,
          tableEdit,
          tableDelete,
        );
      }
    });

    // --------------create column's header
    // TODO
    const cardsContainerTodo = document.createElement('div');
    cardsContainerTodo.classList.add('cards-container', 'todo');
    const cardsInfoTodo = document.createElement('div');
    cardsInfoTodo.classList.add('cards__info');
    const cardsCountTodo = document.createElement('div');
    cardsCountTodo.classList.add('cards__count');
    cardsCountTodo.textContent = 'count';
    const cardsTitleTodo = document.createElement('div');
    cardsTitleTodo.classList.add('cards__title');
    cardsTitleTodo.textContent = 'TO DO';
    cardsInfoTodo.append(cardsCountTodo, cardsTitleTodo);
    cardsContainerTodo.append(cardsInfoTodo, tableHeader1);
    cardsWrapper.append(cardsContainerTodo);

    // INPROGRESS
    const cardsContainerInprogress = document.createElement('div');
    cardsContainerInprogress.classList.add('cards-container', 'inprogress');
    const cardsInfoInprogress = document.createElement('div');
    cardsInfoInprogress.classList.add('cards__info');
    const cardsCountInprogress = document.createElement('div');
    cardsCountInprogress.classList.add('cards__count');
    cardsCountInprogress.textContent = 'count';
    const cardsTitleInprogress = document.createElement('div');
    cardsTitleInprogress.classList.add('cards__title');
    cardsTitleInprogress.textContent = 'IN PROGRESS';
    cardsInfoInprogress.append(cardsCountInprogress, cardsTitleInprogress);
    cardsContainerInprogress.append(cardsInfoInprogress, tableHeader2);
    cardsWrapper.append(cardsContainerInprogress);

    // COMPLETE

    const cardsContainerComplete = document.createElement('div');
    cardsContainerComplete.classList.add('cards-container', 'complete');
    const cardsInfoComplete = document.createElement('div');
    cardsInfoComplete.classList.add('cards__info');
    const cardsCountComplete = document.createElement('div');
    cardsCountComplete.classList.add('cards__count');
    cardsCountComplete.textContent = 'count';
    const cardsTitleComplete = document.createElement('div');
    cardsTitleComplete.classList.add('cards__title');
    cardsTitleComplete.textContent = 'COMPLETE';
    cardsInfoComplete.append(cardsCountComplete, cardsTitleComplete);
    cardsContainerComplete.append(cardsInfoComplete, tableHeader3);
    cardsWrapper.append(cardsContainerComplete);

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
      statusWrapper.textContent = item.status;
      cardStatus.append(statusWrapper);

      const cardTitle = document.createElement('div');
      cardTitle.classList.add('card__title');
      cardTitle.textContent = item.name;

      const cardPriority = document.createElement('div');
      cardPriority.classList.add('card__priority');

      const priorityWrapper = document.createElement('div');
      priorityWrapper.classList.add('priority__wrapper');
      priorityWrapper.textContent = item.priority;
      cardPriority.append(priorityWrapper);

      const cardDescription = document.createElement('div');
      cardDescription.classList.add('card__description');
      cardDescription.textContent = item.description;

      const cardAssignee = document.createElement('div');
      cardAssignee.classList.add('card__assignee');
      cardAssignee.textContent = item.assignee;

      const cardDate = document.createElement('div');
      cardDate.classList.add('card__date');
      cardDate.textContent = `${item.createdAt.getFullYear()}-${
        item.createdAt.getMonth() + 1
      }-${item.createdAt.getDate()} ${item.createdAt
        .toLocaleTimeString()
        .slice(0, -3)}`;

      const cardComments = document.createElement('div');
      cardComments.classList.add('card__comments');
      cardComments.textContent = item.comments.length;

      const comments = document.createElement('span');
      comments.classList.add('ico', 'comments');
      cardComments.append(comments);

      const cardPrivate = document.createElement('div');
      cardPrivate.classList.add('card__private');
      if (item.isPrivate) {
        cardPrivate.textContent = 'Private';
      }

      const cardDeleteBtn = document.createElement('button');
      cardDeleteBtn.classList.add('card__delete-button');

      const deleteBtn = document.createElement('span');
      deleteBtn.classList.add('ico', 'delete');
      cardDeleteBtn.append(deleteBtn);

      const cardEditBtn = document.createElement('button');
      cardEditBtn.classList.add('card__edit-button');
      cardEditBtn.textContent = 'Edit';

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
      if (user == '' || user == null) {
        cardEditBtn.style.display = 'none';
        cardDeleteBtn.style.display = 'none';
        headerButton.textContent = 'Log in';
      }
      // access to edit and delete btn
      if (user !== item.assignee) {
        cardEditBtn.style.opacity = '50%';
        cardDeleteBtn.style.opacity = '50%';
      }
      if (user == '' && item.isPrivate) {
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
    cardsCountTodo.textContent = todoCount;
    cardsCountInprogress.textContent = inprogressCount;
    cardsCountComplete.textContent = completeCount;
    cardsContainerTodo.append(todoBox);
    cardsContainerInprogress.append(inprogressBox);
    cardsContainerComplete.append(completeBox);
    cards.append(cardsWrapper, btnShowMore);
    const main = document.querySelector('main');
    if (!main.hasChildNodes()) {
      main.append(cards);
    } else main.replaceWith(cards);

    const link = document.querySelector('link');
    link.setAttribute('href', '/UI/css/styles_main-row.css');

    const scriptReg = document.createElement('script');
    scriptReg.setAttribute('src', './src/row_table.js');
    scriptReg.setAttribute('type', 'module');
    const body = document.querySelector('body');
    body.append(scriptReg);
  }
}
export default TaskFeedView;
