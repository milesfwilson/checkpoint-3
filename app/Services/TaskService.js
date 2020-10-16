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

  }
  delete(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}

export const taskService = new TaskService()