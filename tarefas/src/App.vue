<template>
  <div id="app">

    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/Home" class ="btn btn-link">Home</router-link>
          <router-link to="/tarefas" class ="btn btn-link">Tarefas</router-link>
        </section>
        <section>
          <p> CHORA</p>
        </section>
      </header>
      <router-view class="pt-2"/>
    </div>
    
  </div>
</template>


