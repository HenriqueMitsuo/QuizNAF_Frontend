<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue-container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggle"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <span class="navbar-brand">App Title</span>

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
          <li class="nav-item">
            <div class="nav-link">
              <router-link to="/Login">Login</router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <router-link to="/Question">Question</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
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
/* Cores do container */
.bg-blue {
  background-color: #2b3c4d !important;
}

/* Cor do plano de fundo */
.bg-blue-container {
  background-color: #34495e !important;
}
</style>
