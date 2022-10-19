<template>
<div class="grid grid-cols-1 gap-4 place-items-stretch h-full"> 
    
    <div class="flex justify-center
    w-full h-32"> 
        <slot name="header"> <SharedSkeleton :iterations="4" /> </slot>
    </div>

    <div class="w-full h-full"> 
        <slot name="itembox"> <SharedSkeleton :iterations="4" /> </slot>
    </div>

    <!-- <div class="flex place-content-center w-full h-40 border col-start col-end"> -->
    <footer class="flex justify-center
    w-full h-40">
        <slot name="footer">(Footer)</slot>
    </footer>
</div>

</template>