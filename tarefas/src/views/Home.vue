<template>
     <div class="container grid-xs py-2">
      <h1 class="text-center">Agenda de Tarefas</h1>
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" v-model="todo.descricao" class="form-input" placeholder="Nova Tarefa">
          <button class ="btn btn-primary input-group-btn" :class={loading}>Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
          <todo v-for= "t in todos" :key="t.id"  @toggle="toggleTodo" :todo="t" @remove="removeTodo"  />
        </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  name: 'App',
  components:{Todo},
  data(){
    return { todo:{ checked: false}, loading: false}
  },
  computed: {
    todos(){
      return this.$store.state.todos
    }
  },
  methods: {
    async addTodo(todo){
      try{
        this.loading = true
        await this.$store.dispatch('addTodo',todo)
      this.todo = {checked: false}
      }finally{
        this.loading= false
      }
      
    },
    toggleTodo(todo){
      const index = this.todos.findIndex(item => item.id === todo.id)
      if (index>-1){
        const checked = !this.todos[index].checked
        this.$set(this.todos, index, {...this.todos[index], checked})
    }
    },
    removeTodo(todo){
      const index = this.todos.findIndex(item => item.id === todo.id)
      if (index>-1){
        this.$delete(this.todos, index)
      }
    }
  },
}
</script>

<style>
.todo-list{
  padding-top: 2rem;
}
</style>