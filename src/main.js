import { TaskCollection, Task, Comment } from "./model/index.js";
import {tasks} from "./model/Tasks.js";
const collection = new TaskCollection(tasks);

console.log(collection)