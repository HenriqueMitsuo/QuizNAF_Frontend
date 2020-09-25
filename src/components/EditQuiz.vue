<template>
  <div>
    <h1>Edit quiz</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quiz_id: this.$route.params.id,
    };
  },
};
</script>