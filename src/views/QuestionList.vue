<template>
  <div class="app">
    <Sidebar />
    <QuestionTitle v-for="question in questionsData" :key="question.id" :question="question" />
  </div>
</template>

<script>
import { ApiService as QuestionsService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar";
import QuestionTitle from "@/components/QuestionTitle";

export default {
  components: {
    Sidebar,
    QuestionTitle,
  },
  data() {
    return {
      questionsService: new QuestionsService("questions"),
      questionsData: [],
    };
  },
  async mounted() {
    this.LoadQuestions(); //Faz a query do quiz a ser editado
  },
  methods: {
    LoadQuestions: async function () {
      this.questionsData = await this.questionsService.queryFilter({
        quiz_id: this.$route.params.id,
      });
      console.log(this.questionsData);
    },
  },
};
</script>