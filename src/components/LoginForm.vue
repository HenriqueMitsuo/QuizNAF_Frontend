<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-12 pt-5">
        <form action method class="mx-2">
          <img src="@/assets/person.png" class="mx-auto d-block mb-4" width="30%" />

          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
            </div>
            <input type="text" class="form-control text-light" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
          </div>

          <div class="input-group input-group-lg mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-unlock"></i></span>
            </div>
            <input type="password" class="form-control text-light" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1">
          </div>

          <router-link tag="button" class="btn btn-success btn-block mt-4" to="/">
            ENTRAR
          </router-link>

          <router-link tag="button" class="btn btn-danger btn-block mt-3" to="/Register">
            REGISTRAR
          </router-link>

        </form>
      </div>
    </div>
  </div>
</template>

<style>

</style>