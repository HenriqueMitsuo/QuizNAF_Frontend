<template>
  <div class="app">
    <Sidebar />
    <div class="container text-light">
      <!-- Spinner -->
      <div v-if="loading" class="text-center mt-4">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Carregando...</span>
        </div>
      </div>

      <!-- Conteúdo -->
      <h3 class="text-center my-2">Quizzes</h3>
      <QuizTitle v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      <button type="submit" class="btn btn-success btn-block" @click="createQuiz">
        Criar Quiz
      </button>
    </div>
  </div>
</template>
<script>
import { ApiService as QuizService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar.vue";
import QuizTitle from "@/components/QuizTitle.vue";

export default {
  components: {
    Sidebar,
    QuizTitle,
  },
  data() {
    return {
      quizService: new QuizService("quiz"),
      quizzes: [],
      loading: true,
    };
  },
  async mounted() {
    this.quizzes = await this.quizService.queryAll();
    this.loading = false;
    console.log(this.quizzes);
  },
  methods: {
    createQuiz: function () {
      this.$router.push({ name: "Create", params: { id: 0 } }); //Passando valor 0 para criar um Quiz
    },
  },
};
</script>