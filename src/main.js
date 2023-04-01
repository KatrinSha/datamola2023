import { TaskCollection } from './model/index.js';
import tasks from './model/Tasks.js';
import Controller from './controller/Controller.js';

const collection = new TaskCollection(tasks);
console.log(collection);
const contr = new Controller;
contr.setCurrentUser('Kate')