<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ user.email }}</h5>
        <p class="card-text">{{ this.roleText }}</p>
        <hr />
        <h6>Alterar permissões</h6>
        <button class="btn btn-success mx-1" @click="changeRole(user.id, 0)">Comum</button>
        <button class="btn btn-warning mx-1" @click="changeRole(user.id, 1)">Professor</button>
        <button class="btn btn-danger mx-1" @click="changeRole(user.id, 2)">Admin</button>
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
      Urole: this.user.role,
      roleText: null,
      change: { role: null }, //Usado apenas para alterar no banco
    };
  },
  async mounted() {
    this.defineRole(); //Define o que será escrito abaixo do email
  },
  methods: {
    defineRole: function () {
      switch (this.Urole) {
        case 0:
          this.roleText = "Usuário Comum";
          break;
        case 1:
          this.roleText = "Professor";
          break;
        case 2:
          this.roleText = "Administrador";
          break;
      }
    },
    changeRole: async function (id, newRole) {
      //Se o role novo é o mesmo que o atual, não troca
      if (this.Urole == newRole) {
        this.$toasted.global.changeRole_error();
      } else {
        this.change.role = newRole; //Altera no array para conseguir mudar no banco
        switch (newRole) {
          case 0:
            await this.userService.updateOne(id, this.change);
            this.$toasted.global.changeRole_success();
            break;
          case 1:
            await this.userService.updateOne(id, this.change);
            this.$toasted.global.changeRole_success();
            break;
          case 2:
            await this.userService.updateOne(id, this.change);
            this.$toasted.global.changeRole_success();
            break;
        }
        //Recarregar a pagina
      }
    },
  },
};
</script>