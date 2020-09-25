<template>
  <div class="app">
    <QuestionBar :score="currentScore" :current="currentQuestion + 1" :total="questions.length"/>
      <!-- Spinner -->
      <div v-if="loading" class="text-center mt-4">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Carregando...</span>
        </div>
      </div>  

      <!-- Conteúdo -->
      <div v-if="questions.length > 0" class="container" :class="formBlock ? 'disable-form' : ''"> 
        <!-- Titulo -->
        <div class="col-12 py-5">
          <p class="text-light text-center" style="font-size: 1.2rem">
            {{ questions[currentQuestion].title }}
          </p>
        </div>

        <!-- Alternativas -->
        <div class="btn-group-vertical btn-group-toggle col-12">
          <label 
            v-for="answer in questions[currentQuestion].answers" 
            :key="answer.id" 
            :class="[{ active: selectedAnswer === answer.id }, 'btn btn-secondary bg-app-primary mb-3']">
            <input 
              v-model="selectedAnswer" 
              :value="answer.id" 
              type="radio" 
              name="options" 
              autocomplete="off" 
              checked />
              {{ answer.text }}
          </label>
        </div>

        <!-- Ações -->
        <div class="pt-2 text-center">
          <button 
            v-if="selectedAnswer != null" 
            class="btn btn-success p2" 
            @click="validateQuestion">
            Conferir
          </button>
        </div>    
      </div>

      <!-- Alertas de validação -->
      <transition name="fade-up">
        <QuestionAlerts 
          v-on:nextQuestion="nextQuestion" 
          :showSheet="showSheet" 
          :answerValidation="answerValidation" />
      </transition>
    </div>
</template>

<script>
import { ApiService as QuestionService } from "@/services/ApiService";
import QuestionAlerts from "@/components/QuestionAlerts.vue";
import QuestionBar from "@/components/QuestionBar.vue";

export default {
  components: {
    QuestionBar,
    QuestionAlerts
  },
  data() {
    return {
      answerValidation: null,
      questionService: new QuestionService('questions'),
      questions: [],
      currentQuestion: 0,
      currentScore: 0,
      selectedAnswer: null,
      showSheet: false,
      loading: true,
      formBlock: false
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
        this.loading = false;
      });
    },
    validateQuestion: function () {
      this.formBlock = true;
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
      this.formBlock = false;
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
.disable-form {
  pointer-events: none;
  user-select: none;
}

.btn-group-vertical > label {
  border: none;
  border-radius: 5px !important;
  padding: 6px;
}

.btn-group-vertical > label.active {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.fade-up-enter-active {
  transition: all 0.7s ease;
}
.fade-up-leave-active {
  transition: all 0.7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-up-enter, .slide-fade-leave-to {
  transform: translateY(25px);
  opacity: 0;
}
</style>