import { ref, SetupContext } from '@nuxtjs/composition-api'

export const useNewTodoField = ({ emit }: SetupContext) => {
  // ToDo名リアクティブ変数
  const toDoName = ref('') // このコンポーネントのみで利用する変数なのでこちらの関数に移動

  const addToDo = () => {
    emit('addNewToDo', toDoName.value)
    toDoName.value = ''
  }

  return {
    toDoName,
    addToDo,
  }
}
