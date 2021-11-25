<template>
  <div>
    <TodoInput @add="addTask" />
    <TodoList :todos="todos" @delete="deleteTask" @toggleTodo="toggleTask" />
  </div>
</template>

<script>
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default {
  name: "TodoApp",
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    this.todos = await data;
  },
  methods: {
    addTask(task) {
      this.todos.push({
        id: Math.floor(Math.random() * (99 - 1 + 1)) + 1,
        text: task,
        completed: false,
      });
      this.task = "";
    },
    fetchTasks() {
      const tasks = fetch("/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      return tasks;
    },
    deleteTask(task) {
      this.todos = this.todos.filter((todo) => task.id !== todo.id);
    },
    toggleTask(task) {
      task.completed = !task.completed;
    },
  },
};
</script>

<style scoped lang="scss"></style>
