class NewTaskView {
  id;

  constructor(id) {
    this.id = id;
  }

  display(array, user) {
    const modal = document.createElement('section');
    modal.classList.add('modal', 'wrapper', 'disabled');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const modalTitle = document.createElement('h3');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'New Task';

    const button = document.createElement('button');
    button.classList.add('close');

    const close = document.createElement('span');
    close.textContent = 'X';
    button.append(close);
    modalHeader.append(modalTitle, button);
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const taskForm = document.createElement('form');
    taskForm.classList.add('task__form');
    taskForm.setAttribute('method', 'post');
    taskForm.setAttribute('action', '');

    const titleLabel = document.createElement('label');
    titleLabel.classList.add('label-for-title');
    titleLabel.setAttribute('for', 'taskTitle');
    titleLabel.innerText = 'Title';

    const titleInput = document.createElement('input');
    titleInput.classList.add('input-title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Type title...');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'taskTitle');
    titleInput.setAttribute('required', '');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('label-for-description');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerText = 'Description';

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('input-description');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('placeholder', 'Type description...');
    descriptionInput.setAttribute('maxlength', '280');
    descriptionInput.setAttribute('required', '');

    const assigneeDiv = document.createElement('div');
    assigneeDiv.classList.add('task__assignee', 'select-box');

    const assigneeLabel = document.createElement('label');
    assigneeLabel.setAttribute('for', 'taskAssignee');
    assigneeLabel.innerText = 'Assignee:';

    const assigneeSelect = document.createElement('select');
    assigneeSelect.setAttribute('id', 'taskAssignee');
    assigneeSelect.setAttribute('name', 'assignee');

    const assigneeOption = document.createElement('option');
    assigneeOption.setAttribute('value', 'Livia Aminoff');
    assigneeOption.innerText = 'Livia Aminoff';

    const nameArray = [];
    array.forEach((item) => {
      nameArray.push(item.assignee);
    });
    new Set([...nameArray]).forEach((item) => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      if (item === user) {
        option.setAttribute('selected', 'selected');
      }
      assigneeSelect.append(option);
    });

    assigneeSelect.appendChild(assigneeOption);

    const assigneeOptional = document.createElement('div');
    assigneeOptional.classList.add('optional');
    assigneeOptional.innerText = 'optional';

    assigneeDiv.append(assigneeLabel, assigneeSelect, assigneeOptional);

    const statusDiv = document.createElement('div');
    statusDiv.classList.add('task__status', 'select-box');

    const statusLabel = document.createElement('label');
    statusLabel.setAttribute('for', 'taskStatus');
    statusLabel.innerText = 'Status:';

    const statusSelect = document.createElement('select');
    statusSelect.setAttribute('id', 'taskStatus');
    statusSelect.setAttribute('name', 'status');

    const statusOption1 = document.createElement('option');
    statusOption1.setAttribute('value', 'To Do');
    statusOption1.innerText = 'To Do';
    const statusOption2 = document.createElement('option');
    statusOption2.setAttribute('value', 'In progress');
    statusOption2.innerText = 'In progress';
    const statusOption3 = document.createElement('option');
    statusOption3.setAttribute('value', 'Complete');
    statusOption3.innerText = 'Complete';

    statusSelect.append(statusOption1, statusOption2, statusOption3);

    const statusOptional = document.createElement('div');
    statusOptional.classList.add('optional');
    statusOptional.innerText = 'optional';

    statusDiv.append(statusLabel, statusSelect, statusOptional);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task__priority', 'select-box');

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'taskPriority');
    priorityLabel.innerText = 'Priority:';

    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'taskPriority');
    prioritySelect.setAttribute('name', 'priority');
    prioritySelect.setAttribute('required', '');

    const priorityOption1 = document.createElement('option');
    priorityOption1.setAttribute('value', 'Low');
    priorityOption1.innerText = 'Low';
    const priorityOption2 = document.createElement('option');
    priorityOption2.setAttribute('value', 'Medium');
    priorityOption2.innerText = 'Medium';
    const priorityOption3 = document.createElement('option');
    priorityOption3.setAttribute('value', 'High');
    priorityOption3.innerText = 'High';

    prioritySelect.append(priorityOption1, priorityOption2, priorityOption3);
    priorityDiv.append(priorityLabel, prioritySelect);

    const privacyDiv = document.createElement('div');
    privacyDiv.classList.add('task__privacy', 'select-box');

    const publicInput = document.createElement('input');
    publicInput.classList.add('input-privacy');
    publicInput.setAttribute('type', 'radio');
    publicInput.setAttribute('name', 'Privacy');
    publicInput.setAttribute('id', 'taskPublic');
    publicInput.setAttribute('checked', 'checked');
    publicInput.setAttribute('value', 'false');
    const publicLabel = document.createElement('label');
    publicLabel.classList.add('label-for-public');
    publicLabel.setAttribute('for', 'taskPablic');
    publicLabel.textContent = 'Public';

    const privateInput = document.createElement('input');
    privateInput.classList.add('input-privacy');
    privateInput.setAttribute('type', 'radio');
    privateInput.setAttribute('name', 'Privacy');
    privateInput.setAttribute('id', 'taskPrivate');
    privateInput.setAttribute('value', 'true');
    const privateLabel = document.createElement('label');
    privateLabel.classList.add('label-for-public');
    privateLabel.setAttribute('for', 'taskPublic');
    privateLabel.textContent = 'Private';
    const privateOptional = document.createElement('div');
    privateOptional.classList.add('optional');
    privateOptional.innerText = 'optional';

    privacyDiv.append(publicInput, publicLabel, privateInput, privateLabel, privateOptional);

    const formsButtons = document.createElement('div');
    formsButtons.classList.add('forms-buttons');
    const btnReset = document.createElement('button');
    btnReset.classList.add('reset');
    btnReset.setAttribute('disabled', 'disabled');
    btnReset.textContent = 'Reset';
    const btnSave = document.createElement('button');
    btnSave.classList.add('submit');
    // btnSave.setAttribute('disabled','disabled');
    btnSave.textContent = 'Save';

    formsButtons.append(btnReset, btnSave);
    taskForm.append(titleLabel, titleInput, descriptionLabel, descriptionInput, assigneeDiv, statusDiv, priorityDiv, privacyDiv, formsButtons);
    modalBody.append(taskForm);
    modalContent.append(modalHeader, modalBody);
    modal.append(modalContent);
    const cards = document.querySelector('#cards');
    cards.insertAdjacentElement('afterend', modal);
  }
}
export default NewTaskView;
