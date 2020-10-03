<template>
  <div id="sidebar">
    <div class="topbar bg-primary">
      <button class="openbtn btn-secondary " v-on:click="openNav">
        <i class="fas fa-bars"></i>
      </button>
      <button class="openbtn btn-secondary " v-on:click="changeTheme">
        <i class="fas fa-lightbulb"></i>
      </button>
    </div>

    <div class="sidebar bg-primary" :style="{ width: collapsed ? '0px' : '250px' }">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>

      <div class="nav-link">
        <router-link :to="{ name: 'Home' }"> <i class="fas fa-home mr-3"></i>Home </router-link>
      </div>

      <div class="nav-link">
        <router-link :to="{ name: 'Profile' }"> <i class="fas fa-user-circle mr-3"></i>Perfil </router-link>
      </div>

      <div class="nav-link">
        <a
          v-on:click="closeNav"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <i class="fas fa-question-circle mr-3"></i>Sobre
        </a>
      </div>
      <!-- Se usuario tiver role 2, será mostrado... -->
      <div class="nav-link" v-if="role > 1">
        <router-link :to="{ name: 'Admin' }"> <i class="fas fa-users-cog mr-3"></i>Admin </router-link>
      </div>
      <!-- Se usuario tiver role 1 ou acima, será mostrado... -->
      <div class="nav-link" v-if="role > 0">
        <router-link :to="{ name: 'Professor' }"> <i class="fas fa-plus-circle mr-3"></i>Criar </router-link>
      </div>

      <div class="nav-link mt-4">
        <button class="btn btn-primary" style="width: 200px" @click="logOff">
          <i class="fas fa-sign-out-alt mr-3"></i>Sair
        </button>
      </div>
    </div>
    <AboutDialog />
  </div>
</template>

<script>
import { checkRole } from "@/services/AuthService";
import AboutDialog from "@/components/AboutDialog.vue";
import { signOut } from "@/services/AuthService";

export default {
  components: {
    AboutDialog,
  },
  data() {
    return {
      collapsed: true,
      role: null,
    };
  },
  async mounted() {
    this.getRole(); //Pega o atributo role do usuário
  },
  methods: {
    openNav: function () {
      this.collapsed = false;
    },
    closeNav: function () {
      this.collapsed = true;
    },
    logOff: function () {
      signOut();
      this.$router.push({ name: 'Login' });
    },
    getRole: async function () {
      this.role = await checkRole();
    },
    changeTheme() {
      const body = document.querySelector("body");
      body.classList.toggle("light-mode");
    },
  },
};
</script>

<style>
.topbar {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.nav-link > a {
  width: 250px;
  padding: 8px 8px 8px 16px;
  color: var(--text-primary);
  font-size: 24px;
  display: block;
  transition: 0.3s;
}

.sidebar .closebtn {
  position: absolute;
  color: var(--text-primary);
  top: 0;
  right: 25px;
  font-size: 36px;
  text-decoration: none;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  padding: 10px 15px;
}

.openbtn:focus {
  border: 1px solid var(--bg-primary);
  outline: none;
  box-shadow: none;
  background: var(--bg-primary);
  color: var(--text-primary);
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
