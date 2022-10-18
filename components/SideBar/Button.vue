<script setup lang='ts'>
import { StarIcon } from '@heroicons/vue/24/solid'

withDefaults(defineProps<{btnLabel: string, icon: any, path: string}>(), { btnLabel: 'Click me', icon: StarIcon, path: '/' })

</script>

<!-- -- template -- -->
<template>
<div class="flex flex-col w-fit gap-2">
    <NuxtLink :to="path" class="btn">  
        <component :is="icon" class="h-6 w-6 text-purple-700"/>
    </NuxtLink>
    <h3 class="w-full overflow-visible">{{ btnLabel }}</h3>
</div>
</template>