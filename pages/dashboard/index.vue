<script setup lang='ts'>
import { themeChange } from 'theme-change'

  onMounted(() => themeChange(false));

  definePageMeta({
    layout: false,
    middleware: 'index',
    pageTransition: true,

  });

  useHead({
    titleTemplate: 'Dashboard | FireDrive',
  });

  const displayBorders = 1

</script>

<!-- -- template -- --> 

<template>
<NuxtLayout name="dashboard-layout">

  <!-- main      --> 
    <template #theheader>
      <MainHeader />
    </template>

    <template #main-body>
      <NuxtLayout name="main-body-content-layout">
        <template #main>
          <MainBodyContent />
        </template>

        <template #side>
          <MainBodySideContent />
        </template>
      </NuxtLayout>
    </template>

</NuxtLayout>
</template>