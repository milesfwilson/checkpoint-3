import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from '../AppState.js'


export default class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/`
    <div class="col-4">
<h4 id ="${this.id}" class="text-center bg-dark text-light radius-25 shadow p-2 m-2" onclick="app.listController.titleColor('${this.id}')">${this.title}</h4>

    <div class="card m-2 p-2 shadow radius-25">
    

    <div class="d-flex justify-content-end">
    <button class="btn bg-transparent border-0"
    onclick="app.listController.delete('${this.id}')">x</button>
    </div>
    
    <form class="" onsubmit="app.taskController.createTask(event, '${this.id}')">
    <div class="form-group">
    
    <div class="d-flex">
    <button class="btn bg-transparent m-1 border">+</button>
    <input type="text" name="contents" id="" class="form-control m-1 radius-25"
    placeholder="Add Item" aria-describedby="helpId">
    </div>

    </form>
    </div>
    
    
    <div class="row">
        <div class="col-12">
    ${this.Tasks}
         </div>
    </div>
    </div>

    </div>
    
    `
  }
  get Tasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }

}
