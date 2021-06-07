<template>
  <div class="to-do">
    <new-to-do-field @addNewToDo="addToDoItem" />
    <hr />
    <to-do-list
      :to-do-items="toDoItems"
      @deleteItem="deleteToDoItem"
      @completeTodo="updateCompleteTodoItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useTodo } from '~/composables/use-todo'
import ToDoList from '~/components/ToDoList.vue'
import NewToDoField from '~/components/NewToDoField.vue'

export default defineComponent({
  components: { NewToDoField, ToDoList },
  setup() {
    const { toDoItems, addToDoItem, deleteToDoItem, updateCompleteTodoItem } =
      useTodo()

    return {
      toDoItems,
      addToDoItem,
      deleteToDoItem,
      updateCompleteTodoItem,
    }
  },
})
</script>

<style>
/* scopedを書くとto-doが無効化される? */
.to-do {
  width: 800px;
  margin: 0 auto;
}
</style>
