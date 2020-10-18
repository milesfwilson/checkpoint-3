import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(data) {
    this.contents = data.contents
    this.listId = data.listId
    this.id = data.id || generateId();
    this.text = data.text || 'text-dark'
  }
  //Be sure to add the methods needed to create the view template for this model

  get Template() {
    return /*html*/`
  <div class="row m-1">
  <div class="1"></div>
  <div class="col">
  <p class="${this.text}" onclick="app.taskController.crossOff('${this.id}')">${this.contents} </p>
  </div>
  <div class="col-1">
  <button class="text-danger close" onclick="app.taskController.delete('${this.id}')">&times;</button>
  </div>
  </div>
  
  `
  }

}

