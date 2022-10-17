<script setup lang='ts'>
definePageMeta({
    layout: false, //this turns off 'default' layout
    pageTransition: true
})

useHead({
  titleTemplate: 'Signup | FireDrive',
})

</script>


<!-- -- template -- -->
<template>
<NuxtLayout name="login-layout">
    <main class="grid">
        <h2>* Signup page *</h2>
        <NuxtLink to='/login' class="mt-3 text-center">Login instead</NuxtLink>
    </main>
</NuxtLayout>
</template>