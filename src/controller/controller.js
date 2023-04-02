/* eslint-disable import/named */
import { TaskCollection, Task, Comment } from '../model/index.js';
import {
  FilterView,
  HeaderView,
  TaskFeedView,
  TaskView,
} from '../view/index.js';
import tasks from '../model/Tasks.js';

const collection = new TaskCollection(tasks);

class Controller {
  collection = new TaskCollection(tasks);

  headerView = new HeaderView('header');

  filterView = new FilterView('filters');

  taskFeedView = new TaskFeedView('cards');

  taskView = new TaskView('task');

  editTask(id, task) {
    return array.edit(id, task);
  }

  setCurrentUser(user) {
    this.collection.user = user;
    console.log(this.collection.user);
    this.headerView.display(user);
  }

  addTask(task) {
    collection.add(task);
  }

  showTask(id) {
    console.log(id);
    console.log(this.collection);
    const task = this.collection.get(id);
    this.taskView.display(task);
  }

  getFeed(skip, top, filter) {
    const collect = collection.getPage(skip, top, filter);
    this.taskFeedView.display(collect);
  }

  removeTask(id) {
    const collect = collection.removeTask(id);
    taskFeedView.display(collect);
  }

  getFilter(array) {
    this.filterView.display(array);
    console.log(this.collection);
  }

  loadAllTasks(array) {
    this.taskFeedView.display(array);
  }
}
export default Controller;
// const headerView = new HeaderView('header');
// headerView.display('')
