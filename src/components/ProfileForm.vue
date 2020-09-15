<template>
  <div class="container">
    <h2 class="text-white text-center mt-2">Alterar perfil</h2>
    <form class="mt-4">
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user-circle"></i>
          </span>
        </div>
        <input
          type="text"
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
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="E-mail"
          value=""
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
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Tipo de curso"
          required
        />
      </div>
      <!-- Colocar senha para salvar -->
      <div class="input-group input-group-lg m2b-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <input
          type="password"
          class="form-control text-light"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Digite a senha para salvar"
          required
        />
      </div>

      <button type="submit" class="btn btn-success btn-block mt-3">Salvar</button>
    </form>
  </div>
</template>

