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


        <form class="grid gap-8 mb-4">
            <input type="text" placeholder="@email" class="input input-bordered input-info w-full max-w-xs" />

            <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
        </form>

        <button class="btn btn-primary" @click="submitForm">next</button>

    </div>

    </div>
</div>
</template>