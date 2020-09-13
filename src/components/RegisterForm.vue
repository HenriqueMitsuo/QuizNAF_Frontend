<template>
  <div class="container">
    <form action method class="mt-4">  

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user-circle"></i>
          </span>
        </div>
        <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Nome"/>
      </div>
      
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" style="background: transparent;">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="E-mail"/>
      </div>     

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-globe"></i>
          </span>
        </div>
        <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="País" />
      </div>

      <div class="row mb-3">
        <div class="input-group input-group-lg col-8 pr-0">
          <div class="input-group-prepend">
            <span class="input-group-text" style="background: transparent;">
              <i class="fas fa-building"></i>
            </span>
          </div>
          <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Cidade" />
        </div>    
      
        <div class="input-group input-group-lg col-4">
          <div class="input-group-prepend">
            <span class="input-group-text" style="background: transparent;">
              <i class="fas fa-map-marker"></i>
            </span>
          </div>
          <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="UF" maxlength="2" />
        </div>      
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-school"></i>
          </span>
        </div>
        <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Instituição de ensino" />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-pen"></i>
          </span>
        </div>
        <input type="text" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Curso" />
      </div>

      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <input type="password" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Senha" />
      </div>

      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <input type="password" name class="form-control text-light" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Repita a senha" />
      </div>

      <router-link tag="button" class="btn btn-warning btn-block mt-3" to="/">
        REGISTRAR
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>