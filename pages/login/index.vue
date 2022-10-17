<script setup lang="ts">
definePageMeta({
  layout: false, //this turns off 'default' layout
  pageTransition: true
});

useHead({
  titleTemplate: 'Login | FireDrive',
})


</script>

<!-- --------- template --------  --> 

<template>
<div>
  <NuxtLayout name="login-layout">
    <FormsLoginForm />
  </NuxtLayout>
</div>
</template>