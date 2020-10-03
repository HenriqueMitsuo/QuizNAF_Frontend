<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-12 pt-5">
        <form action method class="mx-2" @submit.prevent="submitLogin">
          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fas fa-envelope"></i
              ></span>
            </div>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock"></i></span>
            </div>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon1"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-4">
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            >
              <span class="sr-only">Carregando...</span>
            </span>
            <span v-else>ENTRAR</span>
          </button>

          <router-link
            tag="button"
            class="btn btn-success btn-block mt-3"
            :to="{ name: 'Register' }"
          >
            REGISTRAR
          </router-link>     
        </form>

        <button id="color-theme"  
          class="btn btn-secondary btn-block my-4"
          @click="changeTheme"
        >
          Dark
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import { signIn } from "@/services/AuthService";

export default {
  name: "login-form",
  data() {
    return {
      email: null,
      password: null,
      loading: null,
    };
  },
  methods: {
    async submitLogin() {
      this.loading = true;
      await signIn(this.email, this.password)
        .then(() => {
          this.$toasted.global.login_success();
          this.$router.push({ name: "Home" });
        })
        .catch(() => {
          this.$toasted.global.login_error();
        });
      this.loading = false;
    },
    changeTheme() {
      const body = document.querySelector("body");
      body.classList.toggle("light-mode");
    },
  },
};
</script>

<style>
</style>