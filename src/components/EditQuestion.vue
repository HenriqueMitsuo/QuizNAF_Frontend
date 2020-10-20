<template>
  <div class="app">
    <Sidebar />
    <div class="container">
      <h2 class="text-center my-4">Atualizar questão</h2>
      <form class="mt-4" @submit.prevent="updateQuestion">
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
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Titulo da questão"
            required
          />
        </div>
        <!-- Alternativa correta -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.trueAlternative"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Alternativa correta"
            required
          />
        </div>
        <!-- Alternativa falsa 1 -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.falseAlternative1"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Alternativa incorreta"
            required
          />
        </div>
        <!-- Alternativa falsa 2 -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuestionData.falseAlternative2"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Alternativa incorreta"
            required
          />
        </div>

        <button type="submit" class="btn btn-success btn-block mt-3">Salvar alterações</button>
      </form>
      <button class="btn btn-danger btn-block mt-3" @click="back">Voltar</button>
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
      question_id: this.$route.params.id,
      QuestionData: {
        title: null,
        trueAlternative: null,
        falseAlternative1: null,
        falseAlternative2: null,
        quiz_id: null,
      },
    };
  },
  async mounted() {
    this.autoFill(this.question_id); //Auto preenche os dados
  },
  methods: {
    async autoFill(id) {
      this.QuestionData = await this.questionService.queryOne(id);
    },
    async updateQuestion() {
      await this.questionService.updateOne(this.question_id, this.QuestionData);
      this.$router.push({ name: "QuestionList", params: { id: this.QuestionData.quiz_id } });
      this.$toasted.global.updateprofile_success(); //Vai escrever na tela "Dados atualizados com sucesso"
    },
    back() {
      this.$router.push({ name: "QuestionList", params: { id: this.QuestionData.quiz_id } });
    },
  },
};
</script>