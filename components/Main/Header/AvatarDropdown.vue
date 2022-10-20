<script setup lang='ts'>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const toggleOptions = ref(false)

const [parent] = useAutoAnimate({ duration: 270, easing: 'ease-in' }) 

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
        v-on:click="toggleOptions= !toggleOptions">
            <img src="https://placeimg.com/194/194/people" />
        </div>
    </div>

    <div  class="absolute 
    rounded-xl 
    z-40
    p-4 
    right-0
    top-14 
    w-[13rem]
    bg-slate-700"
    v-if="toggleOptions"> 


    <ul class="w-[11rem]
        text-zinc-300 font-bold grid grid-cols-1 gap-5">
        <li>
            <NuxtLink to="/setting" class="w-full">Account settings</NuxtLink> 
        </li>

        <li>
            <NuxtLink to="/help">Help</NuxtLink>
        </li>

        <li>
            <NuxtLink to="/firebase-settings">Firebase settings</NuxtLink>
        </li>
        
        <li>
            <NuxtLink to="/logout">Logout</NuxtLink>
        </li>
    </ul>

    </div>

</div>    

</NuxtLayout>
</template>