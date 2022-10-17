<script setup lang='ts'>

  definePageMeta({
    layout: false,
    middleware: 'index',
    pageTransition: true,

  })

  useHead({
    titleTemplate: 'Dashboard | FireDrive',
  })

  const env = useRuntimeConfig()
  const Logo = env.public.logoUrl

</script>

<!-- -- template -- --> 

<template>
<NuxtLayout name="dashboard-layout">

  <!-- left-menu      -->
    <template #left-menu>
      <NuxtLayout name="side-bar"> 
        <template #header>
¡          <img :src="Logo"> <!-- Logo -->
        </template>

        <template #items> 
        </template>

        <template #footer> 
          <NuxtLayout name="centered"> 
            <button class="btn btn-active btn-error btn-sm text-white w-32">Add files</button> 
          </NuxtLayout>
        </template>
      </NuxtLayout>
    </template>

  <!-- main      --> 
    <template #theheader>
      <HeaderDashboardHeader></HeaderDashboardHeader>
    </template>

    <template #main-body>

    </template>

</NuxtLayout>
</template>