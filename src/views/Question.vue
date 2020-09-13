<template>
  <div class="app">
    <QuestionBar />

    <div class="vh-100">
      <div class="container">

        <!-- Titulo -->
        <div class="col-12 py-5">
          <p class="text-light text-center" style="font-size: 1.2rem">
            {{ questions[currentQuestion].title }}
          </p>
        </div>

        <!-- Alternativas -->
        <div class="btn-group-vertical btn-group-toggle col-12">
          <label v-for="answer in questions[currentQuestion].answers" :key="answer.id" :class="[{ active: selectedAnswer === answer.id }, 'btn btn-secondary mb-3']">
            <input v-model="selectedAnswer" :value="answer.id" type="radio" name="options" autocomplete="off" checked> {{ answer.text }}
          </label>
        </div>  

        <!-- Ações -->
        <div class="pt-2 text-center">
          <button class="btn btn-success p2" @click="validateQuestion">Conferir</button>
        </div>

        <BottomAlerts @close-alert="nextQuestion" :questionValidation="answerValidation" />       

      </div>
    </div>
  </div>
</template>

<script>
import { ApiService as QuestionService } from "@/services/ApiService";
import QuestionBar from "@/components/QuestionBar.vue";
import BottomAlerts from '@/components/BottomAlerts.vue';

export default {
  components: {
    QuestionBar,
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
    this.fetchQuestions();
  },
  methods: {
    fetchQuestions: async function() {
      let fetchQuestions = await this.questionService.queryFilter({ quiz_id: this.$route.params.id });

      fetchQuestions.forEach(qst => {
        let answersArray = [
          { id: 0, text: qst.trueAlternative },
          { id: 1, text: qst.falseAlternative1 },
          { id: 2, text: qst.falseAlternative2 }
        ];

        answersArray.sort(() => {return 0.5 - Math.random()});
        this.questions.push({ title: qst.title, correctId: 0, answers: answersArray });
      });
    },
    validateQuestion: function () {
      if (this.selectedAnswer == this.questions[this.currentQuestion].correctId) {
        console.log('Correto');
        this.answerValidation = true;
      } else {
        this.answerValidation = false;
      }
    },
    nextQuestion: function () {
      this.selectedAnswer = null;
      this.answerValidation = null;

      if (this.currentQuestion == this.questions.length) {
        console.log("Fim do questionario")
      } else {
        this.currentQuestion++;
      }     
    },
  }
};
</script>

<style>
.btn-group-vertical > label {
  border: none;
  border-radius: 5px !important;
  background-color: #34495e;
}

.btn-group-vertical > label.active {
  border: 2px solid white;
  background-color: white !important;
  color: black !important;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>