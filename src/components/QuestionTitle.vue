<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ question.title }}</h5>
        <button class="btn btn-warning mx-2" @click="editQuestion(question.id)">
          <i class="fas fa-pen"></i>
        </button>
        <button class="btn btn-danger mx-2" @click="deleteQuestion(question.id)">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  methods: {
    editQuestion: function (id) {
      console.log(id); //A criar pagina para editar as informações da questão
    },
    deleteQuestion: function (id) {
      console.log(id); //Criar alert para confirmar
    },
  },
};
</script>