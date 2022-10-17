<template>
<div class="flex flex-col h-screen justify-between">

    <div class="w-full h-32 flex justify-center pt-4 mt-8"> 
        <slot name="header"> <SharedSkeleton :iterations="4" /> </slot>
    </div>

    <div class="w-full h-full"> 
        <slot name="itembox"> <SharedSkeleton :iterations="4" /> </slot>
    </div>

    <div class="flex place-content-center w-full h-32 col-start-1 col-end-7">
        <slot name="footer">(Footer)</slot>
    </div>

</div>
</template>