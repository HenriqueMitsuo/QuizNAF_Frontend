<template>
  <div class="app">
    <QuestionBar />

    <div class="vh-100">
      <div class="container">

        <div class="row">
          <div class="col-12 py-5">
            <p class="text-light text-center" style="font-size: 1.2rem">
              {{ questions[currentQuestion].title }}
            </p>
          </div>
        </div>

        <QuestionAlternative :question="questions[currentQuestion]" />

        <div class="pt-2 text-center">
          <button class="btn btn-success p2" @click="nextQuestion">Conferir</button>
        </div>

        <div class="pt-2 text-center">
          <button class="btn btn-outline-success p2 mr-2" @click="validateQuestion(true)">Correta</button>
          <button class="btn btn-outline-danger p2" @click="validateQuestion(false)">Errada</button>
        </div>

        <BottomAlerts @close-alert="nextQuestion" :questionValidation="answerValidation" />       

      </div>
    </div>
  </div>
</template>

<script>
import { ApiService as QuestionService } from "@/services/ApiService";

import QuestionBar from "@/components/QuestionBar.vue";
import QuestionAlternative from "@/components/QuestionAlternative.vue";
import BottomAlerts from '@/components/BottomAlerts.vue';

export default {
  components: {
    QuestionBar,
    QuestionAlternative,
    BottomAlerts
  },
  data() {
    return {
      answerValidation: null,
      questionService: new QuestionService('questions'),
      questions: [],
      currentQuestion: 0,
      selectedAnswer: null
    }
  },
  async mounted() {
    this.questions = await this.questionService.queryFilter({
      quiz_id: this.$route.params.id,
    });
  },
  methods: {
    validateQuestion: function (val) {
      this.answerValidation = val;
    },
    nextQuestion: function () {
      this.answerValidation = null;

      if (this.currentQuestion == this.questions.length) {
        console.log("Fim do questionario")
      } else {
        this.currentQuestion++;
      }     
    }
  }
};
</script>