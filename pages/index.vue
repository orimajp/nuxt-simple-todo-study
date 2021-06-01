<template>
  <div class="to-do">
    <p>
      NewTask:
      <input v-model="toDoName" type="text" />
      <button @click="addToDoItem">Add</button>
    </p>
    <hr />
    <ul class="list-group">
      <li v-for="toDoItem in toDoItems" :key="toDoItem.id" class="list-item">
        <input v-model="toDoItem.complete" type="checkbox" />
        <span :class="{ complete: toDoItem.complete }">{{
          toDoItem.itemName
        }}</span>
        <button @click="deleteToDoItem(toDoItem)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useTodo } from '~/composables/use-todo'

export default defineComponent({
  setup() {
    const { toDoItems, toDoName, addToDoItem, deleteToDoItem } = useTodo()

    return {
      toDoItems,
      toDoName,
      addToDoItem,
      deleteToDoItem,
    }
  },
})
</script>

<style>
.list-group {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.list-item {
  margin: 5px;
  text-indent: 0;
}

.to-do {
  width: 800px;
  margin: 0 auto;
}

.complete {
  text-decoration: line-through;
  color: #ddd;
}
</style>
