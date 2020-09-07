<template>
<div class="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-blue-container">
    <div class="navbar-brand">NavBar</div>
    <!-- Adicionar botão para abrir opções abaixo -->
    <span class="navbar-toggler-icon"></span>
    <div class="collapse navbar-collapse" id="navbarToggle">
          <ul class="navbar-nav">
              <li class="nav-item">
                <div class="nav-link">
                  <router-link to="/">Home</router-link>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  <router-link to="/about">About</router-link>
                </div>
              </li>
          </ul>
      </div>
  </nav>
  <router-view/>
</div>

<!--
  <div id="app">
    <nav class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
-->

</template>

<style>
@import url('./assets/css/bootstrap.min.css');

/* Cores do container */
.bg-blue{
  background-color: #2b3c4d;
}

/* Cor do plano de fundo */
.bg-blue-container{
  background-color: #34495e;
}

</style>
