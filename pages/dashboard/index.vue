<script setup lang='ts'>
import OptionBox from '~~/components/Menu/OptionBox.vue';

  definePageMeta({
    layout: false,
    middleware: 'index',
    pageTransition: true,

  })

  useHead({
    titleTemplate: 'Dashboard | FireDrive',
  })

</script>

<!-- -- template -- --> 

<template>
<NuxtLayout name="dashboard-layout">

  <!-- left-menu      -->
    <template #left-menu>
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
    </template>

  <!-- main      --> 
    <template #theheader>
      <MainHeader />
    </template>

    <template #main-body>

    </template>

</NuxtLayout>
</template>