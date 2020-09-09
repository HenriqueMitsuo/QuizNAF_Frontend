<template>
  <div class="col-sm-3 mt-3">
    <div class="card bg-blue-container text-white">
      <img class="card-img-top rounded" src="@/assets/bg-prototype.png" />
      <div class="card-body">
        <p class="card-text text-light">Nome Disciplina</p>

        <!-- Barra de progresso -->
        <div class="progress-custom mt-n2">
          <div class="progress" style="height: 10px">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 33%"
              aria-valuenow="33"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress-value">5/15</div>
        </div>
      </div>
    </div>
  </div>
</template>
