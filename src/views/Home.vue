<template>
  <div class="app">
    
    <div class="bg-blue px-3 pb-4"> <!-- px define padding left e right -->
      <div class="container">

        <!-- Linha do card principal expandido -->
        <div class="row pt-4">

          <div class="col-12">
            <div class="card bg-blue-container text-white">
              <div class="card-body">
                <h5 class="card-title">Tópico destaque</h5>
                <!-- img -->
                <p class="card-text text-light">Descrição</p>
                 
              
                <div class="progress-custom">
                  <div class="progress" style="height: 10px">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 8%" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">
                    </div>  
                  </div>
                  <div class="progress-value">
                    1/12
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <!-- Linha com dois cards -->
        <div class="row pt-4">

          <div class="col-6 pr-n3">
            <div class="card bg-blue-container text-white">
              <img class="card-img-top rounded" src="@/assets/bg-prototype.png">
              <div class="card-body">
                <p class="card-text text-light">Sociologia</p>
                
                <div class="progress-custom mt-n2">
                  <div class="progress" style="height: 10px">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
                    </div>  
                  </div>
                  <div class="progress-value">
                    5/15
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card bg-blue-container text-white">
              <img class="card-img-top rounded" src="@/assets/bg-prototype.png">
              <div class="card-body">
                <p class="card-text text-light">Direito penal</p>
                
                <div class="progress-custom mt-n2">
                  <div class="progress" style="height: 10px">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
                    </div>  
                  </div>
                  <div class="progress-value">
                    5/15
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <!-- Linha com outros 2 cards -->
        <div class="row pt-4">

          <div class="col-6">
            <div class="card bg-blue-container text-white">
              <img class="card-img-top rounded" src="@/assets/bg-prototype.png">
              <div class="card-body">
                <p class="card-text text-light">Logistica</p>
                
                <div class="progress-custom mt-n2">
                  <div class="progress" style="height: 10px">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
                    </div>  
                  </div>
                  <div class="progress-value">
                    5/15
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="card bg-blue-container text-white">
              <img class="card-img-top rounded" src="@/assets/bg-prototype.png">
              <div class="card-body">
                <p class="card-text text-light">Direito</p>
                
                <div class="progress-custom mt-n2">
                  <div class="progress" style="height: 10px">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
                    </div>  
                  </div>
                  <div class="progress-value">
                    5/15
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    
  </div>
</template>

<style>
.progress-custom {
        display: table;
        width: 100%;
    }

    .progress-custom .progress{
        margin-bottom: 7px;
        vertical-align: middle;
    }

    .progress-custom .progress-value{
        display: table-cell;
        width: 1%; 
        padding: 0 4px; /*optionally*/
    }
</style>

<!--
<template>
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  }
};
</script>
-->