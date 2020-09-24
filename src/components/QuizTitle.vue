<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ quiz.title }}</h5>
        <!-- Visualizar e editar questões -->
        <button class="btn btn-primary mr-2" @click="editQuestions(quiz.id)">
          <i class="fas fa-question"></i>
        </button>
        <!-- Editar Quiz (Titulo, Categoria, Descrição...) -->
        <button class="btn btn-warning mx-2" @click="editQuiz(quiz.id)">
          <i class="fas fa-pen"></i>
        </button>
        <!-- Dar play no quiz diretamente -->
        <button class="btn btn-success mx-2" @click="goToQuiz(quiz.id)">
          <i class="fas fa-play"></i>
        </button>
        <!-- Deletar Quiz -->
        <button class="btn btn-danger mx-2" @click="deleteQuiz(quiz.id)">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quiz"],
  methods: {
    editQuestions: function (id) {
      this.$router.push({ name: "QuestionList", params: { id: id } });
    },
    goToQuiz: function (id) {
      this.$router.push({ name: "Question", params: { id: id } });
    },
    editQuiz: function (id) {
      console.log(id); //A criar pagina para editar as informações do quiz
    },
    deleteQuiz: function (id) {
      console.log(id); //Criar alert para confirmar
    },
  },
};
</script>