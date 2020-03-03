<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <h1 class="text-center">Agenda de Tarefas</h1>
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.descricao" class="form-input" placeholder="Nova Tarefa">
          <button class ="btn btn-primary input-group-btn">Adicionar</button>
        </div>
        <div class="todo-list">
          <todo v-for= "t in todos" :key="t.id" :todo="t" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo'

export default {
  name: 'App',
  components:{Todo},
  data(){
    return {todos:[], todo:{ checked: false}}
  },
  methods: {
    addTodo(todo){
      todo.id = Date.now()
      this.todos.push(todo)
      this.todo = {checked: false}
    }
  },
}
</script>

<style>
.todo-list{
  padding-top: 2rem;
}
</style>
