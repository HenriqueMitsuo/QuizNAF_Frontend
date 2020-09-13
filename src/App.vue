<template>
  <div class="app">
    <!-- Font Awesome Instalado (trocar para biblioteca vue após definir icones) -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <router-view />
  </div>
</template>

<script>
// import { ApiService as QuizService } from "@/services/ApiService";

// export default {
//   data() {
//     return {
//       quizService: new QuizService('quiz'),
//       quiz: []
//     }
//   },
//   async mounted() {
//     this.quiz = await this.quizService.queryAll();
//     console.log(this.quiz);
//   }
// };
</script>

<style>
/* Cores do container */
body {
  background-color: #2b3c4d !important;
}

/* Cor do plano de fundo */
.bg-blue-container {
  background-color: #34495e !important;
}
</style>
