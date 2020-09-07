<template>
  <div class="row">
    <div class="col-12 px-3">
      <label>
        <input type="radio" name="demo" class="card-input-element d-none" id="demo1" />
        <div
          class="card card-body bg-blue-container text-light d-flex flex-row justify-content-between align-items-center"
        >Resposta 1</div>
      </label>
      <label class="mt-3">
        <input type="radio" name="demo" class="card-input-element d-none" id="demo1" />
        <div
          class="card card-body bg-blue-container text-light d-flex flex-row justify-content-between align-items-center"
        >Resposta 2</div>
      </label>
      <label class="mt-3">
        <input type="radio" name="demo" class="card-input-element d-none" id="demo1" />
        <div
          class="card card-body bg-blue-container text-light d-flex flex-row justify-content-between align-items-center"
        >Resposta 3</div>
      </label>
    </div>
  </div>
</template>


<style>
/* Código terceirizado para o radio button no card link https://jsfiddle.net/djibe89/at2cv9q1/ */
label {
  width: 100%;
  font-size: 1rem;
}

.card-input-element + .card {
  height: calc(36px + 2 * 1rem);
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 2px solid transparent;
  border-radius: 4px;
}

.card-input-element + .card:hover {
  cursor: pointer;
}

.card-input-element:checked + .card {
  border: 2px solid white;
  background-color: white !important;
  color: black !important;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>