<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { ApiService as QuizService } from "@/services/ApiService";

export default {
  data() {
    return {
      quizService: new QuizService('quiz'),
      quiz: []
    }
  },
  async mounted() {
    this.quiz = await this.quizService.queryAll();
    console.log(this.quiz);
  }
};
</script>

<style>
/* Cores do container */
body {
  background-color: #2b3c4d !important;
}

/* Cor do plano de fundo */
.bg-blue-container {
  background-color: #34495e !important;
}
</style>
