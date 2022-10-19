<script setup lang='ts'>

</script>

<!-- -- template -- --> 
<template>


<div class="mb-4 w-full border-b-[2px] border-b-slate-800">
    <div class="relative w-full my-3 px-3
    text-gray-600 focus-within:text-gray-400">
    
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline w-full">
            <Icon name="mdi:search" size="27" />
        </button>
        </span>

        <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 
        rounded-md pl-10 w-full
        focus:outline-none focus:text-gray-200" placeholder="Search..." autocomplete="off">

    </div>
</div>    

</template>