/* eslint-disable import/named */
import { TaskCollection } from '../model/index.js';
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

  skip = 0;

  top = 10;

  filter = {};

  editTask(id, task) {
    this.collection.edit(id, task);
    this.taskFeedView.display(tasks, this.collection.user);
  }

  addTask(task) {
    this.collection.add(task);
    this.taskFeedView.display(tasks, this.collection.user);
  }

  setCurrentUser(user) {
    this.collection.user = user;
    this.headerView.display(user);
  }

  showTask(id) {
    const task = this.collection.get(id);
    this.taskView.display(task);
  }

  getFeed(skip, top, filter) {
    const collect = collection.getPage(skip, top, filter);
    this.taskFeedView.display(collect, this.collection.user);
  }

  getFilter() {
    this.filterView.display(this.collection.tasks);
  }

  loadAllTasks() {
    this.taskFeedView.display(this.collection.tasks, this.collection.user);
  }

  removeTask(id) {
    this.collection.removeTask(id);
    this.taskFeedView.display(tasks, this.collection.user);
  }
}
export default Controller;
