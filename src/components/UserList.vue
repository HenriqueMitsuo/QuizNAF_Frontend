<template>
  <div class="col-12 my-3">
    <div class="card bg-primary mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ user.email }}</h5>
        <p class="card-text" v-if="changeRole.role == 0">Usuário Comum</p>
        <p class="card-text" v-if="changeRole.role == 1">Professor</p>
        <p class="card-text" v-if="changeRole.role == 2">Administrador</p>

        <hr />
        <h6>Alterar permissões</h6>
        <button class="btn btn-success mx-1" @click="updateRole(user.id, 0)">Comum</button>
        <button class="btn btn-warning mx-1" @click="updateRole(user.id, 1)">Professor</button>
        <button class="btn btn-danger mx-1" @click="updateRole(user.id, 2)">Admin</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService as UserService } from "@/services/ApiService";

export default {
  props: ["user"],
  data() {
    return {
      userService: new UserService("role"),
      changeRole: { role: this.user.role }, //Pega o atual valor do role pelo props
    };
  },
  methods: {
    async updateRole(id, newRole) {
      //Se o role novo é o mesmo que o atual, não troca
      if (this.changeRole.role == newRole) {
        this.$toasted.global.changeRole_error();
      } else {
        this.changeRole = await this.userService.updateOne(id, { role: newRole }); //Altera no banco e na variavel local
        this.$toasted.global.changeRole_success();
      }
    },
  },
};
</script>
