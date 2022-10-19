<script setup lang="ts">

    console.log("dashboard-layout.vue")

</script>

<!--  ------ template -------  --> 
<template>
<div class="flex w-full min-h-screen justify-center items-center bg-zinc-700">

    <div class="grid grid-cols-9 sm:grid-cols-12
    w-full
    card 
    place-content-between
    min-h-[57rem]
    max-w-[80rem]">

        <div class="h-fit col-span-3 
        hidden sm:block
        bg-blue-100 dark:bg-slate-800
        ">
              <!-- left-menu      --> 
            <NuxtLayout name="side-bar"> 
                <template #header>
                <SideBarHeader />
                </template>

                <template #itembox> 
                <SideBarOptionBox />
                </template>

                <template #footer> 
                <SideBarFooterBtn />
                </template>
            </NuxtLayout>
        </div>

        <div class="h-full min-h-[57rem]
        col-span-9 
        dark:bg-slate-900 bg-blue-300">
            <slot name="theheader"></slot>
            <slot name="main-body"></slot>
        </div>

    </div>

</div>
</template>