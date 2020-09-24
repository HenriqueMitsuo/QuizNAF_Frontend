<template>
  <div class="app">
    <Sidebar />
    <!-- Usando a mesma view para criar Question ou Quiz -->
    <!-- Se quiz_id for 0, irá criar um Quiz, se não, irá criar uma questão de um quiz antes selecionado -->
    <CreateQuiz v-if="quiz_id == 0" />
    <CreateQuestion v-if="quiz_id != 0" />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import CreateQuiz from "@/components/CreateQuiz.vue";
import CreateQuestion from "@/components/CreateQuestion.vue";

export default {
  components: {
    Sidebar,
    CreateQuiz,
    CreateQuestion,
  },
  data() {
    return {
      quiz_id: this.$route.params.id,
    };
  },
};
</script>