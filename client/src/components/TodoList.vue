<template>
  <div v-if="this.todos.length <= 0">
    <p>There're no current tasks in the backlog!</p>
  </div>
  <div v-else>
    <p>
      You have <span>{{ this.getAllTodos }}</span> in the backlog!
    </p>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="todo.completed ? 'completed' : ''"
        @click="toggleClick(todo)"
      >
        {{ todo.text }}
        <span @click="handleClick(todo)">🗑️</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  methods: {
    handleClick(todo) {
      this.$emit("delete", todo);
    },
    toggleClick(todo) {
      this.$emit("toggleTodo", todo);
    },
  },
  computed: {
    getAllTodos() {
      return this.todos.length;
    },
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
