<template>
  <div class="container">
    <form @submit.prevent="RegisterUser" class="mt-4">
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user-circle"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.name"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Nome"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" style="background: transparent">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.email"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="E-mail"
          required
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
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="País"
          required
        />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" style="background: transparent">
            <i class="fas fa-building"></i>
          </span>
        </div>
        <input
          type="text"
          v-model="User.city"
          class="form-control text-light"
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
          class="form-control text-light"
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
          class="form-control text-light"
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
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Tipo de curso"
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
          v-model="User.password"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Senha"
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
          v-model="passwordRepeat"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Repita a senha"
        />
      </div>

      <button type="submit" class="btn btn-warning btn-block mt-3">REGISTRAR</button>
      <router-link tag="button" class="btn btn-danger btn-block mt-3" :to="{ name: '/' }"
        >Voltar</router-link
      >
    </form>
  </div>
</template>

<script>
import { ApiService as UserService } from "@/services/ApiService";

export default {
  data() {
    return {
      userService: new UserService("register"),
      passwordRepeat: null,
      User: {
        name: null,
        email: null,
        country: null,
        city: null,
        educationInstitute: null,
        educationType: null,
        educationCourse: null,
        password: null,
        role: 0,
      },
    };
  },
  methods: {
    RegisterUser: async function () {
      if (this.User.password == this.passwordRepeat) {
        await this.userService.createUser(this.User);
        this.$router.push({ name: "Login" });
        this.$toasted.global.register_success();
      } else {
        this.$toasted.global.register_error();
      }
    },
  },
};
</script>

<style>
</style>