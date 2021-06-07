<template>
  <ul class="list-group">
    <li v-for="toDoItem in toDoItems" :key="toDoItem.id" class="list-item">
      <!--
      <input
        :checked="toDoItem.complete"
        type="checkbox"
        @input="$emit('input', $event.target.checked)"
      />
      -->
      <input
        :checked="toDoItem.complete"
        type="checkbox"
        @change="updateCompleteToDo(toDoItem)"
      />
      <span :class="{ complete: toDoItem.complete }">{{
        toDoItem.itemName
      }}</span>
      <button @click="deleteToDo(toDoItem)">Delete</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
// import { defineComponent } from '@nuxtjs/composition-api'
import { ToDoItem } from '~/composables/use-todo'
import { useTodoList } from '~/composables/use-todo-list'

// https://nansystem.com/nuxt-composition-api-v2-diff/
export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    toDoItems: {
      type: Array as PropType<Array<ToDoItem>>, // 本来はこう書く
      // type: Array as () => Array<ToDoItem>, // Vetureバグ回避 → https://zenn.dev/yuku/scraps/a974c564a52ec8
      require: true,
      // default: () => [],
    },
  },
  // setup(props, context) {
  setup(_, context) {
    const { deleteToDo, updateCompleteToDo } = useTodoList(context)

    return {
      deleteToDo,
      updateCompleteToDo,
    }
  },
})
</script>

<style scoped>
/* こちらはscopedを書いても問題なし */
.list-group {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.list-item {
  margin: 5px;
  text-indent: 0;
}

.complete {
  text-decoration: line-through;
  color: #ddd;
}
</style>
