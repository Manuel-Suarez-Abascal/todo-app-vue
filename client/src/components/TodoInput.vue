<template>
  <form @submit.prevent="handleSubmit">
    <input
      :value="this.inputValue"
      @keyup="handleInput"
      placeholder="Enter a task..."
    />
    <p v-if="isValidInput">You need enter more than 3 characters</p>
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  methods: {
    handleInput(e) {
      this.inputValue = e.target.value;
    },
    handleSubmit() {
      const valueLength = this.inputValue.length;
      if (valueLength < 3) {
        this.isValidInput = false;
        alert("Please enter a task with at least 3 characters");
        this.inputValue = "";
        return;
      }
      this.$emit("add", this.capitalize(this.inputValue));
      this.inputValue = "";
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  data() {
    return {
      inputValue: "",
      isValidInput: false,
    };
  },
};
</script>
