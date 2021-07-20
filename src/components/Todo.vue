<template>
  <div>
    <label for="inputPassword5" class="form-label"
      >&nbsp; Make todo: &nbsp;</label
    >
    <input v-on:keydown.enter="addTodo" v-model="todo" type="text" />
    &nbsp;
    <button @click="addTodo" type="button" class="btn btn-primary ">
      add
    </button>
    &nbsp; Filter: &nbsp;
    <input class="mx-1" v-model="filter" type="text" />
  </div>
  <div class="card">
    <div v-for="todo in filteredTodos()" v-bind:key="todo" class="card-body">
      <ul>
        <li v-if="edit === false">{{ todo.name }}</li>

        <input v-if="edit === true" v-model="todo.name" type="text" todo />
        <li>{{ todo.date }}</li>
        <button
          v-on:click="successHandler(todo)"
          type="button"
          class="btn btn-success"
          v-if="success === false"
        >
          Success
        </button>
        <button
          v-on:click="successHandler(todo)"
          type="button"
          class="btn btn-warning"
          v-if="success === true"
        >
          Unsuccess
        </button>
        <button
          v-on:click="deleteHandler(todo)"
          type="button"
          class="btn btn-danger"
        >
          Delete
        </button>
        <button
          v-if="edit === false"
          @click="editHandler(todo)"
          type="button"
          class="btn btn-info"
        >
          Edit
        </button>
        <button
          v-if="edit === true"
          @click="editHandler(todo)"
          type="button"
          class="btn btn-info"
        >
          Save
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: null,
      todos: [],
      success: false,
      edit: false,
      filter: '',
    };
  },
  created() {
    const todoData = localStorage.getItem('todo-list');
    if (todoData) {
      this.todos = JSON.parse(todoData);
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        name: this.todo,
        date: Date(),
        id: Date.now(),
      };
      this.todos.push(newTodo);
      localStorage.setItem('todo-list', JSON.stringify(this.todos));
      this.todo = '';
      this.filter = '';
    },
    deleteHandler(todoToRemove) {
      this.todos = this.todos.filter((todo) => todo !== todoToRemove);
      localStorage.removeItem('todo-list', JSON.stringify(this.todos));
    },
    successHandler() {
      if (this.success === false) {
        return (this.success = true);
      } else {
        this.success = false;
      }
    },
    // successHandler(todoSuccess) {
    //   const successTodo = this.todos
    //     .find((todo) => todo.id === todoSuccess.id)
    //     .then(successTodo.status === true)
    //     .then(console.log(successTodo.status));
    // },

    editHandler(todoEdit) {
      if (this.edit === false) {
        this.edit = true;
        const editedTodo = this.todos.find((todo) => todo.id === todoEdit.id);

        return editedTodo;
      } else {
        this.edit = false;
      }
    },
    filteredTodos() {
      return this.todos.filter((todo) => todo.name.includes(this.filter));
    },
  },
};
</script>
