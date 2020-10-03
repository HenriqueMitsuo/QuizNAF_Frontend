<template>
  <div class="app">
    <Sidebar />
    <div class="container">
      <!-- Spinner -->
      <div v-if="loading" class="text-center mt-4">
        <div class="spinner-border" role="status">
          <span class="sr-only">Carregando...</span>
        </div>
      </div>

      <h2 class="text-center my-2">Lista de usuários</h2>
    </div>
    <UserList v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import { ApiService as UserService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar";
import UserList from "@/components/UserList";

export default {
  name: "admin",
  components: {
    Sidebar,
    UserList,
  },
  data() {
    return {
      userService: new UserService("users"),
      users: [],
      loading: true,
    };
  },
  async mounted() {
    this.users = await this.userService.queryAll();
    this.loading = false;
  },
};
</script>