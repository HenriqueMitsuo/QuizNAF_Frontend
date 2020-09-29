<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ user.email }}</h5>
        <p class="card-text">{{ this.roleText }}</p>
        <hr />
        <h6>Alterar permissões</h6>
        <button class="btn btn-success mx-1" @click="changeRole(0)">Comum</button>
        <button class="btn btn-warning mx-1" @click="changeRole(1)">Professor</button>
        <button class="btn btn-danger mx-1" @click="changeRole(2)">Admin</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      role: this.user.role,
      roleText: null,
    };
  },
  async mounted() {
    this.defineRole(); //Define o que será escrito abaixo do email
  },
  methods: {
    defineRole: function () {
      switch (this.role) {
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
    changeRole: function (role) {
      if (this.role == role) {
        //Apenas mostrar a mensagem de erro
        this.$toasted.global.changeRole_error();
      } else {
        switch (role) {
          case 0:
            //Alterar apenas o Role no banco
            console.log("Alterar para Comum");
            this.$toasted.global.changeRole_success();
            break;
          case 1:
            //Alterar apenas o Role no banco
            console.log("Alterar para Professor");
            this.$toasted.global.changeRole_success();
            break;
          case 2:
            //Alterar apenas o Role no banco
            console.log("Alterar para Admin");
            this.$toasted.global.changeRole_success();
            break;
        }
      }
    },
  },
};
</script>