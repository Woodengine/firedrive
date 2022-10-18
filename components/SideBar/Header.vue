<script setup lang='ts'>
  const env = useRuntimeConfig()
  const Logo = env.public.logoUrl
  const appName = env.public.appName
  const styles = 'w-[30px] mx-3 mt-[-7pt] mb-8';
</script>

<!-- -- template -- --> 
<template>
<div class="flex">
    <div :class="styles" onselectstart="return false">
        <img :src="Logo" > <!-- Logo -->
    </div>
    <h1 class="text-lg font-semibold" unselectable="off" onselectstart="return false">{{ appName }}</h1>
</div>
</template>

<style scoped>
img {
  pointer-events: none;
}
</style>