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
      <router-link type="submit" class="btn btn-success btn-block" :to="{ name: 'CreateQuiz' }">
        Criar Quiz
      </router-link>
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
};
</script>