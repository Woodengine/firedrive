<script setup lang='ts'>
import { BeakerIcon, StarIcon, BookmarkIcon } from '@heroicons/vue/24/solid'
// import { StarIcon } from '@heroicons/vue/24/solid';

withDefaults(defineProps<{btnLabel: string, icon: any}>(), { btnLabel: 'Click me', icon: StarIcon })

const btnName = 'my button'

</script>


<!-- -- template -- -->
<template>
<div class="flex flex-col w-fit gap-2">
    <button class="btn">  
        <component :is="icon" class="h-6 w-6 text-purple-700"/>
    </button>
    <h3 class="w-full overflow-visible">{{ btnLabel }}</h3>
</div>
</template>