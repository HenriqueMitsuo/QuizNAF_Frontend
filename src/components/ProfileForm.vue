<template>
  <div class="container">
    <h2 class="text-white text-center mt-2">Alterar perfil</h2>
    <form v-if="changePassword==false" class="mt-4">
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
      <!-- E-mail será alteravel? -->
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" style="background: transparent;">
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
          value
          disabled
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
          <span class="input-group-text" style="background: transparent;">
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
      <button type="submit" class="btn btn-success btn-block mt-3">Salvar</button>
      <a @click="changePass" class="btn btn-primary btn-block mt-3">Alterar senha</a>
    </form>

    <form v-if="changePassword==true" class="mt-4">
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <input
          type="password"
          v-model="Password.oldPassword"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Senha atual"
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
          v-model="Password.newPassword"
          class="form-control text-light"
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
          v-model="Password.newPassword2"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Repita nova senha"
          required
        />
      </div>
      <button type="submit" class="btn btn-success btn-block mt-3">Alterar senha</button>
      <a @click="changePass" class="btn btn-primary btn-block mt-3">Voltar</a>
    </form>
  </div>
</template>

<script>
import decode from "jwt-decode";

export default {
  data() {
    return {
      changePassword: false,
      User: {
        name: null,
        email: null,
        country: null,
        city: null,
        educationInstitute: null,
        educationType: null,
        educationCourse: null,
      },
      Password: {
        oldPassword: null,
        newPassword: null,
        newPassword2: null,
      },
    };
  },
  async mounted() {
    this.fillModel(); //Preenche os inputs com os dados do token
  },
  methods: {
    fillModel: async function () {
      const token = localStorage.getItem("token");
      var decoded = decode(token);

      this.User.name = decoded.name;
      this.User.email = decoded.email;
      this.User.country = decoded.country;
      this.User.city = decoded.city;
      this.User.educationInstitute = decoded.educationInstitute;
      this.User.educationType = decoded.educationType;
      this.User.educationCourse = decoded.educationCourse;
    },
    changePass: async function () {
      if (this.changePassword == false) {
        this.changePassword = true;
      } else {
        this.changePassword = false;
      }
    },
  },
};
</script>
