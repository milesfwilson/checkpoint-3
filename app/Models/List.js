import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from '../AppState.js'


export default class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId();
    this.color = data.color || 'bg-dark'
  }

  get Template() {
    return /*html*/`
    <div class="col-md-4 col-12">
    <div class="grow">
    <h4 class="text-center ${this.color} text-light radius-25 shadow p-2 m-2"
    onclick="app.listController.titleColor('${this.id}')">${this.title}</h4>
    
    <div class="card m-1 p-1 shadow radius-25">
    
    
    <div class="d-flex justify-content-end">
    <button class="btn bg-transparent border-0" type="button" data-toggle="collapse" data-target="#${this.id}"
    aria-expanded="false" aria-controls="${this.id}">
    <i class="fas fa-plus-circle"></i>
    </button>
    <button class="btn bg-transparent border-0" onclick="app.listController.delete('${this.id}')">
    
    <i class="far fa-times-circle"></i>
    
    
    </button>
    </div>
    
    
    <div class="collapse" id="${this.id}">
    <div class="card-body">
    
    <form class="" onsubmit="app.taskController.createTask(event, '${this.id}')">
    <div class="form-group d-flex">
    <button class="btn bg-transparent border-0">+</button>
    
    <input type="text" name="contents" id="" class="form-control w-100 radius-25"
    placeholder="Add Item" aria-describedby="helpId">
    
    
    </div>
    </form>
    </div>
    </div>
    
    
    <div class="row">
    <div class="col-12">
    ${this.Tasks}
    </div>
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
