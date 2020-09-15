<template>
  <div class="app">
    <Sidebar />
    <ProfileForm />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import ProfileForm from "@/components/ProfileForm.vue";
export default {
  components: {
    Sidebar,
    ProfileForm
  }
};
</script>
