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
    let title = document.getElementById(id)

    if (title.classList.contains('bg-primary')) {
      title.classList.remove('bg-primary')
      title.classList.add('bg-secondary')
    } else if (title.classList.contains('bg-dark')) {
      title.classList.remove('bg-dark')
      title.classList.add('bg-primary')
    } else if (title.classList.contains('bg-secondary')) {
      title.classList.remove('bg-secondary')
      title.classList.add('bg-warning')
    } else if (title.classList.contains('bg-warning')) {
      title.classList.remove('bg-warning')
      title.classList.add('bg-danger')

    } else if (title.classList.contains('bg-danger')) {
      title.classList.remove('bg-danger')
      title.classList.add('bg-dark')

    }



  }

}

export const listService = new ListService();
