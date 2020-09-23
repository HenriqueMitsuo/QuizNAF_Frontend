<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ quiz.title }}</h5>
        <button class="btn btn-primary mr-2">
          <i class="fas fa-question" @click="editQuestions(quiz.id)"></i>
        </button>
        <button class="btn btn-warning mx-2">
          <i class="fas fa-pen" @click="editQuiz(quiz.id)"></i>
        </button>
        <button class="btn btn-success mx-2" @click="goToQuiz(quiz.id)">
          <i class="fas fa-play"></i>
        </button>
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