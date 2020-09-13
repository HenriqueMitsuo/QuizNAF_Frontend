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
        <div class="btn-group-vertical btn-group-toggle col-12" data-toggle="buttons">
          <label v-for="answer in questions[currentQuestion].answers" :key="answer.id" class="btn btn-secondary mb-3">
            <input type="radio" name="options" autocomplete="off" checked> {{ answer.text }}
          </label>
        </div>  

        <!-- Ações -->
        <div class="pt-2 text-center">
          <button class="btn btn-success p2" @click="nextQuestion">Conferir</button>
        </div>

        <!-- <div class="pt-2 text-center">
          <button class="btn btn-outline-success p2 mr-2" @click="validateQuestion(true)">Correta</button>
          <button class="btn btn-outline-danger p2" @click="validateQuestion(false)">Errada</button>
        </div> -->

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

      // "Formatando" questões em um array separado
      fetchQuestions.forEach(qst => {
        let answersArray = [
          { text: qst.trueAlternative, correct: 1 },
          { text: qst.falseAlternative1, correct: 0 },
          { text: qst.falseAlternative2, correct: 0}
        ];
        answersArray.sort(() => {return 0.5 - Math.random()});
        this.questions.push({ title: qst.title, answers: answersArray });
      });
    },
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

.btn-group-vertical .active {
  border: 2px solid white;
  background-color: white !important;
  color: black !important;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>