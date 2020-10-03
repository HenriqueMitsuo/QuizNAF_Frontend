<template>
  <div>
    <div class="col-12 my-3">
      <div class="card bg-primary mx-0">
        <div class="card-body">
          <h5 class="card-title">{{ quiz.title }}</h5>
          <!-- Visualizar e editar questões -->
          <!-- Se estiver na pagina QuestionList, não mostra essa opção -->
          <button
            class="btn btn-primary mr-2"
            v-if="this.$route.name != 'QuestionList'"
            @click="editQuestions(quiz.id)"
          >
            <i class="fas fa-question"></i>
          </button>

          <!-- Ao invés disso, mostrar essa opção, para voltar atrás -->
          <router-link
            class="btn btn-primary mr-2"
            v-if="this.$route.name == 'QuestionList'"
            :to="{ name: 'Professor' }"
          >
            <i class="fas fa-arrow-left"></i>
          </router-link>

          <!-- Editar Quiz (Titulo, Categoria, Descrição...) -->
          <button class="btn btn-warning mx-2" @click="editQuiz(quiz.id)">
            <i class="fas fa-pen"></i>
          </button>
          <!-- Dar play no quiz diretamente -->
          <button class="btn btn-success mx-2" @click="goToQuiz(quiz.id)">
            <i class="fas fa-play"></i>
          </button>
          <!-- Deletar Quiz -->
          <button
            class="btn btn-danger mx-2"
            data-toggle="modal"
            :data-target="`#deleteQuiz${quiz.id}`"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Modal para deletar Quiz -->
    <div
      class="modal fade"
      :id="`deleteQuiz${quiz.id}`"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteQuizTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="text-center bg-primary modal-content">
          <div class="modal-body">
            <h5>Deletar quiz?</h5>
            Ao confirmar, não será possível reverter essa operação.
          </div>
          <div class="modal-body">
            <button
              type="button"
              class="btn btn-danger mx-2"
              data-dismiss="modal"
              @click="deleteQuiz(quiz.id)"
            >
              Apagar
            </button>
            <button type="button" class="btn btn-info mx-2" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService as QuizService } from "@/services/ApiService";

export default {
  props: ["quiz"],
  data() {
    return {
      quizService: new QuizService("quiz"),
    };
  },
  methods: {
    editQuestions: function (id) {
      this.$router.push({ name: "QuestionList", params: { id: id } });
    },
    goToQuiz: function (id) {
      this.$router.push({ name: "Question", params: { id: id } });
    },
    editQuiz: function (id) {
      this.$router.push({ name: "EditQuiz", params: { id: id } });
    },
    deleteQuiz: async function (id) {
      try {
        await this.quizService.deleteOne(id);
        this.$toasted.global.delete_success();
        this.$router.push({ name: "Professor" });
      } catch (error) {
        console.log("Server error: ${error}");
        this.$toasted.global.delete_error();
      }
    },
  },
};
</script>