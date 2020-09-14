<template>
  <div class="app">
    <QuestionBar :score="currentScore" :current="currentQuestion + 1" :total="questions.length"/>

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
          <button v-if="selectedAnswer != null" class="btn btn-success p2" @click="validateQuestion">Conferir</button>
        </div>

        <!-- Notificações -->
        <div v-if="showSheet" :class="answerValidation ? ['fixed-bottom bg-success'] : ['fixed-bottom bg-danger']">
          <div class="text-light text-center py-5">
              <i class="fas fa-check-circle fa-3x mb-2"></i>
              <h4>Você {{answerValidation ? 'acertou' : 'errou' }}!</h4>
              <button class="btn btn-outline-light mt-4" @click="nextQuestion">PROXIMA PERGUNTA</button>
          </div>
        </div> 
      </div>
    </div>
</template>

<script>
import { ApiService as QuestionService } from "@/services/ApiService";
import QuestionBar from "@/components/QuestionBar.vue";

export default {
  components: {
    QuestionBar,
  },
  data() {
    return {
      answerValidation: null,
      questionService: new QuestionService('questions'),
      questions: [],
      currentQuestion: 0,
      currentScore: 0,
      selectedAnswer: null,
      showSheet: false
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
        this.questions.push({ title: qst.title , answers: answersArray });
      });
    },
    validateQuestion: function () {
      if (this.selectedAnswer == 0) { // 0 sempre será o id de alternativa correta
        this.answerValidation = true;
        this.currentScore++;
        this.showSheet = true;
      } else {
        this.answerValidation = false;
        this.showSheet = true;
      }
    },
    nextQuestion: function () {
      this.showSheet = false;
      this.selectedAnswer = null;
      this.answerValidation = null;

      if (this.currentQuestion === this.questions.length) {
        console.log("Fim do questionario")
      } else {
        console.log("+ questionario");
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
  background-color: var(--bg-dark-light);
  padding: 6px;
}

.btn-group-vertical > label.active {
  background-color: var(--bg-light) !important;
  color: var(--bg-dark) !important;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>