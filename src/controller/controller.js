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
  collect = new TaskCollection(tasks);

  headerView = new HeaderView('header');

  constructor(
    TaskCollection,
    Task,
    Comment,
    FilterView,
    HeaderView,
    TaskFeedView,
    TaskView,
  ) {
    this.TaskCollection = TaskCollection;
    this.Task = Task;
    this.Comment = Comment;
    this.FilterView = FilterView;
    this.HeaderView = HeaderView;
    this.TaskFeedView = TaskFeedView;
    this.TaskView = TaskView;
  }

  editTask(id, task) {
    return array.edit(id, task);
  }

  setCurrentUser(user) {
    collection.user = user;
    console.log(collection.user);
    console.log(this.collect.user);
    this.headerView.display(user);
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

  showPage() {

  }
}
export default Controller;
//const headerView = new HeaderView('header');
//headerView.display('')