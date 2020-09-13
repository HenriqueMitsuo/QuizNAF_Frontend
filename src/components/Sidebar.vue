<template>
  <div id="sidebar">
    <div class="topbar">
      <button class="openbtn" v-on:click="openNav">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="sidebar" :style="{ width: collapsed? '0px': '250px' }">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>

      <div class="nav-link">
        <router-link to="/"><i class="fas fa-home mr-3"></i>Home</router-link>
      </div>

      <div class="nav-link">
        <a v-on:click="closeNav" class="text-light" data-toggle="modal" data-target="#exampleModalCenter">
          <i class="fas fa-question-circle mr-3"></i>Sobre
        </a>
      </div>

      <div class="nav-link" to="/Login">
        <router-link to="/login">
          <i class="fas fa-sign-out-alt mr-3"></i>Sair
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    };
  },
  methods: {
    openNav: function () {
      this.collapsed = false;
    },
    closeNav: function () {
      this.collapsed = true;
    },
  },
};
</script>

<style>
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2b3c4d;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.nav-link > a {
  padding: 8px 8px 8px 16px;
  font-size: 24px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.nav-link > a:hover {
  color: #34495e;
  text-decoration: none;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  text-decoration: none;
  color: #ffffff;
  margin-left: 50px;
}

.topbar {
  background-color: #34495e;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #34495e;
  color: white;
  padding: 10px 15px;
  border: none;
}

@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>