<template>
  <div class="container">
    <h2 class="text-center mt-4">Alterar perfil</h2>
    <form @submit.prevent="updateUser" v-if="changePassword == false" class="mt-4">
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user-circle"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.name"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Nome"
          required
        />
      </div>
      <!-- E-mail será alteravel? -->
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.email"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="E-mail"
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-globe"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.country"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="País"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-building"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.city"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Cidade"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-school"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.educationInstitute"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Instituição de ensino"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-pen"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.educationCourse"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Curso"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-tag"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.educationType"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Tipo de curso"
          required
        />
      </div>
      <button type="submit" class="btn btn-success btn-block mt-3">SALVAR</button>
      <a @click="changePass" class="btn btn-primary btn-block mt-3">ALTERAR SENHA</a>
    </form>

    <form @submit.prevent="updatePassword" v-if="changePassword == true" class="mt-4">
      
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <input
          type="password"
          v-model="Password.password"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Nova senha"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <input
          type="password"
          v-model="RepeatnewPassword"
          class="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Repita nova senha"
          required
        />
      </div>
      <button type="submit" class="btn btn-success btn-block mt-3">ALTERAR SENHA</button>
      <a @click="changePass" class="btn btn-primary btn-block mt-3">VOLTAR</a>
    </form>
  </div>
</template>

<script>
import decode from "jwt-decode";
import { ApiService as UserService } from "@/services/ApiService";

export default {
  data() {
    return {
      userService: new UserService("users"),
      passService: new UserService("passwords"),
      changePassword: false, //False como padrão para mostrar o formulário de dados
      id: null, //ID do usuário
      RepeatnewPassword: null, //Apenas verifica se o usuario repetiu a senha corretamente
      User: {
        name: null,
        email: null,
        country: null,
        city: null,
        educationInstitute: null,
        educationType: null,
        educationCourse: null,
        role: null,
      },
      Password: {
        password: null,
      },
    };
  },
  async mounted() {
    this.fillModel(); //Preenche os inputs e algumas variaveis com os dados do token
  },
  methods: {
    fillModel() {
      const token = localStorage.getItem("token");
      var decoded = decode(token);

      this.id = decoded.id; //Pega o ID do token e passa para a variavel

      this.User.name = decoded.name;
      this.User.email = decoded.email; //Salva o email atual também numa variavel para comparação ao dar update
      this.User.country = decoded.country;
      this.User.city = decoded.city;
      this.User.educationInstitute = decoded.educationInstitute;
      this.User.educationType = decoded.educationType;
      this.User.educationCourse = decoded.educationCourse;
      this.User.role = decoded.role;
    },
    changePass() {
      //Muda a visualização entre o formulário de senha ou dos dados
      if (this.changePassword == false) {
        this.changePassword = true;
      } else {
        this.changePassword = false;
      }
    },
    async updateUser() {
      try {
        await this.userService.updateOne(this.id, this.User);
        this.$toasted.global.updateprofile_success();
      } catch (error) {
        console.log("Server error: ${error}");
        this.$toasted.global.updateprofile_error();
      }
    },
    async updatePassword() {
      //Se novas senhas conferem
      if (this.Password.password == this.RepeatnewPassword) {
        //Senhas conferem
        await this.passService.updateOne(this.id, this.Password);
        this.$toasted.global.updatepassword_success();
      } else {
        //Senhas não conferem
        this.$toasted.global.updatepassword_error();
      }
    },
  },
};
</script>
