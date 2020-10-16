import { ProxyState } from '../AppState.js'
import List from "../Models/List.js";
import Task from "../Models/Task.js";
export function saveState() {
  if (ProxyState.hasOwnProperty("tasks")) {
    localStorage.setItem("TaskMaster", JSON.stringify({ lists: ProxyState.lists, tasks: ProxyState["tasks"] }));
    return
  }
  localStorage.setItem("TaskMaster", JSON.stringify({ lists: ProxyState.lists }));
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    ProxyState.lists = data.lists.map(l => new List(l));
    if (ProxyState.hasOwnProperty("tasks")) {
      ProxyState["tasks"] = data.tasks.map(t => new Task(t))
    }
  }
}
