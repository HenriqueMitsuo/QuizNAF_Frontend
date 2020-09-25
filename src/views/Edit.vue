<template>
  <div class="app">
    <Sidebar />
    <EditQuiz />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import EditQuiz from "@/components/EditQuiz.vue";
export default {
  components: {
    Sidebar,
    EditQuiz,
  },
};
</script>