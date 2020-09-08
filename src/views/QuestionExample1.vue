<template>
  <div class="app">
    <QuestionBar />
    <QuestionStatusBar />

    <div class="bg-blue">
      <div class="container">
        <!-- Texto da questão -->
        <QuestionText />
        <QuestionAlternative />

        <!-- Botão fora do wireframe -->
        <div class="py-2 text-center">
          <button class="btn btn-success p2">Conferir</button>
        </div>
      </div>
      <QuestionCorrect />
    </div>
  </div>
</template>

<script>
import QuestionBar from "@/components/QuestionBar.vue";
import QuestionStatusBar from "@/components/QuestionStatusBar.vue";
import QuestionText from "@/components/QuestionText.vue";
import QuestionAlternative from "@/components/QuestionAlternative.vue";
import QuestionCorrect from "@/components/QuestionCorrect.vue";

export default {
  components: {
    QuestionBar,
    QuestionStatusBar,
    QuestionText,
    QuestionAlternative,
    QuestionCorrect,
  },
};
</script>