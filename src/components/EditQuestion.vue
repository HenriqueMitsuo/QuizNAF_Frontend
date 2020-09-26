<template>
  <div class="app">
    <Sidebar />
    <div class="container">
      <h3 class="text-white text-center mt-2">Atualizar questão</h3>
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

        <button type="submit" class="btn btn-success btn-block mt-3">Salvar alterações</button>
        <router-link class="btn btn-danger btn-block mt-3" to="/Professor">Voltar</router-link>
      </form>
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
      quiz_id: this.$route.params.id,
      QuestionData: {
        title: null,
        trueAlternative: null,
        falseAlternative1: null,
        falseAlternative2: null,
        quiz_id: this.$route.params.id,
      },
    };
  },
  async mounted() {
    this.autoFill(this.quiz_id); //Auto preenche os dados
  },
  methods: {
    autoFill: async function (id) {
      this.QuestionData = await this.questionService.queryOne(id);
    },
    updateQuestion: async function () {
      await this.questionService.updateOne(this.quiz_id, this.QuestionData);
      this.$router.push("/Professor/");
      this.$toasted.global.updateprofile_success(); //Vai escrever na tela "Dados atualizados com sucesso"
    },
  },
};
</script>