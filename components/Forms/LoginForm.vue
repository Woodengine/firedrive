<script setup lang='ts'>

const submitForm = () => {
    alert("trying to login")
}


</script>

<!-- -- template -- --> 

<template>
<div>

    <div class="card w-96 bg-base-100 ase-100 shadow-xl">

    <figure>
        <!-- <img src="https://placeimg.com/400/225/arch" alt="Shoes" />  -->
    </figure>

    <div class="card-body">
        <h2 class="card-title mb-4">Log in to your drive!</h2>


        <form class="grid gap-5 mb-4">
            <input type="text" placeholder="your@email" class="input input-bordered input-info w-full max-w-xs" />

            <input type="text" placeholder="pAssW0rD" class="input input-bordered input-info w-full max-w-xs" />
        </form>

        <div class="grid self-center w-full">
            <button class="btn btn-sm btn-primary w-auto" @click="submitForm">next</button>
            <NuxtLink to='/signup' class="mt-3 text-center">Signup instead</NuxtLink>
        </div>
    
    </div>

    </div>
</div>
</template>