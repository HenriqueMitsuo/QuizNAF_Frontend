<template>
  <div class="row">
    <div class="btn-group-vertical btn-group-toggle col-12" data-toggle="buttons">
      <label v-for="answer in answers" :key="answer.id" class="btn btn-secondary mb-3">
        <input type="radio" name="options" autocomplete="off" checked> {{ answer.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionAlternative',
  props: { question: Object },
  data() {
    return {
      answers: [
        { id: 0, text: this.question.trueAlternative, correct: 1 },
        { id: 1, text: this.question.falseAlternative1, correct: 0 },
        { id: 2, text: this.question.falseAlternative2, correct: 0 },
      ]
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.btn-group-vertical > label {
  border: none;
  border-radius: 5px !important;
  background-color: #34495e;
}

.active {
  border: 2px solid white;
  background-color: white !important;
  color: black !important;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>