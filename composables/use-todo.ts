import { reactive, ref, toRefs } from '@nuxtjs/composition-api'

/**
 * ToDo項目インタフェース
 */
interface ToDoItem {
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

  // ToDo名リアクティブ変数
  const toDoName = ref('')

  // ID用カウンタ
  let index = 0

  /**
   * ToDo追加
   */
  const addToDoItem = () => {
    if (toDoName.value === '') {
      return
    }
    state.toDoItems.push({
      id: index++,
      itemName: toDoName.value,
      complete: false,
    })
    toDoName.value = ''
  }

  /**
   * ToDo削除
   *
   * @param todoItem ToDo項目
   */
  const deleteToDoItem = (todoItem: ToDoItem) => {
    state.toDoItems = state.toDoItems.filter((item) => item !== todoItem)
  }

  return {
    ...toRefs(state), // 分割代入対策
    toDoName,
    addToDoItem,
    deleteToDoItem,
  }
}
