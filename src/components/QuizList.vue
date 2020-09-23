<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ quiz.title }}</h5>
        <button class="btn btn-warning">
          <i class="fas fa-pen"></i>
        </button>
        <button class="btn btn-success mx-2" @click="goToQuiz(quiz.id)">
          <i class="fas fa-play"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quiz"],
  methods: {
    goToQuiz: function (id) {
      this.$router.push({ name: "Question", params: { id: id } });
    },
  },
};
</script>