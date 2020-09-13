<template>
  <div class="app">
    <Sidebar />

    <!-- <NavBar /> -->
    <div class="bg-blue">
      <!-- px define padding left e right -->
      <div class="container-fluid">
        <!-- Linha do Tópico principal expandido -->
        <!-- <TopicExpanded /> -->

        <!-- Linha para Tópicos | mt-4 coloca um espaçamento do componente acima -->
        <div class="card-deck mt-4">
          <Topic v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
        </div>
      </div>
    </div>
    <AboutDialog />
  </div>
</template>

<script>
import { ApiService as QuizService } from "@/services/ApiService";
import Sidebar from "@/components/Sidebar.vue";
// import TopicExpanded from "@/components/TopicExpanded.vue";
import Topic from "@/components/Topic.vue";
import AboutDialog from "@/components/AboutDialog.vue";

export default {
  components: {
    Sidebar,
    // TopicExpanded,
    Topic,
    AboutDialog,
  },
  data() {
    return {
      quizService: new QuizService('quiz'),
      quizzes: []
    }
  },
  async mounted() {
    this.quizzes = await this.quizService.queryAll();
    console.log(this.quizzes);
  },
};
</script>

<style>
/* Estilização para deixar os numeros ao da progress bar */
.progress-custom {
  display: table;
  width: 100%;
}

.progress-custom .progress {
  margin-bottom: 7px;
  vertical-align: middle;
}

.progress-custom .progress-value {
  display: table-cell;
  width: 1%;
  padding: 0 4px;
}
</style>

