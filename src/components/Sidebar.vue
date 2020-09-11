<template>
    <div>
        <!-- Barra Superior -->
        <div class="topbar">
            <button class="openbtn" v-on:click="openNav">&#9776;</button>
        </div>
        
        <!-- Menu -->
        <div class="sidebar" :style="{ width: collapsed? '0px': '250px' }" >
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>

            <div class="nav-link">
                <router-link to="/">Home</router-link>
            </div>

            <div class="nav-link">
                <router-link to="/About">About</router-link>
            </div>

            <div class="nav-link">
                <router-link to="/Question">Question</router-link>
            </div>

            <div class="nav-link" to="/Login">
                <router-link to="/login">Sair</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collapsed: true,
        }
    },
    methods: {
        openNav: function() {
            this.collapsed = false;
        },
        closeNav: function() {
            this.collapsed = true;
        }
    }
}
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
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
} 
</style>