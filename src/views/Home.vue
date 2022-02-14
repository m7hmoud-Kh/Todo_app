<template>
    <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
      <!-- App title section -->
      <Title />
      <!-- Create todo section -->
      <CreateTodo />
      <div class="p-2 mx-4 border-black-25 border-bottom"></div>
      <!-- View Filter section -->
      <Filter />
      <!-- Todo list section -->
      <div class="row mx-1 px-5 pb-3 w-80">
          <TodoItem />
      </div>
    </div>
</template>

<script>

// @ is an alias to /src
import Title from "../components/Title.vue"
import CreateTodo from '../components/CreateTodo.vue'
import Filter from '../components/Filter.vue'
import TodoItem from '../components/TodoItem.vue'
export default {
  name: "Home",
  components: {
    Title,
    CreateTodo,
    Filter,
    TodoItem
  },
};
</script>

<style>
body {
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
}

.add-todo-input,
.edit-todo-input {
    outline: none;
}

.add-todo-input:focus,
.edit-todo-input:focus {
    border: none !important;
    box-shadow: none !important;
}

.view-opt-label,
.date-label {
    font-size: 0.8rem;
}

.edit-todo-input {
    font-size: 1.7rem !important;
}

.todo-actions {
    visibility: hidden !important;
}

.todo-item:hover .todo-actions {
    visibility: visible !important;
}

.todo-item.editing .todo-actions .edit-icon {
    display: none !important;
}

</style>