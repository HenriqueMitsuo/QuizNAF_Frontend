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
      <h3 class="text-center my-2">Quiz</h3>
      <QuizTitle :quiz="quiz" />
      <h3 class="text-center my-2">Questões</h3>
      <QuestionTitle v-for="question in questionsData" :key="question.id" :question="question" />
      <button type="submit" class="btn btn-success btn-block my-2" @click="createQuestion(quiz_id)">
        Adicionar pergunta
      </button>
    </div>
  </div>
</template>

<script>
import { ApiService as QuestionsService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar";
import QuizTitle from "@/components/QuizTitle";
import QuestionTitle from "@/components/QuestionTitle";

export default {
  components: {
    Sidebar,
    QuizTitle,
    QuestionTitle,
  },
  data() {
    return {
      quiz_id: this.$route.params.id,
      questionsService: new QuestionsService("questions"),
      quizService: new QuestionsService("quiz"),
      questionsData: [],
      quiz: [],
      loading: true,
    };
  },
  async mounted() {
    this.LoadQuestions(); //Faz a query das questions do quiz atual
    this.LoadQuiz(); //Faz a query para o quiz atual
    this.loading = false;
  },
  methods: {
    LoadQuestions: async function () {
      this.questionsData = await this.questionsService.queryFilter({
        quiz_id: this.quiz_id,
      });
    },
    LoadQuiz: async function () {
      this.quiz = await this.quizService.queryOne(this.quiz_id);
    },
    createQuestion: function (id) {
      this.$router.push({ name: "CreateQuestion", params: { id: id } });
    },
  },
};
</script>