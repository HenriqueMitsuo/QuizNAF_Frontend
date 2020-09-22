<template>
  <div class="app">
    <Sidebar />
    <div class="container-fluid">
      <!-- Spinner -->
      <div v-if="loading" class="text-center mt-4">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Carregando...</span>
        </div>
      </div>   

      <!-- Conteúdo -->
      <div class="card-deck mt-4 row justify-content-center">
        <Topic v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService as QuizService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar.vue";
import Topic from "@/components/Topic.vue";

export default {
  components: {
    Sidebar,
    Topic,
  },
  data() {
    return {
      quizService: new QuizService('quiz'),
      quizzes: [],
      loading: true
    }
  },
  async mounted() {
    this.quizzes = await this.quizService.queryAll();
    this.loading = false;
    console.log(this.quizzes);
  },
};
</script>

<style>

</style>