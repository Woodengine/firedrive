<script setup lang="ts">

    console.log("dashboard-layout.vue")

</script>

<!--  ------ template -------  --> 
<template>

<div class="flex w-full min-h-screen justify-center items-center bg-zinc-200">

    <div class="grid grid-cols-9 sm:grid-cols-12
    w-full 
    xl:rounded-l-2xl xl:pl-3 bg-slate-800
    place-content-between
    min-h-[57rem]
    max-w-[78rem]">

        <!-- LEFT SIDE BAR      --> 
        <div class="h-fit col-span-3 
        hidden sm:block
        bg-blue-100 dark:bg-slate-800">
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

        <!-- MAIN SECTION  --> 
        <div class="col-span-9
        dark:bg-slate-900 bg-blue-300">
            
            <div class="grid grid-cols-1">

                <div class="w-full h-full">
                    <slot name="theheader"></slot>
                </div>    
                
                <div class="max-w-[59rem]
                w-full h-full min-h-[52rem]">
                    <slot name="main-body"></slot>
                </div>
                
            </div>
        </div>

    </div>

</div>

</template>