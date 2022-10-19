<script setup lang='ts'>
  const env = useRuntimeConfig()
  const appName = env.public.appName
  const styles = 'w-[30px] mx-3 mb-2';
</script>

<!-- -- template -- --> 
<template>
<div class="flex justify-center items-center h-full">
    <div :class="styles" onselectstart="return false">
        <img src="~/assets/img/logo.svg" > <!-- Logo -->
    </div>
    <h1 class="text-lg font-semibold" unselectable="off" onselectstart="return false">{{ appName }}</h1>
</div>
</template>

<style scoped>
img {
  pointer-events: none;
}
</style>