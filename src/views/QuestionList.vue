<template>
  <div class="app">
    <Sidebar />
    <div class="container text-light">
      <h3 class="text-center my-2">Quiz</h3>
      <QuizList :quiz="quiz" />
      <h3 class="text-center my-2">Questões</h3>
      <QuestionTitle v-for="question in questionsData" :key="question.id" :question="question" />
      <button type="submit" class="btn btn-success btn-block my-2" @click="createQuestion()">
        Adicionar pergunta
      </button>
    </div>
  </div>
</template>

<script>
import { ApiService as QuestionsService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar";
import QuizList from "@/components/QuizList";
import QuestionTitle from "@/components/QuestionTitle";

export default {
  components: {
    Sidebar,
    QuizList,
    QuestionTitle,
  },
  data() {
    return {
      questionsService: new QuestionsService("questions"),
      quizService: new QuestionsService("quiz"),
      questionsData: [],
      quiz: [],
    };
  },
  async mounted() {
    this.LoadQuestions(); //Faz a query das questions do quiz atual
    this.LoadQuiz(); //Faz a query para o quiz atual
  },
  methods: {
    LoadQuestions: async function () {
      this.questionsData = await this.questionsService.queryFilter({
        quiz_id: this.$route.params.id,
      });
    },
    LoadQuiz: async function () {
      this.quiz = await this.quizService.queryOne(this.$route.params.id);
    },
    createQuestion: function () {
      console.log("A ser desenvolvido");
    },
  },
};
</script>