<template>
  <div class="col-12 my-3">
    <div class="card bg-primary mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ question.title }}</h5>
        <button class="btn btn-warning mx-2" @click="editQuestion(question.id)">
          <i class="fas fa-pen"></i>
        </button>
        <button
          class="btn btn-danger mx-2"
          data-toggle="modal"
          :data-target="`#deleteThis${question.id}`"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
    <!-- Modal para deletar question -->
    <div
      class="modal fade"
      :id="`deleteThis${question.id}`"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteThisTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="text-center bg-primary modal-content">
          <div class="modal-body">
            <h5>Confimar ação?</h5>
            Ao confirmar, não será possível reverter essa operação.
          </div>
          <div class="modal-body">
            <button
              type="button"
              class="btn btn-danger mx-2"
              data-dismiss="modal"
              @click="deleteQuestion(question.id)"
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
import { ApiService as QuestionsService } from "@/services/ApiService";

export default {
  props: {
    question: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      questionsService: new QuestionsService("questions"),
    };
  },
  methods: {
    //A criar pagina para editar as informações da questão
    editQuestion(id) {
      this.$router.push({ name: "EditQuestion", params: { id: id } });
    },
    async deleteQuestion(id) {
      await this.questionsService.deleteOne(id);
      this.$toasted.global.delete_success();
      this.$router.go(this.$router.currentRoute); //Recarrega mesma rota para refazer a query
    },
  },
};
</script>