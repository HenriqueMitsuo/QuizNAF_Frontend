<template>
  <div v-if="showSheet" :class="answerValidation ? ['fixed-bottom bg-success'] : ['fixed-bottom bg-danger']">
    <div class="text-light text-center py-5">
        <i class="fas fa-check-circle fa-3x mb-2"></i>
        <h4 class="text-light">Você {{answerValidation ? 'acertou' : 'errou' }}!</h4>
        <button v-if="lastQuestion == false" class="btn btn-outline-light mt-4" @click="nextQuestion">PROXIMA PERGUNTA</button>
        <router-link v-if="lastQuestion == true" class="btn btn-outline-light mt-4" :to="{ name: 'Home' }">FINALIZAR</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'question-alerts',
    props: ['showSheet', 'answerValidation', 'lastQuestion'],
    methods: {
        nextQuestion() {
            this.$emit('nextQuestion');
        }
    }
}
</script>

<style>

</style>