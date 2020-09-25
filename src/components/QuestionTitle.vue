<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ question.title }}</h5>
        <button class="btn btn-warning mx-2" @click="editQuestion(question.id)">
          <i class="fas fa-pen"></i>
        </button>
        <button 
          class="btn btn-danger mx-2" 
          data-toggle="modal" 
          :data-target="`#deleteThis${question.id}`">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      :id='`deleteThis${question.id}`'
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteThisTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="bg-app-primary text-center text-white modal-content">
          <div class="modal-body">
            <h5>Confimar ação?</h5>
            Ao confirmar, não será possível reverter essa operação.
          </div>
          <div class="modal-body">
            <button
              type="button"
              class="btn btn-success mx-2"
              data-dismiss="modal"
              @click="deleteQuestion(question.id)">
              Apagar
            </button>
            <button type="button" class="btn btn-danger mx-2" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    //A criar pagina para editar as informações da questão
    editQuestion: function (id) {
      console.log(id);
    },
    //Apagar quiz depois de confirmar
    deleteQuestion: function (id) {
      console.log(id);
    },
  },
};
</script>