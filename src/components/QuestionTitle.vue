<template>
  <div class="col-12 my-3">
    <div class="card bg-blue-container text-white mx-0">
      <div class="card-body">
        <h5 class="card-title">{{ question.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>