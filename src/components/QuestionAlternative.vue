<template>
  <div class="row">
    <div class="btn-group-vertical btn-group-toggle col-12" data-toggle="buttons">
      <label class="btn btn-secondary mb-3">
        <input type="radio" name="options" id="option1" autocomplete="off" checked> {{ question.trueAlternative }}
      </label>
      <label class="btn btn-secondary mb-3">
        <input type="radio" name="options" id="option2" autocomplete="off"> {{ question.falseAlternative1 }}
      </label>
      <label class="btn btn-secondary mb-3">
        <input type="radio" name="options" id="option3" autocomplete="off"> {{ question.falseAlternative2 }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionAlternative',
  props: { question: Object },
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