import { TaskCollection, Task, Comment } from "./model/index.js";
import { FilterView, HeaderView, TaskFeedView, TaskView } from "../view";

class Controller {
  constructor(
    TaskCollection,
    Task,
    Comment,
    FilterView,
    HeaderView,
    TaskFeedView,
    TaskView
  ) {
    this.TaskCollection = TaskCollection;
  }

  editTask(id, task) {
    return array.edit(id, task);
  }

  setCurrentUser(user) {
    collection.user = user;
    headerView.display(user);
  }

  addTask(task) {
    collection.add(task);
  }

  showTask(id) {
    console.log(id);
    const task = collection.get(id);
    taskView.display(task);
  }
  getFeed(skip, top, filter) {
    const collect = collection.getPage(skip, top, filter);
    taskFeedView.display(collect);
  }

  removeTask(id) {
    const collect = collection.removeTask(id);
    taskFeedView.display(collect);
  }
}
export default Controller;
