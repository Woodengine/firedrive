<script setup lang="ts">
console.log("dashboard-layout.vue")
</script>

<!--  ------ template -------  --> 

<template>
<div class="flex h-full w-full justify-center items-center">

    <div class="grid grid-cols-12 place-content-between max-w-[80rem] w-full">

        <div class="h-full col-span-3 bg-slate-800">
            <slot name="left-menu"> <SharedSkeleton :iterations="4" /> </slot>
        </div>

        <div class="h-screen col-span-9 bg-slate-900">
            <slot name="theheader"> ( SLOT :: THEHEADER > FALLBACK CONTENT ) </slot>
            <slot name="main-body"> <SharedSkeleton :iterations="5" /> </slot>
        </div>

    </div>

</div>
</template>