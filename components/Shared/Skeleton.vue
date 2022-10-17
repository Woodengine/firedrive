<script setup lang="ts">

interface IProps {
    iterations: number
}

const { iterations } = withDefaults(defineProps<IProps>(), {iterations: 1})

</script>


<!-- -- template -- -->
<template>
    <div v-for="item in iterations" class="grid"> 

    <div role="status" class="p-4 max-w-sm rounded shadow animate-pulse md:p-6 dark:border-gray-700">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div class="flex items-center mt-4 space-x-3">
            <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
        </div>
    </div>
    
</div> 
</template>