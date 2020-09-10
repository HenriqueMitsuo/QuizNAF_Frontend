<template>
  <div class="app">
    <QuestionBar />

    <div class="vh-100">
      <div class="container">

        <div class="row">
          <div class="col-12 py-5">
            <p class="text-light text-center" style="font-size: 1.2rem">
              {{ questions[0].text }}
            </p>
          </div>
        </div>

        <QuestionAlternative :questions="questions[0]" />

        <div class="pt-2 text-center">
          <button class="btn btn-success p2">Conferir</button>
        </div>

        <div class="pt-2 text-center">
          <button class="btn btn-outline-success p2 mr-2" @click="validateQuestion('correct')">Correta</button>
          <button class="btn btn-outline-danger p2" @click="validateQuestion('wrong')">Errada</button>
        </div>

        <div class="pt-2 text-center">
          
        </div>

        <BottomAlerts :questionValidation="answerValidation" />

        

      </div>
    </div>
  </div>
</template>

<script>
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
      questions: [ 
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin nisi in ultricies accumsan. Donec pretium rhoncus sollicitudin. Mauris pretium, urna eu ornare dictum',
          answers: [
            { id: 1, text: 'Lorem Ipsum Ent Dolor' },
            { id: 2, text: 'Sit amet requiescat in pace' },
            { id: 3, text: 'Dominicus supremus labutas requiescat' },
          ]
        },  
      ],
      answerValidation: null,
    }
  },
  methods: {
    validateQuestion(val) {
      this.answerValidation = val;
    }
  }
};
</script>