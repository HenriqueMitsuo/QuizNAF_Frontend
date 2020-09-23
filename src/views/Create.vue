<template>
    <div class="app">
        <Sidebar />
        <CreateQuiz />
        <!-- Usar a mesma view para criar as Questions depois -->
    </div> 
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import CreateQuiz from "@/components/CreateQuiz.vue";
export default {
    components: {
        Sidebar,
        CreateQuiz,
    }
}
</script>