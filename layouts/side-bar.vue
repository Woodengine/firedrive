<template>
<div class="flex flex-col h-screen justify-between">

    <div class="w-full h-32 flex justify-center pt-4 mt-8"> 
        <slot name="header"></slot>
    </div>

    <div class="s">
        <slot name="items"></slot>
    </div>

    <div class="w-full h-32 col-start-1 col-end-7">
        <slot name="footer"></slot>
    </div>

</div>
</template>