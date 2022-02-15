<template>
        <div
        class="container m-5 p-2 rounded mx-auto bg-light shadow"
        :class="theme == false && 'template_dark'"
        >
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
        <div>
            <Footer />
        </div>
        </div>
</template>

<script>
// @ is an alias to /src
import Title from "../components/Title.vue";
import CreateTodo from "../components/CreateTodo.vue";
import Filter from "../components/Filter.vue";
import TodoItem from "../components/TodoItem.vue";
import Footer from "../components/Footer.vue";
import { mapState } from 'vuex';
export default {
  name: "Home",
  components: {
    Title,
    CreateTodo,
    Filter,
    TodoItem,
    Footer,
  },
  computed:{
    ...mapState(['theme']),
  },
  methods: {
    theme_status(){
      if(localStorage.getItem('theme') == 'true'){
          document.body.className = ''
          this.$store.state.theme = true
      }else{
          document.body.className = 'template_dark_body'
          this.$store.state.theme = false
      }
    }
  },
  watch:{
    theme(){
      this.theme_status()
    }
  },
  mounted() {
    this.theme_status()
  },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
}
.template_dark_body {
  background-color: #292929;
}
.template_dark {
  background-color: #121212 !important ;
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
