<template>
  <div class="col-12 col-md-3 mt-2">
    <div class="card bg-blue-container text-white mx-0" @click="goToQuiz(quiz.id)">
      <img class="card-img-top" src="@/assets/bg-prototype.png" />
      <div class="card-body">
        <h5 class="card-title">{{ quiz.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ quiz.category }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'quiz' ],
  methods: {
    goToQuiz: function(id) {
      this.$router.push({ name: 'Question', params: { id: id } })
    }
  }
}
</script>