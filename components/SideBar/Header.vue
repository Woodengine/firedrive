<script setup lang='ts'>
  const env = useRuntimeConfig()
  const Logo = env.public.logoUrl
  const appName = env.public.appName
</script>

<!-- -- template -- --> 
<template>
<div class="flex">
    <div class="w-[30px] mx-3 mt-[-7pt]" onselectstart="return false">
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