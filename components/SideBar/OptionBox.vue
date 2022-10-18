<script setup lang='ts'>
import { HomeIcon, StarIcon, DocumentIcon } from '@heroicons/vue/24/solid';

</script>

<!-- -- template -- -->
<template>
<div class="grid grid-cols-2 md:mx-7 gap-y-10 place-items-center">
    <SideBarButton btn-label="Dashboard" :icon="HomeIcon" />
    <SideBarButton btn-label="All files" :icon="DocumentIcon"  />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />
    <SideBarButton btn-label="Favorites" :icon="StarIcon" />

</div>
</template>