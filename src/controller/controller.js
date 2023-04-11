/* eslint-disable import/named */
import { TaskCollection } from '../model/index.js';
import {
  FilterView,
  HeaderView,
  TaskFeedView,
  TaskView,
  LoginView, RegistView, NewTaskView,
} from '../view/index.js';
import tasks from '../model/Tasks.js';

const collection = new TaskCollection(tasks);

class Controller {
  collection = new TaskCollection(tasks);

  headerView = new HeaderView('header');

  filterView = new FilterView('filters');

  taskFeedView = new TaskFeedView('cards');

  taskView = new TaskView('task');

   registView = new RegistView('regist');

  // loginView=new LoginView('login');

  newTaskView = new NewTaskView('newTask');

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
    this.taskView.display(task, this.collection.user);
  }

  getFeed(skip, top, filter) {
    const collect = this.collection.getPage(skip, top, filter);
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

  showRegistPage(user) {
    this.registView.display(user);
  }

  showLoginPage(id) {
    // this.loinView.display(this.collection.user);
  }

  showNewTaskPage(user) {
    this.newTaskView.display(this.collection.tasks, user);
  }
}
export default Controller;
