<script setup lang="ts">
import loginLayoutVue from '~~/layouts/loginlayout.vue';

definePageMeta({
  layout: "loginlayout",
  title: "Party"
});
</script>

<!-- --------- template --------  --> 

<template>
<div>
  <NuxtLayout name="loginlayout">
    <FormsLoginForm />
  </NuxtLayout>
</div>
</template>