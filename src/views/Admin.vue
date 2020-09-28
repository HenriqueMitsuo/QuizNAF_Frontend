<template>
  <div class="app">
    <Sidebar />
    <div class="container text-light">
      <h3 class="text-center my-2">Lista de usuários</h3>
    </div>
    <UserList />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import UserList from "@/components/UserList";

export default {
  components: {
    Sidebar,
    UserList,
  },
  name: "admin",
};
</script>