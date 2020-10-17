import { listService } from "../Services/ListService.js";
import { ProxyState } from '../AppState.js'


//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''

  ProxyState.lists.forEach(l => template += l.Template)

  document.getElementById("lists").innerHTML = template
  console.log("hello world")
}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)

    _drawLists();

  }


  // NOTE passes the event target to the listService where it will push it into the copy of the list array
  create(event) {
    event.preventDefault()
    let form = event.target

    let listData = {
      title: form.title.value
    }

    listService.create(listData)
    form.reset()

  }

  delete(id) {
    listService.delete(id)
  }

  titleColor(id) {
    listService.titleColor(id)
  }

  //TODO: Your app will need the ability to create, and delete lists
}

export const listController = new ListController()