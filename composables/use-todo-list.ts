import { SetupContext } from '@nuxtjs/composition-api'
import { ToDoItem } from '~/composables/use-todo'

export const useTodoList = ({ emit }: SetupContext) => {
  const deleteToDo = (todoItem: ToDoItem) => {
    emit('deleteItem', todoItem)
  }

  // https://qiita.com/shts/items/345b5809e7c34fa2b7a8
  /*
  const updateCompleteToDo = (e: MouseEvent) => {
    // @ts-ignore
    emit('input', e.target.checked) // この方法はリストをv-modelに指定しているせいか上手くいかない
  }
   */
  const updateCompleteToDo = (toDoItem: ToDoItem) => {
    emit('completeTodo', toDoItem)
  }

  return {
    deleteToDo,
    updateCompleteToDo,
  }
}
