<template>
  <div class="app">
    <Sidebar />
    <div class="container">
      <h2 class="text-center my-4">Criar Quiz</h2>
      <form class="mt-4" @submit.prevent="createQuiz">
        <!-- Titulo do quiz -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-font"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuizData.title"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Titulo"
            required
          />
        </div>
        <!-- Categoria do quiz -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-align-left"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuizData.category"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Categoria"
            required
          />
        </div>
        <!-- Descrição do quiz  -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-align-right"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="QuizData.description"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Descrição"
            required
          />
        </div>
        <!-- Idioma do quiz -->
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-language"></i>
            </span>
          </div>
          <select class="form-control" v-model="QuizData.lang" required>
            <option value="pt-br">PT-BR</option>
            <option value="es">ES</option>
          </select>
        </div>

        <button type="submit" class="btn btn-success btn-block mt-3">Criar</button>
        <router-link class="btn btn-danger btn-block mt-3" :to="{ name: 'Professor' }"
          >Voltar</router-link
        >
      </form>
    </div>
  </div>
</template>


<script>
import Sidebar from "@/components/Sidebar";
import { ApiService as QuizService } from "@/services/ApiService";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      quizService: new QuizService("quiz"),
      QuizData: {
        title: null,
        category: null,
        description: null,
        lang: null,
      },
    };
  },
  methods: {
    async createQuiz() {
      await this.quizService.createOne(this.QuizData);
      this.$router.push({ name: "Professor" });
      this.$toasted.global.createQuiz_success();
      //Redirecionar para pagina home do professor
    },
  },
};
</script>