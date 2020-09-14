<template>
  <div class="app">
    <Sidebar />
    <div class="container-fluid">
      <div class="card-deck mt-4">
        <Topic v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
    <AboutDialog />
  </div>
</template>

<script>
import { ApiService as QuizService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar.vue";
import Topic from "@/components/Topic.vue";
import AboutDialog from "@/components/AboutDialog.vue";

export default {
  components: {
    Sidebar,
    Topic,
    AboutDialog,
  },
  data() {
    return {
      quizService: new QuizService('quiz'),
      quizzes: []
    }
  },
  async mounted() {
    this.quizzes = await this.quizService.queryAll();
    console.log(this.quizzes);
  },
};
</script>

<style>

</style>

