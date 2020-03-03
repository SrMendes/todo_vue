<template>
    <div class="todo-list">
        <div class="tile">
          
            <div class="tile-icon">
              <div>
                 <i class="icon icon-time flex-centered "></i>
              </div>
             
            </div>
          <div class="tile-content">
            <p class="tile-subtitle">{{todo.descricao}}</p>
          </div>
          <div class="tile-action">
            <button class= "btn btn-link">Concluído</button>
            <button class= "btn btn-link">
              <span class="text-error">Remover</span>
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