import List from "../Models/List.js";
import { ProxyState } from '../AppState.js'
import { saveState } from '../Utils/LocalStorage.js'


//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
  constructor() {
    ProxyState.on('lists', saveState)

  }

  create(listData) {
    let lists = ProxyState.lists
    lists.push(new List(listData))
    ProxyState.lists = lists
    // @ts-ignore
    Swal.fire(
      'New List Added!',
      ' ',
      'success'
    )
  }
  delete(id) {

    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        // @ts-ignore

        Swal.fire(
          'Deleted!',
          'Your list has been deleted.',
          'success'
        )
      }
    })
  }

  titleColor(id) {
    let lists = ProxyState.lists
    let index = lists.findIndex(l => l.id == id)

    if (lists[index]['color'] == 'bg-primary') {

      lists[index]['color'] = 'bg-secondary'
    } else if (lists[index]['color'] == 'bg-dark') {

      lists[index]['color'] = 'bg-primary'
    } else if (lists[index]['color'] == 'bg-secondary') {

      lists[index]['color'] = 'bg-warning'
    } else if (lists[index]['color'] == 'bg-warning') {

      lists[index]['color'] = 'bg-danger'

    } else if (lists[index]['color'] == 'bg-danger') {

      lists[index]['color'] = 'bg-dark'

    }

    ProxyState.lists = lists


  }

}

export const listService = new ListService();
