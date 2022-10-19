<script setup lang="ts">

    console.log("dashboard-layout.vue")

</script>

<!--  ------ template -------  --> 

<template>
<div class="flex h-full w-full justify-center items-center">

    <div class="grid grid-cols-9 sm:grid-cols-12 
    place-content-between max-w-[80rem] w-full">

        <div class="h-full col-span-3 bg-blue-100 dark:bg-slate-800 
        hidden sm:block">
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

        <div class="h-screen col-span-9 dark:bg-slate-900 bg-blue-300">
            <slot name="theheader"></slot>
            <slot name="main-body"></slot>
        </div>

    </div>

</div>
</template>