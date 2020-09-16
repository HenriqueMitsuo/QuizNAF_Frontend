<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-12 pt-5">
        <form action method class="mx-2" @submit.prevent="submitLogin">

          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
            </div>
            <input v-model="email" type="text" class="form-control text-light" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
          </div>

          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock"></i></span>
            </div>
            <input v-model="password" type="password" class="form-control text-light" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1">
          </div>

          <button type="submit" class="btn bg-app-accent btn-block mt-4">
            ENTRAR
          </button>

          <router-link tag="button" class="btn btn-outline-light btn-block mt-3" to="/Register">
            REGISTRAR
          </router-link>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { signIn } from '@/services/AuthService';

export default {
  name: 'login-form',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async submitLogin() {
      await signIn(this.email, this.password)
        .then(() => {
          this.$toasted.global.login_success();
          this.$router.push('/Home');
        }).catch(() => {
          this.$toasted.global.login_error();
        });      
    }
  }
}
</script>

<style>

</style>