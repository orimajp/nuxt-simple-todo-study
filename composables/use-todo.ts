import { reactive, toRefs } from '@nuxtjs/composition-api'

/**
 * ToDo項目インタフェース
 */
export interface ToDoItem {
  id: number // v-forのkeyで使用する変更されないキー項目
  itemName: string
  complete: boolean
}

/**
 * ToDoリストインタフェース
 */
interface ToDoItems {
  toDoItems: Array<ToDoItem>
}

export const useTodo = () => {
  // ToDoリストリアクティブ変数
  const state = reactive<ToDoItems>({
    toDoItems: [],
  })

  // ID用カウンタ
  let index = 0

  /**
   * ToDo追加
   */
  const addToDoItem = (toDoName: string) => {
    if (toDoName === '') {
      return
    }
    state.toDoItems.push({
      id: index++,
      itemName: toDoName,
      complete: false,
    })
  }

  /**
   * ToDo削除
   *
   * @param todoItem ToDo項目
   */
  const deleteToDoItem = (todoItem: ToDoItem) => {
    state.toDoItems = state.toDoItems.filter((item) => item !== todoItem)
  }

  /**
   * 完了フラグ更新
   *
   * @param todoItem ToDo項目
   */
  const updateCompleteTodoItem = (todoItem: ToDoItem) => {
    const toDoItem = state.toDoItems.filter((item) => item === todoItem)
    if (!toDoItem.length) {
      return
    }
    toDoItem[0].complete = !toDoItem[0].complete
  }

  return {
    ...toRefs(state), // 分割代入対策
    addToDoItem,
    deleteToDoItem,
    updateCompleteTodoItem,
  }
}
