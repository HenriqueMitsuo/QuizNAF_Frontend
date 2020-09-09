<template>
  <div class="app">
    <QuestionBar />
    <!-- <QuestionStatusBar /> -->

    <div class="bg-blue">
      <div class="container">

        <div class="row">
          <div class="col-12 py-5">
            <p class="text-light text-center" style="font-size: 1.2rem">
              {{ questionText }}
            </p>
          </div>
        </div>

        <QuestionAlternative :questions="questions"/>

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
import QuestionAlternative from "@/components/QuestionAlternative.vue";

export default {
  components: {
    QuestionBar,
    QuestionAlternative,
  },
  data() {
    return {
      questionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin nisi in ultricies accumsan. Donec pretium rhoncus sollicitudin. Mauris pretium, urna eu ornare dictum',
      questions: [
        { id: 1, text: 'Lorem Ipsum Ent Dolor' },
        { id: 2, text: 'Sit amet requiescat in pace' },
        { id: 3, text: 'Dominicus supremus labutas requiescat' },
      ]
    }
  }
};
</script>