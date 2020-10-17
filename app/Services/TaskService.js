import Task from "../Models/Task.js";
import { ProxyState } from '../AppState.js'
import { saveState } from '../Utils/LocalStorage.js'

class TaskService {

  constructor() {
    ProxyState.on('tasks', saveState)

  }
  createTask(taskData) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(taskData))
    ProxyState.tasks = tasks
    // @ts-ignore
    Swal.fire(
      'Task Added!',
      ' ',
      'success'
    )
  }
  delete(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    // @ts-ignore
    Swal.fire(
      'Deleted!',
      ' ',
      'error'
    )
  }

  crossOff(id) {
    let taskItem = document.getElementById(id)
    if (taskItem.style.textDecoration == 'line-through') {
      taskItem.style.textDecoration = 'none'
    } else {
      taskItem.style.textDecoration = 'line-through'
    }
  }

}

export const taskService = new TaskService()