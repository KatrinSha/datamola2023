import { TaskArray, TaskModel } from "./model/index.js";
import{HeaderView, FilterView, TaskFeedView, TaskView } from './view/index.js'
const array = new TaskModel.TaskCollection(TaskArray);




console.log(array)
array.get('1');


const taskView = new TaskView('task__container');

function showTask(id) {
  console.log(id);
  const task = array.get(id);
  taskView.display(task);
}
showTask('1');

console.log(123)