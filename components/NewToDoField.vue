<template>
  <p>
    NewTask:
    <input v-model="toDoName" type="text" />
    <button @click="addToDo">Add</button>
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useNewTodoField } from '~/composables/use-new-todo-field'

export default defineComponent({
  setup(_, context) {
    const { toDoName, addToDo } = useNewTodoField(context)

    return {
      toDoName,
      addToDo,
    }
  },
})
</script>
