class NewTaskView {
    id;

  constructor(id) {
    this.id = id;
  }

    display(user) {
        const modalBody = document.createElement("div");
modalBody.classList.add("modal-body");

const taskForm = document.createElement("form");
taskForm.classList.add("task__form");
taskForm.setAttribute("method", "post");
taskForm.setAttribute("action", "");

const titleLabel = document.createElement("label");
titleLabel.classList.add("label-for-title");
titleLabel.setAttribute("for", "taskTitle");
titleLabel.innerText = "Title";

const titleInput = document.createElement("input");
titleInput.classList.add("input-title");
titleInput.setAttribute("type", "text");
titleInput.setAttribute("placeholder", "Type title...");
titleInput.setAttribute("name", "title");
titleInput.setAttribute("id", "taskTitle");
titleInput.setAttribute("required", "");

const descriptionLabel = document.createElement("label");
descriptionLabel.classList.add("label-for-description");
descriptionLabel.setAttribute("for", "description");
descriptionLabel.innerText = "Description";

const descriptionInput = document.createElement("input");
descriptionInput.classList.add("input-description");
descriptionInput.setAttribute("type", "text");
descriptionInput.setAttribute("id", "description");
descriptionInput.setAttribute("name", "description");
descriptionInput.setAttribute("placeholder", "Type description...");
descriptionInput.setAttribute("maxlength", "280");
descriptionInput.setAttribute("required", "");

const assigneeDiv = document.createElement("div");
assigneeDiv.classList.add("task__assignee", "select-box");

const assigneeLabel = document.createElement("label");
assigneeLabel.setAttribute("for", "taskAssignee");
assigneeLabel.innerText = "Assignee:";

const assigneeSelect = document.createElement("select");
assigneeSelect.setAttribute("id", "taskAssignee");
assigneeSelect.setAttribute("name", "assignee");

const assigneeOption = document.createElement("option");
assigneeOption.setAttribute("value", "Livia Aminoff");
assigneeOption.innerText = "Livia Aminoff";

assigneeSelect.appendChild(assigneeOption);

const assigneeOptional = document.createElement("div");
assigneeOptional.classList.add("optional");
assigneeOptional.innerText = "optional";

assigneeDiv.appendChild(assigneeLabel);
assigneeDiv.appendChild(assigneeSelect);
assigneeDiv.appendChild(assigneeOptional);

const statusDiv = document.createElement("div");
statusDiv.classList.add("task__status", "select-box");

const statusLabel = document.createElement("label");
statusLabel.setAttribute("for", "taskStatus");
statusLabel.innerText = "Status:";

const statusSelect = document.createElement("select");
statusSelect.setAttribute("id", "taskStatus");
statusSelect.setAttribute("name", "status");

const statusOption = document.createElement("option");
statusOption.setAttribute("value", "Private");
statusOption.innerText = "Complete";

statusSelect.appendChild(statusOption);

const statusOptional = document.createElement("div");
statusOptional.classList.add("optional");
statusOptional.innerText = "optional";

statusDiv.appendChild(statusLabel);
statusDiv.appendChild(statusSelect);
statusDiv.appendChild(statusOptional);

const priorityDiv = document.createElement("div");
priorityDiv.classList.add("task__priority", "select-box");

const priorityLabel = document.createElement("label");
priorityLabel.setAttribute("for", "taskPriority");
priorityLabel.innerText = "Priority:";

const prioritySelect = document.createElement("select");
prioritySelect.setAttribute("id", "taskPriority");
prioritySelect.setAttribute("name", "priority");
prioritySelect.setAttribute("required", "");

const priorityOption = document.createElement("option");
priorityOption.setAttribute("value", "Low");
priorityOption.innerText = "Low";

prioritySelect.appendChild(priorityOption);

priorityDiv.appendChild(priorityLabel);
priorityDiv.appendChild(prioritySelect);

const privacyDiv = document.createElement("div");
privacyDiv.classList.add("task__privacy", "select-box");

const publicInput = document.createElement("input");
publicInput.classList.add("input-public");
publicInput.setAttribute("type",
    }
}
export default NewTaskView;
