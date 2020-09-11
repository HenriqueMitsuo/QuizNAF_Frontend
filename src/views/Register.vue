<template>
  <div>
    <Sidebar />
    <RegisterForm />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: {
    Sidebar,
    RegisterForm,
  },
};
</script>