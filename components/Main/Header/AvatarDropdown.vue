<script setup lang='ts'>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const toggleOptions = ref(false);

const [parent] = useAutoAnimate({ duration: 200, easing: 'ease-out' }) 

const userOptions = [
    {path:'/setting', name:'Account settings', icon: 'mdi:settings'},
    {path:'/firebase-settings', name:'Firebase settings',icon: 'mdi:fire'},
    {path:'/help', name:'Help', icon: 'mdi:help'},
    {path:'/logout', name:'Logout', icon:'mdi:logout'},
]

</script>

<!-- -- template -- --> 
<template>
<NuxtLayout name="centered">

    <div class="relative mt-5" ref="parent">

    <div class="avatar z-50">
        <div class="w-50 h-10
        rounded-full 
        ring
        ring-primary
        ring-offset-base-100
        ring-offset-2" role="button"
        v-on:click="toggleOptions = true">
            <img src="https://placeimg.com/194/194/people" />
        </div>
    </div>

    <div v-on:mouseleave="toggleOptions = false"  
    class="absolute z-40
    rounded-b-xl 
    rounded-tl-xl
    shadow-sm
    shadow-purple-900 
    p-4 
    right-2
    top-1
    w-[15rem]
    bg-slate-700"
    v-if="toggleOptions"> 

        <div class="w-[11rem] text-zinc-300 font-bold grid grid-cols-1 gap-1">
            <template v-for="{path, name, icon} in userOptions">
                <NuxtLink :to="path" class="py-1.5 pl-4 -mx-4 hover:text-purple-500"> 
                    <Icon :name="icon" class="h-5 w-6 text-purple-500"/>
                    {{ name }}
                </NuxtLink> 
            </template>
        </div>

    </div>

</div>    

</NuxtLayout>
</template>