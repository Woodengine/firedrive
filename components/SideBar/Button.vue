<script setup lang='ts'>

withDefaults(defineProps<{btnLabel: string, icon: any, path: string}>(), { btnLabel: 'Click me', icon: 'mdi:square-rounded-outline', path: '/' })

</script>

<!-- -- template -- --> 
<template>
<div class="flex flex-col text-center items-center w-fit gap-2">
    <NuxtLink :to="path" class="btn shadow-sm shadow-slate-900 h-[2rem] w-[3.5rem]">  
        <Icon :name="icon" class="h-6 w-6 text-purple-700"/>
    </NuxtLink>
    <h3 class="w-full overflow-visible">{{ btnLabel }}</h3>
</div>
</template>