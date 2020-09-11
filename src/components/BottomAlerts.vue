<template>
<div id="bottom-alerts">
    <div v-if="questionValidation == true" class="sheet fixed-bottom bg-success">
        <div class="text-light text-center py-5">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>

            <h4>Você acertou!</h4>
            <p>A resposta correta era <b>Resposta 3</b></p>
            <button class="btn btn-outline-light" @click="nextQuestion">PROXIMA PERGUNTA</button>
        </div>
    </div>

    <div v-if="questionValidation == false" class="fixed-bottom bg-danger">
        <div class="text-light text-center py-5">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
            <h4>Você errou!</h4>
            <p>A resposta correta era <b>Resposta 3</b></p>
            <button class="btn btn-outline-light" @click="nextQuestion">PROXIMA PERGUNTA</button>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    props: ['questionValidation'],
    methods: {
        nextQuestion: function() {
            this.$emit("close-alert");
        }
    }
}
</script>

<style>

</style>