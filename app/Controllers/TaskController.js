import { taskService } from "../Services/TaskService.js";
import { listService } from "../Services/ListService.js"
import { ProxyState } from '../AppState.js'

export default class TaskController {
  constructor() {
    console.log("Hello from the task controller!")
  }
  createTask(event, listId) {
    event.preventDefault()
    let form = event.target

    let taskData = {
      contents: form.contents.value,
      listId: listId
    }
    console.log(taskData)
    taskService.createTask(taskData)
    form.reset()
  }

  delete(id) {
    taskService.delete(id)
  }

  crossOff(id) {
    taskService.crossOff(id)
  }

}

export const taskController = new TaskController()