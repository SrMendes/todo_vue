<template>
    <div class="todo-list">
        <div class="tile" :class="{checked: todo.checked}">
            <div class="tile-icon " >
              <div>
                 <i class="icon" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
              </div>
            </div>
          <div class="tile-content ">
            <p class="tile-subtitle">{{todo.descricao}}</p>
          </div>
          <div class="tile-action">
            <button class= "btn btn-link" @click="$emit('toggle', todo)">
            <span v-if="todo.checked">Desmarcar</span>
            <span v-else>Concluído</span>
            </button>
            <button class= "btn btn-link">
              <span class="text-error" @click="$emit('remove',todo)">Remover</span>
              </button>
          </div>
        </div>
        </div>
</template>

<script>
export default {
    props:{
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
  .checked{
    text-decoration:line-through;
    color: lightgray;
  }

</style>