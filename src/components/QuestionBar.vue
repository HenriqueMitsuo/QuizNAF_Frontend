<template>
  <div class="sticky-top">
    
    <div class="navbar navbar-expand-md navbar-dark bg-app-primary">
      <span class="navbar-brand abs">Categoria</span>
      <div class="navbar-nav ml-auto">
        <div class="nav-item">
          <span class="navbar-brand">
            <router-link tag="span" :to="{ name: 'Home' }">
              <i class="fas fa-times"></i>
            </router-link>
          </span>
        </div>
      </div>
    </div>

    <div class="sticky-top navbar navbar-expand-md navbar-dark bg-app-primary">
      <span class="navbar-brand abs">
        <i class="fas fa-star mr-2"></i>{{score}}
      </span>
      <div class="navbar-nav ml-auto">
        <div class="nav-item">
          <span class="navbar-brand">
            <i class="fas fa-question-circle mr-2"></i> {{current}} / {{ total }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'question-bar',
  props: [ 'score', 'current', 'total' ]
}
</script>