<template>
  <div class="app">
    <Sidebar />
    <div class="container">
      <h2 class="text-white text-center mt-2">Criar questão</h2>
      <form class="mt-4" @submit.prevent="createQuestion">
        <!-- Titulo da pergunta -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-font"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.title"
            class="form-control text-light"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Titulo da questão"
            required
          />
        </div>
        <!-- Alternativa correta -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" style="background: transparent">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.trueAlternative"
            class="form-control text-light"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Alternativa correta"
            required
          />
        </div>
        <!-- Alternativa falsa 1 -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" style="background: transparent">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.falseAlternative1"
            class="form-control text-light"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Alternativa incorreta"
            required
          />
        </div>
        <!-- Alternativa falsa 2 -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" style="background: transparent">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.falseAlternative2"
            class="form-control text-light"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Alternativa incorreta"
            required
          />
        </div>
        <button type="submit" class="btn btn-success btn-block mt-3">Criar</button>
      </form>
      <button type="submit" class="btn btn-danger btn-block my-3" @click="voltar">Voltar</button>
    </div>
  </div>
</template>


<script>
import Sidebar from "@/components/Sidebar";
import { ApiService as QuestionService } from "@/services/ApiService";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      questionService: new QuestionService("questions"),
      QuestionData: {
        title: null,
        trueAlternative: null,
        falseAlternative1: null,
        falseAlternative2: null,
        quiz_id: this.$route.params.id,
      },
    };
  },
  methods: {
    createQuestion: async function () {
      await this.questionService.createOne(this.QuestionData);
      this.$router.push({ name: "QuestionList", params: { id: this.QuestionData.quiz_id } });
      this.$toasted.global.createQuestion_success();
      //Redirecionar para pagina de lista de questões anterior
    },
    voltar: function () {
      this.$router.push({ name: "QuestionList", params: { id: this.$route.params.id } });
      //Redireciona para a pagina de lista de questões anterior
    },
  },
};
</script>