<template>
  <div class="app">
    <Sidebar />
    <CreateQuiz />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import CreateQuiz from "@/components/CreateQuiz.vue";
export default {
  components: {
    Sidebar,
    CreateQuiz,
  },
  data() {
    return {
      quiz_id: this.$route.params.id,
    };
  },
  async mounted() {
    if (this.quiz_id != undefined) {
      console.log("Criar question");
    } else {
      console.log("Criar quiz");
    }
  },
};
</script>