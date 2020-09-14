<template>
<div id="bottom-alerts">

    <div v-if="show" :class="questionValidation ? ['fixed-bottom bg-success'] : ['fixed-bottom bg-danger']" class="">
        <div class="text-light text-center py-5">
            <i class="fas fa-check-circle fa-3x mb-2"></i>
            <h4>Você {{questionValidation ? 'acertou' : 'errou' }}!</h4>
            <p>A resposta correta era <b>Resposta 3</b></p>
            <button class="btn btn-outline-light" @click="nextQuestion">PROXIMA PERGUNTA</button>
        </div>
    </div>

    <!-- <div v-if="questionValidation == false" class="fixed-bottom bg-danger">
        <div class="text-light text-center py-5">
            <i class="fas fa-times-circle fa-3x mb-2"></i>
            <h4>Você errou!</h4>
            <p>A resposta correta era <b>Resposta 3</b></p>
            <button class="btn btn-outline-light" @click="nextQuestion">PROXIMA PERGUNTA</button>
        </div>
    </div> -->
</div>
  
</template>

<script>
export default {
    props: ['show'],
    methods: {
        nextQuestion: function() {
            this.$emit("close-alert");
        }
    }
}
</script>

<style>

</style>