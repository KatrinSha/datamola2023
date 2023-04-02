import { TaskCollection } from './model/index.js';
import tasks from './model/Tasks.js';
import Controller from './controller/Controller.js';

const collection = new TaskCollection(tasks);
const contr = new Controller();
contr.setCurrentUser('Kate');

contr.getFilter(tasks);
//contr.loadAllTasks(tasks);
contr.showTask('1');
