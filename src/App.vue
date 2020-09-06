<template>
  <div id="app">
    <nav class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import url('./assets/css/bootstrap.min.css');
</style>
