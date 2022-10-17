<script setup lang="ts">
console.log("dashboard-layout.vue")
</script>

<!--  ------ template -------  --> 

<template>
<div class="grid grid-cols-12 place-content-between">

    <div class="h-screen col-span-3 bg-slate-800">
        <slot name="left-menu"> ( SLOT :: LEFT-MENU SLOT > FALLBACK CONTENT  ) </slot>
    </div>

    <div class="h-screen col-span-9 bg-slate-900">
        <slot name="theheader"> ( SLOT :: THEHEADER > FALLBACK CONTENT ) </slot>
        <slot name="main-body"> ( SLOT :: MAIN-BODY > FALLBACK CONTENT ) </slot>
    </div>

</div>
</template>