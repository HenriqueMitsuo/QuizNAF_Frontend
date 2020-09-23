<template>
  <div class="app">
    <Sidebar />
    <div class="container text-light">
      <h3 class="text-center my-2">Quizzes</h3>
      <QuizList v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      <button type="submit" class="btn btn-success btn-block" @click="createQuiz()">Criar Quiz</button>
    </div>
  </div>
</template>
<script>
import { ApiService as QuizService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar.vue";
import QuizList from "@/components/QuizList.vue";

export default {
  components: {
    Sidebar,
    QuizList,
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
      this.$router.push("/Create");
    },
  },
};
</script>